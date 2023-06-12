//import Item from "./Item/Item";
import React from "react";
import stockrecomendados from "../../StockRecomendados/stockrecomendados";

import Card from 'react-bootstrap/Card';

import Item from "./Item/Item";


const ItemList =({data=[]})=>{
    return (
    data.map(stockrecomendados=><Item key={stockrecomendados.id} info={stockrecomendados}/>)





      
   
        

    
   









    


    




    );
}
export default ItemList;
    









    


    



