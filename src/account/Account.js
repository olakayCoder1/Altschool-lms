import React from 'react'
import AccountCard from './AccountCard'
import AccountClose from './AccountClose'
import AccountPasswordChange from './AccountPasswordChange'
import olakay from '../assets/olakay.jpeg'
import AccountSignOut from './AccountSignOut'
import {BsFillCameraFill} from 'react-icons/bs'

function Account() {

    
  return (
    <div className='w-full flex flex-col gap-4 items-start mt-16 pb-16'>
      {/* <h2 className=' text-base font-bold p-3'>Account</h2> */}
      <div className=' w-full  bg-gradient-to-r from-[#5d61cf] to-[#0f0f22] text-center text-gray-100 gap-8 py-3'>
            <div className=' w-full h-full flex flex-col gap-3'>
            <div className='relative w-36 h-36 bg-no-repeat bg-cover bg-center mx-auto rounded-full' style={{ backgroundImage: `url(${olakay})` }}>
                <p className='absolute bottom-0 p-2 bg-gray-100 cursor-pointer rounded-full w-fit'><BsFillCameraFill className=' w-8 h-8 text-gray-700' /></p>
            </div>
                <h2 className=' font-bold text-5xl '>olakayCoder1</h2>
                <p className=' text-sm font-light'>programmerolakay@gmail.com</p>
                <p className=' text-sm font-light'>Redundant alt attribute. Screen-readers already announce</p>
            </div>
        </div>
        <div className='max-w-[600px] w-full px-4 md:px-0 flex flex-col  gap-3 mx-auto'>
            <AccountCard />
            <AccountPasswordChange />
            <AccountSignOut />
            <AccountClose />
        </div>
    </div>
  )
}

export default Account
