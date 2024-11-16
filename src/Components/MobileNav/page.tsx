import React from 'react'
import {FaXmark } from 'react-icons/fa6';

interface props{
  nav :boolean;
  closeNav:() => void;
}
const MobileNav = ({nav,closeNav}:props) => {
  const navAnimation = nav? 'translate-x-0':'translate-x-[-100%]';
  return (

    <div className={`fixed ${navAnimation} transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-black`}>
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <div className='navbar-link-mobile'>HOME</div>
        <div className='navbar-link-mobile'>SERVICES</div>
        <div className='navbar-link-mobile'>ABOUT</div>
        <div className='navbar-link-mobile'>PROJECTS</div>
        <div className='navbar-link-mobile'>CONTACT</div>
       </div>
       <div onClick={closeNav} className='absolute z-[1000000] top-[2rem] w-8 right-[2rem]'>
       <FaXmark size={30} className='text-white'/>
       </div>
    </div>
  )
}

export default MobileNav
