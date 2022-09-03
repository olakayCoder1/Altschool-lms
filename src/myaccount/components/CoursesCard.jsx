import React, { useState } from 'react'

function CoursesCard({ showAll ,Check , title , Up , Down  , percentage}) {

  const [ showProgress , setShowProgress ] = useState(false) 

  if(showAll){
    setShowProgress(!showProgress)
  }

  return (
    <div className='text-sm md:text-base font-light mb-4  border-[#e2e7ec] border-[2px] rounded-lg'>
      <div className='flex flex-col sm:flex-row justify-between p-6'>
        <div className=' flex items-center'>
          {percentage == '100%' ? (
              <span className=' p-1 bg-[#6a6ff5] rounded-full text-gray-100 mr-3' ><Check className='w-4 h-4 sm:w-5 sm:h-5' /></span>
          ) : (
            <div role="status">
                <svg class="inline mr-2 w-5 h-5 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
          )}
          <p className=' cursor-pointer hover:text-[#6a6ff5]'>{title}</p>
        </div>
        <div className='ml-10  sm:ml-0 flex items-center '>
          {percentage == "100%" ? (
            <span className=' mr-3 bg-[#6a6ff5] text-gray-100 rounded-3xl p-[2px] px-2 text-xs font-normal sm:font-medium'>COMPLETED</span>
          ):(
            <span className=' mr-3 bg-[#6a6ff5] text-gray-100 rounded-3xl p-[2px] px-2 text-xs font-normal sm:font-medium'>IN PROGRESS</span>
          )}
          

          <span  onClick={() => setShowProgress(!showProgress) }
            className=' p-1 bg-[#6a6ff5] rounded-full text-gray-100 cursor-pointer'>{showProgress ? <Up className='w-3 h-3 sm:w-4 sm:h-4'/> :  <Down className='w-3 h-3  sm:w-4 sm:h-4'/>} </span>
          {!showProgress ? (
            <span className=' sm:hidden text-xs font-medium ml-1 text-[#6a6ff5]'>Expand</span>
          ) : (
            <span className=' sm:hidden text-xs font-medium ml-1 text-[#6a6ff5]'>Collapse</span>
          )}
        </div>
      </div>
      {showProgress && (
        <div className=' w-full bg-[#e2e7ec] mb-4 duration-700 ease-in-out'>
        <div className=' w-full pb-8'>
          <div className=' w-10/12 mx-auto flex  justify-between  pt-8 mb-2'>
            <p className=' text-xs font-bold'>COURSE PROGRESS</p>
            <p className=' text-xs font-bold'>
              <span className=' mr-3 text-[#6a6ff5]'>{percentage} COMPLETE</span>
              <span className='text-xs font-light'>15/15 Steps</span>
            </p>
          </div>
          <div className='w-10/12 mx-auto h-2 bg-gray-200 rounded-full'>
            <div className='rounded-full h-full bg-[#6a6ff5]' style={{ width : percentage }}></div>
          </div>
        </div>
      </div>
      )}
      
    </div>
  )
}

export default CoursesCard
