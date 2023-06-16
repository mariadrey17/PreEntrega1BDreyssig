import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/Item.List";
import { getCategories, getCategory, getProductFilms, getProductStock } from "../../../../datos/asynces/async";
import { NavLink, useParams } from "react-router-dom";
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
        getCategories(id).then((data) => {
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
            <h2>Hola {props.text}  </h2>
            <h3>Top de recomendados</h3>


            







            <div>


                
             
                <ItemList data={stockrecomendados} />
            </div>
        </div>
    );
}

export default ItemListContainer;