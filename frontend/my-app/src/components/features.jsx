
import React from 'react';
import '../styles/Features.css';
import { Cpu, Code, BookOpenCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Cpu size={36} />,
    title: 'Gemini-Powered AI',
    description: 'Cutting-edge AI technology understands and explains your code with precision.',
  },
  {
    icon: <Code size={36} />,
    title: 'Multi-Language Support',
    description: 'Works seamlessly with JavaScript, Python, Java, C++, and more.',
  },
  {
    icon: <BookOpenCheck size={36} />,
    title: 'Educational & Developer Friendly',
    description: 'Great for learning, debugging, and understanding complex codebases.',
  },
  {
    icon: <Zap size={36} />,
    title: 'Fast & Responsive',
    description: 'Get instant explanations without waiting, designed for productivity.',
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <motion.h2 
        className="features-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Features & Benefits
      </motion.h2>

      <div className="features-grid">
        {features.map(({ icon, title, description }, idx) => (
          <motion.div 
            className="feature-card" 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="feature-icon">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

