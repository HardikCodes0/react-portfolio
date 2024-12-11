import React from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <div className="nav" style={{ paddingLeft:"50px",display: 'flex', height: '20px', width: '100%' }}>
      <motion.div style={{ paddingRight: '20px' }}>
        <motion.h3
          variants={{
            hover: { color: 'blueviolet' },
          }}
          whileHover="hover"
          transition={{ duration: 3 }}
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
        >
          CONTACT
        </motion.h3>
      </motion.div>
    </div>
  );
}

export default Navbar;