import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/Item.List";
import { getFilmsByCategory,getFilms } from "../../../../datos/peliculas";
import { NavLink, useParams } from "react-router-dom";

import films from "../../../../datos/peliculas";
import { element } from "prop-types";




    function ItemListContainer(props) {
    
        const [films, setFilms] = useState([]);
        const { id } = useParams();
    
        useEffect(() => {
            if (id) {
                getFilmsByCategory(id).then((data) => {
                    setFilms(data);
    
                })
            }
            else {
                getFilms().then((data)=>{
                    setFilms(data);
                })
            }
    
        },[id])
          
                 

    //aca para el id de categorias

    /*const {categoryId}=useParams
    useEffect(()=>{

        getProductStock(categoryId).then((data)=>{
          setStockrecomendados(data);
        })
       /* getCategories ().then((films)=>{
          setCategories(films);
        })*/
     /* },[categoryId])
      
      useEffect(()=>{
      
        getCategories ().then((data)=>{
          SetCategories(data);
        })
      
      },[])*/

    return (
        <div>
            <h2>Hola {props.text}  </h2>
            <h3>Top de recomendados</h3>


  






            <div>


                
             
                <ItemList data={films} />
            </div>
        </div>
    );
}

export default ItemListContainer;