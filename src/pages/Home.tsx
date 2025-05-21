
import React from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import { Gift } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 min-h-[calc(100vh-200px)]"> {/* Ajustar altura para layout */}
      <div className="animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-dancing-script text-custom-vinho mb-6">
          Desde 22/02,
        </h1>
        <p className="font-great-vibes text-3xl md:text-5xl text-custom-vinho-light mb-10">
          meu coração tem um endereço fixo: <span className="text-custom-vinho font-bold">você.</span>
        </p>
      </div>
      
      <CountdownTimer />

      <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <p className="text-xl text-gray-700 mb-4">
          Este é um cantinho especial, criado com todo carinho para celebrar nosso amor e nossas memórias.
        </p>
        <Gift className="w-12 h-12 text-custom-vinho mx-auto animate-pulse" />
      </div>
    </div>
  );
};

export default Home;
