import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import CampusSync from '../assets/CampusSync.png'
import Chatify from '../assets/Chatify.png'
import Deepdev from '../assets/Deepdev.png'
export default function Project() {
  return (
    <section className="py-20 px-6" id="projects">
 
  
  <div className="bg-linear-to-r from-violet-200 to-slate-100 rounded-xl shadow-sm border border-slate-200 max-w-2xl mx-auto mt-10">
 <div className='text-center text-4xl font-bold pt-5'> <h2>Projects</h2></div>
    
  
<div className='flex flex-col gap-4'>
<div className="border-2 border-slate-700 rounded-lg p-3 m-3 overflow-hidden shadow-md  transition-all duration-300 ease-in-out
hover:-translate-y-2
hover:shadow-2xl
hover:border-violet-500">
  <div className="w-full h-48 bg-linear-to-b from-violet-200 to-slate-100 flex items-center justify-center rounded-lg overflow-hidden">
    <img
      src={CampusSync}
      alt="CampusSync preview"
      className="max-w-full max-h-full object-contain "
    />
  </div>
  <h3 className="text-slate-700 font-bold text-xl mt-4">
    CampusSync
  </h3>
  <p className="text-slate-600 mt-2">
    Campus marketplace platform for students to trade goods and share internship opportunities.
  </p>
  <div className="grid grid-cols-2 gap-2 mt-4">
    <a
      href="https://github.com/PriyanshiBisht/campus-resource-manager"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-blue-600 transition-colors"
    >
      <FaGithub size={20} />
      GitHub
    </a>

    <a
      href="https://campus-resource-manager-mhip.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-blue-600 transition-colors"
    >
      <FaExternalLinkAlt size={16} />
      Live Demo
    </a>
  </div>

</div>
<div className="border-2 border-slate-700 rounded-lg p-3 m-3 overflow-hidden shadow-md  transition-all duration-300 ease-in-out
hover:-translate-y-2
hover:shadow-2xl
hover:border-violet-500">
  <div className="w-full h-48 bg-linear-to-b from-violet-200 to-slate-100 flex items-center justify-center rounded-lg overflow-hidden">
    <img
      src={Chatify}
      alt="Chatify preview"
      className="max-w-full max-h-full object-contain"
    />
  </div>
  <h3 className="text-slate-700 font-bold text-xl mt-4">
    Chatify
  </h3>
  <p className="text-slate-600 mt-2">
    Real-time chat application built with the MERN stack and Socket.io, featuring JWT authentication and instant messaging.
  </p>
  <div className="grid grid-cols-2 gap-2 mt-4">
    <a
      href="https://github.com/PriyanshiBisht/react-chat-app"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-blue-600 transition-colors"
    >
      <FaGithub size={20} />
      GitHub
    </a>

    <a
      href="https://react-chat-ten-tau.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-blue-600 transition-colors"
    >
      <FaExternalLinkAlt size={16} />
      Live Demo
    </a>
  </div>

</div>
<div className="border-2 border-slate-700 rounded-lg p-3 m-3 overflow-hidden shadow-md  transition-all duration-300 ease-in-out
hover:-translate-y-2
hover:shadow-2xl
hover:border-violet-500">
  <div className="w-full h-48 bg-linear-to-b from-violet-200 to-slate-100 flex items-center justify-center rounded-lg overflow-hidden">
    <img
      src={Deepdev}
      alt="Deepdev preview"
      className="max-w-full max-h-full object-contain"
    />
  </div>
  <h3 className="text-slate-700 font-bold text-xl mt-4">
    DeepDev
  </h3>
  <p className="text-slate-600 mt-2">
    A LeetCode-style platform for practicing frontend UI development — write HTML/CSS/JS in an in-browser code editor and see it render live.
  </p>
  <div className="grid grid-cols-2 gap-2 mt-4">
    <a
      href="https://github.com/PriyanshiBisht/deep-dev"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-blue-600 transition-colors"
    >
      <FaGithub size={20} />
      GitHub
    </a>

    <a
      href="https://deep-dev-seven.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-blue-600 transition-colors"
    >
      <FaExternalLinkAlt size={16} />
      Live Demo
    </a>
  </div>

</div>


</div>

  </div>
</section>
  )
}
