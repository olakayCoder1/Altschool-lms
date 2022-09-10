import React from 'react'
import olakay from '../assets/olakay.jpeg'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsDot,BsInfoCircle} from 'react-icons/bs'

function UserPost() {
  return (
    <div className='w-full border-b hover:bg-gray-100 hover:rounded-md cursor-pointer overflow-y-hidden p-2 my-2 '>
      <div className=' w-full' >
        {/* <p className='flex items-center text-gray-600 font-normal text-xs'><span>@olakay</span><BsDot /><span> September 4, 3030</span>
        </p> */}
        <p className=' text-sm font-normal'>I'm a Software Engineer. I'm passionate about sharing knowledge,
                    web engineering, headless commerce, 
                    and others. I've made a lot of projects with multiple web technologies.,
                    build useful open-source projects, speak at some meetups/conferences
            </p>
            <div className=' flex items-center gap-3'>
                <div className=' w-16 h-16 bg-no-repeat bg-cover rounded-md' style={{ backgroundImage: `url(${olakay})` }}></div>
                <div>
                    <h3 className=' text-base font-semibold'>Installing flask without venv</h3>
                    <p className='flex items-center text-gray-600 font-normal text-xs'><span>@olakay</span><BsDot /><span> September 4, 3030</span></p>
                    
                </div>
                
            </div>

      </div>
    </div>
  )
}

export default UserPost
