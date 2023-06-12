import { useParams } from "react-router-dom";
import stockrecomendados from "../../StockRecomendados/stockrecomendados";
import Item from "../../ItemListContainer/ItemList/Item/Item";
import ItemCount from "../../ItemCount";
import { useState } from "react";
import React from "react";

const ItemDetail = ({image,nombre,precio,id}) => {
 /* const { filmId } = useParams();
  const film = stockrecomendados.find((film) => film.id === filmId);

const [item,setItem]=useState(undefined);*/

    
  return (
    <div className="SectionFilm">
      <p> Este es el detalle del film </p>

      
        <Item
          id={"04"}
          nombre={"Aquaaman"}
          genero={"Aventura"}
          precio={"2000"}
          image ={"https://i.blogs.es/36305a/captura-de-pantalla-2022-09-06-a-las-13.08.10/450_1000.jpeg"}
          categoryId={"peliculas"}
          
         />
        
    
      {/*<div className="CardBody">
        <ul>
          {id}
          {nombre} {genero}
          {precio} {categoryId}
  </ul>
        <div className="CardDiv">
          <h2 className="CardTitle"> {nombre}</h2>
        </div>

        <div>
          <p>{genero}</p>
        </div>

        <div>
          <p>{price}</p>
  </div>
      </div>*/}


      {/*<div className="contieneDetalle">
        <image src={image} alt=""/>
        <h1>{nombre}</h1>
        <p>{precio}</p>
        <p>{id}</p>
    </div>*/}


    </div>
  );
};
export default ItemDetail;


