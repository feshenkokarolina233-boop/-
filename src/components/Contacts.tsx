import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MASTERS } from '../data';
import { MapPin, Phone, Instagram, Send, Calendar, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { BookingForm as BookingFormType } from '../types';

interface ContactsProps {
  lang: 'ua' | 'en';
  selectedMasterId: string;
  selectedSizeId: 'mini' | 'medium' | 'large' | 'individual' | '';
  setSelectedMasterId: (id: string) => void;
  setSelectedSizeId: (size: 'mini' | 'medium' | 'large' | 'individual' | '') => void;
}

export default function Contacts({
  lang,
  selectedMasterId,
  selectedSizeId,
  setSelectedMasterId,
  setSelectedSizeId,
}: ContactsProps) {
  const [formData, setFormData] = useState<BookingFormType>({
    name: '',
    phone: '',
    masterId: 'any',
    tattooSize: 'medium',
    sketchIdea: '',
    preferredDate: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Sync state with parent trigger actions
  useEffect(() => {
    if (selectedMasterId) {
      setFormData((prev) => ({ ...prev, masterId: selectedMasterId }));
    }
  }, [selectedMasterId]);

  useEffect(() => {
    if (selectedSizeId) {
      setFormData((prev) => ({ ...prev, tattooSize: selectedSizeId }));
    }
  }, [selectedSizeId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Custom Validation
    if (!formData.name.trim()) {
      setValidationError(lang === 'ua' ? 'Будь ласка, введіть ваше ім’я.' : 'Please provide your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError(
        lang === 'ua'
          ? 'Будь ласка, вкажіть контактний номер телефону.'
          : 'Please provide a contact phone number.'
      );
      return;
    }

    // Save to LocalStorage
    const storedRequests = JSON.parse(localStorage.getItem('neon_tears_bookings') || '[]');
    storedRequests.push({
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('neon_tears_bookings', JSON.stringify(storedRequests));

    // Clear and success trigger
    setFormSubmitted(true);
    setValidationError(null);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      masterId: 'any',
      tattooSize: 'medium',
      sketchIdea: '',
      preferredDate: '',
    });
    setFormSubmitted(false);
    setSelectedMasterId('');
    setSelectedSizeId('');
  };

  return (
    <section id="contacts" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden text-neutral-100">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />
      <div className="absolute bottom-0 right-[20%] w-96 h-96 bg-neon-purple/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-6 bg-neon-purple" />
            <span className="text-xs font-mono uppercase tracking-widest text-neon-purple text-glow-purple/25">
              {lang === 'ua' ? 'КОНТАКТНА ІНФОРМАЦІЯ ТА ЗАПИС' : 'BOOK AN EXPERIENCED CRAFTSMAN'}
            </span>
            <span className="h-px w-6 bg-neon-purple" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 font-sans uppercase">
            {lang === 'ua' ? 'КОНТАКТИ ТА ЗАПИС' : 'GET IN TOUCH & PRE-BOOK'}
          </h2>
          <p className="text-neutral-400 text-sm font-sans">
            {lang === 'ua'
              ? 'Оберіть майстра, відповідний формат татуювання або запишіться на персональну консультацію через форму нижче.'
              : 'Submit the bespoke request schema or initiate customized direct lines of query via Instagram/Telegram messengers.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Coordinates details & Interactive Dark Google Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-sans tracking-tight text-white uppercase flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-neon-purple drop-shadow-[0_0_4px_#bc13fe]" />
                <span>{lang === 'ua' ? 'СТУДІЯ В КИЄВІ' : 'STUDIO HEADQUARTERS'}</span>
              </h3>

              {/* Coordinates Text block */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 mt-0.5 text-neon-purple shrink-0" />
                  <div className="font-sans">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block">
                      {lang === 'ua' ? 'Локація' : 'Address'}
                    </span>
                    <span className="text-sm font-semibold text-neutral-300">
                      {lang === 'ua' ? 'Україна, Київ, вул. Хрещатик, 15 (Пасаж)' : '15 Khreshchatyk St (Passage), Kyiv, Ukraine'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 mt-0.5 text-neon-purple shrink-0" />
                  <div className="font-sans">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block">
                      {lang === 'ua' ? 'Телефон' : 'Phone Line'}
                    </span>
                    <a href="tel:+380931234567" className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors">
                      +380 93 123 45 67
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick social CTA Buttons (Direct text request via Telegram / Instagram - Requested!) */}
              <div className="pt-4 space-y-3.5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block">
                  {lang === 'ua' ? 'Запис напряму в месенджери' : 'Direct Instant Messengers Bookings'}
                </span>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://t.me/neon_tears_kyiv"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-5 py-3.5 bg-neutral-950/40 border border-neon-purple/35 hover:border-neon-purple hover:shadow-neon-purple/20 rounded text-xs font-semibold tracking-wider text-neon-purple uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:text-white"
                  >
                    <Send className="w-4 h-4 scale-x-[-1]" />
                    <span>Telegram Booking</span>
                  </a>
                  <a
                    href="https://instagram.com/neon_tears_kyiv"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-5 py-3.5 bg-neutral-950/40 border border-neon-cyan/45 hover:border-neon-cyan hover:shadow-neon-cyan/20 rounded text-xs font-semibold tracking-wider text-neon-cyan uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:text-white"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram Booking</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Dark Styled Custom Interacted Map Mock (Iframe) */}
            <div className="w-full aspect-video sm:aspect-[4/3] rounded-lg overflow-hidden border border-neutral-850 shadow-md relative group">
              <iframe
                title="Neon Tears Studio Kyiv Address Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6384210058864!2d30.521870677134372!3d50.44782297159187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50f316bf89%3A0x6b80145df0cca439!2sKhreshchatyk%20St%2C%2015%2C%20Kyiv%20City%2C%2002000!5e0!3m2!1sen!2sua!4v1780908000000!5m2!1sen!2sua"
                className="w-full h-full border-0 filter grayscale invert contrast-[1.1] brightness-[0.80]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-[#050505]/95 border border-neutral-800 px-3 py-1.5 rounded-md text-[10px] font-mono tracking-wide text-neutral-400 backdrop-blur-sm pointer-events-none shadow-sm">
                Neon Tears • Київ, Пасаж
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form Box with high visual glassmorphism effects */}
          <div className="lg:col-span-7">
            
            <div className="relative rounded-2xl bg-neutral-950/40 border border-neutral-900/80 hover:border-neon-purple/20 p-6 sm:p-8 backdrop-blur-md shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-center transition-all duration-300">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                  >
                    <div className="border-b border-neutral-850 pb-3 mb-1">
                      <h4 className="text-lg font-bold font-sans tracking-tight text-white uppercase">
                        {lang === 'ua' ? 'ЗАЯВКА НА СЕАНС' : 'ONLINE BOOKING INQUIRY'}
                      </h4>
                      <p className="text-neutral-500 text-[11px] font-sans">
                        {lang === 'ua'
                          ? 'Заповніть поля нижче, і ми зв’яжемося з вами протягом 30 хвилин.'
                          : 'Provide your credentials, and our manager will reply within 30 minutes.'}
                      </p>
                    </div>

                    {/* Alert Message for Validation */}
                    {validationError && (
                      <div className="p-3 bg-red-950/40 border border-red-500/20 text-red-300 text-xs rounded flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    {/* Customer Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                          {lang === 'ua' ? 'Ваше ім’я *' : 'Your Name *'}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505]/80 border border-neutral-850 rounded px-4 py-3 text-sm text-neutral-100 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple focus:shadow-neon-purple/10 transition-all"
                          placeholder={lang === 'ua' ? 'Наприклад, Іван' : 'e.g., Jean'}
                        />
                      </div>

                      {/* Phone input */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                          {lang === 'ua' ? 'Телефон *' : 'Phone Number *'}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505]/80 border border-neutral-850 rounded px-4 py-3 text-sm text-neutral-100 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple focus:shadow-neon-purple/10 transition-all"
                          placeholder="+380"
                        />
                      </div>
                    </div>

                    {/* Selection Controls */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Master selector */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                          {lang === 'ua' ? 'Майстер' : 'Resident Artist'}
                        </label>
                        <select
                          name="masterId"
                          value={formData.masterId}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505]/80 border border-neutral-850 rounded px-3 py-3 text-sm text-neutral-300 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                        >
                          <option value="any">{lang === 'ua' ? 'Будь-який вільний майстер' : 'Any Free Consultant'}</option>
                          {MASTERS.map((m) => (
                            <option key={m.id} value={m.id}>
                              {lang === 'ua' ? m.name : m.nameEn}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Project size select */}
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                          {lang === 'ua' ? 'Розмір проєкту' : 'Session Scale'}
                        </label>
                        <select
                          name="tattooSize"
                          value={formData.tattooSize}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505]/80 border border-neutral-850 rounded px-3 py-3 text-sm text-neutral-300 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                        >
                          <option value="mini">{lang === 'ua' ? 'Міні-тату (до 5 см)' : 'Mini Tattoo (Up to 5cm)'}</option>
                          <option value="medium">{lang === 'ua' ? 'Середні проєкти (до 15 см)' : 'Medium Project (Up to 15cm)'}</option>
                          <option value="large">{lang === 'ua' ? 'Великі проєкти / сеанс' : 'Large Project (Sleeve/Back)'}</option>
                          <option value="individual">{lang === 'ua' ? 'Індивідуальний ескіз' : 'Custom Blueprint Design'}</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preffered Date */}
                      <div className="sm:col-span-2">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                          {lang === 'ua' ? 'Бажана дата сеансу' : 'Preferred Session Date'}
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505]/80 border border-neutral-850 rounded px-4 py-3 text-sm text-neutral-300 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                        />
                      </div>
                    </div>

                    {/* Sketch description */}
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                        {lang === 'ua' ? 'Опис ідеї / Місце на тілі' : 'Idea Outline & Body Placement'}
                      </label>
                      <textarea
                        name="sketchIdea"
                        value={formData.sketchIdea}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-[#050505]/80 border border-neutral-850 rounded px-4 py-3 text-sm text-neutral-100 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all resize-none"
                        placeholder={
                          lang === 'ua'
                            ? 'Наприклад: вовк на передпліччі в нео-традиційному стилі, чорно-сірі тіні...'
                            : 'e.g., Neo-trad wolf on shoulder blade with gray shading...'
                        }
                      />
                    </div>

                    {/* Action buttons */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-neon-purple text-white shadow-lg shadow-neon-purple/20 hover:shadow-neon-purple/40 hover:scale-[1.01] active:scale-[0.99] rounded text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex justify-center items-center gap-2 mt-4"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{lang === 'ua' ? 'ВІДПРАВИТИ ЗАЯВКУ' : 'SUBMIT PRE-BOOK'}</span>
                    </button>
                  </motion.form>
                ) : (
                  /* Success Screen! */
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="text-center py-12 flex flex-col items-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center text-neon-cyan drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">
                      <CheckCircle className="w-10 h-10 animate-bounce" />
                    </div>

                    <div>
                      <h4 className="text-2xl font-black font-sans tracking-tight text-white uppercase mb-2">
                        {lang === 'ua' ? 'ЗАЯВКА ПРИЙНЯТА!' : 'SUBMISSION RECEIVED!'}
                      </h4>
                      <p className="text-sm text-neutral-400 font-sans max-w-md mx-auto">
                        {lang === 'ua'
                          ? `Дякуємо, ${formData.name}! Ми зареєстрували вашу заявку в системі. Адміністратор зв'яжеться з вами за номером ${formData.phone} протягом 30 хвилин через Telegram/Viber для узгодження ескізу.`
                          : `Thank you, ${formData.name}! Your consultation slot is initialized in database. We will reach back to ${formData.phone} within 30 minutes to details sketch components.`}
                      </p>
                    </div>

                    {/* Summary Info box */}
                    <div className="p-4 bg-[#050505] border border-neutral-850 rounded-lg text-left text-xs max-w-sm w-full space-y-2">
                      <div className="flex justify-between">
                        <span className="text-neutral-500 font-mono">{lang === 'ua' ? 'Обраний майстер:' : 'Artist:'}</span>
                        <span className="text-neutral-300 font-sans font-semibold">
                          {formData.masterId === 'any'
                            ? (lang === 'ua' ? 'Будь-який вільний' : 'Any Free Artist')
                            : MASTERS.find((m) => m.id === formData.masterId)?.name || ''}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500 font-mono">{lang === 'ua' ? 'Формат малюнка:' : 'Format:'}</span>
                        <span className="text-neutral-300 font-sans font-semibold capitalize">
                          {formData.tattooSize}
                        </span>
                      </div>
                      {formData.preferredDate && (
                        <div className="flex justify-between">
                          <span className="text-neutral-500 font-mono">{lang === 'ua' ? 'Бажана дата:' : 'Date:'}</span>
                          <span className="text-neutral-300 font-sans font-semibold">
                            {formData.preferredDate}
                          </span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 bg-neutral-950 border border-neutral-850 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-neon-cyan/15 hover:scale-[1.01] text-[10px] font-mono tracking-widest uppercase text-neutral-400 rounded transition-all cursor-pointer"
                    >
                      {lang === 'ua' ? 'Надіслати нову заявку' : 'Submit Another Request'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
