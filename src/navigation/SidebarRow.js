import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function SidebarRow({title , Icon , current , path }) {

  let navigate = useNavigate()

 

  if( path === window.location.pathname){
    return (
      
      <div  onClick={()=> navigate(`${path}`)} className='px-6 w-full flex items-center text-sm font-medium py-3 mr-2 rounded-r-full bg-blue-100 text-blue-700 cursor-pointer'>
        <Icon  className=" text-lg"/>
        <h2 className=' ml-2'>{title}</h2>
      </div>
    
      
    )
  }else{
    return (
      
      <div onClick={()=> navigate(`${path}`)} className='px-6 w-full flex items-center text-sm font-medium py-3 mr-2 rounded-r-full text-gray-700 hover:text-blue-700 cursor-pointer'>
          <Icon  className=" text-lg"/>
          <h2 className=' ml-2'>{title}</h2>
      </div>
    
      
       
      
    )
  }
  
}

export default SidebarRow
