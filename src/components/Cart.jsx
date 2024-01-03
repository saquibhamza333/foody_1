import ItemList from './ItemList'
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

  const dispatch =useDispatch();

  const handleClearCart=()=>{
    dispatch(clearCart());

  }

  
  const cartItems = useSelector((store)=>store.cart.items);
  return (
  <div className='text-center m-4 p-4'>
  <h1 className='text-2xl font-bold'>Cart</h1>
 
  <div className='w-6/12 m-auto'>
   <button onClick={handleClearCart}>ClearCart</button>
   {cartItems.length==0&&<h1>please add something</h1>}
  <ItemList items ={cartItems}></ItemList>
  </div>
  </div>
  )
}

export default Cart