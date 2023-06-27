//import Item from "./Item/Item";
import React from "react";
import films from "../../../../../datos/peliculas";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';

import Button from "react-bootstrap/Button";
import Item from "./Item/Item";
import { useNavigate } from "react-router-dom";
import {Link}from "react-router-dom";

const ItemList =({data=[films]})=>{
    return (
    data.map(films=><Item key={films.id} info={films}/>)









    


    




    );
}
export default ItemList;