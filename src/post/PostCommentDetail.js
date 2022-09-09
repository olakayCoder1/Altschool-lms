import React from 'react'
import olakay from '../assets/olakay.jpeg'

function PostCommentDetail() {
  return (
    <div className=' bg-white flex justify-between  gap-2 p-2  '>
        <div className=' w-10 h-10 bg-cover bg-no-repeat bg-center rounded-full ' style={{ backgroundImage: `url(${olakay})`}}></div>
        <div className=' w-[90%] '>
            <div className=' border border-gray-100 p-1 bg-gray-100 text-gray-700 rounded-lg'>
                <div className=' flex flex-col'>
                    <h2 className='w-fit text-gray-700 font-medium text-sm flex items-center hover:text-blue-600 cursor-pointer'>olakayCoder1</h2>
                    <span className=' text-gray-500 font-normal text-xs'>September 6 at 12:37pm</span>
                </div>
                <p className='text-sm font-normal p-2'>Installing flask without venv, means you installed it globally,
                    these frameworks version are changed everyday, 
                    if you install it globally, you will start having conflicting version issues 
                </p>
            </div>
        </div>
    </div>
  )
}

export default PostCommentDetail
