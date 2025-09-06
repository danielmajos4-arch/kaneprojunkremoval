import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Custom hook that scrolls to top whenever the route changes
 * Fixes the issue where users navigate to new pages but stay at the same scroll position
 */
export const useScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]);
};

export default useScrollToTop;