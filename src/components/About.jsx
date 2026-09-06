import React from 'react'
import { FaCode, FaBrain, FaTrophy, FaBook } from 'react-icons/fa'
export default function About() {
  return (
   
<section className="py-20 px-6" id="about">
 
  
  <div className="bg-linear-to-r from-violet-200 to-slate-100 rounded-xl shadow-sm border border-slate-200 max-w-2xl mx-auto mt-10">
 <div className='text-center text-4xl font-bold pt-5'> <h2>About Me</h2></div>
    
  <p className='py-5 px-5'>

I'm Priyanshi Bisht, a B.Tech Information Technology student passionate about building modern web applications and solving real-world problems through technology. I enjoy learning new technologies, practicing Data Structures & Algorithms, and developing projects that create meaningful impact.
</p>
<div  className='grid grid-cols-2 gap-4 p-5'>
<div className='flex flex-col items-center gap-2 border-2 border-slate-300 rounded-lg px-4 py-4'>
  <FaCode size={24} className='text-indigo-500' />
  <span>Mern Developer</span>
</div>
<div className='flex flex-col items-center gap-2 border-2 border-slate-300 rounded-lg px-4 py-4'>
 <p className='text-slate-900 text-4xl font-bold'>100+</p>
 
  <p>DSA Problems Solved</p>
</div>
<div className='flex flex-col items-center gap-2 border-2 border-slate-300 rounded-lg px-4 py-4'>
  <FaTrophy size={24} className='text-indigo-500' />
  <span>Hackathon & Projects</span>
</div>
<div className='flex flex-col items-center gap-2 border-2 border-slate-300 rounded-lg px-4 py-4'>
  <FaBook size={24} className='text-indigo-500' />
  <span>Research & Publications</span>
</div>

</div>

  </div>
</section>
  )
}
