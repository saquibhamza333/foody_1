/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { IMG_URL } from '../utils/constant'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'

const ItemList = ({items}) => {
  const dispatch = useDispatch();
  console.log(items);

  const handleAddItem = (item) =>{
    
    dispatch(addItem(item));
  };

  return (
    
    <div>

        {items.map((item)=>(
            
            <div className='p-2 m-2 border-b-2 text-left flex justify-between'> 

            <div className='w-9/12'>

            <div className='py-2 font-semibold'>
            <span>{item?.card?.info?.name}</span>
            <span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}</span>
            </div>
    
            <p className='text-xs'>{item?.card?.info?.description}</p>
            </div>

            <div className='w-4/12 p-4 relative'>
            <div className='absolute bg-black bottom-4 left-14 text-zinc-100 rounded-md px-1' >
                <button onClick={()=>handleAddItem(item)} >Add + </button>
            </div>
            
            <img src={IMG_URL+ item?.card?.info?.imageId} className='w-full rounded-md'></img>
            </div>

            </div>
            
            

            

        ))}
    </div>
  )
}

export default ItemList