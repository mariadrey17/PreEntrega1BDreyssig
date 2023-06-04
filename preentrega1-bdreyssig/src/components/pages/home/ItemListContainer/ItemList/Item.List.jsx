import stockfilms from "../StockDeFilms/StockDeFilms";
import stockfilms from "../StockDeFilms/stockfilms.json";

const ItemList =({StockDeFilms})=> {
    return (
        <div className="ListGroup">
                
    <div>
        
        {
stockfilms.map ((film)=>  {
        
        return (
    <div>
        <p>{film.id}</p>
        <p>{film.nombre}</p>
        <p>{film.genero}</p>
        <p>{film.precio}</p>
    </div>




        )
        },
        console.log (stockfilms)
        )
        }

    
    </div>
    

        </div>
    );
    
}
export default ItemList;