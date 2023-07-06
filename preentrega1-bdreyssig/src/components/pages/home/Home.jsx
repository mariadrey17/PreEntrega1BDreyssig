import {Link} from "react-router-dom";
import Estrenos from "./Estrenos/Estrenos";


import Form from "../../Layouts/Formularios/Formulario";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Peliculas from "../Peliculas/peliculas";
import CardSeries from "../Series/CardSeries/CardSeries";


const Home=()=> {



    return (

        <div className="container-home">   
            <div className="app">
        <ItemListContainer text ="Bienvenidos"/>
        </div>

        <div>
        <Form/>

        </div>

        <div><h2>Estrenos</h2>  
        
        <Estrenos></Estrenos>
        
        </div>

        <Peliculas></Peliculas>
        <CardSeries></CardSeries>



        
        

        </div>




        
    

    );
    }
    
    export default Home;