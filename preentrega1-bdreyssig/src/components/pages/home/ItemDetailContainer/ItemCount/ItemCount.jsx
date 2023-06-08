//creando estructura del itemcount
import React from "react";
import "./ItemCount.css";
import {useState} from "react";
import StockRecomendados from "../../StockRecomendados/stockrecomendados";





export const ItemCount=({initial,stockrecomendados,onAdd, })=>{
    const [counter,setCount]=useState(initial);
    const decrease=()=>{
        setCount(counter -1);
    }

    const increase=()=>{
        setCount(counter+1);
    }
    return (
        <div>
            <h3>Carrito</h3>
            <div className="counter">



    
            <button disabled={counter<= 0} onClick={decrease}>-</button>
        
        <button >
        <span>{counter}</span>
        </button>


            <button disabled={counter>=stockrecomendados} onClick={increase}>+</button>
        

            <div>
                <button disabled={stockrecomendados<= 0} onClick={()=>onAdd(counter)}>Agregar carrito </button>
            </div>


            </div>
    
    



        </div>

    
    );
}

export default ItemCount ;