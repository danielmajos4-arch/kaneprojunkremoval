import { useEffect } from 'react';

// Component to handle asset optimization and critical resource hints
const OptimizedAssets: React.FC = () => {
  useEffect(() => {
    // Critical resource hints
    const resourceHints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://cdnjs.cloudflare.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
      { rel: 'prefetch', href: '/portfolio-1.png' },
      { rel: 'prefetch', href: '/portfolio-2.png' },
      { rel: 'prefetch', href: '/portfolio-3.png' }
    ];

    resourceHints.forEach(({ rel, href, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (crossOrigin) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Optimize images for retina displays
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" if not already present
        if (!img.getAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.getAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
        
        // Optimize for crisp rendering
        img.style.imageRendering = 'auto';
      });
    };

    // Run optimization after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

    // Cleanup function
    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeImages);
    };
  }, []);

  return null;
};

export default OptimizedAssets;