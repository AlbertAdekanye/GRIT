import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const LookBook = () => {
  return (
    <section className="bg-grit-cream px-5 py-20 text-grit-black sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-grit-red uppercase">
              Campaign 001
            </p>

            <h2 className="font-display text-6xl leading-[0.85] uppercase sm:text-8xl lg:text-9xl">
              Against
              <span className="block text-grit-red">the grain</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-grit-earth sm:text-base">
              A visual study of resistance, movement and identity. GRIT exists
              for people who choose their own direction.
            </p>

            <Link
              to="/lookbook"
              className="group mt-7 flex w-fit items-center gap-3 border-b border-grit-black pb-2 text-xs font-bold tracking-[0.18em] uppercase"
            >
              Explore the lookbook

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
          <div className="relative min-h-[600px] overflow-hidden bg-grit-stone sm:min-h-[760px]">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=85"
              alt="GRIT campaign model"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
              <p className="text-xs tracking-[0.25em] uppercase text-grit-tan">
                Lagos, Nigeria
              </p>

              <p className="mt-2 font-display text-4xl uppercase sm:text-6xl">
                Frame 001
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative min-h-[360px] overflow-hidden bg-grit-stone">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85"
                alt="GRIT editorial fashion campaign"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <span className="absolute left-5 top-5 bg-grit-black px-3 py-2 text-[10px] tracking-[0.2em] text-white uppercase">
                Frame 002
              </span>
            </div>

            <div className="flex min-h-[280px] flex-col justify-between bg-grit-burgundy p-6 text-grit-cream sm:p-8">
              <span className="text-xs tracking-[0.25em] text-grit-tan uppercase">
                GRIT Manifesto
              </span>

              <blockquote className="font-display text-5xl leading-[0.9] uppercase sm:text-6xl">
                “Walk through what was meant to stop you.”
              </blockquote>

              <p className="text-xs tracking-[0.2em] text-white/60 uppercase">
                Collection 001 · MMXXVI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookBook;