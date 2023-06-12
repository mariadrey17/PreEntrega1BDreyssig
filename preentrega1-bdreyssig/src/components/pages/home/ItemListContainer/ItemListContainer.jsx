import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount"
import stockrecomendados from "../StockRecomendados/stockrecomendados"
import ItemList from "./ItemList/Item.List";
import { getCategories, getProductFilms } from "../../../../datos/asynces/async";
import { NavLink, useParams } from "react-router-dom";


import categories from "../../../../datos/Categories/categories";
function ItemListContainer (props) {

const [data,setData]=useState([]);

const{id}=useParams

useEffect(()=>{
const getData =new Promise(resolve=>setTimeout(()=>{
    resolve(stockrecomendados)
},2000));
getData.then(res=>setData(res)  )
},[])


;
const [stockrecomendados, setStockrecomendados]=useState([]);
const [categories,SetCategories]=useState([]);

useEffect(()=>{
    getProductFilms().then((data)=>{
        setStockrecomendados(data);
    });
    getCategories().then ((data)=>{
        SetCategories(data);
    })
})
    
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

  
    
   
    <div>

 <nav>
<ul>


    {categories.map((category)=>(

<li>
<NavLink to = {`/category/${category.id}`}>{category.nombre} </NavLink>
</li>


    ))}

</ul>

 </nav>

 <ItemList data={data} />

    </div>
    

    
    
    
    </div>

);

}

export default ItemListContainer;