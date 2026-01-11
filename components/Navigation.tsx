import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNav = (path: string, filter?: {category?: string, type?: string}) => {
    setIsOpen(false);
    
    // Construct URL with query params if filters exist
    if (filter) {
        const params = new URLSearchParams();
        if (filter.category) params.set('category', filter.category);
        if (filter.type) params.set('type', filter.type);
        navigate(`${path}?${params.toString()}`);
    } else {
        navigate(path);
    }
  };

  return (
    <>
      <header className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1200px] h-[70px] bg-dark-bg/80 backdrop-blur-xl border border-white/10 rounded-full z-50 flex items-center justify-between px-8 md:px-10 transition-all duration-300 shadow-2xl">
        <Link to="/" className="flex items-center gap-4 group cursor-pointer" onClick={() => setIsOpen(false)}>
          <div className="flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {/* Main Brand Text */}
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-med via-gold-light to-gold-dark tracking-widest leading-none drop-shadow-sm">
              BLVCK
            </h1>
            {/* Sub Brand Text */}
            <span className="font-serif text-[0.6rem] md:text-[0.7rem] text-gold-med tracking-[0.4em] uppercase leading-tight mt-0.5 ml-1">
              Luxury
            </span>
          </div>
        </Link>

        <nav>
          <div className="flex flex-col gap-[5px] cursor-pointer z-50 group" onClick={toggleMenu}>
            <div className={`w-6 h-[2px] bg-gold-light transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : 'group-hover:bg-white'}`} />
            <div className={`w-6 h-[2px] bg-gold-med transition-all duration-300 ${isOpen ? 'opacity-0' : 'group-hover:bg-white'}`} />
            <div className={`w-6 h-[2px] bg-gold-dark transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : 'group-hover:bg-white'}`} />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
            className="fixed top-0 left-0 w-full h-screen bg-dark-bg/95 backdrop-blur-2xl z-40 flex flex-col justify-center px-10 md:px-20 overflow-y-auto"
          >
            <div className="absolute top-10 right-10">
               <button 
                onClick={toggleMenu}
                className="flex items-center gap-2 border border-neon-cyan text-neon-cyan px-6 py-2 rounded-full uppercase font-bold hover:bg-neon-cyan hover:text-black transition-all"
               >
                 <X size={20} /> Cerrar
               </button>
            </div>

            <ul className="flex flex-col gap-8">
              <li>
                <button 
                    onClick={() => handleNav('/')} 
                    className="text-4xl md:text-5xl font-heading font-black text-white hover:text-neon-cyan hover:translate-x-4 transition-all duration-300"
                >
                    Inicio
                </button>
              </li>
              
              <li className="flex flex-col gap-4">
                <button 
                    onClick={() => handleNav('/inventory', { type: 'venta' })}
                    className="text-4xl md:text-5xl font-heading font-black text-white hover:text-neon-cyan hover:translate-x-4 transition-all duration-300 text-left"
                >
                    Venta
                </button>
                <div className="pl-8 flex flex-col gap-2">
                    <button onClick={() => handleNav('/inventory', { category: 'residencial', type: 'venta' })} className="text-xl md:text-2xl font-heading text-gray-400 hover:text-white uppercase tracking-wider text-left">Residencial</button>
                    <button onClick={() => handleNav('/inventory', { category: 'comercial', type: 'venta' })} className="text-xl md:text-2xl font-heading text-gray-400 hover:text-white uppercase tracking-wider text-left">Comercial</button>
                </div>
              </li>

              <li className="flex flex-col gap-4">
                <button 
                    onClick={() => handleNav('/inventory', { type: 'renta' })}
                    className="text-4xl md:text-5xl font-heading font-black text-white hover:text-neon-cyan hover:translate-x-4 transition-all duration-300 text-left"
                >
                    Renta
                </button>
                <div className="pl-8 flex flex-col gap-2">
                    <button onClick={() => handleNav('/inventory', { category: 'residencial', type: 'renta' })} className="text-xl md:text-2xl font-heading text-gray-400 hover:text-white uppercase tracking-wider text-left">Residencial</button>
                    <button onClick={() => handleNav('/inventory', { category: 'comercial', type: 'renta' })} className="text-xl md:text-2xl font-heading text-gray-400 hover:text-white uppercase tracking-wider text-left">Comercial</button>
                </div>
              </li>

              <li>
                 <a href="#contacto" onClick={toggleMenu} className="text-4xl md:text-5xl font-heading font-black text-white hover:text-neon-cyan hover:translate-x-4 transition-all duration-300">
                    Contacto
                 </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;