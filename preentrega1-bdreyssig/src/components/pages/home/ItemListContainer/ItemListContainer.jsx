import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFilms, getFilmsByCategory } from "../../../../datos/peliculas";




function ItemListContainer(props) {
    const [films, setFilms] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getFilmsByCategory(id).then((data) => {
                setFilms(data);
            })
        }else {
            getFilms().then((data) => {
                setFilms(data);
            });
        }
    }, [id])
    return (
        <div>
            <h2>{props.text}  </h2>
            <div>
                <ItemList data={films} />
            </div>
        </div>
    );
}
export default ItemListContainer;