import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.css';
import  { useState, useContext } from 'react';    

import  { Link} from 'react-router-dom';    

import { LoginContext } from '../../context/loginContext';
import { CartContext } from '../../context/cartContext';


/* Firebase services */
import { db } from '../../firebase/config';
import {collection, addDoc} from "firebase/firestore";


const CheckOut = () =>
{

    const {user}= useContext(LoginContext);
    const {cart,totalCart,totalCant, emptyCart}= useContext(CartContext);
    
    
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [dir, setDir] = useState('');
    const [cp, setCp] = useState('');
    const [ordenf, setOrdenFin] = useState('');

    console.log(ordenf)

    const handleDir = (e)=>
    {
        setDir(e.target.value);
    }

    const handleNombre = (e)=>
    {
        setNombre(e.target.value);
    }

    const handleApellidos = (e)=>
    {
        setApellidos(e.target.value);
    }

    const handleCp = (e)=>
    {
        setCp(e.target.value);
    }



    const  handleEnviar=(e)=>
    {
        e.preventDefault();
        

        if(nombre.length == 0 || apellidos.length == 0 || dir.length == 0 || cp.length == 0)
        {
            alert("Todos los campos son requeridos - Favor de completarlos.")
        }
        else{

                const order= {
                    cliente : 
                    {
                        "nombre": nombre,
                        "apellidos": apellidos,
                        "correo" : user.email,
                        "direccion": dir,
                        "cpostal": cp
                    },
                    items : cart,
                    total : totalCart(),
                    unidades : totalCant()
                }

                const ordenes = collection(db,'orders');
                addDoc(ordenes,order)
                .then((result) => {
                    emptyCart();
                    setOrdenFin(result.id)
                    

                })
                .catch((error) => console.log(error))

        }

 
    }


    if(ordenf)
    {   
        return(
            <div className='card container formu'>
                    <h1 className='text-center'>Tu compra ha sido Exitosa</h1><hr></hr>
                    <p className='text-center'>Su orden ha sido generada con el siguiente folio : {ordenf}</p>
                    <Link className='text-center btn btn-primary' to="/">Seguir Comprando</Link>
            </div>    
        )

    }
    else{
        return(

            <div className='card container formu'>
                     <Form onSubmit={handleEnviar}>
                        <h1 className='text-center'>Finalizar compra</h1>
                        <hr></hr>
                        <div className='row col-md-12'>
                                <div className='col-md-6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" value={nombre}  onChange={handleNombre} />
                                </Form.Group>
                                </div>
                                <div className='col-md-6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control type="text"  value={apellidos}  onChange={handleApellidos} />
                                </Form.Group>
                                </div>

                        </div>
                        <div className='row col-md-12'>
                                <div className='col-md-9'>
                                <Form.Group className="mb-3" >
                                <Form.Label>Dirección del Envio</Form.Label>
                                <Form.Control type="text"  value={dir}  onChange={handleDir} />
                                </Form.Group>

                                </div>
                                <div className='col-md-3'>
                                <Form.Group className="mb-3" >
                        <Form.Label>Codigo postal</Form.Label>
                        <Form.Control type="text"  value={cp}  onChange={handleCp} />
                        </Form.Group>

                                </div>

                        </div>
                
                        <Button  variant="primary" type="submit" className="btn-block container mt-2">
                        Continuar
                        </Button>
                    </Form>
                    
                   
            </div>
        
)
    }

 
}

export default CheckOut;