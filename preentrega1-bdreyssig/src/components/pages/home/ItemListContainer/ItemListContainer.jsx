import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/Item.List";
import { getCategories, getProductFilms, getProductStock } from "../../../../datos/asynces/async";
import { NavLink, useParams } from "react-router-dom";
import categories from "../../../../datos/Categories/categories";


function ItemListContainer(props) {
    const { id } = useParams();

    const [stockrecomendados, setStockrecomendados] = useState([]);
    const [categories, SetCategories] = useState([]);

    useEffect(() => {
        getProductFilms().then((data) => {
            setStockrecomendados(data);
        });
        getCategories().then((data) => {
            SetCategories(data);
        })
    }, [])


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


            
    <h2>Categorías</h2>

 
    <nav>
                    <ul>
                        {categories.map((category) => (
                            <li>
                                <NavLink to={`/category/${category.id}`}>{category.nombre} </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>






            <div>


                
             
                <ItemList data={stockrecomendados} />
            </div>
        </div>
    );
}

export default ItemListContainer;