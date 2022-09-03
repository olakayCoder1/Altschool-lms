import React from 'react'
import FooterLogo from './FooterLogo'


function Footer() {
  return (
    <div className=' bg-black text-[#7c7b7b] font-medium text-sm '>
        <div className='w-full h-full flex flex-col gap-16 max-w-5xl mx-auto  pt-16 pb-4'>
            <div className='w-full flex gap-4 '>
                <div className='grow flex justify-between'>
                    <FooterLogo />
                    {/* schools list section        */}
                    <ul className='flex flex-col gap-4 text-sm font-light'>
                        <li className=' text-base font-medium text-gray-100'>Schools</li>
                        <li>School of Software Engineering</li>
                        <li>School of Product</li>
                    </ul>
                    {/* specialization section begins  */}
                    <ul className='flex flex-col gap-4 text-sm font-light'>
                        <li className=' text-base font-medium text-gray-100'>Specialization</li>
                        <li>Frontend Engineering</li>
                        <li>Backend Engineering</li>
                        <li>Cloud Engineering</li>
                    </ul>
                    {/* company section  */}
                    <ul className='flex flex-col gap-4 text-sm font-light'>
                        <li className=' text-base font-medium text-gray-100'>Companies</li>
                        <li>Hire Our Grads</li>
                        <li>Collaborate with us</li>
                    </ul>
                    {/* about us section */}
                    <ul className='flex flex-col gap-4 text-sm font-light'>
                        <li className=' text-base font-medium text-gray-100'>About Us</li>
                        <li>Our Story</li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                    </ul>
                </div>
                {/* resources section */}
                <ul className=' flex flex-col gap-4 text-sm font-light'>
                    <li className=' text-base font-medium text-gray-100'>Resources</li>
                    <li>Terms of Services</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className=' border-t-[1px] border-dashed border-[#626262] py-4'>
                <p className='ext-sm font-light'>©2022 TalentQL. All rights reserved.</p>
            </div>
        </div>     
    </div>
  )
}

export default Footer
