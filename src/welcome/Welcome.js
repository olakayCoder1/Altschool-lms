import React from 'react'
import laptop from '../assets/laptop.jpeg'
import WelcomeNav from './WelcomeNav';
import Typed from 'react-typed';
import WelcomeFooter from './WelcomeFooter';



const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img' style={{ backgroundImage: `url(${laptop})`}}>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        {/* <h2 className='text-5xl font-bold font-logo'>Hey, follow your interest</h2> */}
        <Typed className='text-5xl font-bold font-logo'
                    strings={['Hey, follow your interest']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
        <p className='py-5 text-xl'>Get instance updates from your friends, quizes and what is happening around the world</p>
        <button className='px-8 py-2 border'>Get started</button>
      </div>
    </div>
  );
};


function Welcome() {
  return (
    <div className=''>
      <WelcomeNav />
      <Hero />
      <WelcomeFooter />
    </div>
  )
}

export default Welcome


