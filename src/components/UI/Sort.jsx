import React from 'react'

const Sort = ({toggle,sort}) => {
   
  return (
    <div className={`bg-gray-200 ${toggle?"absolute":"hidden"} top-10 right-5 z-30 w-30 p-2 rounded-lg`}>
        <p onClick={()=>{sort("high")}} className='text-md font-medium p-2 cursor-pointer hover:rounded-md hover:bg-white'>Price High To Low</p>
        <p onClick={()=>{sort("low")}} className='text-md font-medium p-2 cursor-pointer hover:rounded-md hover:bg-white'>Price Low To High</p>
        <p onClick={()=>{sort("none")}} className='text-md font-medium p-2 cursor-pointer hover:rounded-md hover:bg-white'>Clear</p>
    </div>
  )
}

export default Sort