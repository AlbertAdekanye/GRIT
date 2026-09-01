import { useState } from "react";
import { ArrowRight } from "lucide-react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-grit-red px-5 py-20 text-grit-cream sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
            GRIT community
          </p>

          <h2 className="max-w-5xl font-display text-[clamp(4.5rem,11vw,11rem)] leading-[0.78] uppercase">
            Stay close to
            <span className="block text-grit-black">the movement.</span>
          </h2>
        </div>

        <div>
          <p className="max-w-md text-sm leading-7 text-white/75">
            Get early access to new drops, limited releases, campaign stories
            and private GRIT events.
          </p>

          {submitted ? (
            <div className="mt-8 border-t border-grit-cream pt-5">
              <p className="text-sm font-semibold tracking-[0.15em] uppercase">
                You’re on the list.
              </p>

              <p className="mt-2 text-xs text-white/65">
                Welcome to the GRIT community.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <div className="flex border-b border-grit-cream">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="min-w-0 flex-1 bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/50"
                />

                <button
                  type="submit"
                  className="flex items-center gap-2 px-2 text-xs font-bold tracking-[0.15em] uppercase transition-colors hover:text-grit-tan"
                >
                  Join
                  <ArrowRight size={18} />
                </button>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-white/50">
                By subscribing, you agree to receive marketing emails from
                GRIT. You can unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;