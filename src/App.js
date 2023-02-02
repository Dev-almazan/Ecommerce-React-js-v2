
/* importamos img    */

  import logo from './img/logotipo.png';
  import './css/estilos.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { useState , useEffect} from 'react';    

  /* importamos componentes comprimidos en componente AppRouter */
  
  import AppRouter from './router/AppRouter';

  import { CartProvider } from "./context/cartContext";
  import { LoginProvider} from "./context/loginContext";
   

function App() {

      
  


            return (

            <div className='inicio' >

                                  <LoginProvider>
                                    <CartProvider>
                                          <AppRouter/>
                                    </CartProvider>       
                                  </LoginProvider>   
                              
            </div>           
                            
            );
         

            
}

export default App;
