//import Item from "./Item/Item";
import React from "react";
import stockrecomendados from "../StockRecomendados/stockrecomendados";

import Card from 'react-bootstrap/Card';
import "../ItemList/ItemList.css";


const ItemList =({data=[]})=>{
    return (
    



    <div >

        <h3>Top recomendado</h3>
        
        {stockrecomendados.map ((film,prod)=>  {
        
        return (
    <div className="divCardMap"   key={prod} >



<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src=  {film.image} />
<Card.Body>
<Card.Text>{film.id}</Card.Text>
<Card.Title>{film.nombre}</Card.Title>
<Card.Text>{film.genero}</Card.Text>
<Card.Text>{film.precio}</Card.Text>
    
</Card.Body>









</Card>

    </div>




        )
        },
        console.log (stockrecomendados)
        )
        }

    
    </div>









    


    




    );
}
export default ItemList;