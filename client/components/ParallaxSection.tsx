import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "medium" | "fast";
  backgroundElement?: React.ReactNode;
  enableParallax?: boolean;
}

export default function ParallaxSection({
  children,
  className,
  speed = "medium",
  backgroundElement,
  enableParallax = true
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enableParallax) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "50px"
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [enableParallax]);

  const getTransform = () => {
    if (!enableParallax || !isVisible) return 'translateY(0px)';
    
    const speedMultiplier = {
      slow: 0.3,
      medium: 0.5,
      fast: 0.8
    }[speed];

    const offset = scrollY * speedMultiplier;
    return `translateY(${offset}px)`;
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        enableParallax && "parallax-container",
        className
      )}
    >
      {/* Background Layer */}
      {backgroundElement && (
        <div 
          className={cn(
            "absolute inset-0 z-0",
            enableParallax && "parallax-bg"
          )}
          style={{
            transform: enableParallax ? getTransform() : undefined,
            willChange: enableParallax ? 'transform' : 'auto'
          }}
        >
          {backgroundElement}
        </div>
      )}
      
      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Trust-based section component
export function TrustSection({ 
  children, 
  className,
  title,
  subtitle 
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className={cn("trust-section", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 trust-heading">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="trust-grid">
          {children}
        </div>
      </div>
    </section>
  );
}

// Energy-focused interactive element
export function EnergyCard({ 
  children, 
  className,
  hover = true,
  pulse = false 
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  pulse?: boolean;
}) {
  return (
    <div 
      className={cn(
        "trust-card",
        hover && "energy-accent",
        pulse && "energy-pulse",
        className
      )}
    >
      {children}
    </div>
  );
}

// Background pattern for trust and energy
export function BackgroundPattern({ variant = "trust" }: { variant?: "trust" | "energy" }) {
  if (variant === "trust") {
    return (
      <div className="absolute inset-0 opacity-30">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
            <pattern 
              id="trust-grid" 
              x="0" 
              y="0" 
              width="10" 
              height="10" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 10 0 L 0 0 0 10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trust-grid)" />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-br from-energy-cyan/10 via-transparent to-energy-lime/10" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-energy-cyan/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-energy-lime/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}

// Parallax hero section
export function ParallaxHero({ 
  children,
  backgroundImage,
  className 
}: {
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
}) {
  return (
    <ParallaxSection
      speed="slow"
      className={cn("min-h-screen flex items-center justify-center", className)}
      backgroundElement={
        <div className="absolute inset-0">
          {backgroundImage ? (
            <img 
              src={backgroundImage} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-50 via-background to-primary-50/50" />
          )}
          <BackgroundPattern variant="energy" />
        </div>
      }
    >
      <div className="relative z-10 w-full">
        {children}
      </div>
    </ParallaxSection>
  );
}
