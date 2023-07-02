import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, addItem, removeItem, clear, someItemsCart, totalCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay Items en el carrito</h1>
        <Link to="/" className="option">
          Top Recomendados
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - quantity: {item.cantidad}
                <button onClick={() => removeItem(item.id)}>eliminar</button>
              </li>
            ))}
          </ul>
          <Link to="/checkout" className="option">
            Checkout
          </Link>
          <p>Total: {totalCart()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
