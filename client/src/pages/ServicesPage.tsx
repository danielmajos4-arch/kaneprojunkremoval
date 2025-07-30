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

// Enhanced structured data for better local SEO
const generateServicesSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kane Pro Junk Removal",
    description: "Professional junk removal services in Ruston, Monroe, Calhoun, Farmerville & West Monroe Louisiana",
    telephone: "+13189141201",
    email: "kaneprojunkremoval@gmail.com",
    url: "https://kaneprojunkremoval.com/services",
    areaServed: [
      { "@type": "City", name: "Ruston", addressRegion: "LA" },
      { "@type": "City", name: "Monroe", addressRegion: "LA" },
      { "@type": "City", name: "Calhoun", addressRegion: "LA" },
      { "@type": "City", name: "Farmerville", addressRegion: "LA" },
      { "@type": "City", name: "West Monroe", addressRegion: "LA" },
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
        title="Junk Removal Services in Ruston, Louisiana | Kane Pro Hauling"
        description="Professional junk removal services in Ruston, Monroe, Calhoun, Farmerville & West Monroe LA. Free estimates, same-day service. Call (318) 914-1201 today!"
        keywords="junk removal near me, junk removal Ruston LA, commercial junk removal Monroe LA, residential cleanouts Ruston LA, appliance removal West Monroe LA, debris removal Farmerville LA, Louisiana Tech junk removal"
        canonicalUrl="https://kaneprojunkremoval.com/services"
        ogTitle="#1 Junk Removal Services in Northeast Louisiana | Kane Pro"
        ogDescription="Same-day junk removal in Ruston, Monroe, Calhoun & surrounding areas. Licensed & insured. Free estimates available!"
        structuredData={generateServicesSchema()}
        city="Ruston"
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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Professional junk removal across Northeast Louisiana
          </motion.p>
        </div>
      </section>

      {/* Service Area Chips */}
      <section className="py-8 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-lg font-semibold text-deep-green">Serving Northeast Louisiana:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-block px-4 py-2 rounded-full bg-vibrant-orange text-white text-sm font-semibold">
              Calhoun 71225
            </span>
            <span className="inline-block px-4 py-2 rounded-full bg-vibrant-orange text-white text-sm font-semibold">
              Ruston 71270
            </span>
            <span className="inline-block px-4 py-2 rounded-full bg-vibrant-orange text-white text-sm font-semibold">
              Monroe 71201
            </span>
            <span className="inline-block px-4 py-2 rounded-full bg-vibrant-orange text-white text-sm font-semibold">
              West Monroe 71291
            </span>
            <span className="inline-block px-4 py-2 rounded-full bg-vibrant-orange text-white text-sm font-semibold">
              Farmerville 71241
            </span>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
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
              Complete Junk Removal Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From residential cleanouts to commercial debris removal, Kane Pro handles it all with professional service across Northeast Louisiana.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-neutral-bg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-home text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4 text-center">Residential Junk Removal in Ruston, LA</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-vibrant-orange mt-1 flex-shrink-0"></i>
                  <span>Complete home cleanouts and estate cleanouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-vibrant-orange mt-1 flex-shrink-0"></i>
                  <span>Furniture and appliance removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-vibrant-orange mt-1 flex-shrink-0"></i>
                  <span>Garage and basement cleanouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-vibrant-orange mt-1 flex-shrink-0"></i>
                  <span>Electronics and e-waste disposal</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="tel:+13189141201" className="inline-flex items-center px-6 py-3 bg-vibrant-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                  <i className="fas fa-phone mr-2"></i>
                  Get Quote
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="bg-neutral-bg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-building text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4 text-center">Commercial Junk Removal in Monroe, LA</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-deep-green mt-1 flex-shrink-0"></i>
                  <span>Office building cleanouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-deep-green mt-1 flex-shrink-0"></i>
                  <span>Retail space clearing</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-deep-green mt-1 flex-shrink-0"></i>
                  <span>Warehouse debris removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-deep-green mt-1 flex-shrink-0"></i>
                  <span>Restaurant equipment disposal</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="tel:+13189141201" className="inline-flex items-center px-6 py-3 bg-deep-green text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                  <i className="fas fa-phone mr-2"></i>
                  Get Quote
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="bg-neutral-bg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-hammer text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4 text-center">Construction Debris Removal in Calhoun, LA</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-vibrant-orange mt-1 flex-shrink-0"></i>
                  <span>Renovation and remodel debris</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-vibrant-orange mt-1 flex-shrink-0"></i>
                  <span>Demolition cleanup</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-vibrant-orange mt-1 flex-shrink-0"></i>
                  <span>Roofing materials disposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-check text-vibrant-orange mt-1 flex-shrink-0"></i>
                  <span>Flooring and tile removal</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="tel:+13189141201" className="inline-flex items-center px-6 py-3 bg-vibrant-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                  <i className="fas fa-phone mr-2"></i>
                  Get Quote
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Free Estimates Section */}
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
              Free In-Person Estimates
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We believe in transparent pricing. That's why we provide free, no-obligation estimates for all our Louisiana customers. No hidden fees, no surprises.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">Quick phone consultation and scheduling</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-calendar text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Schedule Visit</h3>
              <p className="text-gray-600 text-sm">We come to you at your convenience</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clipboard-list text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Free Estimate</h3>
              <p className="text-gray-600 text-sm">Detailed quote with no hidden costs</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Same-Day Service</h3>
              <p className="text-gray-600 text-sm">Often available for immediate pickup</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
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
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-lg text-gray-600">
              Ready to clear out your space? Contact us for your free estimate and let Kane Pro handle the heavy lifting.
            </p>
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