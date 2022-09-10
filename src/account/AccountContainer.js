import React from 'react'
import AccountSideBar from './AccountSideBar'

function AccountContainer() {

    const [ showNav , setShowNav ] = useState(false);
    const [ lgNav , setLgNav ] = useState(true);
    const [ mobileNav , setMobileNav ] = useState(false)
  
    function handleNav(){
      setShowNav(!showNav)
      // console.log(showNav)
    }
    function handleMobileNav(){
      setMobileNav(!mobileNav)
    }
  
    function computerNav(){
      setLgNav(!lgNav);
    }

  return (
    <div className=' lg:w-10/12 mx-auto h-screen flex justify-between border'>
    <AccountSideBar navDisplay={showNav} mobile={mobileNav} mobileNav={handleMobileNav} handleComputerNav={computerNav} handleNav={handleNav} computerNav={lgNav}/>
  <div className=' md:w-[78%] lg:w-[80%]  overflow-y-auto border-l-[1px]'>
   
  </div>
</div>
  )
}

export default AccountContainer
