import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Download from './components/Download'
import Accordion from './components/Accordion'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-[1440px] '>
        <Header />
        <Hero />
        <Features />
        <Download />
        <Accordion />
      </div>
      <div className='lg:w-full'>
        <Footer />
      </div>
    </>
    
    
  )
}

export default App
