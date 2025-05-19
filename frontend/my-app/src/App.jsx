import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Navbar from './components/navbar'
import Hero from './components/hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
        <Hero />
    </>
  )
}

export default App
