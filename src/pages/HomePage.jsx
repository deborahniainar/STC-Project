import React, { useState, useEffect } from 'react'
import { Element, animateScroll as scroll, Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import bgImage from '../Images/bgImg.jpg'
import terrassement from '../Images/Terrassement.png'
import construction from '../Images/Construction.png'
import extraction from '../Images/Extraction.png'
import excavation from '../Images/Excavation.png'
import demolition from '../Images/Demolition.png'
import transport from '../Images/Transport.png'
import parkChomoni from '../Images/construction2.png'
import parkFoumbouni from '../Images/construction.png'
import poteaux from '../Images/terrassement4.png'

// Modern Components
import ModernButton from '../components/ModernButton'
import ModernCard from '../components/ModernCard'
import ParticleBackground from '../components/ParticleBackground'
import LoadingSpinner from '../components/LoadingSpinner'
import ServiceItem from '../components/ServiceItem'

// MUI Icons
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ConstructionIcon from '@mui/icons-material/Construction'
import TerrainIcon from '@mui/icons-material/Terrain'
import DeleteIcon from '@mui/icons-material/Delete'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import LandscapeIcon from '@mui/icons-material/Landscape'
import BuildIcon from '@mui/icons-material/Build'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import CloseIcon from '@mui/icons-material/Close'

// Imports des images du carrousel Construction
import Construction_chaussee_mvouni from '../Images/carousell/Construction_chaussee_mvouni.png'
import Construction_parking_waddane from '../Images/carousell/Construction_parking_waddane.png'
import Construction_accotements_beton from '../Images/carousell/Construction_accotements_beton.png'
import Constructio_couche_el_maarouf from '../Images/carousell/Constructio_couche_el_maarouf.png'
import Construction_batiment_wadaane from '../Images/carousell/Construction_batiment_wadaane.png'
import Construction_hotels from '../Images/carousell/Construction_hotels.png'
import Construction_parkings_mvouni from '../Images/carousell/Construction_parkings_mvouni.png'
import Construction_socles from '../Images/carousell/Construction_socles.png'
import Construction_structure_panneaux from '../Images/carousell/Construction_structure_panneaux.png'
import Construction_ligne_aerienne from '../Images/carousell/Construction_ligne_aerienne.png'

// Imports des images du carrousel Terrassement
import Terrassement_centrale_mitsamiouli from '../Images/carousell/Terrassement_centrale_mitsamiouli.png'
import Terrassement_piste_ouzio from '../Images/carousell/Terrassement_piste_ouzio.png'
import Terrassement_centrale_chomoni from '../Images/carousell/Terrassement_centrale_chomoni.png'
import Terrassement_villageJeux_moindzaza from '../Images/carousell/Terrassement_villageJeux_moindzaza.png'
import Transport_pouzzolane from '../Images/carousell/Transport_pouzzolane.png'
import Terrassement_terrain_football from '../Images/carousell/Terrassement_terrain_football.png'
import Terrassement_terrain_galawa from '../Images/carousell/Terrassement_terrain_galawa.png'
import Terrassement_piste_mvouni from '../Images/carousell/Terrassement_piste_mvouni.png'
import Centrale_solaire_foumbouni from '../Images/carousell/Centrale_solaire_foumbouni.png'

// Imports des images à la racine de carrouell
import Demolition_ancienne_el_maarouf from '../Images/carousell/Demolition-ancienne_el_maarouf.png'
import Extraction_roches_carrieres from '../Images/carousell/Extraction_roches_carrieres.png'
import Piste_agricole_maweni from '../Images/carousell/Piste_agricole_maweni.png'
import Couche_assise_mvouni from '../Images/carousell/Couche_assise_mvouni.png'
import Creation_canaux_mvouni from '../Images/carousell/Creation_canaux_mvouni.png'
import Realisation_tranche_de_fondation from '../Images/carousell/Realisation_tranche_de_fondation.png'
import Excavation_tour_controle from '../Images/carousell/Excavation_tour_controle.png'
import Route_acces_centrale_foumbouni from '../Images/carousell/Route_acces_centrale_foumbouni.png'

// Tableau des images à utiliser pour les cartes achievements
const constructionImages = [
  Construction_chaussee_mvouni,
  Construction_parking_waddane,
  Construction_accotements_beton,
  Constructio_couche_el_maarouf,
  Construction_batiment_wadaane,
  Construction_hotels,
  Construction_parkings_mvouni,
  Construction_socles,
  Construction_structure_panneaux,
  Construction_ligne_aerienne,
  Terrassement_centrale_mitsamiouli,
  Terrassement_piste_ouzio,
  Terrassement_centrale_chomoni,
  Terrassement_villageJeux_moindzaza,
  Transport_pouzzolane,
  Terrassement_terrain_football,
  Terrassement_terrain_galawa,
  Terrassement_piste_mvouni,
  Centrale_solaire_foumbouni,
  Demolition_ancienne_el_maarouf,
  Extraction_roches_carrieres,
  Piste_agricole_maweni,
  Couche_assise_mvouni,
  Creation_canaux_mvouni,
  Realisation_tranche_de_fondation,
  Excavation_tour_controle,
  Route_acces_centrale_foumbouni
]

// Tableau des titres à afficher
const constructionTitles = [
  'Chaussée Mvouni',
  'Parking Waddane',
  'Accotements Béton',
  'Couche El Maarouf',
  'Bâtiment Wadaane',
  'Hôtels',
  'Parkings Mvouni',
  'Socles',
  'Structure Panneaux',
  'Ligne Aérienne',
  'Centrale Mitsamiouli',
  'Piste Ouzio',
  'Centrale Chomoni',
  'Village Jeux Moindzaza',
  'Transport Pouzzolane',
  'Terrain Football',
  'Terrain Galawa',
  'Piste Mvouni',
  'Centrale Solaire Foumbouni',
  'Démolition El Maarouf',
  'Extraction Roches',
  'Piste Agricole Maweni',
  'Couche Assise Mvouni',
  'Création Canaux',
  'Tranchée Fondation',
  'Excavation Tour Contrôle',
  'Route Accès Centrale'
]

// Remplacer achievements par un tableau généré dynamiquement
const achievements = constructionImages.map((img, idx) => ({
  title: constructionTitles[idx] || `Projet ${idx + 1}`,
  image: img
}))

const services = [
  { 
    title: 'Construction', 
    image: construction,
    icon: ConstructionIcon,
    description: 'Nous réalisons des projets de construction sur mesure, alliant expertise technique et design moderne. Que ce soit pour des bâtiments résidentiels, commerciaux ou industriels, nous vous accompagnons de la planification à la livraison, en assurant qualité, durabilité et respect des délais.' 
  },
  { 
    title: 'Terrassement', 
    image: terrassement,
    icon: TerrainIcon,
    description: 'Notre service de terrassement prépare parfaitement votre terrain pour tous types de projets. Nous nivelons, dégageons et stabilisons le sol afin de garantir une base solide et sécurisée pour vos constructions futures, tout en optimisant l\'efficacité et la sécurité du chantier.' 
  },
  { 
    title: 'Excavation', 
    image: excavation,
    icon: LandscapeIcon,
    description: 'Nous réalisons des travaux d\'excavation précis et efficaces, adaptés à tous vos besoins, qu\'il s\'agisse de fondations, de tranchées ou de creusements spécifiques. Notre équipe utilise des techniques modernes pour garantir rapidité, sécurité et qualité des opérations.' 
  },
  { 
    title: 'Démolition', 
    image: demolition,
    icon: DeleteIcon,
    description: 'Nos services de démolition assurent le démantèlement sécurisé de structures anciennes ou inutilisables. Grâce à notre expertise et à l\'utilisation d\'équipements spécialisés, nous menons chaque projet de démolition de manière responsable, en minimisant les risques et en facilitant la récupération des matériaux.' 
  },
  { 
    title: 'Transport', 
    image: transport,
    icon: LocalShippingIcon,
    description: 'Nous proposons un service de transport fiable pour tous vos matériaux de construction et équipements lourds. Notre flotte moderne et nos conducteurs expérimentés garantissent des livraisons ponctuelles et sécurisées, contribuant à la fluidité et à l\'efficacité de votre chantier.' 
  },
  { 
    title: 'Extraction', 
    image: extraction,
    icon: BuildIcon,
    description: 'Nous effectuons l\'extraction de matériaux avec précision et efficacité, qu\'il s\'agisse de sable, gravier ou autres ressources naturelles. Notre équipe assure un processus respectueux de l\'environnement et optimisé pour fournir des matériaux de qualité pour tous vos projets de construction.' 
  },
]

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [centerIndex, setCenterIndex] = useState(2)
  const [windowWidth, setWindowWidth] = useState(1200)
  const [isLoading, setIsLoading] = useState(false)
  const [validationError, setValidationError] = useState('')
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' })

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: false,        // allow animations to run more than once
      mirror: true,       // animate elements when scrolling past them in both directions
      offset: 100,
      easing: 'ease-out-cubic'
    })
  }, [])

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % achievements.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Écouter les changements de taille de fenêtre
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleChange = (e) => {
    if (validationError === e.target.name) {
      setValidationError('')
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Fonction pour afficher les notifications
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' })
    }, 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Vérification des champs obligatoires
    if (!formData.name.trim()) {
      setValidationError('name')
      return
    }
    if (!formData.email.trim()) {
      setValidationError('email')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setValidationError('email')
      showNotification('Veuillez entrer un email valide.', 'error')
      return
    }
    if (!formData.phone.trim()) {
      setValidationError('phone')
      return
    }
    if (!formData.message.trim()) {
      setValidationError('message')
      return
    }

    setValidationError('')
    const payload = { ...formData, phone: formData.phone.trim().replace(/\s+/g, ' ') }

    setIsLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        showNotification(data.message || 'Message envoyé avec succès !', 'success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        showNotification(data.message || 'Erreur lors de l\'envoi du message.', 'error')
      }
    } catch (error) {
      console.error('Erreur:', error)
      showNotification('Erreur réseau. Vérifiez votre connexion internet.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <Element
        name="home"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        
        {/* Particle Background */}
        <ParticleBackground particleCount={30} />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div 
            className="animate-fade-in-down"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
              Bienvenue chez{' '}
              <span className="text-gradient-primary bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                STC
              </span>
            </h1>
          </div>
          
          <div 
            className="animate-fade-in-up"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
              <span className="text-primary-400 font-bold text-3xl md:text-4xl">S</span>ociété de{' '}
              <span className="text-primary-400 font-bold text-3xl md:text-4xl">T</span>errassement
              et de <span className="text-primary-400 font-bold text-3xl md:text-4xl">C</span>onstruction
            </p>
          </div>
          
          <div 
            className="animate-fade-in-up"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction et
              de terrassement aux Comores
            </p>
          </div>
          
          <div 
            className="animate-scale-in"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <ScrollLink
              to="services"
              smooth={true}
              duration={100}
              offset={-80}
              className="cursor-pointer"
            >
              <ModernButton 
                variant="glass" 
                size="lg"
                icon={KeyboardDoubleArrowRightIcon}
                className="text-xl px-12 py-6 hover-glow"
              >
                Découvrir nos services
              </ModernButton>
            </ScrollLink>
          </div>
        </div>
      </Element>

      {/* Services Section */}
      <Element name="services" className="py-20 px-6 lg:px-20 text-center from-background to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div 
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient-primary">
              Nos Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
              Des solutions complètes pour tous vos projets de construction et d'aménagement
            </p>
          </div>

          <div className="space-y-0">
            {services.map((service, i) => (
              <ServiceItem
                key={service.title}
                service={service}
                index={i}
                isReversed={i % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </Element>

      {/* Achievements Section */}
      <Element name="achievements" className="py-20 px-6 lg:px-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient-primary">
              Nos Réalisations
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets les plus remarquables
            </p>
          </div>

          {/* Carousel */}
          <div className="relative" data-aos="zoom-in" data-aos-duration="1000">
            {windowWidth < 768 ? (
              // Mobile Layout
              <div className="flex flex-col items-center">
                <ModernCard variant="glass" className="mb-8 overflow-hidden">
                  <img
                    src={achievements[centerIndex].image}
                    alt={achievements[centerIndex].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-display font-bold text-white">
                      {achievements[centerIndex].title}
                    </h3>
                  </div>
                </ModernCard>
                
                <div className="flex gap-4">
                  <ModernButton
                    variant="glass"
                    size="sm"
                    icon={KeyboardArrowLeftIcon}
                    iconPosition="left"
                    onClick={() => setCenterIndex((centerIndex - 1 + achievements.length) % achievements.length)}
                  />
                  <ModernButton
                    variant="glass"
                    size="sm"
                    icon={KeyboardArrowRightIcon}
                    onClick={() => setCenterIndex((centerIndex + 1) % achievements.length)}
                  />
                </div>
              </div>
            ) : (
              // Desktop Layout
              <div className="flex items-center justify-center gap-8">
                <ModernButton
                  variant="glass"
                  size="lg"
                  icon={KeyboardArrowLeftIcon}
                  iconPosition="left"
                  onClick={() => setCenterIndex((centerIndex - 1 + achievements.length) % achievements.length)}
                />
                
                <ModernCard variant="modern" className="overflow-hidden max-w-2xl">
                  <img
                    src={achievements[centerIndex].image}
                    alt={achievements[centerIndex].title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-display font-bold text-neutral-800 mb-2">
                      {achievements[centerIndex].title}
                    </h3>
                    <p className="text-neutral-600">
                      Projet réalisé avec expertise et professionnalisme
                    </p>
                  </div>
                </ModernCard>
                
                <ModernButton
                  variant="glass"
                  size="lg"
                  icon={KeyboardArrowRightIcon}
                  onClick={() => setCenterIndex((centerIndex + 1) % achievements.length)}
                />
              </div>
            )}

            {/* Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {[-2, -1, 0, 1, 2].map((offset) => {
                const idx = (centerIndex + offset + achievements.length) % achievements.length
                return (
                  <button
                    key={idx}
                    onClick={() => setCenterIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      offset === 0 
                        ? 'bg-primary-500 scale-125' 
                        : 'bg-neutral-300 hover:bg-primary-300'
                    }`}
                  />
                )
              })}
            </div>
          </div>

          <div 
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <Link to="/about#travaux">
              <ModernButton variant="primary" size="lg">
                Voir tous nos projets
              </ModernButton>
            </Link>
          </div>
        </div>
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="py-20 px-6 bg-gradient-to-br from-neutral-100 to-background">
        <div className="max-w-4xl mx-auto">
          <ModernCard
            variant="modern"
            className="p-8 md:p-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient-primary">
                Contactez-nous
              </h2>
              <p className="text-xl text-neutral-600">
                Parlons de votre prochain projet
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block mb-2 text-neutral-700 font-medium">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Entrez votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  autoComplete="name"
                />
                {validationError === 'name' && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ErrorIcon fontSize="small" />
                    Le nom est obligatoire
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-neutral-700 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="exemple@domaine.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    autoComplete="email"
                  />
                  {validationError === 'email' && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <ErrorIcon fontSize="small" />
                      L'email est obligatoire
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-neutral-700 font-medium">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+269 123 456 789"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    autoComplete="tel"
                  />
                  {validationError === 'phone' && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <ErrorIcon fontSize="small" />
                      Le téléphone est obligatoire
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-neutral-700 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                />
                {validationError === 'message' && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ErrorIcon fontSize="small" />
                    Le message est obligatoire
                  </p>
                )}
              </div>

              <ModernButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isLoading}
                loading={isLoading}
              >
                {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
              </ModernButton>
            </form>
          </ModernCard>
        </div>
      </Element>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <ModernButton
          variant="glass"
          size="lg"
          icon={KeyboardArrowUpIcon}
          className="fixed bottom-8 right-8 z-50 rounded-full p-4"
          onClick={() => scroll.scrollToTop({ duration: 500 })}
        />
      )}

      {/* Modern Notification */}
      {notification.show && (
        <div className={`fixed top-6 right-6 z-50 max-w-sm transform transition-all duration-500 ${
          notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <ModernCard 
            variant="glass" 
            className={`p-4 ${
              notification.type === 'success' 
                ? 'border-l-4 border-green-500' 
                : 'border-l-4 border-red-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {notification.type === 'success' ? (
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                ) : (
                  <ErrorIcon className="w-6 h-6 text-red-500" />
                )}
                <p className="text-white font-medium">{notification.message}</p>
              </div>
              <button
                onClick={() => setNotification({ show: false, message: '', type: 'success' })}
                className="ml-4 text-white/70 hover:text-white transition-colors"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>
          </ModernCard>
        </div>
      )}
    </main>
  )
}

export default HomePage