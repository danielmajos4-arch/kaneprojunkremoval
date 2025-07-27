import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-40 header-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex justify-between items-center h-16">
          {/* Shield Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src="/kane-pro-logo.png" 
              alt="Kane's Junk Removal Louisiana Logo" 
              className="w-12 h-12 mr-3 glass-logo-glow"
              width="48"
              height="48"
            />
            <div className="font-military">
              <span className="text-lg font-bold text-deep-green tracking-wide">KANE'S</span>
              <div className="text-xs font-semibold text-vibrant-orange">Junk Removal LA</div>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-deep-green hover:text-vibrant-orange hover:scale-110 p-2 btn-touch transition-all duration-300 z-50 relative"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-all duration-300 ${
                isActive("/") 
                  ? "text-vibrant-orange font-semibold" 
                  : "text-deep-green hover:text-vibrant-orange hover:scale-105"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`transition-all duration-300 ${
                isActive("/services") 
                  ? "text-vibrant-orange font-semibold" 
                  : "text-deep-green hover:text-vibrant-orange hover:scale-105"
              }`}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`transition-all duration-300 ${
                isActive("/about") 
                  ? "text-vibrant-orange font-semibold" 
                  : "text-deep-green hover:text-vibrant-orange hover:scale-105"
              }`}
            >
              About
            </Link>
            <Link 
              href="/areas" 
              className={`transition-all duration-300 ${
                isActive("/areas") 
                  ? "text-vibrant-orange font-semibold" 
                  : "text-deep-green hover:text-vibrant-orange hover:scale-105"
              }`}
            >
              Service Areas
            </Link>
            <a 
              href="tel:+13189141201" 
              className="bg-vibrant-orange text-white px-4 py-2 rounded-lg font-bold hover:bg-vibrant-orange/90 hover:scale-105 transition-all btn-touch shadow-lg"
            >
              (318) 914-1201
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Off-Canvas Mobile Navigation Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          borderTopLeftRadius: '1rem',
          borderBottomLeftRadius: '1rem',
          boxShadow: '-10px 0 25px rgba(0, 0, 0, 0.15)'
        }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 border-b border-gray-100">
          <button 
            onClick={closeMobileMenu}
            className="text-deep-green hover:text-vibrant-orange p-2 hover:scale-110 transition-all duration-200 rounded-full hover:bg-gray-50"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="px-6 py-8 space-y-6">
          <Link 
            href="/" 
            className={`block py-3 text-lg font-medium transition-all duration-200 ${
              isActive("/") 
                ? "text-vibrant-orange border-l-4 border-vibrant-orange pl-4 bg-vibrant-orange/5" 
                : "text-deep-green hover:text-vibrant-orange hover:pl-4"
            }`}
            onClick={closeMobileMenu}
          >
            <i className="fas fa-home w-6 mr-3"></i>
            Home
          </Link>
          
          <Link 
            href="/services" 
            className={`block py-3 text-lg font-medium transition-all duration-200 ${
              isActive("/services") 
                ? "text-vibrant-orange border-l-4 border-vibrant-orange pl-4 bg-vibrant-orange/5" 
                : "text-deep-green hover:text-vibrant-orange hover:pl-4"
            }`}
            onClick={closeMobileMenu}
          >
            <i className="fas fa-tools w-6 mr-3"></i>
            Services
          </Link>
          
          <Link 
            href="/about" 
            className={`block py-3 text-lg font-medium transition-all duration-200 ${
              isActive("/about") 
                ? "text-vibrant-orange border-l-4 border-vibrant-orange pl-4 bg-vibrant-orange/5" 
                : "text-deep-green hover:text-vibrant-orange hover:pl-4"
            }`}
            onClick={closeMobileMenu}
          >
            <i className="fas fa-info-circle w-6 mr-3"></i>
            About
          </Link>
          
          <Link 
            href="/areas" 
            className={`block py-3 text-lg font-medium transition-all duration-200 ${
              isActive("/areas") 
                ? "text-vibrant-orange border-l-4 border-vibrant-orange pl-4 bg-vibrant-orange/5" 
                : "text-deep-green hover:text-vibrant-orange hover:pl-4"
            }`}
            onClick={closeMobileMenu}
          >
            <i className="fas fa-map-marker-alt w-6 mr-3"></i>
            Service Areas
          </Link>

          {/* Call Button */}
          <div className="pt-6 border-t border-gray-100">
            <a 
              href="tel:+13189141201" 
              className="block w-full bg-vibrant-orange text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-vibrant-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
              onClick={closeMobileMenu}
            >
              <i className="fas fa-phone mr-3"></i>
              Call (318) 914-1201
            </a>
          </div>

          {/* Contact Info */}
          <div className="pt-4 text-sm text-text-dark/70">
            <p className="flex items-center mb-2">
              <i className="fas fa-envelope text-vibrant-orange w-5 mr-2"></i>
              kaneprojunkremoval@gmail.com
            </p>
            <p className="flex items-center">
              <i className="fas fa-clock text-vibrant-orange w-5 mr-2"></i>
              7am-8pm Mon-Sat
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
