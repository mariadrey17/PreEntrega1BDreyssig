import { useParams } from 'react-router-dom';
import stockrecomendados from "../../StockRecomendados/stockrecomendados";
import Card from 'react-bootstrap/Card';

const ItemDetail =()=>({id,nombre, descripcion, categoryId,genero,precio})=>{

    return(
        <div>
         <ul>

          <li>{id}</li>
          <li>{nombre}</li>
          <li>{descripcion}</li>
          <li>{categoryId}</li>
          <li>{genero}</li>
          <li>{precio}</li>
         </ul>

        </div>
    )
}

export default ItemDetail;