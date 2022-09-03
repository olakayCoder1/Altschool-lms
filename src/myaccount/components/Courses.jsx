import React, { useState } from 'react'
import {ImSearch} from 'react-icons/im'
import {FiChevronUp , FiChevronDown} from 'react-icons/fi'
import CoursesCard from './CoursesCard'
import {BsCheck} from 'react-icons/bs'

function Courses() {
    const [ showAll , setShowAll] = useState(false)
  return (
    <div className=' w-full text-sm font-medium px-6 md:px-4 mb-32'>
        <div className=' w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto'>
            <div className=' w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center my-4'>
                <h2 className='font-bold text-2xl'>Your Courses</h2>
                <div className=' flex justify-between items-center gap-4'>
                    <p className=' cursor-pointer'>
                        <ImSearch className=' w-6 h-6' />
                    </p>
                    <p 
                        className=' flex items-center bg-[#6a6ff5] text-gray-100 p-2 px-4 rounded-full cursor-pointer'>
                        <span className=' mr-2'>
                            <FiChevronDown  className=' w-4 h-4'/>
                        </span>
                        <span>
                            Expand All
                        </span>
                    </p>
                </div>
            </div>
            <CoursesCard showAll={showAll} Check={BsCheck} title='Backend Engineering Second Semester(Python)' Up={FiChevronUp} Down={FiChevronDown}  percentage='100%'/>
            <CoursesCard showAll={showAll} Check={BsCheck} title='Open Source Contribution' Up={FiChevronUp} Down={FiChevronDown}  percentage='100%'/>
            <CoursesCard  showAll={showAll} Check={BsCheck} title='School Of Engineering : First Semester' Up={FiChevronUp} Down={FiChevronDown}  percentage='86%'/>
        </div>
    </div>
  )
}

export default Courses
