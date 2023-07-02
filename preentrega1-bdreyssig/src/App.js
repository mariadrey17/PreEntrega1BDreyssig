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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5hnX1fLdveVNEjqrnkCOo_CIGNIZBqRo",
  authDomain: "proyectofinal-5e6de.firebaseapp.com",
  projectId: "proyectofinal-5e6de",
  storageBucket: "proyectofinal-5e6de.appspot.com",
  messagingSenderId: "375425842853",
  appId: "1:375425842853:web:59918b4a864015bba6174c",
  measurementId: "G-LE2Q9LCVKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer text="Bienvenidos" />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/" element={<ItemDetailContainer />} />

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
