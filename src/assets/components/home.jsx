import React from 'react';
import { motion } from "framer-motion"
function Home() {
  return (
    <>
      <div className="intro"  style={{ position: "relative" , paddingRight:"100px" }}>
        <div 
          style={{ 
            height: "100vh", 
            backgroundImage: "url('/common-bg.svg')",
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat", 
            position: "absolute", 
            width: "150%", 
            zIndex: "-1" ,
            opacity:"0.4"
          }} 
        ></div>
        <h1 style={{paddingLeft:"450px"}}>Hey , Im Hardik Batra</h1>
        <h3 style={{paddingLeft:"450px"}}>A results-focused Full-Stack Developer, building efficient web solutions that drive project success and enhance user experiences.</h3>
        <motion.button whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.9 }} style={{marginLeft:"600px" , color:"white"}}>Projects</motion.button>
      </div>
    </>
  );
}

export default Home;
