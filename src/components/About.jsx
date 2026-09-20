import React from 'react'
import { FaCode, FaBrain, FaTrophy, FaBook } from 'react-icons/fa'

export default function About() {
  return (
    <section className="py-20 px-6" id="about">

      {/* Monitor bezel */}
      <div className="bg-slate-800 rounded-2xl p-4 max-w-2xl mx-auto relative">

        {/* Camera dot */}
        <div className="w-2 h-2 bg-slate-600 rounded-full mx-auto mb-3"></div>

        {/* Screen content */}
        <div className="bg-slate-950 rounded-lg border border-slate-700">
          <div className='text-center text-4xl font-bold pt-5 text-white'>
            <h2>About Me</h2>
          </div>

          <p className='py-5 px-5 text-slate-400'>
            I'm Priyanshi Bisht, a B.Tech Information Technology student passionate about building modern web applications and solving real-world problems through technology. I enjoy learning new technologies, practicing Data Structures & Algorithms, and developing projects that create meaningful impact.
          </p>

          <div className='grid grid-cols-2 gap-4 p-5'>
            <div className='flex flex-col items-center gap-2 border-2 border-slate-700 rounded-lg px-4 py-4'>
              <FaCode size={24} className='text-emerald-400' />
              <span className='text-slate-300'>Mern Developer</span>
            </div>
            <div className='flex flex-col items-center gap-2 border-2 border-slate-700 rounded-lg px-4 py-4'>
              <p className='text-white text-4xl font-bold'>200+</p>
              <p className='text-slate-300'>DSA Problems Solved</p>
            </div>
            <div className='flex flex-col items-center gap-2 border-2 border-slate-700 rounded-lg px-4 py-4'>
              <FaTrophy size={24} className='text-emerald-400' />
              <span className='text-slate-300'>Hackathon & Projects</span>
            </div>
            <div className='flex flex-col items-center gap-2 border-2 border-slate-700 rounded-lg px-4 py-4'>
              <FaBook size={24} className='text-emerald-400' />
              <span className='text-slate-300'>Research & Publications</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stand */}
      <div className="w-4 h-8 bg-slate-800 mx-auto"></div>
      <div className="w-32 h-3 bg-slate-800 rounded-full mx-auto"></div>

    </section>
  )
}