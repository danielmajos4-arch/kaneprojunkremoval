import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import { useState, useEffect } from "react";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

// Static data moved outside component to prevent re-renders
const serviceAreas = [
  { city: "Monroe, LA", desc: "Full-service junk removal & demolition" },
  { city: "West Monroe, LA", desc: "Residential & commercial demolition" },
  { city: "Ruston, LA", desc: "University area cleanouts & demo" },
  { city: "Calhoun, LA", desc: "Same-day demolition service" },
  { city: "Farmerville, LA", desc: "Professional junk hauling & demo" },
];

const services = [
  {
    image: "/portfolio-1.png",
    title: "Residential Cleanouts",
    description:
      "Monroe LA home cleanouts, furniture, appliances & household items",
    features: [
      "Furniture & Appliances",
      "Garage Cleanouts",
      "Estate Sales",
      "Same-Day Service",
    ],
  },
  {
    image: "/portfolio-2.png",
    title: "Commercial Removal & Demo",
    description:
      "Monroe office cleanouts, retail spaces & commercial demolition",
    features: [
      "Office Furniture",
      "Retail Cleanouts",
      "Commercial Demolition",
      "Scheduled Service",
    ],
  },
  {
    image: "/portfolio-3.png",
    title: "Construction Debris & Demolition",
    description:
      "Monroe LA renovation cleanup, building materials removal & structural demolition",
    features: [
      "Drywall & Wood",
      "Roofing Materials",
      "Structure Demolition",
      "Contractor Ready",
    ],
  },
];

const trustBadges = [
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
  { icon: "fas fa-clock", text: "Same-Day Service", color: "text-deep-green" },
  { icon: "fas fa-leaf", text: "Eco-Friendly", color: "text-vibrant-orange" },
];

