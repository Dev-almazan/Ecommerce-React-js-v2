
import './cart.css';
import Form from 'react-bootstrap/Form';



import { useContext } from 'react'; 

import { CartContext } from "../../context/cartContext";



const Cart = ()=>
{

        //valores globales de context para el cart section            
        const { cart,addCarrito,isInCart,emptyCart,totalCart,totalCant } = useContext(CartContext); 

    return(
        <div className='content' >
              <div className="item card " >
              <h1 className='text-center'>CARRITO DE COMPRAS</h1>
                <div className=' mt-4 '>
                    <div className='row col-md-12 container'>
                        <div className='col-md-9'>
                                    {
                                            cart.map(data => (

                                                <div className='row col-md-12  m-1' key={data.id}><br></br>
                                                    <hr></hr>
                            
                                                        <div className='col-md-2'>
                            
                                                                <img  className='img-principal'  src={require(`../../img/media/${data.img}`)} ></img>
                                                        </div>
                            
                                                        <div className='col-md-8' >
                                                            <h4>{data.name} {data.model}  </h4>
                                                            
                                                            <h4 className='text-primary'><b>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(data.price)}</b></h4>
                                                             <p><b>{data.category} </b></p>       
                                                                
                                                        </div>     
                                                        <div className='col-md-2'>
                                                        <Form.Select size="lg">
                                                            <option>{data.cantidad}</option>
                                                        </Form.Select>
                                                        </div> 
                            
                                            </div>


                                            ))
                                    }

                        </div>
                        <div className='col-md-3 card'>
                            <h5 className='mt-3 text-center'>RESUMEN DE TU PEDIDO</h5><hr></hr>

                            <h4 >Total<br></br>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(totalCart())}</h4>
                            <h4 >Cantidad <br></br> {totalCant()}</h4>
                           <button className='btn btn-primary mt-2'>Terminar Compra</button>
                            <button className='btn btn-outline-primary mt-2' onClick={emptyCart}>Vaciar Carrito</button>


                        </div>
                    </div>
                </div> 
              </div>
        </div>
    )
}

export default Cart;