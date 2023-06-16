import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/Item.List";
import { getCategories, getProductFilms, getProductStock } from "../../../../datos/asynces/async";
import { NavLink, useParams } from "react-router-dom";
import categories from "../../../Categories/categories";


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