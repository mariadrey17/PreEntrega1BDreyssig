import React from "react";
import { useParams } from "react-router-dom";
//import ItemCount from "../ItemCount";
import stockrecomendados from "../../../../data/stockrecomendados";
import { useState,useEffect } from "react";
import { getProductFilm, getProductFilms } from "../../../../data/async";
//import ItemList from "./ItemList/Item.List";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Home from "../Home";
import ItemList from "./ItemList/Item.List";

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


{stockrecomendados.map ((film,prod)=>  {
        
    return (

<>
<div>
    <Home/>
</div>


<div className="divCardMap"   key={prod} >

    <p></p>





<ItemList />


    









</div>

</>


    );
    },
    //console.log (stockrecomendados)
    );
    }
        


}
export default ItemListContainer;