import { TESTIMONIALS } from '../data';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';

interface ReviewsProps {
  lang: 'ua' | 'en';
}

export default function Reviews({ lang }: ReviewsProps) {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-purple/5 blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-6 bg-neon-purple" />
            <span className="text-xs font-mono uppercase tracking-widest text-neon-purple text-glow-purple/25">
              {lang === 'ua' ? 'СЛОВА НАШИХ КЛІЄНТІВ' : 'TRUST & DEVOTION'}
            </span>
            <span className="h-px w-6 bg-neon-purple" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 font-sans uppercase">
            {lang === 'ua' ? 'ВІДГУКИ ПРО СТУДІЮ' : 'CLIENT REVIEWS'}
          </h2>
          <p className="text-neutral-400 text-sm font-sans">
            {lang === 'ua'
              ? 'Емоції клієнтів — наша головна гордість. Подивіться, що кажуть ті, хто довірив нам своє тіло та ідеї.'
              : 'Our client emotions are what makes us proud. Read true feedback left by art collectors who trusted us.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-xl p-8 bg-neutral-950/40 border border-neutral-900 hover:border-neon-purple hover:shadow-neon-purple/20 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between"
            >
              {/* Giant quote icon behind text */}
              <div className="absolute top-6 right-6 text-neutral-900 group-hover:text-neon-purple/10 transition-colors duration-300 pointer-events-none">
                <MessageSquareQuote className="w-12 h-12" />
              </div>

              {/* Main content */}
              <div>
                {/* Visual Stars */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-neon-cyan text-neon-cyan drop-shadow-[0_0_4px_rgba(0,243,255,0.5)]"
                    />
                  ))}
                </div>

                {/* Review Body Text */}
                <p className="text-neutral-300 font-sans text-sm leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Footer Author box */}
              <div className="flex justify-between items-center border-t border-neutral-850 pt-5 mt-auto">
                <div>
                  <span className="block text-sm font-bold text-white font-sans">
                    {t.name}
                  </span>
                  <span className="text-[10px] font-mono text-neon-purple text-glow-purple uppercase tracking-wider block mt-0.5">
                    {t.tattooCategory}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">
                  {t.date}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
