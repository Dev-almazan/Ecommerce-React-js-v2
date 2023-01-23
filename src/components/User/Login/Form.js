import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../user.css';
import { useState  } from 'react';


const Formulario = () =>
{
   

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

        console.log(data)


    }

    return(

                <div className='card container formu'>
                         <Form onSubmit={handleEnviar}>
                            <h1>Iniciar sesión</h1>
                            <Form.Group className="mb-3" >
                            <Form.Label>Dirección de email</Form.Label>
                            <Form.Control type="email" placeholder="Enter correo" value={email}  onChange={handleEmail} />
                            <Form.Text className="text-muted">
                               Ingrese por favor un correo electronico valido.
                            </Form.Text>
                            </Form.Group>
                    
                            <Form.Group className="mb-3" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Enter Contraseña" value={pass}  onChange={handlePass} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                            <Form.Check type="checkbox" label="Recordarme" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                            Continuar
                            </Button>
                        </Form>
                        <hr></hr>
                        <h6 className="text-center">¿Eres nuevo?</h6>
                        <div className='btn btn-primary'>Crear Cuenta</div>
                </div>
            
    )
}

export default Formulario;