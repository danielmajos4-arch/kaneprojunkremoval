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

  // Handle body scroll lock when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
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
    <>
      {/* Main Navigation Header */}
      <nav className="sticky top-0 z-40 bg-[#1E5631] shadow-lg">
        <div className="max-w-7xl mx-auto mobile-optimized px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mobile-nav-header h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img 
                src="/kane-pro-logo.png" 
                alt="Kane's Junk Removal Louisiana Logo" 
                className="w-12 h-12 mr-3 filter drop-shadow-md"
                width="48"
                height="48"
              />
              <div className="font-military">
                <span className="text-lg font-bold text-white tracking-wide">KANE PRO</span>
                <div className="text-xs font-semibold text-[#ffffff]">Junk Removal LA</div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`transition-all duration-300 font-medium ${
                  isActive("/") 
                    ? "text-vibrant-orange font-semibold" 
                    : "text-white hover:text-vibrant-orange hover:scale-105"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`transition-all duration-300 font-medium ${
                  isActive("/services") 
                    ? "text-vibrant-orange font-semibold" 
                    : "text-white hover:text-vibrant-orange hover:scale-105"
                }`}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className={`transition-all duration-300 font-medium ${
                  isActive("/about") 
                    ? "text-vibrant-orange font-semibold" 
                    : "text-white hover:text-vibrant-orange hover:scale-105"
                }`}
              >
                About
              </Link>
              <Link 
                href="/areas" 
                className={`transition-all duration-300 font-medium ${
                  isActive("/areas") 
                    ? "text-vibrant-orange font-semibold" 
                    : "text-white hover:text-vibrant-orange hover:scale-105"
                }`}
              >
                Service Areas
              </Link>
              <a 
                href="tel:+13189141201" 
                className="bg-[#FF7F11] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#E6720F] hover:scale-105 transition-all duration-300 btn-touch shadow-lg text-sm uppercase tracking-wide"
              >
                Get Estimate
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-vibrant-orange p-2 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      {/* Mobile Off-Canvas Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="bg-white border-b border-gray-100 p-4 flex justify-end">
          <button 
            onClick={closeMobileMenu}
            className="text-deep-green hover:text-vibrant-orange p-2 transition-colors duration-200"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="bg-white h-full px-6 py-8 space-y-4">
          <Link 
            href="/" 
            className={`block py-4 px-4 text-lg font-medium rounded-lg transition-all duration-200 ${
              isActive("/") 
                ? "text-vibrant-orange bg-orange-50" 
                : "text-deep-green hover:text-vibrant-orange hover:bg-gray-50"
            }`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          
          <Link 
            href="/services" 
            className={`block py-4 px-4 text-lg font-medium rounded-lg transition-all duration-200 ${
              isActive("/services") 
                ? "text-vibrant-orange bg-orange-50" 
                : "text-deep-green hover:text-vibrant-orange hover:bg-gray-50"
            }`}
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          
          <Link 
            href="/about" 
            className={`block py-4 px-4 text-lg font-medium rounded-lg transition-all duration-200 ${
              isActive("/about") 
                ? "text-vibrant-orange bg-orange-50" 
                : "text-deep-green hover:text-vibrant-orange hover:bg-gray-50"
            }`}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          
          <Link 
            href="/areas" 
            className={`block py-4 px-4 text-lg font-medium rounded-lg transition-all duration-200 ${
              isActive("/areas") 
                ? "text-vibrant-orange bg-orange-50" 
                : "text-deep-green hover:text-vibrant-orange hover:bg-gray-50"
            }`}
            onClick={closeMobileMenu}
          >
            Service Areas
          </Link>

          {/* CTA Button */}
          <div className="pt-6">
            <a 
              href="tel:+13189141201" 
              className="block w-full bg-[#FF7F11] text-white px-6 py-4 rounded-lg font-bold text-center hover:bg-[#E6720F] transition-all duration-300 shadow-lg text-lg uppercase tracking-wide"
              onClick={closeMobileMenu}
            >
              Get Estimate
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
