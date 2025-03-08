import React, { useEffect, useState, useRef } from 'react';
import { Flower } from 'lucide-react';

interface FallingFlowersProps {
  active: boolean;
}

const FallingFlowers: React.FC<FallingFlowersProps> = ({ active }) => {
  const [flowers, setFlowers] = useState<React.ReactNode[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  useEffect(() => {
    if (!active) {
      setFlowers([]);
      return;
    }
    
    // Create falling flowers with staggered creation for smoother performance
    const createFlowers = () => {
      const flowerElements = [];
      const colors = ['#FF85A1', '#FFC0D3', '#FFD700', '#FEF7CD', '#FDE1D3', '#E5DEFF', '#D3E4FD', '#F2FCE2', '#9b87f5'];
      
      // Create fewer flowers at once for better performance
      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 1.5 + 0.5; // Size between 0.5 and 2
        const left = Math.random() * 100; // Position from 0% to 100% of screen width
        const animationDuration = Math.random() * 15 + 10; // Between 10 and 25 seconds
        const delay = Math.random() * 10; // Delay between 0 and 10 seconds
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        flowerElements.push(
          <div 
            key={`flower-${Date.now()}-${i}`}
            className="absolute top-0 animate-flower-fall"
            style={{
              left: `${left}vw`,
              transform: `scale(${size})`,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${delay}s`,
              zIndex: 5,
              willChange: 'transform' // Optimize for animations
            }}
          >
            <Flower 
              size={24}
              fill={color}
              stroke={color}
              strokeWidth={0.5}
              className="animate-spin-slow"
              style={{
                animationDuration: `${Math.random() * 15 + 10}s`,
                opacity: 0.8,
                willChange: 'transform' // Optimize for animations
              }}
            />
          </div>
        );
      }
      
      return flowerElements;
    };
    
    // Initial set of flowers
    setFlowers(createFlowers());
    
    // Create a staggered effect by adding flowers periodically
    const addMoreFlowersInterval = setInterval(() => {
      if (!active) return;
      
      setFlowers(prevFlowers => {
        // Keep only flowers that are still within the animation timeframe (roughly)
        const filteredFlowers = prevFlowers.filter((_, i) => i > prevFlowers.length - 30);
        return [...filteredFlowers, ...createFlowers()];
      });
    }, 3000); // Add more flowers every 3 seconds
    
    // Clean up all timers
    return () => {
      clearInterval(addMoreFlowersInterval);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [active]);
  
  return <>{flowers}</>;
};

export default FallingFlowers;
