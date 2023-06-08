import React from 'react';
import {BrowserRouter,Route,Routes, NavLink,Link,} from "react-router-dom";

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
import ItemListContainer from './components/pages/home/ItemListContainer/ItemListContainer';
import CardSeries from './components/pages/Series/CardSeries/CardSeries';
import StockDeFilms from './components/pages/home/ItemListContainer/StockDeFilms/StockDeFilms';
import ItemList from './components/pages/home/ItemListContainer/ItemList/Item.List';
import ItemDetail from './components/pages/home/ItemDetailContainer/ItemDetail/ItemDetail';
import stockfilms from '../src/components/pages/home/ItemListContainer/StockDeFilms/stockfilms.json';






function App() {
    return (

<BrowserRouter>
<NavBar/>
<Footer/>



<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/home/:id4"element={<ItemListContainer/>} />
<Route path="/" element={<ItemListContainer/>}/>
<Route path="/peliculas"element={<Peliculas/>} />
<Route exact path ="/"element={<ItemList/>} />
<Route path="/stockfims/:id" component={<ItemDetail/>} />
<Route  path="/series" element= {<Series/>} />
<Route  path="/contacto" element= {<Contacto/>} />
<Route  path="/footer" element= {<Footer/>} />









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


