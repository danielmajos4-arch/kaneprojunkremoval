import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface Review {
  name: string;
  rating: number;
  text: string;
  location: string;
}

interface ScrollingReviewsProps {
  reviews: Review[];
  speed?: number;
  pauseOnHover?: boolean;
  showControls?: boolean;
}

export default function ScrollingReviews({ 
  reviews, 
  speed = 1, 
  pauseOnHover = true,
  showControls = true 
}: ScrollingReviewsProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Handle reduced motion preference
  const prefersReducedMotion = typeof window !== "undefined" && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Measure container and content dimensions
  const measureDimensions = useCallback(() => {
    if (containerRef.current && contentRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, []);

  // Resize handler with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(measureDimensions, 100);
    };

    window.addEventListener("resize", handleResize);
    measureDimensions();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [measureDimensions]);

  // Continuous scrolling animation
  useEffect(() => {
    if (!isPlaying || prefersReducedMotion || contentWidth <= containerWidth) return;

    const animate = () => {
      setCurrentOffset(prev => {
        const newOffset = prev + speed;
        // Reset when we've scrolled past the original content
        return newOffset >= contentWidth / 2 ? 0 : newOffset;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, speed, contentWidth, containerWidth, prefersReducedMotion]);

  // Keyboard event handlers
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case " ":
      case "Enter":
        e.preventDefault();
        setIsPlaying(!isPlaying);
        break;
      case "Escape":
        setIsPlaying(false);
        break;
    }
  }, [isPlaying]);

  // Double the reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  if (reviews.length === 0) return null;

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mb-2">
            What Our Monroe LA Customers Say
          </h2>
          <p className="text-text-dark">
            Real reviews from satisfied junk removal and demolition customers
          </p>
        </div>

        {/* Accessibility announcement */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {isPlaying ? "Reviews are scrolling automatically" : "Reviews scrolling is paused"}
        </div>

        {/* Main scrolling container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200"
          onMouseEnter={pauseOnHover ? () => setIsPlaying(false) : undefined}
          onMouseLeave={pauseOnHover ? () => setIsPlaying(true) : undefined}
          onFocus={() => setIsPlaying(false)}
          onBlur={() => setIsPlaying(true)}
          tabIndex={0}
          role="region"
          aria-label="Customer reviews ticker"
          onKeyDown={handleKeyDown}
        >
          <div
            ref={contentRef}
            className="flex gap-6 py-6"
            style={{
              transform: `translateX(-${currentOffset}px)`,
              width: "max-content",
              transition: prefersReducedMotion ? "transform 0.3s ease" : "none",
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg p-6 shadow-lg border-l-4 border-vibrant-orange mx-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green text-sm">
                      {review.name}
                    </h4>
                    <div
                      className="flex text-yellow-400 text-sm"
                      aria-label={`${review.rating} star rating`}
                    >
                      {[...Array(review.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star" aria-hidden="true"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed mb-3 line-clamp-4">
                  "{review.text}"
                </p>
                <p className="text-xs text-vibrant-orange font-medium">
                  {review.location}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Controls */}
        {showControls && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-vibrant-orange text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:ring-offset-2"
              aria-label={isPlaying ? "Pause scrolling reviews" : "Resume scrolling reviews"}
              data-testid="button-toggle-scrolling"
            >
              <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`} aria-hidden="true"></i>
              {isPlaying ? "Pause" : "Play"}
            </button>

            <div className="text-sm text-gray-600 hidden sm:block">
              {pauseOnHover ? "Hover to pause • " : ""}Press spacebar to toggle • ESC to stop
            </div>
          </div>
        )}

        {/* Performance notice for reduced motion users */}
        {prefersReducedMotion && (
          <div className="text-center mt-4 text-sm text-gray-600">
            <i className="fas fa-info-circle mr-2"></i>
            Scrolling animation is reduced based on your system preferences
          </div>
        )}
      </div>
    </div>
  );
}

// Hook for managing scroll speed based on user preference
export const useScrollSpeed = (baseSpeed = 1) => {
  const [speed, setSpeed] = useState(baseSpeed);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setSpeed(prefersReducedMotion ? baseSpeed * 0.5 : baseSpeed);
  }, [baseSpeed]);

  return speed;
};