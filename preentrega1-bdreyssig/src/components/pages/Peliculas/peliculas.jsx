import {Link, NavLink} from "react-router-dom";
import "./peliculas.css";

import GenerosPeliculas from "./GenerosPelisculas/GenerosPeliculas";



const Peliculas=()=> {



    return (

        <div className="container-peliculas">   
            
        <div><h2 className="titlefilms">Películas</h2></div>   
        
    
        <GenerosPeliculas></GenerosPeliculas>    

        
        
        <p>Acá vas a encontrar las mejores peliculas para ver te recomendamos el top recomendado en stock Ir a top recomendado</p>
        
        
        

        </div>
        
    

    );
    }
    
    export default Peliculas;