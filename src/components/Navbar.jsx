import React, { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import Logo from '../Images/Logo_STC.svg'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ModernButton from './ModernButton'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  const navLinks = [
    { label: 'Accueil', to: '/#home' },
    { label: 'Services', to: '/#services' },
    { label: 'Réalisations', to: '/#achievements' },
    { label: 'Contact', to: '/#contact' },
    { label: 'À Propos', to: '/about' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl py-3 mx-4 mt-4 rounded-2xl shadow-xl border border-white/20'
            : 'bg-white/95 backdrop-blur-sm shadow-lg py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo + texte */}
          <RouterLink to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img
                src={Logo}
                alt="LogoSTC"
                className="w-16 h-16 md:w-20 md:h-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden lg:block">
              <h1 className="text-xl font-display font-bold text-gradient-primary">
                STC
              </h1>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-neutral-700' : 'text-neutral-600'
              }`}>
                Société de Terrassement et de Construction
              </p>
            </div>
          </RouterLink>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <RouterLink
                key={to}
                to={to}
                className={`relative font-medium transition-all duration-300 hover:text-primary-500 group ${
                  location.pathname + location.hash === to 
                    ? 'text-primary-500' 
                    : isScrolled ? 'text-neutral-800' : 'text-neutral-700'
                }`}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
                {location.pathname + location.hash === to && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"></span>
                )}
              </RouterLink>
            ))}
          </div>

          {/* Menu Mobile Button */}
          <ModernButton
            variant={isScrolled ? "outline" : "ghost"}
            size="sm"
            icon={open ? CloseIcon : MenuIcon}
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out ${
          open 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] glass backdrop-blur-xl transform transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8 pt-24">
            <div className="space-y-6">
              {navLinks.map(({ label, to }) => (
                <RouterLink
                  key={to}
                  to={to}
                  className={`block text-xl font-medium transition-all duration-300 hover:text-primary-400 hover:translate-x-2 ${
                    location.pathname + location.hash === to 
                      ? 'text-primary-400' 
                      : 'text-white'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </RouterLink>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm mb-2">Contactez-nous</p>
              <p className="text-white font-medium">+269 733 21 70</p>
              <p className="text-white/70 text-sm">stc.moroni@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar