import React from 'react'
import logo from '../../assets/AltSchool-logo-light.png';
import {BsList} from 'react-icons/bs'


function HomeHeader() {
  return (
    <div className=' flex justify-between items-center w-full pl-4  pt-6 pb-4 bg-white sticky top-0'>
      <img src={logo} alt='Olakay-Altschool' />
      <div className=' flex font-bold text-lg gap-2 md:gap-8 lg:gap-12 items-center lg:mr-8'>
        <p className='hidden lg:block p-3 hover:bg-gray-200 cursor-pointer'>Home</p>
        <p className='hidden lg:block  p-3 bg-[#f8f3ee] cursor-pointer'>My Account</p>
        {/* <p className=' border-[1px] border-gray-800 w-fit  '>
            <span className=' w-full h-full font-thin text-sm p-3 bg-black text-white cursor-pointer hover:text-gray-700 hover:bg-gray-50'>LOG OUT</span>
        </p> */}
        <p className=' lg:hidden  p-1 border-gray-800 border-[1px]'>
          <BsList className=' w-6 h-6'/>
        </p>
        <p className=' font-thin text-sm p-3 px-4 bg-black text-white cursor-pointer hover:text-gray-800 hover:bg-gray-50'>LOG OUT</p>
      </div>
    </div>
  )
}

export default HomeHeader
