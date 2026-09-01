import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import ProductFilters from "../components/product/ProductFilters";
import { products } from "../data/products";

const normalizeCategory = (category) => {
  return category.toLowerCase().replaceAll(" ", "-");
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }

    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" ||
        normalizeCategory(product.category) === activeCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="min-h-screen bg-grit-cream text-grit-black">
      <section className="bg-grit-black px-5 py-20 text-grit-cream sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
            Collection 001
          </p>

          <h1 className="font-display text-[clamp(6rem,18vw,16rem)] leading-[0.7]">
            SHOP
          </h1>

          <p className="mt-8 max-w-lg text-sm leading-7 text-white/60">
            Functional streetwear shaped by pressure and built for movement.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-grit-red uppercase">
                Shop all
              </p>

              <h2 className="mt-2 font-display text-5xl uppercase sm:text-7xl">
                The collection
              </h2>
            </div>

            <p className="text-xs text-grit-earth">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          <ProductFilters
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {filteredProducts.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <h2 className="font-display text-5xl uppercase">
                Nothing found
              </h2>

              <p className="mt-3 text-sm text-grit-earth">
                Try another category or search term.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchTerm("");
                  setSearchParams({});
                }}
                className="mt-7 border border-grit-black px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-colors hover:bg-grit-black hover:text-white"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Shop;