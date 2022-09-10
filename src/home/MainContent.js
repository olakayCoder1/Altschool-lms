import React from 'react'
import MainContentPopular from './MainContentPopular'
import MainContentTrending from './MainContentTrending'
import MainHappening from './MainHappening'
import {BsChatDots} from 'react-icons/bs'


function MainContent() {
  return (
    <div className=' mx-auto overflow-y-scroll main-container '>
        {/* <MainContentPopular /> */}
        <MainHappening />
        {/* <MainContentTrending /> */}
        {/* <MainContentTrending />
        <MainContentTrending /> */}
    </div>
  )
}

export default MainContent
