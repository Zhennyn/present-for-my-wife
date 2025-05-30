
import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Importando componentes do Carrossel

const placeholderImages = [
  {
    src: "/images/Foto1.jpg",
    alt: "",
    caption: "",
  },
  {
    src: "/images/Foto2.jpg",
    alt: "",
    caption: "",
  },
  {
    src: "/images/Foto3.jpg",
    alt: "",
    caption: "",
  },
  {
    src: "/images/Foto4.jpg",
    alt: "",
    caption: "",
  },
  {
    src: "/images/Foto5.jpg",
    alt: "",
    caption: "",
  },
  {
    src: "/images/Foto6.jpg",
    alt: "",
    caption: "",
  },
  {
    src: "/images/Foto7.jpg",
    alt: "",
    caption: "",
  },
];


const GalleryPage: React.FC = () => {
  return (
    <div className="text-center py-10 min-h-[calc(100vh-200px)] flex flex-col justify-center items-center px-4">
      <ImageIcon className="w-20 h-20 sm:w-24 sm:h-24 text-custom-vinho-light mx-auto mb-6" />
      <h1 className="text-4xl sm:text-5xl font-dancing-script text-custom-vinho mb-4">Galeria de Memórias</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        Aqui estão alguns exemplos de momentos que podemos guardar. Em breve, este espaço estará repleto das nossas próprias recordações inesquecíveis!
      </p>
      
      <div className="w-full max-w-2xl mb-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {placeholderImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <div className="bg-white/70 backdrop-blur-sm shadow-xl rounded-lg border border-custom-vinho/20 overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 sm:h-80 object-cover aspect-video" 
                    />
                    {image.caption && (
                       <p className="p-3 text-sm text-custom-vinho font-semibold bg-custom-rose-light/30">{image.caption}</p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12 sm:ml-8 bg-custom-vinho/50 hover:bg-custom-vinho/80 text-white border-custom-vinho-light" />
          <CarouselNext className="mr-12 sm:mr-8 bg-custom-vinho/50 hover:bg-custom-vinho/80 text-white border-custom-vinho-light" />
        </Carousel>
      </div>

      <div className="w-full max-w-md p-6 sm:p-8 bg-white/70 backdrop-blur-sm shadow-xl rounded-lg border border-custom-vinho/20">
        <p className="font-great-vibes text-xl sm:text-2xl text-custom-vinho">
          "Cada foto, uma história de amor a ser contada por nós."
        </p>
      </div>
       <p className="text-xs text-gray-500 mt-6">
          Você pode me enviar as fotos que deseja adicionar, e eu as colocarei aqui!
        </p>
    </div>
  );
};

export default GalleryPage;
