import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100svh_-_112px)] overflow-hidden bg-grit-black text-grit-cream">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=85"
        alt="Model wearing streetwear"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

      {/* Side text */}
      <p className="absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] font-semibold tracking-[0.35em] uppercase lg:block">
        Lagos · Nigeria · MMXXVI
      </p>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh_-_112px)] max-w-[1440px] flex-col justify-end px-5 pb-8 sm:px-8 sm:pb-12 lg:pb-16">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-grit-tan uppercase">
              Collection 001
            </p>

            <h1 className="font-display text-[clamp(6rem,20vw,17rem)] leading-[0.7] tracking-[-0.02em]">
              GRIT
            </h1>

            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center">
              <p className="max-w-md text-sm leading-6 text-white/80 sm:text-base">
                Clothing shaped by pressure, persistence and the refusal to
                quit.
              </p>

              <Link
                to="/shop"
                className="group flex w-fit items-center gap-3 bg-grit-cream px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-grit-black uppercase transition-colors hover:bg-grit-tan"
              >
                Shop the drop

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          <a
            href="#new-drop"
            aria-label="Scroll to the new collection"
            className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/40 transition hover:border-grit-tan hover:text-grit-tan sm:flex"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>

      {/* Collection number */}
      <span className="absolute right-5 top-6 z-10 font-display text-2xl tracking-wider sm:right-8">
        01 / 04
      </span>
    </section>
  );
};

export default Hero;