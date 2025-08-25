import { useState, useEffect, useRef } from "react";
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
}

export default function ScrollingReviews({ 
  reviews, 
  speed = 1, 
  pauseOnHover = true 
}: ScrollingReviewsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  const animationRef = useRef<number>();

  // Start animation after 3 seconds
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsPlaying(true);
    }, 3000);

    return () => clearTimeout(startTimeout);
  }, []);

  // Continuous scrolling animation
  useEffect(() => {
    if (!isPlaying) return;

    const animate = () => {
      setCurrentOffset(prev => {
        const newOffset = prev + speed;
        // Reset to 0 when we've moved far enough (roughly half the content width)
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
  }, [isPlaying, speed]);

  // Triple the reviews for seamless infinite loop
  const tripleReviews = [...reviews, ...reviews, ...reviews];

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
          className="relative overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200"
          onMouseEnter={pauseOnHover ? () => setIsPlaying(false) : undefined}
          onMouseLeave={pauseOnHover ? () => setIsPlaying(true) : undefined}
          role="region"
          aria-label="Customer reviews ticker"
        >
          <div
            className="flex gap-8 py-6"
            style={{
              transform: `translateX(-${currentOffset}px)`,
              width: "max-content",
              willChange: "transform",
            }}
          >
            {tripleReviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg p-6 shadow-lg border-l-4 border-vibrant-orange"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 1) }}
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
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </div>
  );
}