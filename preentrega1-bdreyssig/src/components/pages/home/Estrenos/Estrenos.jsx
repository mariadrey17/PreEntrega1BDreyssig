import ListaPeliculasEstreno from "../Estrenos/ListaPelisEstreno";
import "../home.css";
import evildead from '../../../../Assets/img/evildead.jpg';
import lasirenita from '../../../../Assets/img/lasirenita.jpg';
import rapidoyfurioso from '../../../../Assets/img/rapidoyfurioso.jpg';
import succession from '../../../../Assets/img/succession.jpg';

import yellowjackets from '../../../../Assets/img/yellowjackets.jpg';



const Estrenos=()=> {



    return (

        <div className="lista-estrenos">   


     <div className="container-image-estrenos"  >
        <img src= {evildead}  alt=""  className="estreno-foto"/>

        <img src= {lasirenita}  alt="" className="estreno-foto"  />

        <img src= {rapidoyfurioso}  alt=""className="estreno-foto"  />

        <img src= {succession}  alt=""className="estreno-foto" />


      

        <img src= {yellowjackets}  alt="" className="estreno-foto" />


        
        

        </div>
        
        <ListaPeliculasEstreno></ListaPeliculasEstreno>
        
    
    
    
    
    
    
        </div>
        
    

    );
    }
    
    export default Estrenos;