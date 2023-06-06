
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import CartWidget from './CartWidget/CartWidget';
    import './nav.css';
    import logo from '../../Assets/img/logo.jpg';
    import ItemCount from '../pages/home/ItemCount';

    
    function NavBar() {
    return (
        <Navbar  expand="lg" className='nav-style' >
        <Container >
        <img src={logo}  className='logo' alt="" /><h1>VisualFilm Shop</h1>
    
        
            <Navbar.Brand href="#home">Las Mejores Películas y Series </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Peliculas</Nav.Link>
                <NavDropdown title="Catálogo" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Series</NavDropdown.Item>
                
                <NavDropdown.Item href="#action/3.3">Contacto</NavDropdown.Item>
                
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            <CartWidget></CartWidget>
        


    
        </Container>
        </Navbar>
    );
    }
    
    export default NavBar ;
