import { useEffect, useRef } from 'react';

const ParallaxBackground = ({ 
  children, 
  backgroundImage, 
  speed = 0.5, 
  className = '',
  overlay = true,
  overlayClass = 'bg-gradient-to-br from-black/70 via-black/50 to-amber-900/30'
}) => {
  const parallaxRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!backgroundRef.current) return;
          
          const scrolled = window.pageYOffset;
          const parallax = scrolled * speed;
          
          backgroundRef.current.style.transform = `translate3d(0, ${parallax}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      if (!backgroundRef.current) return;
      
      // Reset transform on resize to prevent layout issues
      backgroundRef.current.style.transform = 'translate3d(0, 0, 0)';
      
      // Reapply parallax effect
      setTimeout(() => {
        handleScroll();
      }, 100);
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial call
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed]);

  return (
    <div 
      ref={parallaxRef}
      className={`parallax-container relative overflow-hidden ${className}`}
    >
      {/* Parallax Background */}
      <div 
        ref={backgroundRef}
        className="parallax-element absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          top: '-10%',
        }}
      />
      
      {/* Overlay */}
      {overlay && (
        <div className={`absolute inset-0 ${overlayClass}`} />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;