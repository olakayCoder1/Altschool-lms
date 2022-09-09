import React from 'react'

function SidebarRow({title , Icon , current }) {
  return (
      
    <div className='px-6 w-full flex items-center text-sm font-medium py-3 mr-2 rounded-r-full text-gray-700 hover:text-blue-700 cursor-pointer'>
        <Icon  className=" text-lg"/>
        <h2 className=' ml-2'>{title}</h2>
    </div>
     
    
  )
}

export default SidebarRow
