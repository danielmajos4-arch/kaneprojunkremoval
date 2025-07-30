import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import SEO from "@/components/SEO";
import { useState } from "react";

import WhatsApp_Image_2025_07_26_at_21_22_48__3_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (3).jpeg";
import WhatsApp_Image_2025_07_26_at_21_22_48__2_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (2).jpeg";
import WhatsApp_Image_2025_07_26_at_21_22_48 from "@assets/WhatsApp Image 2025-07-26 at 21.22.48.jpeg";

import Website_demolition from "@assets/Website demolition.jpg";

// Optimized structured data - simplified for better performance
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kane Pro Junk Removal & Demolition",
  description:
    "Professional junk removal and demolition services in Monroe, West Monroe, Ruston & Northeast Louisiana",
  telephone: "+13189141201",
  email: "kaneprojunkremoval@gmail.com",
  url: "https://kaneprojunkremoval.com/services",
  areaServed: [
    { "@type": "City", name: "Monroe", addressRegion: "LA" },
    { "@type": "City", name: "West Monroe", addressRegion: "LA" },
    { "@type": "City", name: "Ruston", addressRegion: "LA" },
    { "@type": "City", name: "Calhoun", addressRegion: "LA" },
    { "@type": "City", name: "Farmerville", addressRegion: "LA" },
  ],
  serviceType: [
    "Residential Junk Removal",
    "Commercial Junk Removal",
    "Construction Debris Removal",
    "Demolition Services",
  ],
  priceRange: "$$",
  openingHours: "Mo-Sa 07:00-20:00",
};

// FAQ data moved outside component to prevent re-renders
const faqData = [
  {
    q: "How much does junk removal and demolition cost in Monroe, LA?",
    a: "Junk removal costs typically range from $150-$600 depending on volume. Demolition pricing varies by scope. We provide free in-person estimates for accurate Monroe LA pricing based on your specific needs.",
  },
  {
    q: "Do you offer same-day demolition service in Monroe?",
    a: "Yes! Same-day service available for junk removal and small demolition projects in Monroe, West Monroe, Ruston, and surrounding areas when you call before 2 PM.",
  },
  {
    q: "What items can you remove and what can you demolish?",
    a: "We remove furniture, appliances, electronics, construction debris, and most household items. We handle small structure demolition, interior demo work, and commercial demolition projects. We cannot remove hazardous materials without proper certification.",
  },
  {
    q: "Are you licensed and insured for demolition work in Louisiana?",
    a: "Yes, Kane Pro is fully licensed and insured to operate junk removal and demolition services in Louisiana with general liability and workers compensation coverage.",
  },
  {
    q: "Do you recycle demolition materials and donate items?",
    a: "Absolutely! We donate usable items to local Monroe Louisiana charities and recycle demolition materials when possible to keep items out of landfills.",
  },
];

const reviewsData = [
  {
    text: "Professional junk removal and demolition in Ruston. On-time, fair pricing, highly recommend!",
    author: "Sarah M., Ruston LA",
  },
  {
    text: "Excellent commercial demolition for our Monroe office renovation. Very professional team.",
    author: "Mike T., Monroe LA",
  },
  {
    text: "Fast same-day demolition service in Calhoun! Great local Monroe company with integrity.",
    author: "Jennifer L., Calhoun LA",
  },
];

const serviceAreas = [
  "Monroe 71201",
  "West Monroe 71291",
  "Ruston 71270",
  "Calhoun 71225",
  "Farmerville 71241",
  "Grambling",
];

// Optimized FAQ Component
const FAQItem = ({ faq, isOpen, onToggle }: { faq: { q: string; a: string }, isOpen: boolean, onToggle: () => void }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100">
    <button
      className="w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-vibrant-orange"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-sm sm:text-base font-semibold text-charcoal pr-4 leading-tight">
          {faq.q}
        </h3>
        <span className="text-vibrant-orange text-lg flex-shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </div>
    </button>
    {isOpen && (
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
      </div>
    )}
  </div>
);

