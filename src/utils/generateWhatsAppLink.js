const GRIT_WHATSAPP_NUMBER = "2349058647535";

export const generateWhatsAppLink = ({
  cartItems,
  subtotal,
  deliveryFee,
  total,
}) => {
  const productLines = cartItems
    .map(
      (item, index) =>
        `${index + 1}. ${item.name}
Size: ${item.size}
Colour: ${item.color}
Quantity: ${item.quantity}
Price: ₦${(item.price * item.quantity).toLocaleString("en-NG")}`,
    )
    .join("\n\n");

  const message = `Hello GRIT 👋

I would like to place an order:

${productLines}

Subtotal: ₦${subtotal.toLocaleString("en-NG")}
Delivery: ${
    deliveryFee === 0
      ? "Free"
      : `₦${deliveryFee.toLocaleString("en-NG")}`
  }
Total: ₦${total.toLocaleString("en-NG")}

Please help me complete my order.`;

  return `https://wa.me/${GRIT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;
};