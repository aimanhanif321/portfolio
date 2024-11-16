import React from 'react'
import { FaFigma, FaRegKeyboard } from 'react-icons/fa6';
import { HiCodeBracketSquare } from "react-icons/hi2";
const Services = () => {
  return (
    <div className='bg-black pt-[14rem] md:pt-[8rem] pb-[5rem]'>
    <p className='heading ml-10 pb-20 ' id='service'>
        My <span className='text-[#66FCF1]'>SERVICES</span>
    </p>
    <div> 
        <div className='items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] w-[90%]  mx-[40px] sm:m-10 lg:ml-[100px] md:ml-[50px] text-white'>
        <div className='items-center '>
            <div className='bg-[#66FCF1] hover:scale-110 hover:bg-[#008080] transform transition-all duration-300 hover:rotate-6 font-semibold text-center px-[1rem] py-[4rem]'>
            <HiCodeBracketSquare className='w-[6rem] h-[6rem] mx-auto text-black' />
            <h1 className='text-[20px] md:text-[30px] mt-[1rem] mb-[1rem] text-black'>Frontend Developer</h1>
            <p className='text-[15px] md:text-[20px] text-black font-normal' >
            As a Frontend Developer, I specialize in creating dynamic and responsive websites that provide seamless user experiences. I focus on using modern technologies like HTML, CSS, JavaScript, and frameworks such as React and Vue to bring designs to life.
            </p>
            </div>
            
        </div>
        <div>
            <div className='bg-[#66FCF1] hover:scale-110 hover:bg-[#008080] transform transition-all duration-300 hover:rotate-6 font-semibold text-center px-[1rem] py-[4rem]'>
            <FaRegKeyboard className='w-[6rem] h-[6rem] mx-auto text-black' />
            <h1 className='text-[20px] md:text-[30px] mt-[1rem] mb-[1rem] text-black'>Versitile In Office Tools</h1>
            <p className='text-[15px] md:text-[20px] text-black font-normal' >
            profiient in microsoft word and excel i bring efficency and accurecy to data entry task. my expertse in this tools allow me to handel data with ease ensuring orginized and profficinal documentation and suuport busseinss need.
            </p>
            </div>
            </div>
        <div><div className='bg-[#66FCF1] hover:scale-110 hover:bg-[#008080] transform transition-all duration-300 hover:rotate-6 font-semibold text-center px-[1rem] py-[4rem]'>
            <FaFigma className='w-[6rem] h-[6rem] mx-auto text-black' />
            <h1 className='text-[20px] md:text-[30px] mt-[1rem] mb-[1rem] text-black'>UI/Ux Designer</h1>
            <p className='text-[15px] text-black font-normal md:text-[20px]' >
            From layout to user experiance i desing websites that are both beautiful and intutive my UI/UX skills allow me to understand user needs and create interface that enhance usability providing client with websites that are not only aesthetically pleasing but also highly function.
            </p>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services
