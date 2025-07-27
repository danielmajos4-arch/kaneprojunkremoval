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
      {/* Breadcrumbs for better navigation */}
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
      <section className="pt-6 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-military text-deep-green mb-4">
            Professional Junk Removal Services
          </h1>
        </div>
      </section>

      {/* Service Area Quick Info */}
      <section className="py-8 bg-opacity-10 pt-[1px] pb-[1px]">
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
      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Residential Services */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-military text-charcoal mb-6">
                  <i
                    className="fas fa-home text-louisiana-gold mr-3"
                    aria-hidden="true"
                  ></i>
                  Residential Junk Removal in Ruston, LA
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  From single items to complete home cleanouts, Kane Pro handles
                  all your residential junk hauling needs across Calhoun,
                  Farmerville, Ruston (including Louisiana Tech area), West
                  Monroe, and Monroe Louisiana. Our faith-driven team treats
                  your home with respect while efficiently removing unwanted
                  items. Serving Lincoln Parish, Union Parish, and Ouachita
                  Parish with same-day service available.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Furniture Removal Near Me
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Sofas, chairs, mattresses</li>
                      <li>• Dining room sets</li>
                      <li>• Bedroom furniture</li>
                      <li>• Office furniture</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Appliance Removal Service
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Refrigerators & washers</li>
                      <li>• Stoves & dishwashers</li>
                      <li>• Water heaters</li>
                      <li>• HVAC units</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Complete Cleanout Services
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Garage cleanouts</li>
                      <li>• Basement cleanouts</li>
                      <li>• Attic cleanouts</li>
                      <li>• Estate cleanouts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Specialty Items
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Electronics disposal</li>
                      <li>• Exercise equipment</li>
                      <li>• Hot tubs & spas</li>
                      <li>• Pianos & organs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-charcoal mb-3">
                    <i className="fas fa-map-marker-alt text-louisiana-gold mr-2"></i>
                    Residential Service Areas & Drive Times:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <span>• Calhoun, LA - 0-10 minutes from base</span>
                    <span>• Farmerville, LA - 10-15 minutes</span>
                    <span>• Ruston, LA (Louisiana Tech) - 15-20 minutes</span>
                    <span>• West Monroe, LA - 20-25 minutes</span>
                    <span>• Monroe, LA (ULM area) - 25-30 minutes</span>
                    <span>• Grambling State University - 20 minutes</span>
                  </div>
                </div>

                <a href="tel:+13189141201" className="btn-cta inline-block">
                  <i className="fas fa-phone mr-2"></i>
                  Call for Residential Service
                </a>
              </div>
              <div>
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48__3_}
                  alt="Professional residential junk removal team loading furniture in Ruston Louisiana near Louisiana Tech University"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Commercial Services */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48__2_}
                  alt="Commercial junk removal services for businesses in Monroe Louisiana including office cleanouts and retail space clearing"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-military text-charcoal mb-6">
                  <i className="fas fa-building text-louisiana-gold mr-3"></i>
                  Commercial Junk Removal in Monroe, LA
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Keep your Louisiana business running smoothly with
                  professional commercial junk removal. We work around your
                  schedule to minimize disruption while maximizing efficiency.
                  Serving downtown Monroe, West Monroe business district, Ruston
                  commercial areas near Louisiana Tech, and Farmerville business
                  zones.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Office Cleanouts
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Furniture & equipment</li>
                      <li>• IT equipment disposal</li>
                      <li>• Document shredding</li>
                      <li>• Cubicle removal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Retail Spaces
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Store fixtures</li>
                      <li>• Inventory removal</li>
                      <li>• Display cases</li>
                      <li>• Renovation cleanup</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Restaurants
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Kitchen equipment</li>
                      <li>• Dining furniture</li>
                      <li>• Grease trap cleaning</li>
                      <li>• Deep fryer removal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Warehouses
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Industrial equipment</li>
                      <li>• Shelving systems</li>
                      <li>• Pallet removal</li>
                      <li>• Machinery disposal</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-louisiana-gold bg-opacity-10 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-charcoal mb-3">
                    <i className="fas fa-handshake text-louisiana-gold mr-2"></i>
                    Commercial Partnership Benefits:
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Scheduled regular service</li>
                    <li>• Volume discounts available</li>
                    <li>• 24/7 emergency response</li>
                    <li>• Proper disposal certificates</li>
                    <li>• Louisiana licensed & insured</li>
                  </ul>
                </div>

                <a
                  href="tel:+13189141201"
                  className="btn-secondary inline-block"
                >
                  <i className="fas fa-briefcase mr-2"></i>
                  Get Commercial Quote
                </a>
              </div>
            </div>

            {/* Construction Services */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-military text-charcoal mb-6">
                  <i className="fas fa-hard-hat text-louisiana-gold mr-3"></i>
                  Construction Debris Removal in North Louisiana
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Louisiana contractors trust Kane Pro for efficient
                  construction debris removal. We understand job site safety and
                  timeline requirements with integrity, keeping your projects on
                  schedule and compliant. Serving construction sites throughout
                  Lincoln Parish, Union Parish, and Ouachita Parish.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Demolition Debris
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Drywall & sheetrock</li>
                      <li>• Concrete & brick</li>
                      <li>• Metal & steel</li>
                      <li>• Tile & flooring</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Renovation Cleanup
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Lumber & wood waste</li>
                      <li>• Roofing materials</li>
                      <li>• Insulation removal</li>
                      <li>• Window & door removal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Specialty Removal
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Asbestos containment</li>
                      <li>• Lead paint disposal</li>
                      <li>• Hazmat certified team</li>
                      <li>• EPA compliant disposal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">
                      Storm Damage
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Hurricane cleanup</li>
                      <li>• Tree & debris removal</li>
                      <li>• Flood damage cleanup</li>
                      <li>• Emergency response</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-red-700 mb-3">
                    <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                    Emergency Construction Cleanup:
                  </h3>
                  <p className="text-red-600 mb-3">
                    Storm damage? Site accident? We provide 24/7 emergency
                    construction debris removal across Louisiana.
                  </p>
                  <a
                    href="tel:+13189141201"
                    className="text-red-700 font-semibold hover:text-red-800"
                  >
                    Call Emergency Line: (318) 914-1201
                  </a>
                </div>

                <a href="tel:+13189141201" className="btn-cta inline-block">
                  <i className="fas fa-tools mr-2"></i>
                  Get Construction Quote
                </a>
              </div>
              <div>
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48}
                  alt="Construction debris removal and demolition cleanup at Louisiana job sites including drywall concrete and renovation waste"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section for Enhanced SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about junk removal services in North Louisiana
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                How much does junk removal cost in Ruston, LA?
              </h3>
              <p className="text-gray-600">
                Junk removal costs in Ruston typically range from $150-$600
                depending on the volume of items. We provide free in-person
                estimates for accurate pricing based on your specific needs.
                Factors include item size, weight, and disposal requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                Do you offer same-day junk removal service?
              </h3>
              <p className="text-gray-600">
                Yes! We offer same-day junk removal service throughout Monroe,
                Calhoun, Farmerville, Ruston, and West Monroe when you call
                before 2 PM. Emergency services are available 24/7 for urgent
                situations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                What items can you remove from my home?
              </h3>
              <p className="text-gray-600">
                We remove furniture, appliances, electronics, construction
                debris, yard waste, and most household items. We cannot remove
                hazardous materials, paint, chemicals, or items containing
                asbestos without proper certification.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                Are you licensed and insured in Louisiana?
              </h3>
              <p className="text-gray-600">
                Yes, Kane Pro Junk Removal is fully licensed and insured to
                operate in Louisiana. We carry general liability insurance and
                workers compensation to protect your property and our team
                during service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                How far do you travel for junk removal?
              </h3>
              <p className="text-gray-600">
                We serve a 30-mile radius from our Calhoun base, including
                Ruston (Louisiana Tech area), Monroe, West Monroe, Farmerville,
                Grambling, Choudrant, and surrounding Union Parish, Lincoln
                Parish, and Ouachita Parish communities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                Do you recycle or donate items?
              </h3>
              <p className="text-gray-600">
                Absolutely! We prioritize eco-friendly disposal by donating
                usable items to local Louisiana charities and recycling
                materials whenever possible. We're committed to keeping items
                out of landfills when appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military text-charcoal mb-4">
              What Our Louisiana Customers Say
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              <i className="fas fa-star text-louisiana-gold text-xl"></i>
              <i className="fas fa-star text-louisiana-gold text-xl"></i>
              <i className="fas fa-star text-louisiana-gold text-xl"></i>
              <i className="fas fa-star text-louisiana-gold text-xl"></i>
              <i className="fas fa-star text-louisiana-gold text-xl"></i>
              <span className="ml-2 text-lg text-gray-600">
                5.0 stars from local customers
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Kane Pro removed all our old furniture when we moved to Ruston.
                Professional, on-time, and fair pricing. Highly recommend for
                junk removal in North Louisiana!"
              </p>
              <div className="text-sm text-gray-500">- Sarah M., Ruston LA</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Excellent commercial cleanout service for our Monroe office
                renovation. They worked around our schedule and handled
                everything professionally."
              </p>
              <div className="text-sm text-gray-500">- Mike T., Monroe LA</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                  <i className="fas fa-star text-louisiana-gold"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Fast same-day service in Calhoun! They removed our old
                appliances and donated what they could. Great local company with
                integrity."
              </p>
              <div className="text-sm text-gray-500">
                - Jennifer L., Calhoun LA
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Free Estimate Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military text-charcoal mb-4">
              Free In-Person Estimates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fair, transparent pricing with no surprises. We come to you for
              accurate estimates on all junk removal projects throughout North
              Louisiana.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  <i className="fas fa-handshake text-louisiana-gold mr-2"></i>
                  Our Estimate Process
                </h3>
                <ul className="text-gray-600 space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-phone text-louisiana-gold mt-1 flex-shrink-0"></i>
                    <span>
                      <strong>Call Us:</strong> Schedule your free estimate by
                      phone
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-home text-louisiana-gold mt-1 flex-shrink-0"></i>
                    <span>
                      <strong>We Visit:</strong> Our team comes to your location
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-calculator text-louisiana-gold mt-1 flex-shrink-0"></i>
                    <span>
                      <strong>Fair Quote:</strong> Accurate pricing based on
                      actual volume
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-louisiana-gold mt-1 flex-shrink-0"></i>
                    <span>
                      <strong>No Pressure:</strong> Take time to decide -
                      estimates valid 30 days
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-vibrant-orange text-white rounded-xl p-6 mb-4">
                  <h4 className="text-xl font-bold mb-2">100% FREE</h4>
                  <p className="text-lg">In-Person Estimates</p>
                </div>
                <a
                  href="tel:+13189141201"
                  className="btn-cta text-lg w-full block"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call (318) 914-1201
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Available 7am-8pm Mon-Sat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Area Map */}
      <section className="py-16 bg-deep-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military mb-4 text-white">
              Proudly Serving North Louisiana
            </h2>
            <p className="text-lg text-gray-300">
              Same day service available across our Louisiana service area -
              within 30 miles of Calhoun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center glassmorphism">
              <h3 className="text-xl font-bold text-vibrant-orange mb-2">
                Calhoun
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Our home base - serving Union Parish with pride
              </p>
              <Link
                href="/areas"
                className="inline-block bg-vibrant-orange text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-vibrant-orange/90 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center glassmorphism">
              <h3 className="text-xl font-bold text-vibrant-orange mb-2">
                Farmerville
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Rural & farm property specialists
              </p>
              <Link
                href="/areas"
                className="inline-block bg-vibrant-orange text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-vibrant-orange/90 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center glassmorphism">
              <h3 className="text-xl font-bold text-vibrant-orange mb-2">
                Ruston
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Louisiana Tech University area service
              </p>
              <Link
                href="/areas"
                className="inline-block bg-vibrant-orange text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-vibrant-orange/90 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center glassmorphism">
              <h3 className="text-xl font-bold text-vibrant-orange mb-2">
                West Monroe
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Ouachita Parish commercial specialists
              </p>
              <Link
                href="/areas"
                className="inline-block bg-vibrant-orange text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-vibrant-orange/90 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center glassmorphism">
              <h3 className="text-xl font-bold text-vibrant-orange mb-2">
                Monroe
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                North Louisiana's largest city coverage
              </p>
              <Link
                href="/areas"
                className="inline-block bg-vibrant-orange text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-vibrant-orange/90 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13189141201" className="btn-cta text-lg">
                <i className="fas fa-phone mr-2"></i>
                Call (318) 914-1201
              </a>
              <a
                href="mailto:kaneprojunkremoval@gmail.com"
                className="btn-outline text-lg"
              >
                <i className="fas fa-envelope mr-2"></i>
                Email Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}
