import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const BrandStatement = () => {
  return (
    <section className="overflow-hidden bg-grit-black text-grit-cream">
      {/* Moving-style banner */}
      <div className="overflow-hidden border-y border-white/15 py-4">
        <div className="flex w-max items-center gap-8 whitespace-nowrap font-display text-3xl tracking-wider text-grit-tan sm:text-5xl">
          <span>BUILT FROM PRESSURE</span>
          <span>✦</span>
          <span>MADE FOR THE RELENTLESS</span>
          <span>✦</span>
          <span>BUILT FROM PRESSURE</span>
          <span>✦</span>
          <span>MADE FOR THE RELENTLESS</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
            Our philosophy
          </p>

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
            GRIT is not just what you wear. It is the strength you carry into
            every challenge.
          </p>
        </div>

        <div>
          <h2 className="font-display text-[clamp(4rem,9vw,9rem)] leading-[0.85] uppercase">
            Pressure does not
            <span className="block text-grit-red">break us.</span>
            It reveals us.
          </h2>

          <div className="mt-10 flex flex-col gap-7 border-t border-white/20 pt-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-sm leading-7 text-white/65 sm:text-base">
              Designed in Nigeria for people who refuse to stop, settle or
              disappear. Every piece is a reminder that struggle can become
              strength.
            </p>

            <Link
              to="/about"
              className="group flex w-fit items-center gap-3 border-b border-grit-cream pb-2 text-xs font-bold tracking-[0.18em] uppercase transition-colors hover:border-grit-tan hover:text-grit-tan"
            >
              Discover our story

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;