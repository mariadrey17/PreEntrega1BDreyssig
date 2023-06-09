import Link from "react-router-dom";
import Estrenos from "./Estrenos/Estrenos";


import Form from "../../Layouts/Formularios/Formulario";
import ItemListContainer from "./ItemListContainer/ItemListContainer";


const Home=()=> {



    return (

        <div className="container-home">   
            <div className="app">
        <ItemListContainer text ="Bienvenidos"/>
        </div>

    
        
        <Form></Form>
        



        <div><h2>Estrenos</h2></div>   
        
        <Estrenos></Estrenos>
        
        
        
        

        </div>
        
    

    );
    }
    
    export default Home;