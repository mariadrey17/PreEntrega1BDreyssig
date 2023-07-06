import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { getFilmsById } from "../../../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFilmsById(id);
        setFilm(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  

  return (
    <div className="ItemDetailContainer">
      <ItemDetail film={film}   
       titulo={film.titulo}
          genero={film.genero}
          precio={film.precio}
          image ={film.image}
          categoryId={film.categoryId}
          id={film.id} />
         
     
    </div>
  );
};

export default ItemDetailContainer;