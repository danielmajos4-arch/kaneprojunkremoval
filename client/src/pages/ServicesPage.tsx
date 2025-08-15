import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import SEO from "@/components/SEO";
import { useState, useCallback, lazy, Suspense } from "react";

import WhatsApp_Image_2025_07_26_at_21_22_48__3_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (3).jpeg";
import WhatsApp_Image_2025_07_26_at_21_22_48__2_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (2).jpeg";
import WhatsApp_Image_2025_07_26_at_21_22_48 from "@assets/WhatsApp Image 2025-07-26 at 21.22.48.jpeg";
import Website_demolition from "@assets/Website demolition.jpg";

// Enhanced structured data for better SEO
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://kaneprojunk.com/services",
  name: "Kane Pro Junk Removal & Demolition",
  description: "Professional junk removal, demolition & dumpster rental services in Monroe, West Monroe, Ruston & Northeast Louisiana. Same-day service available.",
  telephone: "+13189141201",
  email: "kaneprojunkremoval@gmail.com",
  url: "https://kaneprojunk.com/services",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Monroe",
    addressRegion: "LA",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "32.5093",
    longitude: "-92.1193"
  },
  areaServed: [
    { "@type": "City", name: "Monroe", addressRegion: "LA", addressCountry: "US" },
    { "@type": "City", name: "West Monroe", addressRegion: "LA", addressCountry: "US" },
    { "@type": "City", name: "Ruston", addressRegion: "LA", addressCountry: "US" },
    { "@type": "City", name: "Calhoun", addressRegion: "LA", addressCountry: "US" },
    { "@type": "City", name: "Farmerville", addressRegion: "LA", addressCountry: "US" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Junk Removal & Demolition Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Junk Removal Monroe LA",
          description: "Home cleanouts, furniture removal, appliances removal in Monroe Louisiana"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Demolition Monroe LA",
          description: "Office cleanouts, retail demolition, commercial junk removal in Monroe Louisiana"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Construction Debris Removal Monroe LA",
          description: "Construction cleanup, demolition debris removal in Monroe Louisiana"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dumpster Rental Monroe LA",
          description: "Residential and commercial dumpster rental services for cleanouts, renovations, and construction projects in Monroe Louisiana"
        }
      }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "8",
    bestRating: "5",
    worstRating: "5"
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Debbie Wedgeworth"
      },
      reviewBody: "I had Kaleb and his crew move my household belongings from Farmerville to West Monroe. They have to be the best movers that I have ever used. So respectful, and careful with my stuff."
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Robert Emory"
      },
      reviewBody: "This young man did an awesome job. If you need anything hauled away this is the man. His prices are well below what it would cost you in time and gas to do it yourself."
    }
  ],
  priceRange: "$$",
  openingHours: "Mo-Sa 07:00-20:00",
  sameAs: [
    "https://www.google.com/search?q=Kane+Pro+Junk+Removal+Monroe+LA"
  ]
};

// Real GMB Reviews data - moved outside component for performance
const realGMBReviews = [
  {
    name: "Debbie Wedgeworth",
    rating: 5,
    text: "I had Kaleb and his crew move my household belongings from Farmerville to West Monroe. They have to be the best movers that I have ever used. So respectful, and careful with my stuff. I would love to say that they are a 5 star company.",
    location: "Farmerville to West Monroe",
    service: "Junk Removal & Moving"
  },
  {
    name: "Leslie Parker",
    rating: 5,
    text: "Kane Pro Junk Removal & Hauling! They're known for their reliable and efficient service. If you're considering decluttering, they come highly recommended in the community. Give them a try for your next clean-up!",
    location: "Monroe LA",
    service: "Junk Removal"
  },
  {
    name: "Robert Emory",
    rating: 5,
    text: "This young man did an awesome job. If you need anything hauled away this is the man. His prices are well below what it would cost you in time and gas to do it yourself. 5 stars.",
    location: "Monroe LA",
    service: "Junk Hauling"
  },
  {
    name: "Brian H.",
    rating: 5,
    text: "Kane Pro Junk Removal & Hauling are simply the best. Owner is extremely knowledgeable, friendly and a man of his word. If he says he's going to get something done for you he does; no surprises, no hidden charges.",
    location: "Monroe LA",
    service: "Junk Removal & Demolition"
  },
  {
    name: "Jim Wolfe",
    rating: 5,
    text: "Great job! Thanks Kaleb.",
    location: "Monroe LA",
    service: "Junk Removal"
  }
];

