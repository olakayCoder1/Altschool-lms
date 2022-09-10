import React from 'react'
import olakay from '../assets/olakay.jpeg'
import {BsDot} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'


function UserLeftCard() {
  return (
    <div className='hidden sm:block sm:w-[35%] bg-white'>
        <div className=' w-full p-4'>
            <div className=' w-full h-fit border-gray-200 py-4'>
              <div className=' w-20 h-20 bg-cover bg-no-repeat bg-center rounded-full ' style={{ backgroundImage: `url(${olakay})`}}></div>
              <div className=' flex flex-col gap-2'>
                <h2 className=' text-base font-semibold'>@olakayCoder1</h2>
                <p className='text-gray-600 font-normal text-sm'>programmerolakay@gmail.com</p>
                <p className=' text-gray-500 font-normal text-xs flex items-center'><span className=' hover:text-blue-500 hover:underline '>120 followers</span> <BsDot className='text-sm font-bold' /> <span className=' hover:text-blue-500 hover:underline '>120 following</span></p>
                <p className='font-normal text-sm p-1 max-w-[100px] px-3 rounded-md bg-blue-700 text-gray-100 hover:bg-blue-800 cursor-pointer flex items-center gap-2 place-content-center'>
                  <AiOutlinePlus />
                  <span>Follow</span>
                  </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default UserLeftCard
