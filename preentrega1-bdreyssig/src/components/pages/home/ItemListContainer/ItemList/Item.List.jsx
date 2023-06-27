//import Item from "./Item/Item";
import React from "react";
import films from "../../../../../datos/peliculas";

import Card from 'react-bootstrap/Card';
import "./ItemList.css";
import Item from "./Item/Item";


const ItemList =({data=[films]})=>{
    return (
    data.map(films=><Item key={films.id} info={films}/>)















    


    




    );
}
export default ItemList;