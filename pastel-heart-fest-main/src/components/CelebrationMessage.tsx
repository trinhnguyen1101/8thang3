
import React, { useEffect, useRef } from 'react';
import { Sparkles, Heart, Flower, Star, PartyPopper } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CelebrationMessageProps {
  visible: boolean;
}

const CelebrationMessage: React.FC<CelebrationMessageProps> = ({ visible }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!visible || !containerRef.current) return;
    
    // Create sparkle effects around the message
    const createSparkle = () => {
      if (!containerRef.current) return;
      
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle', 'animate-sparkle');
      
      // Random position around the container
      const size = Math.random() * 12 + 8; // 8-20px
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      
      // Position randomly around the card
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.75;
      const angle = Math.random() * Math.PI * 2;
      
      const x = centerX + Math.cos(angle) * radius * Math.random();
      const y = centerY + Math.sin(angle) * radius * Math.random();
      
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      
      // Random color
      const colors = ['#FF85A1', '#FFC0D3', '#FFD700', '#FFF9FB', '#FF5E8F', '#E5DEFF', '#D3E4FD', '#F2FCE2'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.backgroundColor = color;
      sparkle.style.borderRadius = '50%';
      sparkle.style.boxShadow = `0 0 10px 2px ${color}`;
      
      // Random delay for animation
      sparkle.style.animationDelay = `${Math.random() * 2}s`;
      
      containerRef.current.appendChild(sparkle);
      
      // Remove after animation completes
      setTimeout(() => {
        if (containerRef.current?.contains(sparkle)) {
          containerRef.current.removeChild(sparkle);
        }
      }, 2000);
    };
    
    // Create sparkles periodically
    const interval = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        createSparkle();
      }
    }, 200);
    
    // Create floating icon elements
    const createFloatingIcon = () => {
      if (!containerRef.current) return;
      
      const icons = [Heart, Flower, Star, PartyPopper, Sparkles];
      const IconComponent = icons[Math.floor(Math.random() * icons.length)];
      
      const iconElement = document.createElement('div');
      iconElement.classList.add('floating-icon');
      
      // Random position
      const size = Math.random() * 24 + 16;
      iconElement.style.width = `${size}px`;
      iconElement.style.height = `${size}px`;
      
      const rect = containerRef.current.getBoundingClientRect();
      iconElement.style.left = `${Math.random() * rect.width}px`;
      iconElement.style.top = `${Math.random() * rect.height}px`;
      
      // Random color
      const colors = ['#FF85A1', '#FFD700', '#9b87f5', '#0EA5E9', '#F97316'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Create SVG element
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('fill', color);
      svg.style.opacity = '0.7';
      
      // Set path based on the icon
      let pathD = '';
      if (IconComponent === Heart) {
        pathD = 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z';
      } else if (IconComponent === Star) {
        pathD = 'M12 3l2.45 6.5L21 10l-4.5 4.25L17.5 21 12 17.5 6.5 21l1-6.75L3 10l6.55-.5L12 3z';
      } else if (IconComponent === Flower) {
        pathD = 'M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m3 4.5a4.5 4.5 0 1 0 4.5-4.5M12 16.5V15m4.5-3a4.5 4.5 0 1 1-4.5-4.5M16.5 12H15';
      } else {
        pathD = 'M5.5 12.5H8m8 0h2.5m-13-7 2 2m8-2-2 2M12 3v3m7 4.5-.88 1.76a1 1 0 0 0 0 .95l.88 1.75a1 1 0 0 1-.77 1.38l-1.95.23a1 1 0 0 0-.83.63l-.76 1.76a1 1 0 0 1-1.29.53l-1.81-.8a1 1 0 0 0-.9 0l-1.81.8a1 1 0 0 1-1.29-.53l-.76-1.76a1 1 0 0 0-.83-.63l-1.95-.23a1 1 0 0 1-.77-1.38l.88-1.75a1 1 0 0 0 0-.95l-.88-1.76a1 1 0 0 1 .77-1.38l1.95-.23a1 1 0 0 0 .83-.63l.76-1.76a1 1 0 0 1 1.29-.53l1.81.8a1 1 0 0 0 .9 0l1.81-.8a1 1 0 0 1 1.29.53l.76 1.76a1 1 0 0 0 .83.63l1.95.23a1 1 0 0 1 .77 1.38Z';
      }
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathD);
      svg.appendChild(path);
      iconElement.appendChild(svg);
      
      // Animation
      iconElement.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite, fade-in-out 4s ease-in-out infinite`;
      iconElement.style.animationDelay = `${Math.random() * 2}s`;
      
      containerRef.current.appendChild(iconElement);
      
      // Remove after a while
      setTimeout(() => {
        if (containerRef.current?.contains(iconElement)) {
          containerRef.current.removeChild(iconElement);
        }
      }, 8000);
    };
    
    // Create floating icons periodically
    const iconsInterval = setInterval(() => {
      createFloatingIcon();
    }, 800);
    
    return () => {
      clearInterval(interval);
      clearInterval(iconsInterval);
    };
  }, [visible]);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "message-card relative",
        visible ? "opacity-100" : "opacity-0",
        "transition-opacity duration-700 ease-in-out"
      )}
    >
      {/* Card content */}
      <div className="relative z-10">
        <h1 className="celebration-title flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 animate-pulse text-yellow-400" />
          Chúc Mừng Ngày 8/3 yayyyy
          <Sparkles className="h-8 w-8 animate-pulse text-yellow-400" />
        </h1>
        
        <div className="text-center space-y-4">
          <p className="text-xl text-celebration-accent/90 font-medium">
            Gửi đến mẹ với e gái
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Chúc mẹ với Trúc càng ngày càng xinh đẹp nhá
            
          </p>
          
          <div className="py-3">
            <span className="inline-block px-4 py-2 rounded-full bg-celebration-accent/10 text-celebration-accent font-medium text-lg animate-pulse">
              ✨ Tám tháng bar dui dẻeeeee ✨
            </span>
          </div>
          
          {/* Animated hearts row */}
          <div className="flex justify-center gap-3 py-2">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i} 
                className="text-celebration-accent" 
                fill="#FF85A1" 
                size={24} 
                style={{
                  animation: `heartbeat 1.5s infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 rounded-2xl border-2 border-celebration-accent/30 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-celebration-accent to-transparent animate-shimmer-horizontal"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-celebration-accent to-transparent animate-shimmer-horizontal" style={{animationDelay: '1s'}}></div>
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-celebration-accent to-transparent animate-shimmer-vertical"></div>
        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-celebration-accent to-transparent animate-shimmer-vertical" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-celebration-accent/50 rounded-tl-2xl"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-celebration-accent/50 rounded-tr-2xl"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-celebration-accent/50 rounded-bl-2xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-celebration-accent/50 rounded-br-2xl"></div>
    </div>
  );
};

export default CelebrationMessage;
