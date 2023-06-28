import React, { createContext, useState } from "react";
import films from "../../datos/peliculas";
import Item from "../pages/home/ItemListContainer/ItemList/Item/Item";

import { useContext } from "react";
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

  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((films) => (
        <Item key={films.id} info={films} />
      ))}
      <h2>Películas:</h2>
      <ul>
        <li>
          {films.title} - ${films.price}
          {cart.find((films) => films.id === films.id) ? (
            <button onClick={() => removeFromCart(films.id)}>
              Remover del carrito
            </button>
          ) : (
            <button onClick={() => addToCart(films)}>Agregar al carrito</button>
          )}
        </li>
      </ul>
    </div>
  );
};
