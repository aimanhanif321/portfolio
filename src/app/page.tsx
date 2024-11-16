'use client'
import Navbar from "@/Components/Navbar/page";
import { useState } from "react";
import MobileNav from "@/Components/MobileNav/page";
import Hero from "@/Components/Hero/page";
import AboutMe from "@/Components/AboutMe/page";
import Services from "@/Components/Services/page";
import Skills from "@/Components/Skills/page";
import Project from "@/Components/Project/page";
import Contact from "@/Components/Contact/page";
import Footer from "@/Components/Footer/page";
import "./globals.css";
import type { Config } from "tailwindcss";

import 'aos/dist/aos.css';

export default function Home() {
  const [nav, setNav] = useState(false)
  const openNavHandler= () => setNav(true)
  const closeNavHandler= () => setNav(false)
  return (

    <div className="overflow-hidden">
      <div>
      <MobileNav nav = {nav} closeNav = {closeNavHandler}/>
      <Navbar openNav = {openNavHandler}/>
      <Hero />
      <div className="relative z-[30]">
        <AboutMe/>
        <Services/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
        </div>
      
        
        
      
    </div>
    </div>
  )
}