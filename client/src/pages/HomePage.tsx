import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import Dumpster_1754069233338 from "@assets/Dumpster_1754069233338.png";

// Optimized animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } },
};

// GMB Reviews Slider Component
const GMBReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
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
  ];

  const slidesToShow = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  const maxIndex = Math.max(0, reviews.length - slidesToShow());

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden rounded-lg">
        <motion.div
          className="flex gap-6"
          animate={{
            x: `${-currentIndex * (100 / slidesToShow())}%`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-lg p-6 shadow-lg border-l-4 border-vibrant-orange"
              style={{ width: `${100 / slidesToShow()}%` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-deep-green">
                    {review.name}
                  </h4>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic leading-relaxed mb-3">
                "{review.text}"
              </p>
              <p className="text-xs text-vibrant-orange font-medium">
                {review.location}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-vibrant-orange text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all duration-300"
          aria-label="Previous review"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="flex gap-2">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-vibrant-orange" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-vibrant-orange text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all duration-300"
          aria-label="Next review"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-background-latest.png')` }}
          role="img"
          aria-label="Kane Pro Junk Removal serving Monroe Louisiana - professional junk removal, demolition and dumpster rental services"
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto mobile-optimized px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              #1 Monroe LA Junk Removal & Demolition
              <motion.span
                className="text-vibrant-orange block text-2xl sm:text-3xl md:text-4xl mt-2"
                variants={fadeInUp}
              >
                Same-Day Service • Free Estimates
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto font-medium text-white text-center bg-black/20 rounded-lg px-4 py-3 mb-6"
              variants={fadeInUp}
            >
              Professional junk hauling, demolition & dumpster rental in Monroe,
              West Monroe, Ruston & Northeast Louisiana. Licensed & insured
              Christian family business.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
              variants={fadeInUp}
            >
              <motion.a
                href="#quote-form"
                className="mobile-cta-button btn-cta text-lg px-6 py-3"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("quote-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-calculator mr-2"></i>
                FREE ESTIMATE
              </motion.a>
              <motion.a
                href="tel:+13189141201"
                className="mobile-cta-button btn-outline text-lg px-6 py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-phone mr-2"></i>
                (318) 914-1201
              </motion.a>
            </motion.div>

            <motion.div
              className="text-white text-center space-y-2"
              variants={fadeInUp}
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
      </section>

      {/* About Section */}
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

      {/* Services Section */}
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
                image: "/portfolio-1.png",
                title: "Monroe LA Residential Junk Removal",
                description:
                  "Home cleanouts, furniture removal, appliances & household items in Monroe Louisiana",
                features: [
                  "Furniture & Appliances",
                  "Garage Cleanouts",
                  "Estate Sales Cleanup",
                  "Same-Day Service",
                ],
              },
              {
                image: "/portfolio-2.png",
                title: "Commercial Removal & Demolition",
                description:
                  "Monroe office cleanouts, retail spaces & commercial demolition services",
                features: [
                  "Office Furniture Removal",
                  "Retail Space Cleanouts",
                  "Commercial Demolition",
                  "Scheduled Service Available",
                ],
              },
              {
                image: "/portfolio-3.png",
                title: "Construction Debris & Demo",
                description:
                  "Monroe LA renovation cleanup, building materials removal & structural demolition",
                features: [
                  "Drywall & Wood Removal",
                  "Roofing Materials",
                  "Structure Demolition",
                  "Contractor Services",
                ],
              },
              {
                image: Dumpster_1754069233338,
                title: "Dumpster Rental Monroe LA",
                description:
                  "Roll-off dumpster rentals for Monroe LA construction, renovation & cleanout projects",
                features: [
                  "10-40 Yard Dumpsters",
                  "Same-Day Delivery",
                  "Flexible Rental Periods",
                  "Competitive Monroe Pricing",
                ],
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
                  <img
                    src={service.image}
                    alt={`${service.title} - Kane Pro serving Monroe Louisiana`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 service-card-mobile"
                    loading="lazy"
                    width="300"
                    height="220"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                      filter: "brightness(1.02) contrast(1.05) saturate(1.1)",
                      aspectRatio: "300/220",
                      display: "block",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "12px 12px 0 0",
                      border: "none",
                      outline: "none",
                    }}
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
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
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
                <i className={`${badge.icon} text-2xl ${badge.color} mb-2`}></i>
                <span className="text-xs font-semibold text-text-dark">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real GMB Reviews Section */}
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
              <div className="flex text-yellow-400 text-lg">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <span className="text-deep-green font-semibold ml-2">
                5.0 Stars • 8 Google Reviews
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GMBReviewsSlider />
          </motion.div>

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

      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}
