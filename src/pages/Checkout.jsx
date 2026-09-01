import { useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  LoaderCircle,
  MessageCircle,
} from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { formatCurrency } from "../utils/formatCurrency";
import { generateWhatsAppLink } from "../utils/generateWhatsAppLink";

const FREE_DELIVERY_THRESHOLD = 100000;

const inputStyles =
  "w-full border border-grit-black/25 bg-transparent px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-grit-earth/60 focus:border-grit-black";

const Checkout = () => {
  const { cartItems, subtotal } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const deliveryFee =
    subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : 5000;

  const total = subtotal + deliveryFee;

  const whatsappLink = generateWhatsAppLink({
    cartItems,
    subtotal,
    deliveryFee,
    total,
  });

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handlePayment = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/initialize-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          customer: form,
          cartItems: cartItems.map((item) => ({
            id: item.id,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
          })),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to start payment.",
        );
      }

      window.location.href = result.authorizationUrl;
    } catch (paymentError) {
      setError(paymentError.message);
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-grit-cream px-5 py-12 text-grit-black sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1280px]">
        <Link
          to="/cart"
          className="mb-10 flex w-fit items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase"
        >
          <ArrowLeft size={16} />
          Return to bag
        </Link>

        <div className="grid gap-14 lg:grid-cols-[1fr_420px]">
          <section>
            <p className="text-xs font-semibold tracking-[0.3em] text-grit-red uppercase">
              Secure checkout
            </p>

            <h1 className="mt-3 font-display text-7xl leading-none uppercase sm:text-9xl">
              Checkout
            </h1>

            <form
              id="checkout-form"
              onSubmit={handlePayment}
              className="mt-12"
            >
              <div className="border-b border-grit-black/20 pb-10">
                <h2 className="font-display text-4xl uppercase">
                  Contact
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-xs font-semibold uppercase"
                    >
                      Full name
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className={inputStyles}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputStyles}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold uppercase"
                    >
                      Phone number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className={inputStyles}
                      placeholder="+234..."
                    />
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <h2 className="font-display text-4xl uppercase">
                  Delivery
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="mb-2 block text-xs font-semibold uppercase"
                    >
                      Address
                    </label>

                    <input
                      id="address"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      className={inputStyles}
                      placeholder="Street address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-xs font-semibold uppercase"
                    >
                      City
                    </label>

                    <input
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      className={inputStyles}
                      placeholder="Lagos"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="mb-2 block text-xs font-semibold uppercase"
                    >
                      State
                    </label>

                    <input
                      id="state"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      required
                      className={inputStyles}
                      placeholder="Lagos State"
                    />
                  </div>
                </div>
              </div>
            </form>
          </section>

          <aside className="h-fit bg-grit-black p-6 text-grit-cream sm:p-8 lg:sticky lg:top-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-grit-tan uppercase">
              Order summary
            </p>

            <div className="mt-7 max-h-80 space-y-5 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.cartId}
                  className="flex gap-4 border-b border-white/15 pb-5"
                >
                  <div className="h-24 w-20 shrink-0 overflow-hidden bg-grit-stone">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase">
                      {item.name}
                    </p>

                    <p className="mt-2 text-[10px] text-white/50">
                      {item.color} / {item.size} / Qty {item.quantity}
                    </p>

                    <p className="mt-3 text-xs font-semibold">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-4 border-y border-white/15 py-6 text-sm">
              <div className="flex justify-between">
                <span className="text-white/55">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/55">Delivery</span>
                <span>
                  {deliveryFee === 0
                    ? "Free"
                    : formatCurrency(deliveryFee)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-bold uppercase">
                Total
              </span>

              <span className="text-xl font-bold">
                {formatCurrency(total)}
              </span>
            </div>

            {error && (
              <p className="mt-5 bg-red-950 px-4 py-3 text-xs text-red-200">
                {error}
              </p>
            )}

            <button
              type="submit"
              form="checkout-form"
              disabled={isLoading}
              className="mt-7 flex w-full items-center justify-center gap-3 bg-grit-cream px-6 py-4 text-xs font-bold tracking-[0.16em] text-grit-black uppercase transition-colors hover:bg-grit-tan disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <LoaderCircle size={18} className="animate-spin" />
                  Connecting
                </>
              ) : (
                <>
                  <CreditCard size={18} />
                  Pay with Paystack
                </>
              )}
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-3 border border-white/30 px-6 py-4 text-xs font-bold tracking-[0.16em] uppercase transition-colors hover:bg-green-600"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Checkout;