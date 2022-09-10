import React from 'react'
import olakay from '../assets/olakay.jpeg'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsDot,BsInfoCircle} from 'react-icons/bs'

function UserProfileHeader() {
  return (
    <div className=' mb-2 bg-gray-200 rounded-md p-2 py-4'>
        <div className='w-full  flex justify-between items-center pb-2 '>
            <div className=' w-full flex gap-4 items-center '>
            <div className=' w-20 h-20 bg-no-repeat bg-cover rounded-full' style={{ backgroundImage: `url(${olakay})` }}></div>
            <div>
                <h2 className=' text-base font-bold'>@olakayCoder1</h2>
                <p className='text-gray-600 font-medium text-sm'>programmerolakay@gmail.com</p>
                <p className=' text-gray-500 font-normal text-xs flex items-center'><span className=' hover:text-blue-500 hover:underline '>120 followers</span> <BsDot className='text-sm font-bold' /> <span className=' hover:text-blue-500 hover:underline '>120 following</span></p>
            </div>
        </div>
            <p className='md:hidden font-normal text-sm mr-4 p-2 max-w-[100px] px-4 rounded-md bg-blue-700 text-gray-100 hover:bg-blue-800 cursor-pointer flex items-center gap-2 place-content-center'>
                <AiOutlinePlus />
                <span>Follow</span>
            </p>
        </div>
        <div className=' flex gap-1 items-center'>
            <p className=' p-1 bg-gray-200 rounded-full'><BsInfoCircle /></p>
            <p className=' text-sm font-normal'>
                The Ministry of Prayer And The Word by Apostle Joshua Selman
            </p>
        </div>
        
    </div>
    

  )
}

export default UserProfileHeader
