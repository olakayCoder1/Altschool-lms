import React, { useState } from 'react'
import {BsFillPenFill} from 'react-icons/bs'
import AccountCard from './AccountCard'

function Account() {

    
  return (
    <div className='w-full flex flex-col gap-4 items-start mt-16 h-screen '>
      <h2 className=' text-base font-bold p-3'>Account</h2>
      <AccountCard />
      <AccountCard />
      <AccountCard />
      <AccountCard />
      <AccountCard />
      <AccountCard />
      <AccountCard />
      <AccountCard />
    </div>
  )
}

export default Account
