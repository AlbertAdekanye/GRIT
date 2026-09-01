import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";

const NewDrop = () => {
  return (
    <section
      id="new-drop"
      className="bg-grit-cream px-5 py-20 text-grit-black sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-grit-red uppercase">
              Collection 001
            </p>

            <h2 className="font-display text-6xl leading-none sm:text-8xl lg:text-9xl">
              New Drop
            </h2>
          </div>

          <Link
            to="/shop"
            className="group hidden items-center gap-3 border-b border-grit-black pb-2 text-xs font-bold tracking-[0.16em] uppercase sm:flex"
          >
            View all
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link
          to="/shop"
          className="mt-12 flex items-center justify-center gap-3 border border-grit-black px-6 py-4 text-xs font-bold tracking-[0.16em] uppercase transition-colors hover:bg-grit-black hover:text-white sm:hidden"
        >
          View all products
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
};

export default NewDrop;