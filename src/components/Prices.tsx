import { PRICES } from '../data';
import { motion } from 'motion/react';
import { Check, Clock, ArrowRight } from 'lucide-react';

interface PricesProps {
  lang: 'ua' | 'en';
  onSelectPrice: (tierId: 'mini' | 'medium' | 'large' | 'individual') => void;
}

export default function Prices({ lang, onSelectPrice }: PricesProps) {
  // Map helper to map price tier IDs to the exact category in Booking form
  const mapTierId = (id: string): 'mini' | 'medium' | 'large' | 'individual' => {
    if (id === 'sketch') return 'individual';
    return id as 'mini' | 'medium' | 'large' | 'individual';
  };

  return (
    <section id="prices" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
      <div className="absolute top-[20%] left-[10%] w-80 h-80 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-6 bg-neon-cyan" />
            <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan text-glow-cyan/25">
              {lang === 'ua' ? 'КУЛЬТУРА ЦІНОУТВОРЕННЯ' : 'TRANSPARENT PRICING'}
            </span>
            <span className="h-px w-6 bg-neon-cyan" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 font-sans uppercase">
            {lang === 'ua' ? 'ВАРТІСТЬ РОБІТ' : 'TARIF PLANS & PRICING'}
          </h2>
          <p className="text-neutral-400 text-sm font-sans">
            {lang === 'ua'
              ? 'У нас немає прихованих платежів. У вартість включені всі витратні матеріали, авторський дизайн та преміальний догляд.'
              : 'Zero hidden fees. Every option includes certified safety elements, custom iPad blueprint adjustments, and medical-grade aftercare packages.'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRICES.map((tier, i) => {
            const isSketch = tier.id === 'sketch';
            const isLarge = tier.id === 'large';
            
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-xl p-6 bg-neutral-950/40 border backdrop-blur-sm transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg ${
                  isLarge 
                    ? 'border-neon-purple/45 hover:border-neon-purple hover:shadow-neon-purple' 
                    : isSketch
                    ? 'border-neon-cyan/40 hover:border-neon-cyan hover:shadow-neon-cyan'
                    : 'border-neutral-900 hover:border-neon-purple/55 hover:shadow-neon-purple/20'
                }`}
              >
                {/* Decorative neon streak for large projects */}
                {isLarge && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neon-purple via-white to-neon-cyan shadow-md" />
                )}

                {/* Top Section */}
                <div>
                  {/* Category Name */}
                  <span className={`text-[10px] font-mono uppercase tracking-widest block mb-4 ${
                    isLarge ? 'text-neon-purple text-glow-purple/20' : isSketch ? 'text-neon-cyan text-glow-cyan/20' : 'text-neutral-500'
                  }`}>
                    {lang === 'ua' ? tier.title : tier.titleEn}
                  </span>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-black font-sans text-white tracking-tight">
                      {tier.price}
                    </span>
                  </div>

                  {/* Duration Flag */}
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono mb-6 pb-2">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{tier.duration}</span>
                  </div>

                  <p className="text-neutral-400 font-sans text-xs leading-relaxed mb-6 border-b border-neutral-900 pb-5 min-h-[50px]">
                    {lang === 'ua' ? tier.description : tier.descriptionEn}
                  </p>

                  {/* Detail Checklist Items */}
                  <ul className="space-y-3 mb-8">
                    {(lang === 'ua' ? tier.details : tier.detailsEn).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <Check className="w-4 h-4 text-neon-purple shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(188,19,254,0.6)]" />
                        <span className="text-neutral-300 font-sans leading-tight">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Call-To-Action Button */}
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => onSelectPrice(mapTierId(tier.id))}
                    className={`w-full py-3 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      isLarge
                        ? 'bg-neon-purple text-white shadow-neon-purple hover:bg-neon-purple/90 hover:scale-[1.02]'
                        : isSketch
                        ? 'bg-transparent border border-neon-cyan hover:bg-neon-cyan/15 hover:border-neon-cyan text-neon-cyan hover:shadow-neon-cyan/25 hover:scale-[1.02] shadow-sm'
                        : 'bg-transparent border border-neutral-800 hover:bg-[#050505] hover:border-neon-purple/40 text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span>{lang === 'ua' ? 'Обрати тариф' : 'Select Tarif'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
