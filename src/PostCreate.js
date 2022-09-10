import React from 'react'
import PostDetailAuthorPostList from './post/PostDetailAuthorPostList'

function PostCreate() {
  return (
    <div className='relative w-full  mt-16 md:min-w-[600px] flex gap-2 justify-between '>   
<form className='w-full mx-auto max-w-[500px] px-4 flex flex-col gap-4 mt-10 ' >
   <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200  ">
       <div className="flex justify-between items-center py-2 px-3 border-b ">
           <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
               <div className="flex items-center space-x-1 sm:pr-4">
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100  ">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                       <span className="sr-only">Upload image</span>
                   </button>
               </div>
            
           </div>
           <p  className="p-2 text-gray-500 rounded text-sm font-normal sm:ml-auto hover:text-gray-900 hover:bg-gray-100  ">
               bobyly.jpeg selected
           </p>
           <div id="tooltip-fullscreen" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip " data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" 
           >
           </div>
       </div>
       <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
           <label htmlFor="editor" className="sr-only">Publish post</label>
           <textarea id="editor" rows="8" className="block px-0 w-full text-sm text-gray-800 bg-white border-0 focus:ring-0" placeholder="Write an article..." required=""></textarea>
       </div>
   </div>
   <button type="submit" className=" w-fit inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
       Publish post
   </button>
</form>

<PostDetailAuthorPostList  />

</div>
  )
}

export default PostCreate
