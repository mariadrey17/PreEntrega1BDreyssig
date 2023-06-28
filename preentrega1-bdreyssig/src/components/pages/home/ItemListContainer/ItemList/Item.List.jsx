//import Item from "./Item/Item";
import React from "react";
import films from "../../../../../datos/peliculas";

import Card from 'react-bootstrap/Card';
import "./ItemList.css";
import Item from "./Item/Item";
import { CartContext } from "../../../../context/CartContext";
import { useContext } from "react";


const ItemList =({data=[films]})=>{

    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    return (
      <div>
   

      data.map(films=><Item key={films.id} info={films}/>)

         
    
        
 




<h2>Películas:</h2>
      <ul>
     <li> 
            {films.title} - ${films.price}
            {cart.find((item) => item.id === films.id) ? (
              <button onClick={() => removeFromCart(films.id)}>
                Remover del carrito
              </button>
            ) : (
              <button onClick={() => addToCart(films)}>Agregar al carrito</button>
            )}
          </li>
        
      </ul>



</div>












    


    




    );
}
export default ItemList;