import React, { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList/Item.List";
import { useParams } from "react-router-dom";
import { getFilms, getFilmsByCategory } from "../../../../services/firebase/firebaseConfig";
import { CartContext } from "../../../context/CartContext";
import {getDocs,collection,getFirestore} from "firebase/firestore";
//import "firebase/firestore";

function ItemListContainer(props) {
    const [films, setFilms] = useState([]);
    const { id } = useParams();
  
    const getFilms = async (collectionName) => {
      try {
        const db = getFirestore();
        const filmsCollection = collection(db, collectionName);
        const querySnapshot = await getDocs(filmsCollection);
  
        const films = [];
        querySnapshot.forEach((doc) => {
          films.push(doc.data());
        });
  
        return films;
      } catch (error) {
        throw new Error('Error al obtener los films');
      }
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (id) {
            const data = await getFilmsByCategory(id);
            setFilms(data);
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

export default ItemListContainer;*/





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