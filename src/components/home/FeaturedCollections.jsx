import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { collections } from "../../data/collections";

const FeaturedCollections = () => {
  return (
    <section className="bg-grit-stone px-5 py-20 text-grit-black sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-grit-red uppercase">
              Choose your armour
            </p>

            <h2 className="font-display text-6xl leading-none sm:text-8xl lg:text-9xl">
              Collections
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-grit-earth">
            Functional silhouettes and uncompromising details for those who
            move with intention.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/shop?collection=${collection.id}`}
              className={`group relative overflow-hidden bg-grit-black ${
                index === 0
                  ? "min-h-[600px] lg:row-span-2 lg:min-h-[820px]"
                  : "min-h-[400px]"
              }`}
            >
              <img
                src={collection.image}
                alt={`${collection.name} collection`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

              <span className="absolute left-5 top-5 text-xs font-semibold tracking-[0.25em] text-white/70 sm:left-7 sm:top-7">
                {collection.number}
              </span>

              <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition-colors group-hover:border-grit-tan group-hover:bg-grit-tan group-hover:text-grit-black sm:right-7 sm:top-7">
                <ArrowUpRight size={18} />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                <p className="mb-2 text-xs tracking-[0.2em] text-grit-tan uppercase">
                  {collection.description}
                </p>

                <h3 className="font-display text-6xl leading-none uppercase sm:text-7xl">
                  {collection.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;