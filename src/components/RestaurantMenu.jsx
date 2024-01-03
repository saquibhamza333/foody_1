
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from "./RestaurantCategory"
import { useParams } from 'react-router-dom'
import { useState } from 'react'




const RestaurantMenu = () => {
  const {resId }= useParams();
  const resMenu = useRestaurantMenu(resId);
  const[showIndex,setShowIndex]=useState(null);
  


 if(resMenu===null) return <p>hello boss</p>;

    // const {itemCards}= resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // eslint-disable-next-line no-unsafe-optional-chaining
    const {name,cuisines,costForTwo}= resMenu?.data?.cards[0]?.card?.card?.info;
      
    const categories = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
      c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));
    


  return (
    <div className="text-center">
    <h1 className='font-bold my-6 text-2xl'>{name}</h1>
    <p>{cuisines.join(" , ")}-{costForTwo} </p>
    {categories.map((category, index) => (
  <RestaurantCategory
    key={category.categoryId}  // Assuming categoryId is a unique identifier
    data={category?.card?.card}
    showItems={index === showIndex && true}
    setShowIndex={() => showIndex !== null ? setShowIndex(null) : setShowIndex(index)}
  />
))}

    


    

    </div>
 

      

  

      )
     

  
}

export default RestaurantMenu