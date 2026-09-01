import LegalPage from "../components/layout/LegalPage";

const sections = [
  {
    title: "Information we collect",
    paragraphs: [
      "GRIT may collect information you provide when placing an order, contacting us, joining our mailing list or requesting a return.",
    ],
    items: [
      "Name, email address and telephone number",
      "Delivery and billing address",
      "Order details, sizes, colours and quantities",
      "Messages and customer-support correspondence",
      "Payment reference and transaction status",
    ],
  },
  {
    title: "How we use information",
    items: [
      "To process, deliver and manage orders",
      "To verify payments and prevent fraudulent transactions",
      "To communicate order and delivery updates",
      "To provide customer service and manage returns",
      "To send marketing messages when consent has been provided",
      "To improve the website, products and customer experience",
      "To comply with legal and regulatory obligations",
    ],
  },
  {
    title: "Payments",
    paragraphs: [
      "Online payments are processed by Paystack. GRIT does not directly collect or store complete card details. Paystack processes payment information according to its own privacy and security practices.",
    ],
  },
  {
    title: "Sharing information",
    paragraphs: [
      "GRIT only shares personal information when necessary to operate the store, complete an order or comply with the law.",
    ],
    items: [
      "Paystack for payment processing and verification",
      "Delivery and logistics providers",
      "Website hosting and technical service providers",
      "Regulators, law-enforcement bodies or professional advisers when legally required",
    ],
  },
  {
    title: "Cookies and local storage",
    paragraphs: [
      "The GRIT website may use browser storage and similar technologies to remember cart contents, provide essential functionality and improve the website. You can clear stored website data through your browser settings.",
    ],
  },
  {
    title: "Data retention",
    paragraphs: [
      "Personal information is kept only for as long as reasonably necessary to complete orders, maintain transaction records, resolve disputes, meet legal obligations and support legitimate business operations.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "Subject to applicable Nigerian data-protection law, you may request access to your personal information, ask for inaccurate information to be corrected, request deletion where appropriate, object to certain processing or withdraw consent for marketing.",
    ],
  },
  {
    title: "Data security",
    paragraphs: [
      "GRIT uses reasonable administrative and technical measures to protect personal information. However, no internet service or electronic storage method can guarantee absolute security.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "The GRIT store is not intended to knowingly collect personal information directly from children without appropriate parental or guardian involvement.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "For a privacy request or question, contact GRIT through WhatsApp at +234 905 864 7535. We may ask for information needed to verify your identity before completing a data request.",
    ],
  },
];

const Privacy = () => {
  return (
    <LegalPage
      eyebrow="Your information"
      title="Privacy"
      introduction="This notice explains how GRIT collects, uses, stores and shares personal information when you visit our website or place an order."
      sections={sections}
    />
  );
};

export default Privacy;