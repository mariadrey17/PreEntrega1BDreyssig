import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalCart } = useContext();

  if (cart.length === 0) {
    return (
      <>
        <p> No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return;

  {
    cart.map((item) => <ItemCart key={item.info.titulo} item={item} />);
  }

  <p> Total:{totalCart()}</p>;
};
export default Cart;
