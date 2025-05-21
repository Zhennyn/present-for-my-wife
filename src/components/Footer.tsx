
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-rose-light/30 text-custom-vinho py-8 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="font-dancing-script text-xl mb-2">
          Feito com todo o amor do mundo, para nós.
        </p>
        <div className="flex justify-center items-center">
          <Heart className="w-5 h-5 text-red-500 animate-pulse" />
        </div>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Nosso Amor. Todos os momentos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
