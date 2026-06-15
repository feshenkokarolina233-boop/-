import { MASTERS } from '../data';
import { motion } from 'motion/react';
import { ArrowUpRight, Instagram, Send, Calendar } from 'lucide-react';

interface MastersProps {
  lang: 'ua' | 'en';
  onBookWithMaster: (masterId: string) => void;
}

export default function Masters({ lang, onBookWithMaster }: MastersProps) {
  return (
    <section id="masters" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Dynamic line and glow effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-6 bg-neon-purple" />
            <span className="text-xs font-mono uppercase tracking-widest text-neon-purple text-glow-purple/25">
              {lang === 'ua' ? 'МАЙСТРИ МИСТЕЦТВА' : 'CREATIVE ELITE'}
            </span>
            <span className="h-px w-6 bg-neon-purple" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 font-sans uppercase">
            {lang === 'ua' ? 'КОМАНДА NEON TEARS' : 'RESIDENT ARTISTS'}
          </h2>
          <p className="text-neutral-400 text-sm font-sans">
            {lang === 'ua'
              ? 'Наші майстри — дипломовані художники з колосальним досвідом, які постійно беруть участь у міжнародних конвенціях.'
              : 'Our residents are award-winning multidisciplinary sketch draftsmen who hold prestigious global tattoo credentials.'}
          </p>
        </div>

        {/* Masters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {MASTERS.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-neutral-950/40 border border-neutral-900 hover:border-neon-purple hover:shadow-neon-purple rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              {/* Photo Box */}
              <div className="relative aspect-square w-full bg-black overflow-hidden border-b border-neutral-850">
                <img
                  src={m.photo}
                  alt={lang === 'ua' ? m.name : m.nameEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 filter contrast-[1.03] brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-65" />
                
                {/* Specialization Tags on photo overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="px-3 py-1 bg-neutral-950/90 border border-neon-purple/40 rounded text-xs font-semibold tracking-wider text-neon-purple text-glow-purple/20 font-sans backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                      {lang === 'ua' ? m.specialization : m.specializationEn}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2.5 py-1 bg-[#050505]/90 text-neutral-400 rounded-md border border-neutral-850">
                    {lang === 'ua' ? `Досвід: ${m.experience}` : `Exp: ${m.experience}`}
                  </span>
                </div>
              </div>

              {/* Bio & Description */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold font-sans tracking-tight text-white group-hover:text-neon-purple transition-colors">
                      {lang === 'ua' ? m.name : m.nameEn}
                    </h3>
                  </div>
                  
                  <p className="text-neutral-400 font-sans text-xs leading-relaxed mb-6 min-h-[72px]">
                    {m.bio}
                  </p>
                </div>

                {/* Socials & Booking actions inside the card */}
                <div className="border-t border-neutral-850 pt-5 mt-auto flex items-center justify-between">
                  {/* Left Social Links */}
                  <div className="flex gap-2">
                    <a
                      href={m.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-neutral-950 hover:bg-[#050505] rounded border border-neutral-850 text-neutral-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all shadow-sm cursor-pointer"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={m.socials.telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-neutral-950 hover:bg-[#050505] rounded border border-neutral-850 text-neutral-400 hover:text-neon-purple hover:border-neon-purple/40 transition-all shadow-sm cursor-pointer"
                      title="Telegram"
                    >
                      <Send className="w-4 h-4 scale-x-[-1]" />
                    </a>
                  </div>

                  {/* Booking Link */}
                  <button
                    onClick={() => onBookWithMaster(m.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-950 border border-neutral-850 group-hover:border-neon-purple/40 text-[11px] font-mono uppercase tracking-wider text-neutral-300 hover:text-neon-purple group-hover:text-neon-purple rounded transition-all cursor-pointer hover:shadow-neon-purple/20"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{lang === 'ua' ? 'Запис' : 'Book'}</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-neutral-500 group-hover:text-neon-purple" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
