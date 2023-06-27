
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import CartWidget from './CartWidget/CartWidget';
    import './nav.css';
    import logo from '../../Assets/img/logo.jpg';
    import ItemCount from '../pages/home/ItemCount';
    import {Link, NavLink} from 'react-router-dom';


    
    function NavBar() {

        const InicioEntrar=()=>{

        }
    return (
        <Navbar  expand="lg" className='nav-style' >
        <Container >
    <Link to='/' > <img src={logo} className='logo' alt="" /></Link><h1>VisualFilm Shop</h1> 
    
        
            <NavLink to="/itemlistcontainer/home">home        Las Mejores Películas y Series </NavLink>

            <ul className='navstyle'>
            {/*<li>
                <NavLink to= "/peliculas">Películas y Series</NavLink>
    
                </li>
    <li> <NavLink to= "/series">Series</NavLink></li>*/}

<div>

    <h2>Categorías</h2>
<li>
        <Link to ={`/category/peliculas`}>Peliculas</Link>
      </li>
      
      <li>
        <Link to ={`/category/series`}>Series</Link>
      </li>

      <li>
        <Link to ={`/category/estrenos`}>Estrenos</Link>
      </li>
                    
</div>
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
