import { useEffect, useState } from 'react'
import { CAROUSEL_IMG, RES_DATA } from '../utils/constant'
const Hero = () => {
    const [carousel,setCarousel] = useState([]);
    const fetchData = async () => {
  try {
    const data = await fetch(RES_DATA);
    const json = await data.json();
    
    setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    console.log(carousel);
  } catch (error) {
    console.error('Error fetching carousel data:', error);
    
  }
}
    useEffect(()=>{
      fetchData();


    },[]);


  return (
    
    <div className='container mx-auto mt-28  w-3/4'>
    <div >
      <span className='font-bold text-3xl text-red-600 '>
      Whats on your mind?</span>
    </div>


    <div className=' mx-auto  overflow-x-auto flex justify-center '>
    {carousel.map((card) => (
  <div key={card.imageId} className='m-2 p-1 flex-shrink-0'>
    <img src={CAROUSEL_IMG + card.imageId} className='w-40 h-44' alt={`carousel-${card.imageId}`} />
  </div>
))}


    </div>
    </div>
    

  )
}


export default Hero;