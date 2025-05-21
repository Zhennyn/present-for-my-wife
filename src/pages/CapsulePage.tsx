
import React from 'react';
import { PackageOpen } from 'lucide-react';

const CapsulePage: React.FC = () => {
  return (
    <div className="text-center py-10 min-h-[calc(100vh-200px)] flex flex-col justify-center items-center">
       <PackageOpen className="w-24 h-24 text-custom-vinho-light mx-auto mb-6" />
      <h1 className="text-4xl sm:text-5xl font-dancing-script text-custom-vinho mb-4">Cápsula do Tempo</h1>
      <p className="text-lg text-gray-700 mb-8">
        Um lugar para guardarmos mensagens para o nosso "eu" do futuro. (Funcionalidade em construção!)
      </p>
      <div className="w-full max-w-md p-8 bg-white/70 backdrop-blur-sm shadow-xl rounded-lg border border-custom-vinho/20">
        <p className="font-great-vibes text-2xl text-custom-vinho">
          "Memórias para serem redescobertas."
        </p>
      </div>
    </div>
  );
};

export default CapsulePage;
