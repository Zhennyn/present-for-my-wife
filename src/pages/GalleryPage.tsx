
import React from 'react';
import { Image as ImageIcon, Plus } from 'lucide-react'; // Adicionado o ícone Plus
import { Button } from '@/components/ui/button'; // Importando o componente Button

const GalleryPage: React.FC = () => {
  const handleAddPhotoClick = () => {
    // Futuramente, esta função poderá abrir um modal de upload
    // ou interagir com um sistema de gerenciamento de imagens.
    // Por agora, vamos apenas simular uma ação.
    alert("Funcionalidade de adicionar fotos em desenvolvimento! \nVocê pode me enviar as imagens para que eu as adicione manualmente por enquanto.");
    console.log("Botão 'Adicionar Foto' clicado.");
  };

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
      <div className="mt-8">
        <Button 
          onClick={handleAddPhotoClick}
          className="bg-custom-vinho hover:bg-custom-vinho-light text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300 flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Adicionar Foto
        </Button>
        <p className="text-xs text-gray-500 mt-2">
          (Para adicionar fotos ao código, envie-as para mim!)
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;
