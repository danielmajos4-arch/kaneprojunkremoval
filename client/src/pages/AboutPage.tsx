import ContactForm from "@/components/ContactForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Kane Pro Junk Removal in Monroe, Louisiana | Our Story"
        description="Learn about Kane Pro Junk Removal, a family-owned Christian business serving Monroe, West Monroe, Calhoun, Ruston & Farmerville LA since our founding. Call (318) 914-1201!"
        keywords="about Kane junk removal Monroe LA, family owned junk removal Monroe LA, Christian junk removal Louisiana, Monroe junk removal company"
        canonicalUrl="https://kanejunkremoval.com/about"
        ogTitle="About Kane Pro Junk Removal | Faith-Driven Family Business in Monroe, LA"
        ogDescription="Discover our story as a family-owned Christian junk removal business serving Monroe, West Monroe, and Northeast Louisiana with integrity."
        structuredData={generateLocalBusinessSchema("Monroe")}
        city="Monroe"
      />
      
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
            <img 
              src="/kane-pro-logo.png" 
              alt="Kane Pro Junk Removal & Hauling Logo" 
              className="w-20 h-20 shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-military mb-4">
            Professional Junk Removal in Monroe, Louisiana
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Family-owned Christian junk hauling business serving Monroe near Downtown Monroe, Ouachita River, and throughout West Monroe, Calhoun, Ruston & Farmerville with integrity since day one
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-military text-charcoal mb-6">
                Why Choose Kane's Louisiana Junk Removal Experts?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kane's Junk Removal was born from Louisiana values - hard work, community pride, and Christian integrity. We understand North Louisiana communities because we are Louisiana born and raised, serving Calhoun, Ruston, Monroe, Farmerville & West Monroe.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-shield-alt text-charcoal"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg mb-2">Faith-Driven Excellence</h3>
                    <p className="text-gray-600">Every job is executed with attention to detail, punctuality, and professional standards that reflect our Christian values and Louisiana work ethic.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-heart text-charcoal"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg mb-2">Louisiana Heart</h3>
                    <p className="text-gray-600">We're not just service providers - we're your neighbors. We understand Louisiana culture, weather challenges, and community needs because this is our home too.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-leaf text-charcoal"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg mb-2">Environmental Responsibility</h3>
                    <p className="text-gray-600">Protecting Louisiana's natural beauty through responsible disposal, recycling, and donation of reusable items to local Louisiana charities.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-charcoal mb-3">
                  <i className="fas fa-star text-louisiana-gold mr-2"></i>
                  Louisiana Business Certifications:
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <span>• Licensed in Louisiana</span>
                  <span>• Fully Insured</span>
                  <span>• EPA Certified Disposal</span>
                  <span>• Better Business Bureau</span>
                  <span>• Louisiana Chamber Member</span>
                  <span>• Christian Owned Business</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Kane Pro junk removal team serving Louisiana communities"
                className="w-full rounded-xl shadow-lg"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Kane Pro junk removal truck serving Louisiana"
                  className="w-full rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Louisiana business certifications and licenses"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military text-charcoal mb-4">
              Meet Your Louisiana Junk Removal Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Born and raised in Louisiana, guided by faith-driven values, dedicated to serving our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Kane Pro team member - Louisiana junk removal expert"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">Mike Kane</h3>
                <p className="text-louisiana-gold font-semibold mb-3">Founder & Owner</p>
                <p className="text-gray-600 text-sm mb-4">
                  Louisiana native, Christian family man, and community leader. Started Kane Pro to serve the community he loves with faith-driven values and integrity.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <i className="fas fa-map-marker-alt text-louisiana-gold"></i>
                  <span>Born in Monroe, LA</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Kane Pro team member - Louisiana junk removal specialist"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">James Thibodaux</h3>
                <p className="text-louisiana-gold font-semibold mb-3">Operations Manager</p>
                <p className="text-gray-600 text-sm mb-4">
                  Cajun through and through, James brings Louisiana hospitality to every job. Expert in logistics and customer service with 15 years in the business.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <i className="fas fa-map-marker-alt text-louisiana-gold"></i>
                  <span>Born in Lafayette, LA</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Kane Pro team member - Louisiana junk removal professional"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">Sarah Boudreaux</h3>
                <p className="text-louisiana-gold font-semibold mb-3">Customer Relations</p>
                <p className="text-gray-600 text-sm mb-4">
                  Louisiana State graduate who knows every parish like the back of her hand. Specializes in coordinating residential cleanouts and customer care.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <i className="fas fa-map-marker-alt text-louisiana-gold"></i>
                  <span>Born in Ruston, LA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-military mb-6">
                Contact Kane Pro Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to get started? Multiple ways to reach your Louisiana junk removal experts:
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center">
                    <i className="fas fa-phone text-navy"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call or Text</h3>
                    <a href="tel:+13189141201" className="text-louisiana-gold hover:text-white text-xl font-bold">
                      (318) 914-1201
                    </a>
                    <p className="text-gray-300 text-sm">Available 7am-8pm, Mon-Sat</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-navy"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-300">493 JB Cyrus Rd</p>
                    <p className="text-gray-300">Calhoun, LA 71225</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center">
                    <i className="fas fa-clock text-navy"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Service Hours</h3>
                    <p className="text-gray-300">Monday - Saturday: 7am - 8pm</p>
                    <p className="text-gray-300">Sunday: Closed (Family Day)</p>
                    <p className="text-louisiana-gold text-sm">Emergency service available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shield-shape bg-louisiana-gold w-12 h-12 flex items-center justify-center">
                    <i className="fas fa-envelope text-navy"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:kaneprojunkremoval@gmail.com" className="text-louisiana-gold hover:text-white">
                      kaneprojunkremoval@gmail.com
                    </a>
                    <p className="text-gray-300 text-sm">We respond within 2 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg glassmorphism">
                <h3 className="font-semibold text-louisiana-gold mb-3">
                  <i className="fas fa-exclamation-triangle text-louisiana-gold mr-2"></i>
                  Emergency Service Available
                </h3>
                <p className="text-gray-300 mb-3">
                  Storm damage? Urgent cleanout needed? We provide 24/7 emergency response across Louisiana.
                </p>
                <a href="tel:+13189141201" className="btn-cta inline-block">
                  Call Emergency Line
                </a>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Louisiana Pride Section */}
      <section className="py-16 bg-louisiana-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-military text-navy mb-6">
            Geaux Kane Pro! 
          </h2>
          <p className="text-xl text-navy mb-8 max-w-3xl mx-auto">
            From the bayous to the parishes, from Mardi Gras cleanup to hurricane recovery - Kane Pro is Louisiana strong, Louisiana proud, and Louisiana ready to serve.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <i className="fas fa-fleur-de-lis text-4xl text-navy mb-3"></i>
              <h3 className="font-semibold text-navy">Louisiana Pride</h3>
            </div>
            <div className="text-center">
              <i className="fas fa-football-ball text-4xl text-navy mb-3"></i>
              <h3 className="font-semibold text-navy">Saints Nation</h3>
            </div>
            <div className="text-center">
              <i className="fas fa-graduation-cap text-4xl text-navy mb-3"></i>
              <h3 className="font-semibold text-navy">LSU Geaux Tigers</h3>
            </div>
            <div className="text-center">
              <i className="fas fa-music text-4xl text-navy mb-3"></i>
              <h3 className="font-semibold text-navy">Jazz & Blues</h3>
            </div>
          </div>

          <a href="tel:+13189141201" className="btn-secondary text-lg">
            <i className="fas fa-phone mr-2"></i>
            Call Louisiana's Junk Removal Shield
          </a>
        </div>
      </section>
    </>
  );
}
