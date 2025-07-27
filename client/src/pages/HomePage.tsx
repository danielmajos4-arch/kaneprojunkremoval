import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animation variants for different elements
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }
};

const iconFloat = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut"
    }
  })
};

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-section">
        {/* Louisiana landmark background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-background-latest.png')`
          }}
          role="img"
          aria-label="Louisiana junk removal service area background"
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            
            <motion.h1 
              className="text-4xl md:text-6xl font-military text-white mb-6"
              variants={fadeInUp}
            >
              Fast, Affordable Junk Removal in Calhoun, LA
              <motion.span 
                className="text-vibrant-orange block"
                variants={fadeInUp}
              >
                Same Day Service in Ruston, Monroe & West Monroe
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto font-medium text-white text-center bg-black/20 rounded-lg px-6 py-4"
              variants={fadeInUp}
            >Same-day junk hauling, cleanouts & debris removal. Serving Calhoun, Monroe, West Monroe & beyond.
</motion.p>
            
            <motion.div 
              className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center"
              variants={fadeInUp}
            >
              <motion.a 
                href="#quote-form" 
                className="block md:inline-block btn-cta text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <i className="fas fa-shield-alt mr-2"></i>
                GET FREE ESTIMATE
              </motion.a>
              <motion.a 
                href="tel:+13189141201" 
                className="block md:inline-block btn-outline text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <i className="fas fa-phone mr-2"></i>
                CALL (318) 914-1201
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-6 font-semibold text-white text-lg"
              variants={fadeInUp}
            >
              Faith-Driven, Family-Focused Junk Removal
            </motion.div>
            
            <motion.div 
              className="mt-8 text-base text-white"
              variants={fadeInUp}
            >
              <p className="flex items-center justify-center gap-2 mb-2">
                <i className="fas fa-clock text-vibrant-orange" aria-hidden="true"></i>
                Same Day Junk Removal Service Available
              </p>
              <p className="flex items-center justify-center gap-2">
                <i className="fas fa-map-marker-alt text-vibrant-orange" aria-hidden="true"></i>
                Serving Calhoun, Farmerville, Ruston, West Monroe & Monroe Louisiana
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-military text-deep-green mb-6">
                About Kane's Junk Removal Louisiana
              </h2>
              
              <div className="space-y-4 text-text-dark leading-relaxed">
                <p>
                  When Kane started this business in Louisiana, he had one simple goal: provide honest, reliable junk removal services that Calhoun families and businesses could depend on. What began as a local solution has grown into the trusted choice for junk hauling across Ruston, Monroe, Farmerville, and West Monroe.
                </p>
                
                <p>
                  Kane takes pride in fast, affordable, and dependable junk removal services. Unlike big franchises, we're a local Louisiana business that understands our community's needs. We offer <strong>in-person estimates</strong> because we believe in transparent pricing and building trust with every customer.
                </p>
                
                <p>
                  Our commitment goes beyond just hauling junk away. We focus on keeping your property clean during and after the job, ensuring same-day service when possible, and treating every project with the professionalism you deserve. Whether it's residential cleanouts in Calhoun, commercial junk removal in Monroe, or construction debris hauling in Ruston, we handle it all with Christian values and community heart.
                </p>
                
                <p>
                  Customer satisfaction isn't just our goal—it's our guarantee. We're not satisfied until you are completely happy with our junk removal service. That's the Kane's difference in Louisiana.
                </p>
              </div>

              <div className="mt-8">
                <motion.a 
                  href="tel:+13189141201" 
                  className="inline-flex items-center gap-2 btn-cta text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fas fa-phone"></i>
                  Get Your Free In-Person Estimate
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              className="lg:order-first"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-deep-green rounded-xl p-8 text-white">
                <motion.h3 
                  className="text-2xl font-military text-vibrant-orange mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Areas We Serve in Louisiana
                </motion.h3>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center gap-3"
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    variants={iconFloat}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                    <div>
                      <h4 className="font-semibold">Calhoun, LA</h4>
                      <p className="text-gray-300 text-sm">Our home base - Same day service available</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    variants={iconFloat}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                    <div>
                      <h4 className="font-semibold">Ruston, LA</h4>
                      <p className="text-gray-300 text-sm">University area cleanouts & residential services</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    variants={iconFloat}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                    <div>
                      <h4 className="font-semibold">Monroe, LA</h4>
                      <p className="text-gray-300 text-sm">Full-service junk removal & debris cleanouts</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    variants={iconFloat}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                    <div>
                      <h4 className="font-semibold">Farmerville, LA</h4>
                      <p className="text-gray-300 text-sm">Professional junk hauling services</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3"
                    custom={4}
                    initial="hidden"
                    whileInView="visible"
                    variants={iconFloat}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                    <div>
                      <h4 className="font-semibold">West Monroe, LA</h4>
                      <p className="text-gray-300 text-sm">Commercial & residential junk removal</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="mt-6 p-4 bg-vibrant-orange/10 rounded-lg border border-vibrant-orange/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 text-vibrant-orange mb-2">
                    <i className="fas fa-clock"></i>
                    <span className="font-semibold">Same Day Service Available</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Monday - Saturday, 7AM - 8PM<br/>
                    <strong>Call (318) 914-1201</strong> for immediate service
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Work Gallery Section */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military text-deep-green mb-4">
              Kane's Junk Removal Work Gallery - Louisiana Projects
            </h2>
            <p className="text-lg text-text-dark max-w-2xl mx-auto">
              Real junk removal projects in Calhoun, Ruston, Monroe, Farmerville & West Monroe Louisiana
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="aspect-video overflow-hidden">
                <motion.img 
                  src="/portfolio-1.png" 
                  alt="Kane's junk removal truck in Calhoun LA loaded with residential furniture and household items"
                  className="w-full h-full object-cover"
                  width="400"
                  height="225"
                  style={{ imageRendering: 'auto', filter: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-deep-green mb-2">Residential Junk Removal Calhoun LA</h3>
                <p className="text-text-dark text-sm">Complete home cleanouts including furniture, appliances, and household items across Calhoun, Ruston, and Monroe Louisiana.</p>
              </div>
            </motion.div>

            {/* Portfolio Item 2 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="aspect-video overflow-hidden">
                <motion.img 
                  src="/portfolio-2.png" 
                  alt="Commercial junk hauling Monroe LA - Kane's removing office furniture and equipment"
                  className="w-full h-full object-cover"
                  width="400"
                  height="225"
                  style={{ imageRendering: 'auto', filter: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-deep-green mb-2">Commercial Junk Hauling Monroe LA</h3>
                <p className="text-text-dark text-sm">Office cleanouts, retail spaces, and commercial property junk removal throughout Monroe, West Monroe, and surrounding Louisiana areas.</p>
              </div>
            </motion.div>

            {/* Portfolio Item 3 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="aspect-video overflow-hidden">
                <motion.img 
                  src="/portfolio-3.png" 
                  alt="Construction debris removal Ruston LA - Kane's hauling building materials and renovation cleanup"
                  className="w-full h-full object-cover"
                  width="400"
                  height="225"
                  style={{ imageRendering: 'auto', filter: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-deep-green mb-2">Construction Debris Removal Ruston LA</h3>
                <p className="text-text-dark text-sm">Safe removal of construction materials, drywall, and renovation debris for contractors in Ruston, Farmerville, and North Louisiana.</p>
              </div>
            </motion.div>

            {/* Portfolio Item 4 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="aspect-video overflow-hidden">
                <motion.img 
                  src="/portfolio-4.png" 
                  alt="Yard cleanup and outdoor debris removal Farmerville LA - Kane's hauling tree branches and landscaping materials"
                  className="w-full h-full object-cover"
                  width="400"
                  height="225"
                  style={{ imageRendering: 'auto', filter: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-deep-green mb-2">Yard Cleanup Farmerville LA</h3>
                <p className="text-text-dark text-sm">Tree branches, lawn debris, outdoor furniture, and landscaping material removal in Farmerville and surrounding Louisiana areas.</p>
              </div>
            </motion.div>

            {/* Portfolio Item 5 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="aspect-video overflow-hidden">
                <motion.img 
                  src="/portfolio-5.png" 
                  alt="Appliance removal West Monroe LA - Kane's safely disposing refrigerators washers and large appliances"
                  className="w-full h-full object-cover"
                  width="400"
                  height="225"
                  style={{ imageRendering: 'auto', filter: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-deep-green mb-2">Appliance Removal West Monroe LA</h3>
                <p className="text-text-dark text-sm">Safe disposal of refrigerators, washers, dryers, and other large appliances in West Monroe and throughout Louisiana.</p>
              </div>
            </motion.div>

            {/* Portfolio Item 6 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="aspect-video overflow-hidden">
                <motion.img 
                  src="/Kane.jpeg" 
                  alt="Kane's Junk Removal team owner - Professional licensed Louisiana junk hauling service provider"
                  className="w-full h-full object-cover"
                  width="400"
                  height="225"
                  style={{ imageRendering: 'auto', filter: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-deep-green mb-2">Professional Louisiana Junk Removal</h3>
                <p className="text-text-dark text-sm">Licensed, insured, and committed to serving Louisiana families with Christian values throughout Calhoun, Ruston, Monroe, and surrounding areas.</p>
              </div>
            </motion.div>
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
      <section className="bg-neutral-bg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-shield-alt text-3xl text-deep-green mb-2"></i>
              <span className="text-sm font-semibold text-text-dark">Licensed & Insured</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-heart text-3xl text-vibrant-orange mb-2"></i>
              <span className="text-sm font-semibold text-text-dark">Louisiana Born & Raised</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-clock text-3xl text-deep-green mb-2"></i>
              <span className="text-sm font-semibold text-text-dark">Same Day Service</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-leaf text-3xl text-vibrant-orange mb-2"></i>
              <span className="text-sm font-semibold text-text-dark">Eco-Friendly</span>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-military text-deep-green mb-4">
              Kane's Junk Hauling Services Louisiana
            </h2>
            <p className="text-lg text-text-dark max-w-2xl mx-auto">
              Comprehensive junk removal solutions for homes and businesses in Calhoun, Ruston, Monroe, Farmerville & West Monroe Louisiana
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden glassmorphism"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src="/portfolio-1.png" 
                alt="Residential junk removal service in Louisiana" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-deep-green mb-3">
                  <i className="fas fa-home text-vibrant-orange mr-2"></i>
                  Residential Cleanouts
                </h3>
                <p className="text-text-dark mb-4">Home cleanouts, furniture removal, appliances, and household junk removal across Louisiana parishes.</p>
                <ul className="text-sm text-text-dark/70 mb-6 space-y-1">
                  <li>• Furniture & Appliances</li>
                  <li>• Garage & Basement Cleanouts</li>
                  <li>• Estate Cleanouts</li>
                  <li>• Same Day Service Available</li>
                </ul>
                <Link href="/services" className="block w-full btn-secondary text-center">
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden glassmorphism"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src="/portfolio-2.png" 
                alt="Commercial junk removal service in Louisiana" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
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
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden glassmorphism"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src="/portfolio-3.png" 
                alt="Construction debris removal in Louisiana" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
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
            </motion.div>
          </div>
        </div>
      </section>
      {/* Social Proof Section */}
      <section className="py-16 bg-charcoal text-white">
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
            <motion.div 
              className="glassmorphism rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex text-louisiana-gold text-xl">
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
              <p className="text-gray-200 mb-4 italic">
                "Kane Pro came out same day and cleared our whole garage after Hurricane damage. True Christian professionals who understand what we've been through. Highly recommend!"
              </p>
              <p className="font-semibold text-louisiana-gold">- Sarah M., Calhoun LA</p>
            </motion.div>
            
            <motion.div 
              className="glassmorphism rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex text-louisiana-gold text-xl">
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
              <p className="text-gray-200 mb-4 italic">
                "Faith-driven service is right! They showed up on time, worked efficiently, and left our property cleaner than when they arrived. Louisiana born and it shows in their work ethic."
              </p>
              <p className="font-semibold text-louisiana-gold">- Mike T., Monroe LA</p>
            </motion.div>
            
            <motion.div 
              className="glassmorphism rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex text-louisiana-gold text-xl">
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    viewport={{ once: true }}
                  />
                  <motion.i 
                    className="fas fa-star" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.0 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
              <p className="text-gray-200 mb-4 italic">
                "Fair pricing, professional service, and they donated items that were still good. These folks understand Louisiana values. Will definitely use Kane Pro again!"
              </p>
              <p className="font-semibold text-louisiana-gold">- Jennifer L., Ruston LA</p>
            </motion.div>
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
