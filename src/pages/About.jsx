import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import materiels from '../data/materiels.json';
import personnels from '../data/personnels.json';
import travaux from '../data/travaux.json';
import ModernCard from '../components/ModernCard';
import ModernButton from '../components/ModernButton';
import CarteContribuable from '../Images/Carte_contribuable.png'
import Patente from '../Images/patente.png'
import RecepisseNIF from '../Images/recepisse_NIF.png'
import QuitusFiscal from '../Images/quitus_fiscal.png'
import NonFaillite from '../Images/attestation_non_faillite.png'
import NonContentieux from '../Images/attestation_non_contentieux.png'
import Kbis from '../Images/extrait_kbis.png'
import Kbis2 from '../Images/extrait_kbis2.png'
import RecepisseDeclaration from '../Images/recepissé_declaration.png'

const sections = [
  "Note de présentation",
  "Domaine d'intervention",
  "Référence administrative",
  "Liste des personnels",
  "Liste des matériels",
  "Liste des travaux réalisés",
]

const ImageModal = ({ src, alt, onClose }) => {
  const images = Array.isArray(src) ? src : [src]

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <ModernCard 
        variant="glass" 
        className="p-6 max-w-[95%] max-h-[95vh] overflow-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${alt} ${idx + 1}`}
              className="max-h-[70vh] w-auto rounded-xl shadow-xl"
            />
          ))}
        </div>
        <p className="text-center mt-6 text-white font-medium text-lg">{alt}</p>
        <div className="flex justify-center mt-4">
          <ModernButton 
            variant="glass" 
            onClick={onClose}
            className="text-white"
          >
            Fermer
          </ModernButton>
        </div>
      </ModernCard>
    </div>
  );
};

const About = () => {
  const location = useLocation();
  const [active, setActive] = useState(sections[0])
  const [modalImage, setModalImage] = useState(null);

  // Détecter le hash et activer la section correspondante
  useEffect(() => {
    if (location.hash === '#travaux') {
      setActive('Liste des travaux réalisés');
    }
  }, [location.hash]);

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-neutral-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-80" data-aos="fade-right">
            <ModernCard variant="modern" className="p-6 sticky top-24">
              <h2 className="text-2xl font-display font-bold text-gradient-primary mb-6">
                Sections
              </h2>
              <div className="space-y-3">
                {sections.map((title, index) => (
                  <ModernButton
                    key={title}
                    variant={active === title ? "primary" : "ghost"}
                    className={`w-full justify-start text-left transition-all duration-300 ${
                      active === title 
                        ? 'shadow-glow transform scale-105' 
                        : 'hover:translate-x-2'
                    }`}
                    onClick={() => setActive(title)}
                  >
                    <span className="mr-3 text-sm opacity-70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {title}
                  </ModernButton>
                ))}
              </div>
            </ModernCard>
          </aside>

          {/* Content */}
          <main className="flex-1" data-aos="fade-left">
            <ModernCard variant="modern" className="p-8 lg:p-12 overflow-x-auto">
              {sections.map((title) => (
                <Section key={title} title={title} active={active}>
                  {renderSectionContent(title, modalImage, setModalImage)}
                </Section>
              ))}
            </ModernCard>
          </main>
        </div>
      </div>
    </div>
  )
}

const Section = ({ title, active, children }) => {
  if (title !== active) return null
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-4">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
      </div>
      <div className="text-neutral-700 space-y-6">{children}</div>
    </div>
  )
}

