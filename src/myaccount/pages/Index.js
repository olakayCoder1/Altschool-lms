import React from 'react'
import Footer from '../../footer/Footer'
import Courses from '../components/Courses'
import HomeHeader from '../components/HomeHeader'
import Introduction from '../components/Introduction'

function Index() {
  return (
    <div>
        <HomeHeader />
        <Introduction />
        <Courses />
        <Footer />
    </div>
  )
}

export default Index
