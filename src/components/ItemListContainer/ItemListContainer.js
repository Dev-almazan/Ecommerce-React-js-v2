
import './itemlistcontainer.css';
import { useState , useEffect} from 'react';    
import { Link, useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import Cargando from "../Cargando/Cargando"  ;

//Importamos Firebase db
import {collection, getDocs ,query, where} from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemListContainer = ({greeting}) =>
{

        const [cargando, setCargando] = useState(false);

        const {categoryid} = useParams();

        const [productos, setProductos] = useState([]);

        let leyenda = categoryid !== undefined  ? `Relacionado con tus compras en ${categoryid} para Vehículos` : "Los mejores productos para Vehículos";

        const Productos = categoryid == undefined ? collection(db,"productos") : query(collection(db,"productos"),where("category","==",categoryid));

        useEffect(() => {
                setCargando(false)
                getDocs(Productos).then((result) => {

                                //Mapeamos objet agregamos id y data
                                const datos =  result.docs.map((datos)=> {
                                return {
                                        id : datos.id,
                                        ...datos.data()
                                }
                                });
                                        
                                setProductos(datos);
                                       
                                                
                }).catch((err) => {
                        console.log(err);
                }).finally(()=>{
                        setTimeout(() => {
                                setCargando(true)
                        }, 200);
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