const renderSectionContent = (title, modalImage, setModalImage) => {
  switch (title) {
    case "Note de présentation":
      return (
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ModernCard variant="gradient" className="p-6">
              <h3 className="text-xl font-display font-bold text-primary-600 mb-4">Fondation</h3>
              <p className="text-neutral-600 leading-relaxed">
                La Société STC est née en 2016 et créée administrativement en 2016. Elle est le fruit de la patience, de l'expérience et de la passion pour le travail bien fait.
              </p>
            </ModernCard>
            <ModernCard variant="gradient" className="p-6">
              <h3 className="text-xl font-display font-bold text-primary-600 mb-4">Expertise</h3>
              <p className="text-neutral-600 leading-relaxed">
                Nous sommes une Entreprise jouissant d'une expérience certaine dans l'étude technique et la réalisation de tout projet ayant trait au génie civil.
              </p>
            </ModernCard>
          </div>
          <ModernCard variant="neumorphism" className="p-8">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              De par notre parcours professionnel, nous avons une connaissance approfondie du terrain, des réalités locales, du contexte socio-économique et climatique de toutes les zones de Comores. Nous pouvons intervenir partout dans toutes les îles.
            </p>
            <blockquote className="text-xl font-display italic text-gradient-primary border-l-4 border-primary-500 pl-6">
              « L'expérience du personnel fait l'expérience de l'entreprise »
            </blockquote>
            <p className="text-neutral-600 mt-4">
              Étant une jeune structure, nous faisons nôtre cette affirmation afin d'offrir des résultats de qualité à nos Clients, et nous avons la volonté ferme de réussir dans ce domaine.
            </p>
          </ModernCard>
        </div>
      )

    case "Domaine d'intervention":
      return (
        <div className='flex flex-col items-center text-center space-y-6'>
          <ModernCard variant="gradient" className="p-6 w-full max-w-4xl">
            <p className="text-lg text-neutral-700 mb-6">Nous intervenons dans les domaines de:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <ModernCard variant="modern" className="p-6">
                <h3 className="text-xl font-display font-bold text-primary-600 mb-4">Réalisation</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Tous travaux de nouvelle construction, rénovation, réaménagement et réhabilitation de Bâtiments, Ouvrages de Génie civil et Rural, Adduction d'Eau Potable, Ponts, Pistes, Routes ; ouvrages métalliques
                </p>
              </ModernCard>
              <ModernCard variant="modern" className="p-6">
                <h3 className="text-xl font-display font-bold text-primary-600 mb-4">Assistance technique</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Prestation intellectuelle ponctuelle (le temps d'un chantier) de staff technique ; étude technique ; direction de suivi, contrôle et surveillance ; topographie ; direction et conduite de travaux de réalisation ; Etude de prix
                </p>
              </ModernCard>
            </div>
          </ModernCard>
        </div>
      )

    case "Référence administrative":
      const docs = [
        { label: "Carte de Contribuable", src: CarteContribuable },
        { label: "Patente", src: Patente },
        { label: "Récépissé de dépôt de déclaration", src: RecepisseDeclaration },
        { label: "Récépissé du NIF", src: RecepisseNIF },
        { label: "Quitus fiscal", src: QuitusFiscal },
        { label: "Attestation de non faillite", src: NonFaillite },
        { label: "Attestation de non contentieux", src: NonContentieux },
        { label: "Extrait K-Bis", src: [Kbis, Kbis2] }
      ];

      return (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map((doc, index) => (
              <ModernCard
                key={index}
                variant="modern"
                className="cursor-pointer overflow-hidden group"
                onClick={() => setModalImage(doc)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={Array.isArray(doc.src) ? doc.src[0] : doc.src}
                    alt={doc.label}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-neutral-800 group-hover:text-primary-600 transition-colors duration-300">
                    {doc.label}
                  </h3>
                </div>
              </ModernCard>
            ))}
          </div>

          {modalImage && (
            <ImageModal
              src={modalImage.src}
              alt={modalImage.label}
              onClose={() => setModalImage(null)}
            />
          )}
        </>
      );

    case "Liste des personnels":
      return (
        <div className="space-y-6">
          <ModernCard variant="gradient" className="p-6 text-center">
            <p className="text-lg text-neutral-700">
              Nos personnels.
            </p>
          </ModernCard>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
            {personnels.map((p, idx) => {
              const initials = p.nom.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()
              return (
                <div key={idx} className="group relative text-center">
                  <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:z-20">
                    {/* Avatar circle with initials */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-400 flex items-center justify-center text-white font-bold text-xl md:text-3xl shadow-lg">
                      {initials}
                    </div>

                    {/* Hover overlay with enlarged content */}
                    <div className="absolute inset-0 rounded-full bg-black/100 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
                      <div className="text-white text-sm md:text-base leading-relaxed text-center">
                        <div className="font-semibold text-base md:text-lg">{p.fonction}</div>
                        <div className="mt-2 text-sm md:text-sm">{p.formation}</div>
                        <div className="mt-1 text-sm md:text-sm">{p.experience} d'exp</div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 font-medium text-neutral-800 text-sm md:text-base max-w-[10rem]">{p.nom}</p>
                </div>
              )
            })}
          </div>
        </div>
      );

    case "Liste des matériels":
      return (
        <div className="space-y-6">
          <ModernCard variant="gradient" className="p-6 text-center">
            <p className="text-lg text-neutral-700">Nos matériels.</p>
          </ModernCard>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
            {materiels.map((m, idx) => {
              const initials = (m.designation || '').split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase()
              return (
                <div key={idx} className="group relative text-center w-full max-w-[14rem]">
                  <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:z-20">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary-500 to-primary-400 flex items-center justify-center text-white font-bold text-xl md:text-3xl shadow-lg text-center px-2">
                      {initials}
                    </div>

                    <div className="absolute inset-0 rounded-full bg-black/100 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
                      <div className="text-white text-sm md:text-base leading-relaxed text-left">
                        <div className="mt-2 text-sm">{m.marque}</div>
                        <div className="mt-1 text-sm">{m.modele || '-'}</div>
                        <div className="mt-1 text-sm">{m.annee}</div>
                        <div className="mt-1 text-sm">{m.nb} • {m.etat}</div>
                        <div className="mt-1 text-sm">{m.propriete}</div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 font-medium text-neutral-800 text-sm md:text-base">{m.designation}</p>
                </div>
              )
            })}
          </div>
        </div>
      );

    case "Liste des travaux réalisés":
      return (
        <div className="overflow-x-auto">
          <ModernCard variant="modern" className="p-0 overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Désignation</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Montant HT</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Maître d'Ouvrage</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Objet / Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {travaux.map((travail, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50 transition-colors duration-200">
                    <td className="px-4 py-3 text-sm text-neutral-800">{travail.date}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{travail.designation}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{travail.montantHT}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{travail.maitreOuvrage}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{travail.objet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ModernCard>
        </div>
      );

    default:
      return <p>Contenu non disponible.</p>
  }
}

export default About