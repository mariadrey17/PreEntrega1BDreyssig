import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";

import { useState } from "react";

import ItemCount from "./ItemCount/ItemCount";

const ItemDetailContainer =()=>{

    const{id}=useParams();
    const [stock ,setStock]=useState({})
    
    useEffect(()=>{
        getProductStock (id)
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
            <p>Cargando .... espere en breve estará listo !</p>
            <ItemDetail    id={stock.id}
              nombre={stock.nombre}
              titulo={stock.titulo}
              genero={stock.genero}
              descripcion={stock.descripcion}
              precio={stock.precio}
              image ={stock.image}
              categoryId={stock.categoryId} />
            
    
    
    
            <div>
            <ItemCount initial ={0} stockrecomendados={6} onAdd={(counter=> console.log('cantidad agregada',counter))}/>
            
    
        </div>
          </div>
        );
    };
    export default ItemDetailContainer;