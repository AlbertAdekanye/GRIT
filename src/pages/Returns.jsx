import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2349058647535";

const Returns = () => {
  return (
    <main className="bg-grit-cream text-grit-black">
      <section className="bg-grit-burgundy px-5 py-20 text-grit-cream sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
            Shop with confidence
          </p>

          <h1 className="mt-5 font-display text-[clamp(5rem,15vw,13rem)] leading-[0.75] uppercase">
            Returns
          </h1>

          <p className="mt-10 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            If something is not right, contact us within seven days of
            receiving your GRIT order.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[300px_1fr]">
          <aside>
            <p className="text-xs font-semibold tracking-[0.25em] text-grit-red uppercase">
              Return policy
            </p>

            <p className="mt-5 text-sm leading-7 text-grit-earth">
              Requests must be made within 7 days of delivery.
            </p>
          </aside>

          <div className="space-y-12">
            <article className="border-b border-grit-black/20 pb-12">
              <span className="text-xs font-bold text-grit-red">
                01
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Eligibility
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-grit-earth">
                A return request must be submitted within seven days of
                delivery. Items must be unworn, unwashed and unused, with all
                original tags and packaging still attached.
              </p>
            </article>

            <article className="border-b border-grit-black/20 pb-12">
              <span className="text-xs font-bold text-grit-red">
                02
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Non-returnable items
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-grit-earth">
                Items that have been worn, washed, damaged, altered, stained
                or returned without their original tags cannot be accepted.
                Items marked as final sale are also not eligible for return
                unless they arrive faulty.
              </p>
            </article>

            <article className="border-b border-grit-black/20 pb-12">
              <span className="text-xs font-bold text-grit-red">
                03
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Wrong or damaged orders
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-grit-earth">
                If your order arrives damaged or you receive the wrong item,
                contact GRIT immediately with your order reference and clear
                photographs. GRIT will cover the return cost when the error is
                ours.
              </p>
            </article>

            <article className="border-b border-grit-black/20 pb-12">
              <span className="text-xs font-bold text-grit-red">
                04
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Return delivery
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-grit-earth">
                For change-of-mind returns or incorrect size selections, the
                customer is responsible for the cost of sending the item back
                to GRIT. Do not send an item until your return request has
                been approved.
              </p>
            </article>

            <article className="border-b border-grit-black/20 pb-12">
              <span className="text-xs font-bold text-grit-red">
                05
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Refunds
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-grit-earth">
                Returned items will be inspected before a refund is approved.
                Approved refunds will be issued through the original payment
                method. Original delivery charges are not refundable unless
                the order was incorrect or damaged.
              </p>
            </article>

            <article>
              <span className="text-xs font-bold text-grit-red">
                06
              </span>

              <h2 className="mt-4 font-display text-5xl uppercase">
                Start a return
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-grit-earth">
                Send your name, order reference, reason for return and
                photographs of the item to GRIT through WhatsApp.
              </p>

              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  "Hello GRIT, I would like to request a return for my order.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-3 bg-grit-black px-7 py-4 text-xs font-bold tracking-[0.16em] text-white uppercase transition-colors hover:bg-green-600"
              >
                <MessageCircle size={18} />
                Request a return
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Returns;