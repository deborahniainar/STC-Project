import React, { useState, useRef, useCallback, useEffect } from "react";
import { Phone, Email, LocationOn } from '@mui/icons-material';
import Logo from '../Images/Logo_STC.svg';
import ModernCard from './ModernCard';

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
    "Domaine d'intervention",
    "Référence administrative",
    "Liste des personnels",
    "Liste des matériels",
    "Liste des travaux réalisés",
  ];

  const formatSectionToURL = (section) =>
    `/about?section=${encodeURIComponent(section)}`;

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white py-16 px-6 md:px-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <img
                  src={Logo}
                  alt="Logo STC"
                  className="w-16 h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-gradient-primary">STC</h3>
                <p className="text-sm text-neutral-400">Excellence & Innovation</p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Société de Terrassement et de Construction, votre partenaire de confiance 
              pour tous vos projets d'infrastructure aux Comores.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Email className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <a 
                href="tel:+2697332170" 
                className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+269 733 21 70</span>
              </a>
              
              <a 
                href="mailto:stc.moroni@gmail.com" 
                className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                  <Email className="w-4 h-4" />
                </div>
                <span>stc.moroni@gmail.com</span>
              </a>
              
              <div
                className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors duration-300 group cursor-pointer relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                  <LocationOn className="w-4 h-4" />
                </div>
                <span>Kavou Kaivo – Moroni</span>
                
                {showMap && (
                  <div className="absolute -top-48 left-0 z-50 animate-scale-in">
                    <ModernCard variant="glass" className="w-72 h-44 overflow-hidden">
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
                    </ModernCard>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">Navigation</h3>
            <div className="space-y-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Services', href: '/#services' },
                { label: 'Réalisations', href: '/#achievements' },
                { label: 'Contact', href: '/#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-neutral-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* À propos */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">À propos</h3>
            <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar">
              {aboutSections.map((section) => (
                <a
                  key={section}
                  href={formatSectionToURL(section)}
                  className="block text-neutral-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-2 text-sm"
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} STC - Société de Terrassement et de Construction. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <span>Fait avec ❤️ aux Comores</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>En ligne</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #ed8338, #f9c164);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #dc6b1f, #f7a532);
        }
      `}</style>
    </footer>
  );
};

export default Footer;