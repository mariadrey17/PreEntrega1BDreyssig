import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import StockDeFilms from "./StockDeFilms/StockDeFilms";
import  stockfilms from "./StockDeFilms/stockfilms.json";


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


    <ItemCount initial ={0} StockDeFilms={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>
    
    <div>
        
        {
stockfilms.map ((film,prod)=>  {
        
        return (
    <div key={prod}>
        <p>{film.id}</p>
        <p>{film.nombre}</p>
        <p>{film.genero}</p>
        <p>{film.precio}</p>
    </div>




        )
        },
        console.log (stockfilms)
        )
        }

    
    </div>
    
    

    
    
    
    </div>

);

}

export default ItemListContainer;


