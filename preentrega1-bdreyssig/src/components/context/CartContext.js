import React, { createContext, useState } from "react";

// Crea el contexto del carrito
export const CartContext = createContext();

// Crea el proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar una película al carrito
  const addToCart = (film) => {
    setCart([...cart, film]);
  };

  // Función para eliminar una película del carrito
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((film) => film.id !== id);
    setCart(updatedCart);
  };

  // Valor proporcionado por el proveedor del contexto
  const cartContextValue = {
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
