
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import './nav.css';
import logo from '../../Assets/img/logo.jpg';
import ItemCount from '../pages/home/ItemDetailContainer/ItemCount/ItemCount';
import {Link, NavLink} from 'react-router-dom';


function NavBarCategories() {
return (
    <Navbar  expand="lg" className='nav-style' >
    <Container >


    
        <NavLink to="/">Categorias</NavLink>

        <ul className='navstyle'>
        <li>
            <NavLink to= "/peliculas">Películas </NavLink>

            </li>
        <li> <NavLink to= "/series">Series</NavLink></li>
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
       
    



    </Container>
    </Navbar>
);
}

export default NavBarCategories ;