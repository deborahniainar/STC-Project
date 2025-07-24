import React, { useState, useEffect } from 'react'
import { Element, animateScroll as scroll, Link as ScrollLink } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

import bgImage from '../Images/bgImg.jpg'
import terrassement from '../Images/Terrassement.png'
import construction from '../Images/Construction.jpg'
import extraction from '../Images/Extraction.png'
import excavation from '../Images/Excavation.png'
import demolition from '../Images/Demolition.png'
import transport from '../Images/Transport.png'
import realisation1 from '../Images/ParkChomoni.png'
import realisation2 from '../Images/ParkFoumbouni.png'
import realisation3 from '../Images/Piste-Mvouni.png'

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import BuildIcon from '@mui/icons-material/Build'
import TerrainIcon from '@mui/icons-material/Terrain'
import ConstructionIcon from '@mui/icons-material/Construction'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

const sectionClass = 'min-h-screen px-20 flex'

const services = [
  { title: 'Terrassement', image: terrassement, description: 'Préparation du terrain' },
  { title: 'Construction', image: construction, description: 'Édification de structures' },
  { title: 'Extraction', image: extraction, description: 'Extraction de matériaux' },
  { title: 'Excavation', image: excavation, description: 'Travaux de creusage' },
  { title: 'Démolition', image: demolition, description: 'Démolition sécurisée' },
  { title: 'Transport', image: transport, description: 'Transport de matériaux' },
]

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message envoyé !')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main>
      {/* Home Section */}
      <Element
        name="home"
        className={`${sectionClass} text-white bg-fixed bg-center bg-cover relative items-center justify-center text-center font-bold`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">
            Bienvenue chez <span className="text-primary">STC</span>
          </h1>
          <p className="text-xl py-4">
            <span className="text-primary font-bold text-2xl">S</span>ociété de{' '}
            <span className="text-primary font-bold text-2xl">T</span>errassement
            et de <span className="text-primary font-bold text-2xl">C</span>
            onstruction
          </p>
          <p className="text-xl">
            Votre partenaire de confiance pour tous vos projets de construction et
            de terrassement.
          </p>
          <button className="bg-primary text-white px-4 py-4 rounded-md my-4 gap-2 text-2xl">
            <ScrollLink
              to="services"
              smooth={true}
              duration={100}
              offset={-80}
              className="cursor-pointer"
            >
              En savoir plus <KeyboardDoubleArrowRightIcon className="animate-wiggleRight" />
            </ScrollLink>
          </button>
        </div>
      </Element>

      {/* Services Section */}
      <Element name="services" className="min-h-screen bg-gray-100 py-20 px-6 md:px-60">
        <div className="text-center mb-12 font-bold">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Nos Services</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative h-80 rounded-xl overflow-hidden shadow-lg"
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={i * 200}
              data-aos-duration="1000"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-500" />
              <div className="absolute bottom-0 w-full text-center text-white text-2xl font-bold py-4 z-10">
                {service.title}
              </div>
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out z-20">
                <div className="bg-white/20 backdrop-blur-md text-white text-sm text-center px-5 py-4 mb-6 mx-4 rounded-md w-full">
                  <p className="mb-2">{service.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-white font-semibold hover:underline"
                  >
                    Voir plus <ArrowCircleRightIcon className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Element>

      {/* Achievements Section */}
      <Element name="achievements" className="py-20 px-6 md:px-60 bg-gray-200 font-bold">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nos Réalisations</h2>

        <div className="space-y-5">
          {[realisation1, realisation2, realisation3].map((img, i) => {
            const titles = ['Terrassement', 'Construction', 'Extraction']
            const icons = [TerrainIcon, BuildIcon, ConstructionIcon]
            const descriptions = [
              'Travaux de terrassement pour tout type de terrain.',
              'Bâtiments, maisons et infrastructures.',
              'Extraction de matériaux pour vos travaux publics et privés.',
            ]

            const IconComp = icons[i]

            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                data-aos="fade-up"
              >
                <div
                  className="w-full md:w-1/2 h-64 sm:h-80 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url(${img})` }}
                />
                <div
                  className={`md:w-1/2 mt-6 md:mt-0 ${
                    i % 2 === 1 ? 'md:mr-10' : 'md:ml-10'
                  } text-center md:text-left`}
                >
                  <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start mb-4">
                    <IconComp className="text-primary mr-2" /> {titles[i]}
                  </h3>
                  <p className="text-gray-700 mb-4">{descriptions[i]}</p>
                  <button className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition">
                    Voir plus
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="min-h-screen bg-gray-100 py-20 px-6 font-bold">
        <div
          className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contactez-nous</h2>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700">
                Nom
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Entrez votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                autoComplete="name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="exemple@domaine.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700">
                  Téléphone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+262 123 456 789"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white text-xl py-4 rounded-md hover:bg-secondary transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </Element>

      {showScrollTop && (
        <button
          className="fixed bottom-10 right-10 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-secondary transition"
          onClick={() => scroll.scrollToTop({ duration: 200 })}
          aria-label="Retour en haut"
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </button>
      )}
    </main>
  )
}

export default HomePage
