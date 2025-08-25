import { useState, useEffect } from 'react';

interface UseLeadCapturePopupOptions {
  delay?: number; // Time before showing popup (milliseconds)
  scrollThreshold?: number; // Scroll percentage to trigger popup
  exitIntent?: boolean; // Show popup on exit intent
}

export const useLeadCapturePopup = ({
  delay = 15000, // 15 seconds default
  scrollThreshold = 50, // 50% scroll
  exitIntent = true
}: UseLeadCapturePopupOptions = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [triggers, setTriggers] = useState({
    time: false,
    scroll: false,
    exitIntent: false
  });

  // Check if popup was already dismissed today
  useEffect(() => {
    const dismissedToday = localStorage.getItem('lead-popup-dismissed');
    const today = new Date().toDateString();
    
    if (dismissedToday === today) {
      setHasShown(true);
    }
  }, []);

  // Time-based trigger
  useEffect(() => {
    if (hasShown) return;

    const timeoutId = setTimeout(() => {
      setTriggers(prev => ({ ...prev, time: true }));
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay, hasShown]);

  // Scroll-based trigger
  useEffect(() => {
    if (hasShown) return;

    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrolled >= scrollThreshold) {
        setTriggers(prev => ({ ...prev, scroll: true }));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold, hasShown]);

  // Exit intent trigger (desktop only)
  useEffect(() => {
    if (hasShown || !exitIntent) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top
      if (e.clientY <= 0 && e.relatedTarget === null) {
        setTriggers(prev => ({ ...prev, exitIntent: true }));
      }
    };

    // Only on desktop
    if (window.innerWidth > 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [exitIntent, hasShown]);

  // Show popup when any trigger is met
  useEffect(() => {
    if (hasShown || isOpen) return;

    const shouldShow = triggers.time || triggers.scroll || triggers.exitIntent;
    
    if (shouldShow) {
      setIsOpen(true);
      setHasShown(true);
    }
  }, [triggers, hasShown, isOpen]);

  const closePopup = () => {
    setIsOpen(false);
    // Remember dismissal for today
    localStorage.setItem('lead-popup-dismissed', new Date().toDateString());
  };

  const openPopup = () => {
    if (!hasShown) {
      setIsOpen(true);
      setHasShown(true);
    }
  };

  return {
    isOpen,
    closePopup,
    openPopup,
    hasShown
  };
};