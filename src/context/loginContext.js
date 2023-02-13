
    import { createContext, useState ,useEffect} from 'react';

        //Importamos Firebase db
        import {collection, getDocs ,query, where} from "firebase/firestore";
        import { db } from "../firebase/config";

    export const LoginContext = createContext();



    export const LoginProvider = ({children})=>
    {

       const [user, setUser] = useState({
        
         email :'',
         logged :false
       });


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


                     const validar = datos.filter(user=> user.correo == data.correo && user.contraseña == data.contraseña)

                        if(validar.length > 0)
                        {    
                            setUser ({
                                email : validar[0].correo,
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
 
                      
                    });

                   
       

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