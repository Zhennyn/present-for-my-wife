
import React from 'react';
import { Heart } from 'lucide-react';

const ReasonsPage: React.FC = () => {
  return (
    <div className="text-center py-10 min-h-[calc(100vh-200px)] flex flex-col justify-center items-center">
      <Heart className="w-24 h-24 text-red-500 mx-auto mb-6 animate-pulse" />
      <h1 className="text-4xl sm:text-5xl font-dancing-script text-custom-vinho mb-4">Motivos Pelos Quais Te Amo</h1>
      <p className="text-lg text-gray-700 mb-8">
        A lista é infinita, mas aqui estarão alguns dos meus favoritos... em breve!
      </p>
      <div className="w-full max-w-md p-8 bg-white/70 backdrop-blur-sm shadow-xl rounded-lg border border-custom-vinho/20">
        <p className="font-great-vibes text-2xl text-custom-vinho">
          "Você é a razão do meu sorriso."
        </p>
      </div>
    </div>
  );
};

export default ReasonsPage;
