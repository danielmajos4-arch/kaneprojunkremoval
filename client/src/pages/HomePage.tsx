import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useRef, lazy, Suspense } from "react";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import { useImagePreloader, useCriticalImageLoader } from "@/hooks/useImagePreloader";
import { usePageLoadOptimization, useCriticalCSS, useServiceWorkerCache } from "@/hooks/usePerformanceOptimization";
import { useMobileOptimization, useTouchOptimization, useMobileNavigation } from "@/hooks/useMobileOptimization";
import { useLeadCapturePopup } from "@/hooks/useLeadCapturePopup";

// Lazy load components that aren't immediately needed
const QuoteForm = lazy(() => import("@/components/QuoteForm"));
const ScrollingReviews = lazy(() => import("@/components/ScrollingReviews"));
const MobileOptimizedScrollingReviews = lazy(() => import("@/components/MobileOptimizedScrollingReviews"));
const MobileCallButton = lazy(() => import("@/components/MobileCallButton"));
const LeadCapturePopup = lazy(() => import("@/components/LeadCapturePopup"));

// Import with explicit loading strategy

// Reduced motion for users who prefer it
const getReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Optimized animation variants with reduced motion support
const createAnimationVariants = () => {
  const shouldReduceMotion = getReducedMotion();

  return {
    fadeInUp: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.1 : 0.4,
          ease: "easeOut",
        },
      },
    },
    staggerContainer: {
      visible: {
        transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
      },
    },
  };
};

// Immediate critical image preloading for FCP optimization
const preloadCriticalImages = () => {
  if (typeof window === "undefined") return;

  const criticalImages = [
    "/compressed herosection.jpg",
  ];

  criticalImages.forEach((src) => {
    // High priority preload
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    link.setAttribute("fetchpriority", "high");
    document.head.insertBefore(link, document.head.firstChild);
    
    // Immediate prefetch as well
    const img = new Image();
    img.decoding = "sync"; // Synchronous decoding for immediate display
    img.loading = "eager";
    (img as any).fetchPriority = "high";
    img.src = src;
  });
};

// Execute immediately when module loads (before component renders)
if (typeof window !== "undefined") {
  preloadCriticalImages();
}

