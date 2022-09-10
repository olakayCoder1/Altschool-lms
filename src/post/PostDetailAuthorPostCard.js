import React from 'react'
import olakay from '../assets/olakay.jpeg'


function PostDetailAuthorPostCard() {
  return (
    <div className=' w-full max-h-20 overflow-hidden flex items-center gap-2 hover:bg-gray-100 rounded-md cursor-pointer border p-3 '>
      <div className=' w-[25%] h-16 bg-cover bg-no-repeat bg-center rounded-tl-md rounded-bl-md ' style={{ backgroundImage: `url(${olakay})`}}></div>
      <p className='w-[70%]  text-gray-600 text-xs font-normal '>these frameworks version are changed everyday, 
            if you install it globally, you will start having conflicting version issues....
        </p>
    </div>
  )
}

export default PostDetailAuthorPostCard
