import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { HeartPulse, Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  // Data do aniversário: 22/02.
  // Ajustada para a data de início correta do namoro.
  const anniversaryStartDate = new Date('2025-02-22T00:00:00'); 

  const calculateTimeTogether = () => {
    const now = new Date();
    // Lógica para calcular a diferença de tempo
    // Se a data de início for no futuro, os valores serão negativos.
    // Podemos ajustar para mostrar "Faltam X dias" ou similar,
    // mas por agora, vamos manter a contagem progressiva a partir da data.
    // Se 'now' for anterior a 'anniversaryStartDate', differenceInDays retornará um número negativo.
    // Para um contador de "tempo juntos", a data de início deve ser no passado.
    // Se a intenção é uma contagem regressiva para 22/02/2025, a lógica precisa mudar.
    // Assumindo que 22/02/2025 é o *início* e queremos contar *a partir daí*:
    // Se a data atual for ANTES de 22/02/2025, os dias serão 0 ou negativos.
    // Para o cenário "estamos juntos há X dias" a partir de 22/02/2025,
    // esta lógica só fará sentido APÓS 22/02/2025.
    // Por enquanto, vou manter a data, e o contador mostrará valores negativos ou zero se hoje for antes de 22/02/2025.
    // Ou, se a intenção era "faltam X dias para 22/02/2025", a lógica seria `differenceInDays(anniversaryStartDate, now)`.
    // Vou assumir que a data de início é 22/02/2025, e o contador é de tempo *decorrido*.
    // Para o presente momento (Maio de 2025), a data 22/02/2025 já passou.
    
    const days = differenceInDays(now, anniversaryStartDate);
    const hours = differenceInHours(now, anniversaryStartDate) % 24;
    const minutes = differenceInMinutes(now, anniversaryStartDate) % 60;
    const seconds = differenceInSeconds(now, anniversaryStartDate) % 60;
    
    // Garante que não mostramos valores negativos se a data de início for no futuro longínquo
    // ou se houver algum erro mínimo de cálculo que gere negativo para horas/minutos/segundos.
    return {
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
    };
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
