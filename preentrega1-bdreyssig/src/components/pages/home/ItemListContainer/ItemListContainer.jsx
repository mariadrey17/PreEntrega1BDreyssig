
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/Item.List";
import { useParams } from "react-router-dom";
import { getFilms, getFilmsByCategory } from "../../../../services/firebase/firebaseConfig";
import { Link } from "react-router-dom";

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

        <p className="homeText ">login para ver mas peliculas y series  <Link  to="/home"  className="linkHome">Ir a home </Link>click acá</p> 
        
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