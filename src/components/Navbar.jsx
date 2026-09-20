import React from 'react'

const Navbar = () => {
  return (
   <div  className='bg-slate-950 border-b border-slate-800 px-6 py-4 z-50' >
     
<ul className="flex gap-8 text-slate-300">
  <li><a href="#about" className="hover:text-emerald-400 transition">About</a></li>
  <li><a href="#skills" className="hover:text-emerald-400 transition">Skills</a></li>
  <li><a href="#projects" className="hover:text-emerald-400 transition">Projects</a></li>
  <li><a href="#contact" className="hover:text-emerald-400 transition">Contact</a></li>
</ul>
   </div>
  )
}

export default Navbar
