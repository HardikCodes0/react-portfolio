import React from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav" style={{ paddingLeft:"50px", display: 'flex', height: '20px', width: '100%' }}>
      <motion.div style={{ paddingRight: '20px' }}>
        <motion.h3
          variants={{
            hover: { color: 'blueviolet' },
          }}
          whileHover="hover"
          transition={{ duration: 3 }}
          onClick={() => scrollToSection('home')}
        >
          HOME
        </motion.h3>
      </motion.div>
      <motion.div style={{ paddingRight: '20px' }}>
        <motion.h3
          variants={{
            hover: { color: 'blueviolet' },
          }}
          whileHover="hover"
          transition={{ duration: 3 }}
          onClick={() => scrollToSection('about')}
        >
          ABOUT
        </motion.h3>
      </motion.div>
      <motion.div>
        <motion.h3
          variants={{
            hover: { color: 'blueviolet' },
          }}
          whileHover="hover"
          transition={{ duration: 3 }}
          onClick={() => scrollToSection('contact')}
        >
          CONTACT
        </motion.h3>
      </motion.div>
      <div className='gapp' style={{width:"10px"}}></div>
      <div className='downloadcv'><a href="https://drive.google.com/uc?export=download&id=1D0BrGNGJrDwqdx1pWG7-SU42DG-GD3dW">
        <motion.button
          whileHover={{ scale: 0.97 }}
          style={{
            height: '40px',
            backgroundColor: 'blueviolet',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '12px',
            fontFamily: '"Source Sans 3", sans-serif'
          }}
        >
          Resume
        </motion.button>
      </a></div>
    </div>
  );
}

export default Navbar;