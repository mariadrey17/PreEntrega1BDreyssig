import { useParams } from "react-router-dom";
import stockrecomendados from "../../StockRecomendados/stockrecomendados";

import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "../ItemDetail/ItemDetail.css";

const ItemDetail = ({image,nombre,titulo,precio,id, genero,descripcion,categoryId}) => {




  return (
    <div className="SectionFilm">
      <p> Este es el detalle del film </p>

      <ul>
        <li>{id}</li>
        <li>{nombre}</li>
        <li>{titulo}</li>
        <li>{genero}</li>
        <li>{descripcion}</li>
        <li>{precio}</li>
       {<img src="https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/79/66/86/20136104.jpg" alt="" /> }
        <li>{categoryId}</li>
        <li></li>
      </ul>
        
         
   
        
  


    </div>
  );
};
export default ItemDetail;