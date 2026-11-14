import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Globe, ShieldCheck, Users, Cpu, Clock, Signal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();

    // 1. BURGER MENYU HOLATI
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // 2. JONLI SOAT (UTC va MET) UCHUN HOLAT
    const [time, setTime] = useState(new Date());

    // Har 1 soniyada soatni yangilab turish
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'uz' ? 'en' : 'uz');
    };

    const navLinks = [
        { name: t('nav_bio'), icon: <Cpu size={20} /> },
        { name: t('nav_telemetry'), icon: <Activity size={20} /> },
        { name: t('nav_crew'), icon: <Users size={20} /> },
        { name: t('nav_operations'), icon: <Globe size={20} /> },
    ];

    return (
        // DARK (Qora) dizaynning eng yuqori qobig'i
        <header className="bg-[#070b14] border-b-2 border-neon-cyan/30 sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,240,255,0.1)]">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* LOGOTIP QISMI (Harflar kattalashtirildi) */}
                    <div className="flex-shrink-0 flex flex-col justify-center">
                        <h1 className="text-neon-cyan font-extrabold text-2xl md:text-3xl tracking-widest uppercase shadow-neon-cyan">
                            {t('title')}
                        </h1>
                        <p className="text-space-text text-xs md:text-sm tracking-[0.25em] uppercase hidden sm:block">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* DESKTOP MENYU (Harflar kattalashtirildi: text-base) */}
                    <nav className="hidden xl:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex items-center gap-2 text-base font-bold text-space-text hover:text-neon-cyan transition-colors"
                            >
                                {link.icon}
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* O'NG QISM: SOATLAR, STATUS VA BURGER */}
                    <div className="flex items-center gap-6">

                        {/* JONLI TELEMETRIYA VA SOATLAR (Faqat kompyuterda) */}
                        <div className="hidden lg:flex items-center gap-6 border-r border-space-text/20 pr-6">
                            {/* Aloqa Statusi */}
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-space-text">JONLI TELEMETRIYA</span>
                                <span className="flex items-center gap-1 text-neon-green text-sm font-bold">
                                    <Signal size={14} /> ONLINE 8.2 kbps
                                </span>
                            </div>

                            {/* Missiya Vaqti (MET) */}
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-space-text uppercase">MET (Missiya Vaqti)</span>
                                <span className="text-neon-cyan text-sm font-mono font-bold">
                                    T+04d {time.toLocaleTimeString('en-GB')}
                                </span>
                            </div>

                            {/* UTC Vaqti */}
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-space-text">UTC CASBUS</span>
                                <span className="text-white text-sm font-mono flex items-center gap-1">
                                    <Clock size={14} className="text-space-text" />
                                    {time.getUTCHours().toString().padStart(2, '0')}:{time.getUTCMinutes().toString().padStart(2, '0')}:{time.getUTCSeconds().toString().padStart(2, '0')} UTC
                                </span>
                            </div>
                        </div>

                        {/* Tizim Statusi */}
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green rounded text-neon-green text-sm font-bold shadow-[0_0_10px_rgba(0,255,157,0.2)]">
                            <ShieldCheck size={18} />
                            {t('system_status')}
                        </div>

                        {/* Til almashtirish tugmasi */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-white font-bold border border-space-text/50 hover:border-neon-cyan px-3 py-1.5 rounded text-sm transition-all"
                        >
                            <Globe size={18} />
                            {i18n.language.toUpperCase()}
                        </button>

                        {/* BURGER TUGMA (Ishlaydigan qilib to'g'rilandi) */}
                        <button
                            className="xl:hidden text-white hover:text-neon-cyan bg-space-text/10 p-2 rounded"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>

                    </div>
                </div>
            </div>

            {/* 1. ISHLAYDIGAN MOBIL BURGER MENYU */}
            {isMobileMenuOpen && (
                <div className="xl:hidden bg-[#070b14] border-b-2 border-neon-cyan/50 absolute w-full left-0 top-[80px] shadow-2xl z-50">
                    <div className="px-6 py-4 space-y-4 flex flex-col">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex items-center gap-4 text-lg font-bold text-white hover:text-neon-cyan bg-white/5 p-3 rounded-md transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)} // Bosganda menyu yopiladi
                            >
                                {link.icon}
                                {link.name}
                            </a>
                        ))}
                        {/* Mobil uchun jonli soat va status */}
                        <div className="mt-4 pt-4 border-t border-gray-700 flex flex-col gap-3">
                            <div className="flex items-center gap-2 px-4 py-3 bg-neon-green/10 text-neon-green text-base font-bold rounded">
                                <ShieldCheck size={20} />
                                {t('system_status')}
                            </div>
                            <div className="text-neon-cyan font-mono text-center text-lg mt-2">
                                MET: T+04d {time.toLocaleTimeString('en-GB')}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}