import React from 'react'
import UserLeftCard from './UserLeftCard'
import UsersListContainer from './UsersListContainer'

function UsersList() {
  return (
    <div className='w-full  mt-16 md:min-w-[600px] flex gap-2 justify-between overflow-y-auto   '>
      <div className='w-full md:w-[65%] max-w-[480px] mx-auto bg-white '>
        <h2  className=' text-sm font-bold p-3 '>Users</h2>
        <UsersListContainer />
        <UsersListContainer />
        <UsersListContainer />
        <UsersListContainer />
        <UsersListContainer />
        <UsersListContainer />
        <UsersListContainer />
        <UsersListContainer />
        <UsersListContainer />
        <UsersListContainer />
        <UsersListContainer />
        <UsersListContainer />
      </div>
        <UserLeftCard />

    </div>
  )
}

export default UsersList
