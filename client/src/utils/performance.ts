/**
 * Performance Optimization Utilities
 * 
 * This file contains utilities and configurations to optimize website performance
 * including lazy loading, animation optimizations, and resource management.
 */

// Intersection Observer for lazy loading images
export const createLazyLoadObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          
          // Load the image
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          
          // Add loaded class for fade-in effect
          img.classList.add('loaded');
          
          // Stop observing this image
          if (lazyLoadObserver) {
            lazyLoadObserver.unobserve(img);
          }
        }
      });
    },
    {
      // Load images when they're 50px from entering the viewport
      rootMargin: '50px 0px',
      threshold: 0.1
    }
  );
};

// Global lazy load observer instance
let lazyLoadObserver: IntersectionObserver | null = null;

// Initialize lazy loading
export const initializeLazyLoading = () => {
  if (typeof window === 'undefined') return;
  
  lazyLoadObserver = createLazyLoadObserver();
  
  if (lazyLoadObserver) {
    // Find all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => {
      lazyLoadObserver?.observe(img);
    });
  }
};

// Performance monitoring utilities
export const performanceMetrics = {
  // Measure First Contentful Paint
  measureFCP: () => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        console.log(`First Contentful Paint: ${fcp.startTime.toFixed(2)}ms`);
      }
    });
    
    observer.observe({ entryTypes: ['paint'] });
  },

  // Measure Largest Contentful Paint
  measureLCP: () => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log(`Largest Contentful Paint: ${lastEntry.startTime.toFixed(2)}ms`);
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  },

  // Measure Cumulative Layout Shift
  measureCLS: () => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
    
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      for (const entry of entries) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      console.log(`Cumulative Layout Shift: ${clsValue.toFixed(4)}`);
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
  }
};

// Animation performance utilities
export const animationUtils = {
  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Optimized animation configuration
  getAnimationConfig: () => {
    const reducedMotion = animationUtils.prefersReducedMotion();
    
    return {
      duration: reducedMotion ? 0.01 : 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      staggerChildren: reducedMotion ? 0 : 0.08
    };
  },

  // GPU-accelerated transform utilities
  transforms: {
    translateZ: 'translateZ(0)',
    scale: (value: number) => `translateZ(0) scale(${value})`,
    translateY: (value: number) => `translateZ(0) translateY(${value}px)`,
    scaleAndTranslate: (scale: number, y: number) => 
      `translateZ(0) scale(${scale}) translateY(${y}px)`
  }
};

// Resource optimization utilities
export const resourceUtils = {
  // Preload critical resources
  preloadResource: (href: string, as: string, type?: string) => {
    if (typeof document === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    
    document.head.appendChild(link);
  },

  // Preload critical fonts
  preloadFonts: () => {
    const fonts = [
      '/fonts/inter-regular.woff2',
      '/fonts/inter-bold.woff2'
    ];
    
    fonts.forEach(font => {
      resourceUtils.preloadResource(font, 'font', 'font/woff2');
    });
  },

  // Optimize image loading
  optimizeImageLoading: () => {
    if (typeof document === 'undefined') return;
    
    // Set loading="lazy" for all images below the fold
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach((img, index) => {
      // First few images load eagerly, rest lazily
      if (index > 2) {
        img.setAttribute('loading', 'lazy');
      } else {
        img.setAttribute('loading', 'eager');
      }
      
      // Add decoding async for all images
      img.setAttribute('decoding', 'async');
    });
  }
};

// Mobile performance optimizations
export const mobileOptimizations = {
  // Optimize touch interactions
  optimizeTouchInteractions: () => {
    if (typeof document === 'undefined') return;
    
    // Add touch-action: manipulation to prevent 300ms tap delay
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      (el as HTMLElement).style.touchAction = 'manipulation';
    });
  },

  // Reduce animation complexity on mobile
  optimizeMobileAnimations: () => {
    if (typeof window === 'undefined') return;
    
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const animatedElements = document.querySelectorAll('.conversion-image, .btn-cta');
      animatedElements.forEach(el => {
        el.classList.add('mobile-simple-animation');
      });
    }
  }
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      runOptimizations();
    });
  } else {
    runOptimizations();
  }
};

const runOptimizations = () => {
  // Initialize lazy loading
  initializeLazyLoading();
  
  // Optimize resources
  resourceUtils.optimizeImageLoading();
  resourceUtils.preloadFonts();
  
  // Mobile optimizations
  mobileOptimizations.optimizeTouchInteractions();
  mobileOptimizations.optimizeMobileAnimations();
  
  // Performance monitoring (development only)
  if (process.env.NODE_ENV === 'development') {
    performanceMetrics.measureFCP();
    performanceMetrics.measureLCP();
    performanceMetrics.measureCLS();
  }
};

export default {
  initializeLazyLoading,
  performanceMetrics,
  animationUtils,
  resourceUtils,
  mobileOptimizations,
  initializePerformanceOptimizations
};