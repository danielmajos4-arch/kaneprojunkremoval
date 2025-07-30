// Bundle optimization utilities for reducing JavaScript payload
import React from 'react';

// Dynamic imports for code splitting
export const dynamicImports = {
  // Heavy libraries that can be loaded on demand
  loadFramerMotion: () => import('framer-motion'),
  loadReactQuery: () => import('@tanstack/react-query'),
  loadZod: () => import('zod'),
  
  // Page-specific components
  loadContactForm: () => import('@/components/ContactForm'),
  loadQuoteForm: () => import('@/components/QuoteForm'),
  
  // Feature-specific utilities
  loadImageOptimizer: () => import('./imageOptimizer'),
  loadPerformanceUtils: () => import('./performance')
};

// Tree shaking optimization - only import what you need
export const optimizedImports = {
  // Critical utilities only
  loadIcon: (iconName: string) => {
    // Use Font Awesome instead for better performance
    return Promise.resolve({ default: () => null });
  }
};

// Bundle analysis utilities
export const bundleAnalysis = {
  // Measure bundle size impact
  measureBundleSize: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        transferSize: navigation.transferSize,
        encodedBodySize: navigation.encodedBodySize,
        decodedBodySize: navigation.decodedBodySize
      };
    }
    return null;
  },
  
  // Check for unused CSS
  findUnusedCSS: () => {
    if (typeof window !== 'undefined') {
      const usedSelectors = new Set<string>();
      const styleSheets = Array.from(document.styleSheets);
      
      styleSheets.forEach(sheet => {
        try {
          const rules = Array.from(sheet.cssRules || []);
          rules.forEach(rule => {
            if (rule instanceof CSSStyleRule) {
              if (document.querySelector(rule.selectorText)) {
                usedSelectors.add(rule.selectorText);
              }
            }
          });
        } catch (e) {
          // Cross-origin stylesheets may throw errors
        }
      });
      
      return usedSelectors;
    }
    return new Set();
  }
};

// Critical CSS extraction
export const criticalCSS = {
  // Extract above-the-fold CSS
  extractCritical: () => {
    const criticalSelectors = [
      // Navigation
      '.sticky', '.z-40', '.bg-\\[\\#1E5631\\]',
      // Hero section
      '.hero-section', '.min-h-\\[85vh\\]', '.flex', '.items-center',
      // Buttons
      '.btn-cta', '.btn-outline', '.btn-secondary',
      // Typography
      '.text-white', '.text-deep-green', '.text-vibrant-orange',
      // Layout
      '.container', '.max-w-6xl', '.mx-auto', '.px-4'
    ];
    
    return criticalSelectors;
  },
  
  // Inline critical CSS
  inlineCritical: (css: string) => {
    const style = document.createElement('style');
    style.textContent = css;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);
  }
};

// Lazy loading utilities
export const lazyLoading = {
  // Intersection Observer for lazy loading
  createLazyObserver: (callback: IntersectionObserverCallback) => {
    return new IntersectionObserver(callback, {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    });
  },
  
  // Lazy load components based on viewport
  lazyLoadComponent: <T extends React.ComponentType<any>>(
    importFn: () => Promise<{ default: T }>
  ) => {
    return React.lazy(importFn);
  }
};

// Performance monitoring
export const performanceMonitoring = {
  // Core Web Vitals tracking
  trackCoreWebVitals: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('LCP:', entry.startTime);
        });
      }).observe({ entryTypes: ['largest-contentful-paint'] });
      
      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });
      
      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            console.log('CLS:', entry.value);
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }
};