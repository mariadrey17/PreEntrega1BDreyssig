import React, { useEffect, useState } from "react";
import ItemCount from "../ItemDetailContainer/ItemCount/ItemCount"
import stockrecomendados from "../StockRecomendados/stockrecomendados"
import ItemList from "./ItemList/Item.List";

import { useParams } from "react-router-dom";


function ItemListContainer (props) {

const [data,setData]=useState([]);

const{id}=useParams

useEffect(()=>{
const getData =new Promise(resolve=>setTimeout(()=>{
    resolve(stockrecomendados)
},2000));
getData.then(res=>setData(res)  )
},[])



    
    /*const [stockrecomendados,setStockrecomendados]=useState([]);
    useEffect (()=>{
        getProductFilms().then(response=>{
            setStockrecomendados(response)
        })
        .catch(error=>console.error(error))
    },[])*/

 



return (
    <div>
        <h2>Hola {props.text}  </h2>


    


    <ItemCount initial ={0} stockrecomendados={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>



    <h3>Top de recomendados</h3>

    <ItemList data={data} />
    

    
    

    
    
    
    </div>

);

}

export default ItemListContainer;