import React from 'react'
import UserPost from './UserPost'
import UserProfileHeader from './UserProfileHeader'

function UserProfile() {

  return (
    <div className=' w-full  '>
        <div className='h-full max-w-[480px] bg-white mx-auto'>
            <UserProfileHeader />
            <h3 className='p-2 text-base font-bold'>Posts from olakayCoder1 Selman</h3>
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
        </div>
    </div>
  )
}

export default UserProfile
