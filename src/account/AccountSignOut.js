import React, { useState } from 'react'
import {BsFillPenFill} from 'react-icons/bs'

function AccountSignOut() {

    const [ open , setOpen ] = useState(false)

  return (
    <div className='w-full mx-auto bg-white rounded-md p-3'>
        <div className=' flex flex-col  w-full'>
            <h2 className=' text-base font-bold '>Sign Out</h2>
            <div className=' flex justify-between items-center'>
                <div className='flex gap-2 text-sm text-gray-600 font-normal items-center'>
                    <p className=' '>sign out</p>
                </div>
                <p  onClick={()=> setOpen(!open)} className=' p-2 rounded-full bg-gray-200 cursor-pointer'><BsFillPenFill /></p>
            </div>
        </div>

        {open && (
            <form className=' flex gap-2 flex-col'>
                <p>Are you sure want to sign out ?</p>
                <p className='font-normal text-sm p-1 w-fit px-3 rounded-md bg-blue-700 text-gray-100 hover:bg-blue-800 cursor-pointer flex items-center gap-2 place-content-center'>
                    <span>Sign out</span>
                </p>
                
            </form>
        )}
    </div>
  )
}

export default AccountSignOut
