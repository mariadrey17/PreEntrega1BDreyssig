import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/Navbar";
import Peliculas from "./components/pages/Peliculas/peliculas";
import "./App.css";
import Series from "./components/pages/Series/Series";
import { CartContext, CartProvider } from "./components/context/CartContext";

import Footer from "./components/pages/Footer/Footer";
import Contacto from "./components/pages/Contacto/Contacto";
import ItemListContainer from "./components/pages/home/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/home/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </CartProvider>
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
