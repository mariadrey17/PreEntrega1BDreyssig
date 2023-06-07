import React, { useEffect, useState } from "react";
import stockfilms from "../StockDeFilms/stockfilms.json";
import { Link } from "react-router-dom";

function ItemList () {

            

return (

<div>
<h1>Elegi tu pelicula favorita </h1>
<ul>
        {stockfilms.map(stockfilms=> (
        <li key={stockfilms.id}>
        <Link to={`/stockfilms/${stockfilms.id}`}>{stockfilms.nombre}</Link>
        </li>
        ))}
    </ul>
    </div>
);
    



}

export default ItemList;