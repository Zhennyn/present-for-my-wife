
import React from 'react';
import { Icon as LucideIconType } from 'lucide-react';

interface TimelineItemProps {
  icon: LucideIconType;
  IconComponent?: LucideIconType; // Para casos onde o ícone é passado como componente
  title: string;
  description: string;
  date?: string; // Opcional
  isOdd: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon: Icon, IconComponent, title, description, date, isOdd }) => {
  const ActualIcon = IconComponent || Icon;
  return (
    <div className={`mb-8 flex justify-between items-center w-full ${isOdd ? 'flex-row-reverse' : ''}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-custom-vinho shadow-xl w-12 h-12 rounded-full sm:w-16 sm:h-16">
        <ActualIcon className="mx-auto text-white w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <div className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-4 py-5 sm:px-6 sm:py-4 animate-fade-in-up border border-custom-vinho/20 ${isOdd ? 'text-right' : 'text-left'}`}>
        {date && <p className="mb-2 text-sm text-custom-vinho-light font-semibold">{date}</p>}
        <h3 className="mb-2 font-bold text-custom-vinho text-lg sm:text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
