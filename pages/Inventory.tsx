import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROPERTIES_DATA, formatMoney } from '../constants';
import { Filter, Bed, Ruler } from 'lucide-react';

const Inventory: React.FC = () => {
  const location = useLocation();
  const [items, setItems] = useState(PROPERTIES_DATA);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const type = params.get('type');

    let filtered = PROPERTIES_DATA;
    if (category) filtered = filtered.filter(p => p.categoria === category);
    if (type) filtered = filtered.filter(p => p.tipo === type);
    
    setItems(filtered);
  }, [location.search]);

  return (
    <div className="min-h-screen bg-dark-bg pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
                <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase mb-4">Inventario</h1>
                <p className="text-gold-med text-lg uppercase tracking-widest">
                    {items.length} {items.length === 1 ? 'Propiedad' : 'Propiedades'} Disponibles
                </p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 mt-6 md:mt-0">
                <Filter size={16} />
                <span className="text-sm">Ordenado por: Más recientes</span>
            </div>
        </div>

        {/* Grid */}
        {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((prop, i) => (
                    <motion.div
                        key={prop.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link to={`/property/${prop.id}`} className="group block relative h-[500px] rounded-2xl overflow-hidden bg-gray-900 border border-white/5 hover:border-gold-med/50 transition-all duration-300">
                            {/* Image Background */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${prop.imagenes[0]}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                            {/* Badges */}
                            <div className="absolute top-4 right-4 flex gap-2">
                                <span className="bg-gold-med text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                                    {prop.tipo}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">{prop.categoria}</span>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-med transition-colors">{prop.titulo}</h3>
                                <p className="text-white font-light mb-4">{prop.ubicacion}</p>
                                
                                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                    <span className="text-2xl font-heading font-bold text-white">{formatMoney(prop.precio)}</span>
                                    <div className="flex gap-4 text-gray-400 text-sm">
                                        <span className="flex items-center gap-1"><Bed size={14} /> {prop.specs.recamaras}</span>
                                        <span className="flex items-center gap-1"><Ruler size={14} /> {prop.specs.construccion}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <h3 className="text-2xl text-white">No hay resultados para esta búsqueda.</h3>
                <Link to="/inventory" className="text-gold-med mt-4 inline-block hover:underline">Ver todo</Link>
            </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;