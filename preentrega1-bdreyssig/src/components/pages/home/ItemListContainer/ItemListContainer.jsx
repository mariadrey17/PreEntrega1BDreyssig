//import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import stockrecomendados from "../StockDeRecomendados/stockrecomendados";
import { useState,useEffect } from "react";
import ItemList from "./ItemList/Item.List";


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
    
        
        const [data,setData]=useState([]);
        useEffect(()=>{
            const getDataFilms=new Promise(resolve=>{
                setTimeout(()=>{
                resolve (stockrecomendados);
                },2000);
            });
            getDataFilms.then(res=>setData (res));

        })      


return (
    <div>
        <h2>Hola {props.text}  </h2>


    <ItemCount initial ={0} stockrecomendados={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>
    

    <div>
        <ItemList/>
    </div>
    {/*<div>
        
        {
stockrecomendados.map ((film,prod)=>  {
        
        return (
    <div  className="divCardMap" key={prod}>
        <p className="">{film.id}</p>
        <p>{film.nombre}</p>
        <p>{film.genero}</p>
        <p>{film.precio}</p>
        {/*<img>{film.image}</p>*/}
        {/*<img src={film.image} alt="" />
    </div>




        )
        },
        console.log (stockrecomendados)
        )
        }

    
    </div>*/}
    
    

    
    
    
    </div>

);

}

export default ItemListContainer;