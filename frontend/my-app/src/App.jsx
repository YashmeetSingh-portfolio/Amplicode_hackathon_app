import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/navbar'
import Hero from './components/hero'
import HowItWorks from './components/HowItWorks'
import CodeExplainer from './components/codeExplainer'
import Features from './components/features'
import Contact from './components/contact'
import Footer from './components/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        
        <Contact />
        <Footer />
    </>
  )
}

export default App
