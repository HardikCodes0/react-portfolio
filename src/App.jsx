import React from 'react'
import './App.css'
import Home from './assets/components/home.jsx'
import Navbar from './assets/components/navbar.jsx'
import Aboutme from './assets/components/about.jsx'
import Projects from './assets/components/projects.jsx'
import Skills from './assets/components/skills.jsx'
import Contact from './assets/components/contact.jsx'
import Footer from './assets/components/footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div className='gap1' style={{marginBottom:"350px"}}></div>
      <div id="about">
        <Aboutme />
      </div>
      <div style={{marginBottom:"100px"}}></div>
      <div id="projects">
        <Projects />
      </div>
      <div style={{marginBottom:"100px"}}></div>
      <Skills />
      <div style={{marginBottom:"100px"}}></div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App