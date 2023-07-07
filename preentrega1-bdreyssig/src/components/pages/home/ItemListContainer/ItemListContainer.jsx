
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFilms, getFilmsByCategory } from "../../../../services/firebase/firebaseConfig";
import { Link } from "react-router-dom";
import Home from "../Home";
import Footer from "../../Footer/Footer";
import CardSeries from "../../Series/CardSeries/CardSeries";


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
        <h2>Hola  {props.text}</h2>
        <div>
          
          <ItemList data={films} />
         
          <p className="paraLinks"> Acá podes loguearte <Link  to ='/home'> click acá</Link></p>
        </div>
    
       <Footer/>
      </div>
    );
  }
  
  export default ItemListContainer;