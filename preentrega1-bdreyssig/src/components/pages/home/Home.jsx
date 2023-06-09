import {Link} from "react-router-dom";
import Estrenos from "./Estrenos/Estrenos";


import Form from "../../Layouts/Formularios/Formulario";
import ItemListContainer from "./ItemListContainer/ItemListContainer";


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


        <div>
            <p className="homeText ">Queres comunicarte con nosotros: <Link  to="/contacto"  className="linkHome">Ir a contacto</Link>click acá</p> 
        </div>
        
        

        </div>




        
    

    );
    }
    
    export default Home;