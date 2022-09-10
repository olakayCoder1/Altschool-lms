import React, { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContent from './MainContent'
import olakay from '../assets/olakay.jpeg'
import {BsDot} from 'react-icons/bs'
import {GiNotebook} from 'react-icons/gi'
import PostDetailAuthorPostList from '../post/PostDetailAuthorPostList'

function HomeContent() {

  let navigation = useNavigate()
  const [ showPublish, setShowPublish] = useState(false)

  return (
    <div className='relative w-full  mt-16 md:min-w-[600px] flex gap-2 justify-between overflow-y-auto '>
        <div className='w-full lg:w-[65%] '>
          <MainContent />
        </div>
        <PostDetailAuthorPostList  />

        <div className='hidden md:w-[30%] border  p-4'>
          <div className=' w-full h-fit border-gray-200 py-4'>
              <div className=' w-20 h-20 bg-cover bg-no-repeat bg-center rounded-full ' style={{ backgroundImage: `url(${olakay})`}}>
              </div>
              <div className=' flex flex-col gap-2'>
              <h2 className=' text-base font-semibold'>@olakayCoder1</h2>
              <p className='text-gray-600 font-normal text-sm'>programmerolakay@gmail.com</p>
              <p className=' text-gray-500 font-normal text-xs flex items-center'><span className=' hover:text-blue-500 hover:underline '>120 followers</span> <BsDot className='text-sm font-bold' /> <span className=' hover:text-blue-500 hover:underline '>120 following</span></p>
              <p className='font-normal text-sm p-1 max-w-[100px] px-3 rounded-md bg-blue-700 text-gray-100 hover:bg-blue-800 cursor-pointer flex items-center place-content-center'><span>Edit profile</span></p>
              </div>
          </div>
        </div>


        <p onClick={()=> navigation('/xyzposts/create')}
          className='hidden md:flex items-center p-3 py-2 text-sm font-normal gap-2 rounded-full fixed bottom-12 right-12 cursor-pointer bg-blue-700 text-white'>
            <GiNotebook  className=' w-6 h-6'/> 
            <span>Write story</span>
        </p>


        {/* add post modal  */}
        {/* add post modal  */}
        
        {showPublish && (
          <form className='fixed w-[400px] z-50 p-4 bg-blue-100 rounded-md' >
              <div class="  mb-4 w-full bg-gray-50 rounded-lg border border-gray-200  ">
                  <div class="flex justify-between items-center py-2 px-3 border-b ">
                      <input type='text' className=' border-0 outline-none ring-0 focus:ring-0 text-sm text-gray-800  '  placeholder="Article title..." />
                      <div id="tooltip-fullscreen" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" 
                      >
                          <div class="tooltip-arrow" data-popper-arrow="" 
                          ></div>
                      </div>
                  </div>
                  <div class="py-2 px-4 bg-white rounded-b-lg ">
                      <label for="editor" class="sr-only">Publish post</label>
                      <textarea id="editor" rows="8" class="block px-0 w-full text-sm text-gray-800 bg-white border-0 focus:ring-0 " placeholder="Write an article..." required=""></textarea>
                  </div>
              </div>
              <p  class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                  Publish
              </p>
                  <p onClick={()=> setShowPublish(false)} class="ml-6 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                      Cancel
                    </p>
            </form>
        )}
        

    </div>
  )
}

export default HomeContent
