import React from "react";
import { useParams } from "react-router-dom";
//import ItemCount from "../ItemCount";
import stockrecomendados from "../../../../data/stockrecomendados";
import { useState,useEffect } from "react";
import { getProductFilm, getProductFilms } from "../../../../data/async";
//import ItemList from "./ItemList/Item.List";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Home from "../Home";

export const ItemListContainer=()=>{

const {id}=useParams();
const [stockrecomendados,setStockrecomendados]=useState([]);
useEffect(()=>{
getProductFilms().then((data)=>{
setStockrecomendados(data);
})
},[]

);

//return <div>{JSON.stringify(stockrecomendados)}</div>


{stockrecomendados.map ((film,prod)=>  {
        
    return (

<>
<div>
    <Home/>
</div>


<div className="divCardMap"   key={prod} >



{/*<Card style={{ width: '10rem' }}>
<Card.Img variant="top" src=  {film.image} />
<Card.Body>
<Card.Text>{film.id}</Card.Text>
<Card.Title>{film.nombre}</Card.Title>
<Card.Text>{film.genero}</Card.Text>
<Card.Text>{film.precio}</Card.Text>

    </Card.Body>*/}




    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> {film.nombre}</Card.Title>
        <Card.Text>
          {film.id}
        </Card.Text>
          
        <Card.Text>
        {film.genero}
          </Card.Text>
          
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>








{/*</Card>*/}

</div>

</>


    );
    },
    //console.log (stockrecomendados)
    );
    }
        


}
export default ItemListContainer;