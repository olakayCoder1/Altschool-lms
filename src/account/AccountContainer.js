import React, { useState }  from 'react'
import AccountSideBar from './AccountSideBar'
import AccountHeader from './AccountHeader'
import Account from './Account';

function AccountContainer() {


  return (
    
    <div className='w-full   overflow-y-auto border-l-[1px]'>
      <AccountHeader />
      <Account />
    </div>
  )
}

export default AccountContainer
