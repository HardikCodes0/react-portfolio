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
       {/*  <div style={{height:"20px"}}></div>
        <div className='downloadcv'><a href="https://drive.google.com/uc?export=download&id=1D0BrGNGJrDwqdx1pWG7-SU42DG-GD3dW">
        <motion.button
          whileHover={{ scale: 0.97 }}
          style={{
            backgroundColor: 'blueviolet',
            padding: '20px',
            paddingLeft: '70px',
            paddingRight:' 70px',
            paddingTop:' 20px',
            paddingBottom:'30PX',
            fontSize: '20px',
            cursor: 'pointer',
            borderRadius:'10px',
            color:"white",
            marginLeft:'600px',
            height:"70px",
          }}
        >
          Download CV
        </motion.button>
      </a></div> */}
      </div>
    </>
  );
}

export default Home;
