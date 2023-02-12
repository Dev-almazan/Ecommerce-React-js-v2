
    import { createContext, useState ,useEffect} from 'react';

        //Importamos Firebase db
        import {collection, getDocs ,query, where} from "firebase/firestore";
        import { db } from "../firebase/config";

    export const LoginContext = createContext();


   


    
    const usuarios = [
        {
            email: 'ernest_almazan@outlook.com',
            password : 'Dantes98*'
        },
        {
            email: 'pruebas@hotmail.com',
            password : 'Admin2023*'
        },
        {
            email: 'prueba@gmail.com',
            password : 'test09209*'
        }

    ]

    export const LoginProvider = ({children})=>
    {

       const [user, setUser] = useState({
        
         email :'',
         logged :false
       });


        const login = (data) =>{


                    const validar = usuarios.filter(user=> user.email == usuarios.email && user.password == usuarios.password)

                    console.log(validar)

                      
                    if(validar.length > 0)
                    {    
                        setUser ({
                            email : validar.correo,
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