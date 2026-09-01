import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { formatCurrency } from "../utils/formatCurrency";
import { CreditCard, MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "../utils/generateWhatsAppLink";

const FREE_DELIVERY_THRESHOLD = 100000;

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
  } = useCart();

  const amountRemaining = Math.max(
    FREE_DELIVERY_THRESHOLD - subtotal,
    0,
  );

  const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : 5000;
  const total = subtotal + deliveryFee;

  const whatsappLink = generateWhatsAppLink({
    cartItems,
    subtotal,
    deliveryFee,
    total,
  });

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-grit-cream px-5 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-grit-red uppercase">
          Your bag
        </p>

        <h1 className="mt-4 font-display text-7xl uppercase sm:text-9xl">
          Empty
        </h1>

        <p className="mt-4 max-w-sm text-sm leading-7 text-grit-earth">
          Your bag is waiting for something built with GRIT.
        </p>

        <Link
          to="/shop"
          className="mt-8 flex items-center gap-3 bg-grit-black px-7 py-4 text-xs font-bold tracking-[0.16em] text-white uppercase transition-colors hover:bg-grit-red"
        >
          <ArrowLeft size={17} />
          Start shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-grit-cream px-5 py-14 text-grit-black sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex items-end justify-between border-b border-grit-black/20 pb-8">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-grit-red uppercase">
              Your selection
            </p>

            <h1 className="font-display text-7xl leading-none uppercase sm:text-9xl">
              Bag
            </h1>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="text-xs font-semibold text-grit-earth underline transition-colors hover:text-grit-red"
          >
            Clear bag
          </button>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1fr_400px]">
          <section>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <article
                  key={item.cartId}
                  className="grid grid-cols-[110px_1fr] gap-5 border-b border-grit-black/15 pb-6 sm:grid-cols-[160px_1fr]"
                >
                  <Link
                    to={`/shop/${item.id}`}
                    className="aspect-[3/4] overflow-hidden bg-grit-stone"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-semibold tracking-[0.2em] text-grit-red uppercase">
                            {item.category}
                          </p>

                          <Link to={`/shop/${item.id}`}>
                            <h2 className="mt-1 text-sm font-bold uppercase sm:text-base">
                              {item.name}
                            </h2>
                          </Link>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.cartId)}
                          aria-label={`Remove ${item.name}`}
                          className="text-grit-earth transition-colors hover:text-grit-red"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="mt-4 space-y-1 text-xs text-grit-earth">
                        <p>Colour: {item.color}</p>
                        <p>Size: {item.size}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div className="flex items-center border border-grit-black/25">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.cartId,
                              item.quantity - 1,
                            )
                          }
                          className="p-2.5"
                          aria-label="Reduce quantity"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="min-w-7 text-center text-xs font-bold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.cartId,
                              item.quantity + 1,
                            )
                          }
                          className="p-2.5"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <p className="text-sm font-bold">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Link
              to="/shop"
              className="mt-8 flex w-fit items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase"
            >
              <ArrowLeft size={16} />
              Continue shopping
            </Link>
          </section>

          <aside className="h-fit bg-grit-black p-6 text-grit-cream sm:p-8 lg:sticky lg:top-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-grit-tan uppercase">
              Order summary
            </p>

            <h2 className="mt-3 font-display text-5xl uppercase">
              Total
            </h2>

            <div className="mt-8 space-y-5 border-y border-white/15 py-6 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-white/60">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-white/60">Delivery</span>
                <span>
                  {deliveryFee === 0
                    ? "Free"
                    : formatCurrency(deliveryFee)}
                </span>
              </div>
            </div>

            {amountRemaining > 0 ? (
              <p className="mt-5 text-xs leading-5 text-grit-tan">
                Add {formatCurrency(amountRemaining)} more to receive free
                delivery.
              </p>
            ) : (
              <p className="mt-5 text-xs text-grit-tan">
                You have unlocked free delivery.
              </p>
            )}

            <div className="mt-7 flex items-center justify-between">
              <span className="text-sm font-bold uppercase">
                Order total
              </span>

              <span className="text-xl font-bold">
                {formatCurrency(total)}
              </span>
            </div>

            <div className="mt-8 space-y-3">
              <Link
                to="/checkout"
                className="flex w-full items-center justify-center gap-3 bg-grit-cream px-6 py-4 text-xs font-bold tracking-[0.18em] text-grit-black uppercase transition-colors hover:bg-grit-tan"
              >
                <CreditCard size={18} />
                Pay online
              </Link>
                      
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-3 border border-white/30 px-6 py-4 text-xs font-bold tracking-[0.18em] text-white uppercase transition-colors hover:border-green-500 hover:bg-green-600"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
            </div>

            <p className="mt-4 text-center text-[10px] text-white/40">
              Taxes and final delivery costs are calculated at checkout.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;