import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2349058647535";

const Shipping = () => {
  return (
    <main className="bg-grit-cream text-grit-black">
      <section className="bg-grit-black px-5 py-20 text-grit-cream sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
            Order information
          </p>

          <h1 className="mt-5 font-display text-[clamp(5rem,15vw,13rem)] leading-[0.75] uppercase">
            Shipping
          </h1>

          <p className="mt-10 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Everything you need to know about receiving your GRIT order
            within Nigeria.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[300px_1fr]">
          <aside>
            <p className="text-xs font-semibold tracking-[0.25em] text-grit-red uppercase">
              Shipping policy
            </p>

            <p className="mt-5 text-sm leading-7 text-grit-earth">
              Last updated September 2026
            </p>
          </aside>

          <div className="space-y-12">
            <article className="border-b border-grit-black/20 pb-12">
              <span className="text-xs font-bold text-grit-red">
                01
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Delivery timeline
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-grit-earth">
                GRIT orders are delivered nationwide within 5–10 business
                days after the order has been confirmed. Weekends and public
                holidays are not included in this estimate.
              </p>
            </article>

            <article className="border-b border-grit-black/20 pb-12">
              <span className="text-xs font-bold text-grit-red">
                02
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Delivery charges
              </h2>

              <div className="mt-6 overflow-hidden border border-grit-black/20">
                <div className="flex justify-between gap-5 border-b border-grit-black/20 p-5 text-sm">
                  <span>Orders below ₦100,000</span>
                  <strong>₦5,000</strong>
                </div>

                <div className="flex justify-between gap-5 p-5 text-sm">
                  <span>Orders of ₦100,000 or more</span>
                  <strong className="text-grit-red">
                    Free delivery
                  </strong>
                </div>
              </div>
            </article>

            <article className="border-b border-grit-black/20 pb-12">
              <span className="text-xs font-bold text-grit-red">
                03
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Order tracking
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-grit-earth">
                Customers will receive an order confirmation after payment.
                GRIT may contact you by phone or WhatsApp when your order has
                been dispatched or when additional delivery information is
                required.
              </p>
            </article>

            <article className="border-b border-grit-black/20 pb-12">
              <span className="text-xs font-bold text-grit-red">
                04
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Delivery information
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-grit-earth">
                Customers are responsible for providing a complete and
                accurate delivery address and an active phone number. Extra
                delivery costs caused by incorrect or incomplete information
                may be charged to the customer.
              </p>
            </article>

            <article>
              <span className="text-xs font-bold text-grit-red">
                05
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Delayed orders
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-grit-earth">
                Delivery may occasionally be affected by courier delays,
                weather, public holidays or circumstances outside our
                control. Contact GRIT if your order has not arrived after the
                estimated delivery period.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-3 bg-grit-black px-7 py-4 text-xs font-bold tracking-[0.16em] text-white uppercase transition-colors hover:bg-green-600"
              >
                <MessageCircle size={18} />
                Contact GRIT
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shipping;