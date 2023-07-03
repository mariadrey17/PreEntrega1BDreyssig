//creando estructura del itemcount
import React from "react";
import "./ItemCount.css";
import {useState} from "react";
import films from "../../../../../datos/peliculas";




const ItemCount = ({ initial, onAdd }) => {
    const [counter, setCount] = useState(initial);
  
    const decrease = () => {
      setCount(counter - 1);
    };
  
    const increase = () => {
      setCount(counter + 1);
    };
  
    const [goToCart, setGoToCart] = useState(false);
  
    const [itemCount, setItemCount] = useState(0);
  
    const handleAddToCart = () => {
      onAdd(counter)
      setGoToCart(true);
    };
  
    return (
      <div>
        <h3>Carrito</h3>
        <div className="counter">
          <button disabled={counter <= 0} onClick={decrease}>
            -
          </button>
  
          <button>
            <span>{counter}</span>
          </button>
  
          <button disabled={counter >= films} onClick={increase}>
            +
          </button>
  
          <div>
            <p>Contador: {itemCount}</p>
            {goToCart ? (
              <button>Terminar compra</button>
            ) : (
              <button onClick={handleAddToCart}>Agregar al carrito</button>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemCount;