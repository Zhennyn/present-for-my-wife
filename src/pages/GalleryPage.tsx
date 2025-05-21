
import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const GalleryPage: React.FC = () => {
  return (
    <div className="text-center py-10 min-h-[calc(100vh-200px)] flex flex-col justify-center items-center">
      <ImageIcon className="w-24 h-24 text-custom-vinho-light mx-auto mb-6" />
      <h1 className="text-4xl sm:text-5xl font-dancing-script text-custom-vinho mb-4">Galeria de Memórias</h1>
      <p className="text-lg text-gray-700 mb-8">
        Em breve, nosso álbum de momentos inesquecíveis estará aqui!
      </p>
      <div className="w-full max-w-md p-8 bg-white/70 backdrop-blur-sm shadow-xl rounded-lg border border-custom-vinho/20">
        <p className="font-great-vibes text-2xl text-custom-vinho">
          "Cada foto, uma história de amor."
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;
