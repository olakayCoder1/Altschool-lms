import Header from './navigation/Header';
import Sidebar from './navigation/Sidebar';
import { useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import HomeContent from './home/HomeContent';
import PostDetail from './post/PostDetail';
import PostCreate from './PostCreate';
import UserContainer from './other-user/UserContainer';
import UsersList from './other-user/UsersList';



function AuthenticatedRoutes() {

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
        <Sidebar navDisplay={showNav} mobile={mobileNav} mobileNav={handleMobileNav} handleComputerNav={computerNav} handleNav={handleNav} computerNav={lgNav}/>
      <div className=' md:w-[78%] lg:w-[80%]  overflow-y-auto border-l-[1px]'>
        <Header handleNav={handleNav} mobileNav={handleMobileNav} lgNavHandle={computerNav}/>
        <Routes>
          <Route path='' element={<HomeContent />} />
          <Route path='/1' element={<PostDetail />} />
          <Route path='/create' element={<PostCreate />} />
          <Route path='/users' element={<UsersList />} />
          <Route path='/users/1' element={<UserContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default AuthenticatedRoutes