export default function ServicesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Junk Removal & Demolition Services Monroe LA | Residential & Commercial | Kane Pro"
        description="Professional junk removal and demolition services in Monroe, West Monroe, Ruston & Northeast Louisiana. Residential cleanouts, commercial demolition, construction debris. Call (318) 914-1201!"
        keywords="junk removal Monroe LA, demolition Monroe LA, residential junk removal Louisiana, commercial demolition Monroe, construction debris removal Louisiana, appliance removal Monroe LA"
        canonicalUrl="https://kaneprojunkremoval.com/services"
        ogTitle="Monroe LA Junk Removal & Demolition Services | Kane Pro Professional Hauling"
        ogDescription="Complete junk removal and demolition services in Monroe & Northeast Louisiana. Same-day service available for residential, commercial & construction needs."
        structuredData={servicesSchema}
        city="Monroe"
      />
      {/* Breadcrumbs - Mobile Optimized */}
      <nav className="bg-gray-50 py-2 sm:py-3" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600">
            <li>
              <Link
                href="/"
                className="hover:text-vibrant-orange transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <span className="mx-1 sm:mx-2">/</span>
            </li>
            <li className="text-charcoal font-medium">Services</li>
          </ol>
        </div>
      </nav>
      {/* Header - Mobile First */}
      <section className="pt-4 sm:pt-8 pb-4 sm:pb-6 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-deep-green mb-2 sm:mb-3 leading-tight">
            Monroe Louisiana Junk Removal & Demolition Services
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional junk hauling and demolition services for homes and
            businesses across Monroe and Northeast Louisiana
          </p>
        </div>
      </section>
      {/* Service Areas - Compact Mobile Design */}
      <section className="py-3 sm:py-6 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-3 sm:mb-4">
            <span className="text-sm sm:text-base font-semibold text-deep-green">
              Serving Monroe LA & Northeast Louisiana:
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="inline-block px-2 sm:px-3 py-1 rounded-full bg-vibrant-orange text-white text-xs font-semibold"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* Services - Mobile Optimized Layout */}
      <section className="py-6 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            {/* Residential Services */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-home text-vibrant-orange mr-2 text-sm sm:text-base"></i>
                  Residential Junk Removal & Demolition
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Complete home cleanouts, junk hauling, and residential
                  demolition throughout Monroe, West Monroe, Ruston, and
                  Northeast Louisiana. We handle everything from single items to
                  full estate cleanouts and small structure demolition.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      What We Remove & Demo
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
                      Monroe LA Service Areas
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
                  className="btn-cta inline-block text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-200"
                >
                  <i className="fas fa-phone mr-1"></i>
                  Get Free Monroe LA Estimate
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={Website_demolition}
                  alt="Residential junk removal and demolition team in Monroe Louisiana"
                  className="w-full rounded-lg shadow-md"
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
                  alt="Commercial junk removal and demolition services in Monroe Louisiana"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-building text-vibrant-orange mr-2 text-sm sm:text-base"></i>
                  Commercial Junk Removal & Demolition
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Professional commercial cleanouts and demolition for
                  businesses in Monroe, West Monroe, and Northeast Louisiana. We
                  work around your schedule to minimize disruption to your
                  Monroe LA business operations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      Monroe LA Business Types
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• Office buildings</li>
                      <li>• Retail stores</li>
                      <li>• Restaurants & cafes</li>
                      <li>• Warehouses</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      Demolition Services
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• Interior demolition</li>
                      <li>• Commercial demo work</li>
                      <li>• Scheduled service</li>
                      <li>• Volume discounts</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="tel:+13189141201"
                  className="btn-secondary inline-block text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-200"
                >
                  <i className="fas fa-briefcase mr-1"></i>
                  Commercial Demo Quote
                </a>
              </div>
            </div>

            {/* Construction Services */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-hard-hat text-vibrant-orange mr-2 text-sm sm:text-base"></i>
                  Construction Debris & Demolition
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Safe, efficient construction debris removal and demolition
                  services for Monroe Louisiana contractors. We understand job
                  site requirements and keep projects on schedule throughout
                  Northeast Louisiana.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-charcoal mb-2">
                      Materials & Demo
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
                      Monroe LA Specialties
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
                  className="btn-cta inline-block text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-200"
                >
                  <i className="fas fa-tools mr-1"></i>
                  Construction Demo Quote
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48}
                  alt="Construction debris removal and demolition in Monroe Louisiana"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section - Mobile Optimized with Accordion */}
      <section className="py-6 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal mb-2 sm:mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Common questions about Monroe Louisiana junk removal and
              demolition services
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials - Mobile Optimized */}
      <section className="py-6 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal mb-2 sm:mb-3">
              Monroe Louisiana Customer Reviews
            </h2>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className="fas fa-star text-yellow-400 text-sm sm:text-lg"
                ></i>
              ))}
              <span className="ml-2 text-sm sm:text-base text-gray-600">
                5.0 stars
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviewsData.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center"
              >
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="fas fa-star text-yellow-400 text-xs sm:text-sm"
                    ></i>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 italic leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-xs text-vibrant-orange font-semibold">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section - Mobile Optimized */}
      <section className="py-6 sm:py-10 lg:py-12 bg-deep-green text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
            Ready for Professional Junk Removal & Demolition?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
            Serving Monroe, West Monroe, Ruston & Northeast Louisiana with
            same-day junk removal and demolition service available
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+13189141201"
              className="btn-cta text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition-all duration-200"
            >
              <i className="fas fa-phone mr-2"></i>
              Call (318) 914-1201
            </a>
            <a
              href="#quote-form"
              className="btn-outline text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition-all duration-200"
            >
              <i className="fas fa-calculator mr-2"></i>
              Get Free Quote
            </a>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 mt-3 sm:mt-4">
            Licensed & Insured • Same-Day Service Available in Monroe LA
          </p>
        </div>
      </section>
      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}
