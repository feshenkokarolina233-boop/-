import { ShieldAlert, Award, Sparkles, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  lang: 'ua' | 'en';
}

export default function About({ lang }: AboutProps) {
  const values = [
    {
      icon: ShieldAlert,
      title: lang === 'ua' ? 'Медична безпека' : 'Medical Grade Sterility',
      desc:
        lang === 'ua'
          ? 'Триетапна стерилізація тримачів за стандартами ДСТУ. Розхідні матеріали відкриваються тільки при вас. Повний бар\'єрний захист.'
          : '3-stage grasp sterilization using medical autoclaves. All needles opened exclusively in your presence.',
      neonColor: 'border-neon-purple/20 group-hover:border-neon-purple group-hover:shadow-neon-purple',
      iconColor: 'text-neon-purple drop-shadow-[0_0_6px_rgba(188,19,254,0.6)]',
    },
    {
      icon: Award,
      title: lang === 'ua' ? 'Преміум пігменти та голки' : 'Elite Materials Only',
      desc:
        lang === 'ua'
          ? 'Працюємо найкращими сертифікованими барвниками США (Dynamic, World Famous) та картриджами Cheyenne/Kwadron.'
          : 'We utilize top-tier certified USA vegan inks and legendary Kwadron and Cheyenne safety cartridge units.',
      neonColor: 'border-neon-cyan/20 group-hover:border-neon-cyan group-hover:shadow-neon-cyan',
      iconColor: 'text-neon-cyan drop-shadow-[0_0_6px_rgba(0,243,255,0.6)]',
    },
    {
      icon: Sparkles,
      title: lang === 'ua' ? 'Мистецтво без шаблонів' : 'Original Craft & Sketches',
      desc:
        lang === 'ua'
          ? 'Жодних чужих картинок з інтернету. Розробляємо унікальний концептуальний ескіз під анатомію вашого тіла.'
          : 'No copy-pasting from Google. Every stencil is draft-engineered uniquely aligned with your bodys natural anatomy.',
      neonColor: 'border-neon-purple/20 group-hover:border-neon-purple group-hover:shadow-neon-purple',
      iconColor: 'text-neon-purple drop-shadow-[0_0_6px_rgba(188,19,254,0.6)]',
    },
    {
      icon: HeartHandshake,
      title: lang === 'ua' ? 'Абсолютний комфорт' : 'Vibe & VIP Atmosphere',
      desc:
        lang === 'ua'
          ? 'Затишна приватна атмосфера, анатомічні кушетки, розслаблюючий плейлист, елітний чай та дбайливий догляд.'
          : 'Cozy private setups, ergonomic leather chairs, underground visual ambient, specialty tea, and dedicated nurse aftercare.',
      neonColor: 'border-neon-cyan/20 group-hover:border-neon-cyan group-hover:shadow-neon-cyan',
      iconColor: 'text-neon-cyan drop-shadow-[0_0_6px_rgba(0,243,255,0.6)]',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#050505] text-neutral-100 relative overflow-hidden">
      {/* Decorative lines inside the container */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      <div className="absolute -left-20 top-1/3 w-96 h-96 rounded-full bg-neon-purple/5 blur-[120px]" />
      <div className="absolute -right-20 bottom-1/3 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: About Text & Concept */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-neon-purple" />
              <span className="text-xs font-mono uppercase tracking-widest text-neon-purple text-glow-purple/20">
                {lang === 'ua' ? 'ХРАМ МИСТЕЦТВА' : 'ART SANCTUARY'}
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-8 font-sans uppercase">
              {lang === 'ua' ? 'ЕСТЕТИКА ТА БЕЗПЕКА' : 'AESTHETIC & ABSOLUTE SAFETY'}
            </h2>
            
            <p className="text-neutral-400 font-sans leading-relaxed mb-6">
              {lang === 'ua'
                ? 'Студія татуювання Neon Tears — це більше, ніж просто салон. Ми позиціонуємо себе як андеграундна художня галерея в самому серці Києва, де полотном виступає ваше тіло.'
                : 'Neon Tears Tattoo is a curated underground gallery located in the historic soul of Kyiv. Here, fine art meets the human skin with spiritual devotion and technical flawless precision.'}
            </p>

            <p className="text-neutral-400 font-sans leading-relaxed mb-8">
              {lang === 'ua'
                ? 'Ми заперечуємо конвеєрне ставлення. Кожен проєкт народжується на стику ваших ідей та авторського бачення наших найкращих майстрів. Ми дбайливо ставимося до вашого здоров’я та комфорту, дотримуючись найсуворіших медичних протоколів стерилізації.'
                : 'We strictly reject the commercial conveyer approach. Every design is built collaboratively from scratch. Adhering to rigorous, state-sanctioned medical disinfection pathways, we preserve your safety with no exceptions.'}
            </p>

            {/* Quick Metrics display */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-900 font-mono">
              <div>
                <span className="block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-cyan drop-shadow-[0_0_8px_rgba(188,19,254,0.3)]">
                  100%
                </span>
                <span className="text-[10px] uppercase text-neutral-500 tracking-wider font-sans">
                  {lang === 'ua' ? 'Стерильність' : 'Sterility Rate'}
                </span>
              </div>
              <div>
                <span className="block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple drop-shadow-[0_0_8px_rgba(0,243,255,0.3)]">
                  3,000+
                </span>
                <span className="text-[10px] uppercase text-neutral-500 tracking-wider font-sans">
                  {lang === 'ua' ? 'Сеансів' : 'Tattoos Done'}
                </span>
              </div>
              <div>
                <span className="block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-white to-neon-cyan drop-shadow-[0_0_8px_rgba(188,19,254,0.3)]">
                  19+
                </span>
                <span className="text-[10px] uppercase text-neutral-500 tracking-wider font-sans">
                  {lang === 'ua' ? 'Нагород' : 'AWARDS WON'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: 4 Core Values Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group p-6 rounded-lg bg-neutral-950/40 border backdrop-blur-sm transition-all duration-300 ${v.neonColor}`}
              >
                <div className="w-12 h-12 rounded-md bg-[#050505] flex items-center justify-center border border-neutral-900/80 mb-5 group-hover:scale-105 transition-transform duration-300">
                  <v.icon className={`w-6 h-6 ${v.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold font-sans text-neutral-100 mb-3 group-hover:text-neon-purple transition-colors">
                  {v.title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