// Enhanced FAQ data with more Monroe LA specific content
const faqData = [
  {
    q: "How much does junk removal cost in Monroe Louisiana?",
    a: "Monroe LA junk removal typically costs $150-$600 depending on volume and items. We offer free in-person estimates throughout Monroe, West Monroe, and Ruston. Same-day service available with transparent pricing - no hidden fees.",
  },
  {
    q: "Do you provide same-day demolition service in Monroe LA?",
    a: "Yes! Same-day junk removal and small demolition available in Monroe, West Monroe, Ruston when you call before 2 PM. For larger demolition projects in Monroe Louisiana, we typically schedule within 24-48 hours.",
  },
  {
    q: "What junk removal and demolition services do you offer in Monroe?",
    a: "We handle all residential and commercial junk removal in Monroe LA: furniture, appliances, construction debris, estate cleanouts. Demolition services include interior demo, small structure demolition, and commercial demo work throughout Northeast Louisiana.",
  },
  {
    q: "Are you licensed for demolition work in Monroe Louisiana?",
    a: "Yes, Kane Pro is fully licensed and insured for junk removal and demolition services in Louisiana. We carry general liability and workers compensation coverage for all Monroe LA projects.",
  },
  {
    q: "Do you recycle and donate items from Monroe LA junk removal?",
    a: "Absolutely! We donate usable items to Monroe Louisiana charities and recycle materials when possible. Our eco-friendly approach keeps items out of landfills while helping the Monroe community.",
  },
  {
    q: "What areas around Monroe LA do you serve?",
    a: "We serve Monroe, West Monroe, Ruston, Calhoun, Farmerville, Grambling and all of Northeast Louisiana. Same-day service available throughout our Monroe LA service area.",
  },
];

const serviceAreas = [
  "Monroe 71201",
  "West Monroe 71291", 
  "Ruston 71270",
  "Calhoun 71225",
  "Farmerville 71241",
  "Grambling 71245",
];

// Optimized FAQ Component with performance improvements
const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100">
    <button
      className="w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-vibrant-orange transition-all duration-200"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-sm sm:text-base font-semibold text-charcoal pr-4 leading-tight">
          {faq.q}
        </h3>
        <span className="text-vibrant-orange text-lg flex-shrink-0 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          +
        </span>
      </div>
    </button>
    {isOpen && (
      <div className="px-4 pb-4 animate-fadeIn">
        <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
      </div>
    )}
  </div>
);

