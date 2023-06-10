import React from "react";
import { useParams } from "react-router-dom";
//import ItemCount from "../ItemCount";
import stockrecomendados from "../../../../data/stockrecomendados";
import { useState,useEffect } from "react";
import {  getProductFilms } from "../../../../data/async";
//import ItemList from "./ItemList/Item.List";

import Home from "../Home";

export const ItemListContainer=()=>{
    const {id}=useParams();
    const [stockrecomendados,setStockrecomendados]=useState([]);
    useEffect(()=>{
    getProductFilms().then((data)=>{
    setStockrecomendados(data);
    })
    },[]
    
    );

//return <div>{JSON.stringify(stockrecomendados)}</div>


return (
<div>
<div>
    <Home/>
</div>










</div>

)

}


export default ItemListContainer;