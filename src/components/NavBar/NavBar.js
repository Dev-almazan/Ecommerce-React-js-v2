import { useContext } from 'react'; 
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../img/logotipo.png'; 
import CartWidget from './cartWidget.js';
import './navbar.css';
import {Link} from 'react-router-dom'; 
import { CartContext } from "../../context/cartContext";
import { LoginContext } from '../../context/loginContext';


const NavBar =()=> {

    //valores globales de context para el cart section            
    const { totalCant } = useContext(CartContext);
    const {user,logout}= useContext(LoginContext);

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} className="mb-3 fixed-top shadow bg-light">
          <Container>
            <Link to="/" className='barra-der'><img className='logo-nav' src={logo}></img></Link>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas id={`navegacion-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                          <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
                          </Offcanvas.Header>
                    
                          <Offcanvas.Body>
                                  <Nav className="barra-central">
                                      <Link to="/category/rines" className='btn '>Rines</Link>
                                      <Link  to="/category/llantas" className='btn '>Llantas</Link>
                                      
                                  </Nav>
                    
                                <Nav className="justify-content-end flex-grow-1 pe-3 barra-iz">

                                            <CartWidget children={totalCant()} />
                                  
                                                          {
                                                              user.logged == false ?
                                                              <Link  to="/user/login" className=' btn'>Iniciar Sesión</Link>
                                                              :
                                                              <>
                                                              <NavDropdown title="Mi cuenta" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                                               <button className='btn'>{user.email}</button>    <NavDropdown.Divider /> 
                                                              <Link  to="/user/pedidos" className='btn '>Mis pedidos</Link>
                                                              <NavDropdown.Divider /> 
                                                              <Link  to="/user/login" className='btn' onClick={logout}>Cerrar Sesión</Link> 
                                                               </NavDropdown>
                                                               </>
                                                          }

                                </Nav>
                          </Offcanvas.Body>
              </Navbar.Offcanvas>
             
          </Container>

        </Navbar>
        
      ))}
    </>
  );
}

export default NavBar;