import React, { useState } from 'react'
import {BsListUl ,BsTextIndentLeft, BsBoxArrowInUpRight} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome,AiOutlinePlus} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import {MdOutlineQuiz} from 'react-icons/md'
import SidebarRow from './SidebarRow'
import SideNoIcon from './SideNoIcon'


function Sidebar(props) {

  const [ navBar , setNavBar ] = useState(false);

  function handleNav(){
    props.handleNav()
    props.mobileNav()
  }

  return (
    <>
    <div className="hidden  w-[40%] md:w-[20%] fixed lg:relative lg:top-16 z-50 lg:z-20 lg:block h-full lg:w-[18%]   border-t py-3 overflow-y-scroll">
      <div className={`${props.computerNav ? "lg:w-full " : "lg:hidden"} duration-100`}>
        <div className=' lg:hidden flex items-center py-2'>
          <p onClick={handleNav}
              className=' p-3 hover:bg-gray-300 rounded-full cursor-pointer'>
            <GiHamburgerMenu className=' text-xl font-semibold text-gray-500'/>
          </p>
        <h2 className=' ml-2 text-xl font-light'><spann className="hidden md:inline-block "><span className=' font-normal text-blue-500'>Z</span>enith</spann> <span>Media</span></h2>
        </div>
        <div className='px-6 w-full flex items-center text-sm font-medium py-3 mr-2 rounded-r-full bg-blue-100 text-blue-700'>
              <AiFillHome  className=" text-lg"/>
              <h2 className=' ml-2'>For You</h2>
          </div>
          <SidebarRow title="Quiz" Icon={MdOutlineQuiz} />
          <SidebarRow title="Queue" Icon={CgPlayListAdd} />
          <SidebarRow title="Write Story" Icon={AiOutlinePlus} />
          <hr className=' my-4 text-gray-300'/> 
          <SideNoIcon title="Settings" />
          <SideNoIcon title="Help" />
          <SideNoIcon title="Publisher guidelines" />
          <SideNoIcon title="Send feedback" />
          <hr className=' my-4 text-gray-300'/> 
          <SidebarRow title="Get the android app" Icon={BsBoxArrowInUpRight} />
          <SidebarRow title="Get the IOS app" Icon={BsBoxArrowInUpRight} />
          <p className=' text-xs font-base text-gray-400 px-6 my-4'>Privacy. Terms</p>
      </div>
       
    </div>

    <div className={` bg-white  ${props.mobile || props.navDispla ? "w-[30%] fixed lg:relative lg:top-16 z-50 lg:z-20" : "hidden"}  lg:hidden h-full lg:w-[18%]   border-t py-1 overflow-y-scroll`}>
      <div className={`${props.navDisplay ? "lg:w-full " : "lg:hidden"} duration-100`}>
        <div className=' lg:hidden flex items-center py-2'>
          <p onClick={handleNav}
              className=' p-3 hover:bg-gray-300 rounded-full cursor-pointer'>
            <GiHamburgerMenu className=' text-xl font-semibold text-gray-500'/>
          </p>
        <h2 className=' ml-2 text-xl font-light'><spann className="hidden md:inline-block "><span className=' font-normal text-blue-500'>Z</span>enith</spann> <span>Media</span></h2>
        </div>
        <div className='px-6 w-full flex items-center text-sm font-medium py-3 mr-2 rounded-r-full bg-blue-100 text-blue-700'>
              <AiFillHome  className=" text-lg"/>
              <h2 className=' ml-2'>For You</h2>
          </div>
          <SidebarRow title="Quiz" Icon={MdOutlineQuiz} />
          <SidebarRow title="Queue" Icon={CgPlayListAdd} />
          <SidebarRow title="Add RSS feed" Icon={AiOutlinePlus} />
          <hr className=' my-4 text-gray-300'/> 
          <SideNoIcon title="Settings" />
          <SideNoIcon title="Help" />
          <SideNoIcon title="Publisher guidelines" />
          <SideNoIcon title="Send feedback" />
          <hr className=' my-4 text-gray-300'/> 
          <SidebarRow title="Get the android app" Icon={BsBoxArrowInUpRight} />
          <SidebarRow title="Get the IOS app" Icon={BsBoxArrowInUpRight} />
          <p className=' text-xs font-base text-gray-400 px-6 my-4'>Privacy. Terms</p>
      </div>
       
    </div>
    </>
    
  )
}

export default Sidebar
