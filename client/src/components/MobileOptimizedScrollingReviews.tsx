import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Review {
  name: string;
  rating: number;
  text: string;
  location: string;
}

interface MobileScrollingReviewsProps {
  reviews: Review[];
  speed?: number;
}

export default function MobileOptimizedScrollingReviews({ 
  reviews, 
  speed = 0.5
}: MobileScrollingReviewsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef<number>();
  const touchStartRef = useRef<number>(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Start animation after 2 seconds on mobile (faster than desktop)
  useEffect(() => {
    const delay = isMobile ? 2000 : 3000;
    const startTimeout = setTimeout(() => {
      setIsPlaying(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [isMobile]);

  // Optimized animation for mobile
  useEffect(() => {
    if (!isPlaying) return;

    const mobileSpeed = isMobile ? speed * 0.7 : speed; // Slightly slower on mobile
    
    const animate = () => {
      setCurrentOffset(prev => {
        const newOffset = prev + mobileSpeed;
        return newOffset >= 2000 ? 0 : newOffset;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, speed, isMobile]);

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
    setIsPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    
    // Add some manual scrolling based on touch movement
    setCurrentOffset(prev => Math.max(0, prev + diff * 0.5));
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPlaying(true), 2000); // Resume after 2 seconds
    touchStartRef.current = 0;
  };

  // Triple reviews for seamless loop
  const tripleReviews = [...reviews, ...reviews, ...reviews];

  if (reviews.length === 0) return null;

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-deep-green mb-2">
            What Our Monroe LA Customers Say
          </h2>
          <p className="text-sm sm:text-base text-text-dark">
            Real reviews from satisfied junk removal customers
          </p>
        </div>

        {/* Mobile-optimized scrolling container */}
        <div
          className="relative overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Customer reviews"
        >
          <div
            className="flex gap-4 sm:gap-6 py-4 sm:py-6"
            style={{
              transform: `translateX(-${currentOffset}px)`,
              width: "max-content",
              willChange: "transform",
            }}
          >
            {tripleReviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                className={`flex-shrink-0 bg-white rounded-lg p-4 sm:p-6 shadow-lg border-l-4 border-vibrant-orange ${
                  isMobile ? 'w-72' : 'w-80 sm:w-96'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: isMobile ? 0.2 : 0.3, 
                  delay: Math.min(index * 0.03, 0.5) 
                }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-vibrant-orange rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg mr-3 sm:mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green text-sm">
                      {review.name}
                    </h4>
                    <div
                      className="flex text-yellow-400 text-xs sm:text-sm"
                      aria-label={`${review.rating} star rating`}
                    >
                      {[...Array(review.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star" aria-hidden="true"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm italic leading-relaxed mb-2 sm:mb-3 line-clamp-3 sm:line-clamp-4">
                  "{review.text}"
                </p>
                <p className="text-xs text-vibrant-orange font-medium">
                  {review.location}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays - smaller on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Mobile-friendly tip */}
        {isMobile && (
          <div className="text-center mt-3">
            <p className="text-xs text-gray-500">
              👆 Touch and swipe to explore reviews
            </p>
          </div>
        )}
      </div>
    </div>
  );
}