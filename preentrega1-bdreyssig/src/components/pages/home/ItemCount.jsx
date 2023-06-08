//creando estructura del itemcount
import React from "react";
import "./ItemCount.css";
import {useState} from "react";
import StockDeRecomendados from "../../DataPeliSerie/StockDeRecomendados";





export const ItemCount=({initial,StockDeRecomendados,onAdd, })=>{
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


            <button disabled={counter>=StockDeRecomendados} onClick={increase}>+</button>
        

            <div>
                <button disabled={StockDeRecomendados<= 0} onClick={()=>onAdd(counter)}>Agregar carrito </button>
            </div>


            </div>
    
    



        </div>

    
    );
}

export default ItemCount ;