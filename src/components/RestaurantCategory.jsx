/* eslint-disable react/prop-types */

import ItemList from "./ItemList"

const Restaurantcategory= ({data,showItems,setShowIndex})=>{
    
    const handleClick = ()=>{
        setShowIndex()
        

    }
    
 return (
<div>

    <div className="w-6/12 m-auto my-4 p-4 shadow-lg  bg-gray-50">
    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
         <span className="font-bold">{data.title} ({data.itemCards.length})</span>
        <span>⬇️ </span>
    </div>
     {showItems&&<ItemList items={data?.itemCards} />}
    </div>
    </div>
 )



}
export default Restaurantcategory