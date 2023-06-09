import { useEffect, useState } from "react";
import { getProductFilm } from "../../Comp2/async";
import { StockDeFilms } from "../StockDeFilms";
import ItemDetail from "./ItemDetail/ItemDetail";


const ItemDetailContainer =()=>{
const [StockDeFilms,setStockDeFilms]=useState(null)

useEffect(()=>{
    getProductFilm ('01')
    .then((response)=>{
        setStockDeFilms(response)
    })

.catch(error=>{
    console.log (error)
})
}

)

return (
<div className="ItemDetailContainer">
<ItemDetail {...StockDeFilms}/>
</div>
);
}
export default ItemDetailContainer;