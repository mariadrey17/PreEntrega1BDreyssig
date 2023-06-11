import { useEffect, useState } from "react";
import { getProductFilm } from "../../../../data/async";

import ItemDetail from "./ItemDetail/ItemDetail";
import stockrecomendados  from "../../../../data/stockrecomendados";
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

const {}   =useParams()

return (
/*<div className="ItemDetailContainer">
<ItemDetail {...stockrecomendados}/>
</div>*/
);
}
export default ItemDetailContainer;