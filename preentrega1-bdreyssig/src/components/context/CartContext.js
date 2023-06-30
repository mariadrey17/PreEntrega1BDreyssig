import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (film, quantity) => {
    if (isInCart(film.id)) {
      let position = cart.findIndex((film) => film.id === film.id);
      cart[position].cantidad += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...film, cantidad: quantity }]);
    }
  };

  const removeItem = (id) => {
    const newObj = cart.filter((film) => film.id !== id);
    setCart([...newObj]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((film) => film.id === id);
  };

  const someItemsCart = () => {
    return cart.reduce((acc, film) => (acc += film.cantidad), 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, film) => (acc += film.cantidad * film.precio), 0);
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
