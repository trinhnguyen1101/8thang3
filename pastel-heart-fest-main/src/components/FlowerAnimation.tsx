
import React, { useEffect, useState } from 'react';
import { Flower, Sparkle, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlowerAnimationProps {
  onClick: () => void;
  visible: boolean;
}

const FlowerAnimation: React.FC<FlowerAnimationProps> = ({ onClick, visible }) => {
  const [sparkles, setSparkles] = useState<React.ReactNode[]>([]);
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  // Generate sparkles around the flower
  useEffect(() => {
    if (!visible) {
      setSparkles([]);
      setStars([]);
      return;
    }

    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 60 + 30;
        const left = 50 + distance * Math.cos(angle);
        const top = 50 + distance * Math.sin(angle);
        const delay = i * 0.1;
        const size = Math.random() * 0.6 + 0.7;
        
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
            size={24}
          />
        );
      }
      return newSparkles;
    };
    
    // Generate stars for additional decoration
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 80 + 40;
        const left = 50 + distance * Math.cos(angle);
        const top = 50 + distance * Math.sin(angle);
        const delay = Math.random() * 3;
        const size = Math.random() * 0.5 + 0.4;
        const color = ['#9b87f5', '#FFC0D3', '#FFD700', '#FEF7CD'][Math.floor(Math.random() * 4)];
        
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
    
    // Regenerate sparkles every 3 seconds
    const interval = setInterval(() => {
      setSparkles(generateSparkles());
    }, 2500);
    
    // Regenerate stars every 5 seconds
    const starsInterval = setInterval(() => {
      setStars(generateStars());
    }, 4000);
    
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
      {/* Main flower */}
      <div className="relative">
        <Flower 
          className="flower animate-float" 
          fill="#FF85A1" 
          strokeWidth={1.5}
          size={240}
        />
        
        {/* Additional layered flowers for depth */}
        <Flower 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 animate-pulse" 
          fill="#FFD700"
          stroke="#FF85A1"
          strokeWidth={0.5}
          size={260}
          style={{animationDuration: '4s'}}
        />
        
        <Flower 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 animate-pulse" 
          fill="#9b87f5"
          stroke="#FF85A1"
          strokeWidth={0.5}
          size={280}
          style={{animationDuration: '6s', animationDelay: '1s'}}
        />
      </div>
      
      {/* Stars effect */}
      {stars}
      
      {/* Sparkle effects */}
      {sparkles}
      
      {/* Animated arrow pointing to flower */}
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
      
      {/* Rotating background effect with multiple layers */}
      <div className="absolute left-1/2 top-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-celebration-accent/30 animate-spin-slow" />
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-celebration-softPink/50 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
        <div className="absolute inset-0 rounded-full border-2 border-dotted border-yellow-300/40 animate-spin-slow" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-0 rounded-full border-2 border-dotted border-purple-300/40 animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
      </div>
      
      {/* Glowing background */}
      <div className="absolute left-1/2 top-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-celebration-softPink/30 blur-xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute left-1/2 top-1/2 -z-20 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      
      {/* Petals - more of them in a circular pattern */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i} 
          className="absolute left-1/2 top-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-celebration-softPink/60 blur-sm"
          style={{ 
            transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-80px)`,
            animation: `float 3s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}
      
      {/* Small flowers floating around */}
      {[...Array(8)].map((_, i) => (
        <Flower 
          key={`small-flower-${i}`}
          className="absolute opacity-70"
          style={{
            left: `${Math.random() * 140 - 20}%`,
            top: `${Math.random() * 140 - 20}%`,
            transform: `scale(${Math.random() * 0.4 + 0.2}) rotate(${Math.random() * 360}deg)`,
            animation: `float ${Math.random() * 3 + 4}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}
          fill={['#FFC0D3', '#FFD700', '#FEF7CD', '#FDE1D3', '#9b87f5'][Math.floor(Math.random() * 5)]}
          size={50}
          strokeWidth={1}
        />
      ))}
    </div>
  );
};

export default FlowerAnimation;
