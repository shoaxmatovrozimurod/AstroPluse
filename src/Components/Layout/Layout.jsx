import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'; // Sizning papka tuzilishingizga ko'ra
// import Footer from '../Footer/Footer'; // Footer yaratgach shuni ochib qo'yasiz

export default function Layout() {
  return (
    <div className="min-h-screen bg-space-dark flex flex-col">
      {/* Tepa qism (Doimiy) */}
      <Header />
      
      {/* O'zgarib turuvchi asosiy qism (Sahifalar shu yerda ochiladi) */}
      <main className="flex-1 p-4 md:p-6 text-white font-mono overflow-auto">
        <Outlet /> 
      </main>

      {/* Pastki qism (Doimiy) */}
      {/* <Footer /> */}
    </div>
  );
}