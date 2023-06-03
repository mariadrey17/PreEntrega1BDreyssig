import { StockDeFilms } from "../StockDeFilms/StockDeFilms"

const ItemList =({StockDeFilms})=> {
    return (
        <div className="ListGroup">
            {StockDeFilms.map(Stock=>  <Item key={Stock.id}{...Stock}/>)}

        </div>
    );
}
export default ItemList;