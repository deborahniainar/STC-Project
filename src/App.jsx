import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'

import HomePage from './pages/HomePage'
import About from './pages/About'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const ScrollToHash = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1)
      scroller.scrollTo(id, {
        duration: 100,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80,
      })
    } else {
      // Scroll top when no hash
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return null
}

const App = () => (
  <>
    <ScrollToHash />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </>
)

export default App
