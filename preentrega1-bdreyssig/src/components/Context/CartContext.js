import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (film, quantity) => {
    if (isInCart(film.id)) {
      let updatedCart = cart.map((item) => {
        if (item.id === film.id) {
          return { ...item, cantidad: item.cantidad + quantity };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...film, cantidad: quantity }]);
    }
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const someItemsCart = () => {
    return cart.reduce((acc, item) => (acc += item.cantidad), 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => (acc += item.cantidad * item.precio), 0);
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, totalCart, someItemsCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
