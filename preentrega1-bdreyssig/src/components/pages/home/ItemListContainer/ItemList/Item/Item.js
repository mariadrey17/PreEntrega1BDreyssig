import React from "react";

const Item =({info})=> {
    return (
        <div className="filmCardContainer">
        <div className="filmCard"> 
        <p>{info.nombre} </p>
        <img src={info.image} className="filmCardImage"/>
        <p>{info.genero}</p>
        <p>{info.precio}</p>
        </div>

        </div>

    )
}
export default Item;