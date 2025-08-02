import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  priority?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
}

/**
 * OptimizedImage Component
 * 
 * A high-performance image component with:
 * - Lazy loading with intersection observer
 * - GPU acceleration
 * - Smooth fade-in animations
 * - Automatic WebP support
 * - Error handling with fallbacks
 */
export default function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
  priority = false,
  placeholder,
  style = {},
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder || "");
  const imgRef = useRef<HTMLImageElement>(null);

  // Determine the best image format
  const getOptimizedSrc = (originalSrc: string) => {
    // Check if browser supports WebP
    const supportsWebP = (() => {
      try {
        return document.createElement('canvas')
          .toDataURL('image/webp')
          .indexOf('data:image/webp') === 0;
      } catch {
        return false;
      }
    })();

    // If the original is already WebP or browser doesn't support WebP, return original
    if (originalSrc.includes('.webp') || !supportsWebP) {
      return originalSrc;
    }

    // Try to replace common extensions with WebP
    const webpSrc = originalSrc
      .replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    return webpSrc;
  };

  useEffect(() => {
    if (!imgRef.current) return;

    // For priority images, load immediately
    if (priority || loading === "eager") {
      loadImage();
      return;
    }

    // For lazy images, use intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, priority, loading]);

  const loadImage = () => {
    const img = new Image();
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
      setIsError(false);
    };

    img.onerror = () => {
      // Try the original format if WebP fails
      if (img.src !== src) {
        img.src = src;
      } else {
        setIsError(true);
      }
    };

    // Try optimized format first
    img.src = getOptimizedSrc(src);
  };

  const imageClasses = [
    className,
    'gpu-accelerated',
    'transition-opacity duration-300 ease-in-out',
    isLoaded ? 'opacity-100' : 'opacity-0',
    isError ? 'hidden' : '',
  ].filter(Boolean).join(' ');

  const imageStyle = {
    ...style,
    transform: 'translateZ(0)', // Force GPU acceleration
    backfaceVisibility: 'hidden' as const,
    willChange: isLoaded ? 'auto' : 'opacity',
  };

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder/Loading state */}
      {!isLoaded && !isError && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{
            width: width || '100%',
            height: height || 'auto',
          }}
        />
      )}

      {/* Main image */}
      {!isError && (
        <img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          className={imageClasses}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          style={imageStyle}
          {...props}
        />
      )}

      {/* Error fallback */}
      {isError && (
        <div 
          className={`bg-gray-100 flex items-center justify-center text-gray-400 text-sm ${className}`}
          style={{
            width: width || '100%',
            height: height || '200px',
          }}
        >
          <span>Image not available</span>
        </div>
      )}
    </div>
  );
}

/**
 * High Priority Image Component
 * For above-the-fold images that should load immediately
 */
export function PriorityImage(props: Omit<OptimizedImageProps, 'loading' | 'priority'>) {
  return <OptimizedImage {...props} loading="eager" priority={true} />;
}

/**
 * Lazy Image Component
 * For below-the-fold images that should load when scrolled into view
 */
export function LazyImage(props: Omit<OptimizedImageProps, 'loading' | 'priority'>) {
  return <OptimizedImage {...props} loading="lazy" priority={false} />;
}