import React, { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList/Item.List";
import { useParams } from "react-router-dom";
import { getFilms, getFilmsByCategory } from "../../../../datos/peliculas";
import { CartContext } from "../../../context/CartContext";
import {getDocs,collection,query,where} from "firebase/firestore";








function ItemListContainer(props) {
  const [films, setFilms] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = firebase.firestore();
    let collectionRef = db.collection('films');

    if (id) {
      collectionRef = collectionRef.where('category', '==', id);
    }

    const getFilms = async () => {
      try {
        const snapshot = await collectionRef.get();
        const data = snapshot.docs.map((doc) => doc.data());
        setFilms(data);
      } catch (error) {
        console.error('Error getting films: ', error);
      }
    };

    getFilms();
  }, [id]);

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





/*function ItemListContainer(props) {
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
export default ItemListContainer;*/