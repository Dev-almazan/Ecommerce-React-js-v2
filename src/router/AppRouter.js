
  
  
  import { BrowserRouter , Routes,Route, Navigate} from 'react-router-dom';  
  import { useState ,useContext } from 'react';



  
  /* importamos componentes */
  
  import NavBar from '../components/NavBar/NavBar';

  import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

  import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

  import FormLogin from '../components/User/Login/Form';

  import Cart from '../components/Cart/Cart'    

  import Error404 from '../components/Error404/error404';

  import { LoginContext} from "../context/loginContext";  

  import PrivateRouter from "../router/PrivateRouter";  

  import  PublicRouter from "../router/PublicRouter";  

 const AppRouter = () =>

{

    const {user}= useContext(LoginContext);

    console.log(user.logged)

    //Condicional si se loguea el user entonces muestra carrito de compras 

    return(
        <BrowserRouter>
                                     
        {
            user.logged ?
           
                <PublicRouter />
            :
                <PrivateRouter/>
           
                    
        }
        

        </BrowserRouter>  
    );
}

export default AppRouter ;