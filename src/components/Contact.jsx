import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="py-20 px-6 text-center" id="contact">
      
      <h2 className="text-3xl font-bold text-white mb-2">Let's Connect</h2>
      <p className="text-slate-600 mb-8">Feel free to reach out!</p>

      <div className="flex gap-6 justify-center">
        
        <a href="mailto:bishtpriyanshi369@gmail.com" className="text-slate-400 hover:text-emerald-400 transition">
          <FaEnvelope size={28} />
        </a>

        <a href="https://github.com/PriyanshiBisht" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
          <FaGithub size={28} />
        </a>

        <a href="https://www.linkedin.com/in/priyanshi-bisht-29927a309" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
          <FaLinkedin size={28} />
        </a>

      </div>

    </section>
  )
}