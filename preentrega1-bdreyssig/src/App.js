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
import CartProvider from "./components/context/CartContext";

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
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Cart" element={<CartWidget />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>

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
