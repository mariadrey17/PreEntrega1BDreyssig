import { useEffect, useState } from "react";
import { getProductFilm, getProductStock } from "../../../../datos/asyncses/async";

import ItemDetail from "./ItemDetail/ItemDetail";
import stockrecomendados  from "../StockRecomendados/stockrecomendados";
import { useParams } from "react-router-dom";


const ItemDetailContainer =()=>{
/*const [stockrecomendados,setStockrecomendados]=useState(null)

useEffect(()=>{
    getProductFilm ('4')
    .then((response)=>{
        setStockrecomendados(response)
    })

.catch(error=>{
    console.log (error)
})
}

)*/

const {id}   =useParams()
const[item,setItem]=useState();

useEffect(()=>getProductStock(id).then(data=>{setItem(data)}))

return (
/*<div className="ItemDetailContainer">
<ItemDetail {...stockrecomendados}/>
</div>*/
<div>
    <ItemDetail  id={item.id}  nombre= {item.nombre}  descripcion={item.descripcion}    categoryId ={item.categoryId} genero={item.genero}   precio ={item.precio}  />
</div>
);
}
export default ItemDetailContainer;