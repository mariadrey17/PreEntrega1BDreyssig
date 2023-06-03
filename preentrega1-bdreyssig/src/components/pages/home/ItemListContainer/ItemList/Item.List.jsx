import stockfilms from "../StockDeFilms/StockDeFilms";

const ItemList =({StockDeFilms})=> {
    return (
        <div className="ListGroup">
            {stockfilms.map(Stock=>  <StockDeFilms key={Stock.id}{...Stock}/>)}

        </div>
    );
    
}
export default ItemList;