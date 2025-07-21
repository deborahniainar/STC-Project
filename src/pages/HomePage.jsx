import React from 'react'
import { useEffect, useState } from 'react'
import { Element, Link as ScrollLink, animateScroll as scroll  } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bgImage from '../Images/bgImg.png'
import terrassement from '../Images/Terrassement.png'
import construction from '../Images/Construction.jpg'
import extraction from '../Images/Extraction.png'
import excavation from '../Images/Excavation.png'
import demolition from '../Images/Demolition.png'
import transport from '../Images/Transport.png'
import realisation1 from '../Images/ParkChomoni.png'
import realisation2 from '../Images/ParkFoumbouni.png'
import realisation3 from '../Images/Piste-Mvouni.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import BuildIcon from '@mui/icons-material/Build'
import TerrainIcon from '@mui/icons-material/Terrain'
import ConstructionIcon from '@mui/icons-material/Construction'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const sectionClass = "min-h-screen px-20 flex"

const services = [
  { title: "Terrassement", image: terrassement, description: "Préparation du terrain" },
  { title: "Construction", image: construction, description: "Édification de structures" },
  { title: "Extraction", image: extraction, description: "Extraction de matériaux" },
  { title: "Excavation", image: excavation, description: "Travaux de creusage" },
  { title: "Démolition", image: demolition, description: "Démolition sécurisée" },
  { title: "Transport", image: transport, description: "Transport de matériaux" },
];

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    alert('Message envoyé !')
    // Reset le formulaire
    setFormData({ name: '', email: '', message: '' })
  }
  
  return (
    <div>
      {/* Home section with background image */}
      <Element
        name="home"
        className={`${sectionClass} text-white bg-fixed bg-center bg-cover relative  items-center justify-center text-center`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* overlay semi-transparent */}
        <div className="absolute inset-0 bg-black/50"></div> 
        <div className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl font-bold mb-4">Bienvenue chez <span className='text-primary'>STC</span></h1>
          <p className="text-xl py-4">
            <span className='text-primary font-bold text-2xl'>S</span>ociété de 
            <span className='text-primary font-bold text-2xl'>T</span>errassement et de 
            <span className='text-primary font-bold text-2xl'>C</span>onstruction
          </p>
          <p className="text-xl">Votre partenaire de confiance pour tous vos projets de construction et de terrassement.</p>
          <button className='bg-primary text-white px-4 py-4 rounded-md my-4 gap-2 text-2xl'> <ScrollLink to="services" smooth={true} duration={100} offset={-80} className='cursor-pointer'> En savoir plus <KeyboardDoubleArrowRightIcon className='animate-wiggleRight' /></ScrollLink></button>
        </div>
      </Element>

      {/* Services */}
      <Element name="services" className="min-h-screen bg-gray-100 py-20 px-6 md:px-60">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Nos Services</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative h-80 rounded-xl overflow-hidden shadow-lg"
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={i * 200}
              data-aos-duration="1000"
            >
              {/* Image zoom au hover */}
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Overlay sombre au hover */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-500" />

              {/* Titre en bas */}
              <div className="absolute bottom-0 w-full text-center text-white text-2xl font-bold py-4 z-10">
                {service.title}
              </div>

              {/* Description + lien qui glisse */}
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
            
      {/* Réalisations */}
      <Element name="achievements" className="py-20 px-6 md:px-60 bg-gray-200">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h2>

        <div className="space-y-5">
          {/* Carte 1 */}
          <div className="flex flex-col md:flex-row items-center" data-aos="fade-up">
            <div className="w-full md:w-1/2 h-64 sm:h-80 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${realisation1})` }}></div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10 text-center md:text-left">
              <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start mb-4"><TerrainIcon className='text-primary mr-2' /> Terrassement</h3>
              <p className="text-gray-700 mb-4">Travaux de terrassement pour tout type de terrain.</p>
              <button className="bg-primary text-white px-5 py-2 rounded-md">Voir plus</button>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-up">
          <div className="w-full md:w-1/2 h-64 sm:h-80 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${realisation2})` }}></div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:mr-10 text-center md:text-left">
              <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start mb-4"><BuildIcon className='text-primary mr-2' /> Construction</h3>
              <p className="text-gray-700 mb-4">Bâtiments, maisons et infrastructures.</p>
              <button className="bg-primary text-white px-5 py-2 rounded-md">Voir plus</button>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="flex flex-col md:flex-row items-center" data-aos="fade-up">
          <div className="w-full md:w-1/2 h-64 sm:h-80 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${realisation3})` }}></div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10 text-center md:text-left">
              <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start mb-4"><ConstructionIcon className='text-primary mr-2' /> Extraction</h3>
              <p className="text-gray-700 mb-4">Extraction de matériaux pour vos travaux publics et privés.</p>
              <button className="bg-primary text-white px-5 py-2 rounded-md">Voir plus</button>
            </div>
          </div>
        </div>
      </Element>

      {/* Contact */}
      <Element name="contact" className="min-h-screen bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contactez-nous</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-700">Nom</label>
              <input
                type="text"
                name="name"
                placeholder="Entrez votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="exemple@domaine.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+269 733 21 70"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Votre message ici..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-md transition duration-300"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </Element>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={() => scroll.scrollToTop({ duration: 100 })}
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 z-50"
          aria-label="Revenir en haut"
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </div>
  )
}

export default HomePage
