

import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';


 const CartWidget=({children})=> 
{
  return (
  
        <Link to="/cart" className='list' ><h3><MdShoppingCart /><span className='num-cart'>{children}</span></h3> </Link>

  );
}

export default CartWidget;