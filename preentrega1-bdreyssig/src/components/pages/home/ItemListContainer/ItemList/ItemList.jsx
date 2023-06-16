//import Item from "./Item/Item";
import React from "react";
import stockrecomendados from "../../StockRecomendados/stockrecomendados";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';

import Button from "react-bootstrap/Button";
import Item from "./Item/Item";
import { useNavigate } from "react-router-dom";
import {Link}from "react-router-dom";

const ItemList =({data=[]})=>{

    const Navegar=useNavigate()
    return (

        <div>
             <div>

            {data.map(stockrecomendados=><Item key={stockrecomendados.id} info={stockrecomendados}/>)}</div>



    

    <div >

        <h3>Top recomendado</h3>
        
        {stockrecomendados.map ((film,prod)=>  {
        
        return (
    <div className="divCardMap"   key={prod} >


  <Container>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src=  {film.image} />
<Card.Body>
<Card.Text>{film.id}</Card.Text>
<Card.Title>{film.nombre}</Card.Title>
<Card.Text>{film.genero}</Card.Text>
<Card.Text>{film.descripcion}</Card.Text>
<Card.Text>{film.precio}</Card.Text>
<Link className="ver-mas" to={`/detalle/${Item.id}`}>Ver detalle </Link>
</Card.Body>









</Card>
</Container>
    </div>




        )
        },
        console.log (stockrecomendados)
        )
        }

    
    </div>

      
   
        

    
   </div>









    


    




    );
}
export default ItemList;