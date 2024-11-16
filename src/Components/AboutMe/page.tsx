import React from 'react'
import { TbClockHour1Filled } from 'react-icons/tb'

const AboutMe = () => {
  return (
    <div className='bg-black pb-[3rem] mt-16 md:mt-16 h-auto'>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-[100%] xl:ml-[200px] md:ml-[50px]  ml-2 p-4  h-auto mx-auto gap-[3rem] lg:gap-[5rem] items-center'>
        <div className='ml-10'>
          <h1 id='about' className='text-[20px] lg:text-[40px] font-bold mb-[1rem] text-[#66FCF1]'>
            ABOUT ME
          </h1>
          <h2 className=' text-white text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[1rem] font-bold '>
            INNOVATIVE <span className='text-[#66FCF1]'>PRESPECTIVE</span>
          </h2>
        
        <div className=' relative top-0 flex items-center space-x-4 md:space-x-10 mb-[3rem]'>
          <span className='h-[150px] hidden md:block w-[5px] rounded-sm bg-[#66FCF1] '></span>
          <p className='text-[20px] text-white absolute top-0 md:pr-14 '>
            I'm a passonate frontend developer with a strong focus and creating respinsive ,intutive, and visualy appealing  interface 
            with ecpertise in HTML, CSS, JAVASCRIPT, TYPESCRIPT and diffrent frameworkslike Rect and Vue . Ilove turning complex problms into simple beautiful and
            functional desing. I stay updated on a latest trend and tool to deliver optimized accebe and futer proof web solutions.
          </p>
          </div>
        </div>
        <div className='lg:w-[600px] md:w-[800px] mx-auto md:mx-0 mt-[3rem] lg:mt-10 lg:h-[500px]  w-[400px]  h-[300px] relative'>
          <img src="/images/dpp.png" alt="" className=' absolute mt-10 top-48 lg:top-0 md:top-0 bg-[#66FCF1] z-[11] w-[100%] h-[100%] object-contain md:mr-10 '/>

        </div>
      </div>
    </div>
  )
}

export default AboutMe
