
import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { HeartPulse, Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  // Data do aniversário: 22/02. Vamos assumir um ano inicial, por exemplo, 2023.
  // Se for apenas para mostrar dias desde o último 22/02, a lógica precisa ser ajustada.
  // Para "estamos juntos há X dias...", precisamos de uma data de início.
  const anniversaryStartDate = new Date('2023-02-22T00:00:00'); // Ajuste esta data para o início real do namoro

  const calculateTimeTogether = () => {
    const now = new Date();
    const days = differenceInDays(now, anniversaryStartDate);
    const hours = differenceInHours(now, anniversaryStartDate) % 24;
    const minutes = differenceInMinutes(now, anniversaryStartDate) % 60;
    const seconds = differenceInSeconds(now, anniversaryStartDate) % 60;
    return { days, hours, minutes, seconds };
  };

  const [timeTogether, setTimeTogether] = useState(calculateTimeTogether());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeTogether(calculateTimeTogether());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-lg p-6 sm:p-8 my-8 text-center animate-fade-in-up border border-custom-vinho/20">
      <div className="flex items-center justify-center mb-4">
        <Clock className="w-8 h-8 text-custom-vinho mr-3" />
        <h2 className="text-3xl sm:text-4xl font-dancing-script text-custom-vinho">Nosso Tempo Juntos</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-custom-vinho-light">
        <div className="p-4 bg-custom-rose-light/50 rounded-lg shadow">
          <div className="text-4xl sm:text-5xl font-bold">{timeTogether.days}</div>
          <div className="text-sm sm:text-base">Dias</div>
        </div>
        <div className="p-4 bg-custom-rose-light/50 rounded-lg shadow">
          <div className="text-4xl sm:text-5xl font-bold">{timeTogether.hours}</div>
          <div className="text-sm sm:text-base">Horas</div>
        </div>
        <div className="p-4 bg-custom-rose-light/50 rounded-lg shadow">
          <div className="text-4xl sm:text-5xl font-bold">{timeTogether.minutes}</div>
          <div className="text-sm sm:text-base">Minutos</div>
        </div>
        <div className="p-4 bg-custom-rose-light/50 rounded-lg shadow">
          <div className="text-4xl sm:text-5xl font-bold">{timeTogether.seconds}</div>
          <div className="text-sm sm:text-base">Segundos</div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center text-custom-vinho">
        <HeartPulse className="w-6 h-6 mr-2 animate-pulse" />
        <p className="font-great-vibes text-2xl">... e contando cada momento!</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
