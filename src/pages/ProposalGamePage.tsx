import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import FireworksEffect from '@/components/FireworksEffect';
import { Heart } from 'lucide-react';

const ProposalGamePage: React.FC = () => {
  const [proposalAccepted, setProposalAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '65%' });
  const [showFireworks, setShowFireworks] = useState(false);
  const [noButtonScale, setNoButtonScale] = useState(1);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  const handleYesClick = () => {
    setProposalAccepted(true);
    setShowFireworks(true);
  };

  const handleNoHover = () => {
    if (!gameAreaRef.current || proposalAccepted) return;
    const gameAreaRect = gameAreaRef.current.getBoundingClientRect();
    
    const buttonWidth = 100; // Approximate width of the "No" button
    const buttonHeight = 44; // Approximate height of the "No" button

    // Calculate max positions to keep button within gameArea bounds
    const maxX = gameAreaRect.width - buttonWidth;
    const maxY = gameAreaRect.height - buttonHeight;

    const newLeft = Math.max(0, Math.random() * maxX);
    const newTop = Math.max(0, Math.random() * maxY);
    
    setNoButtonPosition({
      top: `${newTop}px`,
      left: `${newLeft}px`,
    });
    // Make the "No" button smaller each time it's hovered to make it harder
    setNoButtonScale(prevScale => Math.max(0.3, prevScale * 0.95));
  };
  
  const handleNoClick = () => {
    // This is mostly for fun, as hovering should move it
    alert("Você é persistente! Mas a resposta certa é 'Sim' 😉 Tente de novo!");
    handleNoHover(); // Move it again
  };

  return (
    <div className="text-center py-10 min-h-[calc(100vh-200px)] flex flex-col justify-center items-center relative">
      {/* Fireworks will cover the screen, so it's rendered at top level with fixed positioning */}
      {showFireworks && <FireworksEffect />}

      <div className="relative z-10 flex flex-col items-center"> {/* Content container */}
        {!proposalAccepted ? (
          <>
            <Heart className="w-20 h-20 sm:w-24 sm:h-24 text-custom-vinho mx-auto mb-6 animate-pulse" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-dancing-script text-custom-vinho mb-6 sm:mb-8">
              Uma pergunta muito especial...
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-great-vibes text-custom-vinho-light mb-10 sm:mb-12">
              Quer namorar comigo?
            </p>
            
            <div ref={gameAreaRef} className="relative w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] border border-custom-vinho/30 rounded-lg p-4 bg-white/50 backdrop-blur-sm shadow-lg">
              <Button
                onClick={handleYesClick}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-md text-lg sm:text-xl absolute transition-transform hover:scale-105"
                style={{ top: '50%', left: '35%', transform: 'translate(-50%, -50%)' }}
              >
                Sim! <Heart className="ml-2 w-4 h-4 sm:w-5 sm:h-5 fill-white inline-block" />
              </Button>
              <Button
                onMouseEnter={handleNoHover}
                onClick={handleNoClick}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-md text-lg sm:text-xl absolute transition-all duration-150 ease-out"
                style={{ 
                  top: noButtonPosition.top, 
                  left: noButtonPosition.left,
                  transform: `translate(-50%, -50%) scale(${noButtonScale})`,
                  transformOrigin: 'center center',
                }}
              >
                Não
              </Button>
            </div>
            <p className="mt-6 text-sm text-custom-vinho-light font-sans">
              (Psst: O "Não" é um pouco fujão!)
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <Heart className="w-28 h-28 sm:w-32 sm:h-32 text-red-500 mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-dancing-script text-custom-vinho mb-6">
              Siiim! Eu te amo!
            </h1>
            <p className="font-great-vibes text-2xl sm:text-3xl text-custom-vinho-light mb-4">
              Começa aqui o nosso para sempre.
            </p>
            <Button
              onClick={() => {
                setShowFireworks(false); // Stop current fireworks
                setProposalAccepted(false);
                setNoButtonPosition({ top: '50%', left: '65%' });
                setNoButtonScale(1);
                // Trigger fireworks again on next "yes"
              }}
              className="mt-8 bg-custom-vinho hover:bg-custom-vinho-light text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-transform hover:scale-105"
            >
              Reviver o momento?
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalGamePage;
