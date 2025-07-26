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
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-7 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 btn-touch ring-4 ring-red-600/20 animate-bounce"
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
