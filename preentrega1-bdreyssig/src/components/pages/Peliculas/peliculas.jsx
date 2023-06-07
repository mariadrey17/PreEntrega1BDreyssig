import {NavLink} from "react-router-dom";
import "./peliculas.css";

import GenerosPeliculas from "./GenerosPelisculas/GenerosPeliculas";



const Peliculas=()=> {



    return (

        <div className="container-peliculas">   
            
        <div><h2 className="titlefilms">Películas</h2></div>   
        
    
        <GenerosPeliculas></GenerosPeliculas>    

        
        
        
        
        
        

        </div>
        
    

    );
    }
    
    export default Peliculas;