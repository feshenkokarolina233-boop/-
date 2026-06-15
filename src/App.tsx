import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Masters from './components/Masters';
import Prices from './components/Prices';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import { Droplet, Send, Instagram, ArrowUp, Clock } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'ua' | 'en'>('ua');
  const [selectedMasterId, setSelectedMasterId] = useState<string>('');
  const [selectedSizeId, setSelectedSizeId] = useState<'mini' | 'medium' | 'large' | 'individual' | ''>('');

  const handleBookClick = () => {
    const contactsSection = document.querySelector('#contacts');
    if (contactsSection) {
      const topOffset = 80;
      const elementPosition = contactsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleBookWithMaster = (masterId: string) => {
    setSelectedMasterId(masterId);
    handleBookClick();
  };

  const handleSelectPrice = (sizeId: 'mini' | 'medium' | 'large' | 'individual') => {
    setSelectedSizeId(sizeId);
    handleBookClick();
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-[#050505] min-h-screen text-neutral-100 selection:bg-neon-purple/30 selection:text-white relative">
      {/* Premium Header/Navbar */}
      <Navbar lang={lang} setLang={setLang} onBookClick={handleBookClick} />

      {/* Hero Section */}
      <Hero lang={lang} onBookClick={handleBookClick} />

      {/* Core sections */}
      <main className="relative">
        {/* About Section */}
        <About lang={lang} />

        {/* Portfolio Section */}
        <Portfolio lang={lang} onBookWithMaster={handleBookWithMaster} />

        {/* Resident Masters */}
        <Masters lang={lang} onBookWithMaster={handleBookWithMaster} />

        {/* Price Catalog */}
        <Prices lang={lang} onSelectPrice={handleSelectPrice} />

        {/* Testimonials */}
        <Reviews lang={lang} />

        {/* FAQ Bases */}
        <FAQ lang={lang} />

        {/* Contact Coordinates & Form */}
        <Contacts
          lang={lang}
          selectedMasterId={selectedMasterId}
          selectedSizeId={selectedSizeId}
          setSelectedMasterId={setSelectedMasterId}
          setSelectedSizeId={setSelectedSizeId}
        />
      </main>

      {/* Styled Premium Footer */}
      <footer className="bg-[#050505] border-t border-neutral-900/60 py-16 text-neutral-400 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-neutral-900/60">
            {/* Column 1: Brand details */}
            <div className="space-y-4 md:col-span-1">
              <a href="#" className="flex items-center gap-2 group mb-4">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-neon-purple/30 overflow-hidden">
                  <Droplet className="w-4 h-4 text-neon-purple drop-shadow-[0_0_6px_#bc13fe]" />
                </span>
                <span className="text-lg font-bold tracking-widest text-white uppercase font-sans">
                  Neon Tears
                </span>
              </a>
              <p className="text-xs text-neutral-500 font-sans max-w-sm leading-relaxed">
                {lang === 'ua'
                  ? 'Сучасна студія художнього татуювання преміум-класу в Києві. Ми створюємо вічність на вашому тілі, дотримуючись суворих медичних стандартів стерильності та безпеки.'
                  : 'Bespoke modern tattoo sanctuary and underground gallery in Kyiv. We engrave eternity on human skin following state safety guidelines.'}
              </p>
            </div>

            {/* Column 2: Working hours */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-300 font-bold">
                {lang === 'ua' ? 'ЧАС РОБОТИ' : 'OPEN HOURS'}
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-neon-purple" />
                  <span>{lang === 'ua' ? '11:00 - 21:00 (Без вихідних)' : '11:00 AM - 9:00 PM (Daily)'}</span>
                </div>
                <p className="text-[10px] text-neutral-600 font-sans">
                  {lang === 'ua'
                    ? '*Сеанси проводяться виключно за попереднім записом.'
                    : '*All sessions require pre-arranged time slots.'}
                </p>
              </div>
            </div>

            {/* Column 3: Kyiv Address */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-300 font-bold">
                {lang === 'ua' ? 'КООРДИНАТИ' : 'STUDIO LOCATION'}
              </h4>
              <p className="text-xs font-sans text-neutral-400 leading-relaxed">
                {lang === 'ua'
                  ? 'Україна, Київ, вул. Хрещатик, 15 (Пасаж), вхід у внутрішній дворик.'
                  : '15 Khreshchatyk St (Passage), Kyiv, Ukraine. In-courtyard artistic sanctuary entrance.'}
              </p>
            </div>

            {/* Column 4: Quick Handles */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-300 font-bold">
                {lang === 'ua' ? 'МЕСЕНДЖЕРИ' : 'FOLLOW THE INSIGHTS'}
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://t.me/neon_tears_kyiv"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-neutral-900 border border-neutral-850 hover:border-neon-purple/45 rounded text-neutral-400 hover:text-neon-purple hover:shadow-neon-purple/10 transition-colors shadow"
                  title="Telegram"
                >
                  <Send className="w-4 h-4 scale-x-[-1]" />
                </a>
                <a
                  href="https://instagram.com/neon_tears_kyiv"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-neutral-900 border border-neutral-850 hover:border-neon-cyan/45 rounded text-neutral-400 hover:text-neon-cyan hover:shadow-neon-cyan/10 transition-colors shadow"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] font-mono text-neutral-600 gap-4">
            <span>
              &copy; {new Date().getFullYear()} Neon Tears Kyiv. All rights reserved. Registered Studio.
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Kyiv, Ukraine • Underground Sanctuary of Art</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top interactive button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#050505]/80 border border-neutral-850 hover:border-neon-purple text-neutral-400 hover:text-neon-purple hover:shadow-neon-purple/20 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 shadow-lg group cursor-pointer"
        title="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
