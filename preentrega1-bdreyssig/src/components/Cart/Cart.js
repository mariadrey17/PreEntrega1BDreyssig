import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <p> No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((item) => (
        <ItemCart key={item.id} item={item} />
      ))}
      <p className="totalcart"> Total:{totalCart()}</p>
    </>
  );
};
export default Cart;
