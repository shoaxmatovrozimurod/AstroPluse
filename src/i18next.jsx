
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uzTranslation from './locales/uz.json';
import enTranslation from './locales/en.json';

const resources = {
  uz: { translation: uzTranslation },
  en: { translation: enTranslation }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", 
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;