import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#66FCF1] rounded-lg p-10 sm-p-10">
      <h1 className="text-[#080909]  text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
    
        Let's Work Together!
      </h1>
      <p className="text-black  text-[20px] pt-5 font-sans">
       Fill out the form below with your detail and project goals, and let's connect .I 
       Look forword to working Together and create somting exceptional for you.
      </p>
      {/* input feild */}
      <form action="" className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type=" text"
            placeholder="First Name"
            className="flex-1  bg-black text-white placeholder:text-gray-400 px-6 py-4 rounded-md 
                border-gray-200 border-[1.5px] border-opacity-15 outline-none w-full "
          />
          <input
            type=" text"
            placeholder="Last Name"
            className="flex-1  bg-black text-white placeholder:text-gray-400 px-6 py-4 rounded-md 
                border-gray-200 border-[1.5px] border-opacity-15 outline-none w-full "
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type=" Email"
            placeholder="Email Address"
            className="flex-1  bg-black text-white placeholder:text-gray-400 px-6 py-4 rounded-md 
                border-gray-200 border-[1.5px] border-opacity-15 outline-none w-full "
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="flex-1  bg-black text-white placeholder:text-gray-400 px-6 py-4 rounded-md 
                border-gray-200 border-[1.5px] border-opacity-15 outline-none w-full "
          />
        </div>

        <textarea
          className="mt-5 bg-black text-white placeholder:text-gray-400 px-6 py-4 rounded-md 
                border-gray-200 border-[1.5px] border-opacity-15 outline-none w-full"
          rows={7}
          placeholder="Message"
        ></textarea>
        <div className="mt-4">
          <button className="px-8 py-3.5 text-[#66FCF1]  bg-black hover:bg-[#63beb8] hover:text-black transiton-all duration-150 rounded-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
