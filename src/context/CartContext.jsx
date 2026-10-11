
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    let savedCart = localStorage.getItem('dokkana-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function saveCart(newCart) {
    setCart(newCart);
    localStorage.setItem('dokkana-cart', JSON.stringify(newCart));
  }

  function addToCart(product) {
    let foundProduct = cart.find((item) => item.id === product.id);

    if (foundProduct) {
      let newCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      saveCart(newCart);
    } else {
      saveCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    saveCart(cart.filter((item) => item.id !== id));
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) return;

    let newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );

    saveCart(newCart);
  }

  function clearCart() {
    saveCart([]);
  }

  let cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  let totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
