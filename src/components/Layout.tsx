
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-rose">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8">
        <Outlet /> {/* O conteúdo da página específica será renderizado aqui */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
