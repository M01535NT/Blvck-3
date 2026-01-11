import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-10">
        
        {/* Brand */}
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-serif text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-med via-gold-light to-gold-dark tracking-widest leading-none">
              BLVCK
            </h1>
            <span className="font-serif text-[0.7rem] text-gold-med tracking-[0.4em] uppercase leading-tight mt-1 ml-1">
              Luxury
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mt-2">
            Redefiniendo el lujo inmobiliario con tecnología, exclusividad y visión de futuro.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white text-sm uppercase tracking-[2px]">Explorar</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-neon-cyan transition-colors">Inicio</Link></li>
            <li><Link to="/inventory" className="hover:text-neon-cyan transition-colors">Colección</Link></li>
            <li><a href="#contacto" className="hover:text-neon-cyan transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white text-sm uppercase tracking-[2px]">Conectar</h4>
          <div className="flex gap-5">
             <a href="#" className="text-white hover:text-neon-cyan transform hover:-translate-y-1 transition-all"><Instagram size={24}/></a>
             <a href="#" className="text-white hover:text-neon-cyan transform hover:-translate-y-1 transition-all"><Linkedin size={24}/></a>
             <a href="#" className="text-white hover:text-neon-cyan transform hover:-translate-y-1 transition-all"><MessageCircle size={24}/></a>
          </div>
        </div>

      </div>

      <div className="mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-[#222] text-xs">&copy; 2026 Blvck Luxury. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;