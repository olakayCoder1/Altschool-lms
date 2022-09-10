import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiSearch} from 'react-icons/bi'
import {BsGrid3X3Gap} from 'react-icons/bs'
import olakay from '../assets/olakay.jpeg'
import {AiFillHome,AiOutlinePlus} from 'react-icons/ai'
import {useNavigate, Link } from 'react-router-dom'

function AccountHeader(props) {

  let navigate = useNavigate()
  function toggleBar(){
    props.handleNav()
    props.mobileNav()
    props.lgNavHandle()
}
  return (
    <div className=' w-full h-16 fixed top-0 flex items-center bg-white z-50 px-4 lg:pl-10'>
      <div className=' w-full flex items-center justify-between  lg:px-3 pr-4 lg:pl-0 box-border'>
          <div className='flex items-center py-2'>
                <Link to='/xyzposts'>
                <h2 className=' ml-2 text-xl font-light font-logo'>Dzenith</h2>
                </Link>
               
            </div>
            <div className='flex items-center'>
              <p onClick={()=> navigate('/xyzposts')}
                    className=' p-3 hover:bg-gray-300 rounded-full cursor-pointer'>
                  <AiFillHome className=' text-xl font-semibold text-gray-500'/>
                </p>
                {/* <h3>Home</h3> */}
            </div>
          
          <div className='flex items-center'>
                
              <img className='w-8 h-8 rounded-full'
                src={olakay} />
          </div>
      </div>
    </div>
  )
}

export default AccountHeader
