// src/components/Footer.jsx
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const socialLinks = [
  { icon: <Github size={22} />, href: 'https://github.com/yourprofile', label: 'GitHub' },
  { icon: <Twitter size={22} />, href: 'https://twitter.com/yourprofile', label: 'Twitter' },
  { icon: <Linkedin size={22} />, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: <Mail size={22} />, href: 'mailto:youremail@example.com', label: 'Email' },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <motion.div
        className="footer-social"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {socialLinks.map(({ icon, href, label }, idx) => (
          <motion.a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="footer-icon-link"
            whileHover={{ scale: 1.35 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {icon}
            <motion.span className="underline-gradient" layoutId={`underline-${idx}`} />
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        className="footer-tagline"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Empowering Developers with AI-Powered Code Insights
      </motion.p>

      <motion.p
        className="footer-copy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        &copy; {new Date().getFullYear()} YourAppName. All rights reserved.
      </motion.p>
    </div>
  </footer>
);

export default Footer;
