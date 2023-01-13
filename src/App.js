
/* importamos img    */

  import logo from './img/logotipo.png';
  import './css/estilos.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { BrowserRouter , Routes,Route, Navigate} from 'react-router-dom';  

  /* importamos componentes */
  
  import NavBar from './components/NavBar/NavBar';

  import ItemListContainer from './components/ItemListContainer/ItemListContainer';

  import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

  import Error404 from './components/Error404/error404';


function App() {

        
            return (

            <div className='inicio' >

                <BrowserRouter>

                      <NavBar />

                      <Routes>
                  
                            
                            <Route  path='/category/:categoryid' element={<ItemListContainer greeting="Más vendidos en Rines de Autos y Camionetas" />} />
                            <Route  path='/item/:id' element={<ItemDetailContainer  />} />
                            <Route  path='/'  element={<ItemListContainer greeting="Más vendidos en Rines de Autos y Camionetas" />} />
                            <Route  path='*' element={ <Error404/>} />
                        
                      </Routes>
              

               </BrowserRouter>    

            </div>           
                            
            );
         

            
}

export default App;
