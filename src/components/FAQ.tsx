import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  lang: 'ua' | 'en';
}

export default function FAQ({ lang }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'prepare' | 'care' | 'general'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', labelUa: 'Всі питання', labelEn: 'All Questions' },
    { id: 'prepare', labelUa: 'Підготовка до сеансу', labelEn: 'Preparation' },
    { id: 'care', labelUa: 'Загоєння та догляд', labelEn: 'Aftercare & Healing' },
    { id: 'general', labelUa: 'Загальні питання', labelEn: 'General & Safety' }
  ];

  const filteredItems = activeCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(item => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      <div className="absolute top-1/2 left-[5%] w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-6 bg-neon-purple" />
            <span className="text-xs font-mono uppercase tracking-widest text-neon-purple text-glow-purple/25">
              {lang === 'ua' ? 'БАЗА ЗНАНЬ ТАТУЮВАННЯ' : 'TATTOO KNOWLEDGE BASE'}
            </span>
            <span className="h-px w-6 bg-neon-purple" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 font-sans uppercase">
            {lang === 'ua' ? 'ПОШИРЕНІ ЗАПИТАННЯ (FAQ)' : 'COMMON QUESTIONS (FAQ)'}
          </h2>
          <p className="text-neutral-400 text-sm font-sans max-w-xl mx-auto">
            {lang === 'ua'
              ? 'Прочитайте рекомендації майстрів про те, як підготуватися до першого тату-сеансу, доглядати за малюнком та забезпечити бездоганне загоєння.'
              : 'Read professional recommendations about first-session stencils preparation, pain relief, and premium healing routines.'}
          </p>
        </div>

        {/* Category Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                setExpandedId(null);
              }}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-neon-purple/20 text-neon-purple border-neon-purple/35 text-glow-purple/20 shadow-none'
                  : 'bg-transparent text-neutral-500 border-neutral-850 hover:text-neutral-200'
              }`}
            >
              {lang === 'ua' ? cat.labelUa : cat.labelEn}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredItems.map((item, idx) => {
              const isExpanded = expandedId === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`rounded-lg border backdrop-blur-sm transition-all duration-300 ${
                    isExpanded
                      ? 'bg-neutral-950/50 border-neon-purple/40 shadow-neon-purple/10'
                      : 'bg-neutral-950/10 border-neutral-900/60 hover:border-neutral-800'
                  }`}
                >
                  {/* Collapsible Header */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 shrink-0 ${isExpanded ? 'text-neon-purple drop-shadow-[0_0_4px_#bc13fe]' : 'text-neutral-500'}`} />
                      <span className="font-bold font-sans text-sm sm:text-base text-neutral-100 group-hover:text-white leading-snug">
                        {lang === 'ua' ? item.question : item.questionEn}
                      </span>
                    </div>
                    <span className={`p-1.5 rounded-full bg-neutral-950 border border-neutral-850 text-neutral-400 transition-all duration-300 ${isExpanded ? 'rotate-180 text-neon-cyan border-neon-cyan/45 shadow-neon-cyan/15' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Accordion content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-neutral-400 font-sans leading-relaxed border-t border-neutral-900/50">
                          {lang === 'ua' ? item.answer : item.answerEn}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
