
/* importamos img    */

  import logo from './img/logotipo.png';
  import './css/estilos.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { BrowserRouter , Routes,Route, Navigate} from 'react-router-dom';  
  import { useState  } from 'react';

  /* importamos componentes */
  
  import NavBar from './components/NavBar/NavBar';

  import ItemListContainer from './components/ItemListContainer/ItemListContainer';

  import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

  import FormLogin from './components/User/Login/Form';

  import Cart from './components/Cart/Cart'    

  import Error404 from './components/Error404/error404';

  import { CartContext } from "./context/cartContext";


function App() {


            const [cart, setCart] = useState([]);
            

            const addCarrito = (valores) =>
            {
                  
                  setCart([...cart,valores]);
            }


            const isInCart = (id) =>
            {
                  return cart.some(item =>  item.id === id )
            }

            const emptyCart =()=>
            {
                  setCart([]);
            }

            const totalCart =()=>
            {
               return cart.reduce((accu,item)=> accu + item.price * item.cantidad,0 ) 
            }
            
            const totalCant =()=>
            {
               return cart.reduce((accu,item)=> accu +  item.cantidad,0 ) 
            }

            console.log(cart)

            return (

            <div className='inicio' >

                  <CartContext.Provider value={ {cart,addCarrito,isInCart,emptyCart,totalCart,totalCant} }>

                                    <BrowserRouter>

                                          <NavBar />

                                          <Routes>
                                          
                                                
                                                <Route  path='/category/:categoryid' element={<ItemListContainer greeting="Más vendidos en Rines de Autos y Camionetas" />} />
                                                <Route  path='/item/:id' element={<ItemDetailContainer  />} />
                                                <Route  path='/cart' element={<Cart />} />
                                                <Route  path='/user/login' element={<FormLogin/>} />
                                                <Route  path='/'  element={<ItemListContainer greeting="Más vendidos en Rines de Autos y Camionetas" />} />
                                                <Route  path='*' element={ <Error404/>} />
                                                
                                          </Routes>
                                    

                                    </BrowserRouter>    

                  </CartContext.Provider>    

            </div>           
                            
            );
         

            
}

export default App;
