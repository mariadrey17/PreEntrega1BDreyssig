//import Item from "./Item/Item";
import React from "react";
import stockrecomendados from "../../../../../data/stockrecomendados";

import Card from 'react-bootstrap/Card';
import "./ItemList.css";
import Item from "./Item/Item";


const ItemList =({data=[]})=>{
    return (
   // data.map(stockrecomendados=><Item key={stockrecomendados.id} info={stockrecomendados}/>)



    <div >

        <h3>Top recomendado</h3>
        
        {stockrecomendados.map ((film,prod)=>  {
        
    <div className="divCardMap"   key={prod} >


<Item name={film.nombre} image={film.image } genero ={film.genero} precio={film.precio} id={film.id}/>


    </div>



        
        },
        //console.log (stockrecomendados)
        )
        }

    
    </div>









    


    




    );
}
export default ItemList;