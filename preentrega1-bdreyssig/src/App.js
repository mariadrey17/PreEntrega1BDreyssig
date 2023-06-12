import React from "react";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";

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

import IniciarSesion from "./components/Layouts/Formularios/IniciarSesion/IniciarSesion";
import Footer from "./components/pages/Footer/Footer";
import Contacto from "./components/pages/Contacto/Contacto";
import ItemListContainer from "./components/pages/home/ItemListContainer/ItemListContainer";
import CardSeries from "./components/pages/Series/CardSeries/CardSeries";

import ItemList from "./components/pages/home/ItemListContainer/ItemList/Item.List";
import ItemDetail from "./components/pages/home/ItemDetailContainer/ItemDetail/ItemDetail";

import stockderecomendados from "./components/pages/home/StockRecomendados/stockrecomendados";
import Categories from "./datos/Categories/categories";
import ItemDetailContainer from "./components/pages/home/ItemDetailContainer/ItemDetailContainer";
//import ItemDetailContainer from "./components/pages/home/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Footer />

      <Routes>
        {/*<Route path="/home" element={<Home/>}/>*/}
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category" element={<ItemListContainer />} />
        <Route path="/itemlistcontainer" element={<ItemList />} />
        <Route path="/detalle" element={<ItemDetail />} />
        <Route path="/itemlistcontainer/home" element={<Home />} />

        <Route path="/peliculas" element={<Peliculas />} />
        <Route exact path="/item/:id" element={<ItemDetail />} />

        <Route path="/series" element={<Series />} />
        <Route path="/contacto" element={<Contacto />} />

        {/*<Route
          exact
          path="/itemdetailcontainer"
          element={<ItemDetailContainer />}
  />*/}
        <Route
          exact
          path="/itemdetailcontainer"
          element={<ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>

    /*<>


<NavBar></NavBar>

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



<Footer/>



</>*/
  );
}

export default App;
