
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'



  function App() {
  return (
   <div className="min-h-screen bg-linear-to-b from-violet-200 to-slate-100">
  
      <Navbar />
     <Hero/> 
     <About/>
     <Skills/>
     <Education/>
     <Project/>
     <Contact/>
    </div>
   
  
   
   
  )
}

export default App


