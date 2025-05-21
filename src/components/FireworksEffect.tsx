
import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface FireworkSparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const colors = ['#FFD700', '#FF69B4', '#00BFFF', '#FF1493', '#32CD32', '#FF4500', '#9370DB', '#ADFF2F'];

const FireworksEffect: React.FC<{ count?: number }> = ({ count = 50 }) => {
  const [sparkles, setSparkles] = useState<FireworkSparkle[]>([]);

  useEffect(() => {
    const newSparkles: FireworkSparkle[] = [];
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < count; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * viewportWidth, 
        y: Math.random() * viewportHeight,
        size: Math.random() * 18 + 8, // 8px to 26px
        delay: Math.random() * 1.5, // 0 to 1.5s delay
        duration: Math.random() * 1.5 + 0.8, // 0.8s to 2.3s duration
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setSparkles(newSparkles);
  }, [count]);

  if (!sparkles.length) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {sparkles.map(sparkle => (
        <Sparkles
          key={sparkle.id}
          className="absolute animate-firework-sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            color: sparkle.color,
            // CSS variables for animation properties defined in tailwind.config.ts
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
          absoluteStrokeWidth
        />
      ))}
    </div>
  );
};

export default FireworksEffect;
