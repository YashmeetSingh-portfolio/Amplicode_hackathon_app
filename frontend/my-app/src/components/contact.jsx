// src/components/Contact.jsx
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) => {
    // simple email regex
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill out all fields.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email.');
      return;
    }

    setLoading(true);
    // Simulate sending feedback (replace with real API call)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="contact-title">Get in Touch</h2>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your full name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Your message or feedback"
            required
          />
        </div>

        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">Thank you for your message! We’ll get back to you soon.</p>}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? <Mail className="loading-icon" /> : 'Send Message'}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
