import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../user.css';
import { useState , useContext } from 'react';
import { LoginContext } from '../../../context/loginContext';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Formulario = () =>
{

 

    
    const navigate = useNavigate();

    const {user,login}= useContext(LoginContext);

     console.log(user)
   
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

        login(data)
       
     
    }

    if(user.logged == true)
    {
        navigate("/cart");
    }
    return(

                <div className='card container formu'>
                         <Form onSubmit={handleEnviar}>
                            <h1 className='text-center'>Iniciar sesión</h1>
               
                            <Form.Group className="mb-3" >
                            <Form.Label>Dirección de email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese usuario de prueba: pruebas@hotmail.com" value={email}  onChange={handleEmail} />
                          
                            </Form.Group>
                    
                            <Form.Group className="mb-3" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese contraseña de prueba: Admin2023*" value={pass}  onChange={handlePass} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                            <Form.Check type="checkbox" label="Recordarme" />
                            </Form.Group>
                            <Button   variant="primary" type="submit">
                            Continuar
                            </Button>
                        </Form>
                        { user.error && <> <h6 className="text-center text-danger">{user.error}</h6></> }
                        <hr></hr>
                        { user.logged == false ? <> 
                            <h6 className="text-center">¿Eres nuevo? <span className='text-primary'>Registrate para  poder continuar con tu compra y recibir promociones </span></h6>
                            <Link to="/registro" className='btn btn-outline-primary'>Crear Cuenta</Link>
                        </> :
                        <> </>
                        }
                      
                </div>
            
    )
}

export default Formulario;