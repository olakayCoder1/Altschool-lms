import React from 'react'
import olakay from '../assets/olakay.jpeg'
import olakay1 from '../assets/AltSchool-logo-light.png'
import {AiOutlineLike} from 'react-icons/ai'
import {BsChatDots} from 'react-icons/bs'
import PostCommentDetail from './PostCommentDetail'

function PostDetailContent() {
  return (
    <div className='max-w-[550px] mx-auto bg-gray-200 border rounded-md'>
        <div className=' bg-white flex items-center gap-2 p-2  rounded-tl-md rounded-tr-md'>
            <div className=' w-10 h-10 bg-cover bg-no-repeat bg-center rounded-full ' style={{ backgroundImage: `url(${olakay})`}}></div>
            <div className=' flex flex-col'>
                <h2 className=' text-gray-700 font-medium text-sm flex items-center hover:text-blue-600 cursor-pointer'>olakayCoder1</h2>
                <span className=' text-gray-500 font-normal text-xs'>September 6 at 12:37pm</span>
            </div>
        </div>
        <p className='bg-white text-gray-600 text-sm font-medium p-2 pb-4'>
            Installing flask without venv, means you installed it globally,
            these frameworks version are changed everyday, 
            if you install it globally, you will start having conflicting version issues 
            later on as you progress and build more applications sor-pointer....See more if 
            you install it globally, you will start having conflicting version issues 
            later on as you progress and build more applications sor-pointer....See mor
            if you install it globally, you will start having conflicting version issues 
            later on as you progress and build more applications sor-pointer....See mor
            if you install it globally, you will start having conflicting version issues 
            later on as you progress and build more applications sor-pointer....See mor
        </p>
        <div className=' max-w-[700px]'>
            <img src={olakay1} alt='post-image' className=' w-full' />
        </div>
        <div className='bg-white flex justify-between items-center p-2'>
            <p className='flex items-center '>
                
                <span className=' text-gray-500 text-xs font-normal'>43 Likes</span>
            </p>
            <p className=' text-gray-500 text-xs font-normal cursor-pointer hover:text-blue-500 hover:underline'>23 comments</p>
        </div>
        <div className=' w-full bg-white flex justify-around py-2 gap-2 px-2 border-b border-t'>
            <p className=' w-3/6  flex items-center place-content-center p-1 cursor-pointer hover:bg-gray-200 rounded-md'><AiOutlineLike className=' w-6 h-6'/></p>
            <p className=' w-3/6  flex items-center place-content-center p-1 cursor-pointer hover:bg-gray-200 rounded-md'><BsChatDots className=' w-6 h-6'/></p>
        </div>
        <div className=' bg-white flex items-center gap-2 p-2 py-4  rounded-bl-md rounded-br-md'>
            <div className=' w-10 h-10 bg-cover bg-no-repeat bg-center rounded-full ' style={{ backgroundImage: `url(${olakay})`}}></div>
            <div className='grow'>
                <input type='text' placeholder='Type comment...'
                className=' w-full focus:ring-0  border outline-0 focus:outline-0 focus:border-gray-500 border-gray-500 rounded-full text-sm font-normal placeholder:text-sm placeholder:font-normal'/>
            </div>
        </div>

        <PostCommentDetail />
        <PostCommentDetail />
        <PostCommentDetail />
        
      </div>
  )
}

export default PostDetailContent