// Enhanced GMB Reviews Component
const GMBReviewsSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal mb-3">
            Real Customer Reviews from Monroe Louisiana
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-4">
            See what Monroe, West Monroe, and Ruston customers say about our junk removal and demolition services
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <span className="text-deep-green font-semibold ml-2">5.0 Stars • 8 Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {realGMBReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border-l-4 border-vibrant-orange transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-deep-green text-sm sm:text-base">{review.name}</h4>
                  <div className="flex text-yellow-400 text-sm mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">{review.service}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic leading-relaxed mb-3">
                "{review.text}"
              </p>
              <p className="text-xs text-vibrant-orange font-medium">
                📍 {review.location}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=Kane+Pro+Junk+Removal+Monroe+LA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary hover:bg-vibrant-orange hover:text-white transition-all duration-300 text-sm px-4 py-3"
          >
            <i className="fab fa-google"></i>
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = useCallback((index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  }, [openFAQ]);

  return (
    <>
      <SEO
        title="Monroe LA Junk Removal & Demolition Services | Same-Day Service | Kane Pro (318) 914-1201"
        description="Professional junk removal & demolition in Monroe, West Monroe, Ruston Louisiana. Residential cleanouts, commercial demo, construction debris removal. Licensed & insured. Same-day service!"
        keywords="junk removal Monroe LA, demolition Monroe Louisiana, residential junk removal Monroe, commercial demolition Monroe LA, construction debris removal Monroe, appliance removal Monroe LA, same day junk removal Monroe, licensed demolition Monroe Louisiana"
        canonicalUrl="https://kaneprojunk.com/services"
        ogTitle="Monroe LA Junk Removal & Demolition Services | Kane Pro Professional Hauling"
        ogDescription="Complete junk removal & demolition services in Monroe & Northeast Louisiana. Same-day service for residential, commercial & construction needs. 5-star Google rated!"
        structuredData={servicesSchema}
        city="Monroe"
      />

      {/* Breadcrumbs - Enhanced for SEO */}
      <nav className="bg-gray-50 py-2 sm:py-3" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link
                href="/"
                className="hover:text-vibrant-orange transition-colors"
                itemProp="item"
              >
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li>
              <span className="mx-1 sm:mx-2">/</span>
            </li>
            <li className="text-charcoal font-medium" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Services</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Header - Enhanced SEO */}
      <section className="pt-4 sm:pt-8 pb-4 sm:pb-6 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-deep-green mb-2 sm:mb-3 leading-tight">
            Monroe Louisiana Junk Removal & Demolition Services
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional junk hauling, demolition & dumpster rental for homes and businesses across Monroe, West Monroe, Ruston & Northeast Louisiana
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-sm"></i>
              ))}
            </div>
            <span className="text-sm text-gray-600">5.0 Stars • Same-Day Service Available</span>
          </div>
        </div>
      </section>

      {/* Service Areas - Enhanced */}
      <section className="py-3 sm:py-6 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-3 sm:mb-4">
            <span className="text-sm sm:text-base font-semibold text-deep-green">
              🚛 Serving Monroe LA & Northeast Louisiana with Same-Day Service:
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="inline-block px-2 sm:px-3 py-1 rounded-full bg-vibrant-orange text-white text-xs font-semibold hover:bg-opacity-90 transition-all duration-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Performance optimized */}
      <section className="py-6 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">

            {/* Residential Services */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-home text-vibrant-orange mr-2 text-sm sm:text-base"></i>
                  Residential Junk Removal & Demolition Monroe LA
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Complete home cleanouts, junk hauling, and residential demolition throughout Monroe, West Monroe, Ruston, and Northeast Louisiana. We handle everything from single item pickup to full estate cleanouts and small structure demolition.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      ✅ What We Remove & Demo
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• Furniture & mattresses</li>
                      <li>• Appliances & electronics</li>
                      <li>• Garage & basement cleanouts</li>
                      <li>• Small structure demolition</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      📍 Monroe LA Service Areas
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• Monroe & West Monroe</li>
                      <li>• Ruston (Louisiana Tech area)</li>
                      <li>• Calhoun & Farmerville</li>
                      <li>• Same-day service available</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="tel:+13189141201"
                  className="btn-cta inline-block text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-200 hover:scale-105"
                >
                  <i className="fas fa-phone mr-1"></i>
                  Call (318) 914-1201 - Free Estimate
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={Website_demolition}
                  alt="Residential junk removal and demolition team working in Monroe Louisiana"
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </div>

            {/* Commercial Services */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48__2_}
                  alt="Commercial junk removal and demolition services for Monroe Louisiana businesses"
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-building text-vibrant-orange mr-2 text-sm sm:text-base"></i>
                  Commercial Junk Removal & Demolition Monroe LA
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Professional commercial cleanouts and demolition for Monroe Louisiana businesses. We work around your schedule to minimize disruption to your operations while providing efficient junk removal and demo services.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      🏢 Monroe LA Business Types
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• Office buildings</li>
                      <li>• Retail stores</li>
                      <li>• Restaurants & cafes</li>
                      <li>• Warehouses & facilities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      🔨 Demolition Services
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• Interior demolition</li>
                      <li>• Commercial demo work</li>
                      <li>• Scheduled service plans</li>
                      <li>• Volume discounts available</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="tel:+13189141201"
                  className="btn-secondary inline-block text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-200 hover:scale-105"
                >
                  <i className="fas fa-briefcase mr-1"></i>
                  Get Commercial Quote
                </a>
              </div>
            </div>

            {/* Construction Services */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-hard-hat text-vibrant-orange mr-2 text-sm sm:text-base"></i>
                  Construction Debris & Demolition Monroe LA
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Safe, efficient construction debris removal and demolition services for Monroe Louisiana contractors. We understand job site requirements and help keep your projects on schedule throughout Northeast Louisiana.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      🚧 Materials & Demo
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• Drywall & lumber</li>
                      <li>• Concrete & brick</li>
                      <li>• Structure demolition</li>
                      <li>• Renovation debris</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      ⚡ Monroe LA Specialties
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• Storm damage cleanup</li>
                      <li>• Emergency demolition</li>
                      <li>• EPA compliant disposal</li>
                      <li>• Licensed & insured</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="tel:+13189141201"
                  className="btn-cta inline-block text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-200 hover:scale-105"
                >
                  <i className="fas fa-tools mr-1"></i>
                  Get Construction Demo Quote
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48}
                  alt="Construction debris removal and demolition services in Monroe Louisiana"
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Rental Services Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-8">
            {/* Dumpster Rental Services */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-dumpster text-vibrant-orange mr-2 text-sm sm:text-base"></i>
                  Dumpster Rental Monroe LA
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Convenient dumpster rental services for residential and commercial projects in Monroe Louisiana. Perfect for home cleanouts, construction projects, and renovation debris throughout Northeast Louisiana.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      🗑️ Dumpster Sizes & Uses
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• 10-yard residential cleanouts</li>
                      <li>• 20-yard home renovations</li>
                      <li>• 30-yard construction projects</li>
                      <li>• Roll-off containers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      ⭐ Monroe LA Benefits
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• Same-day delivery available</li>
                      <li>• Flexible rental periods</li>
                      <li>• Competitive pricing</li>
                      <li>• Proper waste disposal</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="tel:+13189141201"
                  className="btn-cta inline-block text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-200 hover:scale-105"
                >
                  <i className="fas fa-truck mr-1"></i>
                  Get Dumpster Rental Quote
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src="/dumpster-rental-monroe.webp"
                  alt="Dumpster rental services for residential and commercial projects in Monroe Louisiana"
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real GMB Reviews Section */}
      <GMBReviewsSection />

      {/* FAQ Section - Enhanced */}
      <section className="py-6 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal mb-2 sm:mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Common questions about Monroe Louisiana junk removal and demolition services
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqData.map((faq, index) => (
              <div key={index} itemScope itemType="https://schema.org/Question">
                <FAQItem
                  faq={faq}
                  isOpen={openFAQ === index}
                  onToggle={() => toggleFAQ(index)}
                />
                <meta itemProp="name" content={faq.q} />
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <meta itemProp="text" content={faq.a} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-8 sm:py-12 lg:py-16 bg-deep-green text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
            Ready for Professional Monroe LA Junk Removal & Demolition?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
            Serving Monroe, West Monroe, Ruston & Northeast Louisiana with same-day junk removal and demolition service. Licensed, insured, and 5-star rated!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4">
            <a
              href="tel:+13189141201"
              className="btn-cta text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition-all duration-200 hover:scale-105"
            >
              <i className="fas fa-phone mr-2"></i>
              Call (318) 914-1201
            </a>
            <a
              href="#quote-form"
              className="btn-outline text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition-all duration-200 hover:scale-105"
            >
              <i className="fas fa-calculator mr-2"></i>
              Get Free Quote
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <span className="text-yellow-400 font-bold flex items-center gap-1">
              <i className="fas fa-star"></i> 5.0 Stars on Google
            </span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="text-gray-300">Licensed & Insured</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="text-gray-300">Same-Day Service Available</span>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}