import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import Logo from '../Images/Logo_STC.svg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1000)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky z-50 md:px-20 px-6 py-4 flex items-center justify-between font-roboto transition-all duration-300 
        ${isScrolled ? 'bg-background/50 backdrop-blur-sm shadow-xl py-2 top-4 rounded-lg' : 'bg-background shadow-md top-0 py-4 w-full'}`}>
      {/* Logo */}
      <RouterLink to="/" className=' items-center'>
        <img src={Logo} alt="LogoSTC" className='sm:w-1/3 hover:scale-150 transition-all duration-300 relative' />
        <p className='hidden lg:block'>
            <span className='text-primary text-2xl'>S</span>ociété de <span className='text-primary text-2xl'>T</span>errassement et de <span className='text-primary text-2xl'>C</span>onstruction
        </p>
        
      </RouterLink>

      {/* Links */}
      <div className='flex items-center justify-between'>
        <ul
            className={`absolute top-20 left-0 w-full shadow-md flex flex-col items-center gap-6 py-6 z-40 transition-all duration-300 ease-in-out transform ${open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'} md:opacity-100 md:scale-100 md:visible md:flex md:flex-row md:static md:w-auto md:shadow-none md:gap-8 md:py-0 md:bg-transparent`}
        >
          <li className='hover:scale-105 transition-all duration-300'>
            <ScrollLink to="home" smooth={true} duration={100} offset={-80} onClick={() => setOpen(false)} className="cursor-pointer hover:text-secondary">Acceuil</ScrollLink>
          </li>
          <li className='hover:scale-105 transition-all duration-300'>
            <ScrollLink to="services" smooth={true} duration={100} offset={-80} onClick={() => setOpen(false)} className="cursor-pointer hover:text-secondary">Services</ScrollLink>
          </li>
          <li className='hover:scale-105 transition-all duration-300'>
            <ScrollLink to="achievements" smooth={true} duration={100} offset={-80} onClick={() => setOpen(false)} className="cursor-pointer hover:text-secondary">Réalisations</ScrollLink>
          </li>
          <li className='hover:scale-105 transition-all duration-300'>
            <ScrollLink to="contact" smooth={true} duration={100} offset={-80} onClick={() => setOpen(false)} className="cursor-pointer hover:text-secondary">Contacte</ScrollLink>
          </li>
          <li className='hover:scale-105 transition-all duration-300'>
            <RouterLink to="/about" onClick={() => setOpen(false)} className="hover:text-secondary">A Propos</RouterLink>
          </li>
        </ul>

        {/* Login */}
        <RouterLink
          to="/login"
          onClick={() => setOpen(false)}
          className='bg-primary text-white rounded-md px-6 py-2 flex items-center gap-2 ml-4'
        >
          <AccountCircleIcon />
          <span>S'Identifier</span>
        </RouterLink>

        {/* Toggle Icon */}
        <div className='md:hidden z-50 mx-6 hover:scale-105 transition-all duration-300 hover:text-primary' onClick={() => setOpen(!open)}>
          {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
