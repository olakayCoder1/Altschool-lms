import React from 'react'
import olakay from '../assets/olakay.jpeg'
import {AiOutlinePlus} from 'react-icons/ai'


function UsersListContainer() {

  return (
    <div className='flex items-center gap-2 p-2 border-b-[1px]  '>
      <div className=' w-12 h-12 bg-cover bg-no-repeat bg-center rounded-md ' style={{ backgroundImage: `url(${olakay})`}}> </div>
      <div className=' flex items-start'>
        <div className=''>
            <h2 className=' text-base font-semibold cursor-pointer'>@olakayCoder1</h2>
            <p className='text-gray-600 font-normal text-xs'>programmerolakay@gmail.com</p>
            <p className='text-gray-500 font-normal text-sm'>Redundant alt attribute. Screen-readers already announce</p>
        </div>
        <p className='font-normal text-sm p-1 max-w-[100px] px-3 rounded-md  text-gray-700 border border-gray-400 cursor-pointer flex items-center gap-2 place-content-center'>
            <AiOutlinePlus />
            <span>Follow</span>
            </p>
      </div>
      
    </div>
  )
}

export default UsersListContainer
