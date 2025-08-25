import { useLazyImage } from "../hooks/useScrollOptimization";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  placeholder,
  width,
  height,
  loading = "lazy",
  onLoad,
  onError,
  style,
}: OptimizedImageProps) {
  const {
    elementRef,
    imageSrc,
    isLoaded,
    isError,
    isIntersecting,
    handleLoad,
    handleError,
  } = useLazyImage(src, placeholder);

  const handleImageLoad = () => {
    handleLoad();
    onLoad?.();
  };

  const handleImageError = () => {
    handleError();
    onError?.();
  };

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
        ...style,
      }}
    >
      {/* Loading placeholder */}
      {!isLoaded && !isError && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      )}

      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <i className="fas fa-image text-gray-400 text-2xl"></i>
        </div>
      )}

      {/* Actual image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            ...style,
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={loading}
          decoding="async"
          width={width}
          height={height}
        />
      )}
    </div>
  );
}