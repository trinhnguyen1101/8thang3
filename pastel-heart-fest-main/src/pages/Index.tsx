
import React, { useState, useEffect } from 'react';
import HeartAnimation from '@/components/HeartAnimation';
import FlowerAnimation from '@/components/FlowerAnimation';
import CelebrationMessage from '@/components/CelebrationMessage';
import Confetti from '@/components/Confetti';
import FallingFlowers from '@/components/FallingFlowers';
import { Heart, Flower } from 'lucide-react';

const Index = () => {
  const [step, setStep] = useState<'heart' | 'flower' | 'message'>('heart');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFallingFlowers, setShowFallingFlowers] = useState(true);
  const [decorations, setDecorations] = useState<React.ReactNode[]>([]);

  const handleHeartClick = () => {
    setStep('flower');
  };

  const handleFlowerClick = () => {
    setStep('message');
    setShowConfetti(true);
    
    // Generate decorative elements around the message when it appears
    generateDecorations();
  };
  
  // Generate decorative hearts and flowers around the message
  const generateDecorations = () => {
    const items = [];
    const totalItems = 24;
    
    for (let i = 0; i < totalItems; i++) {
      const isHeart = Math.random() > 0.5;
      const size = Math.random() * 25 + 15;
      const angle = (i / totalItems) * 360;
      const radius = Math.random() * 100 + 350; // Distance from center
      const xPos = Math.cos(angle * Math.PI / 180) * radius;
      const yPos = Math.sin(angle * Math.PI / 180) * radius;
      const color = [
        '#FF85A1', '#FFC0D3', '#FFD700', '#FEF7CD', 
        '#FDE1D3', '#E5DEFF', '#D3E4FD', '#F2FCE2', '#9b87f5'
      ][Math.floor(Math.random() * 9)];
      
      const animationDelay = Math.random() * 5;
      const animationDuration = Math.random() * 4 + 3;
      
      items.push(
        <div
          key={`deco-${i}`}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
          style={{
            transform: `translate(calc(-50% + ${xPos}px), calc(-50% + ${yPos}px))`,
            zIndex: 1,
            animationDelay: `${animationDelay}s`,
          }}
        >
          {isHeart ? (
            <Heart
              size={size}
              fill={color}
              stroke={color}
              strokeWidth={0.5}
              className="animate-pulse"
              style={{
                animationDuration: `${animationDuration}s`,
                opacity: 0.8,
              }}
            />
          ) : (
            <Flower
              size={size}
              fill={color}
              stroke={color}
              strokeWidth={0.5}
              className="animate-float"
              style={{
                animationDuration: `${animationDuration}s`,
                opacity: 0.8,
              }}
            />
          )}
        </div>
      );
    }
    
    setDecorations(items);
  };

  // Preload all components
  useEffect(() => {
    const preloadImages = () => {
      const heartImg = new Image();
      heartImg.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>';
      
      const flowerImg = new Image();
      flowerImg.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m3 4.5a4.5 4.5 0 1 0 4.5-4.5M12 16.5V15m4.5-3a4.5 4.5 0 1 1-4.5-4.5M16.5 12H15" /><circle cx="12" cy="12" r="3" /><path d="m8 16 1.5-1.5" /><path d="M14.5 9.5 16 8" /><path d="m8 8 1.5 1.5" /><path d="M14.5 14.5 16 16" /></svg>';
    };
    
    preloadImages();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top left decoration */}
        <div className="absolute top-4 left-4 w-32 h-32 rounded-full bg-celebration-softPink/30 blur-xl" />
        
        {/* Bottom right decoration */}
        <div className="absolute bottom-4 right-4 w-40 h-40 rounded-full bg-celebration-accent/20 blur-xl" />
        
        {/* Center decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        
        {/* Additional ambient orbs */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-purple-200/30 blur-xl animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-36 h-36 rounded-full bg-yellow-200/20 blur-xl animate-float" style={{animationDelay: '0.5s'}} />
      </div>
      
      {/* Decorative elements for the message */}
      {step === 'message' && decorations}
      
      {/* Main content - Using absolute positioning to overlay components */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] w-full">
        {/* Heart component */}
        <div className={`absolute transition-all duration-700 ${step === 'heart' ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}>
          <HeartAnimation 
            onClick={handleHeartClick} 
            visible={step === 'heart'}
          />
        </div>
        
        {/* Flower component */}
        <div className={`absolute transition-all duration-700 ${step === 'flower' ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}>
          <FlowerAnimation 
            onClick={handleFlowerClick} 
            visible={step === 'flower'}
          />
        </div>
        
        {/* Message component */}
        <div className={`absolute transition-all duration-700 ${step === 'message' ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}>
          <CelebrationMessage visible={step === 'message'} />
        </div>
      </div>
      
      {/* Confetti effect */}
      <Confetti active={showConfetti} />
      
      {/* Falling flowers effect */}
      <FallingFlowers active={showFallingFlowers} />
    </div>
  );
};

export default Index;
