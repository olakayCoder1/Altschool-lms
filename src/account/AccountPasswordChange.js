import React, { useState } from 'react'
import {BsFillPenFill} from 'react-icons/bs'

function AccountPasswordChange() {

    const [ open , setOpen ] = useState(false)

  return (
    <div className='w-full mx-auto bg-white rounded-md p-3'>
        <div className=' flex flex-col  w-full'>
            <h2 className=' text-base font-bold'>Change password</h2>
            <div className=' flex justify-between items-center'>
                <div className='flex gap-2 text-sm text-gray-600 font-normal items-center'>
                    <p>********</p>
                </div>
                <p  onClick={()=> setOpen(!open)} className=' p-2 rounded-full bg-gray-200 cursor-pointer'><BsFillPenFill /></p>
            </div>
        </div>

        {open && (
            <form className=' flex gap-2 flex-col'>
                <div>
                    <label htmlFor="ps1" className="block mb-2 text-sm font-medium text-gray-700">Current password</label>
                    <input type="password" id="ps1" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-0 outline-none focus:outline-none focus:border-gray-200   "  placeholder='********'/>
                </div>
                <div>
                    <label htmlFor="ps2" className="block mb-2 text-sm font-medium text-gray-700">New password</label>
                    <input type="password" id="ps2" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-0 outline-none focus:outline-none focus:border-gray-200   " placeholder='********'/>
                </div>
                <div>
                    <label htmlFor="ps3" className="block mb-2 text-sm font-medium text-gray-700">Confirm new password</label>
                    <input type="password" id="ps3" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-0 outline-none focus:outline-none focus:border-gray-200   " placeholder='********' />
                </div>
                <p className='font-normal text-sm p-1 w-fit px-3 rounded-md bg-blue-700 text-gray-100 hover:bg-blue-800 cursor-pointer flex items-center gap-2 place-content-center'>
                    <span>Save changes</span>
                </p>
            </form>
        )}
    </div>
  )
}

export default AccountPasswordChange
