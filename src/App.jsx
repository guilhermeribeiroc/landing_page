import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Projects from './components/Projects'
import About from './components/About'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Projects />
        <About />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

export default App
