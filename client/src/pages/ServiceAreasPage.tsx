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
                                        title="Monroe LA Junk Removal | Kane Pro | Ouachita Parish"
                                        description="Monroe LA junk removal, same-day service, free quote. Kane Pro serves Monroe, West Monroe & Ouachita Parish. Call (318) 914-1201 for fast junk hauling!"
                                        keywords="Monroe LA junk removal, Ouachita Parish junk hauling, Northeast Louisiana junk removal, Monroe Louisiana debris removal, West Monroe junk service"
                                        canonicalUrl="https://kanejunkremoval.com/areas"
                                        ogTitle="Monroe LA Junk Removal | Same-Day Service | Kane Pro Ouachita Parish"
                                        ogDescription="Professional junk removal in Monroe LA and Ouachita Parish. Same-day service, free quotes. Call (318) 914-1201 for fast, reliable junk hauling!"
                                        structuredData={generateLocalBusinessSchema("Monroe")}
                                        city="Monroe"
                                      />
                                      {/* Service Areas Overview */}
                                      <section className="py-16 bg-gray-50">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                          <div className="text-center mb-12">
                                            <h1 className="text-3xl md:text-4xl font-military text-charcoal mb-4">
                                              Monroe LA Junk Removal & Northeast Louisiana Coverage
                                            </h1>
                                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                              Same-day junk hauling and debris removal serving Monroe LA, Ouachita Parish, and all of Northeast Louisiana with professional service. Free quotes available!
                                            </p>
                                          </div>

                                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {/* Monroe LA - Primary Focus */}
                                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ring-2 ring-louisiana-gold">
                                              <div className="bg-louisiana-gold text-white px-4 py-2 text-center font-semibold">
                                                <i className="fas fa-star mr-1"></i> PRIMARY SERVICE AREA
                                              </div>
                                              <img 
                                                src={WhatsApp_Image_2025_07_27_at_22_09_53__2_} 
                                                alt="Monroe LA junk removal service - Ouachita Parish" 
                                                className="w-full h-48 object-cover pt-[0px] pb-[0px]" 
                                              />
                                              <div className="p-6">
                                                <h2 className="text-xl font-bold text-charcoal mb-3">
                                                  <i className="fas fa-city text-louisiana-gold mr-2"></i>
                                                  Monroe LA Junk Removal
                                                </h2>
                                                <p className="text-gray-600 mb-4">Ouachita Parish's premier junk removal service! Same-day pickup, free quotes for Monroe LA residents.</p>
                                                <ul className="text-sm text-charcoal space-y-1 mb-4">
                                                  <li>• Monroe LA Commercial Projects</li>
                                                  <li>• Ouachita Parish Residential Service</li>
                                                  <li>• Northeast Louisiana Coverage</li>
                                                </ul>
                                                <a href="tel:+13189141201" className="block w-full btn-cta text-center">
                                                  Call for Monroe LA Service
                                                </a>
                                              </div>
                                            </div>

                                            {/* Farmerville */}
                                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                              <img 
                                                src={WhatsApp_Image_2025_07_27_at_21_55_19} 
                                                alt="Farmerville Louisiana junk removal service area" 
                                                className="w-full h-48 object-cover" 
                                              />
                                              <div className="p-6">
                                                <h3 className="text-xl font-bold text-charcoal mb-3">
                                                  <i className="fas fa-tractor text-louisiana-gold mr-2"></i>
                                                  Farmerville Junk Removal
                                                </h3>
                                                <p className="text-gray-600 mb-4">Serving Union Parish with Louisiana pride and military precision.</p>
                                                <ul className="text-sm text-charcoal space-y-1 mb-4">
                                                  <li>• Farm & Ranch Cleanouts</li>
                                                  <li>• Residential Property Services</li>
                                                  <li>• Agricultural Equipment Removal</li>
                                                </ul>
                                                <a href="tel:+13189141201" className="block w-full btn-secondary text-center">
                                                  Call for Farmerville Service
                                                </a>
                                              </div>
                                            </div>

                                            {/* Ruston */}
                                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                              <img 
                                                src={WhatsApp_Image_2025_07_27_at_21_55_19__2_} 
                                                alt="Ruston Louisiana junk removal near Louisiana Tech University" 
                                                className="w-full h-48 object-cover" 
                                              />
                                              <div className="p-6">
                                                <h3 className="text-xl font-bold text-charcoal mb-3">
                                                  <i className="fas fa-graduation-cap text-louisiana-gold mr-2"></i>
                                                  Ruston Junk Removal
                                                </h3>
                                                <p className="text-gray-600 mb-4">Home of Louisiana Tech! Student housing and residential service specialists.</p>
                                                <ul className="text-sm text-charcoal space-y-1 mb-4">
                                                  <li>• Student Housing Cleanouts</li>
                                                  <li>• University Area Services</li>
                                                  <li>• Move-in/Move-out Assistance</li>
                                                </ul>
                                                <a href="tel:+13189141201" className="block w-full btn-cta text-center">
                                                  Call for Ruston Service
                                                </a>
                                              </div>
                                            </div>

                                            {/* West Monroe - Connected to Monroe LA */}
                                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                              <img 
                                                src={WhatsApp_Image_2025_07_27_at_21_55_19__3_} 
                                                alt="West Monroe LA junk removal near Monroe - Ouachita Parish" 
                                                className="w-full h-48 object-cover" 
                                              />
                                              <div className="p-6">
                                                <h3 className="text-xl font-bold text-charcoal mb-3">
                                                  <i className="fas fa-water text-louisiana-gold mr-2"></i>
                                                  West Monroe LA Junk Removal
                                                </h3>
                                                <p className="text-gray-600 mb-4">Twin city to Monroe LA! Same Ouachita Parish quality service, just across the river.</p>
                                                <ul className="text-sm text-charcoal space-y-1 mb-4">
                                                  <li>• Ouachita Parish Residential Service</li>
                                                  <li>• Monroe LA Area Commercial</li>
                                                  <li>• Northeast Louisiana Storm Cleanup</li>
                                                </ul>
                                                <a href="tel:+13189141201" className="block w-full btn-secondary text-center">
                                                  Call for West Monroe LA Service
                                                </a>
                                              </div>
                                            </div>

                                            {/* Calhoun - Our Home Base */}
                                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                              <img 
                                                src={Junk_removal} 
                                                alt="Calhoun Louisiana junk removal service area" 
                                                className="w-full h-48 object-cover pt-[-17px] pb-[-17px]" 
                                              />
                                              <div className="p-6">
                                                <h3 className="text-xl font-bold text-charcoal mb-3">
                                                  <i className="fas fa-home text-louisiana-gold mr-2"></i>
                                                  Calhoun Junk Removal
                                                </h3>
                                                <p className="text-gray-600 mb-4">Our home base in Northeast Louisiana! Same day service available for Calhoun residents.</p>
                                                <ul className="text-sm text-charcoal space-y-1 mb-4">
                                                  <li>• Northeast Louisiana Coverage</li>
                                                  <li>• Construction Debris Removal</li>
                                                  <li>• Emergency Same Day Service</li>
                                                </ul>
                                                <a href="tel:+13189141201" className="block w-full btn-cta text-center">
                                                  Call for Calhoun Service
                                                </a>
                                              </div>
                                            </div>


                                            {/* Emergency Service Box */}
                                            <div className="bg-red-600 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                              <div className="p-6 h-full flex flex-col justify-center text-center">
                                                <i className="fas fa-exclamation-triangle text-4xl mb-4"></i>
                                                <h3 className="text-xl font-bold mb-3">Monroe LA Emergency Service</h3>
                                                <p className="mb-4">Storm damage in Ouachita Parish? Hurricane cleanup in Northeast Louisiana? We're here to help Monroe LA recover quickly.</p>
                                                <a href="tel:+13189141201" className="block w-full bg-white text-red-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-touch">
                                                  Emergency Monroe LA: (318) 914-1201
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>

                                      {/* Interactive Before/After Gallery - Monroe LA Focus */}
                                      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                          <div className="text-center mb-12">
                                            <h2 className="text-3xl md:text-4xl font-military text-charcoal mb-4">
                                              Monroe LA Junk Removal Gallery - Real Results
                                            </h2>
                                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                              See our professional junk removal work across Monroe LA, Ouachita Parish, and Northeast Louisiana. Before & after photos from real customers!
                                            </p>
                                          </div>

                                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                            {/* Monroe LA Commercial Project */}
                                            <div className="relative group cursor-pointer">
                                              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                                                <img 
                                                  src={WhatsApp_Image_2025_07_27_at_22_09_53__2_} 
                                                  alt="Monroe LA commercial junk removal project - Ouachita Parish office cleanout before and after"
                                                  className="w-full h-64 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                                {/* Glassmorphic Location Tag */}
                                                <div className="absolute top-4 left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm flex items-center">
                                                    <i className="fas fa-map-marker-alt mr-1 text-louisiana-gold"></i>
                                                    Monroe LA
                                                  </span>
                                                </div>

                                                {/* Service Type Badge */}
                                                <div className="absolute top-4 right-4 glassmorphism bg-louisiana-gold/90 backdrop-blur-md px-3 py-1 rounded-full">
                                                  <span className="text-charcoal font-semibold text-sm">Commercial</span>
                                                </div>

                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                  <h3 className="text-white font-bold text-lg mb-1">Downtown Monroe LA Office</h3>
                                                  <p className="text-gray-200 text-sm">Complete office cleanout - Ouachita Parish commercial district</p>
                                                </div>
                                              </div>
                                            </div>

                                            {/* Ouachita Parish Residential */}
                                            <div className="relative group cursor-pointer">
                                              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                                                <img 
                                                  src={WhatsApp_Image_2025_07_27_at_21_55_19} 
                                                  alt="Ouachita Parish residential junk removal - Monroe LA area home cleanout service"
                                                  className="w-full h-64 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                                <div className="absolute top-4 left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm flex items-center">
                                                    <i className="fas fa-map-marker-alt mr-1 text-louisiana-gold"></i>
                                                    Ouachita Parish
                                                  </span>
                                                </div>

                                                <div className="absolute top-4 right-4 glassmorphism bg-green-500/90 backdrop-blur-md px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm">Residential</span>
                                                </div>

                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                  <h3 className="text-white font-bold text-lg mb-1">Ouachita Parish Home Cleanout</h3>
                                                  <p className="text-gray-200 text-sm">Full house cleanout near Monroe LA - furniture & appliances</p>
                                                </div>
                                              </div>
                                            </div>

                                            {/* West Monroe Project */}
                                            <div className="relative group cursor-pointer">
                                              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                                                <img 
                                                  src={WhatsApp_Image_2025_07_27_at_21_55_19__3_} 
                                                  alt="West Monroe Louisiana junk removal - Ouachita Parish furniture removal service"
                                                  className="w-full h-64 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                                <div className="absolute top-4 left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm flex items-center">
                                                    <i className="fas fa-map-marker-alt mr-1 text-louisiana-gold"></i>
                                                    West Monroe
                                                  </span>
                                                </div>

                                                <div className="absolute top-4 right-4 glassmorphism bg-blue-500/90 backdrop-blur-md px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm">Estate Cleanout</span>
                                                </div>

                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                  <h3 className="text-white font-bold text-lg mb-1">West Monroe Estate Service</h3>
                                                  <p className="text-gray-200 text-sm">Complete estate cleanout - Ouachita Parish family home</p>
                                                </div>
                                              </div>
                                            </div>

                                            {/* Ruston University Area */}
                                            <div className="relative group cursor-pointer">
                                              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                                                <img 
                                                  src={WhatsApp_Image_2025_07_27_at_21_55_19__2_} 
                                                  alt="Ruston Louisiana Tech University area junk removal - student housing cleanout"
                                                  className="w-full h-64 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                                <div className="absolute top-4 left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm flex items-center">
                                                    <i className="fas fa-map-marker-alt mr-1 text-louisiana-gold"></i>
                                                    Ruston
                                                  </span>
                                                </div>

                                                <div className="absolute top-4 right-4 glassmorphism bg-purple-500/90 backdrop-blur-md px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm">Student Housing</span>
                                                </div>

                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                  <h3 className="text-white font-bold text-lg mb-1">Louisiana Tech Area Service</h3>
                                                  <p className="text-gray-200 text-sm">Student apartment cleanout - Ruston university district</p>
                                                </div>
                                              </div>
                                            </div>

                                            {/* Construction Debris - Northeast LA */}
                                            <div className="relative group cursor-pointer">
                                              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                                                <img 
                                                  src={Junk_removal} 
                                                  alt="Northeast Louisiana construction debris removal - Monroe LA area commercial cleanup"
                                                  className="w-full h-64 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                                <div className="absolute top-4 left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm flex items-center">
                                                    <i className="fas fa-map-marker-alt mr-1 text-louisiana-gold"></i>
                                                    Northeast LA
                                                  </span>
                                                </div>

                                                <div className="absolute top-4 right-4 glassmorphism bg-orange-500/90 backdrop-blur-md px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm">Construction</span>
                                                </div>

                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                  <h3 className="text-white font-bold text-lg mb-1">Construction Debris Removal</h3>
                                                  <p className="text-gray-200 text-sm">Commercial renovation cleanup - Northeast Louisiana</p>
                                                </div>
                                              </div>
                                            </div>

                                            {/* Emergency Storm Cleanup */}
                                            <div className="relative group cursor-pointer">
                                              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                                                <img 
                                                  src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                                                  alt="Monroe LA storm damage cleanup - Ouachita Parish emergency junk removal service"
                                                  className="w-full h-64 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                                <div className="absolute top-4 left-4 glassmorphism bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm flex items-center">
                                                    <i className="fas fa-exclamation-triangle mr-1 text-red-400"></i>
                                                    Emergency
                                                  </span>
                                                </div>

                                                <div className="absolute top-4 right-4 glassmorphism bg-red-500/90 backdrop-blur-md px-3 py-1 rounded-full">
                                                  <span className="text-white font-semibold text-sm">Storm Damage</span>
                                                </div>

                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                  <h3 className="text-white font-bold text-lg mb-1">Monroe LA Storm Cleanup</h3>
                                                  <p className="text-gray-200 text-sm">Emergency debris removal - Ouachita Parish storm damage</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          {/* Gallery Stats */}
                                          <div className="bg-charcoal rounded-2xl p-8 text-white">
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                              <div>
                                                <div className="text-3xl font-bold text-louisiana-gold mb-2">500+</div>
                                                <div className="text-gray-300">Monroe LA Projects</div>
                                              </div>
                                              <div>
                                                <div className="text-3xl font-bold text-louisiana-gold mb-2">50+</div>
                                                <div className="text-gray-300">Ouachita Parish Businesses</div>
                                              </div>
                                              <div>
                                                <div className="text-3xl font-bold text-louisiana-gold mb-2">24/7</div>
                                                <div className="text-gray-300">Northeast LA Coverage</div>
                                              </div>
                                              <div>
                                                <div className="text-3xl font-bold text-louisiana-gold mb-2">100%</div>
                                                <div className="text-gray-300">Customer Satisfaction</div>
                                              </div>
                                            </div>

                                            <div className="text-center mt-8">
                                              <a href="tel:+13189141201" className="btn-cta inline-block text-lg">
                                                <i className="fas fa-camera mr-2"></i>
                                                See Your Project Next - Call (318) 914-1201
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </section>

                                      {/* Detailed City Sections */}
                                      <section className="py-16 bg-white">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                                          {/* Farmerville Detailed Section */}
                                          <div className="grid lg:grid-cols-2 gap-12 items-center">
                                            <div className="order-2 lg:order-1">
                                              <img 
                                                src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                                                alt="Farmerville Louisiana rural area served by Kane Pro"
                                                className="w-full rounded-xl shadow-lg"
                                              />
                                            </div>
                                            <div className="order-1 lg:order-2">
                                              <div className="flex items-center mb-6">
                                                <div className="shield-shape bg-louisiana-gold w-16 h-16 flex items-center justify-center mr-4">
                                                  <i className="fas fa-water text-charcoal text-xl"></i>
                                                </div>
                                                <div>
                                                  <h2 className="text-3xl font-military text-charcoal">West Monroe, Louisiana</h2>
                                                  <p className="text-louisiana-gold font-semibold">Ouachita Parish Community</p>
                                                </div>
                                              </div>

                                              <p className="text-lg text-gray-600 mb-6">
                                                West Monroe families and businesses trust Kane Pro for comprehensive junk removal services. Located along the Ouachita River, we serve this growing community with the same military precision and Louisiana heart.
                                              </p>

                                              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                                <h3 className="font-semibold text-charcoal mb-3">West Monroe Area Highlights:</h3>
                                                <ul className="text-gray-600 space-y-2">
                                                  <li>• Ouachita River area properties</li>
                                                  <li>• West Monroe business district</li>
                                                  <li>• Residential neighborhoods</li>
                                                  <li>• Storm damage cleanup specialists</li>
                                                  <li>• Commercial property services</li>
                                                </ul>
                                              </div>

                                              <div className="bg-charcoal p-6 rounded-lg text-white mb-6">
                                                <h3 className="font-semibold text-louisiana-gold mb-3">
                                                  <i className="fas fa-star text-louisiana-gold mr-2"></i>
                                                  West Monroe Customer Testimonial:
                                                </h3>
                                                <p className="italic mb-3">
                                                  "After the last storm, Kane Pro was out here within hours helping clear fallen trees and debris. They understand what Louisiana weather can do and they're always ready to help."
                                                </p>
                                                <p className="text-louisiana-gold font-semibold">- Mark D., West Monroe</p>
                                              </div>

                                              <a href="tel:+13189141201" className="btn-secondary inline-block">
                                                <i className="fas fa-phone mr-2"></i>
                                                Call for West Monroe Service
                                              </a>
                                            </div>
                                          </div>

                                          {/* Monroe Detailed Section */}
                                          <div className="grid lg:grid-cols-2 gap-12 items-center">
                                            <div>
                                              <div className="flex items-center mb-6">
                                                <div className="shield-shape bg-louisiana-gold w-16 h-16 flex items-center justify-center mr-4">
                                                  <i className="fas fa-city text-charcoal text-xl"></i>
                                                </div>
                                                <div>
                                                  <h2 className="text-3xl font-military text-charcoal">Monroe LA - Ouachita Parish Hub</h2>
                                                  <p className="text-louisiana-gold font-semibold">Northeast Louisiana's Premier Junk Removal Service</p>
                                                </div>
                                              </div>

                                              <p className="text-lg text-gray-600 mb-6">
                                                Monroe LA is Northeast Louisiana's commercial hub, and Kane Pro is the premier junk removal service for Ouachita Parish. From downtown Monroe LA commercial buildings to suburban neighborhoods, we provide same-day service with free quotes for all Monroe LA residents and businesses.
                                              </p>

                                              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                                <h3 className="font-semibold text-charcoal mb-3">Monroe LA Junk Removal Specialties:</h3>
                                                <ul className="text-gray-600 space-y-2">
                                                  <li>• Downtown Monroe LA business district</li>
                                                  <li>• Ouachita Parish commercial cleanouts</li>
                                                  <li>• Northeast Louisiana multi-family housing</li>
                                                  <li>• Monroe LA industrial facility cleanup</li>
                                                  <li>• Ouachita Parish medical facility services</li>
                                                </ul>
                                              </div>

                                              <div className="bg-charcoal p-6 rounded-lg text-white mb-6">
                                                <h3 className="font-semibold text-louisiana-gold mb-3">
                                                  <i className="fas fa-star text-louisiana-gold mr-2"></i>
                                                  Monroe LA Customer Testimonial:
                                                </h3>
                                                <p className="italic mb-3">
                                                  "We manage several office buildings in Monroe LA and Kane Pro is our go-to for tenant turnovers and cleanouts. They're professional, efficient, and understand the fast pace of Ouachita Parish commercial real estate. Best junk removal in Northeast Louisiana!"
                                                </p>
                                                <p className="text-louisiana-gold font-semibold">- Patricia S., Monroe LA Property Manager</p>
                                              </div>

                                              <a href="tel:+13189141201" className="btn-cta inline-block">
                                                <i className="fas fa-phone mr-2"></i>
                                                Call for Monroe LA Junk Removal
                                              </a>
                                            </div>
                                            <div>
                                              <img 
                                                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                                                alt="Monroe Louisiana downtown area served by Kane Pro"
                                                className="w-full rounded-xl shadow-lg"
                                              />
                                            </div>
                                          </div>

                                        </div>
                                      </section>
                                      {/* Coverage Map Section */}
                                      <section className="py-16 bg-charcoal text-white">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                          <div className="text-center mb-12">
                                            <h2 className="text-3xl md:text-4xl font-military mb-4">
                                              Monroe LA & Northeast Louisiana Coverage
                                            </h2>
                                            <p className="text-lg text-gray-300">
                                              One call covers it all - from Ouachita Parish to Union Parish. Specializing in Monroe LA junk removal!
                                            </p>
                                          </div>

                                          <div className="grid md:grid-cols-2 gap-12 items-center">
                                            <div>
                                              <h3 className="text-2xl font-military text-louisiana-gold mb-6">
                                                Why Choose Kane Pro for Monroe LA Junk Removal?
                                              </h3>

                                              <div className="space-y-6">
                                                <div className="flex items-start gap-4">
                                                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                                                    <i className="fas fa-map-marker-alt text-charcoal"></i>
                                                  </div>
                                                  <div>
                                                    <h4 className="font-semibold text-lg mb-2">Monroe LA Local Knowledge</h4>
                                                    <p className="text-gray-300">We know every back road in Ouachita Parish, every Monroe LA neighborhood, and every local dump and recycling center in Northeast Louisiana.</p>
                                                  </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                                                    <i className="fas fa-clock text-charcoal"></i>
                                                  </div>
                                                  <div>
                                                    <h4 className="font-semibold text-lg mb-2">Faster Monroe LA Response</h4>
                                                    <p className="text-gray-300">With local Ouachita Parish coverage, we provide same-day junk removal service across Monroe LA and Northeast Louisiana.</p>
                                                  </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                                                    <i className="fas fa-handshake text-charcoal"></i>
                                                  </div>
                                                  <div>
                                                    <h4 className="font-semibold text-lg mb-2">Community Connections</h4>
                                                    <p className="text-gray-300">We work with local charities, recycling centers, and community organizations in every city we serve.</p>
                                                  </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                                                    <i className="fas fa-dollar-sign text-charcoal"></i>
                                                  </div>
                                                  <div>
                                                    <h4 className="font-semibold text-lg mb-2">No Travel Charges</h4>
                                                    <p className="text-gray-300">Serving multiple cities means no extra fees for distance - fair pricing for all Louisiana communities.</p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="bg-white bg-opacity-10 p-8 rounded-xl glassmorphism">
                                              <h3 className="text-xl font-bold text-louisiana-gold mb-6 text-center">
                                                <i className="fas fa-shield-alt mr-2"></i>
                                                Louisiana Service Guarantee
                                              </h3>

                                              <div className="space-y-4 text-center">
                                                <div className="border-b border-white border-opacity-20 pb-4">
                                                  <h4 className="font-semibold mb-2">Same Day Service</h4>
                                                  <p className="text-gray-300 text-sm">Available across all 5 cities</p>
                                                </div>

                                                <div className="border-b border-white border-opacity-20 pb-4">
                                                  <h4 className="font-semibold mb-2">Licensed & Insured</h4>
                                                  <p className="text-gray-300 text-sm">In all Louisiana parishes we serve</p>
                                                </div>

                                                <div className="border-b border-white border-opacity-20 pb-4">
                                                  <h4 className="font-semibold mb-2">Local Partnerships</h4>
                                                  <p className="text-gray-300 text-sm">Supporting Louisiana communities</p>
                                                </div>

                                                <div>
                                                  <h4 className="font-semibold mb-2">24/7 Emergency</h4>
                                                  <p className="text-gray-300 text-sm">Storm damage & urgent cleanouts</p>
                                                </div>
                                              </div>

                                              <div className="mt-6 text-center space-y-3">
                                                <a href="tel:+13189141201" className="btn-cta w-full">
                                                  <i className="fas fa-phone mr-2"></i>
                                                  Call (318) 914-1201
                                                </a>
                                                <a href="mailto:kaneprojunkremoval@gmail.com" className="btn-outline w-full">
                                                  <i className="fas fa-envelope mr-2"></i>
                                                  Email Us Today
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                      {/* Local Louisiana Pride */}
                                      <section className="py-16 bg-louisiana-gold">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                          <h2 className="text-3xl md:text-4xl font-military text-navy mb-6">
                                            Geaux Kane Pro Across Louisiana!
                                          </h2>
                                          <p className="text-xl text-navy mb-8 max-w-3xl mx-auto">
                                            From the farmlands of Union Parish to the university life in Ruston, from the Ouachita River to downtown Monroe - Kane Pro is Louisiana proud and Louisiana strong!
                                          </p>

                                          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                                            <div className="text-center">
                                              <i className="fas fa-fleur-de-lis text-4xl text-navy mb-3"></i>
                                              <h3 className="font-semibold text-navy text-sm">Louisiana Born</h3>
                                            </div>
                                            <div className="text-center">
                                              <i className="fas fa-tractor text-4xl text-navy mb-3"></i>
                                              <h3 className="font-semibold text-navy text-sm">Rural Pride</h3>
                                            </div>
                                            <div className="text-center">
                                              <i className="fas fa-graduation-cap text-4xl text-navy mb-3"></i>
                                              <h3 className="font-semibold text-navy text-sm">University Support</h3>
                                            </div>
                                            <div className="text-center">
                                              <i className="fas fa-water text-4xl text-navy mb-3"></i>
                                              <h3 className="font-semibold text-navy text-sm">River Communities</h3>
                                            </div>
                                            <div className="text-center">
                                              <i className="fas fa-city text-4xl text-navy mb-3"></i>
                                              <h3 className="font-semibold text-navy text-sm">City Services</h3>
                                            </div>
                                          </div>

                                          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                            <a href="tel:+13189141201" className="btn-secondary text-lg">
                                              <i className="fas fa-phone mr-2"></i>
                                              Call Your Louisiana Team
                                            </a>
                                            <a href="mailto:kaneprojunkremoval@gmail.com" className="btn-outline text-lg">
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