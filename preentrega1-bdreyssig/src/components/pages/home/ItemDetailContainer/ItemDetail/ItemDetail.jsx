import { useParams } from "react-router-dom";
import stockrecomendados from "../../StockDeFilms/stockfilms.json";
import Item from "../../../Comp2/Item";
import ItemCount from "../ItemCount";

const ItemDetail = () => {
  const { filmId } = useParams();
  const film = stockrecomendados.find((film) => film.id === filmId);
  
  return (
    <div className="SectionFilm">
      <p> Este es el detalle del film </p>

      <div>
        <Item
          id={"04"}
          nombre={"Aquaaman"}
          genero={"Aventura"}
          precio={"2000"}
          categoryId={"peliculas"}
        />
      </div>
      {/*<div className="CardBody">
        <ul>
          {id}
          {nombre} {genero}
          {precio} {categoryId}
  </ul>
        <div className="CardDiv">
          <h2 className="CardTitle"> {nombre}</h2>
        </div>

        <div>
          <p>{genero}</p>
        </div>

        <div>
          <p>{price}</p>
  </div>
      </div>*/}

      <div>
        <ItemCount
          initial={0}
      stockrecomendados={6}
          onAdd={(counter) => console.log("cantidad agregada", counter)}
        />
      </div>
    </div>
  );
};
export default ItemDetail;


