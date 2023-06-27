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
            <div>

            data.map(films=><Item key={films.id} info={films}/>)
            </div>
 


<div>

<h2>Películas:</h2>
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            {films.title} - ${film.price}
            {cart.find((item) => item.id === film.id) ? (
              <button onClick={() => removeFromCart(film.id)}>
                Remover del carrito
              </button>
            ) : (
              <button onClick={() => addToCart(film)}>Agregar al carrito</button>
            )}
          </li>
        ))}
      </ul>



</div>





</div>






    


    




    );
}
export default ItemList;