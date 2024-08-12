import React from 'react'
import ResumeImg from "../Assets/resume.jpg";

export default function Contact() {
    
  const config = {
    email : 'akashd9980@gmail.com',
    phone: '+8056418539'
}
  return (
    <section className='flex flex-col bg-primary px-5 py-32' id='contact'>
        
        <div className=' flex flex-col items-center text-white'>
            <h1 className='text-4xl  border-b-4  border-primary mb-5 w-[130px] font-bold'>Contact</h1>
            <p className='pb-5  '>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone Number :</span> {config.phone}</p>
            </div>
    </section>
  )
}
