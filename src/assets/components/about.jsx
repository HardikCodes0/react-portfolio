import React from 'react'
import {motion} from "framer-motion"
function Aboutme(){
    return(
        <>
        <div className='heading'><h2>ABOUT ME</h2></div>
        <div className="about" style={{height:"600px" , width:"700px"  , marginLeft:"26%" ,textAlign:"center" , paddingTop:"20px"}}>
            <div style={{color: '#666666'}}>Hi, I’m Hardik, a beginner web developer with a passion for technology. Currently a student, I’m focused on learning and mastering web development, especially front-end technologies like HTML, CSS, JavaScript, 
                and frameworks like React. I love bringing ideas to life through clean,
                 responsive, and user-friendly designs.
                  I’m constantly exploring new tools and trends to enhance my skills 
                  and build innovative web solutions. Check out my portfolio to see my projects and growth as a developer. I’m excited to connect, learn, and collaborate so feel free to connect!
                   </div>
                   <br />
                   <div><motion.button whileHover={{ scale: 0.97}}  className='connectbtn'>Connect</motion.button></div>
        </div>
        </>
    )
}
export default Aboutme;