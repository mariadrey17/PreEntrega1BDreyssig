import { useParams } from "react-router-dom";


import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import React from "react";

const ItemDetail = ({image,nombre,precio,id, genero,categoryId,descripcion}) => {
 /* const { filmId } = useParams();
  const film = stockrecomendados.find((film) => film.id === filmId);

const [item,setItem]=useState(undefined);*/

    
  return (
    <div className="SectionFilm">
      <p> Este es el detalle del film </p>

      <ul>
        <li>{id}</li>
        <li>{nombre}</li>
        <li>{genero}</li>
        <li>{precio}</li>
        <li>{image}</li>
        <li>{categoryId}</li>
        <li>{descripcion}</li>
      </ul>
        
         
          
        
      <div>
        <ItemCount initial ={0} films={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>


        </div>
        
    
  


    </div>
  );
};
export default ItemDetail;
