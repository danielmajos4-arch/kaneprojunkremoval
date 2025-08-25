import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Hook for optimized scroll position tracking
 */
export function useScrollPosition(threshold: number = 100) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.pageYOffset;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    }, 16), // ~60fps
    [threshold]
  );
  
  useEffect(() => {
    // Check initial scroll position
    const currentScrollY = window.pageYOffset;
    setScrollY(currentScrollY);
    setIsScrolled(currentScrollY > threshold);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, threshold]);
  
  return { scrollY, isScrolled };
}

/**
 * Hook for IntersectionObserver-based element visibility
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<T | null>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);
  
  return { elementRef, isIntersecting, hasIntersected };
}

/**
 * Hook for lazy loading images with IntersectionObserver
 */
export function useLazyImage(src: string, placeholder?: string) {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { elementRef, isIntersecting, hasIntersected } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '100px',
  });
  
  useEffect(() => {
    if (hasIntersected && src && !imageSrc) {
      setImageSrc(src);
    }
  }, [hasIntersected, src, imageSrc]);
  
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setIsError(false);
  }, []);
  
  const handleError = useCallback(() => {
    setIsError(true);
    setIsLoaded(false);
  }, []);
  
  return {
    elementRef,
    imageSrc,
    isLoaded,
    isError,
    isIntersecting,
    handleLoad,
    handleError,
  };
}

/**
 * Smooth scroll utility with modern API
 */
export function smoothScrollToElement(
  elementId: string,
  behavior: ScrollBehavior = 'smooth',
  block: ScrollLogicalPosition = 'start'
) {
  const element = document.getElementById(elementId);
  if (element) {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    element.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : behavior,
      block,
      inline: 'nearest',
    });
  }
}

/**
 * Hook for managing scroll-based animations
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T | null>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: '20px',
      }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);
  
  return { elementRef, isVisible };
}