import { useEffect } from 'react';
import { addResourceHint, preloadFont } from '@/utils/performance';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // DNS prefetch for external resources
    addResourceHint('dns-prefetch', 'https://fonts.googleapis.com');
    addResourceHint('dns-prefetch', 'https://fonts.gstatic.com');
    addResourceHint('dns-prefetch', 'https://cdnjs.cloudflare.com');
    
    // Preconnect to critical resources
    addResourceHint('preconnect', 'https://fonts.gstatic.com', true);
    
    // Critical CSS inlining for above-the-fold content
    const criticalCSS = `
      .hero-section {
        min-height: 85vh;
        display: flex;
        align-items: center;
      }
      .btn-cta {
        background: #FF7F11;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        transition: all 0.3s ease;
      }
      .btn-cta:hover {
        background: #e06e0f;
        transform: translateY(-1px);
      }
      @media (max-width: 640px) {
        .hero-section {
          min-height: 85vh;
        }
      }
    `;
    
    // Inject critical CSS
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
    
    // Preload critical web fonts with font-display: swap
    preloadFont('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2');
    
    // Performance monitoring
    if ('performance' in window && 'getEntriesByType' in performance) {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          console.log(`Page load time: ${loadTime}ms`);
          console.log(`DOM Content Loaded: ${domContentLoaded}ms`);
        }
        
        paint.forEach((entry) => {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        });
      }, 0);
    }
    
    // Service Worker registration for caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
    }
  }, []);

  return null;
};

export default PerformanceOptimizer;