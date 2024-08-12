import React from 'react'
import ResumeImg from "../Assets/resume.jpg";

export default function Resume() {
  const config = {
    link: 'https://drive.google.com/file/d/1NmUV5viXIVdwzTqDhcP_7XSOGkY7UX2G/view?usp=drive_link'
}
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary'>
        <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className=' flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[130px] font-bold'>Resume</h1>
            <p className='pb-5 '>you can view my Resume<a className='btn' href={config.link}>Download</a></p>
                
            </div>

            </div>
    </section>
  )
}
