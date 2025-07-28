import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

import Junk_removal from "@assets/Junk removal.jpeg";
import WhatsApp_Image_2025_07_27_at_21_55_19 from "@assets/WhatsApp Image 2025-07-27 at 21.55.19.jpeg";
import WhatsApp_Image_2025_07_27_at_21_55_19__3_ from "@assets/WhatsApp Image 2025-07-27 at 21.55.19 (3).jpeg";
import WhatsApp_Image_2025_07_27_at_21_55_19__2_ from "@assets/WhatsApp Image 2025-07-27 at 21.55.19 (2).jpeg";
import WhatsApp_Image_2025_07_27_at_22_09_53__2_ from "@assets/WhatsApp Image 2025-07-27 at 22.09.53 (2).jpeg";

export default function ServiceAreasPage() {
  return (
    <>
      <SEO
        title="Monroe LA Junk Removal | Kane Pro | Ouachita Parish Same-Day Service"
        description="Monroe LA junk removal, same-day service, free quote. Kane Pro serves Monroe, West Monroe & Ouachita Parish. Call (318) 914-1201 for fast junk hauling!"
        keywords="Monroe LA junk removal, Ouachita Parish junk hauling, Northeast Louisiana junk removal, Monroe Louisiana debris removal, West Monroe junk service, junk removal near me Monroe LA"
        canonicalUrl="https://kanejunkremoval.com/areas"
        ogTitle="Monroe LA Junk Removal | Same-Day Service | Kane Pro Ouachita Parish"
        ogDescription="Professional junk removal in Monroe LA and Ouachita Parish. Same-day service, free quotes. Call (318) 914-1201 for fast, reliable junk hauling!"
        structuredData={generateLocalBusinessSchema("Monroe")}
        city="Monroe"
      />
      {/* Service Areas Overview - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-military text-charcoal mb-4">
              Monroe LA Junk Removal | Northeast Louisiana Coverage
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Same-day junk hauling serving Monroe LA, Ouachita Parish &
              Northeast Louisiana. Professional service with free quotes!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Monroe LA - Primary Focus */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ring-2 ring-louisiana-gold">
              <div className="bg-louisiana-gold text-white px-4 py-2 text-center font-semibold text-sm">
                <i className="fas fa-star mr-1"></i> PRIMARY SERVICE AREA
              </div>
              <img
                src={WhatsApp_Image_2025_07_27_at_22_09_53__2_}
                alt="Monroe LA junk removal service - Ouachita Parish same day pickup"
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-city text-louisiana-gold mr-2"></i>
                  Monroe LA Junk Removal
                </h2>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Ouachita Parish's premier junk removal! Same-day pickup, free
                  quotes.
                </p>
                <ul className="text-xs md:text-sm text-charcoal space-y-1 mb-4">
                  <li>• Monroe LA Commercial Projects</li>
                  <li>• Ouachita Parish Residential</li>
                  <li>• Northeast Louisiana Coverage</li>
                </ul>
                <a
                  href="tel:+13189141201"
                  className="block w-full btn-cta text-center text-sm md:text-base"
                >
                  Call Monroe LA Service
                </a>
              </div>
            </div>

            {/* Other service areas with mobile optimization */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={WhatsApp_Image_2025_07_27_at_21_55_19}
                alt="Farmerville Louisiana junk removal Union Parish service"
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-tractor text-louisiana-gold mr-2"></i>
                  Farmerville Junk Removal
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Union Parish service with Louisiana pride.
                </p>
                <ul className="text-xs md:text-sm text-charcoal space-y-1 mb-4">
                  <li>• Farm & Ranch Cleanouts</li>
                  <li>• Residential Services</li>
                  <li>• Agricultural Equipment</li>
                </ul>
                <a
                  href="tel:+13189141201"
                  className="block w-full btn-secondary text-center text-sm md:text-base"
                >
                  Call Farmerville Service
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={WhatsApp_Image_2025_07_27_at_21_55_19__2_}
                alt="Ruston Louisiana Tech University junk removal student housing"
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-graduation-cap text-louisiana-gold mr-2"></i>
                  Ruston Junk Removal
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Louisiana Tech area specialists.
                </p>
                <ul className="text-xs md:text-sm text-charcoal space-y-1 mb-4">
                  <li>• Student Housing Cleanouts</li>
                  <li>• University Area Services</li>
                  <li>• Move-in/Move-out Help</li>
                </ul>
                <a
                  href="tel:+13189141201"
                  className="block w-full btn-cta text-center text-sm md:text-base"
                >
                  Call Ruston Service
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={WhatsApp_Image_2025_07_27_at_21_55_19__3_}
                alt="West Monroe LA junk removal Ouachita Parish twin city service"
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-water text-louisiana-gold mr-2"></i>
                  West Monroe LA
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Twin city to Monroe LA! Same Ouachita Parish quality.
                </p>
                <ul className="text-xs md:text-sm text-charcoal space-y-1 mb-4">
                  <li>• Ouachita Parish Residential</li>
                  <li>• Monroe LA Area Commercial</li>
                  <li>• Storm Cleanup Service</li>
                </ul>
                <a
                  href="tel:+13189141201"
                  className="block w-full btn-secondary text-center text-sm md:text-base"
                >
                  Call West Monroe Service
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={Junk_removal}
                alt="Calhoun Louisiana junk removal Northeast Louisiana home base"
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-home text-louisiana-gold mr-2"></i>
                  Calhoun Junk Removal
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Our Northeast Louisiana home base!
                </p>
                <ul className="text-xs md:text-sm text-charcoal space-y-1 mb-4">
                  <li>• Northeast LA Coverage</li>
                  <li>• Construction Debris</li>
                  <li>• Emergency Same Day</li>
                </ul>
                <a
                  href="tel:+13189141201"
                  className="block w-full btn-cta text-center text-sm md:text-base"
                >
                  Call Calhoun Service
                </a>
              </div>
            </div>

            {/* Emergency Service Box */}
            <div className="bg-red-600 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-4 md:p-6 h-full flex flex-col justify-center text-center">
                <i className="fas fa-exclamation-triangle text-3xl md:text-4xl mb-4"></i>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  Monroe LA Emergency
                </h3>
                <p className="mb-4 text-sm md:text-base">
                  Storm damage in Ouachita Parish? We're here to help Monroe LA
                  recover fast.
                </p>
                <a
                  href="tel:+13189141201"
                  className="block w-full bg-white text-red-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-touch text-sm md:text-base"
                >
                  Emergency: (318) 914-1201
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* NEW KILLER GALLERY SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-charcoal to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-military mb-4 text-[#235631]">
              Monroe LA Junk Removal Gallery - Real Northeast Louisiana Projects
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-[#01060de6]">
              See our professional work across Monroe LA, Ouachita Parish &
              Northeast Louisiana. Real before & after results!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {/* Gallery Item 1 - Monroe LA Commercial */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <img
                  src={WhatsApp_Image_2025_07_27_at_22_09_53__2_}
                  alt="Monroe LA commercial junk removal project downtown Ouachita Parish office building cleanup before after"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Glassmorphic Location Tag */}
                <div className="absolute top-3 md:top-4 left-3 md:left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm flex items-center">
                    <i className="fas fa-map-marker-alt mr-1 text-louisiana-gold"></i>
                    Monroe LA
                  </span>
                </div>

                {/* Service Type Badge */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 glassmorphism bg-louisiana-gold/90 backdrop-blur-md px-2 md:px-3 py-1 rounded-full">
                  <span className="text-charcoal font-semibold text-xs md:text-sm">
                    Commercial
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">
                    Downtown Monroe LA Office
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm">
                    Complete office cleanout - Ouachita Parish commercial
                    district
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 2 - Ouachita Parish Residential */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <img
                  src={WhatsApp_Image_2025_07_27_at_21_55_19}
                  alt="Ouachita Parish residential junk removal Monroe LA area home estate cleanout furniture appliance removal"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-3 md:top-4 left-3 md:left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm flex items-center">
                    <i className="fas fa-map-marker-alt mr-1 text-louisiana-gold"></i>
                    Ouachita Parish
                  </span>
                </div>

                <div className="absolute top-3 md:top-4 right-3 md:right-4 glassmorphism bg-green-500/90 backdrop-blur-md px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm">
                    Residential
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">
                    Ouachita Parish Home
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm">
                    Full house cleanout near Monroe LA - furniture & appliances
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 - West Monroe */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <img
                  src={WhatsApp_Image_2025_07_27_at_21_55_19__3_}
                  alt="West Monroe Louisiana junk removal Ouachita Parish estate cleanout furniture debris removal service"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-3 md:top-4 left-3 md:left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm flex items-center">
                    <i className="fas fa-map-marker-alt mr-1 text-louisiana-gold"></i>
                    West Monroe
                  </span>
                </div>

                <div className="absolute top-3 md:top-4 right-3 md:right-4 glassmorphism bg-blue-500/90 backdrop-blur-md px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm">
                    Estate Cleanout
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">
                    West Monroe Estate
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm">
                    Complete estate cleanout - Ouachita Parish family home
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 4 - Ruston University */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <img
                  src={WhatsApp_Image_2025_07_27_at_21_55_19__2_}
                  alt="Ruston Louisiana Tech University junk removal student housing apartment cleanout move out service"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-3 md:top-4 left-3 md:left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm flex items-center">
                    <i className="fas fa-map-marker-alt mr-1 text-louisiana-gold"></i>
                    Ruston
                  </span>
                </div>

                <div className="absolute top-3 md:top-4 right-3 md:right-4 glassmorphism bg-purple-500/90 backdrop-blur-md px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm">
                    Student Housing
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">
                    Louisiana Tech Area
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm">
                    Student apartment cleanout - Ruston university district
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 5 - Construction */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <img
                  src={Junk_removal}
                  alt="Northeast Louisiana construction debris removal Monroe LA commercial renovation cleanup contractor waste"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-3 md:top-4 left-3 md:left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm flex items-center">
                    <i className="fas fa-map-marker-alt mr-1 text-louisiana-gold"></i>
                    Northeast LA
                  </span>
                </div>

                <div className="absolute top-3 md:top-4 right-3 md:right-4 glassmorphism bg-orange-500/90 backdrop-blur-md px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm">
                    Construction
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">
                    Construction Debris
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm">
                    Commercial renovation cleanup - Northeast Louisiana
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 6 - Emergency Storm */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Monroe LA storm damage cleanup Ouachita Parish emergency junk removal hurricane debris tree removal"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-3 md:top-4 left-3 md:left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm flex items-center">
                    <i className="fas fa-exclamation-triangle mr-1 text-red-400"></i>
                    Emergency
                  </span>
                </div>

                <div className="absolute top-3 md:top-4 right-3 md:right-4 glassmorphism bg-red-500/90 backdrop-blur-md px-2 md:px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-xs md:text-sm">
                    Storm Damage
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">
                    Monroe LA Storm Cleanup
                  </h3>
                  <p className="text-gray-200 text-xs md:text-sm">
                    Emergency debris removal - Ouachita Parish storm damage
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Stats - Mobile Optimized */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 md:p-8 text-white glassmorphism">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-louisiana-gold mb-2">
                  500+
                </div>
                <div className="text-gray-300 text-xs md:text-sm">
                  Monroe LA Projects
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-louisiana-gold mb-2">
                  50+
                </div>
                <div className="text-gray-300 text-xs md:text-sm">
                  Ouachita Parish Businesses
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-louisiana-gold mb-2">
                  24/7
                </div>
                <div className="text-gray-300 text-xs md:text-sm">
                  Northeast LA Coverage
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-louisiana-gold mb-2">
                  100%
                </div>
                <div className="text-gray-300 text-xs md:text-sm">
                  Customer Satisfaction
                </div>
              </div>
            </div>

            <div className="text-center mt-6 md:mt-8">
              <a
                href="tel:+13189141201"
                className="btn-cta inline-block text-sm md:text-lg"
              >
                <i className="fas fa-camera mr-2"></i>
                See Your Project Next - Call (318) 914-1201
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* SHORTENED Coverage Map Section - Mobile First */}
      <section className="py-12 md:py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-military mb-4">
              Monroe LA & Northeast Louisiana Fast Coverage
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              One call covers Ouachita Parish to Union Parish. Monroe LA junk
              removal specialists!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-military text-louisiana-gold mb-6">
                Why Kane Pro for Monroe LA Junk Removal?
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="shield-shape bg-louisiana-gold w-10 md:w-12 h-10 md:h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-charcoal text-sm md:text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-2">
                      Monroe LA Local Knowledge
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base">
                      Know every Ouachita Parish route, Monroe LA neighborhood &
                      Northeast Louisiana disposal site.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="shield-shape bg-louisiana-gold w-10 md:w-12 h-10 md:h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-charcoal text-sm md:text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-2">
                      Same-Day Monroe LA Service
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base">
                      Local Ouachita Parish coverage = faster response across
                      Monroe LA & Northeast Louisiana.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="shield-shape bg-louisiana-gold w-10 md:w-12 h-10 md:h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-dollar-sign text-charcoal text-sm md:text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-2">
                      No Travel Charges
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base">
                      Multi-city service = no distance fees for Louisiana
                      communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-6 md:p-8 rounded-xl glassmorphism">
              <h3 className="text-lg md:text-xl font-bold text-louisiana-gold mb-6 text-center">
                <i className="fas fa-shield-alt mr-2"></i>
                Louisiana Service Guarantee
              </h3>

              <div className="space-y-4 text-center">
                <div className="border-b border-white border-opacity-20 pb-4">
                  <h4 className="font-semibold mb-2 text-sm md:text-base">
                    Same Day Service
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm">
                    Available across all 5 cities
                  </p>
                </div>

                <div className="border-b border-white border-opacity-20 pb-4">
                  <h4 className="font-semibold mb-2 text-sm md:text-base">
                    Licensed & Insured
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm">
                    In all Louisiana parishes we serve
                  </p>
                </div>

                <div className="border-b border-white border-opacity-20 pb-4">
                  <h4 className="font-semibold mb-2 text-sm md:text-base">
                    Local Partnerships
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm">
                    Supporting Louisiana communities
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm md:text-base">
                    24/7 Emergency
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm">
                    Storm damage & urgent cleanouts
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center space-y-3">
                <a
                  href="tel:+13189141201"
                  className="btn-cta w-full text-sm md:text-base"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call (318) 914-1201
                </a>
                <a
                  href="mailto:kaneprojunkremoval@gmail.com"
                  className="btn-outline w-full text-sm md:text-base"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Email Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Local Louisiana Pride - Shortened */}
      <section className="py-12 md:py-16 bg-louisiana-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-military text-navy mb-6">
            Geaux Kane Pro Across Louisiana!
          </h2>
          <p className="text-base md:text-xl text-navy mb-8 max-w-3xl mx-auto">
            From Union Parish farms to Louisiana Tech, from the Ouachita River
            to downtown Monroe - Kane Pro is Louisiana proud!
          </p>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-8">
            <div className="text-center">
              <i className="fas fa-fleur-de-lis text-2xl md:text-4xl text-navy mb-3"></i>
              <h3 className="font-semibold text-navy text-xs md:text-sm">
                Louisiana Born
              </h3>
            </div>
            <div className="text-center">
              <i className="fas fa-tractor text-2xl md:text-4xl text-navy mb-3"></i>
              <h3 className="font-semibold text-navy text-xs md:text-sm">
                Rural Pride
              </h3>
            </div>
            <div className="text-center">
              <i className="fas fa-graduation-cap text-2xl md:text-4xl text-navy mb-3"></i>
              <h3 className="font-semibold text-navy text-xs md:text-sm">
                University Support
              </h3>
            </div>
            <div className="text-center">
              <i className="fas fa-water text-2xl md:text-4xl text-navy mb-3"></i>
              <h3 className="font-semibold text-navy text-xs md:text-sm">
                River Communities
              </h3>
            </div>
            <div className="text-center">
              <i className="fas fa-city text-2xl md:text-4xl text-navy mb-3"></i>
              <h3 className="font-semibold text-navy text-xs md:text-sm">
                City Services
              </h3>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13189141201"
              className="btn-secondary text-sm md:text-lg"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Your Louisiana Team
            </a>
            <a
              href="mailto:kaneprojunkremoval@gmail.com"
              className="btn-outline text-sm md:text-lg"
            >
              <i className="fas fa-envelope mr-2"></i>
              Email Kane Pro
            </a>
          </div>
        </div>
      </section>
      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}
