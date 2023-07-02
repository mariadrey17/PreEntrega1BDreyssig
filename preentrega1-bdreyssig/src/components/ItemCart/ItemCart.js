import React, { useContext } from "react";

const ItemCart = ({ info }) => {
  const { removeItem } = useContext;
  return (
    <div className="ItemCart">
      <img src={info.image} />
      <div>
        <p>Titulo: {info.titulo} </p>
        <p>Cantidad: {info.cantidad} </p>
        <p>Precio : {info.precio} </p>
        <p>Total: {info.quantity} </p>
        <button onClick={() => removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
