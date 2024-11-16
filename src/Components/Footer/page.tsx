import React from 'react'
import Link from "next/link";
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
  } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='pt-10 pb-10 bg-[#66FCF1]'>
        <div className=' pb-2'>
            <h1 className='text-center text-black text-[28px] sm:text-[33px] md:text-[35px] font-bold'>Aim <span className='text-black'>Khan</span></h1>
        
        </div>
        <div className='flex items-center justify-center flex-wrap space-x-8 space-y-0 pb-10'>
        <div className="navbar-link after:bg-black  text-black font-bold">
          <Link href="#home">HOME </Link>
        </div>
        <div className="navbar-link  after:bg-black text-black font-bold">
          <Link href="#service">SERVICES</Link>
        </div>
        <div className="navbar-link  after:bg-black text-black font-bold">
          <Link href="#about">ABOUT</Link>
        </div>
        <div className="navbar-link  after:bg-black text-black font-bold">
          <Link href="#projects">PROJECTS</Link>
        </div>
        <div className="navbar-link  after:bg-black text-black font-bold">
          <Link href="#skills">SKILLS</Link>
        </div>
        <div className="navbar-link  after:bg-black text-black font-bold">
          <Link href="#contact">CONTACT</Link>
        </div>
        </div>
        <div>
        <div className="flex items-center justify-center flex-wrap space-x-8 space-y-0 ">
          <div className=" ">
            <Link href="https://www.instagram.com/shaikhbhai731/profilecard/?igsh=dnJ2OG1pcnFpOWFx">
              <FaInstagram size={30} className="text-black  hover:text-black hover:scale-50 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>
          <div  className=" ">
            <Link href="https://www.facebook.com/">
              <FaFacebook size={30} className="text-black  hover:text-black hover:scale-50 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>
          <div className=" ">
            <Link href="https://www.linkedin.com/in/aiman-hanif-27729929b/">
              <FaLinkedin size={30} className="text-black  hover:text-black hover:scale-50 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>
          <div className="">
            <Link href="#">
              <FaWhatsapp size={30} className="text-black  hover:text-black hover:scale-50 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>
          <div className="">
            <Link href="https://mail.google.com/mail/u/0/#inbox">
              <FaEnvelope size={30} className="text-black  hover:text-black hover:scale-50 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>
          
        </div> 
        <p className='text-opacity-60 mt-2 text-center text-black'> © 2024 All Rights Reserved by Aiman <span className='text-black'>Khan</span>.</p>
        </div>
      
    </div>
  )
}

export default Footer
