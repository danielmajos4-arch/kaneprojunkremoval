import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Custom hook that smoothly scrolls to top whenever the route changes
 * Includes accessibility support for users who prefer reduced motion
 * Fixes the issue where users navigate to new pages but stay at the same scroll position
 */
export const useScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Check if user prefers reduced motion for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Scroll to top with smooth animation, respecting accessibility preferences
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'instant' : 'smooth'
    });
  }, [location]);
};

export default useScrollToTop;