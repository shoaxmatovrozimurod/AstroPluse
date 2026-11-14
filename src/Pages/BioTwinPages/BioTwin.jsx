import React, { useState } from 'react';
import { UserSearch, PlusCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function BioTwin() {
    const { t } = useTranslation();
    const [selectedCrew, setSelectedCrew] = useState(2);

    const crewMembers = [
        {
            id: 1, name: "Eldor", callsign: "Titan-Wrench", rank: "Mayor (37)", blood: "A(II) Rh+",
            role: t('crew_1_role'), vo2: "53", gTol: "8.4", mass: "47.5", height: "185",
            skills: t('crew_1_skills', { returnObjects: true })
        },
        {
            id: 2, name: "Jasur", callsign: "Ares-Vanguard", rank: "Mayor (34)", blood: "O(I) Rh+",
            role: t('crew_2_role'), vo2: "59.5", gTol: "7.5", mass: "42", height: "179",
            skills: t('crew_2_skills', { returnObjects: true })
        },
        {
            id: 3, name: "Muhammadziyo", callsign: "Aura-Doc", rank: "Podpolkovnik (31)", blood: "A(II) Rh+",
            role: t('crew_3_role'), vo2: "54", gTol: "6.2", mass: "38.6", height: "176",
            skills: t('crew_3_skills', { returnObjects: true })
        },
        {
            id: 4, name: "Shohruxmirzo", callsign: "Falcon-Eye", rank: "Kapitan (29)", blood: "AB(IV) Rh+",
            role: t('crew_4_role'), vo2: "56", gTol: "8", mass: "37.9", height: "175",
            skills: t('crew_4_skills', { returnObjects: true })
        }
    ];

    // Yangi astronavt qo'shish funksiyasi (Hozircha faqat konsolga chiqaradi)
    const handleAddNewCrew = () => {
        console.log("Yangi astronavt qo'shish oynasi ochilishi kerak!");
        // Kelajakda bu yerga Modal oyna ochish logikasi qo'shiladi
    };

    return (
        // Asosiy konteyner kengligini to'liq ekran qilamiz
        <div className="w-full flex flex-col gap-6 p-4 max-w-[100vw] overflow-hidden">

            {/* Sarlavha */}
            <div className="border-l-4 border-neon-cyan pl-4 bg-neon-cyan/5 p-4 rounded-r-md">
                <h2 className="flex items-center gap-2 text-neon-cyan font-bold tracking-widest uppercase text-base md:text-lg">
                    <UserSearch size={22} />
                    {t('step_1')}
                </h2>
                <p className="text-space-text text-sm mt-2 tracking-wide">
                    {t('step_1_desc')}
                </p>
            </div>

            {/* 
        Kartochkalar (Gorizontal Karusel / Scroll) 
        - flex va gap yordamida yonma-yon qo'yildi
        - overflow-x-auto bilan faqat shu qismning o'zi scroll bo'ladi
        - pb-4 scrollbar chizig'i kartochkani yopib qolmasligi uchun
      */}
            <div className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory hide-scrollbar">
                {crewMembers.map((member) => {
                    const isSelected = selectedCrew === member.id;
                    const safeSkills = Array.isArray(member.skills) ? member.skills : [];

                    return (
                        // flex-shrink-0 kartochka ezilib qolmasligini ta'minlaydi
                        <div
                            key={member.id}
                            onClick={() => setSelectedCrew(member.id)}
                            className={`flex-shrink-0 w-[300px] md:w-[350px] p-5 rounded-lg cursor-pointer transition-all duration-300 relative flex flex-col snap-center bg-[#0b0f19]
                ${isSelected
                                    ? 'border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                                    : 'border border-space-text/20 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                                }
              `}
                        >
                            <div className="flex justify-between items-start mb-5">
                                <div>
                                    <h3 className="text-white font-bold text-xl">{member.name}</h3>
                                    <p className="text-neon-cyan text-xs font-mono mt-1">"{member.callsign}"</p>
                                    <p className="text-space-text text-xs mt-2 line-clamp-2">{member.rank} • {member.role}</p>
                                </div>
                                <div className="bg-red-500/10 border border-red-500/30 px-2 py-1 rounded">
                                    <span className="text-neon-red font-mono text-[10px] font-bold">{member.blood}</span>
                                </div>
                            </div>

                            <div className="space-y-3 font-mono text-[11px] mb-5 border-y border-space-text/10 py-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-space-text">{t('vo2_label')}</span>
                                    <span className="text-white font-bold bg-space-text/5 px-2 py-1 rounded">{member.vo2} ml</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-space-text">{t('gtol_label')}</span>
                                    <span className="text-white font-bold bg-space-text/5 px-2 py-1 rounded">{member.gTol} g</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-space-text">{t('mass_height')}</span>
                                    <span className="text-white font-bold bg-space-text/5 px-2 py-1 rounded">{member.mass} / {member.height}</span>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-2 text-[10px] text-space-text/90">
                                    {safeSkills.map((skill, index) => (
                                        <li key={index} className="bg-white/5 p-2 rounded flex items-start gap-2">
                                            <div className="w-1 h-1 bg-neon-cyan rounded-full mt-1.5 flex-shrink-0"></div>
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6">
                                <button
                                    className={`w-full py-2.5 text-xs font-bold rounded transition-all tracking-widest uppercase
                    ${isSelected
                                            ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                                            : 'bg-space-text/10 text-space-text hover:bg-neon-cyan/20 hover:text-white'
                                        }
                  `}
                                >
                                    {isSelected ? t('btn_selected') : t('btn_select')}
                                </button>
                            </div>
                        </div>
                    )
                })}

                {/* 
           YANGI A'ZO QO'SHISH KARTOCHKASI 
        */}
                <div
                    onClick={handleAddNewCrew}
                    className="flex-shrink-0 w-[300px] md:w-[350px] p-5 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center snap-center bg-space-text/5 border-2 border-dashed border-space-text/30 hover:border-neon-cyan hover:bg-neon-cyan/5 group"
                >
                    <div className="bg-space-text/10 p-4 rounded-full mb-4 group-hover:bg-neon-cyan/20 group-hover:scale-110 transition-transform">
                        <PlusCircle size={40} className="text-space-text group-hover:text-neon-cyan" />
                    </div>
                    <h3 className="text-space-text group-hover:text-white font-bold text-lg text-center tracking-wider">
                        {t('add_new_crew')}
                    </h3>
                    <p className="text-space-text/60 group-hover:text-neon-cyan/70 text-xs mt-2 text-center">
                        {t('add_crew_desc')}
                    </p>
                </div>

            </div>
        </div>
    );
}