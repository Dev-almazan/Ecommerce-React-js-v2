
import { BsFillBagPlusFill } from "react-icons/bs";

import { useState } from "react";

    const ItemCount = ({cantidad,setCantidad,max,handleAgregar}) =>
    {

    

        const handleResta =() =>
        {
            cantidad > 1 && setCantidad(cantidad - 1);
        }

        const handleSuma=() =>
        {
           
            cantidad < max && setCantidad(cantidad + 1);
          
        }



        return(

            <div className="contador">
                <div className="cont">
                        <button  className="btn " onClick={handleResta}><span className="mx-3 num text-primary pb-4"><b>-</b></span></button>
                        <span className="mx-3 numc">{cantidad}</span>
                        <button  className="btn " onClick={handleSuma}><span className="mx-3 num text-primary" ><b>+</b></span></button>

                </div>
                <div className="cont">
                         <button className="btn btn-primary mx-1 mt-1" onClick={handleAgregar}><span className="mx-3 numc"><BsFillBagPlusFill /> Agregar al carrito </span></button>
                </div>
                   
            </div>
            )
    }   

    export default ItemCount;