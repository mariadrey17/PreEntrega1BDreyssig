import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount/ItemDetailContainer/ItemCount";
import stockrecomendados from "../../../../data/stockrecomendados"
import ItemList from "./ItemList";

import { getProductFilms } from "./Comp2/async";


function ItemListContainer (props) {


    
    const [stockrecomendados,setStockrecomendados]=useState([]);
    useEffect (()=>{
        getProductFilms().then(response=>{
            setStockrecomendados(response)
        })
        .catch(error=>console.error(error))
    },[])

 



return (
    <div>
        <h2>Hola {props.text}  </h2>

     
    


    <ItemCount initial ={0} stockrecomendados={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>
    <ItemList  />
    

    
    

    
    
    
    </div>

);

}

export default ItemListContainer;