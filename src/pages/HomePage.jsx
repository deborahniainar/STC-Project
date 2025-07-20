import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Element, Link as ScrollLink, animateScroll as scroll  } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bgImage from '../Images/bgImg.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import BuildIcon from '@mui/icons-material/Build'
import TerrainIcon from '@mui/icons-material/Terrain'
import ConstructionIcon from '@mui/icons-material/Construction'

const sectionClass = "min-h-screen px-20 flex"

const services = [
  { title: "Terrassement", image: bgImage, description: "Travaux de terrassement professionnels et sécurisés." },
  { title: "Construction", image: bgImage, description: "Bâtiments durables et aux normes." },
  { title: "Extraction", image: bgImage, description: "Extraction de matériaux avec équipement moderne." },
  { title: "Voiries", image: bgImage, description: "Réalisation de routes et infrastructures de qualité." },
]

const HomePage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
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
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
      <Element name="services" className="py-20 px-4 md:px-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>

        <div className="space-y-16">
          {/* Carte 1 */}
          <div className="flex flex-col md:flex-row items-center" data-aos="fade-up">
            <div className="md:w-1/2 h-64 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10 text-center md:text-left">
              <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start mb-4"><TerrainIcon className='text-primary mr-2' /> Terrassement</h3>
              <p className="text-gray-700 mb-4">Travaux de terrassement pour tout type de terrain.</p>
              <button className="bg-primary text-white px-5 py-2 rounded-md">Voir plus</button>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-up">
            <div className="md:w-1/2 h-64 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:mr-10 text-center md:text-left">
              <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start mb-4"><BuildIcon className='text-primary mr-2' /> Construction</h3>
              <p className="text-gray-700 mb-4">Bâtiments, maisons et infrastructures.</p>
              <button className="bg-primary text-white px-5 py-2 rounded-md">Voir plus</button>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="flex flex-col md:flex-row items-center" data-aos="fade-up">
            <div className="md:w-1/2 h-64 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10 text-center md:text-left">
              <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start mb-4"><ConstructionIcon className='text-primary mr-2' /> Extraction</h3>
              <p className="text-gray-700 mb-4">Extraction de matériaux pour vos travaux publics et privés.</p>
              <button className="bg-primary text-white px-5 py-2 rounded-md">Voir plus</button>
            </div>
          </div>
        </div>
      </Element>

      
      {/* Réalisations */}
      <Element name="achievements" className="min-h-screen bg-White py-20 px-6 md:px-20 text-center">
        <h1 className="text-5xl font-bold mb-16">Nos Réalisations</h1>

        {/* Cartes */}
        <div className="flex flex-col gap-12 items-start">
          {/* Carte 1 */}
          <div data-aos="fade-right" className='w-full md:w-1/3 h-80 bg-white rounded-lg shadow-md cursor-pointer'>
            <div 
              className="relative h-full bg-cover bg-center rounded-xl overflow-hidden group shadow-lg cursor-pointer"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <div className="absolute bottom-0 w-full p-4 text-white bg-black/50 text-center text-xl font-bold">Terrassement</div>
              <div className="absolute bottom-[-100%] group-hover:bottom-16 transition-all duration-500 w-full text-center text-white px-4">
                <p className="bg-black/70 p-4 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque harum, vel, itaque provident vero quam iste quia at sed cumque ab? Reiciendis aut nobis ipsa id! Repellendus, porro iure dicta aut mollitia cumque sunt libero? Alias et quaerat quis, cum, illo cupiditate, officia voluptas consequatur eum ipsa veritatis vitae.</p>
              </div>
            </div>
          </div>

          {/* Carte 2 */}
          <div data-aos="fade-right" className="w-full md:w-1/3 h-80 bg-white rounded-lg shadow-md cursor-pointer self-center">
            <div
              className="relative h-full bg-cover bg-center rounded-xl overflow-hidden group shadow-lg cursor-pointer"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <div className="absolute bottom-0 w-full p-4 text-white bg-black/50 text-center text-xl font-bold">Construction</div>
              <div className="absolute bottom-[-100%] group-hover:bottom-16 transition-all duration-500 w-full text-center text-white px-4">
                <p className="bg-black/70 p-4 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque harum, vel, itaque provident vero quam iste quia at sed cumque ab? Reiciendis aut nobis ipsa id! Repellendus, porro iure dicta aut mollitia cumque sunt libero? Alias et quaerat quis, cum, illo cupiditate, officia voluptas consequatur eum ipsa veritatis vitae.</p>
              </div>
            </div>
          </div>

          {/* Carte 3 */}
          <div data-aos="fade-right" className="w-full md:w-1/3 h-80 bg-white rounded-lg shadow-md cursor-pointer self-end">
            <div
              className="relative h-full bg-cover bg-center rounded-xl overflow-hidden group shadow-lg cursor-pointer"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <div className="absolute bottom-0 w-full p-4 text-white bg-black/50 text-center text-xl font-bold">Extraction</div>
              <div className="absolute bottom-[-100%] group-hover:bottom-16 transition-all duration-500 w-full text-center text-white px-4">
                <p className="bg-black/70 p-4 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque harum, vel, itaque provident vero quam iste quia at sed cumque ab? Reiciendis aut nobis ipsa id! Repellendus, porro iure dicta aut mollitia cumque sunt libero? Alias et quaerat quis, cum, illo cupiditate, officia voluptas consequatur eum ipsa veritatis vitae.</p>
              </div>
            </div>
          </div>

          {/* Carte 4 */}
          <div data-aos="fade-left" className="w-full md:w-1/3 h-80 bg-white rounded-lg shadow-md cursor-pointer self-center">
            <div
              className="relative h-full bg-cover bg-center rounded-xl overflow-hidden group shadow-lg cursor-pointer"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <div className="absolute bottom-0 w-full p-4 text-white bg-black/50 text-center text-xl font-bold">Excavation</div>
              <div className="absolute bottom-[-100%] group-hover:bottom-16 transition-all duration-500 w-full text-center text-white px-4">
                <p className="bg-black/70 p-4 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque harum, vel, itaque provident vero quam iste quia at sed cumque ab? Reiciendis aut nobis ipsa id! Repellendus, porro iure dicta aut mollitia cumque sunt libero? Alias et quaerat quis, cum, illo cupiditate, officia voluptas consequatur eum ipsa veritatis vitae.</p>
              </div>
            </div>
          </div>

          {/* Carte 5 */}
          <div data-aos="fade-left" className="w-full md:w-1/3 h-80 bg-white rounded-lg shadow-md cursor-pointer">
            <div
              className="relative h-full bg-cover bg-center rounded-xl overflow-hidden group shadow-lg cursor-pointer"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <div className="absolute bottom-0 w-full p-4 text-white bg-black/50 text-center text-xl font-bold">Demolition</div>
              <div className="absolute bottom-[-100%] group-hover:bottom-16 transition-all duration-500 w-full text-center text-white px-4">
                <p className="bg-black/70 p-4 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque harum, vel, itaque provident vero quam iste quia at sed cumque ab? Reiciendis aut nobis ipsa id! Repellendus, porro iure dicta aut mollitia cumque sunt libero? Alias et quaerat quis, cum, illo cupiditate, officia voluptas consequatur eum ipsa veritatis vitae.</p>
              </div>
            </div>
          </div>

          {/* Carte 6 */}
          <div data-aos="fade-right" className="w-full md:w-1/3 h-80 bg-white rounded-lg shadow-md cursor-pointer self-center">
            <div
              className="relative h-full bg-cover bg-center rounded-xl overflow-hidden group shadow-lg cursor-pointer"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <div className="absolute bottom-0 w-full p-4 text-white bg-black/50 text-center text-xl font-bold">Transport</div>
              <div className="absolute bottom-[-100%] group-hover:bottom-16 transition-all duration-500 w-full text-center text-white px-4">
                <p className="bg-black/70 p-4 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque harum, vel, itaque provident vero quam iste quia at sed cumque ab? Reiciendis aut nobis ipsa id! Repellendus, porro iure dicta aut mollitia cumque sunt libero? Alias et quaerat quis, cum, illo cupiditate, officia voluptas consequatur eum ipsa veritatis vitae.</p>
              </div>
            </div>
          </div>

          {/* Carte 7 */}
          <div data-aos="fade-right" className="w-full md:w-1/3 h-80 bg-white rounded-lg shadow-md cursor-pointer self-end">
            <div
              className="relative h-full bg-cover bg-center rounded-xl overflow-hidden group shadow-lg cursor-pointer"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <div className="absolute bottom-0 w-full p-4 text-white bg-black/50 text-center text-xl font-bold">Création</div>
              <div className="absolute bottom-[-100%] group-hover:bottom-16 transition-all duration-500 w-full text-center text-white px-4">
                <p className="bg-black/70 p-4 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque harum, vel, itaque provident vero quam iste quia at sed cumque ab? Reiciendis aut nobis ipsa id! Repellendus, porro iure dicta aut mollitia cumque sunt libero? Alias et quaerat quis, cum, illo cupiditate, officia voluptas consequatur eum ipsa veritatis vitae.</p>
              </div>
            </div>
          </div>
        </div>
      </Element>


      {/* Contact */}
      <Element name="contact" className="min-h-screen bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contactez-nous</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-700">Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                rows="5"
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
