import React from 'react';
import {
    FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';



const WelcomeFooter = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-700'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] font-logo'>Dzenith.</h1>
        <div className='flex justify-between md:w-[75%] my-6'>
            <a href='https://github.com/olakayCoder1' target='_blank' >
                <FaGithubSquare size={30} />
            </a>
            <a href='https://www.linkedin.com/in/olanrewaju-abdulkabeer/'  target='_blank' >
                <FaLinkedin size={30} />
            </a>
            <a href='https://www.facebook.com/Kabiru.olakay/'  target='_blank' >
                <FaFacebookSquare size={30} />
            </a>
            <a href='https://twitter.com/olakayCoder1' >
                <FaTwitterSquare size={30} />
            </a>
            <a href='https://www.instagram.com/olakaycoder1/' >
                <FaInstagram size={30} />
            </a> 
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    
        <div>
        <h6 className='font-medium text-gray-800'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Help</li>
            <li className='py-2 text-sm'>Advice</li>
            <li className='py-2 text-sm'>Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-800'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Press</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-800'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default WelcomeFooter;
