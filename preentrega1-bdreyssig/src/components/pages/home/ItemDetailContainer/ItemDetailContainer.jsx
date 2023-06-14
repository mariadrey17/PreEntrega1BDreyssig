import { useEffect, useState } from "react";
import { getProductFilm, getProductStock } from "../../../../datos/asyncses/async";

import ItemDetail from "./ItemDetail/ItemDetail";
import stockrecomendados  from "../StockRecomendados/stockrecomendados";
import { useParams } from "react-router-dom";
import Item from "../ItemListContainer/ItemList/Item/Item";
import ItemCount from "./ItemCount/ItemCount";


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
const data= stockrecomendados.id
useEffect(()=>getProductStock(id).then(data=>{setItem(data)}))

return (
/*<div className="ItemDetailContainer">
<ItemDetail {...stockrecomendados}/>
</div>*/
<div>

<ItemCount initial ={0} stockrecomendados={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>

    <ItemDetail   data={data} />
</div>
);
}
export default ItemDetailContainer;