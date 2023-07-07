import { useParams } from "react-router-dom";
import { useContext } from "react";

import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../Context/CartContext";

const ItemDetail = ({image,titulo,precio,id, genero,categoryId}) => {


const [quantityAdded,setQuantityAdded]=useState(0)
const {addItem}=useContext(CartContext)

const handleOnAdd=(quantity)=>{
  setQuantityAdded(quantity)
  const film = {id,titulo ,precio}
  addItem(film,quantity)
  
}

    
  return (
    <div className="SectionFilm">
      <p className="detalleTitle"> Este es el detalle del film </p>

      <ul className="ulDetalle">
        <li className="detailDato">{id}</li>
        <li className="detailDato" >{titulo}</li>
        <li className="detailDato" >{genero}</li>
        <li className="detailDato" >{precio}</li>
        <img src= {image}/>
        <li className="detailDato" >{categoryId}</li>
</ul>
  
<Link to={`/cart`}>ir al carrito</Link> 
         
       
        
      <div>
        <ItemCount initial ={0} films={6} onAdd={handleOnAdd}/>


  </div>
  <br />
  <br />
  <br />
  <p className="paraLinks"> para comunicarte con nosotros  <Link  to ='/contacto'> ir a contacto</Link></p>
    


    </div>
  );
};
export default ItemDetail;







