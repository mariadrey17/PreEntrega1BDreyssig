
import "./GenerosPeliculas.css";
import  abracadabra from "../../../../Assets/img/abracadabra.jpg";
import asih from "../../../../Assets/img/asih.jpg";
import avatar from "../../../../Assets/img/avatar.jpg";
import everywhere from "../../../../Assets/img/everywhere.jpg";
import exorcistadelpapa from "../../../../Assets/img/exorcistadelpapa.jpg";
import geisha from "../../../../Assets/img/geisha.jpg";
import impetigore from "../../../../Assets/img/impetigore.jpg";
import laberinth from "../../../../Assets/img/laberinth.jpg";
import lasbrujas from "../../../../Assets/img/lasbrujas.jpg";
import narnia from "../../../../Assets/img/narnia.jpg";
import raya from "../../../../Assets/img/raya.jpg";
import scream from "../../../../Assets/img/scream.jpg";
import mitchels from "../../../../Assets/img/mitchels.jpg";
import shazam from "../../../../Assets/img/shazam.jpg";




const GenerosPeliculas=()=> {



    return (


            
        <div ><h4>Géneros</h4>   
    
        <ul className="pelisgenero" >
            <li className="li-gp">
            <a  aria-current="page" href="./">Drama</a>
            </li>
            <li className="li-gp" >
            <a  aria-current="page" href="./">Comedia</a>
            </li>
            <li className="li-gp" >
            <a  aria-current="page" href="./">Short Films</a>
            </li>
            <li className="li-gp">
            <a  aria-current="page" href="./">Musicales</a>
            </li>
            <li className="li-gp">
            <a  aria-current="page" href="./">Acción</a>
            </li>
            <li className="li-gp" >
            <a  aria-current="page" href="./">Fantasía</a>
            </li>
            <li className="li-gp">
            <a  aria-current="page" href="./">Documental</a>
            </li>
            <li className="li-gp">
            <a  aria-current="page" href="./">Suspenso</a>
            </li>
            <li className="li-gp">
            <a  aria-current="page" href="../">Ciencia Ficción</a>
            </li>
            <li className="li-gp" > 
            <a  aria-current="page" href="../">Romance</a>
            </li>

        </ul>
        
    
    <div>

<img src= {abracadabra} alt="" />
<img src= {asih} alt="" />
<img src={avatar}   alt="" />
<img src= {everywhere}  alt="" />
<img src= {exorcistadelpapa} alt="" />
<img src={geisha}  alt="" />
<img src= {impetigore} alt="" />
<img src={laberinth}   alt="" />
<img src= {lasbrujas}  alt="" />
<img src={narnia}   alt="" />
<img src= {raya}  alt="" />
<img src= {scream}  alt="" />
<img src= {mitchels} alt="" />
<img src= {shazam}   alt="" />


    </div>
    
    
        
        
        
        </div> 

    

    );
    }
    
    export default GenerosPeliculas;