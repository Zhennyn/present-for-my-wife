
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const reasonsToLove = [
  "Seu sorriso",
  "Sua felicidade",
  "Seus olhos",
  "Sua boca",
  "Seu carisma",
  "Sua coragem",
  "Seu jeitinho de ser",
  "Seu abraço",
  "Seu beijo",
  "Seu cuidado",
];

const ReasonsPage: React.FC = () => {
  const [displayedReasons, setDisplayedReasons] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < reasonsToLove.length) {
        setDisplayedReasons((prevReasons) => [...prevReasons, reasonsToLove[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 1000); // Adiciona um novo motivo a cada 1 segundo

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div className="text-center py-10 min-h-[calc(100vh-200px)] flex flex-col justify-center items-center">
      <Heart className="w-24 h-24 text-red-500 mx-auto mb-6 animate-pulse" />
      <h1 className="text-4xl sm:text-5xl font-dancing-script text-custom-vinho mb-4">Motivos Pelos Quais Te Amo</h1>
      
      {displayedReasons.length === 0 && (
        <p className="text-lg text-gray-700 mb-8">
          A lista é infinita, mas aqui estarão alguns dos meus favoritos...
        </p>
      )}

      <div className="w-full max-w-md p-6 sm:p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-lg border border-custom-vinho/20">
        {displayedReasons.length > 0 ? (
          <ul className="space-y-3 text-left">
            {displayedReasons.map((reason, index) => (
              <li 
                key={index} 
                className="font-great-vibes text-2xl text-custom-vinho-light animate-fade-in-up flex items-center"
                style={{ animationDelay: `${index * 0.1}s` }} // Pequeno atraso para efeito cascata sutil, além do delay do useEffect
              >
                <Heart className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                {reason}
              </li>
            ))}
          </ul>
        ) : (
           <p className="font-great-vibes text-2xl text-custom-vinho animate-pulse">
            Carregando motivos especiais...
          </p>
        )}
         {displayedReasons.length === reasonsToLove.length && (
           <p className="font-great-vibes text-xl text-custom-vinho mt-6 pt-4 border-t border-custom-vinho/20">
            ... e muitos mais!
          </p>
         )}
      </div>
       {displayedReasons.length < reasonsToLove.length && displayedReasons.length > 0 && (
         <div className="w-full max-w-md mt-4">
            <div className="h-2 bg-custom-rose-light rounded-full overflow-hidden">
              <div 
                className="h-full bg-custom-vinho transition-all duration-1000 ease-linear" 
                style={{ width: `${(displayedReasons.length / reasonsToLove.length) * 100}%` }}
              ></div>
            </div>
          </div>
       )}
    </div>
  );
};

export default ReasonsPage;

