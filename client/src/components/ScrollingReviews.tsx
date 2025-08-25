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
  const [isPlaying, setIsPlaying] = useState(false);
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

    // Start scrolling after 3 seconds
    const startTimeout = setTimeout(() => {
      setIsPlaying(true);
    }, 3000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
      clearTimeout(startTimeout);
    };
  }, [measureDimensions]);

  // Continuous scrolling animation
  useEffect(() => {
    if (!isPlaying || prefersReducedMotion || contentWidth <= containerWidth) return;

    const animate = () => {
      setCurrentOffset(prev => {
        const newOffset = prev + speed * 0.5; // Make it even smoother
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


        {/* Main scrolling container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200"
          onMouseEnter={pauseOnHover ? () => setIsPlaying(false) : undefined}
          onMouseLeave={pauseOnHover ? () => setIsPlaying(true) : undefined}
          role="region"
          aria-label="Customer reviews ticker"
        >
          <div
            ref={contentRef}
            className="flex gap-8 py-6"
            style={{
              transform: `translateX(-${currentOffset}px)`,
              width: "max-content",
              willChange: "transform",
              backfaceVisibility: "hidden",
              perspective: "1000px",
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


      </div>
    </div>
  );
}

