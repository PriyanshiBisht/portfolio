import React from 'react'

const Navbar = () => {
  return (
   <div  className='fixed top-0 w-full bg-linear-to-r from-violet-200 to-slate-100 border-b border-slate-200 px-6 py-4 z-50' >
     
<ul className="flex gap-8 text-slate-600">
  <li><a href="#about" className="hover:text-indigo-500 transition">About</a></li>
  <li><a href="#skills" className="hover:text-indigo-500 transition">Skills</a></li>
  <li><a href="#projects" className="hover:text-indigo-500 transition">Projects</a></li>
  <li><a href="#contact" className="hover:text-indigo-500 transition">Contact</a></li>
</ul>
   </div>
  )
}

export default Navbar