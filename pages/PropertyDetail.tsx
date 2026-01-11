import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES_DATA, formatMoney } from '../constants';
import { ArrowLeft, MapPin, CheckCircle, Bed, Bath, Ruler, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTIES_DATA.find(p => p.id === Number(id));

  if (!property) return <div className="text-white pt-40 text-center">Propiedad no encontrada</div>;

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-28 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
            <Link to="/inventory" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-med transition-colors mb-8 group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Volver al inventario
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-black uppercase leading-none mb-4"
                    >
                        {property.titulo}
                    </motion.h1>
                    
                    <div className="flex items-center gap-2 text-gold-med mb-8">
                        <MapPin size={20} />
                        <span className="text-lg">{property.ubicacion}</span>
                    </div>

                    <div className="rounded-3xl overflow-hidden mb-10 border border-white/10 shadow-2xl">
                        <img src={property.imagenes[0]} alt={property.titulo} className="w-full h-auto object-cover" />
                    </div>

                    <div className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Descripción</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">{property.descripcion}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6">Amenidades</h2>
                        <div className="flex flex-wrap gap-3">
                            {property.amenidades.map(am => (
                                <span key={am} className="px-4 py-2 rounded-full border border-gold-med/30 text-gold-med text-sm uppercase tracking-wide flex items-center gap-2">
                                    <CheckCircle size={14} /> {am}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                        <div className="text-4xl font-heading font-bold text-white mb-8 border-b border-white/10 pb-6">
                            {formatMoney(property.precio)}
                            <span className="block text-sm text-gray-400 font-body font-normal mt-2">Precio de {property.tipo}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                            <div className="flex flex-col">
                                <span className="flex items-center gap-2 text-gray-400 text-sm mb-1"><Bed size={16}/> Recámaras</span>
                                <span className="text-xl font-bold">{property.specs.recamaras}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="flex items-center gap-2 text-gray-400 text-sm mb-1"><Bath size={16}/> Baños</span>
                                <span className="text-xl font-bold">{property.specs.banos}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="flex items-center gap-2 text-gray-400 text-sm mb-1"><Ruler size={16}/> Construcción</span>
                                <span className="text-xl font-bold">{property.specs.construccion} m²</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="flex items-center gap-2 text-gray-400 text-sm mb-1"><Car size={16}/> Autos</span>
                                <span className="text-xl font-bold">{property.specs.estacionamientos}</span>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-gold-med text-black font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(191,149,63,0.4)] transition-shadow mb-4">
                            Agendar Cita
                        </button>
                        <button className="w-full py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors">
                            Contactar Asesor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PropertyDetail;