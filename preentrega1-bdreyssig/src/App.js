import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import { Button } from 'bootstrap';
import { BiCartAdd } from "react-icons/bi" ; 
import Home from './components/pages/home/Home';
import Estrenos from './components/pages/home/Estrenos/Estrenos';

import Peliculas from './components/pages/Peliculas/peliculas';
import './App.css'
import Series from './components/pages/Series/Series';

import IniciarSesion from './components/Layouts/Formularios/IniciarSesion/IniciarSesion';
import Footer  from './components/pages/Footer/Footer';
import Contacto from './components/pages/Contacto/Contacto';





function App() {
    return (

<BrowserRouter>
<Routes>

<Route path="/" element={<NavBar/>}/>
<Route path="/home/estrenos/estrenos" element={<Home><h1>Estrenos</h1></Home>}/>
<Route path="/peliculas"element={<Peliculas><h1>esto es peliculs</h1> </Peliculas>} />
<Route  path="/series" element= {<Series/>} />
<Route  path="/contacto" element= {<Contacto/>} />
<Route  path="/series" element= {<Footer/>} />









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


