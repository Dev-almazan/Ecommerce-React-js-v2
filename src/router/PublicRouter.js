
  
  
  import { Routes,Route} from 'react-router-dom';  
  
  /* importamos componentes */
  
  import NavBar from '../components/NavBar/NavBar';

  import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

  import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

  import FormLogin from '../components/User/Login/Form';

  import Cart from '../components/Cart/Cart'    

  import CheckOut from '../components/CheckOut/checkOut';

  import Error404 from '../components/Error404/error404';
 

 const PublicRouter = () =>

{

    return(
             <>               
                <NavBar />
                <Routes>
                            <Route  path='/category/:categoryid' element={<ItemListContainer greeting="Más vendidos en Rines de Autos y Camionetas" />} />
                            <Route  path='/item/:id' element={<ItemDetailContainer  />} />
                            <Route  path='/cart' element={<Cart/>} />
                            <Route  path='/user/login' element={<FormLogin/>} />
                            <Route  path='/'  element={<ItemListContainer greeting="Más vendidos en Rines de Autos y Camionetas" />} />
                            <Route  path='*' element={ <Error404/>} />
                            <Route  path='/category/:categoryid' element={<ItemListContainer greeting="Más vendidos en Rines de Autos y Camionetas" />} />
                            <Route  path='/order' element={<CheckOut />} />
                            
                </Routes>
            </> 

    );
}

export default PublicRouter ;