import React from 'react'

import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        
        'WEB DEVELOPER',
        1500, 
        'FREELANCER',
        1500,
        'UI UX DESIGNER',
        1500,
        'TEACHER',
        1500,
      ]}
      
      speed={50} 
      className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-[#66FCF1]'
      repeat={Infinity}
    />
  );
};
export default Animation