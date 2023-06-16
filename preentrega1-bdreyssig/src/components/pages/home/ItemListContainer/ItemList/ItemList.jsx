//import Item from "./Item/Item";
import React from "react";
import stockrecomendados from "../../StockRecomendados/stockrecomendados";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';

import Button from "react-bootstrap/Button";
import Item from "./Item/Item";
import { useNavigate } from "react-router-dom";
import {Link}from "react-router-dom";

const ItemList =({data=[stockrecomendados]})=>{
    return (
    data.map(stockrecomendados=><Item key={stockrecomendados.id} info={stockrecomendados}/>)









    


    




    );
}
export default ItemList;