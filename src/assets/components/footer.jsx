import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f8f9fa',
      padding: '2rem 0',
      textAlign: 'center',
      marginTop: '50px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '1rem'
      }}>
        <motion.a
          href="https://github.com/HardikCodes0"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          style={{ color: '#333' }}
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/hardik78278/profilecard/?igsh=MWxlYzJtcmFiMTJkaw=="
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          style={{ color: '#E1306C' }}
        >
          <FaInstagram size={24} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/hardik-batra-76768a241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          style={{ color: '#0077B5' }}
        >
          <FaLinkedin size={24} />
        </motion.a>
      </div>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Hardik Batra. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;