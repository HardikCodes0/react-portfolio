import React from 'react'
import './App.css'
import Home from './assets/components/home.jsx'
import Navbar from './assets/components/navbar.jsx'
import Aboutme from './assets/components/about.jsx'
import Projects from './assets/components/projects.jsx'
import Skills from './assets/components/skills.jsx'
import Contact from './assets/components/contact.jsx'


function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <div style={{marginBottom:"350px"}}></div>
      <Aboutme />
      <div style={{marginBottom:"100px"}}></div>
      <Projects />
      <div style={{marginBottom:"100px"}}></div>
      <Skills />
      <div style={{marginBottom:"100px"}}></div>
      <Contact />
    </>
  )
}

export default App

