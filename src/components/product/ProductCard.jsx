import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";

const ProductCard = ({ product }) => {
  return (
    <article className="group">
      <Link
        to={`/shop/${product.id}`}
        className="relative block aspect-[3/4] overflow-hidden bg-grit-stone"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

        {product.isNew && (
          <span className="absolute left-3 top-3 bg-grit-black px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white uppercase sm:left-4 sm:top-4">
            New
          </span>
        )}

        <span className="absolute bottom-4 right-4 hidden h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-grit-cream text-grit-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:flex">
          <ArrowUpRight size={18} />
        </span>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[9px] font-semibold tracking-[0.2em] text-grit-earth uppercase sm:text-[10px]">
            {product.category}
          </p>

          <Link to={`/shop/${product.id}`}>
            <h3 className="mt-1 text-xs font-semibold uppercase transition-colors hover:text-grit-red sm:text-sm">
              {product.name}
            </h3>
          </Link>
        </div>

        <p className="shrink-0 text-xs font-semibold sm:text-sm">
          {formatCurrency(product.price)}
        </p>
      </div>

      <p className="mt-1 text-[10px] text-grit-earth sm:text-xs">
        {product.colors.join(" / ")}
      </p>
    </article>
  );
};

export default ProductCard;