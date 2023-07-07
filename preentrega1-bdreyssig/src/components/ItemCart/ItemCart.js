import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ItemCart = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="ItemCart">
      <img src={item.image} />
      <div className="partedelosdatosdelitemcart">
        <p>Titulo: {item.titulo} </p>
        <p>Cantidad: {item.cantidad} </p>
        <p>Precio : {item.precio} </p>
        <p>Total: ${item.cantidad * item.precio} </p>
        <button onClick={() => removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
