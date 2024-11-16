import React from 'react'
import Image from 'next/image';

type props ={
    skill:{
        id:number;
        title:string;
        image:string;
        percent:string;

    };
};
const SkillCards = ({ skill } : props) => {
    const {image,percent ,title} = skill;
  return (
    <div className='p-6 hover:bg-slate-400 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900'>
      <Image src={image} alt={title} width={80} height={80} className='object-cover mx-auto' />
      <h1 className="text-[18px] mt-4 text-white font-[700px]   ">
          {title}
      </h1>
      <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-45">
          {percent}
      </div>
    </div>
    
  )
}

export default SkillCards;
