import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import CampusSync from '../assets/CampusSync.png'
import Chatify from '../assets/Chatify.png'
import Deepdev from '../assets/Deepdev.png'

const projects = [
  {
    title: 'CampusSync',
    image: CampusSync,
    description: 'Campus marketplace platform for students to trade goods and share internship opportunities.',
    github: 'https://github.com/PriyanshiBisht/campus-resource-manager',
    demo: 'https://campus-resource-manager-mhip.onrender.com/',
  },
  {
    title: 'Chatify',
    image: Chatify,
    description: 'Real-time chat application built with the MERN stack and Socket.io, featuring JWT authentication and instant messaging.',
    github: 'https://github.com/PriyanshiBisht/react-chat-app',
    demo: 'https://react-chat-ten-tau.vercel.app',
  },
  {
    title: 'DeepDev',
    image: Deepdev,
    description: 'A LeetCode-style platform for practicing frontend UI development — write HTML/CSS/JS in an in-browser code editor and see it render live.',
    github: 'https://github.com/PriyanshiBisht/deep-dev',
    demo: 'https://deep-dev-seven.vercel.app/',
  },
]

export default function Project() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = () => setIndex((prev) => (prev + 1) % projects.length)
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isPaused])

  const current = projects[index]

  return (
    <section className="py-20 px-6" id="projects">

      <div className='text-center text-4xl font-bold text-white mb-10'>
        <h2>Projects</h2>
      </div>

      <div
        className="max-w-xl mx-auto relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="border-2 border-slate-700 rounded-lg p-4 bg-slate-800 shadow-md"
          >
            <div className="w-full h-48 bg-slate-900 flex items-center justify-center rounded-lg overflow-hidden">
              <img
                src={current.image}
                alt={`${current.title} preview`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <h3 className="text-white font-bold text-xl mt-4">
              {current.title}
            </h3>

            <p className="text-slate-400 mt-2">
              {current.description}
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <a
                href={current.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href={current.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev/Next buttons */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-12 -translate-y-1/2 bg-slate-800 border border-slate-700 text-emerald-400 p-2 rounded-full hover:bg-emerald-400 hover:text-slate-950 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 -right-12 -translate-y-1/2 bg-slate-800 border border-slate-700 text-emerald-400 p-2 rounded-full hover:bg-emerald-400 hover:text-slate-950 transition"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? 'bg-emerald-400' : 'bg-slate-600'
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  )
}