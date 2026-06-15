import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight, CornerDownRight } from 'lucide-react';

interface HeroProps {
  lang: 'ua' | 'en';
  onBookClick: () => void;
}

export default function Hero({ lang, onBookClick }: HeroProps) {
  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#portfolio');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black select-none">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_background_1780908111177.png"
          alt="Neon Tears Premium Tattoo Studio Kyiv"
          className="w-full h-full object-cover object-center opacity-45 scale-105 filter brightness-[0.70] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic dark gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-955" />
        
        {/* Glowing atmospheric neon background light points */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full bg-neon-purple/20 blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-cyan/15 blur-[150px] animate-pulse" />
      </div>

      {/* Main Content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-20">
        {/* Slogan pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-950/70 border border-neon-purple/35 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-neon-cyan drop-shadow-[0_0_6px_rgba(0,243,255,0.7)]" />
          <span className="text-[11px] font-mono tracking-widest text-[#00f3ff] text-glow-cyan uppercase">
            {lang === 'ua' ? 'Преміум Тату-Студія • Київ' : 'Premium Tattoo Studio • Kyiv'}
          </span>
        </motion.div>

        {/* Studio Title */}
        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight font-sans text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 via-neon-purple to-neutral-200 select-none text-glow-purple/20"
          >
            NEON TEARS
          </motion.h1>

          {/* Subtitle Accent Lines */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '120px', opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="h-0.5 bg-gradient-to-r from-neon-purple via-white to-neon-cyan mx-auto mt-4 rounded-full shadow-neon-purple"
          />
        </div>

        {/* Master Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-2xl font-light tracking-wide text-neutral-300 max-w-2xl mx-auto mb-12 font-sans"
        >
          {lang === 'ua'
            ? 'Мистецтво, що залишається з тобою назавжди.'
            : 'Art that stays with you forever.'}
        </motion.p>

        {/* Actions Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Main Book CTA */}
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 bg-neon-purple border border-neon-purple rounded-md text-sm font-semibold tracking-wider uppercase text-neutral-50 shadow-neon-purple hover:scale-[1.03] active:scale-98 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-glow-purple/40">{lang === 'ua' ? 'Записатися онлайн' : 'Book Session Online'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* View Works CTA */}
          <button
            onClick={handleScrollToPortfolio}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-800 rounded-md text-sm font-semibold tracking-wider uppercase text-neutral-200 hover:bg-[#050505] hover:border-neon-cyan/40 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{lang === 'ua' ? 'Наші роботи' : 'Our Portfolio'}</span>
            <CornerDownRight className="w-4 h-4 text-neon-cyan group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Infinite Scroll indicators on the bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 hover:text-neon-cyan transition-colors cursor-pointer"
          onClick={() => {
            const el = document.querySelector('#about');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] font-mono tracking-widest uppercase">{lang === 'ua' ? 'Гортати вниз' : 'Scroll down'}</span>
          <div className="w-5 h-9 rounded-full border border-neutral-700 p-1 flex justify-center">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1 h-2 rounded-full bg-neon-purple"
            />
          </div>
        </motion.div>
      </div>

      {/* Modern bottom separator gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
    </section>
  );
}
