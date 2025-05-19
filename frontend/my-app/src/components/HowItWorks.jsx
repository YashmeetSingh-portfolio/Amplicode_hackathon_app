import React from 'react';
import '../styles/HowItWorks.css';
import { Code, Sparkles, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Code size={32} />,
    title: 'Paste Your Code',
    desc: 'Input any snippet you want explained — JavaScript, Python, or more.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Let AI Analyze',
    desc: 'Our Gemini-powered AI reads and understands your code instantly.',
  },
  {
    icon: <MessageSquare size={32} />,
    title: 'Read the Explanation',
    desc: 'Get a simple, clear breakdown of what your code does.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-section">
      <motion.h2 
        className="how-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>

      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <motion.div
            className="step-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;