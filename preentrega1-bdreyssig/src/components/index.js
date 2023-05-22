import CartWidget from "./NavBar/CartWidget/CartWidget";
import GenerosPeliculas from "./pages/Peliculas/GenerosPelisculas/GenerosPeliculas";
import Peliculas from "./pages/Peliculas/peliculas";
import CardSeries from "./pages/Series/CardSeries/CardSeries";
import GeneroSeries from "./pages/Series/GeneroSeries/GeneroSeries";
import Series from "./pages/Series/Series";
import Estrenos from "./pages/home/Estrenos/Estrenos";
import Home from "./pages/home/Home";

//resuelve la lógica 
const ComponentesGenerales =( )=> {

    return (
<div className="contenedor-componente">
    <Navbar>
        <CartWidget></CartWidget>
    </Navbar>
    <Home>
        <Estrenos></Estrenos>
    </Home>

    <Peliculas>
        <GenerosPeliculas></GenerosPeliculas>
    </Peliculas>

    <Series>
        <GeneroSeries>
            <CardSeries></CardSeries>
        </GeneroSeries>
    </Series>

</div>

    );
}
export default ComponentesGenerales;
