import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Globe, ShieldCheck } from 'lucide-react';

export default function Header({ toggleSidebar }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'uz' ? 'en' : 'uz';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-space-dark border-b border-neon-cyan/20 px-4 py-3 flex items-center justify-between font-mono select-none">
      
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="lg:hidden text-neon-cyan hover:text-white transition-colors">
        <Menu size={28} />
        </button>
        
        <div>
          <h1 className="text-neon-cyan font-bold text-lg md:text-xl tracking-[0.2em] font-display text-shadow-neon">
            {t('title', 'ASTRO VITALS // MISSION CONTROL')}
          </h1>
          <p className="text-[10px] text-space-text tracking-widest uppercase hidden sm:block mt-1">
            {t('subtitle', 'AUTONOMOUS SPACE CREW BIO-DIGITAL TWIN PLATFORM')}
          </p>
        </div>
      </div>

      {/* Markaziy qism: Menyu tugmalari (Faqat Katta ekranlarda) */}
      <nav className="hidden lg:flex items-center gap-1">
        {['BIO-DIGITAL TWIN', 'JONLI TELEMETRIYA', 'EKIPAJ', 'OPERATSIYALAR', 'XAVFSIZLIK'].map((item, idx) => (
          <button 
            key={idx}
            className={`px-4 py-2 border transition-all duration-300 text-xs tracking-wider font-bold
              ${idx === 0 
                ? 'bg-neon-cyan/10 border-neon-cyan text-neon-cyan shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                : 'border-transparent text-space-text hover:border-neon-cyan/50 hover:text-neon-cyan'}`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* O'ng qism: Tizim xavfsizligi va Til */}
      <div className="flex items-center gap-6">
        {/* Tizim Nominal ko'rsatkichi (Backend'ning 3-bandi uchun vizual) */}
        <div className="hidden md:flex items-center gap-2 bg-neon-green/10 border border-neon-green px-3 py-1.5 rounded-sm">
          <ShieldCheck size={16} className="text-neon-green" />
          <span className="text-neon-green text-xs font-bold tracking-widest animate-pulse">
            {t('system_status', 'TIZIM NOMINAL')}
          </span>
        </div>

        <button 
          onClick={changeLanguage} 
          className="flex items-center gap-2 text-space-text hover:text-neon-cyan transition-colors"
          title="Tilni o'zgartirish"
        >
          <Globe size={18} />
          <span className="text-xs uppercase font-bold tracking-wider">{i18n.language || 'UZ'}</span>
        </button>
      </div>

    </header>
  );
}