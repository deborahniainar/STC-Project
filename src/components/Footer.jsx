import React, { useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Phone, Email, LocationOn } from '@mui/icons-material';
import Logo from '../Images/Logo_STC.svg';

const Footer = () => {
  const [showMap, setShowMap] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowMap(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMap(false);
    }, 100);
  };

  return (
    <footer className="bg-footer text-white py-8 px-6 md:px-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start relative">

        {/* Logo et description */}
        <div className="flex flex-col items-start space-y-4 self-start">
          <img src={Logo} alt="STC Logo" className="w-32 mb-4 hover:scale-150 transition-all duration-300" />
          <p className="text-gray-400 max-w-sm">
            Société de Terrassement et de Construction <br />
            À votre service pour vos projets professionnels et personnels.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-4 self-start relative">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Phone fontSize="small" /> +269 733 21 70
            </li>
            <li className="flex items-center gap-2">
              <Email fontSize="small" /> stc.moroni@gmail.com
            </li>
            <li
              className="flex items-center gap-2 relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <LocationOn fontSize="small" /> Kavou Kaivo – Moroni Comores

              {/* POPUP MAP */}
              {showMap && (
                <div
                  className="absolute -top-44 left-0 z-50 w-64 h-40 bg-white rounded-lg shadow-2xl border border-gray-300 animate-popup"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
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
                      allowFullScreen=""
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
            <li><ScrollLink to="home" smooth className="cursor-pointer hover:text-white">Accueil</ScrollLink></li>
            <li><ScrollLink to="services" smooth className="cursor-pointer hover:text-white">Services</ScrollLink></li>
            <li><ScrollLink to="achievements" smooth className="cursor-pointer hover:text-white">Réalisations</ScrollLink></li>
            <li><ScrollLink to="contact" smooth className="cursor-pointer hover:text-white">Contact</ScrollLink></li>
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
