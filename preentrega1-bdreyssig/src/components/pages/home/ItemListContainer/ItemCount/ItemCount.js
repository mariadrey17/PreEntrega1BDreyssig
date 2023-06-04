//creando estructura del itemcount

import React from "react";
//import "./ItemCount.css";
import {useState} from "react";
import StockDeFilms from "../StockDeFilms/StockDeFilms";

export const ItemCount=({initial,stockfilms,onAdd})=>{
    const [count,setCount]=useState(initial);
    const decrease=()=>{
        setCount(count -1);
    }

    const increase=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <h3>Carrito</h3>
            <div className="counter">



    
            <button disabled={count<= 0} onClick={decrease}>-</button>
        
        <button >
        <span>{count}</span>
        </button>


            <button disabled={count>=StockDeFilms} onClick={increase}>+</button>
        

            <div>
                <button disabled={StockDeFilms<= 0} onClick={()=>onAdd(count)}>Agregar carrito </button>
            </div>


            </div>
    
    



        </div>

    
    );
}

export default ItemCount ;