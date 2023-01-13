
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ItemList = ( {productos} ) => {
     
    return (
    
                <div className='row col-md-12 productos'>

                        {
                                        productos.map((data=>
                                        (
                                                <div className="col-lg-3 col-md-6 mb-4" key={data.id}>
                                                        <Card  className="tarjetas" >
                                                                <Card.Img variant="top"  src={require(`../../img/media/${data.img}`)}></Card.Img>
                                                                <Card.Body>
                                                                <Card.Title className='text-center'>{data.name} {data.model}</Card.Title>
                                                                <h4  className='text-center text-primary'><b> {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(data.price)}</b></h4>
                                                                <Card.Text className='text-center'>Dimensiones:  {data.size} </Card.Text>
                                                                </Card.Body>
                                                                <Card.Footer className='d-grid gap-2'>
                                                                                <Link className="btn btn-primary"  to={`/item/${data.id}`}  size="md" > Ver detalles</Link>
                                                                </Card.Footer>
                                                        </Card>
                                                </div> 
                                        )))
                                        
                        }
                                

                </div>     
 
    )
}

export default ItemList