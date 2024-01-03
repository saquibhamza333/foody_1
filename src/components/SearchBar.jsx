
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setDuplRestaurants } from '../utils/restaurantSlice';

const SearchBar = () => {
  const[searchText,setSearchText]=useState("");
  const restaurants= useSelector((store) => store.restaurant.items);

  const dispatch =useDispatch();
  const handleSearchClick = () => {
 
  console.log("Search component clicked!");

  
  const filteredList = restaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  dispatch(setDuplRestaurants(filteredList));
};

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-4xl w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="w-full py-2 pl-12 pr-4 border border-red-500 rounded-full focus:outline-none focus:border-red-700 transition duration-300 bg-white text-gray-800"
          value={searchText} onChange={(e)=>{
        setSearchText(e.target.value);

      }}/>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center ">
  <Search size={24} color="#E53E3E" onClick={handleSearchClick} className='cursor-pointer' />
</div>

        </div>
      </div>
    </div>
  );
};

export default SearchBar;