
import "./peliculas.css";

import GenerosPeliculas from "./GenerosPelisculas/GenerosPeliculas";
import { Link } from "react-router-dom";


const Peliculas=()=> {



    return (

        <div className="container-peliculas">   
            
        <div><h2 className="titlefilms">Películas</h2></div>   
        
    
        <GenerosPeliculas></GenerosPeliculas>    

    
        
        <p className="peliText">Acá vas a encontrar las mejores peliculas para ver te recomendamos el top recomendado en stock </p><Link to ="/" className="linkRecomendados">Ir a recomendados</Link>
        
        
        

        </div>
        
    

    );
    }
    
    export default Peliculas;