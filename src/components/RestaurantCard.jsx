/* eslint-disable react/prop-types */
import { IMG_URL } from '../utils/constant';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    // deliveryTime,
  } = resData;

  return (
    <div className='w-[250px] m-4 p-4   transition duration-300 hover:border-red-500 hover:shadow-lg hover:bg-gray-50 rounded-lg'>
      <div className='overflow-hidden rounded-lg'>
        <img
          src={IMG_URL + cloudinaryImageId}
          alt={name}
          className='w-full h-48 object-cover rounded-t-lg'
        />
      </div>
      <div className='mt-4'>
        <h4 className='font-bold text-xl'>{name}</h4>
        <p className='text-gray-600'>⭐ {avgRating} stars</p>
        <p className='truncate w-32 p-1'>{cuisines.join(', ')}</p>
        <p className='text-gray-600'>📍 {areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;