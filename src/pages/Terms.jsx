import LegalPage from "../components/layout/LegalPage";

const sections = [
  {
    title: "Agreement",
    paragraphs: [
      "By accessing the GRIT website or placing an order, you agree to these terms together with our Shipping, Returns and Privacy policies. Do not use the store if you do not agree with them.",
    ],
  },
  {
    title: "Products",
    paragraphs: [
      "We aim to present product descriptions, colours, measurements and images accurately. Screen settings, lighting and manufacturing variations may cause minor differences. Temporary images or measurements will be replaced before commercial release.",
    ],
  },
  {
    title: "Prices",
    paragraphs: [
      "Prices are displayed in Nigerian naira. GRIT may update prices, promotions and availability at any time before an order is accepted. The price confirmed at checkout applies to the order.",
    ],
  },
  {
    title: "Orders",
    paragraphs: [
      "Submitting an order does not guarantee acceptance. GRIT may reject or cancel an order where a product is unavailable, payment cannot be verified, order information is incomplete or fraud is reasonably suspected.",
    ],
  },
  {
    title: "Payments",
    paragraphs: [
      "Online payments are processed through Paystack. An order is not considered paid solely because a customer reaches a confirmation page. GRIT verifies the transaction status and amount before fulfilling the order.",
    ],
  },
  {
    title: "WhatsApp orders",
    paragraphs: [
      "An order submitted through WhatsApp remains pending until GRIT confirms product availability, delivery details and payment arrangements.",
    ],
  },
  {
    title: "Delivery",
    paragraphs: [
      "Nationwide delivery is estimated at 5–10 business days. Delivery timelines may be affected by couriers, weather, public holidays or events outside GRIT’s reasonable control. Full details are provided in our Shipping Policy.",
    ],
  },
  {
    title: "Returns",
    paragraphs: [
      "Eligible return requests must be submitted within seven days of delivery. Products must satisfy the conditions stated in our Returns Policy. These terms do not remove rights that customers may have under applicable consumer-protection law.",
    ],
  },
  {
    title: "Customer responsibilities",
    items: [
      "Provide accurate contact, delivery and payment information",
      "Select the correct product, colour, size and quantity",
      "Keep account, payment and order information secure",
      "Inspect delivered products promptly",
      "Use the website lawfully and avoid fraudulent activity",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "The GRIT name, identity, website design, photographs, graphics, written content and original product designs belong to GRIT or their respective licensors. They may not be copied or used commercially without permission.",
    ],
  },
  {
    title: "Website availability",
    paragraphs: [
      "GRIT may update, suspend or discontinue parts of the website for maintenance, security or business reasons. We do not guarantee that every feature will always be available without interruption.",
    ],
  },
  {
    title: "Liability",
    paragraphs: [
      "Nothing in these terms excludes liability or consumer rights that cannot legally be excluded. To the extent permitted by law, GRIT is not responsible for indirect losses that were not reasonably foreseeable when an order was placed.",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Federal Republic of Nigeria. The parties should first attempt to resolve disputes directly and in good faith before pursuing other available remedies.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "GRIT may update these terms when its services, policies or legal obligations change. Updated terms will be posted on this page with a revised date.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these terms can be sent to GRIT through WhatsApp at +234 905 864 7535.",
    ],
  },
];

const Terms = () => {
  return (
    <LegalPage
      eyebrow="Store rules"
      title="Terms"
      introduction="These terms explain the rules that apply when visiting the GRIT website, purchasing products or using our services."
      sections={sections}
    />
  );
};

export default Terms;