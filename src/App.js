// import Index from './myaccount/pages/Index';

// function App() {
//   return (
//     <div className=" text-gray-700 font-noto">
//       <Index/>
//     </div>
//   );
// }

// export default App;


import Header from './navigation/Header';
import Sidebar from './navigation/Sidebar';
import MainContent from './home/MainContent';
import { useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import HomeContent from './home/HomeContent';
import PostDetail from './post/PostDetail';

function App() {
    

  const [ showNav , setShowNav ] = useState(false);
  const [ lgNav , setLgNav ] = useState(true);
  const [ mobileNav , setMobileNav ] = useState(false)

  function handleNav(){
    setShowNav(!showNav)
  }
  function handleMobileNav(){
    setMobileNav(!mobileNav)
  }

  function computerNav(){
    setLgNav(!lgNav);
    console.log('Computer')
  }
  
  return (
    <div className='px-3 lg:px-0 w-full h-screen'>
      {/* HEADER SECTION */}
      <Header handleNav={handleNav} mobileNav={handleMobileNav} lgNavHandle={computerNav}/>
      {/* MAIN SECTION  */}
      
      <div className='w-full h-full flex gap-10'>
      {/* SIDE BAR  */}
        <Sidebar navDisplay={showNav} mobile={mobileNav} mobileNav={handleMobileNav} handleNav={handleNav} computerNav={lgNav}/>

        <Router>
          <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='/posts' element={<PostDetail />} />
          </Routes>
        </Router>

        
        
      
      </div>
    </div>
  );
}

export default App;
