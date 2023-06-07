import { useParams } from 'react-router-dom';
import {stockfilms} from '../../ItemListContainer/StockDeFilms/stockfilms.json';


function ItemDetail() {
const { id } = useParams();
const stockfilms= stockfilms.filter(stockfilms => stockfilms.id === id);

return (
<div>
    <h1>Detalles de la película</h1>
    {stockfilms ? (
    <div>
        <h2>{stockfilms.nombre}</h2>
        <p>{stockfilms.genero}</p>
        <p>Precio: {stockfilms.precio}</p>
        </div>
    ) : (
        <p>Película no encontrada.</p>
    )}
    </div>
);
}

export default ItemDetail;