import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/profilepic.jpeg'
import { TypeAnimation } from 'react-type-animation'

const brackets = [
  { symbol: '</>', top: '10%', left: '8%', size: 'text-4xl', delay: 0 },
  { symbol: '{ }', top: '20%', left: '85%', size: 'text-5xl', delay: 0.5 },
  { symbol: '< >', top: '65%', left: '5%', size: 'text-3xl', delay: 1 },
  { symbol: '/>', top: '75%', left: '90%', size: 'text-4xl', delay: 1.5 },
  { symbol: '{ }', top: '40%', left: '15%', size: 'text-2xl', delay: 2 },
  { symbol: '</>', top: '50%', left: '80%', size: 'text-3xl', delay: 0.8 },
]

export default function Hero() {
  return (
    <div className='relative pt-24 text-center overflow-hidden'>

      {/* Floating background brackets - hidden on mobile, visible from sm breakpoint up */}
      {brackets.map((b, i) => (
        <motion.span
          key={i}
          className={`absolute ${b.size} font-mono text-emerald-400/20 pointer-events-none select-none hidden sm:block`}
          style={{ top: b.top, left: b.left }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: b.delay,
            ease: 'easeInOut',
          }}
        >
          {b.symbol}
        </motion.span>
      ))}

      {/* Existing content, sits above the floating brackets */}
      <div className='relative z-10 px-4'>
        <div className='w-32 h-32 rounded-full border-2 border-dashed border-emerald-400 mx-auto mb-6'>
          <img src={profilePic} className='w-32 h-32 rounded-full object-cover mx-auto mb-6' />
        </div>
        <h1 className='text-white text-3xl sm:text-4xl font-bold'>Priyanshi Bisht</h1>
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
          className='text-slate-400 max-w-xl mx-auto mt-4 text-sm sm:text-base'
          repeat={Infinity}
        />
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-6'>
          <a href="#projects" className='w-full sm:w-auto'>
            <button className='w-full sm:w-auto bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold py-2 px-4 rounded'>
              View Projects
            </button>
          </a>
          <a href="priyanshi_bisht_resume.pdf" download className='w-full sm:w-auto'>
            <button className='w-full sm:w-auto border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 font-bold py-2 px-4 rounded'>
              Download Resume
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}