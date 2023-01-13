
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../img/logotipo.png'; 
import CartWidget from './cartWidget.js';
import './navbar.css';

import {Link} from 'react-router-dom'; 




const NavBar =()=> {

  let num = 4;

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar className="mb-3 navegacion shadow">
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

                                            <CartWidget children={num} />

                                              <NavDropdown title="Mi cuenta" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                                          <NavDropdown.Item href="#action4">Mis pedidos</NavDropdown.Item>
                                                  <NavDropdown.Divider />
                                                          <NavDropdown.Item href="#action5">Iniciar Sesión</NavDropdown.Item>
                                              </NavDropdown>
 
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