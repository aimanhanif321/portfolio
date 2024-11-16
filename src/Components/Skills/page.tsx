import React from 'react'
import skillData from '../SkillsData/page';
import SkillCards from '../SkillCards/page';

const Skills = () => {
  return (
    <div className='pt-6 pb-6 bg-black '>
      <h1 className='heading ' id='skills'>My <span className='text-[#66FCF1]'>SKILLS</span></h1>
      <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
        {skillData.map((skill) => {
          return(
            <div key = {skill.id}>
              <SkillCards skill = {skill}/>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
