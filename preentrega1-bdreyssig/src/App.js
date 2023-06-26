import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/Navbar";
import CartWidget from "./components/NavBar/CartWidget/CartWidget";
import { Button } from "bootstrap";
import { BiCartAdd } from "react-icons/bi";
import Home from "./components/pages/home/Home";
import Estrenos from "./components/pages/home/Estrenos/Estrenos";

import Peliculas from "./components/pages/Peliculas/peliculas";
import "./App.css";
import Series from "./components/pages/Series/Series";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import IniciarSesion from "./components/Layouts/Formularios/IniciarSesion/IniciarSesion";
import Footer from "./components/pages/Footer/Footer";
import Contacto from "./components/pages/Contacto/Contacto";
import ItemListContainer from "./components/pages/home/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/home/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./components/pages/home/ItemDetailContainer/ItemDetail/ItemDetail";
//import ItemList from './components/pages/home/ItemListContainer/ItemList/Item.List';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer text="Bienvenidos" />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/" element={<ItemDetailContainer />} />
        {/*<Route path="category/home" element={<Estrenos />} />}
        {/*<Route path="category/peliculas" element={<Peliculas />} />*/}
        {/*/*<Route path="category/series" element={<Series />} />*/}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    /*<NavBar></NavBar>

<Home>






<>
<Estrenos>


</Estrenos>

</>


</Home>

<Peliculas>

</Peliculas>

<Series></Series>


<Contacto/>



<Footer/>*/
  );
}

export default App;