const testimonials = [
  {
    text: "Kane Pro came same day after hurricane damage for both junk removal and demolition. True Monroe professionals who understand Louisiana values. Highly recommend!",
    author: "Sarah M., Monroe LA",
    rating: 5,
  },
  {
    text: "Needed demolition work in West Monroe and they handled everything perfectly. Faith-driven service shows in their work ethic. On time, efficient, and left our property cleaner than before.",
    author: "Mike T., West Monroe LA",
    rating: 5,
  },
  {
    text: "Fair pricing for both junk removal and demo work. They donated items that were still good. These folks understand Monroe Louisiana communities.",
    author: "Jennifer L., Ruston LA",
    rating: 5,
  },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById("quote-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="Junk Removal & Demolition Monroe LA | Same-Day Service | Kane Pro (318) 914-1201"
        description="Professional junk removal and demolition services in Monroe, West Monroe, Ruston & Northeast Louisiana. Same-day service available. Licensed, insured, family-owned. Free estimates!"
        keywords="junk removal Monroe LA, demolition Monroe LA, junk removal West Monroe LA, demolition services Louisiana, same day junk pickup Monroe, licensed junk removal Monroe"
        canonicalUrl="https://kanejunkremoval.com/"
        ogTitle="Monroe LA Junk Removal & Demolition | Same-Day Service | Kane Pro"
        ogDescription="Fast, reliable junk removal and demolition services serving Monroe, West Monroe, Ruston & Northeast Louisiana. Family-owned Christian business with same-day service."
        structuredData={generateLocalBusinessSchema("Northeast Louisiana")}
        city="Monroe"
      />

      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-background-latest.png')` }}
          role="img"
          aria-label="Monroe Louisiana junk removal and demolition service area"
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Monroe Louisiana Junk Removal & Demolition
              <span className="text-vibrant-orange block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 sm:mt-2">
                Same-Day Service Available
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium text-white text-center bg-black/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 mb-4 sm:mb-6">
              Fast, reliable junk hauling and demolition services in Monroe,
              West Monroe, Ruston & Northeast Louisiana
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4 sm:mb-6">
              <a
                href="#quote-form"
                className="btn-cta text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 transition-transform hover:scale-105 active:scale-95"
                onClick={scrollToQuote}
              >
                <i className="fas fa-calculator mr-2"></i>
                FREE ESTIMATE
              </a>
              <a
                href="tel:+13189141201"
                className="btn-outline text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 transition-transform hover:scale-105 active:scale-95"
              >
                <i className="fas fa-phone mr-2"></i>
                (318) 914-1201
              </a>
            </div>

            <div className="text-white text-center space-y-1 sm:space-y-2">
              <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <i className="fas fa-clock text-vibrant-orange"></i>
                Same-Day Service • Licensed & Insured
              </p>
              <p className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                Serving Monroe, West Monroe, Ruston, Calhoun & Northeast LA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-deep-green mb-3 sm:mb-4">
                Monroe LA's Trusted Junk Removal & Demolition Experts
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-text-dark leading-relaxed">
                <p>
                  <strong>Kane Pro Junk Removal & Demolition</strong> serves
                  Monroe and Northeast Louisiana with reliable, same-day junk
                  hauling and demolition services. As a local, family-owned
                  Christian business, we treat your Monroe LA property with
                  respect and care.
                </p>

                <p>
                  From furniture and appliances to construction debris and
                  complete demolition projects, we handle residential and
                  commercial cleanouts throughout Monroe, West Monroe, Ruston,
                  and surrounding Northeast Louisiana areas.
                </p>

                <p>
                  <strong>
                    Licensed, insured, and committed to Monroe LA customer
                    satisfaction.
                  </strong>{" "}
                  We're not done until you're completely happy with our junk
                  removal and demolition services.
                </p>
              </div>

              <div className="mt-4 sm:mt-6">
                <a
                  href="tel:+13189141201"
                  className="inline-flex items-center gap-2 btn-cta text-sm sm:text-base transition-transform hover:scale-105 active:scale-95"
                >
                  <i className="fas fa-phone"></i>
                  Schedule Free Monroe LA Estimate
                </a>
              </div>
            </div>

            <div>
              <div className="bg-deep-green rounded-xl p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold text-vibrant-orange mb-3 sm:mb-4">
                  Monroe LA Service Areas
                </h3>

                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <i className="fas fa-map-marker-alt text-vibrant-orange text-sm"></i>
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm">
                          {area.city}
                        </h4>
                        <p className="text-gray-300 text-xs">{area.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-vibrant-orange/10 rounded-lg border border-vibrant-orange/30">
                  <div className="flex items-center gap-2 text-vibrant-orange text-xs sm:text-sm">
                    <i className="fas fa-clock"></i>
                    <span className="font-semibold">Mon-Sat: 7AM-8PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section className="py-8 sm:py-10 lg:py-12 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-deep-green mb-2 sm:mb-3">
              Our Monroe LA Junk Removal & Demolition Services
            </h2>
            <p className="text-sm sm:text-base text-text-dark max-w-2xl mx-auto">
              Complete junk hauling and demolition solutions for homes and
              businesses in Monroe and Northeast Louisiana
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={service.image}
                  alt={`${service.title} service in Monroe Louisiana`}
                  className="w-full h-32 sm:h-40 object-cover"
                  loading="lazy"
                  width="300"
                  height="160"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-deep-green mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-dark mb-3">
                    {service.description}
                  </p>
                  <ul className="text-xs text-gray-600 mb-3 sm:mb-4 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="text-xs sm:text-sm btn-secondary block text-center transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges - Compact Mobile */}
      <section className="bg-white py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center">
                <i
                  className={`${badge.icon} text-xl sm:text-2xl ${badge.color} mb-1 sm:mb-2`}
                ></i>
                <span className="text-xs font-semibold text-text-dark">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile Optimized */}
      <section className="py-8 sm:py-10 lg:py-12 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
              What Monroe Louisiana Customers Say
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Trusted by families and businesses across Monroe and Northeast
              Louisiana
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-3 sm:p-4 text-center"
              >
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="flex text-yellow-400 text-xs sm:text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-xs font-semibold text-vibrant-orange">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span className="text-yellow-400 font-bold">5.0 Stars</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="text-gray-300">
                50+ Happy Monroe LA Customers
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="text-gray-300">
                Family-Owned Christian Business
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}
