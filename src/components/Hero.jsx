import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import '../styles/VideoFix.css'; // Add this line to import custom styles

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 overflow-hidden h-[70vh] min-h-[300px]'>
      {/* Left side (Text content) */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>Our Best Seller</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
            Latest Arrivals
          </h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Right side (Video) */}
      <div className='w-full sm:w-3/3 relative'>
        <video
          className='w-full h-full object-cover pointer-events-none'
          src={assets.video1}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};

export default Hero;
