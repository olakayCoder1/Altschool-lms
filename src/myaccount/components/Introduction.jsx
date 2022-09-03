import React from 'react'
import logo from '../../assets/olakay.jpeg'

function Introduction() {
  return (
    <div>
        <div className=' w-full  bg-gradient-to-r from-[#5d61cf] to-[#0f0f22] text-center text-gray-100 gap-8 py-32'>
            <div className=' w-full h-full flex flex-col gap-8 '>
                <h2 className=' font-bold text-5xl '>My Account</h2>
                <p className=' text-sm font-light'>Welcome to AltSchool Africa, here’s your dashboard</p>
            </div>
        </div>
        <div className=' w-full p-28 pb-8'>
            <div className=' w-full flex flex-col items-center'>
                <div className=' w-36 h-36 bg-no-repeat bg-cover rounded-full' style={{ backgroundImage: `url(${logo})` }}></div>
                <h2 className=' font-bold text-3xl my-2 mt-4'>Olanrewaju</h2>
                <p className='text-sm font-light text-gray-500 my-2'>Edit profile</p>
                <div className=' flex my-4'>
                    <div className=' flex flex-col justify-between gap-6 border-r-[1px] border-gray-300 px-6 py-1 w-fit items-center'>
                        <h2 className=' font-bold text-3xl' >3</h2>
                        <p className='text-sm font-light text-gray-500'>Courses</p>
                    </div>
                    <div className=' flex flex-col justify-between gap-6 border-r-[1px] border-gray-300 px-6 py-1 w-fit items-center'>
                        <h2 className=' font-bold text-3xl' >2</h2>
                        <p className='text-sm font-light text-gray-500'>Completed</p>
                    </div>
                    <div className=' flex flex-col justify-between gap-6 border-r-[1px] border-gray-300 px-6 py-1 w-fit items-center'>
                        <h2 className=' font-bold text-3xl' >0</h2>
                        <p className='text-sm font-light text-gray-500'>Certificates</p>
                    </div>
                    <div className=' flex flex-col justify-between gap-6 border-r-[1px] border-gray-300 px-6 py-1 w-fit items-center'>
                        <h2 className=' font-bold text-3xl' >0</h2>
                        <p className='text-sm font-light text-gray-500'>Points</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Introduction
