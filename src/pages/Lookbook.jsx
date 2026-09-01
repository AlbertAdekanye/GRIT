import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
    alt: "GRIT campaign portrait",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
    alt: "GRIT editorial model",
    className: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=85",
    alt: "GRIT streetwear collection",
    className: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85",
    alt: "GRIT outerwear campaign",
    className: "",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
    alt: "GRIT fashion detail",
    className: "",
  },
];

const Lookbook = () => {
  return (
    <main className="bg-grit-black text-grit-cream">
      <section className="px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
            Campaign 001 · MMXXVI
          </p>

          <h1 className="mt-5 font-display text-[clamp(5.5rem,17vw,16rem)] leading-[0.7] uppercase">
            Against
            <span className="block text-grit-red">the grain</span>
          </h1>

          <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-2">
            <p className="max-w-md text-sm leading-7 text-white/60">
              A visual study of resistance, identity and the people who choose
              to keep moving in their own direction.
            </p>

            <p className="text-xs tracking-[0.2em] text-white/40 uppercase md:text-right">
              Lagos · Nigeria
              <br />
              Collection 001
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-[1440px] auto-rows-[350px] gap-4 md:grid-cols-3 md:auto-rows-[400px]">
          {images.map((image, index) => (
            <figure
              key={image.id}
              className={`group relative overflow-hidden bg-grit-stone ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-100" />

              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <span className="text-xs tracking-[0.2em] uppercase">
                  Frame 00{index + 1}
                </span>

                <span className="text-[10px] text-white/60">
                  GRIT / 2026
                </span>
              </figcaption>
            </figure>
          ))}

          <div className="flex flex-col justify-between bg-grit-burgundy p-7 md:col-span-2 sm:p-10">
            <span className="text-xs tracking-[0.25em] text-grit-tan uppercase">
              The GRIT manifesto
            </span>

            <blockquote className="max-w-4xl font-display text-5xl leading-[0.9] uppercase sm:text-7xl">
              “The road was never meant to be easy. Neither were we.”
            </blockquote>

            <p className="text-xs tracking-[0.2em] text-white/45 uppercase">
              Built from pressure
            </p>
          </div>
        </div>
      </section>

      <section className="bg-grit-cream px-5 py-20 text-center text-grit-black sm:px-8 sm:py-28">
        <p className="text-xs font-semibold tracking-[0.3em] text-grit-red uppercase">
          Shop the campaign
        </p>

        <h2 className="mt-5 font-display text-7xl uppercase sm:text-9xl">
          Collection 001
        </h2>

        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-3 bg-grit-black px-8 py-4 text-xs font-bold tracking-[0.18em] text-white uppercase transition-colors hover:bg-grit-red"
        >
          <ArrowLeft size={17} className="rotate-180" />
          Explore the drop
        </Link>
      </section>
    </main>
  );
};

export default Lookbook;