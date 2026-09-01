import { products } from "../src/data/products.js";

const FREE_DELIVERY_THRESHOLD = 100000;
const DELIVERY_FEE = 5000;

const calculateOrder = (cartItems) => {
  let subtotal = 0;
  const verifiedItems = [];

  for (const cartItem of cartItems) {
    const product = products.find(
      (item) => item.id === cartItem.id,
    );

    if (!product) {
      throw new Error(`Invalid product: ${cartItem.id}`);
    }

    const quantity = Number(cartItem.quantity);

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
      throw new Error(`Invalid quantity for ${product.name}`);
    }

    subtotal += product.price * quantity;

    verifiedItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      size: cartItem.size,
      color: cartItem.color,
    });
  }

  const deliveryFee =
    subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;

  return {
    verifiedItems,
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee,
  };
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { email, customer, cartItems } = request.body;

    if (!email || !Array.isArray(cartItems) || cartItems.length === 0) {
      return response.status(400).json({
        message: "Email and cart items are required.",
      });
    }

    const order = calculateOrder(cartItems);

    const protocol = request.headers["x-forwarded-proto"] || "http";
    const host = request.headers.host;
    const siteUrl =
      process.env.SITE_URL || `${protocol}://${host}`;

    const paystackResponse = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: order.total * 100,
          currency: "NGN",
          callback_url: `${siteUrl}/payment/verify`,
          metadata: {
            customer,
            items: order.verifiedItems,
            subtotal: order.subtotal,
            deliveryFee: order.deliveryFee,
          },
        }),
      },
    );

    const result = await paystackResponse.json();

    if (!paystackResponse.ok || !result.status) {
      return response.status(502).json({
        message: result.message || "Unable to initialize payment.",
      });
    }

    return response.status(200).json({
      authorizationUrl: result.data.authorization_url,
      reference: result.data.reference,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || "Unable to initialize payment.",
    });
  }
}