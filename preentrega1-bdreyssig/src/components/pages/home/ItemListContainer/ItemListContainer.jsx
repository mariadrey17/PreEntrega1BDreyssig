
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFilms, getFilmsByCategory } from "../../../../services/firebase/firebaseConfig";


function ItemListContainer(props) {
    const [films, setFilms] = useState([]);
    const { id } = useParams();
  
   
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (id) {
            const filtereddata = await getFilmsByCategory(id);
            setFilms( filtereddata);
          } else {
            const data = await getFilms('films');
            setFilms(data);
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [id]);
  console.log(films)
    return (
      <div>
        <h2>{props.text}</h2>
        <div>
          <ItemList data={films} />
        </div>
      </div>
    );
  }
  
  export default ItemListContainer;