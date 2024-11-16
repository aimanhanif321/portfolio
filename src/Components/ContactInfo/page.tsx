import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";
import Link from "next/link";
const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8 ">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center
         justify-center flex-col"
        >
          <FaPhone className="w-4 h-4 md:w-7 md:-h-7 text-white" />
        </div>
        <div>
          <h1 className=" text-lg sm:text-xl text-white font-bold">Phone</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            +923452833499
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-8  mb-8 mt-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center
         justify-center flex-col"
        >
          <Link href="https://mail.google.com/mail/u/0/#inbox"><FaEnvelope className="w-4 h-4 md:w-7 md:-h-7 text-white" /></Link>
        </div>
        <div>
          <h1 className=" text-lg sm:text-xl text-white font-bold">Email Address</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            aimhanif321@gmail.com</h1>
        </div>
      </div>

      <div className="flex items-center space-x-8  mt-8 mb-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center
         justify-center flex-col"
        >
         <Link href="https://www.linkedin.com/in/aiman-hanif-27729929b/"> <FaLinkedin className="w-4 h-4 md:w-7 md:-h-7 text-white" /></Link>
        </div>
        <div>
          <h1 className=" text-lg sm:text-xl text-white font-bold">Connect With</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            Linkdn
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
