import React from 'react'
import logo from '../assets/talentQl.svg'
import {FaFacebookF} from 'react-icons/fa'
import {GrFacebookOption, GrYoutube} from 'react-icons/gr'
import {AiOutlineTwitter, AiFillLinkedin , AiOutlineInstagram} from 'react-icons/ai'



function FooterLogo() {
  return (
    <div className=' flex flex-col gap-4 text-black'>
        <p>
        <img src={logo} alt='TalentQl' />
        </p>
        <ul className=' flex gap-2 '>
            <li className='bg-gray-50 w-fit p-2 rounded-full cursor-pointer'><GrFacebookOption className=' w-3 h-3'/></li>
            <li className='bg-gray-50 w-fit p-2 rounded-full cursor-pointer'><GrYoutube className=' w-3 h-3'/></li>
            <li className='bg-gray-50 w-fit p-2 rounded-full cursor-pointer'><AiFillLinkedin className=' w-3 h-3'/></li>
            <li className='bg-gray-50 w-fit p-2 rounded-full cursor-pointer'><AiOutlineInstagram className=' w-3 h-3'/></li>
            <li className='bg-gray-50 w-fit p-2 rounded-full cursor-pointer'><AiOutlineTwitter className=' w-3 h-3'/></li>
        </ul>
        <p className=' text-[#4a4056] font-light'>TEL: 0800ALTSCHOOL</p>
    </div>
  )
}

export default FooterLogo
