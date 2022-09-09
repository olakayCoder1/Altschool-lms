import React from 'react'
import MainContentTrendingCard from './MainContentTrendingCard'
import {MdKeyboardArrowRight , MdKeyboardArrowLeft} from 'react-icons/md'

function MainContentTrending() {
  return (
    <div className=' w-full my-3'>
      <div className='relative w-full my-3'>
          <h2 className=' text-lg font-normal text-gray-700 py-3'>Trending in Nigeria</h2>
          <div className=' overflow-x-scroll  flex  gap-3'>
              <MainContentTrendingCard />
              <MainContentTrendingCard />
              <MainContentTrendingCard />
              <MainContentTrendingCard />
              <MainContentTrendingCard />
              <MainContentTrendingCard />
              <MainContentTrendingCard />
              <MainContentTrendingCard />
              <MainContentTrendingCard />
              <MainContentTrendingCard />
              
          </div>

          <p className='absolute top-[50%] -left-1 p-2 bg-gray-50 rounded-full border border-gray-200 cursor-pointer shadow-xl'>
              <MdKeyboardArrowLeft className=' text-2xl font-medium'/>
             </p>
             <p className='absolute top-[50%] -right-1 p-2 bg-gray-50 rounded-full border border-gray-200 cursor-pointer shadow-xl'>
              <MdKeyboardArrowRight className=' text-2xl font-medium'/>
             </p>
          
      </div>
    </div>
  )
}

export default MainContentTrending
