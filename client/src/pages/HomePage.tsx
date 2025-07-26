import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Louisiana landmark background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-background-latest.png')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">

            
            <h1 className="text-4xl md:text-6xl font-military text-white mb-6 animate-slide-up">
              Louisiana's Most Trusted
              <span className="text-louisiana-gold block">Junk Removal Shield</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#fcda4b] font-bold">
              Your Trusted Shield Against Junk Problems - Christian Values, Louisiana Heart
            </p>
            
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a 
                href="#quote-form" 
                className="block md:inline-block btn-cta text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <i className="fas fa-shield-alt mr-2"></i>
                GET FREE ESTIMATE
              </a>
              <a href="tel:+13189141201" className="block md:inline-block btn-outline text-lg">
                <i className="fas fa-phone mr-2"></i>
                CALL (318) 914-1201
              </a>
            </div>
            
            <div className="mt-6 font-semibold text-[#f5efeb] text-[16px]">
              Faith-Driven, Family-Focused Junk Removal
            </div>
            
            <div className="mt-8 text-sm text-gray-300">
              <p className="flex items-center justify-center gap-2 mb-2 text-[#010812]">
                <i className="fas fa-clock text-louisiana-gold"></i>
                Same Day Service Available
              </p>
              <p className="flex items-center justify-center gap-2 text-[#020914]">
                <i className="fas fa-map-marker-alt text-louisiana-gold"></i>
                Serving Calhoun, Farmerville, Ruston, West Monroe & Monroe
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Work Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military text-navy mb-4">
              See Kane Pro in Action Across Louisiana
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real work, real results for Louisiana families
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video">
                <img 
                  src="/portfolio-1.png" 
                  alt="Residential junk removal - Kane Pro truck loaded with furniture and household items"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2">Residential Cleanouts</h3>
                <p className="text-gray-600 text-sm">Complete home cleanouts including furniture, appliances, and household items across Louisiana.</p>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video">
                <img 
                  src="/portfolio-2.png" 
                  alt="Commercial junk removal - Office furniture and equipment removal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2">Commercial Services</h3>
                <p className="text-gray-600 text-sm">Office cleanouts, retail spaces, and commercial property junk removal throughout Louisiana.</p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video">
                <img 
                  src="/portfolio-3.png" 
                  alt="Construction debris removal - Building materials and renovation cleanup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2">Construction Debris</h3>
                <p className="text-gray-600 text-sm">Safe removal of construction materials, drywall, and renovation debris for contractors.</p>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video">
                <img 
                  src="/portfolio-4.png" 
                  alt="Yard cleanup and outdoor debris removal services"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2">Yard & Outdoor Cleanup</h3>
                <p className="text-gray-600 text-sm">Tree branches, lawn debris, outdoor furniture, and landscaping material removal.</p>
              </div>
            </div>

            {/* Portfolio Item 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video">
                <img 
                  src="/portfolio-5.png" 
                  alt="Appliance removal and disposal services"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2">Appliance Removal</h3>
                <p className="text-gray-600 text-sm">Safe disposal of refrigerators, washers, dryers, and other large appliances.</p>
              </div>
            </div>

            {/* Portfolio Item 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video">
                <img 
                  src="/Kane.jpeg" 
                  alt="Kane Pro team member - Professional Louisiana junk removal service"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2">Professional Service</h3>
                <p className="text-gray-600 text-sm">Licensed, insured, and committed to serving Louisiana families with Christian values.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#quote-form" 
              className="btn-cta text-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-shield-alt mr-2"></i>
              GET YOUR FREE ESTIMATE TODAY
            </a>
          </div>
        </div>
      </section>
      {/* Trust Badges */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <i className="fas fa-shield-alt text-3xl text-navy mb-2"></i>
              <span className="text-sm font-semibold text-navy">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-heart text-3xl text-navy mb-2"></i>
              <span className="text-sm font-semibold text-navy">Louisiana Born & Raised</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-clock text-3xl text-navy mb-2"></i>
              <span className="text-sm font-semibold text-navy">Same Day Service</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-leaf text-3xl text-navy mb-2"></i>
              <span className="text-sm font-semibold text-navy">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military text-navy mb-4">
              Our Louisiana Junk Removal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From Calhoun to Monroe, we're your trusted shield against junk problems with Christian values and Louisiana heart.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 glassmorphism">
              <img 
                src="/portfolio-1.png" 
                alt="Residential junk removal service in Louisiana" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">
                  <i className="fas fa-home text-louisiana-gold mr-2"></i>
                  Residential Cleanouts
                </h3>
                <p className="text-gray-600 mb-4">Home cleanouts, furniture removal, appliances, and household junk removal across Louisiana parishes.</p>
                <ul className="text-sm text-gray-500 mb-6 space-y-1">
                  <li>• Furniture & Appliances</li>
                  <li>• Garage & Basement Cleanouts</li>
                  <li>• Estate Cleanouts</li>
                  <li>• Same Day Service Available</li>
                </ul>
                <Link href="/services" className="block w-full btn-secondary text-center">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 glassmorphism">
              <img 
                src="/portfolio-2.png" 
                alt="Commercial junk removal service in Louisiana" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">
                  <i className="fas fa-building text-louisiana-gold mr-2"></i>
                  Commercial Cleanouts
                </h3>
                <p className="text-gray-600 mb-4">Office cleanouts, retail spaces, restaurants, and commercial property junk removal throughout Louisiana.</p>
                <ul className="text-sm text-gray-500 mb-6 space-y-1">
                  <li>• Office Furniture & Equipment</li>
                  <li>• Retail Store Cleanouts</li>
                  <li>• Restaurant Equipment</li>
                  <li>• Scheduled Service Available</li>
                </ul>
                <Link href="/services" className="block w-full btn-secondary text-center">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 glassmorphism">
              <img 
                src="/portfolio-3.png" 
                alt="Construction debris removal in Louisiana" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">
                  <i className="fas fa-hard-hat text-louisiana-gold mr-2"></i>
                  Construction Debris
                </h3>
                <p className="text-gray-600 mb-4">Construction cleanup, renovation debris, and building materials removal for Louisiana contractors.</p>
                <ul className="text-sm text-gray-500 mb-6 space-y-1">
                  <li>• Drywall & Wood Debris</li>
                  <li>• Roofing Materials</li>
                  <li>• Renovation Cleanup</li>
                  <li>• Contractor Partnerships</li>
                </ul>
                <Link href="/services" className="block w-full btn-secondary text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Proof Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military mb-4">
              What Louisiana Families Say About Kane Pro
            </h2>
            <p className="text-lg text-gray-300">
              Geaux Kane Pro! Trusted by thousands of Louisiana residents and businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glassmorphism rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-louisiana-gold text-xl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-200 mb-4 italic">
                "Kane Pro came out same day and cleared our whole garage after Hurricane damage. True Christian professionals who understand what we've been through. Highly recommend!"
              </p>
              <p className="font-semibold text-louisiana-gold">- Sarah M., Calhoun LA</p>
            </div>
            
            <div className="glassmorphism rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-louisiana-gold text-xl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-200 mb-4 italic">
                "Faith-driven service is right! They showed up on time, worked efficiently, and left our property cleaner than when they arrived. Louisiana born and it shows in their work ethic."
              </p>
              <p className="font-semibold text-louisiana-gold">- Mike T., Monroe LA</p>
            </div>
            
            <div className="glassmorphism rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-louisiana-gold text-xl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-200 mb-4 italic">
                "Fair pricing, professional service, and they donated items that were still good. These folks understand Louisiana values. Will definitely use Kane Pro again!"
              </p>
              <p className="font-semibold text-louisiana-gold">- Jennifer L., Ruston LA</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 text-xl">
              <span className="text-louisiana-gold font-bold">5.0 Stars</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-300">50+ Happy Customers</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-300">Christian-Owned & Operated</span>
            </div>
            <div className="mt-4 text-gray-300">
              Your Trusted Christian Neighbors in Louisiana
            </div>
          </div>
        </div>
      </section>
      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}
