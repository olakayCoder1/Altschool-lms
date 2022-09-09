import React from 'react'
import PostDetailContent from './PostDetailContent'
import olakay from '../assets/olakay.jpeg'
import {BsDot} from 'react-icons/bs'
import PostDetailAuthorPostList from './PostDetailAuthorPostList'


function PostDetail() {

  return (
    <div className='w-full lg:w-[76%] mt-16 min-w-[600px] flex gap-2 justify-between overflow-y-auto '>
        <div className='w-full lg:w-[65%]'>
            <PostDetailContent />
          </div>
          <PostDetailAuthorPostList />
      
    </div>
  )
}

export default PostDetail
