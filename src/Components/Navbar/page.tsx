import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

interface props {
  openNav : () => void;
}

const Navbar = ({openNav}:props) => {
   const [navSticky, setNavSticky] = useState(false)
    useEffect(()=>{
      const handler = () => {
        if(window.scrollY >= 90){
         setNavSticky(true);
        }
        if(window.scrollY <= 90){
          setNavSticky(false);
        }
      };
      window.addEventListener('scroll', handler);

    },[])
   const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm": ""
    
  return (
    <div className={`w-[100%] fixed ${stickyStyle} top-0 z-[10000] h-[12vh] bg-[#141327]  shadow-md`}>
      <div className="flex items-center justify-between p-10 h-[100%] ">
        <h1 className="ml-4 flex-[0.6] text-white font-bold text-[25px] cursor-pointer ">
          Aim
          <span className="text-[#66FCF1]">Khan</span>
        </h1>
        <div className="navbar-link text-[#66FCF1] font-bold">
          <Link href="#home">HOME </Link>
        </div>
        <div className="navbar-link text-[#66FCF1] font-bold">
          <Link href="#service">SERVICES</Link>
        </div>
        <div className="navbar-link text-[#66FCF1] font-bold">
          <Link href="#about">ABOUT</Link>
        </div>
        <div className="navbar-link text-[#66FCF1] font-bold">
          <Link href="#projects">PROJECTS</Link>
        </div>
        
        <div className="navbar-link text-[#66FCF1] font-bold">
          <Link href="#skills">SKILLS</Link>
        </div>
        
        <div className="navbar-link text-[#66FCF1] font-bold">
          <Link href="#contact">CONTACT</Link>
        </div>
        <div onClick={openNav}>
        <FaBars className="text-[#66FCF1] w-[3rem] h-[2rem] md:hidden " />
        
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
