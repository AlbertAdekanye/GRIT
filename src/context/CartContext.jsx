import { createContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext(null);

const getInitialCart = () => {
  try {
    const savedCart = localStorage.getItem("grit-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart);

  useEffect(() => {
    localStorage.setItem("grit-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, size, color, quantity = 1) => {
    const cartId = `${product.id}-${size}-${color}`;

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.cartId === cartId,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          cartId,
          size,
          color,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (cartId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.cartId !== cartId),
    );
  };

  const updateQuantity = (cartId, quantity) => {
    if (quantity < 1) {
      removeFromCart(cartId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.cartId === cartId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalQuantity,
      subtotal,
    }),
    [cartItems, totalQuantity, subtotal],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};