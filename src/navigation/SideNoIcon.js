import React from 'react'

function SideNoIcon({title, path}) {


  if( path === '/xyzh'){
    return (
      <div className='px-6 w-full flex items-center text-sm font-medium py-3 mr-2 rounded-r-full bg-blue-100 text-blue-700 cursor-pointer'>
        <h2 className=' ml-2'>{title}</h2>
      </div>
    )
  }else{
    return (
      <div className='px-6 w-full flex items-center text-sm font-medium py-3 mr-2 rounded-r-full  text-gray-700 hover:text-blue-700 cursor-pointer'>
        <h2>{title}</h2>
      </div>
    )
  }
}

export default SideNoIcon
