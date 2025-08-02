import { createContext, useContext, useEffect, useState } from "react";
import { animationUtils } from "@/utils/performance";

interface PerformanceContextType {
  prefersReducedMotion: boolean;
  animationConfig: ReturnType<typeof animationUtils.getAnimationConfig>;
  isLowEndDevice: boolean;
}

const PerformanceContext = createContext<PerformanceContextType | null>(null);

export function usePerformance() {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error("usePerformance must be used within a PerformanceProvider");
  }
  return context;
}

interface PerformanceProviderProps {
  children: React.ReactNode;
}

export function PerformanceProvider({ children }: PerformanceProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Detect low-end devices
    const detectLowEndDevice = () => {
      // Check device memory (if available)
      const deviceMemory = (navigator as any).deviceMemory;
      const hardwareConcurrency = navigator.hardwareConcurrency || 1;

      // Consider device low-end if:
      // - Device memory is 4GB or less
      // - CPU cores are 2 or fewer
      // - Connection is slow
      const connectionSpeed = (navigator as any).connection?.effectiveType;
      const isSlowConnection = connectionSpeed === 'slow-2g' || connectionSpeed === '2g';

      return (
        (deviceMemory && deviceMemory <= 4) ||
        hardwareConcurrency <= 2 ||
        isSlowConnection
      );
    };

    setIsLowEndDevice(detectLowEndDevice());

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const animationConfig = animationUtils.getAnimationConfig();

  // Adjust animation config for low-end devices
  const optimizedAnimationConfig = {
    ...animationConfig,
    duration: isLowEndDevice ? Math.min(animationConfig.duration, 0.2) : animationConfig.duration,
    staggerChildren: isLowEndDevice ? 0 : animationConfig.staggerChildren
  };

  const value = {
    prefersReducedMotion,
    animationConfig: optimizedAnimationConfig,
    isLowEndDevice
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
}