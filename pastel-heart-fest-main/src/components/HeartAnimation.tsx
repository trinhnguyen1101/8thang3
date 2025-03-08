import React, { useEffect, useState } from 'react';
import { Heart, Sparkle, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeartAnimationProps {
  onClick: () => void;
  visible: boolean;
}

const HeartAnimation: React.FC<HeartAnimationProps> = ({ onClick, visible }) => {
  const [sparkles, setSparkles] = useState<React.ReactNode[]>([]);
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (!visible) {
      setSparkles([]);
      setStars([]);
      return;
    }

    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 18; i++) {
        const left = 50 + 45 * Math.cos(i * Math.PI / 9);
        const top = 50 + 45 * Math.sin(i * Math.PI / 9);
        const delay = i * 0.15;
        const size = Math.random() * 0.6 + 0.8;
        
        newSparkles.push(
          <Sparkle
            key={i}
            className="absolute text-yellow-300 animate-sparkle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              transform: `scale(${size})`,
              opacity: 0
            }}
            size={28}
          />
        );
      }
      
      for (let i = 0; i < 12; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 60 + 20;
        const left = 50 + distance * Math.cos(angle);
        const top = 50 + distance * Math.sin(angle);
        const delay = Math.random() * 2;
        const size = Math.random() * 0.7 + 0.6;
        
        newSparkles.push(
          <Sparkle
            key={`random-${i}`}
            className="absolute text-yellow-300 animate-sparkle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              transform: `scale(${size})`,
              opacity: 0
            }}
            size={24}
          />
        );
      }
      
      return newSparkles;
    };
    
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 70 + 30;
        const left = 50 + distance * Math.cos(angle);
        const top = 50 + distance * Math.sin(angle);
        const delay = Math.random() * 3;
        const size = Math.random() * 0.5 + 0.4;
        const color = ['#FFC0D3', '#FFD700', '#FEF7CD'][Math.floor(Math.random() * 3)];
        
        newStars.push(
          <Star
            key={i}
            fill={color}
            className="absolute animate-pulse"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              transform: `scale(${size})`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.8
            }}
            size={20}
          />
        );
      }
      return newStars;
    };

    setSparkles(generateSparkles());
    setStars(generateStars());
    
    const interval = setInterval(() => {
      setSparkles(generateSparkles());
    }, 3000);
    
    const starsInterval = setInterval(() => {
      setStars(generateStars());
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(starsInterval);
    };
  }, [visible]);

  return (
    <div 
      className={cn(
        "heart-container",
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0",
        "transition-all duration-700 ease-in-out cursor-pointer"
      )}
      onClick={onClick}
    >
      <Heart 
        className="heart animate-heartbeat" 
        fill="#FF85A1" 
        strokeWidth={1.5} 
        size={320}
      />
      
      <Heart 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 animate-pulse" 
        fill="#FFD700" 
        stroke="#FF85A1"
        strokeWidth={0.5}
        size={340}
        style={{animationDuration: '4s'}}
      />
      
      {[...Array(8)].map((_, i) => (
        <Heart 
          key={i} 
          className="absolute opacity-70"
          style={{
            left: `${Math.random() * 140 - 20}%`,
            top: `${Math.random() * 140 - 20}%`,
            transform: `scale(${Math.random() * 0.5 + 0.3})`,
            animation: `float ${Math.random() * 3 + 4}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`
          }}
          fill={['#FF85A1', '#FFC0D3', '#FFD700'][Math.floor(Math.random() * 3)]}
          size={100}
          strokeWidth={1}
        />
      ))}
      
      {stars}
      
      {sparkles}
      
      <div className="absolute left-1/2 -bottom-20 transform -translate-x-1/2 text-2xl text-celebration-accent">
        <ArrowRight 
          size={42} 
          className="animate-bounce-horizontal" 
          style={{
            transform: 'rotate(-45deg)',
            color: '#FF85A1',
            filter: 'drop-shadow(0 0 5px rgba(255, 133, 161, 0.7))'
          }}
        />
      </div>
      
      <div className="absolute left-1/2 top-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">

        <div className="absolute inset-0 rounded-full border-4 border-dotted border-yellow-300/30 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
      </div>
      
      <div className="absolute left-1/2 top-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-celebration-accent/30 blur-xl animate-pulse" />
      <div className="absolute left-1/2 top-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-200/40 blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute left-1/2 top-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-200/20 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      
      <div className="absolute left-1/2 top-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-pink-200/60 animate-ping" style={{ animationDuration: '3s' }} />
    </div>
  );
};

export default HeartAnimation;
