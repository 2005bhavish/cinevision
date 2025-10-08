import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Black screen (0ms)
    // Stage 1: Focus effect - CINEVISION fades in blurred then sharpens (0-2000ms)
    const timer1 = setTimeout(() => setStage(1), 0);
    
    // Stage 2: The Strike - 2K25 snaps down with jitter (2000ms)
    const timer2 = setTimeout(() => setStage(2), 2000);
    
    // Stage 3: Film grain effect (3500ms)
    const timer3 = setTimeout(() => setStage(3), 3500);
    
    // Complete animation (5000ms)
    const timer4 = setTimeout(() => onComplete(), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Stage 1: Focus Effect - CINEVISION fades in and sharpens */}
      {stage >= 1 && (
        <div className={`relative z-10 text-center ${stage >= 2 ? 'animate-screen-jitter' : ''}`}>
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-foreground tracking-wider animate-focus-in">
            CINEVISION
          </h1>
          
          {/* Stage 2: The Strike - 2K25 snaps down */}
          {stage >= 2 && (
            <p className="font-display text-5xl md:text-7xl text-film-red font-bold mt-2 tracking-widest animate-snap-down">
              2K25
            </p>
          )}
        </div>
      )}

      {/* Stage 3: Film grain overlay */}
      {stage >= 3 && (
        <div className="absolute inset-0 z-20 animate-film-grain pointer-events-none" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
               mixBlendMode: 'overlay'
             }}
        />
      )}
      
      {/* Ambient glow after stage 2 */}
      {stage >= 2 && stage < 3 && (
        <div className="absolute inset-0 z-0 animate-ambient-glow" 
             style={{
               background: 'radial-gradient(circle at center, hsl(0 85% 55% / 0.1) 0%, transparent 70%)'
             }}
        />
      )}
    </div>
  );
};

export default LoadingAnimation;
