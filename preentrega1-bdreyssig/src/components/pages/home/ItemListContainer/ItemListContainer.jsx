//import React, { useEffect, useState } from "react";
import ItemCount from "../ItemDetailContainer/ItemCount/ItemCount";
import  stockrecomendados from "../StockRecomendados/stockrecomendados";
import ItemList from "../ItemList/ItemList"


function ItemListContainer (props) {

    /*const onAdd= (quantity)=>{
    console.log('cantidad agregada' .quantity);
    }*/

    const resultadoSeleccion=(peliculaSeleccionada)=>{
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            peliculaSeleccionada===true?resolve ("hay stock"):reject ("no hay stock");
        }
        
        )
        })
        }
        
        const valor= true;
        console.log (resultadoSeleccion(valor));
            


return (
    <div>
        <h2>Hola {props.text}  </h2>


    <ItemCount initial ={0} stockrecomendados={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>

    <ItemList/>
    

    
    
    
    </div>

);

}

export default ItemListContainer;