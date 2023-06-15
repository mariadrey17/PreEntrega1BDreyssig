
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import './nav.css';
import logo from '../../Assets/img/logo.jpg';
import ItemCount from '../pages/home/ItemDetailContainer/ItemCount/ItemCount';
import {Link, NavLink} from 'react-router-dom';


function NavBar() {
return (
    <Navbar  expand="lg" className='nav-style' >
    <Container >
<Link to='/' > <img src={logo} className='logo' alt="" /></Link><h1>VisualFilm Shop</h1> 

    
        <NavLink to="/">home        Las Mejores Películas y Series </NavLink>

        <ul className='navstyle'>
        <h2>Categorías</h2>

 
<nav>
                <ul>
                   
                        <li>
                            <NavLink to={`/category/estrenos`} className={({isActive})=>isActive?'ActiveOtion':Option}>Estrenos</NavLink>
                        </li>

                        
                        <li>
                            <NavLink to={`/category/series`}className={({isActive})=>isActive?'ActiveOtion':Option}> Series</NavLink>
                        </li>

                        
                        <li>
                            <NavLink to={`/category/peliculas`}className={({isActive})=>isActive?'ActiveOtion':Option}>Peliculas</NavLink>
                        </li>
                  
                </ul>
            </nav>
        <li>
            <NavLink  to="/contacto" >Contacto</NavLink> </li>

        </ul>


        {/*<Navbar.Toggle aria-controls to="basic-navbar-nav" />
        <Navbar.Collapse id to="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link to ="/">Home</Nav.Link>
            <Nav.Link to="/">Peliculas</Nav.Link>
            <NavDropdown title  ="Catálogo" id="basic-nav-dropdown">
            <NavDropdown.Item to="/series">Series</NavDropdown.Item>
            
            <NavDropdown.Item to ="7contacto">Contacto</NavDropdown.Item>
            
            </NavDropdown>
        </Nav>
</Navbar.Collapse>*/}
        <CartWidget></CartWidget>
    



    </Container>
    </Navbar>
);
}

export default NavBar ;

