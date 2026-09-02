# GRIT

A bold, responsive e-commerce website for **GRIT**, a Nigerian streetwear brand built around resilience, pressure and purpose.

**Built from pressure. Worn with purpose.**

## Live Website

https://grit-pi.vercel.app

## Features

* Responsive editorial streetwear design
* Automatic hero-image slideshow
* Product catalogue and category filters
* Full-screen product search
* Product details with colour and size selection
* Interactive size guide
* Persistent shopping cart
* Quantity management and order summary
* Free-delivery calculation
* Secure Paystack checkout
* Server-side payment initialization and verification
* WhatsApp ordering and customer contact
* Related-product recommendations
* Lookbook and brand-story pages
* Shipping and return policies
* Privacy policy and terms
* Newsletter interface
* Social-sharing metadata
* Custom favicon
* Vercel Web Analytics
* Mobile navigation

## Technology

* React
* Vite
* Tailwind CSS
* React Router
* Lucide React
* Paystack
* Vercel Functions
* Vercel Analytics
* Browser Local Storage

## Project Structure

```text
GRIT/
├── api/
│   ├── initialize-payment.js
│   └── verify-payment.js
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── collections/
│   │   ├── lookbook/
│   │   └── about/
│   ├── favicon.svg
│   └── grit.jpg
├── src/
│   ├── components/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── product/
│   │   └── ui/
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   ├── collections.js
│   │   └── products.js
│   ├── hooks/
│   │   └── useCart.js
│   ├── pages/
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Getting Started

### Requirements

* Node.js
* npm
* Git
* A Paystack account
* A Vercel account

### Installation

Clone the repository and enter the project:

```bash
git clone https://github.com/AlbertAdekanye/GRIT
cd GRIT
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
PAYSTACK_SECRET_KEY=sk_test_your_paystack_secret_key
SITE_URL=http://localhost:3000
```

Never expose the Paystack secret key in frontend code or prefix it with `VITE_`.

For a Vercel deployment, add `PAYSTACK_SECRET_KEY` through:

```text
Project Settings → Environment Variables
```

Use a test secret key during development and only switch to a live key after completing production testing.

## Paystack Flow

The website uses a protected server-side payment flow:

1. The customer completes the checkout form.
2. The cart is sent to `/api/initialize-payment`.
3. Product prices are recalculated on the server.
4. Paystack creates a secure checkout session.
5. The customer completes payment.
6. Paystack redirects to `/payment/verify`.
7. `/api/verify-payment` confirms the transaction status and amount.
8. The success page is shown only after verification.

Never fulfil an order solely because the customer reaches the callback page. Always rely on successful server-side verification.

## Main Routes

```text
/                  Home
/shop              Product catalogue
/shop/:productId   Product details
/cart              Shopping cart
/checkout          Checkout
/payment/verify    Payment verification
/about             Brand story
/lookbook          Campaign lookbook
/contact           Contact
/shipping          Shipping policy
/returns           Return policy
/privacy           Privacy policy
/terms             Terms and conditions
```

## Product Images

Store product images inside a folder for each product:

```text
public/images/products/grit-core-tee/
├── cover.webp
├── front.webp
├── back.webp
└── detail.webp
```

Recommended formats:

* WebP for product and campaign images
* SVG for icons and the favicon
* JPEG or PNG at `1200 × 630px` for the social-sharing image

Use lowercase filenames without spaces.

## Product Data

Products are managed in:

```text
src/data/products.js
```

Example:

```js
{
  id: "grit-core-tee",
  name: "GRIT Core Tee",
  category: "T-Shirts",
  price: 35000,
  image: "/images/products/grit-core-tee/cover.webp",
  images: [
    "/images/products/grit-core-tee/cover.webp",
    "/images/products/grit-core-tee/front.webp",
    "/images/products/grit-core-tee/back.webp",
    "/images/products/grit-core-tee/detail.webp",
  ],
  colors: ["Black", "Cream"],
  sizes: ["S", "M", "L", "XL"],
  isNew: true,
}
```

## Shipping and Returns

* Nationwide delivery: 5–10 business days
* Standard delivery fee: ₦5,000
* Free delivery on orders of ₦100,000 or more
* Return requests must be submitted within seven days of delivery

See the Shipping and Returns pages for complete conditions.

## Deployment

The project is configured for Vercel.

Push changes to GitHub:

```bash
git add .
git commit -m "Update GRIT storefront"
git push origin main
```

Vercel will automatically build and deploy the latest commit.

## Analytics

Vercel Web Analytics is integrated using:

```jsx
import { Analytics } from "@vercel/analytics/react";
```

Traffic reports are available from the Analytics section of the Vercel dashboard after deployment.

## Social Sharing

The social-sharing image is stored at:

```text
public/grit.jpg
```

It is referenced through Open Graph and X/Twitter metadata in `index.html`.

## Brand

**GRIT**
Built from pressure.
Designed in Nigeria.

## License

All rights reserved.

The GRIT name, brand identity, original content, product designs and visual assets may not be copied or used commercially without permission.
