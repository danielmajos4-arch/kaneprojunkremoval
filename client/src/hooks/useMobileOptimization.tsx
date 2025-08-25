import { useEffect, useState, useCallback } from 'react';

// Mobile-specific performance optimizations
export const useMobileOptimization = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [networkSpeed, setNetworkSpeed] = useState('fast');
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const hasTouch = 'ontouchstart' in window;
      const smallScreen = window.innerWidth < 768;
      
      setIsMobile(isMobileDevice || (hasTouch && smallScreen));
    };

    // Detect network speed
    const checkNetworkSpeed = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        const effectiveType = connection.effectiveType;
        
        switch (effectiveType) {
          case 'slow-2g':
          case '2g':
            setNetworkSpeed('slow');
            break;
          case '3g':
            setNetworkSpeed('medium');
            break;
          default:
            setNetworkSpeed('fast');
        }
      }
    };

    // Detect low power mode (affects animations)
    const checkLowPowerMode = () => {
      // Check for power saving indicators
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const lowPowerDevice = navigator.hardwareConcurrency < 4;
      
      setIsLowPowerMode(reducedMotion || lowPowerDevice);
    };

    checkMobile();
    checkNetworkSpeed();
    checkLowPowerMode();

    // Listen for orientation changes
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isMobile, networkSpeed, isLowPowerMode };
};

// Touch optimization hook
export const useTouchOptimization = () => {
  useEffect(() => {
    // Optimize touch scrolling
    document.body.style.touchAction = 'manipulation';
    (document.body.style as any).webkitOverflowScrolling = 'touch';

    // Add touch-friendly CSS
    const touchCSS = `
      /* Optimize touch targets */
      button, a, [role="button"] {
        min-height: 44px;
        min-width: 44px;
        position: relative;
      }

      /* Improve scrolling performance */
      * {
        -webkit-overflow-scrolling: touch;
        overscroll-behavior: contain;
      }

      /* Reduce touch delay */
      a, button, input, select, textarea {
        touch-action: manipulation;
      }

      /* Optimize animations for mobile */
      @media (max-width: 768px) {
        * {
          animation-duration: 0.3s !important;
          transition-duration: 0.3s !important;
        }
      }
    `;

    const style = document.createElement('style');
    style.innerHTML = touchCSS;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
};

// Responsive image loading for mobile
export const useResponsiveImages = () => {
  const [imageSize, setImageSize] = useState('large');

  useEffect(() => {
    const updateImageSize = () => {
      const width = window.innerWidth;
      const pixelRatio = window.devicePixelRatio || 1;

      if (width <= 480) {
        setImageSize(pixelRatio > 1 ? 'medium' : 'small');
      } else if (width <= 768) {
        setImageSize(pixelRatio > 1 ? 'large' : 'medium');
      } else {
        setImageSize('large');
      }
    };

    updateImageSize();
    window.addEventListener('resize', updateImageSize);
    
    return () => window.removeEventListener('resize', updateImageSize);
  }, []);

  return imageSize;
};

// Mobile navigation optimization
export const useMobileNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 10);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [lastScrollY]);

  return { isScrolled, scrollDirection };
};