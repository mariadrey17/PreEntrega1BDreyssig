
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { getFilmsById } from "../../../../services/firebase/firebaseConfig";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";







const ItemDetailContainer = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFilmsById(id);
        setFilm(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const onAdd = (counter) => {
    addToCart(film, counter);
  };

  return (
    <div className="ItemDetailContainer">
      <ItemDetail film={film}   
       nombre={film.nombre}
          genero={film.genero}
          precio={film.precio}
          image ={film.image}
          categoryId={film.categoryId} />
     
    </div>
  );
};

export default ItemDetailContainer;





/*const ItemDetailContainer =()=>{
  const [film ,setFilm]=useState({})
  const{id}=useParams();
useEffect(()=>{
    getFilmsById(id)
    .then((response)=>{
      setFilm(response)
    })
.catch(error=>{
    console.log (error)
})
},[id])

const {addToCart}=useContext(CartContext)
const onAdd=(counter)=>{
  addToCart(film,counter);

}*/   //este primer fragmento funciona

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
   //este funcionaparte 2 del primer fragmento sigue aca 
   /*return (
      <div>
        Cargando .... espere en breve estará listo !
        <ItemDetail    id={film.id}
          nombre={film.nombre}
          genero={film.genero}
          precio={film.precio}
          image ={film.image}
          categoryId={film.categoryId} />
        <button>comprar</button>



      </div>
    );
};
export default ItemDetailContainer;*/