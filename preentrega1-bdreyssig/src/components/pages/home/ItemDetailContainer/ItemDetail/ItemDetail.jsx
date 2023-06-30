import { useParams } from "react-router-dom";
import { useContext } from "react";

import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";

const ItemDetail = ({image,nombre,precio,id, genero,categoryId}) => {


const [quantityAdded,setQuantityAdded]=useState(0)
const {addItem}=useContext(CartContext)

const handleOnAdd=(quantity)=>{
  setQuantityAdded(quantity)
  const film = {id,nombre ,precio}
  addItem(film,quantityAdded)
  
}

    
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
</ul>
  
<Link to={`/cart`}>ir al carrito</Link> 
         
       
        
      <div>
        {/*<ItemCount initial ={0} films={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>*/}
        <ItemCount initial ={0} films={6} onAdd={{handleOnAdd}}/>

        </div>
        
    


    </div>
  );
};
export default ItemDetail;


