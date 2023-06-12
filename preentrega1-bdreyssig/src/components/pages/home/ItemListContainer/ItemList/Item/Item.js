import React from "react";

const Item = ({ nombre, image, genero, precio }) => {
  return (
    <div className="filmCardContainer">
      <div className="filmCard">
        <p>{nombre} </p>
        <img src={image} className="filmCardImage" />
        <p>{genero}</p>
        <p>{precio}</p>
      </div>
    </div>
  );
};
export default Item;