// FCP-optimized Hero Background - Image First Strategy
const OptimizedHeroBackground = () => {
  const [imageReady, setImageReady] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if image is already cached/loaded
    const img = new Image();
    img.onload = () => setImageReady(true);
    img.onerror = () => setImageReady(true); // Still show something
    img.src = "/compressed herosection.jpg";
    
    // If already cached, it loads immediately
    if (img.complete) {
      setImageReady(true);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Hero image with highest priority loading */}
      <img
        ref={imgRef}
        src="/compressed herosection.jpg"
        alt="Kane Pro Junk Removal serving Monroe Louisiana - professional junk removal, demolition and dumpster rental services"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageReady ? "opacity-100" : "opacity-0"
        }`}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          display: "block", // Ensure it's always rendered for FCP
        }}
        decoding="sync" // Synchronous decoding for immediate display
        loading="eager"
        {...({fetchpriority: "high"} as any)}
        width="1920"
        height="1080"
        onLoad={() => setImageReady(true)}
        onError={() => setImageReady(true)}
      />

      {/* Minimal transparent overlay only while image loads */}
      {!imageReady && (
        <div className="absolute inset-0 bg-gray-100">
          {/* Minimal loading indicator - no dark colors */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 border-2 border-vibrant-orange border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </div>
  );
};

// Optimized Service Image Component with better error handling
const OptimizedServiceImage = ({
  src,
  alt,
  title,
}: {
  src: string | any;
  alt: string;
  title: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Handle imported image (like Dumpster component)
  if (typeof src === "object" && src.default) {
    return (
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
          decoding="async"
          width="300"
          height="220"
          style={{
            aspectRatio: "300/220",
            display: "block",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "12px 12px 0 0",
          }}
        />
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-xl" />
        )}
      </div>
    );
  }

  // For regular image paths - handle direct paths and optimized versions
  const isDirectPath =
    src.includes(".webp") || src.includes(".jpg") || src.includes(".png");

  if (isDirectPath) {
    return (
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
          decoding="async"
          width="300"
          height="220"
          style={{
            aspectRatio: "300/220",
            display: "block",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "12px 12px 0 0",
          }}
        />
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-xl" />
        )}
        {imageError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-t-xl">
            <i className="fas fa-image text-gray-400 text-2xl"></i>
          </div>
        )}
      </div>
    );
  }

  const imageName = src.replace(/^\//, "").replace(/\.(png|jpg|jpeg)$/i, "");

  return (
    <div className="relative w-full h-full">
      <picture>
        {/* WebP format for modern browsers */}
        <source
          srcSet={`/${imageName}-300w.webp 300w, /${imageName}-600w.webp 600w`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          type="image/webp"
        />

        {/* Fallback format */}
        <img
          src={`/${imageName}-300w.webp`}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
          decoding="async"
          width="300"
          height="220"
          style={{
            aspectRatio: "300/220",
            display: "block",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "12px 12px 0 0",
          }}
        />
      </picture>

      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-xl" />
      )}

      {imageError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-t-xl">
          <i className="fas fa-image text-gray-400 text-2xl"></i>
        </div>
      )}
    </div>
  );
};


export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const animationVariants = createAnimationVariants();
  
  // Performance optimizations
  const { isOptimized, loadTime } = usePageLoadOptimization();
  useCriticalCSS();
  useServiceWorkerCache();
  
  // Mobile-specific optimizations
  const { isMobile, networkSpeed, isLowPowerMode } = useMobileOptimization();
  useTouchOptimization();
  const { isScrolled, scrollDirection } = useMobileNavigation();
  
  // Lead capture popup
  const { isOpen: isPopupOpen, closePopup, openPopup } = useLeadCapturePopup({
    delay: isMobile ? 20000 : 15000, // Show later on mobile (20s vs 15s)
    scrollThreshold: 40, // Show after 40% scroll
    exitIntent: !isMobile // Only use exit intent on desktop
  });

  useEffect(() => {
    setIsVisible(true);
    preloadCriticalImages();
  }, []);

  return (
    <>
      <SEO
        title="Kane Pro Junk Removal Monroe LA | Same-Day Demolition & Dumpster Rental | (318) 914-1201"
        description="#1 Monroe LA junk removal, demolition & dumpster rental. Same-day service in Monroe, West Monroe, Ruston. Licensed, insured, Christian-owned. Free estimates! Call (318) 914-1201"
        keywords="junk removal Monroe LA, demolition Monroe Louisiana, dumpster rental Monroe LA, junk hauling West Monroe, same day junk removal Monroe, licensed junk removal Monroe LA, Kane Pro junk removal, Monroe Louisiana demolition, roll off dumpster Monroe, residential junk removal Monroe, commercial junk removal Monroe LA"
        canonicalUrl="https://kaneprojunk.com/"
        ogTitle="Kane Pro Junk Removal Monroe LA | Same-Day Service | (318) 914-1201"
        ogDescription="#1 Monroe LA junk removal, demolition & dumpster rental. Same-day service, licensed & insured. Christian family business serving Monroe, West Monroe, Ruston. Free estimates!"
        structuredData={{
          ...generateLocalBusinessSchema("Monroe, Louisiana"),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "8",
            bestRating: "5",
            worstRating: "5",
          },
          review: [
            {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Debbie Wedgeworth",
              },
              reviewBody:
                "I had Kaleb and his crew move my household belongings from Farmerville to West Monroe. They have to be the best movers that I have ever used. So respectful, and careful with my stuff. I would love to say that they are a 5 star company.",
            },
            {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Leslie Parker",
              },
              reviewBody:
                "Kane Pro Junk Removal & Hauling! They're known for their reliable and efficient service. If you're considering decluttering, they come highly recommended in the community.",
            },
          ],
        }}
        city="Monroe"
      />

      {/* Hero Section - HIGHLY OPTIMIZED */}
      <section className="relative min-h-screen flex items-center hero-section">
        <OptimizedHeroBackground />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto mobile-optimized px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={animationVariants.staggerContainer}
          >
            {/* Floating background elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-vibrant-orange/10 rounded-full blur-xl"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-deep-green/10 rounded-full blur-xl"
              animate={{ 
                x: [0, -20, 0],
                y: [0, 15, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              variants={animationVariants.fadeInUp}
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                #1 Monroe LA Junk Removal & Demolition
              </motion.span>
              <motion.span
                className="text-vibrant-orange block text-2xl sm:text-3xl md:text-4xl mt-2 pulse-glow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Same-Day Service - Free Estimates
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto font-medium text-white text-center bg-black/20 rounded-lg px-4 py-3 mb-6"
              variants={animationVariants.fadeInUp}
            >
              Professional junk hauling, demolition & dumpster rental in Monroe,
              West Monroe, Ruston & Northeast Louisiana. Licensed & insured
              Christian family business.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
              variants={animationVariants.fadeInUp}
            >
              <motion.button
                className="mobile-cta-button btn-cta text-lg px-6 py-3 sweet-hover float-animation"
                onClick={openPopup}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 165, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                data-testid="button-hero-popup-quote"
              >
                <motion.i 
                  className="fas fa-bolt mr-2"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                />
                QUICK QUOTE
              </motion.button>
              <motion.a
                href="#quote-form"
                className="mobile-cta-button btn-outline text-lg px-6 py-3 sweet-hover"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("quote-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 165, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                data-testid="link-hero-full-form"
              >
                <motion.i 
                  className="fas fa-calculator mr-2"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 4 }}
                />
                FULL FORM
              </motion.a>
              <motion.a
                href="tel:+13189141201"
                className="mobile-cta-button btn-outline text-lg px-6 py-3 sweet-hover"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 165, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                data-testid="link-hero-phone"
              >
                <motion.i 
                  className="fas fa-phone mr-2"
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 5 }}
                />
                (318) 914-1201
              </motion.a>
            </motion.div>

            <motion.div
              className="text-white text-center space-y-2"
              variants={animationVariants.fadeInUp}
            >
              <p className="flex items-center justify-center gap-2 text-base">
                <i className="fas fa-clock text-vibrant-orange"></i>
                Same-Day Service Available • Licensed & Insured
              </p>
              <p className="flex items-center justify-center gap-2 text-sm">
                <i className="fas fa-star text-yellow-400"></i>
                5.0 Stars on Google • 8 Real Customer Reviews
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="text-white text-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="text-sm mb-2">Scroll to explore</div>
            <i className="fas fa-chevron-down text-xl"></i>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Optimized */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mb-4">
                Monroe LA's Most Trusted Junk Removal & Demolition Company
              </h2>

              <div className="space-y-3 text-base text-text-dark leading-relaxed">
                <p>
                  <strong>Kane Pro Junk Removal & Demolition</strong> is Monroe
                  Louisiana's premier junk hauling, demolition, and dumpster
                  rental company. We serve Monroe, West Monroe, Ruston, and all
                  of Northeast Louisiana with reliable, same-day service.
                </p>

                <p>
                  As a local Monroe LA family-owned Christian business, we
                  understand Louisiana values and treat every property with
                  respect. From residential cleanouts to commercial demolition
                  projects, we handle everything from furniture removal to
                  complete structure demolition.
                </p>

                <p>
                  <strong>
                    Licensed, insured, and 5-star rated on Google.
                  </strong>{" "}
                  We're committed to Monroe LA customer satisfaction and won't
                  leave until you're completely happy with our junk removal,
                  demolition, or dumpster rental service.
                </p>
              </div>

              <div className="mt-6">
                <motion.a
                  href="tel:+13189141201"
                  className="inline-flex items-center gap-2 btn-cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-phone"></i>
                  Call (318) 914-1201 - Same Day Service
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-deep-green rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold text-vibrant-orange mb-4">
                  Monroe LA Service Areas
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      city: "Monroe, LA",
                      desc: "Full-service junk removal, demolition & dumpsters",
                    },
                    {
                      city: "West Monroe, LA",
                      desc: "Residential & commercial demo + rentals",
                    },
                    {
                      city: "Ruston, LA",
                      desc: "University area cleanouts, demo & dumpsters",
                    },
                    {
                      city: "Calhoun, LA",
                      desc: "Same-day demolition & dumpster service",
                    },
                    {
                      city: "Farmerville, LA",
                      desc: "Professional junk hauling, demo & rentals",
                    },
                  ].map((area, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                      <div>
                        <h4 className="font-semibold text-sm">{area.city}</h4>
                        <p className="text-gray-300 text-xs">{area.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-vibrant-orange/10 rounded-lg border border-vibrant-orange/30">
                  <div className="flex items-center gap-2 text-vibrant-orange text-sm">
                    <i className="fas fa-clock"></i>
                    <span className="font-semibold">Mon-Sat: 7AM-8PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - HIGHLY OPTIMIZED */}
      <section className="py-10 sm:py-12 bg-neutral-bg">
        <div className="max-w-6xl mx-auto mobile-optimized px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mb-3">
              Monroe LA Junk Removal, Demolition & Dumpster Rental Services
            </h2>
            <p className="text-base text-text-dark max-w-2xl mx-auto">
              Complete junk hauling, demolition, and dumpster rental solutions
              for homes and businesses in Monroe and Northeast Louisiana
            </p>
          </div>

          <div className="mobile-service-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                image: "/portfolio-1-optimized.webp",
                title: "Monroe LA Residential Junk Removal",
                description:
                  "Home cleanouts, furniture removal, appliances & household items in Monroe Louisiana",
                features: [
                  "Furniture & Appliances",
                  "Garage Cleanouts",
                  "Estate Sales Cleanup",
                  "Same-Day Service",
                ],
                linkText: "View Residential Junk Removal Services",
              },
              {
                image: "/portfolio-2.png",
                title: "Commercial Removal & Demolition",
                description:
                  "Monroe office cleanouts, retail spaces & commercial demolition services",
                features: [
                  "Office Furniture Removal",
                  "Retail Space Cleanouts",
                  "Scheduled Service Available",
                ],
                linkText: "View Commercial Demolition Services",
              },
              {
                image: "/portfolio-3-optimized.webp",
                title: "Construction Debris & Demo",
                description:
                  "Monroe LA renovation cleanup, building materials removal & structural demolition",
                features: [
                  "Drywall & Wood Removal",
                  "Roofing Materials",
                  "Structure Demolition",
                  "Contractor Services",
                ],
                linkText: "View Construction Debris Removal Services",
              },
              {
                image: "/dumpster-rental-new.webp",
                title: "Dumpster Rental Monroe LA",
                description:
                  "Roll-off dumpster rentals for Monroe LA construction, renovation & cleanout projects",
                features: [
                  "10-20 Yard Dumpsters",
                  "Same-Day Delivery",
                  "Flexible Rental Periods",
                  "Competitive Monroe Pricing",
                ],
                linkText: "View Dumpster Rental Options & Pricing",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 mobile-service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden mobile-image-container">
                  <OptimizedServiceImage
                    src={service.image}
                    alt={`${service.title} - Kane Pro serving Monroe Louisiana`}
                    title={service.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="service-content p-4 sm:p-5">
                  <h3 className="service-title text-base sm:text-lg font-bold text-deep-green mb-2 group-hover:text-vibrant-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="service-description text-sm text-text-dark mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="service-features text-xs text-gray-600 mb-4 sm:mb-5 space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <i className="fas fa-check text-vibrant-orange text-xs"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="btn-secondary text-sm block text-center transform transition-all duration-300 group-hover:bg-vibrant-orange group-hover:text-white py-2 sm:py-3"
                  >
                    {service.linkText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges - Optimized */}
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              {
                icon: "fas fa-shield-alt",
                text: "Licensed & Insured",
                color: "text-deep-green",
              },
              {
                icon: "fas fa-heart",
                text: "Christian Values",
                color: "text-vibrant-orange",
              },
              {
                icon: "fas fa-clock",
                text: "Same-Day Service",
                color: "text-deep-green",
              },
              {
                icon: "fas fa-star",
                text: "5.0 Google Rating",
                color: "text-yellow-500",
              },
              {
                icon: "fas fa-leaf",
                text: "Eco-Friendly",
                color: "text-vibrant-orange",
              },
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <i
                  className={`${badge.icon} text-2xl ${badge.color} mb-2`}
                  aria-hidden="true"
                ></i>
                <span className="text-xs font-semibold text-text-dark">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real GMB Reviews Section - Optimized */}
      <section className="py-12 sm:py-16 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mb-3">
              Real Customer Reviews from Monroe Louisiana
            </h2>
            <p className="text-base text-text-dark max-w-2xl mx-auto">
              See what Monroe, West Monroe, and Ruston customers say about Kane
              Pro Junk Removal & Demolition
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div
                className="flex text-yellow-400 text-lg"
                aria-label="5 star rating"
              >
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star" aria-hidden="true"></i>
                ))}
              </div>
              <span className="text-deep-green font-semibold ml-2">
                5.0 Stars • 8 Google Reviews
              </span>
            </div>
          </motion.div>

          <Suspense
            fallback={
              <div className="w-full overflow-hidden bg-gray-50 py-6 sm:py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="animate-pulse">
                    <div className="h-6 sm:h-8 bg-gray-200 rounded mb-2 max-w-sm sm:max-w-md mx-auto"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded mb-6 sm:mb-8 max-w-md sm:max-w-lg mx-auto"></div>
                    <div className="flex gap-4 sm:gap-6 overflow-hidden">
                      {[...Array(isMobile ? 2 : 3)].map((_, i) => (
                        <div key={i} className={`flex-shrink-0 ${isMobile ? 'w-72' : 'w-80'} bg-gray-200 rounded-lg h-32 sm:h-40`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            {isMobile ? (
              <MobileOptimizedScrollingReviews 
                reviews={[
                  {
                    name: "Debbie Wedgeworth",
                    rating: 5,
                    text: "I had Kaleb and his crew move my household belongings from Farmerville to West Monroe. They have to be the best movers that I have ever used. So respectful, and careful with my stuff. I would love to say that they are a 5 star company.",
                    location: "Farmerville to West Monroe",
                  },
                  {
                    name: "Leslie Parker",
                    rating: 5,
                    text: "Kane Pro Junk Removal & Hauling! They're known for their reliable and efficient service. If you're considering decluttering, they come highly recommended in the community. Give them a try for your next clean-up!",
                    location: "Monroe LA",
                  },
                  {
                    name: "Jim Wolfe",
                    rating: 5,
                    text: "Great job! Thanks Kaleb.",
                    location: "Monroe LA",
                  },
                  {
                    name: "Robert Emory",
                    rating: 5,
                    text: "This young man did an awesome job. If you need anything hauled away this is the man. His prices are well below what it would cost you in time and gas to do it yourself. 5 stars.",
                    location: "Monroe LA",
                  },
                  {
                    name: "Brian H.",
                    rating: 5,
                    text: "Kane Pro Junk Removal & Hauling are simply the best. Owner is extremely knowledgeable, friendly and a man of his word. If he says he's going to get something done for you he does; no surprises, no hidden charges.",
                    location: "Monroe LA",
                  },
                ]}
                speed={networkSpeed === 'slow' ? 0.3 : 0.5}
              />
            ) : (
              <ScrollingReviews 
                reviews={[
                  {
                    name: "Debbie Wedgeworth",
                    rating: 5,
                    text: "I had Kaleb and his crew move my household belongings from Farmerville to West Monroe. They have to be the best movers that I have ever used. So respectful, and careful with my stuff. I would love to say that they are a 5 star company.",
                    location: "Farmerville to West Monroe",
                  },
                  {
                    name: "Leslie Parker",
                    rating: 5,
                    text: "Kane Pro Junk Removal & Hauling! They're known for their reliable and efficient service. If you're considering decluttering, they come highly recommended in the community. Give them a try for your next clean-up!",
                    location: "Monroe LA",
                  },
                  {
                    name: "Jim Wolfe",
                    rating: 5,
                    text: "Great job! Thanks Kaleb.",
                    location: "Monroe LA",
                  },
                  {
                    name: "Robert Emory",
                    rating: 5,
                    text: "This young man did an awesome job. If you need anything hauled away this is the man. His prices are well below what it would cost you in time and gas to do it yourself. 5 stars.",
                    location: "Monroe LA",
                  },
                  {
                    name: "Brian H.",
                    rating: 5,
                    text: "Kane Pro Junk Removal & Hauling are simply the best. Owner is extremely knowledgeable, friendly and a man of his word. If he says he's going to get something done for you he does; no surprises, no hidden charges.",
                    location: "Monroe LA",
                  },
                ]}
                speed={0.8}
                pauseOnHover={true}
              />
            )}
          </Suspense>

          <div className="text-center mt-8">
            <motion.a
              href="https://www.google.com/search?q=Kane+Pro+Junk+Removal+Monroe+LA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-secondary hover:bg-vibrant-orange hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fab fa-google"></i>
              Read All Reviews on Google
            </motion.a>
          </div>
        </div>
      </section>

      {/* Quote Form - Lazy Loaded with Suspense */}
      <Suspense
        fallback={
          <div className="py-16 bg-white" id="quote-form">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-4 max-w-md mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded mb-8 max-w-lg mx-auto"></div>
                <div className="space-y-4">
                  <div className="h-12 bg-gray-200 rounded"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                  <div className="h-32 bg-gray-200 rounded"></div>
                  <div className="h-12 bg-gray-200 rounded max-w-xs mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <QuoteForm />
      </Suspense>

      {/* Mobile-only floating call button */}
      <Suspense fallback={null}>
        <MobileCallButton />
      </Suspense>

      {/* Lead capture popup */}
      <Suspense fallback={null}>
        <LeadCapturePopup isOpen={isPopupOpen} onClose={closePopup} />
      </Suspense>
    </>
  );
}