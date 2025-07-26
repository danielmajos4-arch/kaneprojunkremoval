import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <a 
        href="tel:+13189141201" 
        className="bg-louisiana-gold hover:bg-gold-dark text-navy font-bold py-4 px-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 btn-touch animate-pulse-gold"
        aria-label="Call Kane Pro Junk Removal now"
      >
        <i className="fas fa-phone animate-pulse"></i>
        <span className="hidden sm:inline">CALL NOW</span>
        <span className="sm:hidden">CALL</span>
      </a>
    </div>
  );
}
