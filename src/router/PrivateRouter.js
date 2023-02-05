
  
  
  import { BrowserRouter , Routes,Route} from 'react-router-dom';  
  
  /* importamos componentes*/
  
  import NavBar from '../components/NavBar/NavBar';

  import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

  import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

  import FormLogin from '../components/User/Login/Form'; 

  import Error404 from '../components/Error404/error404';

  import Registration from '../components/User/Registration/Form';

 

 const PrivateRouter = () =>

{

    return(
        <>  
        <NavBar />
                <Routes>
                <Route  path='/category/:categoryid' element={<ItemListContainer greeting="Más vendidos en Rines de Autos y Camionetas" />} />
                <Route  path='/item/:id' element={<ItemDetailContainer  />} />
                <Route  path='/cart' element={<FormLogin/>} />
                <Route  path='/user/login' element={<FormLogin/>} />
                <Route  path='/'  element={<ItemListContainer greeting="Más vendidos en Rines de Autos y Camionetas" />} />
                <Route  path='*' element={ <Error404/>} />
                <Route  path='/category/:categoryid' element={<ItemListContainer greeting="Más vendidos en Rines de Autos y Camionetas" />} />
                <Route  path='/registro' element={<Registration/>} />
        </Routes>
        </>
    );
}

export default PrivateRouter ;