

import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom'; 


const error404 = () =>
{
            return(
                

                            <div className="container" ><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <Card  style={{ width: '80%' }} >
                                    <Card.Img variant="top"  />
                                    <Card.Body>
                                    <Card.Title>Ups no se encontro pagina </Card.Title>
                                    <Link className='btn-primary btn' to="/" >Volver a Inicio</Link>
                                   </Card.Body>
                                   
                            </Card>
             
            </div> 
                
                );
}

 export default error404;