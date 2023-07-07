
import Estrenos from "./Estrenos/Estrenos";


import Form from "../../Layouts/Formularios/Formulario";
import Peliculas from "../Peliculas/peliculas";
import Series from "../Series/Series";


const Home=()=> {



    return (

        <div className="container-home">   
            <div className="app">
     
        </div>

        
        <div>
        <Form></Form>
        </div>

    

        <div><h2>Estrenos</h2></div>   
        
       <Estrenos/>

      <Peliculas/>

        <Series/>
        
        
        
    
        

        </div>
        
    

    );
    }
    
    export default Home;