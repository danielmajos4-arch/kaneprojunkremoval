import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import { motion } from "framer-motion";
import kaneProBackground from "@assets/IMG_3900.png";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ServiceAreasPage() {
  return (
    <>
      <SEO 
        title="Junk Removal Service Areas in West Monroe, Louisiana | Kane Pro Coverage"
        description="Kane Pro Junk Removal serves West Monroe, Monroe, Calhoun, Ruston & Farmerville LA. Check our service area coverage map. Call (318) 914-1201 for same-day service!"
        keywords="junk removal West Monroe LA, junk removal service areas Louisiana, West Monroe junk hauling, Monroe service area, Northeast Louisiana junk removal"
        canonicalUrl="https://kanejunkremoval.com/areas"
        ogTitle="Service Areas: West Monroe, Monroe, Calhoun, Ruston & Farmerville LA | Kane Pro"
        ogDescription="Complete service area coverage for junk removal in West Monroe, Monroe, and all of Northeast Louisiana. Check if we serve your area!"
        structuredData={generateLocalBusinessSchema("West Monroe")}
        city="West Monroe"
      />

      {/* Hero Section */}
      <section 
        className="relative py-20 sm:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 86, 49, 0.85), rgba(30, 86, 49, 0.85)), url(${kaneProBackground})`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Service Areas
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Proudly serving all of Northeast Louisiana
          </motion.p>
        </div>
      </section>

      {/* Service Areas Overview */}
      <section className="py-16 sm:py-24 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Louisiana Junk Removal Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Same-day junk hauling and debris removal from our home base in Calhoun to Monroe, covering all of Northeast Louisiana with professional service.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Calhoun */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Calhoun Louisiana junk removal service area" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-home text-vibrant-orange mr-2"></i>
                  Calhoun Junk Removal
                </h3>
                <p className="text-gray-600 mb-4">Our home base! Same day service available for Calhoun residents and businesses.</p>
                <ul className="text-sm text-charcoal space-y-1 mb-4">
                  <li>• Residential & Commercial Cleanouts</li>
                  <li>• Construction Debris Removal</li>
                  <li>• Emergency Same Day Service</li>
                </ul>
                <a href="tel:+13189141201" className="block w-full bg-vibrant-orange text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Call for Calhoun Service
                </a>
              </div>
            </motion.div>
            
            {/* Farmerville */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Farmerville Louisiana junk removal service area" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-tractor text-vibrant-orange mr-2"></i>
                  Farmerville Junk Removal
                </h3>
                <p className="text-gray-600 mb-4">Serving Union Parish with Louisiana pride and professional precision.</p>
                <ul className="text-sm text-charcoal space-y-1 mb-4">
                  <li>• Farm & Ranch Cleanouts</li>
                  <li>• Residential Property Services</li>
                  <li>• Agricultural Equipment Removal</li>
                </ul>
                <a href="tel:+13189141201" className="block w-full bg-deep-green text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Call for Farmerville Service
                </a>
              </div>
            </motion.div>
            
            {/* Ruston */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Ruston Louisiana junk removal near Louisiana Tech University" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-graduation-cap text-vibrant-orange mr-2"></i>
                  Ruston Junk Removal
                </h3>
                <p className="text-gray-600 mb-4">Home of Louisiana Tech! Student housing and residential service specialists.</p>
                <ul className="text-sm text-charcoal space-y-1 mb-4">
                  <li>• Student Housing Cleanouts</li>
                  <li>• University Area Services</li>
                  <li>• Move-in/Move-out Assistance</li>
                </ul>
                <a href="tel:+13189141201" className="block w-full bg-vibrant-orange text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Call for Ruston Service
                </a>
              </div>
            </motion.div>
            
            {/* West Monroe */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="West Monroe Louisiana junk removal service area" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-water text-vibrant-orange mr-2"></i>
                  West Monroe Junk Removal
                </h3>
                <p className="text-gray-600 mb-4">Serving the Ouachita Parish community with trusted junk removal services.</p>
                <ul className="text-sm text-charcoal space-y-1 mb-4">
                  <li>• Residential Cleanout Services</li>
                  <li>• Business Property Cleanouts</li>
                  <li>• Storm Damage Cleanup</li>
                </ul>
                <a href="tel:+13189141201" className="block w-full bg-deep-green text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Call for West Monroe Service
                </a>
              </div>
            </motion.div>

            {/* Monroe */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Monroe Louisiana junk removal service area" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-city text-vibrant-orange mr-2"></i>
                  Monroe Junk Removal
                </h3>
                <p className="text-gray-600 mb-4">Serving the Twin Cities with comprehensive junk removal and hauling services.</p>
                <ul className="text-sm text-charcoal space-y-1 mb-4">
                  <li>• Downtown Business Cleanouts</li>
                  <li>• Residential Property Services</li>
                  <li>• Large Item Pickup</li>
                </ul>
                <a href="tel:+13189141201" className="block w-full bg-vibrant-orange text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Call for Monroe Service
                </a>
              </div>
            </motion.div>

            {/* Additional Areas */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1599362477074-15c0b4b0bb97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Northeast Louisiana additional service areas" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  <i className="fas fa-map text-vibrant-orange mr-2"></i>
                  Additional Areas
                </h3>
                <p className="text-gray-600 mb-4">We also serve surrounding communities throughout Northeast Louisiana.</p>
                <ul className="text-sm text-charcoal space-y-1 mb-4">
                  <li>• Grambling & Simsboro</li>
                  <li>• Bernice & Dubach</li>
                  <li>• Special Trip Arrangements</li>
                </ul>
                <a href="tel:+13189141201" className="block w-full bg-deep-green text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Call to Confirm Service
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Features */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              What Makes Our Service Areas Special
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We know Northeast Louisiana because we live here. Our local expertise means better service for every community we serve.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="text-center p-6"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Same-Day Response</h3>
              <p className="text-gray-600 text-sm">
                Quick response times across all our Louisiana service areas
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-route text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Optimized Routes</h3>
              <p className="text-gray-600 text-sm">
                Efficient travel between cities keeps costs down for customers
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Local Knowledge</h3>
              <p className="text-gray-600 text-sm">
                We know every neighborhood and community we serve
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Community Focus</h3>
              <p className="text-gray-600 text-sm">
                Supporting local charities and Louisiana families
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Ready to Schedule Service?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact Kane Pro Junk Removal today to check availability in your area and get your free estimate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="tel:+13189141201"
                className="inline-flex items-center px-8 py-4 bg-vibrant-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-phone mr-3"></i>
                (318) 914-1201
              </motion.a>
              
              <motion.a 
                href="mailto:kaneprojunkremoval@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-deep-green text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope mr-3"></i>
                Email Us
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <QuoteForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}