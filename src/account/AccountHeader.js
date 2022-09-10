import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiSearch} from 'react-icons/bi'
import {BsGrid3X3Gap} from 'react-icons/bs'
import olakay from '../assets/olakay.jpeg'


function AccountHeader(props) {
  function toggleBar(){
    props.handleNav()
    props.mobileNav()
    props.lgNavHandle()
}
  return (
    <div className=' w-full h-16 fixed top-0 flex items-center bg-white z-50 px-4 lg:pl-10'>
      <div className=' w-full flex items-center  lg:px-3 pr-4 lg:pl-0 box-border'>
          <div className=' md:hidden w-[25%] flex items-center py-2'>
                <p onClick={toggleBar}
                    className=' p-3 hover:bg-gray-300 rounded-full cursor-pointer'>
                  <GiHamburgerMenu className=' text-xl font-semibold text-gray-500'/>
                </p>
                <h2 className=' ml-2 text-xl font-light font-logo'>Dzenith</h2>
          </div>
          <div className='grow md:max-w-[400px] lg:max-w-[500px]'>
            <div className='  h-full '>
                <form className='hidden md:block lg:grow'>   
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-100  outline-none focus:shadow-md focus:bg-white focus:ring-0 focus:border-gray-50 placeholder:text-base placeholder:font-light placeholder:text-gray-300" placeholder="Search for post" required />
                    </div>
                    </form>
            </div>
          </div>
          
          <div className='flex items-center'>
                <p className='md:hidden'>
                <BiSearch />
                </p>
              <p className=' p-3 hover:bg-gray-300 rounded-full cursor-pointer'>
              <BsGrid3X3Gap className=' text-lg font-semibold text-gray-500'/>
              </p>
              <img className='w-8 h-8 rounded-full'
                src={olakay} />
          </div>
      </div>
    </div>
  )
}

export default AccountHeader
