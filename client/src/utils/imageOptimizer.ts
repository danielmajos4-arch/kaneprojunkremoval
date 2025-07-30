// Image optimization utilities for better performance

export interface ImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  width?: number;
  height?: number;
  lazy?: boolean;
}

// Generate optimized image URL with query parameters for different sizes
export const getOptimizedImageUrl = (
  src: string,
  options: ImageOptimizationOptions = {}
): string => {
  const { quality = 85, format, width, height } = options;
  
  // For external CDN optimization (if available)
  const params = new URLSearchParams();
  
  if (quality && quality < 100) {
    params.append('q', quality.toString());
  }
  
  if (width) {
    params.append('w', width.toString());
  }
  
  if (height) {
    params.append('h', height.toString());
  }
  
  if (format) {
    params.append('f', format);
  }
  
  // Return original src if no optimization needed
  return params.toString() ? `${src}?${params.toString()}` : src;
};

// Generate srcSet for responsive images
export const generateSrcSet = (
  baseSrc: string,
  sizes: number[] = [320, 640, 768, 1024, 1280]
): string => {
  return sizes
    .map(size => `${getOptimizedImageUrl(baseSrc, { width: size })} ${size}w`)
    .join(', ');
};

// Generate sizes attribute for responsive images
export const generateSizes = (
  breakpoints: Array<{ maxWidth?: string; width: string }> = [
    { maxWidth: '640px', width: '100vw' },
    { maxWidth: '768px', width: '50vw' },
    { width: '33vw' }
  ]
): string => {
  return breakpoints
    .map(bp => bp.maxWidth ? `(max-width: ${bp.maxWidth}) ${bp.width}` : bp.width)
    .join(', ');
};

// Check if WebP is supported
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Optimize image loading with intersection observer
export const createImageObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical images
export const preloadCriticalImages = (images: string[]): Promise<void[]> => {
  return Promise.all(
    images.map(src => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
      });
    })
  );
};

// Image compression utility (for uploaded images)
export const compressImage = (
  file: File,
  quality: number = 0.8,
  maxWidth: number = 1920,
  maxHeight: number = 1080
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;
      
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width *= ratio;
        height *= ratio;
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Draw and compress
      ctx?.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to compress image'));
          }
        },
        'image/jpeg',
        quality
      );
    };
    
    img.onerror = () => reject(new Error('Failed to load image for compression'));
    img.src = URL.createObjectURL(file);
  });
};