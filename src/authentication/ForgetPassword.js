import React from 'react'
import zenithLogo from '../assets/zenithLog.svg'
import {Link } from 'react-router-dom'


function ForgetPassword() {
  return (
    <div className=' flex'>
      <div className='hidden md:block md:w-[70%] h-screen bg-no-repeat bg-cover bg-center bg-gray-400 rounded-md' style={{ backgroundImage: `url(${zenithLogo})` }}></div>
      <div className='w-full md:w-[30%] p-4 text-sm text-gray-500 font-medium'>
            <div className=' w-full flex justify-end items-end'>
                <div className=' flex items-center gap-2'>
                    <Link to='/login'>
                    <p className=' p-2 px-4 border border-gray-300 rounded-3xl  text-gray-500 hover:text-gray-50 cursor-pointer hover:bg-blue-700 '>Sign In</p>
                    </Link>
                    <Link to='/register'>
                    <p className=' p-2 px-4 border border-gray-300 rounded-3xl  text-gray-500 hover:text-gray-50 cursor-pointer hover:bg-blue-700 '>Sign Up</p>
                    </Link>
                </div>
                
            </div>
            {/* <p>Enter the email that associate with your account we will send an email with instructions to reset your account.</p>
            <p>We have send a password recover instructions to your email.</p> */}
            <form className='py-12 w-[80%]  mx-auto'>
                <h2 className='text-gray-700 text-3xl font-bold font-noto'>Reset password</h2>
                <p className=' mb-6 my-3'>Enter the email that associate with your account we will send an email with instructions to reset your account.</p>

                <div className=' py-3'>   
                    <div className="relative">
                        <input type="email" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Your email</label>
                    </div>
                    {/* <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Oh, snapp!</span> Some error message.</p>     */}
                </div>
                
                <p className='w-fit p-3 px-6 border rounded-3xl bg-blue-600 text-gray-50 cursor-pointer hover:bg-blue-700 '>Send instructions</p>
                <p className=' py-3'>Didn't receive an email ? Check your spam or <span className=' text-blue-600 hover:underline hover:cursor-pointer'>try another email address</span> </p>
            </form>
            
      </div>
    </div>
  )
}

export default ForgetPassword
