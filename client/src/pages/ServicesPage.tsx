import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

import WhatsApp_Image_2025_07_26_at_21_22_48__3_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (3).jpeg";
import WhatsApp_Image_2025_07_26_at_21_22_48__2_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (2).jpeg";
import WhatsApp_Image_2025_07_26_at_21_22_48 from "@assets/WhatsApp Image 2025-07-26 at 21.22.48.jpeg";

// Enhanced structured data for better local SEO
const generateServicesSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kane Pro Junk Removal",
    description:
      "Professional junk removal services in Ruston, Monroe, Calhoun, Farmerville & West Monroe Louisiana",
    telephone: "+13189141201",
    email: "kaneprojunkremoval@gmail.com",
    url: "https://kaneprojunkremoval.com/services",
    areaServed: [
      {
        "@type": "City",
        name: "Ruston",
        addressRegion: "LA",
      },
      {
        "@type": "City",
        name: "Monroe",
        addressRegion: "LA",
      },
      {
        "@type": "City",
        name: "Calhoun",
        addressRegion: "LA",
      },
      {
        "@type": "City",
        name: "Farmerville",
        addressRegion: "LA",
      },
      {
        "@type": "City",
        name: "West Monroe",
        addressRegion: "LA",
      },
    ],
    serviceType: [
      "Residential Junk Removal",
      "Commercial Junk Removal",
      "Construction Debris Removal",
      "Appliance Removal",
      "Furniture Removal",
    ],
    priceRange: "$$",
    openingHours: "Mo-Sa 07:00-20:00",
  };
};

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Junk Removal Calhoun, Ruston & Monroe LA | Kane Pro Hauling"
        description="Professional junk removal services in Ruston, Monroe, Calhoun, Farmerville & West Monroe LA. Free estimates, same-day service. Call (318) 914-1201 today!"
        keywords="junk removal near me, junk removal Calhoun LA 71225, commercial junk removal Monroe LA 71201, residential cleanouts Ruston LA 71270, appliance removal West Monroe LA 71291, debris removal Farmerville LA 71241, Louisiana Tech junk removal"
        canonicalUrl="https://kaneprojunkremoval.com/services"
        ogTitle="#1 Junk Removal Services in Northeast Louisiana | Kane Pro"
        ogDescription="Same-day junk removal in Ruston, Monroe, Calhoun & surrounding areas. Licensed & insured. Free estimates available!"
        structuredData={generateServicesSchema()}
        city="Northeast Louisiana"
      />

      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-louisiana-gold">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-charcoal font-medium">Junk Removal Services</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-6 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-military text-deep-green mb-4">
            Professional Junk Removal Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive junk hauling solutions for homes and businesses across Northeast Louisiana
          </p>
        </div>
      </section>

      {/* Service Area Chips */}
      <section className="py-6 bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-lg font-semibold text-deep-green">Serving North Louisiana:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#ef6706' }}>
              Calhoun 71225
            </span>
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#ef6706' }}>
              Ruston 71270
            </span>
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#ef6706' }}>
              Monroe 71201
            </span>
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#ef6706' }}>
              West Monroe 71291
            </span>
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#ef6706' }}>
              Farmerville 71241
            </span>
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#ef6706' }}>
              Grambling
            </span>
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#ef6706' }}>
              Choudrant
            </span>
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#ef6706' }}>
              Downsville
            </span>
          </div>
        </div>
      </section>

      {/* Main Services - Condensed */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">

            {/* Residential Services */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-military text-charcoal mb-4">
                  <i className="fas fa-home text-louisiana-gold mr-3"></i>
                  Residential Junk Removal
                </h2>
                <p className="text-gray-600 mb-6">
                  From single items to complete home cleanouts across Calhoun, Ruston, Monroe, and surrounding Louisiana areas. Same-day service available.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Furniture & Appliances</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Sofas, mattresses, chairs</li>
                      <li>• Refrigerators, washers</li>
                      <li>• Electronics disposal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Complete Cleanouts</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Garage & basement</li>
                      <li>• Estate cleanouts</li>
                      <li>• Hot tubs & pianos</li>
                    </ul>
                  </div>
                </div>

                <a href="tel:+13189141201" className="btn-cta inline-block">
                  <i className="fas fa-phone mr-2"></i>
                  Call for Service
                </a>
              </div>
              <div>
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48__3_}
                  alt="Professional residential junk removal team in Ruston Louisiana"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Commercial Services */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48__2_}
                  alt="Commercial junk removal services in Monroe Louisiana"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-military text-charcoal mb-4">
                  <i className="fas fa-building text-louisiana-gold mr-3"></i>
                  Commercial Junk Removal
                </h2>
                <p className="text-gray-600 mb-6">
                  Professional commercial cleanouts for Louisiana businesses. We work around your schedule with minimal disruption.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Office Cleanouts</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Furniture & equipment</li>
                      <li>• IT equipment disposal</li>
                      <li>• Document shredding</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Retail & Restaurant</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Store fixtures removal</li>
                      <li>• Kitchen equipment</li>
                      <li>• Renovation cleanup</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-louisiana-gold bg-opacity-10 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-charcoal mb-2">Commercial Benefits:</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Scheduled regular service</li>
                    <li>• Volume discounts available</li>
                    <li>• 24/7 emergency response</li>
                  </ul>
                </div>

                <a href="tel:+13189141201" className="btn-secondary inline-block">
                  <i className="fas fa-briefcase mr-2"></i>
                  Get Commercial Quote
                </a>
              </div>
            </div>

            {/* Construction Services */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-military text-charcoal mb-4">
                  <i className="fas fa-hard-hat text-louisiana-gold mr-3"></i>
                  Construction Debris Removal
                </h2>
                <p className="text-gray-600 mb-6">
                  Louisiana contractors trust Kane Pro for efficient construction debris removal. Job site safety and timeline focused.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Demolition Debris</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Drywall & concrete</li>
                      <li>• Metal & steel</li>
                      <li>• Tile & flooring</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Specialty Removal</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Storm damage cleanup</li>
                      <li>• Hazmat certified team</li>
                      <li>• EPA compliant disposal</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-red-700 mb-2">
                    <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                    24/7 Emergency Service
                  </h3>
                  <p className="text-red-600 text-sm">
                    Storm damage or site emergency? Call (318) 914-1201
                  </p>
                </div>

                <a href="tel:+13189141201" className="btn-cta inline-block">
                  <i className="fas fa-tools mr-2"></i>
                  Get Construction Quote
                </a>
              </div>
              <div>
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48}
                  alt="Construction debris removal in Louisiana"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ - Only 3 Essential Questions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-military text-charcoal mb-8 text-center">
            Common Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-charcoal mb-2">
                How much does junk removal cost in Louisiana?
              </h3>
              <p className="text-gray-600 text-sm">
                Costs range from $150-$600 depending on volume. We provide free in-person estimates for accurate pricing.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-charcoal mb-2">
                Do you offer same-day service?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! Same-day service available when you call before 2 PM. Emergency services available 24/7.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-charcoal mb-2">
                Are you licensed and insured?
              </h3>
              <p className="text-gray-600 text-sm">
                Fully licensed and insured in Louisiana with general liability and workers compensation coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-12 bg-deep-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-military mb-4">
            Ready to Clear Out Your Space?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Free estimates • Same-day service • Licensed & insured
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13189141201" className="btn-cta text-lg">
              <i className="fas fa-phone mr-2"></i>
              Call (318) 914-1201
            </a>
            <a href="mailto:kaneprojunkremoval@gmail.com" className="btn-outline text-lg">
              <i className="fas fa-envelope mr-2"></i>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}