
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CalendarHeart, Image, Star, PartyPopper, Music2 } from 'lucide-react'; // Ícones representando as seções // PartyPopper adicionado

const navItems = [
  { name: 'Início', path: '/', icon: Home },
  { name: 'Nossa História', path: '/timeline', icon: CalendarHeart },
  { name: 'Memórias', path: '/gallery', icon: Image },
  { name: 'Eu Te Amo Por...', path: '/reasons', icon: Star },
  { name: 'Jogo do Pedido', path: '/proposal-game', icon: PartyPopper }, // Alterado de Cápsula do Tempo para Jogo do Pedido
  // { name: 'Nossa Música', path: '/music', icon: Music2 }, // Bônus, adicionar depois
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-custom-vinho/10 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="text-custom-vinho hover:text-custom-vinho-light transition-colors duration-300">
          <h1 className="text-3xl font-great-vibes">Nosso Amor</h1>
        </Link>
        <ul className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-3 py-2 text-sm sm:text-base rounded-md transition-all duration-300 ease-in-out group
                  ${location.pathname === item.path 
                    ? 'text-custom-vinho font-semibold scale-105' 
                    : 'text-gray-700 hover:text-custom-vinho hover:bg-custom-rose-light/50'
                  }`}
              >
                <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 mr-1.5 transition-transform duration-300 ${location.pathname === item.path ? 'scale-110 text-custom-vinho' : 'text-gray-500 group-hover:text-custom-vinho'}`} />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
