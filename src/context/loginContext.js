
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
        }
    ]

    export const LoginProvider = ({children})=>
    {

       const [user, setUser] = useState({
        
         email :'',
         logged :false
       });


       const [productos, setProductos] = useState([]);

       

      
       

        const login = (data) =>{



            const users = collection(db,"usuarios");

            getDocs(users).then((result) => {

                //Mapeamos objet agregamos id y data
                const datos =  result.docs.map((datos)=> {
                return {
                        id : datos.id,
                        ...datos.data()
                }
                });
                        
                setProductos(datos)
               
                    const validar = productos.filter(user=> user.email == productos.correo && user.password == productos.contraseña)

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
                    

                    }).catch((err) => {
                            console.log(err);
                    })

       

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