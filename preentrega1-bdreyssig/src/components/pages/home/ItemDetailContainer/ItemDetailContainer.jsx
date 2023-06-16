import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { getCategories, getProductStock } from "../../../../datos/asynces/async";
import { useState } from "react";
import stockrecomendados from "../StockRecomendados/stockrecomendados"
import ItemCount from "./ItemCount/ItemCount";

const ItemDetailContainer =()=>{

    const{id}=useParams();
    const [stock ,setStock]=useState({})
    
    useEffect(()=>{
        getProductStock (1)
        .then((response)=>{
            setStock(response)
        })
    
    .catch(error=>{
        console.log (error)
    })
    }
    
    )
    

   
   
        return (
          <div>
            Cargando .... espere en breve estará listo !
            <ItemDetail    id={stock.id}
              nombre={stock.nombre}
              titulo={stock.titulo}
              genero={stock.genero}
              precio={stock.precio}
              image ={stock.image}
              categoryId={stock.categoryId} />
            <button>ver detalle</button>
    
    
    
            <div>
            <ItemCount initial ={0} stockrecomendados={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>
    
    
            </div>
          </div>
        );
    };
    export default ItemDetailContainer;