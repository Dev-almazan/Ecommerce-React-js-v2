import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../user.css';
import { useState , useContext } from 'react';
import { Link } from 'react-router-dom';

/* Firebase services */
import { db } from '../../../firebase/config';
import {collection, addDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const Registration = () =>
{
   
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleEmail = (e)=>
    {
        setEmail(e.target.value);
    }

    const handlePass = (e)=>
    {
        setPass(e.target.value);
    }


    const  handleEnviar=(e)=>
    {
        e.preventDefault();
        
        const data = {
            "correo": email,
            "contraseña": pass
        }

        if(email.length <= 7 )
        {
            alert("Favor de ingresar correo electronico. - Minimo 8 caracteres")
        }
        else if(pass.length <= 4 )
        {
            alert("Favor de ingresar contraseña - Minimo 5 caracteres")
        }
        else
        {
            const usuarios = collection(db,'usuarios');
            addDoc(usuarios,data)
            .then((result) => {
               
                if(result.id !== null)
                {
                    navigate("/cart");
                }
                

            })
            .catch((error) => console.log(error))
        }
       
    }

    return(

                <div className='card container formu'>
                         <Form onSubmit={handleEnviar}>
                            <h1 className='text-center'>Registrate</h1><hr></hr>
                            <p className="text-primary text-center">Para poder continuar tu compra y recibir promociones:</p>
               
                            <Form.Group className="mb-3" >
                            <Form.Label>Dirección de email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese usuario de prueba: pruebas@hotmail.com" value={email}  onChange={handleEmail} />
                          
                            </Form.Group>
                    
                            <Form.Group className="mb-3" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese contraseña de prueba: Admin2023*" value={pass}  onChange={handlePass} />
                            </Form.Group>
                            <Button   variant="primary" type="submit">
                            Continuar
                            </Button>
                        </Form>
                        <hr></hr>
                        <h6 className="text-center">¿Ya tiene usuario?</h6>
                        <Link to="../user/login" className='btn btn-outline-primary'>Iniciar Sesión</Link>
                </div>
            
    )
}

export default Registration;