
import React from 'react';
import TimelineItem from '@/components/TimelineItem';
import { Coffee, Youtube, Home, Smile, Film, Sparkles } from 'lucide-react';

const timelineEvents = [
  {
    icon: Coffee,
    title: "Onde Tudo Começou ☕🎮",
    description: "Nos conhecemos numa live, um emoji de café foi o cupido! Dali para o Minecraft foi um pulo (ou um bloco).",
    date: "Início de Tudo"
  },
  {
    icon: Youtube, // Usando Youtube como genérico para videochamada
    title: "Primeira Videochamada 📹😂",
    description: "A vergonha era grande, mas as risadas foram maiores. Aquele 'oi' tímido que mudou tudo.",
    date: "Primeiros Contatos"
  },
  {
    icon: Home,
    title: "Primeira Visita 🏠💖",
    description: "Ansiedade a mil, riso nervoso e a certeza de uma conexão que ia além da tela.",
    date: "Nosso Primeiro Encontro"
  },
  {
    icon: Film,
    title: "Cinema: Minecraft 🎬😊",
    description: "Ver o filme do nosso jogo e, mais importante, ver o seu sorriso que vale o mundo.",
    date: "Um Dia Especial"
  },
  {
    icon: Sparkles,
    title: "Sua Visita Recente ✨🥰",
    description: "A surpresa, a felicidade transbordando, a vontade de te rodopiar e guardar num potinho.",
    date: "Momentos Mágicos"
  },
];

const TimelinePage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl sm:text-5xl font-dancing-script text-custom-vinho text-center mb-12">
        Nossa Linha do Tempo do Amor
      </h1>
      <div className="relative wrap overflow-hidden p-4 sm:p-10 h-full">
        {/* Linha vertical central */}
        <div className="absolute border-opacity-20 border-custom-vinho-light h-full border" style={{left: '50%', border: '2px solid hsl(var(--primary) / 0.5)' }}></div>

        {timelineEvents.map((event, index) => (
          <TimelineItem
            key={index}
            icon={event.icon}
            title={event.title}
            description={event.description}
            date={event.date}
            isOdd={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
