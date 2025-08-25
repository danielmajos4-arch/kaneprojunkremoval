import { useEffect, useState } from 'react';

interface UseImagePreloaderOptions {
  images: string[];
  timeout?: number;
}

export const useImagePreloader = ({ images, timeout = 3000 }: UseImagePreloaderOptions) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (images.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = images.length;
    const loadPromises: Promise<void>[] = [];

    // Create preload promises for each image
    images.forEach((src, index) => {
      const promise = new Promise<void>((resolve) => {
        const img = new Image();
        
        const handleLoad = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          resolve();
        };

        // Resolve on both load and error to avoid blocking
        img.onload = handleLoad;
        img.onerror = handleLoad;
        
        // Add optimization attributes
        img.decoding = 'async';
        img.loading = 'eager';
        
        // Start loading
        img.src = src;
        
        // If already cached, resolve immediately
        if (img.complete) {
          handleLoad();
        }
      });
      
      loadPromises.push(promise);
    });

    // Race against timeout
    const timeoutPromise = new Promise<void>(resolve => 
      setTimeout(resolve, timeout)
    );

    Promise.race([
      Promise.all(loadPromises),
      timeoutPromise
    ]).then(() => {
      setImagesLoaded(true);
      setLoadingProgress(100);
    });

  }, [images, timeout]);

  return { imagesLoaded, loadingProgress };
};

// Hook for critical image loading
export const useCriticalImageLoader = (src: string, timeout = 2000) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    const handleLoad = () => setLoaded(true);
    const handleError = () => {
      setError(true);
      setLoaded(true); // Still set loaded to avoid blocking
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;

    // Timeout fallback
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, timeout);

    if (img.complete) {
      handleLoad();
    }

    return () => clearTimeout(timeoutId);
  }, [src, timeout]);

  return { loaded, error };
};