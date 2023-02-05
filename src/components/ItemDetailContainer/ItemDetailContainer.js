
import Form from 'react-bootstrap/Form';
import { BsArrow90DegLeft ,BsFillCartCheckFill} from "react-icons/bs";


import './ItemDetailContainer.css';


import { useParams ,useNavigate ,Link} from 'react-router-dom';
import { useState , useEffect ,useContext } from 'react'; 

import ItemCount from './ItemCount/ItemCount';
import { CartContext } from "../../context/cartContext";

//Importamos Firebase db
import {collection, getDocs} from "firebase/firestore";
import { db } from "../../firebase/config";

        const ItemDetailContainer = () =>
        {

            //valores globales de context para el cart section            
            const { cart,addCarrito,isInCart } = useContext(CartContext);

            const [cantidad, setCantidad] = useState(1);   

            const idItem = useParams();

            const [item, setitems] = useState([]);

            const navigate = useNavigate();

            const handleRegresar = () =>
            {
                navigate(-1)
            }
         
            const Productos = collection(db,"productos");


            useEffect(() => {
                getDocs(Productos).then((result) => {

                                      //Mapeamos obejto agregamos id y data
                                        const datos =  result.docs.map((datos)=> {
                                                return {
                                                id : datos.id,
                                                ...datos.data()
                                                }
                                        });

                                if(idItem.id)
                                {
                                    setitems(datos.filter(item  => item.id == idItem.id));
                                    
                                }
                                        
                        }).catch((err) => {
                                        console.log(err);
                        });
            },[idItem.id]);

            const handleAgregar = () =>
            {

                
                const itemsCart = {...item[0],cantidad};

                 addCarrito(itemsCart);


            }
    
            return(
                <div className='content' >
                       
                                       {
                                                       item.map((data=>
                                                       (
                                                        
                                                        <div className="item card " key={data.id} >
                                                            <div className='row col-md-12 '>
                                        
                                                                    <div className='col-md-6'>
                                        
                                                                            <img  className='img-principal'  src={require(`../../img/media/${data.img}`)} ></img>

                                                                      
                                                                    </div>
                                        
                                                                    <div className='col-md-6' >

                                        
                                                                        <h1 className='text-center'>{data.name} {data.model}  </h1>
                                                                  
                                                                                
                                                                        <div className='carrito'>
                                                                        
                                                                               {
                                                                                 !isInCart(data.id)?                       
                                                                                <ItemCount setCantidad={setCantidad} max={data.stock} cantidad={cantidad} handleAgregar={handleAgregar} />
                                                                                :
                                                                                <Link  to="/cart" className='btn btn-primary mx-1 mt-1'><span className="mx-3 numc"><BsFillCartCheckFill /> Terminar compra</span></Link>
                                                                               }
                                                                               
                                                                                       
                                                                                                                                
                                                                        </div>    

                                                                                <div className='text-left'>
                                                                                        <h4>Precio </h4> 
                                                                                        <h2 className='text-primary'><b>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(data.price)}</b></h2>
                                                                                </div>   
                                                                                <div className='text-left'>
                                                                                        <h4>Modelo</h4> 
                                                                                        <p>{data.model} </p>
                                                                                </div>
                                                                                <div className='text-left'>
                                                                                        <h4>Descripción</h4> 
                                                                                        <p>{data.description} </p>
                                                                                </div>
                                                                                <div className='text-left' >
                                                                                        <h4>Dimensiones</h4> 
                                                                                        <p>{data.size} </p>
                                                                                </div>
                                                                                
                                                                                <button className='btn btn-outline-primary' onClick={handleRegresar}>Regresar <BsArrow90DegLeft /></button>          

                                                                                        
                                                                </div>       

                                        
                                                        </div>                        
                                        
                                                        </div>
                                        
                                                       )))
                                                       
                                       }
                                    
               </div>
               
               );
        
}

 export default ItemDetailContainer;