import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
              <span className="text-lg font-bold text-charcoal tracking-wide">KANE'S</span>
              <div className="text-xs font-semibold text-charcoal/80">Junk Removal LA</div>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="nav-text-enhanced hover:scale-110 p-2 btn-touch transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-all duration-300 ${
                isActive("/") 
                  ? "nav-text-active" 
                  : "nav-text-enhanced hover:scale-105"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`transition-all duration-300 ${
                isActive("/services") 
                  ? "nav-text-active" 
                  : "nav-text-enhanced hover:scale-105"
              }`}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`transition-all duration-300 ${
                isActive("/about") 
                  ? "nav-text-active" 
                  : "nav-text-enhanced hover:scale-105"
              }`}
            >
              About
            </Link>
            <Link 
              href="/areas" 
              className={`transition-all duration-300 ${
                isActive("/areas") 
                  ? "nav-text-active" 
                  : "nav-text-enhanced hover:scale-105"
              }`}
            >
              Service Areas
            </Link>
            <a 
              href="tel:+13189141201" 
              className="bg-louisiana-gold text-charcoal px-4 py-2 rounded-lg font-bold hover:bg-gold-dark transition-all btn-touch shadow-lg ring-2 ring-louisiana-gold/20 backdrop-blur-sm"
              style={{ 
                textShadow: 'none', 
                fontWeight: '800',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              (318) 914-1201
            </a>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden border-t border-gray-200 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={`block px-3 py-2 btn-touch flex items-center transition-all duration-300 ${
                isActive("/") 
                  ? "nav-text-active" 
                  : "nav-text-enhanced hover:bg-white/10 hover:scale-105"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`block px-3 py-2 btn-touch flex items-center transition-all duration-300 ${
                isActive("/services") 
                  ? "nav-text-active" 
                  : "nav-text-enhanced hover:bg-white/10 hover:scale-105"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2 btn-touch flex items-center transition-all duration-300 ${
                isActive("/about") 
                  ? "nav-text-active" 
                  : "nav-text-enhanced hover:bg-white/10 hover:scale-105"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/areas" 
              className={`block px-3 py-2 btn-touch flex items-center transition-all duration-300 ${
                isActive("/areas") 
                  ? "nav-text-active" 
                  : "nav-text-enhanced hover:bg-white/10 hover:scale-105"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Service Areas
            </Link>
            <a 
              href="tel:+13189141201" 
              className="block mx-3 my-2 bg-louisiana-gold text-charcoal px-4 py-3 rounded-lg font-bold text-center hover:bg-gold-dark transition-all btn-touch shadow-lg ring-2 ring-louisiana-gold/20 backdrop-blur-sm"
              style={{ 
                textShadow: 'none', 
                fontWeight: '800',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              Call (318) 914-1201
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
