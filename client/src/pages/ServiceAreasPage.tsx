import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";

export default function ServiceAreasPage() {
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
          <div className="flex justify-center mb-6">
            <div className="shield-shape bg-louisiana-gold w-20 h-20 flex items-center justify-center shadow-xl">
              <span className="text-charcoal font-bold text-sm">KANE</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-military mb-4">
            Kane's Junk Removal Service Areas | Calhoun Ruston Monroe LA
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional junk hauling & debris removal serving Calhoun, Farmerville, Ruston, West Monroe & Monroe Louisiana with Christian values
          </p>
        </div>
      </section>

      {/* Service Areas Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military text-charcoal mb-4">
              Louisiana Junk Removal Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Same-day junk hauling and debris removal from our home base in Calhoun to Monroe, covering all of North Louisiana with professional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Calhoun */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Calhoun Louisiana junk removal service area" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-home text-louisiana-gold mr-2"></i>
                  Calhoun Junk Removal
                </h3>
                <p className="text-gray-600 mb-4">Our home base! Same day service available for Calhoun residents and businesses.</p>
                <ul className="text-sm text-charcoal space-y-1 mb-4">
                  <li>• Residential & Commercial Cleanouts</li>
                  <li>• Construction Debris Removal</li>
                  <li>• Emergency Same Day Service</li>
                </ul>
                <a href="tel:+13189141201" className="block w-full btn-cta text-center">
                  Call for Calhoun Service
                </a>
              </div>
            </div>
            
            {/* Farmerville */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
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
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
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
            
            {/* West Monroe */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="West Monroe Louisiana junk removal service area" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-water text-louisiana-gold mr-2"></i>
                  West Monroe Junk Removal
                </h3>
                <p className="text-gray-600 mb-4">Serving the Ouachita Parish community with trusted junk removal services.</p>
                <ul className="text-sm text-charcoal space-y-1 mb-4">
                  <li>• Residential Cleanout Services</li>
                  <li>• Business Property Cleanouts</li>
                  <li>• Storm Damage Cleanup</li>
                </ul>
                <a href="tel:+13189141201" className="block w-full btn-secondary text-center">
                  Call for West Monroe Service
                </a>
              </div>
            </div>
            
            {/* Monroe */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Monroe Louisiana junk removal service area" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-city text-louisiana-gold mr-2"></i>
                  Monroe Junk Removal
                </h3>
                <p className="text-gray-600 mb-4">North Louisiana's largest city - we're here to serve you with pride!</p>
                <ul className="text-sm text-charcoal space-y-1 mb-4">
                  <li>• Large-Scale Commercial Projects</li>
                  <li>• Multi-Family Housing Services</li>
                  <li>• Industrial Site Cleanup</li>
                </ul>
                <a href="tel:+13189141201" className="block w-full btn-cta text-center">
                  Call for Monroe Service
                </a>
              </div>
            </div>
            
            {/* Emergency Service Box */}
            <div className="bg-red-600 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 h-full flex flex-col justify-center text-center">
                <i className="fas fa-exclamation-triangle text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-3">Emergency Service</h3>
                <p className="mb-4">Storm damage? Hurricane cleanup? We're here to help Louisiana recover quickly.</p>
                <a href="tel:+13189141201" className="block w-full bg-white text-red-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-touch">
                  Emergency: (318) 914-1201
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed City Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Calhoun Detailed Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="shield-shape bg-louisiana-gold w-16 h-16 flex items-center justify-center mr-4">
                  <i className="fas fa-home text-charcoal text-xl"></i>
                </div>
                <div>
                  <h2 className="text-3xl font-military text-charcoal">Calhoun, Louisiana</h2>
                  <p className="text-louisiana-gold font-semibold">Our Home Base - Union Parish</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Proudly serving Calhoun families since day one with Christian values and integrity. As our home base, Calhoun receives priority scheduling and same-day service. We know every street, every neighborhood, and every local business because this is where Kane Pro was born.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-charcoal mb-3">Local Calhoun Landmarks We Serve:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <span>• Downtown Calhoun</span>
                  <span>• Calhoun City Hall</span>
                  <span>• Union Parish Courthouse</span>
                  <span>• Local Schools & Churches</span>
                  <span>• JB Cyrus Road Area</span>
                  <span>• Rural Routes & Farms</span>
                </div>
              </div>

              <div className="bg-charcoal p-6 rounded-lg text-white mb-6">
                <h3 className="font-semibold text-louisiana-gold mb-3">
                  <i className="fas fa-star text-louisiana-gold mr-2"></i>
                  Calhoun Customer Testimonial:
                </h3>
                <p className="italic mb-3">
                  "Living right here in Calhoun, I've watched Kane Pro grow from day one. They're not just our junk removal company - they're our neighbors. When my garage flooded last spring, they were here same day with no questions asked."
                </p>
                <p className="text-louisiana-gold font-semibold">- Betty R., Downtown Calhoun</p>
              </div>

              <a href="tel:+13189141201" className="btn-cta inline-block">
                <i className="fas fa-phone mr-2"></i>
                Call for Same-Day Calhoun Service
              </a>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Calhoun Louisiana downtown area served by Kane Pro"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

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
                  <i className="fas fa-tractor text-charcoal text-xl"></i>
                </div>
                <div>
                  <h2 className="text-3xl font-military text-charcoal">Farmerville, Louisiana</h2>
                  <p className="text-louisiana-gold font-semibold">Union Parish County Seat</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Farmerville families and businesses trust Kane Pro for reliable junk removal. From downtown commercial properties to rural farm cleanouts, we understand the unique needs of Union Parish's county seat.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-charcoal mb-3">Farmerville Area Specialties:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Farm equipment and machinery removal</li>
                  <li>• Barn and outbuilding cleanouts</li>
                  <li>• Agricultural waste disposal</li>
                  <li>• Rural property estate cleanouts</li>
                  <li>• Livestock facility cleanup</li>
                </ul>
              </div>

              <div className="bg-charcoal p-6 rounded-lg text-white mb-6">
                <h3 className="font-semibold text-louisiana-gold mb-3">
                  <i className="fas fa-star text-louisiana-gold mr-2"></i>
                  Farmerville Customer Testimonial:
                </h3>
                <p className="italic mb-3">
                  "Kane Pro helped us clean out my grandfather's old barn after he passed. They treated everything with respect and even donated some old tools to the local vo-tech school. True Louisiana values."
                </p>
                <p className="text-louisiana-gold font-semibold">- Robert L., Farmerville</p>
              </div>

              <a href="tel:+13189141201" className="btn-secondary inline-block">
                <i className="fas fa-phone mr-2"></i>
                Call for Farmerville Service
              </a>
            </div>
          </div>

          {/* Ruston Detailed Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="shield-shape bg-louisiana-gold w-16 h-16 flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-charcoal text-xl"></i>
                </div>
                <div>
                  <h2 className="text-3xl font-military text-charcoal">Ruston, Louisiana</h2>
                  <p className="text-louisiana-gold font-semibold">Home of Louisiana Tech University</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Geaux Bulldogs! Kane Pro proudly serves the Louisiana Tech University community and Ruston residents. From student apartment cleanouts to family home services, we understand the unique needs of a university town.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-charcoal mb-3">Ruston University Area Services:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Student housing move-out cleanouts</li>
                  <li>• Apartment complex services</li>
                  <li>• Louisiana Tech area residential</li>
                  <li>• End-of-semester furniture removal</li>
                  <li>• Greek life house cleanouts</li>
                </ul>
              </div>

              <div className="bg-charcoal p-6 rounded-lg text-white mb-6">
                <h3 className="font-semibold text-louisiana-gold mb-3">
                  <i className="fas fa-star text-louisiana-gold mr-2"></i>
                  Ruston Customer Testimonial:
                </h3>
                <p className="italic mb-3">
                  "As a Louisiana Tech parent, I needed help clearing out my son's apartment. Kane Pro was fast, professional, and understood exactly what we needed. They even worked around finals week!"
                </p>
                <p className="text-louisiana-gold font-semibold">- Linda T., Ruston Parent</p>
              </div>

              <a href="tel:+13189141201" className="btn-cta inline-block">
                <i className="fas fa-phone mr-2"></i>
                Call for Ruston/Tech Area Service
              </a>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Ruston Louisiana Tech University area served by Kane Pro"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* West Monroe Detailed Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="West Monroe Louisiana Ouachita River area served by Kane Pro"
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
                  <h2 className="text-3xl font-military text-charcoal">Monroe, Louisiana</h2>
                  <p className="text-louisiana-gold font-semibold">North Louisiana's Largest City</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Monroe is North Louisiana's hub, and Kane Pro is proud to serve this vibrant community. From downtown commercial buildings to suburban neighborhoods, we handle large-scale projects with the efficiency Monroe businesses demand.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-charcoal mb-3">Monroe Commercial Specialties:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Downtown Monroe business district</li>
                  <li>• Large commercial cleanouts</li>
                  <li>• Multi-family housing complexes</li>
                  <li>• Industrial facility cleanup</li>
                  <li>• Medical facility services</li>
                </ul>
              </div>

              <div className="bg-charcoal p-6 rounded-lg text-white mb-6">
                <h3 className="font-semibold text-louisiana-gold mb-3">
                  <i className="fas fa-star text-louisiana-gold mr-2"></i>
                  Monroe Customer Testimonial:
                </h3>
                <p className="italic mb-3">
                  "We manage several office buildings in Monroe and Kane Pro is our go-to for tenant turnovers and cleanouts. They're professional, efficient, and understand the fast pace of commercial real estate."
                </p>
                <p className="text-louisiana-gold font-semibold">- Patricia S., Monroe Property Manager</p>
              </div>

              <a href="tel:+13189141201" className="btn-cta inline-block">
                <i className="fas fa-phone mr-2"></i>
                Call for Monroe Commercial Service
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
              Complete North Louisiana Coverage
            </h2>
            <p className="text-lg text-gray-300">
              One call covers it all - from Union Parish to Ouachita Parish
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-military text-louisiana-gold mb-6">
                Why Choose Local Louisiana Coverage?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-charcoal"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Local Knowledge</h4>
                    <p className="text-gray-300">We know every back road, every neighborhood, and every local dump and recycling center across all five cities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-navy"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Faster Response</h4>
                    <p className="text-gray-300">With local coverage, we can provide same-day service across our entire Louisiana service area.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-handshake text-navy"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Community Connections</h4>
                    <p className="text-gray-300">We work with local charities, recycling centers, and community organizations in every city we serve.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-dollar-sign text-navy"></i>
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
