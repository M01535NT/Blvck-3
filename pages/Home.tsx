import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, SlidersHorizontal, Box, ArrowRight } from 'lucide-react';
import VortexCanvas from '../components/VortexCanvas';
import { PROPERTIES_DATA, formatMoney } from '../constants';

const Home: React.FC = () => {
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const words = ["Únicas", "Inmersivas", "Disruptivas", "Exclusivas"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTextIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Create an infinite loop for the marquee
  const marqueeProps = [...PROPERTIES_DATA, ...PROPERTIES_DATA];

  return (
    <div className="w-full min-h-screen bg-dark-bg text-white">
      
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <VortexCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)] z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-8 text-center px-4">
            {/* Rotator */}
            <div className="font-heading text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none flex flex-col items-center">
                <span className="text-white">Experiencias</span>
                <div className="h-[1.1em] overflow-hidden relative w-full flex justify-center">
                    <AnimateText word={words[activeTextIndex]} />
                </div>
            </div>

            {/* Smart Search */}
            <div className="w-full max-w-[600px] mt-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 pl-6 flex items-center gap-4 shadow-2xl focus-within:bg-white/10 focus-within:border-gold-med transition-all duration-300">
                    <Search className="text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Busca por zona, estilo o amenidad..." 
                        className="bg-transparent border-none text-white text-base flex-1 outline-none placeholder:text-white/40 font-body"
                    />
                    <button className="bg-dark-bg w-11 h-11 rounded-full text-white flex items-center justify-center hover:bg-gold-med hover:text-black hover:scale-110 transition-all">
                        <SlidersHorizontal size={18} />
                    </button>
                </div>
            </div>

            {/* CTA */}
            <Link to="/inventory" className="group relative mt-8 px-10 py-4 border border-white/30 rounded-full font-body font-semibold uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:border-gold-med hover:shadow-[0_0_30px_rgba(191,149,63,0.4)]">
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">Explorar Colección</span>
                <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-gold-med rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-0 group-hover:w-[400px] group-hover:h-[400px]" />
            </Link>
        </div>
      </section>

      {/* PARALLAX GRID */}
      <section className="py-24 bg-dark-bg overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
            >
                Colección Limitada
            </motion.h2>
        </div>
        
        <div className="w-full overflow-hidden">
            <motion.div 
                className="flex gap-10 w-max pl-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                whileHover={{ animationPlayState: "paused" }}
            >
                {marqueeProps.map((prop, idx) => (
                    <Link to={`/property/${prop.id}`} key={`${prop.id}-${idx}`} className="group relative w-[350px] h-[500px] rounded-3xl overflow-hidden cursor-pointer">
                        <motion.div 
                            className="absolute -inset-5 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                            style={{ backgroundImage: `url('${prop.imagenes[0]}')`, y: yParallax }}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-white mb-2">{prop.titulo}</h3>
                            <p className="text-gold-med font-body font-semibold text-lg">{formatMoney(prop.precio)}</p>
                            
                            <div className="flex gap-4 mt-4 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                <span>{prop.specs.recamaras} Beds</span>
                                <span>{prop.specs.banos} Baths</span>
                                <span>{prop.specs.construccion} m²</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </motion.div>
        </div>
      </section>

      {/* MATTERPORT SECTION */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <motion.h3 
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     className="text-5xl md:text-7xl font-heading font-black"
                >
                    Digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-med via-gold-light to-gold-dark">Twins</span>
                </motion.h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                    Recorre tu futura propiedad sin salir de casa. Tecnología inmersiva de alta fidelidad que te permite sentir el espacio antes de visitarlo.
                </p>
                <button className="flex items-center gap-3 px-8 py-3 border border-gold-med text-gold-med uppercase font-bold hover:bg-gold-med hover:text-black transition-all shadow-[0_0_20px_rgba(191,149,63,0.1)] hover:shadow-[0_0_30px_rgba(191,149,63,0.4)]">
                    Ver Recorrido <Box size={20} />
                </button>
            </div>

            <div className="relative h-[400px] bg-[#111] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Box size={60} className="text-white drop-shadow-xl group-hover:text-gold-med group-hover:scale-125 transition-all duration-300" />
                </div>
            </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-[900px] mx-auto px-6 relative">
            <h2 className="text-center text-4xl font-heading font-bold mb-20 text-white">Proceso Élite</h2>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 relative">
                {/* Horizontal Line (Desktop) */}
                <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-white/10 z-0" />
                
                {['Valuación', 'Marketing', 'Cierre'].map((step, i) => (
                    <motion.div 
                        key={step}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="relative z-10 bg-dark-bg px-4 flex flex-col items-center text-center"
                    >
                        <span className="text-6xl font-heading font-black text-white/10 block mb-2">0{i + 1}</span>
                        <h4 className="text-xl text-gold-med font-bold uppercase tracking-wider">{step}</h4>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-4xl font-heading font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Voces Selectas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { quote: "La atención al detalle y la experiencia digital superaron todas mis expectativas.", author: "Carlos M.", role: "Inversionista" },
                    { quote: "No es solo comprar una casa, es entrar en un nuevo estilo de vida.", author: "Ana S.", role: "Arquitecta" },
                    { quote: "Tecnología y lujo fusionados perfectamente. El proceso fue impecable.", author: "Roberto G.", role: "CEO Tech" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white/5 border border-white/5 p-10 rounded-xl hover:-translate-y-2 transition-transform duration-300 hover:bg-white/10"
                    >
                        <div className="text-6xl text-gold-med opacity-30 font-serif leading-[0.5] mb-6">“</div>
                        <p className="text-gray-300 italic mb-8 leading-relaxed">{item.quote}</p>
                        <div className="border-t border-white/10 pt-6">
                            <span className="block font-bold text-white">{item.author}</span>
                            <span className="text-sm text-gray-500">{item.role}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

// Helper for the text rotator animation
const AnimateText: React.FC<{ word: string }> = ({ word }) => (
    <motion.span
        key={word}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="block bg-gradient-to-b from-gold-med via-gold-light to-gold-dark bg-clip-text text-transparent absolute w-max"
    >
        {word}
    </motion.span>
);

export default Home;