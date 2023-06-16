import { useParams } from "react-router-dom";
import stockrecomendados from "../../StockRecomendados/stockrecomendados";

import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({image,nombre,titulo,precio,id, genero,categoryId}) => {
 /* const { filmId } = useParams();
  const film = stockrecomendados.find((film) => film.id === filmId);

const [item,setItem]=useState(undefined);*/



  return (
    <div className="SectionFilm">
      <p> Este es el detalle del film </p>

      <ul>
        <li>{id}</li>
        <li>{nombre}</li>
        <li>{titulo}</li>
        <li>{genero}</li>
        <li>{precio}</li>
        <li>{image}</li>
        <li>{categoryId}</li>
        <li></li>
      </ul>
        
         
      {/*<div>
      {
            goToCart
          
        
             :<ItemCount initial ={0} datafilms={6} onAdd={onAdd}/>}  ?<Link to= '/Cart'>Terminar compra</Link> 

            {/*<ItemCount initial ={0} stockrecomendados={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>
    
    
            </div>   */}
        
  


    </div>
  );
};
export default ItemDetail;