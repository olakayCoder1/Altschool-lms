import React, { useState } from 'react'
import {BsListUl ,BsTextIndentLeft,BsGrid3X3Gap, BsBoxArrowInUpRight} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome,AiOutlinePlus} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import {MdOutlineQuiz} from 'react-icons/md'
import SidebarRow from './SidebarRow'
import SideNoIcon from './SideNoIcon'
import {BiSearch} from 'react-icons/bi'



function Sidebar(props) {


  function toggleBar(){
    props.handleNav()
    props.mobileNav()
    props.handleComputerNav()
}

return (

    <>
    <div className='hidden md:block md:w-[20%] min-w-[200px] bg-white z-50  fixed  md:static top-0 left-0 bottom-0 '>
      <div className="hidden md:block w-full border-b z-50 border-t py-3 overflow-y-scroll px-2 ">
        <div className='hidden w-full md:flex items-center py-2'>
              <p onClick={toggleBar}
                className=' p-3 hover:bg-gray-300 rounded-full cursor-pointer'>
                <GiHamburgerMenu className=' text-xl font-semibold text-gray-500'/>
              </p>
            <h2 className=' ml-2 text-xl font-light font-logo'>Deyyzenith</h2>
        </div>
      </div>


      <div className={`${props.computerNav ? " bg-white lg:w-full pr-4 py-2" : "lg:hidden"} duration-400`}>
        <div className=' md:hidden flex items-center py-2'>
          <p onClick={toggleBar}
              className=' p-3 hover:bg-gray-300 rounded-full cursor-pointer'>
            <GiHamburgerMenu className=' text-xl font-semibold text-gray-500'/>
          </p>
          <h2 className=' ml-2 text-xl font-light font-logo'>Deyyzenith</h2>
        </div>
          <SidebarRow title="For You" Icon={AiFillHome} path='/xyzposts'/>
          <SidebarRow title="Quiz" Icon={MdOutlineQuiz} path='/xyzposts/users'/>
          <SidebarRow title="Queue" Icon={CgPlayListAdd} path='/xyzposts/1'/>
          <SidebarRow title="Write Story" Icon={AiOutlinePlus} path='/xyzposts/create'/>
          <hr className=' my-4 text-gray-300'/> 
          <SideNoIcon title="Account" path='/account'/>
          <SideNoIcon title="Help" path='/'/>
          <SideNoIcon title="Publisher guidelines" path='#'/>
          <SideNoIcon title="Send feedback" path='#'/>
          <hr className=' my-4 text-gray-300' path='#'/> 
          <SidebarRow title="Get the android app" Icon={BsBoxArrowInUpRight} path='#'/>
          <SidebarRow title="Get the IOS app" Icon={BsBoxArrowInUpRight} path='#'/>
          <p className=' text-xs font-base text-gray-400 px-6 my-4'>Privacy. Terms</p>
      </div> 
    </div>

    
    <div className={`${props.mobile ? "bg-white fixed z-50 w-[45%] min-w-[200px] max-w-[250px] h-screen  top-0 left-0 bottom-0" : " hidden md:hidden  duration-400 " } md:hidden  `}>
      <div>
        <div className=' md:hidden flex items-center py-2'>
          <p onClick={toggleBar}
              className=' p-3 hover:bg-gray-300 rounded-full cursor-pointer'>
            <GiHamburgerMenu className=' text-xl font-semibold text-gray-500'/>
          </p>
          <h2 className=' ml-2 text-xl font-light font-logo'>Deyyzenith</h2>
        </div>
          <SidebarRow title="For You" Icon={AiFillHome} path='/xyzposts'/>
          <SidebarRow title="Quiz" Icon={MdOutlineQuiz} path='/xyzposts/users'/>
          <SidebarRow title="Queue" Icon={CgPlayListAdd} path='/xyzposts/1'/>
          <SidebarRow title="Write Story" Icon={AiOutlinePlus} path='/xyzposts/create'/>
          <hr className=' my-4 text-gray-300'/> 
          <SideNoIcon title="Account" path='/account'/>
          <SideNoIcon title="Help" path='#'/>
          <SideNoIcon title="Publisher guidelines" path='#'/>
          <SideNoIcon title="Send feedback" path='#'/>
          <hr className=' my-4 text-gray-300' path='#'/> 
          <SidebarRow title="Get the android app" Icon={BsBoxArrowInUpRight} path='#'/>
          <SidebarRow title="Get the IOS app" Icon={BsBoxArrowInUpRight} path='#'/>
          <p className=' text-xs font-base text-gray-400 px-6 my-4'>Privacy. Terms</p>
      </div> 
    </div>
    </>
  )
}

export default Sidebar
