
import Form from 'react-bootstrap/Form';
import { BsArrow90DegLeft } from "react-icons/bs";


import './ItemDetailContainer.css';

import Items from '../ItemListContainer/data.json';
import { useParams ,useNavigate} from 'react-router-dom';
import { useState , useEffect } from 'react'; 

import ItemCount from '../ItemCount/ItemCount';


        const ItemDetailContainer = () =>
        {

            const idItem = useParams();

            const [item, setitems] = useState([]);

            const navigate = useNavigate();

            const handleRegresar = () =>
            {
                navigate(-1)
            }

            const pedirData = () =>
            {
                            return new Promise( (res)=>
                            {
                                res(Items);            
                                    
                            })
            };

            useEffect(() => {
                pedirData()
                        .then((result) => {

                                if(idItem.id)
                                {
                                    setitems(result.filter(item  => item.id == idItem.id));
                                    
                                }
                                        
                        }).catch((err) => {
                                        console.log(err);
                        });
            },[idItem.id]);

                        
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
                                                                  
                                                                                
                                                                        <div className='carrito '>

                                                                                <ItemCount stock={data.stock}/>
                                                                                
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