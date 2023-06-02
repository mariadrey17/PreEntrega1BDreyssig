import React from "react";
import ItemCount from "./ItemCount/ItemCount";
import StockDeFilms from "./StockDeFilms";


function ItemListContainer (props) {

    const onAdd= (quantity)=>{
    console.log('comprastes ${quantity} unidades');
    }
return (
    <div>
        <h2>Hola {props.text}  </h2>


    <ItemCount initial ={0} StockDeFilms={6} onAdd={onAdd}/>
    </div>

);

}

export default ItemListContainer;


