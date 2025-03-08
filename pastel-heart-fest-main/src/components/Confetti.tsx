
import React, { useEffect, useState } from 'react';

interface ConfettiProps {
  active: boolean;
}

const Confetti: React.FC<ConfettiProps> = ({ active }) => {
  const [confettiPieces, setConfettiPieces] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    if (!active) {
      setConfettiPieces([]);
      return;
    }
    
    // Create more confetti pieces with varied shapes
    const pieces = [];
    const colors = ['#FF85A1', '#FFC0D3', '#FFD700', '#FEF7CD', '#FDE1D3', '#E5DEFF', '#D3E4FD', '#F2FCE2', '#9b87f5', '#7E69AB'];
    const shapes = ['circle', 'rect', 'heart', 'star'];
    
    for (let i = 0; i < 200; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const size = Math.random() * 1.5 + 0.5; // Size multiplier
      const rotation = Math.random() * 360;
      const horizontalMovement = Math.random() * 30 - 15; // px movement left/right during fall
      
      let shapeClass = '';
      if (shape === 'circle') shapeClass = 'rounded-full';
      else if (shape === 'heart') shapeClass = 'confetti-heart';
      else if (shape === 'star') shapeClass = 'confetti-star';
      
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}vw`,
        top: `-${Math.random() * 20 + 20}px`,
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}80`,
        transform: `scale(${size}) rotate(${rotation}deg)`,
        animationDuration: `${3 + Math.random() * 8}s`,
        animationDelay: `${Math.random() * 5}s`,
        width: `${Math.random() * 14 + 5}px`,
        height: `${Math.random() * 14 + 5}px`,
      };
      
      // For some confetti pieces, add horizontal movement animation
      if (Math.random() > 0.3) {
        style.animation = `confetti-fall ${style.animationDuration} linear forwards, 
                           confetti-sway ${Math.random() * 3 + 1}s ease-in-out infinite alternate`;
        style.animationDelay = `${style.animationDelay}, ${Math.random()}s`;
      }
      
      pieces.push(
        <div 
          key={i}
          className={`confetti animate-confetti-fall ${shapeClass}`}
          style={style}
        />
      );
    }
    
    setConfettiPieces(pieces);
    
    // Create a second wave of confetti after a delay
    const secondWaveTimeout = setTimeout(() => {
      if (!active) return;
      
      const secondWavePieces = [...pieces];
      for (let i = 0; i < 100; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 1.5 + 0.5;
        const rotation = Math.random() * 360;
        
        let shapeClass = '';
        if (shape === 'circle') shapeClass = 'rounded-full';
        else if (shape === 'heart') shapeClass = 'confetti-heart';
        else if (shape === 'star') shapeClass = 'confetti-star';
        
        secondWavePieces.push(
          <div 
            key={`second-wave-${i}`}
            className={`confetti animate-confetti-fall ${shapeClass}`}
            style={{
              left: `${Math.random() * 100}vw`,
              top: `-${Math.random() * 20 + 20}px`,
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}80`,
              transform: `scale(${size}) rotate(${rotation}deg)`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `0s`,
              width: `${Math.random() * 14 + 5}px`,
              height: `${Math.random() * 14 + 5}px`,
            }}
          />
        );
      }
      
      setConfettiPieces(secondWavePieces);
    }, 1000);
    
    // Create a third wave with special shapes
    const thirdWaveTimeout = setTimeout(() => {
      if (!active) return;
      
      const specialPieces = [...confettiPieces];
      for (let i = 0; i < 50; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 2 + 1;
        const rotation = Math.random() * 360;
        
        specialPieces.push(
          <div 
            key={`special-${i}`}
            className="confetti confetti-special"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `-${Math.random() * 20 + 20}px`,
              backgroundColor: 'transparent',
              border: `2px solid ${color}`,
              transform: `scale(${size}) rotate(${rotation}deg)`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 2}s`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              opacity: 0.9,
              backgroundImage: i % 2 === 0 ? 
                `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='${encodeURIComponent(color)}' stroke='${encodeURIComponent(color)}' stroke-width='1'%3E%3Cpath d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'/%3E%3C/svg%3E")` : 
                `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='${encodeURIComponent(color)}' stroke='${encodeURIComponent(color)}' stroke-width='1'%3E%3Cpath d='M12 3l2.45 6.5L21 10l-4.5 4.25L17.5 21 12 17.5 6.5 21l1-6.75L3 10l6.55-.5L12 3z'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        );
      }
      
      setConfettiPieces(specialPieces);
    }, 2000);
    
    // Clear confetti after all animations are done
    const timeout = setTimeout(() => {
      setConfettiPieces([]);
    }, 20000);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(secondWaveTimeout);
      clearTimeout(thirdWaveTimeout);
    };
  }, [active]);
  
  return <>{confettiPieces}</>;
};

export default Confetti;
