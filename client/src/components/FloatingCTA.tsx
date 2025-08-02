import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const shouldShow = scrollTop > 100;
          // Debug removed after confirming it works
          setIsVisible(shouldShow);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize visibility state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 right-4 sm:right-6 z-50 max-w-[280px] sm:max-w-[320px] gpu-accelerated`}
      style={{ 
        transform: isVisible ? 'translateZ(0) translateY(0)' : 'translateZ(0) translateY(80px)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
        willChange: 'transform, opacity',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <div className="text-center mb-3 px-3 py-2 bg-black/70 backdrop-blur-sm rounded-lg border border-white/20 animate-pulse">
        <div className="text-white font-bold sm:text-xl mb-1 text-[18px]">
          Need a quote fast?
        </div>
        <div className="text-white sm:text-base opacity-90 text-[14px]">
          Call now for same-day estimates & pickup.
        </div>
      </div>
      <a 
        href="tel:+13189141201" 
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 sm:py-5 sm:px-7 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 btn-touch ring-4 ring-red-600/20 mx-auto w-full sm:w-auto pt-[10px] pb-[10px]"
        aria-label="Call Kane Pro Junk Removal now"
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(220, 38, 38, 0.3)' }}
      >
        <i className="fas fa-phone text-xl animate-pulse"></i>
        <span className="hidden sm:inline text-lg">CALL NOW</span>
        <span className="sm:hidden text-lg">CALL</span>
      </a>
    </div>
  );
}
