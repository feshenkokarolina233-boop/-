import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO } from '../data';
import { ArrowUpRight, Eye, X, Send } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  lang: 'ua' | 'en';
  onBookWithMaster: (masterId: string) => void;
}

export default function Portfolio({ lang, onBookWithMaster }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filters = [
    { id: 'all', labelUa: 'Всі роботи', labelEn: 'All Works' },
    { id: 'blackwork', labelUa: 'Blackwork', labelEn: 'Blackwork' },
    { id: 'realism', labelUa: 'Realism', labelEn: 'Realism' },
    { id: 'neotraditional', labelUa: 'Neo Traditional', labelEn: 'Neo Traditional' },
    { id: 'minimalism', labelUa: 'Minimalism', labelEn: 'Minimalism' },
    { id: 'color', labelUa: 'Color Tattoo', labelEn: 'Color Tattoo' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-6 bg-neon-cyan" />
            <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan text-glow-cyan/20">
              {lang === 'ua' ? 'ГАЛЕРЕЯ ШЕДЕВРІВ' : 'MASTERPIECE GALLERY'}
            </span>
            <span className="h-px w-6 bg-neon-cyan" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 font-sans uppercase">
            {lang === 'ua' ? 'НАШЕ ПОРТФОЛІО' : 'STUDIO PORTFOLIO'}
          </h2>
          <p className="text-neutral-400 text-sm font-sans">
            {lang === 'ua'
               ? 'Досліджуйте роботи майстрів Neon Tears. Кожне татуювання виконане за індивідуальним замовленням з ювелірною точністю.'
               : 'Explore the bespoke fine ink masterpieces designed by Neon Tears. Every piece represents a sacred artistic story.'}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 text-xs font-mono tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-neon-purple text-white border-neon-purple shadow-neon-purple'
                  : 'bg-neutral-950/50 text-neutral-400 border-neutral-800 hover:text-white hover:border-neon-cyan/35 hover:shadow-neon-cyan/20'
              }`}
            >
              {lang === 'ua' ? f.labelUa : f.labelEn}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[3/4] bg-neutral-950 rounded-lg overflow-hidden border border-neutral-900 hover:border-neon-purple shadow-lg cursor-pointer select-none transition-colors duration-300"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88]"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Hover UI Info Card */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neon-cyan text-glow-cyan mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white font-sans tracking-tight mb-2">
                    {item.title}
                  </h3>
                  
                  {/* Master Info line */}
                  <div className="flex items-center justify-between border-t border-neutral-850 pt-3 mt-1">
                    <span className="text-xs text-neutral-400 font-sans">
                      {lang === 'ua' ? `Майстер: ${item.masterName}` : `By: ${item.masterName}`}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-neutral-950 flex items-center justify-center text-white border border-neutral-800 group-hover:border-neon-purple group-hover:shadow-neon-purple transition-colors duration-300">
                      <Eye className="w-4 h-4 text-neon-purple" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 border border-dashed border-neutral-850 rounded-lg">
            <p className="text-neutral-500 font-sans">{lang === 'ua' ? 'Робіт у цій категорії поки немає...' : 'No artworks in this category yet.'}</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal (Click Image details) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-4xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[80vh] shadow-[0_0_50px_rgba(188,19,254,0.3)]"
            >
              {/* Image side */}
              <div className="md:col-span-7 bg-black relative flex items-center justify-center overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[50vh] md:max-h-[80vh] w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text side */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-full bg-[#050505]">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="px-3 py-1 bg-neon-purple/20 border border-neon-purple/35 text-neon-purple rounded-full text-[10px] font-mono uppercase tracking-widest text-glow-purple">
                        {selectedItem.category}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="p-1 rounded-full bg-neutral-950 border border-neutral-800 hover:border-neon-purple text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-2xl font-bold font-sans tracking-tight text-white mb-2 uppercase">
                    {selectedItem.title}
                  </h3>

                  <p className="text-neutral-400 font-sans text-sm leading-relaxed mb-6">
                    {lang === 'ua'
                      ? 'Ця робота виконана в класичних стерильних умовах студії Neon Tears. Ескіз був спроектований спільно з клієнтом на основі персональних референсів.'
                      : 'This fine session artwork was designed customly in the safe confines of Neon Tears Studio. Created customized to anatomical structures.'}
                  </p>

                  <div className="p-4 bg-neutral-900/60 border border-neutral-850 rounded-lg">
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                      {lang === 'ua' ? 'Автор Нанесення' : 'ARTIST'}
                    </span>
                    <span className="text-base font-bold font-sans text-white">
                      {selectedItem.masterName}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-850">
                  <button
                    onClick={() => {
                      onBookWithMaster(selectedItem.masterId);
                      setSelectedItem(null);
                    }}
                    className="w-full py-4.5 bg-neon-purple border border-neon-purple rounded-md text-xs font-semibold tracking-wider text-white uppercase shadow-neon-purple hover:scale-[1.03] active:scale-99 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 scale-x-[-1]" />
                    <span className="text-glow-purple/20">
                      {lang === 'ua' ? 'Хочу таку ж роботу' : 'Request similar design'}
                    </span>
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
