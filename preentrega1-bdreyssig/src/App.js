import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/Navbar";
import Peliculas from "./components/pages/Peliculas/peliculas";
import "./App.css";
import Series from "./components/pages/Series/Series";

import Footer from "./components/pages/Footer/Footer";
import Contacto from "./components/pages/Contacto/Contacto";
import ItemListContainer from "./components/pages/home/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/home/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/pages/home/Home";
import CartWidget from "./components/NavBar/CartWidget/CartWidget";
import CartProvider from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Layouts/Formularios/checkoutCliente/CheckoutCliente";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
