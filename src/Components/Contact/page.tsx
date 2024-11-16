import React from 'react'
import ContactForm from '../ContactForm/page'
import ContactInfo from '../ContactInfo/page'


const Contact = () => {
  return (
    <div className='pb-[200px] pt-16 bg-black'>
      <h1 id="contact"className='heading pb-16 pt-16'>CONTACT <span className='text-[#66FCF1]'> ME</span></h1>
        <div className='grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 xl:gap-[300px] mt-10'>
{/* contact form */}
<div><ContactForm /></div>

{/* contact details */}
<div ><ContactInfo/></div>
        </div>
      
    </div>
  )
}

export default Contact
