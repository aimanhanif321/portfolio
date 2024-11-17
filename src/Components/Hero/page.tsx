
import Animation from "../Animation/page";
import Link from "next/link";
import React from "react";

import { FaFileDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className=" w-full pt-[4vh] md:pt[12vh] h-screen bg-black overflow-hidden relative">
      {/* <Particle /> */}

      <div className="flex justify-center  flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* sub heading */}
          <div>
            <h1 className="text-4xl md:text-9xl lg:text-9xl mb-5 text-[#66FCF1] font-bold">Hello,</h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-white font-semibold">
              I'm Aiman Khan
            </h1>
            <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-[#66FCF1]'>
              <Animation/></h1>
            <p className="mt-6 text-sm md:text-lg text-opacity-60">
            I'm a passionate Frontend Developer, Freelancer, Teacher, and UI/UX Designer with a keen eye for crafting visually stunning and user-friendly interfaces. With expertise in modern web technologies and design principles, I turn ideas into responsive, functional, and engaging digital experiences. Whether it’s coding sleek websites, designing intuitive user journeys, or mentoring the next wave of developers, I thrive on creativity and collaboration. Let’s build something amazing together!
            </p>
            <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-black font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-[#66FCF1] flex items-center space-x-2  ">
              <span><Link href="Resume1.pdf" download >Download CV</Link></span>
              <FaFileDownload/>
            </button>
          </div>
          {/* image */}
          <div className="mx-auto hidden lg:block rounded-[3rem]   overflow-x-hidden">
<img src="/images/final.png" alt="" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
