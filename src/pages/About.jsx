import React, { useState } from 'react'
import materiels from '../data/materiels.json';
import personnels from '../data/personnels.json';
import travaux from '../data/travaux.json';
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
  "Domaine d’intervention",
  "Référence administrative",
  "Liste des personnels",
  "Liste des matériels",
  "Liste des travaux réalisés",
]

const ImageModal = ({ src, alt, onClose }) => {
  const images = Array.isArray(src) ? src : [src]

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="bg-white p-6 rounded shadow-lg max-w-5xl max-h-[90vh] overflow-auto">
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${alt} ${idx + 1}`}
              className="max-h-[70vh] w-auto rounded shadow"
            />
          ))}
        </div>
        <p className="text-center mt-4 text-gray-700">{alt}</p>
      </div>
    </div>
  );
};

const About = () => {
  const [active, setActive] = useState(sections[0])

  return (
    <div className="flex flex-col md:flex-row min-h-screen px-6 md:px-60 py-16 bg-gray-50 gap-8">
      {/* Sidebar */}
      <aside className="md:w-64 bg-white border rounded-md p-4 shadow-md space-y-2">
        {sections.map((title) => (
          <button
            key={title}
            onClick={() => setActive(title)}
            className={`text-left w-full py-2 px-3 rounded transition ${
              active === title ? 'bg-primary text-white font-semibold' : 'hover:bg-gray-100 text-gray-800'
            }`}
          >
            {title}
          </button>
        ))}
      </aside>

      {/* Content */}
      <main className="flex-1 bg-white p-6 rounded shadow-md">
        {sections.map((title) => (
          <Section key={title} title={title} active={active}>
            {renderSectionContent(title)}
          </Section>
        ))}
      </main>
    </div>
  )
}

const Section = ({ title, active, children }) => {
  if (title !== active) return null
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-primary text-center items-center justify-center">{title}</h2>
      <div className="text-gray-700 space-y-4 items-center justify-center">{children}</div>
    </div>
  )
}

const renderSectionContent = (title) => {
  switch (title) {
    case "Note de présentation":
      return (
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p>La Société STC est née en 2016 et créée administrativement en 2016. Elle est le fruit de la patience, de l’expérience et de la passion pour le travail bien fait.</p>
          <p>Nous sommes une Entreprise jouissant d’une expérience certaine dans l’étude technique et la réalisation de tout projet ayant trait au génie civil.</p>
          <p>De par notre parcours professionnel, nous avons une connaissance approfondie du terrain, des réalités locales, du contexte socio-économique et climatique de toutes les zones de Comores. Nous pouvons intervenir partout dans toutes les îles.</p>
          <p>« L’expérience du personnel fait l’expérience de l’entreprise ». Étant une jeune structure, nous faisons nôtre cette affirmation afin d’offrir des résultats de qualité à nos Clients, et nous avons la volonté ferme de réussir dans ce domaine.</p>
        </div>
      )

    case "Domaine d’intervention":
      return (
        <div className='flex flex-col items-center justify-center text-center space-y-4'>
          <p>Nous intervenons dans les domaines de:</p>
          <ul className="list-disc list-inside space-y-4">
            <li>Réalisation: 
              <p>Tous travaux de nouvelle construction, rénovation, réaménagement et réhabilitation de
Bâtiments, Ouvrages de Génie civil et Rural, Adduction d’Eau Potable, Ponts, Pistes,
Routes ; ouvrages métalliques</p>
            </li>
            <li>Assistance technique aux Partenaires: 
              <p>Prestation intellectuelle ponctuelle (le temps d’un chantier) de staff technique ; étude
technique ; direction de suivi, contrôle et surveillance ; topographie ; direction et conduite de
travaux de réalisation ; Etude de prix ;</p>
            </li>
          </ul>
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

        const [modalImage, setModalImage] = useState(null);

        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {docs.map((doc, index) => (
                <div
                  key={index}
                  onClick={() => setModalImage(doc)}
                  className="cursor-pointer w-44 h-60 bg-white rounded shadow-md overflow-hidden flex flex-col items-center justify-center hover:scale-105 transition"
                >
                  <img
                    src={doc.src}
                    alt={doc.label}
                    className="h-44 w-full object-cover"
                  />
                  <div className="text-center px-2 py-1 text-sm font-medium text-gray-700">
                    {doc.label}
                  </div>
                </div>
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
        <div className="overflow-x-auto">
          <p className="mb-4 text-gray-700 text-center">
            Le personnel sera étoffé en fonction des besoins du chantier.
          </p>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="border px-4 py-2">Nom</th>
                <th className="border px-4 py-2">Formation</th>
                <th className="border px-4 py-2">Expérience</th>
                <th className="border px-4 py-2">Fonction</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {personnels.map((personnel, idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2">{personnel.nom}</td>
                  <td className="border px-4 py-2">{personnel.formation}</td>
                  <td className="border px-4 py-2">{personnel.experience}</td>
                  <td className="border px-4 py-2">{personnel.fonction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "Liste des matériels":
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="border px-2 py-2">Désignation</th>
                <th className="border px-2 py-2">Marque</th>
                <th className="border px-2 py-2">Modèle</th>
                <th className="border px-2 py-2">Année</th>
                <th className="border px-2 py-2">Nombre</th>
                <th className="border px-2 py-2">État</th>
                <th className="border px-2 py-2">Propriété</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {materiels.map((mat, idx) => (
                <tr key={idx}>
                  <td className="border px-2 py-2">{mat.designation}</td>
                  <td className="border px-2 py-2">{mat.marque}</td>
                  <td className="border px-2 py-2">{mat.modele}</td>
                  <td className="border px-2 py-2">{mat.annee}</td>
                  <td className="border px-2 py-2">{mat.nb}</td>
                  <td className="border px-2 py-2">{mat.etat}</td>
                  <td className="border px-2 py-2">{mat.propriete}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
          

      case "Liste des travaux réalisés":
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="border px-2 py-2">Date</th>
                  <th className="border px-2 py-2">Désignation</th>
                  <th className="border px-2 py-2">Montant HT</th>
                  <th className="border px-2 py-2">Maître d’Ouvrage</th>
                  <th className="border px-2 py-2">Objet / Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {travaux.map((travail, idx) => (
                  <tr key={idx}>
                    <td className="border px-2 py-2">{travail.date}</td>
                    <td className="border px-2 py-2">{travail.designation}</td>
                    <td className="border px-2 py-2">{travail.montantHT}</td>
                    <td className="border px-2 py-2">{travail.maitreOuvrage}</td>
                    <td className="border px-2 py-2">{travail.objet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      

    default:
      return <p>Contenu non disponible.</p>
  }
}

export default About
