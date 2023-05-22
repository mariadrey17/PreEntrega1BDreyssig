import React from 'react';

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
import Form from './components/Layouts/Formularios/Formulario';
import IniciarSesion from './components/Layouts/Formularios/IniciarSesion/IniciarSesion';

import Contacto from './components/pages/Contacto/Contacto';





function App() {
    return (
<>


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



</>
    

    );
    
    }

export default App;


