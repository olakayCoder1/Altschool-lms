import React from 'react'
import {BiPlayCircle} from 'react-icons/bi'
import {BsTextIndentLeft} from 'react-icons/bs'
import {CgPlayListAdd} from 'react-icons/cg'
import olakay from '../assets/olakay.jpeg'


function MainContentPopularCard({Icon}) {
  return (
    <div className=' w-[290px] h-56 border border-gray-300 p-3 rounded-lg flex flex-col justify-between cursor-pointer'>
        <div className=' flex'>
            <img className='mr-2 w-10 h-10 rounded'
                src={olakay} />
            <div className=' flex flex-col overflow-hidden text-ellipsis'>
                <h3 className=' text-base font-normal text-gray-700'>Olanrewaju Abdul-Kabeer</h3>
                <p className='text-gray-500 text-sm font-normal truncate box-border '>hdhdhhdhdhh elements must have an alt prop, either</p>
            </div>
        </div>
        <div className=' flex flex-col overflow-x-hidden pt-3'>
            <h2 className=' text-base font-semibold'>How to handle static files in Django</h2>
            <p className=' text-gray-500 text-sm font-normal  box-border '>
            img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
            </p>
        </div>

        <div className=' flex items-center'>
            <div className=' flex items-center p-1 px-2 border border-gray-300 rounded-r-full rounded-l-full cursor-pointer'>
                <BiPlayCircle  className=' text-blue-700 text-2xl font-normal'/>
                <span className=' ml-2 text-sm font-normal'>2 hrs 8 mins</span>
            </div>

            <p className=' ml-3'>
                <Icon  className=' text-blue-700 text-2xl font-normal cursor-pointer'/>
            </p>
        </div>
    </div>
  )
}

export default MainContentPopularCard
