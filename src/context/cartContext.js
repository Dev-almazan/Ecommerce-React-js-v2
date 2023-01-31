
    import { createContext, useState ,useEffect} from 'react';


    export const CartContext = createContext();


    const init = JSON.parse(localStorage.getItem('cart')) || [];

    export const CartProvider = ({children})=>
    {
       
        const [cart, setCart] = useState(init);
                
        console.log(cart) 

        const addCarrito = (valores) =>
        {
            setCart([...cart,valores]);
            
        }


        const isInCart = (id) =>
        {
            return cart.some(item =>  item.id === id )
        }

        const emptyCart =()=>
        {
            setCart([]);
        }

        const emptyItem =(id)=>
        {
            setCart(cart.filter(item => item.id !== id ))
        }


        const totalCart =()=>
        {
        return cart.reduce((accu,item)=> accu + item.price * item.cantidad,0 ) 
        }
        
        const totalCant =()=>
        {
        return cart.reduce((accu,item)=> accu +  item.cantidad,0 ) 
        }

        console.log(cart)

        useEffect(() => {
            localStorage.setItem('cart',JSON.stringify(cart)) 
        }, [cart]);

        return(
            <CartContext.Provider value={
                {
                    cart,
                    addCarrito,
                    isInCart,
                    emptyCart,
                    emptyItem,
                    totalCart,
                    totalCant
                }
            }>
                
                {children}
            </CartContext.Provider>
        )

    }