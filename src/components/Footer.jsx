import React, { useState, useRef, useCallback, useEffect } from "react";
import { Phone, Email, LocationOn } from '@mui/icons-material';
import Logo from '../Images/Logo_STC.svg';

const Footer = () => {
  const [showMap, setShowMap] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowMap(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setShowMap(false);
    }, 150);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const aboutSections = [
    "Note de présentation",
    "Domaine d’intervention",
    "Référence administrative",
    "Liste des personnels",
    "Liste des matériels",
    "Liste des travaux réalisés",
  ];

  const formatSectionToURL = (section) =>
    `/about?section=${encodeURIComponent(section)}`;

  return (
    <footer className="bg-footer text-white py-8 px-6 md:px-40 select-none font-roboto font-bold">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start relative">
        {/* Logo */}
        <div className="flex flex-col items-start space-y-4 self-start">
          <img
            src={Logo}
            alt="Logo STC"
            className="w-32 mb-4 hover:scale-150 transition-transform duration-300 ease-in-out"
          />
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Société de Terrassement et de Construction <br />
            À votre service pour vos projets professionnels et personnels.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-4 self-start">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Phone fontSize="small" />
              <a href="tel:+2697332170" className="hover:text-white">
                +269 733 21 70
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Email fontSize="small" />
              <a href="mailto:stc.moroni@gmail.com" className="hover:text-white">
                stc.moroni@gmail.com
              </a>
            </li>
            <li
              className="flex items-center gap-2 relative group cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <LocationOn fontSize="small" />
              <span>Kavou Kaivo – Moroni Comores</span>
              {showMap && (
                <div className="absolute -top-44 left-0 z-50 w-64 h-40 bg-white rounded-lg shadow-2xl border border-gray-300 animate-popup">
                  <a
                    href="https://maps.google.com/maps?q=Kavou%20Kaivo,%20Moroni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full block"
                  >
                    <iframe
                      title="Mini Google Map"
                      src="https://maps.google.com/maps?q=Kavou%20Kaivo,%20Moroni&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: '1rem' }}
                      loading="lazy"
                    ></iframe>
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-4 self-start">
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Accueil</a></li>
            <li><a href="/#services" className="hover:text-white">Services</a></li>
            <li><a href="/#achievements" className="hover:text-white">Réalisations</a></li>
            <li><a href="/#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* À propos */}
        <div className="flex flex-col space-y-4 self-start">
          <h3 className="text-xl font-semibold mb-4">À propos</h3>
          <ul className="space-y-2 text-gray-300">
            {aboutSections.map((section) => (
              <li key={section}>
                <a
                  href={formatSectionToURL(section)}
                  className="hover:text-white"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <p className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} STC. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
