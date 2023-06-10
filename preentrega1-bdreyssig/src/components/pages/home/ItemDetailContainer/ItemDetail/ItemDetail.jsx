import { useParams } from 'react-router-dom';
import stockrecomendados from "../../../../../data/stockrecomendados";
import Card from 'react-bootstrap/Card';

function ItemDetail() {

    const params=useParams()
const { id } = useParams();
const stockfilms= stockrecomendados.filter(stockrecomendados=> stockrecomendados.id===4);
console.log(stockfilms);  
return (
<div>

    <h1>Detalles de la película </h1>
    <p>pelicula con ID {params.id4} </p>




    {stockrecomendados.map ((film,prod)=>  {
        
        return (
    <div className="divCardMap"   key={prod} >



<Card style={{ width: '10rem' }}>
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
{/* {stockfilms ? (
    <div>
        <h2>{stockfilms.nombre}</h2>
        <p>{stockfilms.genero}</p>
        <p>Precio: {stockfilms.precio}</p>
        </div>
    ) : (
        <p>Película no encontrada.</p>
    )}*/}
    </div>
);
}

export default ItemDetail;