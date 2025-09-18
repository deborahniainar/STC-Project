import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'

import HomePage from './pages/HomePage'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

const ScrollToHash = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1)
      scroller.scrollTo(id, {
        duration: 500,
        delay: 100,
        smooth: 'easeInOutQuart',
        offset: -80,
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return null
}

// Loading Screen Component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center z-50">
    <div className="text-center">
      <div className="mb-8">
        <LoadingSpinner size="xl" variant="white" />
      </div>
      <h1 className="text-4xl font-display font-bold text-white mb-2">STC</h1>
      <p className="text-white/80">Chargement en cours...</p>
    </div>
  </div>
)

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-neutral-100">
      <ScrollToHash />
      <Navbar />
      <main className="animate-fade-in">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App