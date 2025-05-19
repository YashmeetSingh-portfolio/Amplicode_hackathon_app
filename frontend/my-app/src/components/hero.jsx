
import React from 'react';
import '../styles/hero.css';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Understand Any Code <br />
          <span className="highlight">With AI</span> <Sparkles size={28} className="sparkle-icon" />
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Paste your code below and let <strong>CodeMind AI</strong> explain it with human-level clarity —
          powered by <span className="gemini">Gemini</span>.
        </motion.p>

        <motion.a 
          href="#code"
          className="hero-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try It Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
