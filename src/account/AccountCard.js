import React, { useState } from 'react'
import {BsFillPenFill} from 'react-icons/bs'

function AccountCard() {

    const [ open , setOpen ] = useState(false)

  return (
    <div className='w-[95%] sm:w-[80%] md:w-[70%] mx-auto bg-white rounded-md p-3'>
            <div className=' flex flex-col  w-full'>
                <h2 className=' text-base font-bold'>Profile Information</h2>
                <div className=' flex justify-between items-center'>
                    <div className='flex gap-2 text-sm text-gray-600 font-normal items-center'>
                        <p>@olakayCoder ,</p>
                        <p>olakay£@gmail.com</p>
                    </div>
                    <p  onClick={()=> setOpen(!open)} className=' p-2 rounded-full bg-gray-200 cursor-pointer'><BsFillPenFill /></p>
                </div>
            </div>

            {open && (
                <form className=' flex gap-2 flex-col'>
                    <div>
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-0 outline-none focus:outline-none focus:border-gray-200   "  placeholder='olakayCoder1'/>
                    </div>
                    <div>
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-0 outline-none focus:outline-none focus:border-gray-200   " placeholder='olakay@gmail.com'/>
                    </div>
                    <div>
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-700">Bio</label>
                        <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-0 outline-none focus:outline-none focus:border-gray-200   " placeholder='tags as an image. You don’t need to use the word' />
                    </div>
                </form>
            )}
      </div>
  )
}

export default AccountCard
