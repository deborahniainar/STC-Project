import React, { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import Logo from '../Images/Logo_STC.svg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 1000)
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
    <nav 
      className={`sticky z-50 px-6 md:px-60 py-4 flex items-center justify-between font-roboto font-bold transition-all duration-300 
          ${isScrolled ? 'bg-background/50 backdrop-blur-sm shadow-xl py-2 top-4 rounded-lg' : 'bg-background shadow-md top-0 py-4 w-full'}`}>
           {/* Logo */}
      <RouterLink to="/" className='items-center'>
        <img src={Logo} alt="LogoSTC" className='sm:w-1/3 hover:scale-150 transition-all duration-300 relative' />
        <p className='hidden lg:block select-none'>
            <span className='text-primary text-2xl'>S</span>ociété de 
            <span className='text-primary text-2xl'>T</span>errassement et de 
            <span className='text-primary text-2xl'>C</span>onstruction
        </p>
      </RouterLink>

      <div className="flex items-center">
        <ul
          className={`absolute top-20 left-0 w-full shadow-md flex flex-col items-center gap-6 py-6 z-40 transition-all duration-300 ease-in-out transform
            ${open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
            md:opacity-100 md:scale-100 md:visible md:flex md:flex-row md:static md:w-auto md:shadow-none md:gap-8 md:py-0 md:bg-transparent`}
        >
          {navLinks.map(({ label, to }) => (
            <li key={to} className="hover:scale-105 transition-transform duration-300">
              <RouterLink
                to={to}
                className="hover:text-secondary"
                onClick={() => setOpen(false)}
                aria-current={location.pathname + location.hash === to ? 'page' : undefined}
              >
                {label}
              </RouterLink>
            </li>
          ))}
        </ul>

        <RouterLink
          to="/login"
          onClick={() => setOpen(false)}
          className="bg-primary text-white rounded-md px-6 py-2 flex items-center gap-2 ml-4"
          aria-label="Se connecter"
        >
          <AccountCircleIcon />
          <span>S'Identifier</span>
        </RouterLink>

        <button
          className="md:hidden z-50 mx-6 hover:scale-105 transition-transform duration-300 hover:text-primary"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          type="button"
        >
          {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

