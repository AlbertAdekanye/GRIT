import { products } from "../src/data/products.js";

const FREE_DELIVERY_THRESHOLD = 100000;
const DELIVERY_FEE = 5000;

const calculateExpectedTotal = (items = []) => {
  const subtotal = items.reduce((total, item) => {
    const product = products.find(
      (productItem) => productItem.id === item.id,
    );

    if (!product) {
      throw new Error("Unknown product in transaction.");
    }

    const quantity = Number(item.quantity);

    if (!Number.isInteger(quantity) || quantity < 1) {
      throw new Error("Invalid product quantity.");
    }

    return total + product.price * quantity;
  }, 0);

  const deliveryFee =
    subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;

  return subtotal + deliveryFee;
};

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({
      message: "Method not allowed.",
    });
  }

  const { reference } = request.query;

  if (!reference) {
    return response.status(400).json({
      message: "Payment reference is required.",
    });
  }

  try {
    const paystackResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(
        reference,
      )}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      },
    );

    const result = await paystackResponse.json();

    if (!paystackResponse.ok || !result.status) {
      return response.status(502).json({
        message: result.message || "Unable to verify payment.",
      });
    }

    const transaction = result.data;

    if (transaction.status !== "success") {
      return response.status(400).json({
        verified: false,
        status: transaction.status,
        message: "Payment was not successful.",
      });
    }

    const items = transaction.metadata?.items || [];
    const expectedTotal = calculateExpectedTotal(items);
    const expectedAmountInKobo = expectedTotal * 100;

    if (transaction.amount !== expectedAmountInKobo) {
      return response.status(400).json({
        verified: false,
        message: "Payment amount does not match the order.",
      });
    }

    return response.status(200).json({
      verified: true,
      reference: transaction.reference,
      amount: transaction.amount / 100,
      customer: transaction.metadata?.customer,
      items,
    });
  } catch (error) {
    return response.status(500).json({
      verified: false,
      message: error.message || "Payment verification failed.",
    });
  }
}