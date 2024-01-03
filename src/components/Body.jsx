import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants,setDuplRestaurants } from '../utils/restaurantSlice';


import {RES_DATA} from '../utils/constant'
import RestaurantCard from './RestaurantCard'

import { Link } from 'react-router-dom'

const Body = () => {
const dispatch = useDispatch();
 
  const duplResList = useSelector((store) => store.restaurant.duplItems);

const fetchData = async () => {
  try {
    const data = await fetch(RES_DATA);
    const json = await data.json();
    


    dispatch(setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
     dispatch(setDuplRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
   
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
    // Handle error, e.g., display an error message or retry fetching
  }
};

useEffect(() => {
  fetchData();
}, []);

  
  return (

    <div>

   
{/* 
     <button onClick={()=>{
       const filteredRestaurant= resList.filter((res)=>res?.info?.avgRating>=4.2);
      setResList(filteredRestaurant); 


    }}>Top Rated Restaurant</button> */}

    


  
{duplResList.length ===0 ?<p>hello</p> :(
 <div className='flex flex-wrap justify-center mt-2'>
        {
          duplResList.map((restaurant) =>  (
            
            <Link key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}><RestaurantCard key ={restaurant.info.id} resData={restaurant?.info} /></Link>
          )
        )}
      </div>
)
}   
</div>
  )
  
}

export default Body