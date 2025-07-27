import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";

import WhatsApp_Image_2025_07_26_at_21_22_48__3_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (3).jpeg";

import WhatsApp_Image_2025_07_26_at_21_22_48__2_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (2).jpeg";

import WhatsApp_Image_2025_07_26_at_21_22_48 from "@assets/WhatsApp Image 2025-07-26 at 21.22.48.jpeg";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/hero-background-latest.png')`
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-4xl md:text-5xl font-military mb-4">
            Junk Removal Services Louisiana | Kane's Hauling Calhoun
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional junk hauling & debris removal serving Calhoun, Ruston, Monroe, Farmerville & West Monroe LA
          </p>
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
                  <i className="fas fa-home text-louisiana-gold mr-3" aria-hidden="true"></i>
                  Residential Junk Removal Calhoun, Ruston & Monroe LA
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  From single items to complete home cleanouts, Kane's handles all your residential junk hauling needs across Calhoun, Farmerville, Ruston, West Monroe, and Monroe Louisiana. Our faith-driven team treats your home with respect while efficiently removing unwanted items.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Furniture Removal</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Sofas, chairs, mattresses</li>
                      <li>• Dining room sets</li>
                      <li>• Bedroom furniture</li>
                      <li>• Office furniture</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Appliance Removal</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Refrigerators & washers</li>
                      <li>• Stoves & dishwashers</li>
                      <li>• Water heaters</li>
                      <li>• HVAC units</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Cleanout Services</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Garage cleanouts</li>
                      <li>• Basement cleanouts</li>
                      <li>• Attic cleanouts</li>
                      <li>• Estate cleanouts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Specialty Items</h3>
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
                    Serving These Louisiana Communities:
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
                    <span>• Calhoun, LA</span>
                    <span>• Farmerville, LA</span>
                    <span>• Ruston, LA</span>
                    <span>• West Monroe, LA</span>
                    <span>• Monroe, LA</span>
                    <span>• Surrounding areas</span>
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
                  alt="Professional residential junk removal team in Louisiana"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Commercial Services */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={WhatsApp_Image_2025_07_26_at_21_22_48__2_} 
                  alt="Commercial junk removal services in Louisiana"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-military text-charcoal mb-6">
                  <i className="fas fa-building text-louisiana-gold mr-3"></i>
                  Commercial Cleanouts Across Louisiana
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Keep your Louisiana business running smoothly with professional commercial junk removal. We work around your schedule to minimize disruption while maximizing efficiency.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Office Cleanouts</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Furniture & equipment</li>
                      <li>• IT equipment disposal</li>
                      <li>• Document shredding</li>
                      <li>• Cubicle removal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Retail Spaces</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Store fixtures</li>
                      <li>• Inventory removal</li>
                      <li>• Display cases</li>
                      <li>• Renovation cleanup</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Restaurants</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Kitchen equipment</li>
                      <li>• Dining furniture</li>
                      <li>• Grease trap cleaning</li>
                      <li>• Deep fryer removal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Warehouses</h3>
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

                <a href="tel:+13189141201" className="btn-secondary inline-block">
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
                  Construction Debris - Louisiana Job Sites
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Louisiana contractors trust Kane Pro for efficient construction debris removal. We understand job site safety and timeline requirements with integrity, keeping your projects on schedule and compliant.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Demolition Debris</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Drywall & sheetrock</li>
                      <li>• Concrete & brick</li>
                      <li>• Metal & steel</li>
                      <li>• Tile & flooring</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Renovation Cleanup</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Lumber & wood waste</li>
                      <li>• Roofing materials</li>
                      <li>• Insulation removal</li>
                      <li>• Window & door removal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Specialty Removal</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Asbestos containment</li>
                      <li>• Lead paint disposal</li>
                      <li>• Hazmat certified team</li>
                      <li>• EPA compliant disposal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-3">Storm Damage</h3>
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
                    Storm damage? Site accident? We provide 24/7 emergency construction debris removal across Louisiana.
                  </p>
                  <a href="tel:+13189141201" className="text-red-700 font-semibold hover:text-red-800">
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
                  alt="Construction debris removal at Louisiana job site"
                  className="w-full rounded-xl shadow-lg"
                />
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
              Fair, transparent pricing with no surprises. We come to you for accurate estimates on all junk removal projects.
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
                    <span><strong>Call Us:</strong> Schedule your free estimate by phone</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-home text-louisiana-gold mt-1 flex-shrink-0"></i>
                    <span><strong>We Visit:</strong> Our team comes to your location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-calculator text-louisiana-gold mt-1 flex-shrink-0"></i>
                    <span><strong>Fair Quote:</strong> Accurate pricing based on actual volume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-louisiana-gold mt-1 flex-shrink-0"></i>
                    <span><strong>No Pressure:</strong> Take time to decide - estimates valid 30 days</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-vibrant-orange text-white rounded-xl p-6 mb-4">
                  <h4 className="text-xl font-bold mb-2">100% FREE</h4>
                  <p className="text-lg">In-Person Estimates</p>
                </div>
                <a href="tel:+13189141201" className="btn-cta text-lg w-full block">
                  <i className="fas fa-phone mr-2"></i>
                  Call (318) 914-1201
                </a>
                <p className="text-sm text-gray-500 mt-2">Available 7am-8pm Mon-Sat</p>
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
              Same day service available across our Louisiana service area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center glassmorphism">
              <h3 className="text-xl font-bold text-vibrant-orange mb-2">Calhoun</h3>
              <p className="text-gray-300 text-sm mb-4">Our home base - serving Union Parish with pride</p>
              <Link href="/areas" className="text-vibrant-orange hover:text-white text-sm font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center glassmorphism">
              <h3 className="text-xl font-bold text-vibrant-orange mb-2">Farmerville</h3>
              <p className="text-gray-300 text-sm mb-4">Rural & farm property specialists</p>
              <Link href="/areas" className="text-vibrant-orange hover:text-white text-sm font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center glassmorphism">
              <h3 className="text-xl font-bold text-vibrant-orange mb-2">Ruston</h3>
              <p className="text-gray-300 text-sm mb-4">Louisiana Tech University area service</p>
              <Link href="/areas" className="text-vibrant-orange hover:text-white text-sm font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center glassmorphism">
              <h3 className="text-xl font-bold text-vibrant-orange mb-2">West Monroe</h3>
              <p className="text-gray-300 text-sm mb-4">Ouachita Parish commercial specialists</p>
              <Link href="/areas" className="text-vibrant-orange hover:text-white text-sm font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center glassmorphism">
              <h3 className="text-xl font-bold text-vibrant-orange mb-2">Monroe</h3>
              <p className="text-gray-300 text-sm mb-4">North Louisiana's largest city coverage</p>
              <Link href="/areas" className="text-vibrant-orange hover:text-white text-sm font-semibold">
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
              <a href="mailto:kaneprojunkremoval@gmail.com" className="btn-outline text-lg">
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
