import React from 'react'
import MainContentPopular from './MainContentPopular'
import MainContentTrending from './MainContentTrending'
import MainHappening from './MainHappening'
import {BsChatDots} from 'react-icons/bs'
import {GiNotebook} from 'react-icons/gi'

function MainContent() {
  return (
    <div className='w-full max-w-[550px] mx-auto overflow-y-scroll main-container'>
        <MainContentPopular />
        <MainHappening />
        <MainContentTrending />
        {/* <MainContentTrending />
        <MainContentTrending /> */}
        <p className='flex items-center p-3 py-2 text-sm font-normal gap-2 rounded-full fixed bottom-12 right-12 cursor-pointer bg-blue-700 text-white'><GiNotebook  className=' w-6 h-6'/> <span>Write story</span></p>
    </div>
  )
}

export default MainContent
