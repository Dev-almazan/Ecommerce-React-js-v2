

import { MdShoppingCart } from 'react-icons/md';

 const CartWidget=({children})=> 
{
  return (
  
        <h3> <MdShoppingCart /><span className='num-cart'>{children}</span> </h3>

  );
}

export default CartWidget;