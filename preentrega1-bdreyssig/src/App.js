import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/Navbar";
import Peliculas from "./components/pages/Peliculas/peliculas";
import "./App.css";
import Footer from "./components/pages/Footer/Footer";
import Contacto from "./components/pages/Contacto/Contacto";
import ItemListContainer from "./components/pages/home/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/home/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "../src/components/Layouts/Formularios/CheckoutCliente/Checkout";
import Home from "./components/pages/home/Home";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer text="Bienvenidos" />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
