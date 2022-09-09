import React from 'react'
import olakay from '../assets/olakay.jpeg'
import {AiOutlineLike} from 'react-icons/ai'
import {BsChatDots} from 'react-icons/bs'



function MainHappeningCard() {

    return (
      <div className='  bg-gray-200 border rounded-md'>
        <div className=' bg-white flex items-center gap-2 p-2  rounded-tl-md rounded-tr-md'>
            <div className=' w-10 h-10 bg-cover bg-no-repeat bg-center rounded-full ' style={{ backgroundImage: `url(${olakay})`}}></div>
            <div className=' flex flex-col'>
                <h2 className=' text-gray-700 font-medium text-sm flex items-center hover:text-blue-600 cursor-pointer'>olakayCoder1</h2>
                <span className=' text-gray-500 font-normal text-xs'>September 6 at 12:37pm</span>
            </div>
        </div>
        <h3 className=' text-base font-semibold bg-white px-2'>Installing flask without venv</h3>
        <p className='bg-white text-gray-600 text-sm font-medium p-2 pb-4'>
            Installing flask without venv, means you installed it globally,
            these frameworks version are changed everyday, 
            if you install it globally, you will start having conflicting version issues 
            later on as you progress and build more applications <span className=' p-1 bg-gray-50 rounded-2xl shadow-md hover:bg-gray-200 float-right cursor-pointer'>....See more</span>
        </p>
        <div className=' max-w-[700px]'>
            <img src={olakay} alt='post-image' className=' w-full' />
        </div>
        <div className='bg-white flex justify-between items-center p-2'>
            <p className='flex items-center '>
                {/* <span className='p-[2px] bg-blue-400 rounded-full text-gray-100'>
                    <AiOutlineLike className=' w-3 h-3'/>
                </span> */}
                
                <span className=' text-gray-500 text-xs font-normal'>43 Likes</span>
            </p>
            <p className=' text-gray-500 text-xs font-normal cursor-pointer hover:text-blue-500 hover:underline'>23 comments</p>
        </div>
        <div className=' w-full bg-white flex justify-around py-2 gap-2 px-2 border-b border-t'>
            <p className=' w-3/6  flex items-center place-content-center p-1 cursor-pointer hover:bg-gray-200 rounded-md'><AiOutlineLike className=' w-6 h-6'/></p>
            <p className=' w-3/6  flex items-center place-content-center p-1 cursor-pointer hover:bg-gray-200 rounded-md'><BsChatDots className=' w-6 h-6'/></p>
        </div>
        <div className=' bg-white flex items-center gap-2 p-2  rounded-bl-md rounded-br-md'>
            <div className=' w-10 h-10 bg-cover bg-no-repeat bg-center rounded-full ' style={{ backgroundImage: `url(${olakay})`}}></div>
            <div className='grow'>
                <input type='text' placeholder='Type comment...'
                className=' w-full focus:ring-0  border outline-0 focus:outline-0 focus:border-gray-500 border-gray-500 rounded-full text-sm font-normal placeholder:text-sm placeholder:font-normal'/>
            </div>
        </div>
      </div>
    )
  }



function MainHappening() {
  return (
    <div className=' w-full'>
        <div className=' max-w-[480px] mx-auto flex flex-col gap-4 '>
            <MainHappeningCard />
            <MainHappeningCard />
            <MainHappeningCard />
        </div>
      
    </div>
  )
}

export default MainHappening
