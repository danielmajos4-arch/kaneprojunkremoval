import { useEffect, useState } from 'react';

// Performance monitoring and optimization hooks
export const usePageLoadOptimization = () => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    // Optimize critical resources for mobile
    const optimizeResources = () => {
      // Preconnect to external domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://cdnjs.cloudflare.com',
        'https://formspree.io'
      ];

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // Mobile-specific optimizations
      const isMobile = window.innerWidth < 768;
      const resourceHints = [
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: isMobile ? 'preload' : 'prefetch', href: '/compressed herosection.jpg', as: 'image' }
      ];

      resourceHints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.as) link.as = hint.as;
        document.head.appendChild(link);
      });

      // Enable hardware acceleration for mobile
      if (isMobile) {
        document.documentElement.style.transform = 'translate3d(0,0,0)';
        document.documentElement.style.webkitTransform = 'translate3d(0,0,0)';
      }
    };

    // Intersection Observer for lazy loading optimization
    const createLazyLoadObserver = () => {
      if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.style.transition = 'opacity 0.3s ease';
              observer.unobserve(img);
            }
          });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
      }
    };

    const onLoad = () => {
      const endTime = performance.now();
      setLoadTime(endTime - startTime);
      setIsOptimized(true);
      
      // Run optimizations after page load
      setTimeout(() => {
        optimizeResources();
        createLazyLoadObserver();
      }, 100);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  return { isOptimized, loadTime };
};

// Critical CSS inlining hook
export const useCriticalCSS = () => {
  useEffect(() => {
    // Add critical above-the-fold styles
    const criticalCSS = `
      .hero-section {
        min-height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .animate-smooth {
        transform: translateZ(0);
        will-change: transform, opacity;
        backface-visibility: hidden;
      }
    `;

    const style = document.createElement('style');
    style.innerHTML = criticalCSS;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
};

// Service Worker registration for caching
export const useServiceWorkerCache = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Register service worker for caching static assets
      const sw = `
        const CACHE_NAME = 'kane-pro-v1';
        const urlsToCache = [
          '/',
          '/compressed herosection.jpg',
          '/portfolio-1-optimized.webp',
          '/portfolio-3-optimized.webp',
          '/dumpster-rental-new.webp'
        ];

        self.addEventListener('install', (event) => {
          event.waitUntil(
            caches.open(CACHE_NAME)
              .then((cache) => cache.addAll(urlsToCache))
          );
        });

        self.addEventListener('fetch', (event) => {
          event.respondWith(
            caches.match(event.request)
              .then((response) => {
                return response || fetch(event.request);
              })
          );
        });
      `;

      const blob = new Blob([sw], { type: 'application/javascript' });
      const swUrl = URL.createObjectURL(blob);
      
      navigator.serviceWorker.register(swUrl)
        .catch(() => {
          // Silent fail - service worker is an enhancement
        });
    }
  }, []);
};

// Web Vitals monitoring
export const useWebVitals = () => {
  const [vitals, setVitals] = useState({
    fcp: 0, // First Contentful Paint
    lcp: 0, // Largest Contentful Paint
    fid: 0, // First Input Delay
    cls: 0  // Cumulative Layout Shift
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setVitals(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
        if (entry.entryType === 'largest-contentful-paint') {
          setVitals(prev => ({ ...prev, lcp: entry.startTime }));
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    } catch (e) {
      // Browser doesn't support these metrics
    }

    return () => observer.disconnect();
  }, []);

  return vitals;
};