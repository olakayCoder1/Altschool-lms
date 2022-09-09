import React from 'react'
import olakay from '../assets/olakay.jpeg'


function PostDetailAuthorPostCard() {
  return (
    <div className='h-16 w-full flex items-center hover:bg-gray-100 rounded-md cursor-pointer hover:border border-blue-400'>
      <div className=' w-[30%] h-16 bg-cover bg-no-repeat bg-center rounded-tl-md rounded-bl-md ' style={{ backgroundImage: `url(${olakay})`}}></div>
      <p className='w-[70%]  text-gray-600 text-xs font-normal p-3 '>these frameworks version are changed everyday, 
            if you install it globally, you will start having conflicting version issues....
        </p>
    </div>
  )
}

export default PostDetailAuthorPostCard
