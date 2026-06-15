import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Droplet, Send, Instagram } from 'lucide-react';

interface NavbarProps {
  lang: 'ua' | 'en';
  setLang: (lang: 'ua' | 'en') => void;
  onBookClick: () => void;
}

export default function Navbar({ lang, setLang, onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'ua' ? 'Про Студію' : 'About', href: '#about' },
    { name: lang === 'ua' ? 'Портфоліо' : 'Portfolio', href: '#portfolio' },
    { name: lang === 'ua' ? 'Майстри' : 'Artists', href: '#masters' },
    { name: lang === 'ua' ? 'Ціни' : 'Prices', href: '#prices' },
    { name: lang === 'ua' ? 'Відгуки' : 'Reviews', href: '#testimonials' },
    { name: lang === 'ua' ? 'FAQ' : 'FAQ', href: '#faq' },
    { name: lang === 'ua' ? 'Контакти' : 'Contacts', href: '#contacts' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
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
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-neon-purple/20 shadow-[0_4px_30px_rgba(188,19,254,0.08)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-950 border border-neon-purple/30 overflow-hidden group-hover:border-neon-purple transition-colors">
                <span className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Droplet className="w-5 h-5 text-neon-purple group-hover:text-neon-cyan transition-colors duration-300 drop-shadow-[0_0_8px_rgba(188,19,254,0.6)]" />
              </span>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 via-neon-purple to-neon-cyan font-sans uppercase">
                  Neon Tears
                </span>
                <span className="text-[9px] font-mono tracking-wider text-neon-purple/90 text-glow-purple uppercase">
                  Tattoo Kyiv
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors duration-200 relative py-1 group font-sans"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Language & Action CTA */}
            <div className="flex items-center gap-4 border-l border-neutral-900 pl-6">
              {/* Language Selector */}
              <div className="flex bg-[#050505] p-1 rounded-md border border-neutral-850">
                <button
                  onClick={() => setLang('ua')}
                  className={`px-2 py-0.5 text-xs font-mono rounded transition-all cursor-pointer ${
                    lang === 'ua'
                      ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30 text-glow-purple'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  UA
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-0.5 text-xs font-mono rounded transition-all cursor-pointer ${
                    lang === 'en'
                      ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30 text-glow-purple'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={onBookClick}
                className="relative px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-50 bg-neon-purple border border-neon-purple rounded-md overflow-hidden group cursor-pointer shadow-neon-purple transition-all duration-300 hover:scale-[1.03]"
              >
                <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-neon-purple via-[#af12e6] to-[#d641ff] transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10 font-sans shadow-neon-purple">
                  {lang === 'ua' ? 'Записатись' : 'Book Session'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Quick Language Toggle */}
            <button
              onClick={() => setLang(lang === 'ua' ? 'en' : 'ua')}
              className="px-2.5 py-1 text-xs font-mono bg-[#050505] border border-neon-purple/30 rounded text-neon-purple text-glow-purple/25 shadow-sm cursor-pointer"
            >
              {lang === 'ua' ? 'EN' : 'UA'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#050505] border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#050505]/95 border-b border-neon-purple/20 overflow-hidden backdrop-blur-md"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-neutral-400 hover:text-neon-cyan transition-colors py-1.5 font-sans border-b border-neutral-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 items-center justify-between mt-4">
                <div className="flex gap-2">
                  <a
                    href="https://t.me/neon_tears_kyiv"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-[#050505] border border-neutral-850 rounded text-neutral-400 hover:text-neon-purple hover:border-neon-purple/40 transition-colors"
                  >
                    <Send className="w-5 h-5 scale-x-[-1]" />
                  </a>
                  <a
                    href="https://instagram.com/neon_tears_kyiv"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-[#050505] border border-neutral-850 rounded text-neutral-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-50 bg-gradient-to-r from-neon-purple to-neon-cyan border border-neon-purple rounded-md shadow-neon-purple cursor-pointer"
                >
                  {lang === 'ua' ? 'Записатися' : 'Book Session'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
