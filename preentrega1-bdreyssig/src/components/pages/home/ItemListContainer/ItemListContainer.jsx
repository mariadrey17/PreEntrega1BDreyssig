import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import { getCategories, getCategory, getProductFilms, getProductStock } from "../../../../datos/asynces/async";
import { Link, NavLink, useParams } from "react-router-dom";
import categories from "../../../Categories/categories";
import getProductByCategory from "../../../../datos/asynces/async";

function ItemListContainer(props) {
    const { id } = useParams();

    const [stockrecomendados, setStockrecomendados] = useState([]);
    const [categories, SetCategories] = useState([]);

    useEffect(() => {
        getProductFilms().then((data) => {
            setStockrecomendados(data);
        });
        getProductByCategory(id).then((data) => {
            SetCategories(data);
        })
    }, [])
      // armando categorias

   /* useEffect(()=>{
     getCategory (1).then((stockrecomendados) => {
        setStockrecomendados(stockrecomendados);
    })},[id]);*/


 const data=stockrecomendados;
const {categoryId}=useParams()

 /*const estrenos = .filter((category) => category.name === 'estrenos');
 const peliculas = data.filter((category) => category.name === 'peliculas');
 const series = data.filter((category) => category.name === 'series');*/

   /* useEffect(() => {
        getProductByCategory(categoryId).then((data) => {
            setStockrecomendados(data);
        });
        getCategories(categoryId).then((data) => {
            SetCategories(data)
        })
    }, [])*/

    useEffect(() => {
        getProductFilms().then((data) => {
            setStockrecomendados(data);
        });
        getCategories(categoryId).then((data) => {
            SetCategories(stockrecomendados.categoryId);
        })
    }, [categoryId])
 


    return (
        <div>
            <div className="headerInicio">

            <header ><h2>Hola {props.text}</h2>
            <h3>Top Recomendados</h3>
            <p className="headerP"> Si queres ver mas peliculas y series  en cartelera click acá <Link to="category/peliculas" >ir a películas</Link> y para series click acá <Link to="category/series" >ir a Series</Link></p>
            
            </header>

            </div>
            
            


            

   





            <div>


                
             
                <ItemList data={stockrecomendados} />
            </div>
        </div>
    );
}

export default ItemListContainer;