import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const query = searchTerm.trim();

    if (!query) return;

    navigate(`/shop?search=${encodeURIComponent(query)}`);

    setSearchTerm("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-grit-black px-5 text-grit-cream sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex h-20 items-center justify-between border-b border-white/15">
          <span className="font-display text-4xl tracking-[0.08em]">
            GRIT
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={26} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex min-h-[60vh] flex-col justify-center"
        >
          <label
            htmlFor="site-search"
            className="text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase"
          >
            Search the collection
          </label>

          <div className="mt-6 flex items-center border-b border-white/40">
            <input
              ref={inputRef}
              id="site-search"
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="WHAT ARE YOU LOOKING FOR?"
              className="min-w-0 flex-1 bg-transparent py-5 font-display text-4xl uppercase outline-none placeholder:text-white/20 sm:text-7xl"
            />

            <button
              type="submit"
              aria-label="Submit search"
              className="ml-5 transition-colors hover:text-grit-tan"
            >
              <Search size={28} />
            </button>
          </div>

          <p className="mt-5 text-xs text-white/40">
            Try “hoodie”, “jacket” or “core tee”.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SearchOverlay;