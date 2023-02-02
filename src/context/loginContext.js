
    import { createContext, useState ,useEffect} from 'react';


    export const LoginContext = createContext();

    
    const usuarios = [
        {
            email: 'ernest_almazan@outlook.com',
            password : 'Dantes98*'
        },
        {
            email: 'pruebas@hotmail.com',
            password : 'Admin2023*'
        }
    ]

    export const LoginProvider = ({children})=>
    {
    
       const [user, setUser] = useState({
        
         email :'',
         logged :false
       });

        const login = (data) =>{

           
            
            const validar = usuarios.find(user=> user.email == data.correo && user.password == data.contraseña)

           if(validar)
           {    
                setUser ({
                    email : validar.email,
                    logged :true
                })
                
            
           }
           else
           {
            
                setUser ({
                    email : '',
                    logged :false,
                    error : 'Usuario o contraseña incorrectos'
                })
                
           }
        }

        const logout = () =>{
            
                setUser ({
                    email : '',
                    logged :false
                })

        }

        return(
            <LoginContext.Provider value={{user,login,logout}}>
                 {children}
            </LoginContext.Provider>
        )

    }