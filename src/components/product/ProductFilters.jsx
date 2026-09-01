import { Search, X } from "lucide-react";

const categories = [
  { label: "All", value: "all" },
  { label: "T-Shirts", value: "t-shirts" },
  { label: "Hoodies", value: "hoodies" },
  { label: "Outerwear", value: "outerwear" },
  { label: "Bottoms", value: "bottoms" },
];

const ProductFilters = ({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="border-y border-grit-black/20">
      <div className="flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => onCategoryChange(category.value)}
              className={`shrink-0 px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase transition-colors ${
                activeCategory === category.value
                  ? "bg-grit-black text-white"
                  : "border border-grit-black/20 hover:border-grit-black"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="flex items-center border-b border-grit-black/40 lg:w-72">
          <Search size={17} />

          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products"
            className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-grit-earth"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;