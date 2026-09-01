import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { products } from "../data/products";
import { formatCurrency } from "../utils/formatCurrency";
import useCart from "../hooks/useCart";
import SizeGuide from "../components/product/SizeGuide";

const sizes = ["S", "M", "L", "XL"];

const ProductDetails = () => {
  const { productId } = useParams();

  const product = products.find((item) => item.id === productId);

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || "",
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const { addToCart } = useCart();

  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-grit-cream px-5 text-center">
        <p className="text-xs tracking-[0.25em] text-grit-red uppercase">
          Product unavailable
        </p>

        <h1 className="mt-4 font-display text-7xl uppercase">
          Not found
        </h1>

        <Link
          to="/shop"
          className="mt-8 border border-grit-black px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-colors hover:bg-grit-black hover:text-white"
        >
          Return to shop
        </Link>
      </main>
    );
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

const handleAddToBag = () => {
  if (!selectedSize) {
    setMessage("Please select a size.");
    return;
  }

  addToCart(
    product,
    selectedSize,
    selectedColor,
    quantity,
  );

  setMessage(`${quantity} × ${product.name} added to your bag.`);
};

  return (
    <main className="bg-grit-cream text-grit-black">
      <section className="px-5 py-8 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-[1440px]">
          <Link
            to="/shop"
            className="mb-8 flex w-fit items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase"
          >
            <ArrowLeft size={16} />
            Back to shop
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="aspect-[3/4] overflow-hidden bg-grit-stone">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center lg:py-10">
              <p className="text-xs font-semibold tracking-[0.25em] text-grit-red uppercase">
                {product.category}
              </p>

              <h1 className="mt-4 font-display text-6xl leading-[0.9] uppercase sm:text-8xl">
                {product.name}
              </h1>

              <p className="mt-5 text-xl font-semibold">
                {formatCurrency(product.price)}
              </p>

              <p className="mt-8 max-w-lg text-sm leading-7 text-grit-earth">
                A premium GRIT essential designed for comfort, movement and
                everyday resilience. Built with a structured silhouette and
                finished with intentional detailing.
              </p>

              <div className="mt-10 border-t border-grit-black/20 pt-7">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold tracking-[0.18em] uppercase">
                    Colour
                  </p>

                  <p className="text-xs text-grit-earth">{selectedColor}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`border px-5 py-3 text-xs font-semibold uppercase transition-colors ${
                        selectedColor === color
                          ? "border-grit-black bg-grit-black text-white"
                          : "border-grit-black/25 hover:border-grit-black"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold tracking-[0.18em] uppercase">
                    Select size
                  </p>

                  <button
                    type="button"
                    onClick={() => setSizeGuideOpen(true)}
                    className="text-xs text-grit-earth underline transition-colors hover:text-grit-red"
                  >
                    Size guide
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => {
                        setSelectedSize(size);
                        setMessage("");
                      }}
                      className={`border py-3 text-xs font-bold transition-colors ${
                        selectedSize === size
                          ? "border-grit-black bg-grit-black text-white"
                          : "border-grit-black/25 hover:border-grit-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <div className="flex items-center border border-grit-black/30">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) => Math.max(1, current - 1))
                    }
                    className="p-4"
                    aria-label="Reduce quantity"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="min-w-8 text-center text-sm font-semibold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="p-4"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToBag}
                  className="flex flex-1 items-center justify-center gap-3 bg-grit-black px-6 py-4 text-xs font-bold tracking-[0.15em] text-white uppercase transition-colors hover:bg-grit-red"
                >
                  <ShoppingBag size={18} />
                  Add to bag
                </button>
              </div>

              {message && (
                <p
                  className={`mt-4 text-xs font-semibold ${
                    selectedSize ? "text-green-700" : "text-grit-red"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-grit-black/15 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-10 font-display text-6xl uppercase sm:text-8xl">
            You may also like
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
            <SizeGuide
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        category={product.category}
      />
    </main>
  );
};

export default ProductDetails;