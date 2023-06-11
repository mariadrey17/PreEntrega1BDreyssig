import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { getProductStock } from "../../Comp2/async";
import { useState } from "react";
import stockrecomendados from "../../../../data/stockrecomendados"

/*const ItemDetailContainer =()=>{
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
export default ItemDetailContainer;*/

/*export const ItemDetailContainer =()=>{

    const [stockfilms,setStockfilms]=useState(null)

    useEffect(()=>{
    getProductFilmId =('1')
    .then ((response)=>{setStockfilms})
    })
    return (
        <ItemDetail/>
    );
}
export default ItemDetailContainer;*/

const ItemDetailContainer = () => {
  const [stockrecomendados, setStockrecomendados] = useState();

  useEffect(() => {
    getProductStock("04").then((stockfilms) => {
      setStockrecomendados();
    });
  }, []);
  const { id } = useParams();
  console.log(id);
  if (!stockfilms)
    return (
      <div>
        Cargando .... espere en breve estará listo !
        <ItemDetail />
        <button>ver detalle</button>
      </div>
    );
};
export default ItemDetailContainer;