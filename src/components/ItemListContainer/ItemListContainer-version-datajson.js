
import './itemlistcontainer.css';
import { useState , useEffect} from 'react';    
import Productos from './data.json';
import { Link, useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import Cargando from "../Cargando/Cargando"  ;



const ItemListContainer = ({greeting}) =>
{

        const [cargando, setCargando] = useState(false);

        const {categoryid} = useParams();

        const [productos, setProductos] = useState([]);

        let leyenda = categoryid !== undefined  ? `Relacionado con tus compras en ${categoryid} para Vehículos` : "Los mejores productos para Vehículos";

        const pedirDatos = () =>
        {
                        return new Promise( (resuelta,rechazada)=>
                        {
                                        resuelta(Productos);            
                                
                        })
        };
       


        useEffect(() => {
                setCargando(false)
                        pedirDatos().then((result) => {

                                        if(categoryid)
                                        {
                                                setProductos(result.filter(productos  => productos.category == categoryid));
                                        }
                                        else
                                        {
                                                setProductos(result);
                                              
                                        }

                                                
                                }).catch((err) => {
                                                console.log(err);
                                }).finally(()=>{
                                        setTimeout(() => {
                                                setCargando(true)
                                            }, 1000);
                                })
        },[categoryid]);

       
             
            return(
                
                        cargando == false ?
                        <Cargando />
                        :
                        <>
                        <div className="itemlist">
                        <h3 className='leyenda'>{leyenda} </h3>         
                       <ItemList productos={productos} />
                        </div>  
                        </>       
                 
                );
}

 export default ItemListContainer;