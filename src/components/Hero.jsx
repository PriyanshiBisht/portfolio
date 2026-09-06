import React from 'react'
import profilePic from '../assets/profilepic.jpeg'
import { TypeAnimation } from 'react-type-animation'
export default function Hero() {
  return (
    <div className='pt-24 text-center'>
      <div className='w-32 h-32 rounded-full border-2 border-dashed border-slate-300 mx-auto mb-6'>
     <img src={profilePic} className='w-32 h-32 rounded-full object-cover mx-auto mb-6' />   
      </div>
       <h1 className='text-slate-900 text-4xl font-bold'>Priyanshi Bisht</h1>
    <TypeAnimation
  sequence={[
    'Full Stack Developer crafting modern web experiences',
    1000, 
    'Solving problems, one commit at a time',
    1000,
    'Turning ideas into interactive web apps',
    1000,
  ]}
  wrapper="p"
  speed={50}
  className='text-slate-600 max-w-xl mx-auto mt-4'
  repeat={Infinity}
/>
      <div className='flex gap-4 justify-center mt-6'>
    <a href="#projects">
  <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded'>
    View Projects
  </button>
</a>
<a href="priyanshi_bisht_resume.pdf" download>
  <button className='border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded'>Download Resume</button>
</a>
      
        </div>
    </div>
  )
}
