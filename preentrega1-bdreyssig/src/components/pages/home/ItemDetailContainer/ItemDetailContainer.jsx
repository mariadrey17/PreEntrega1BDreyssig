import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { getProductStock } from "../../../../datos/asynces/async"
import { useState } from "react";
import stockrecomendados from "../StockRecomendados/stockrecomendados"

const ItemDetailContainer =()=>{

const{id}=useParams(null);
const [stock ,setStock]=useState()

useEffect(()=>{
    getProductStock ('1')
    .then((response)=>{
        setStock(response)
    })

.catch(error=>{
    console.log (error)
})
}

)

/*return (
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

/*const ItemDetailContainer = () => {

    const[data,setData]=useState({});
    useEffect(()=>{const getData=  new Promise(resolve=>{setTimeout(()=>{resolve(stockrecomendados);} ,2000);
}  );

getData.then(res=>setData(res));

})
  /*const [stockrecomendados, setStockrecomendados] = useState();

  useEffect(() => {
    getProductStock("04").then((stockrecomendados) => {
      setStockrecomendados();
    });
  }, []);
  const { id } = useParams();
  console.log(id);
  if (!stockrecomendados)*/
    return (
      <div>
        Cargando .... espere en breve estará listo !
        <ItemDetail    id={stock.id}
          nombre={stock.nombre}
          genero={stock.genero}
          precio={stock.precio}
          image ={stock.image}
          categoryId={stock.categoryId} />
        <button>ver detalle</button>
      </div>
    );
};
export default ItemDetailContainer;