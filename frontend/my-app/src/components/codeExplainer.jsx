
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';
import '../styles/CodeExplainer.css';
import { Loader } from 'lucide-react';

const CodeExplainer = ({ onExplain }) => {
  const [code, setCode] = useState('// Paste your code here...');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    setLoading(true);
    setExplanation('');

    // Simulate AI API call delay (replace this with real Gemini API call)
    setTimeout(() => {
      const mockResponse = 'This code defines a function that returns the sum of two numbers.';
      setExplanation(mockResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="code-section" id="code">
      <motion.h2 
        className="code-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Try It Out
      </motion.h2>

      <div className="editor-wrapper">
        <Editor
          height="300px"
          defaultLanguage="javascript"
          value={code}
          theme="vs-dark"
          onChange={(value) => setCode(value)}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
          }}
        />
        <button className="explain-btn" onClick={handleExplain}>
          {loading ? <Loader className="loader-icon" /> : 'Explain Code'}
        </button>
      </div>

      {explanation && !loading && (
        <motion.div
          className="explanation-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3>AI Explanation</h3>
          <p>{explanation}</p>
        </motion.div>
      )}
    </section>
  );
};

export default CodeExplainer;
