import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import kaneProBackground from "@assets/IMG_3900.png";

// Animation variants for different elements
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO 
        title="Junk Removal in Calhoun, Louisiana | Kane Pro Junk Removal & Hauling"
        description="Fast and affordable junk removal in Calhoun, Ruston, Monroe, Farmerville & West Monroe LA. Same-day service, licensed & insured. Call (318) 914-1201 for free estimates!"
        keywords="junk removal Calhoun LA, junk removal Ruston LA, junk removal Monroe LA, junk removal Farmerville LA, junk removal West Monroe LA, debris removal Louisiana, Kane junk removal"
        canonicalUrl="https://kanejunkremoval.com/"
        ogTitle="Professional Junk Removal in Calhoun, Louisiana | Kane Pro"
        ogDescription="Same-day junk removal serving Calhoun, Ruston, Monroe, Farmerville & West Monroe Louisiana. Family-owned Christian business. Free estimates!"
        structuredData={generateLocalBusinessSchema("Northeast Louisiana")}
        city="Calhoun"
      />

      {/* Hero Section */}
      <section 
        className="relative py-20 sm:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 86, 49, 0.85), rgba(30, 86, 49, 0.85)), url(${kaneProBackground})`
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Professional Junk Removal in Calhoun, Louisiana
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Same-day junk hauling, cleanouts & debris removal in Calhoun and nearby Northeast Louisiana cities.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
              variants={fadeInUp}
            >
              <motion.a 
                href="#quote-form" 
                className="inline-flex items-center px-8 py-4 bg-vibrant-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-shield-alt mr-3"></i>
                GET FREE ESTIMATE
              </motion.a>
              
              <motion.a 
                href="tel:+13189141201" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-deep-green transition-all duration-300 shadow-lg text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-phone mr-3"></i>
                CALL (318) 914-1201
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="text-center text-white/90 text-lg font-medium"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <i className="fas fa-clock text-vibrant-orange"></i>
                <span>Same-Day Service Available</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-sm">
                <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                <span>Serving Calhoun • Farmerville • Ruston • West Monroe • Monroe</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
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
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From residential cleanouts to commercial debris removal, Kane Pro handles it all with professional service across Northeast Louisiana.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-home text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Residential Junk Removal</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Complete home cleanouts, furniture removal, appliance disposal, and garage cleanouts throughout Louisiana.
              </p>
              <Link href="/services" className="text-vibrant-orange font-semibold hover:text-orange-600">
                Learn More →
              </Link>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-building text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Commercial Junk Removal</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Office cleanouts, retail space clearing, and business property debris removal with flexible scheduling.
              </p>
              <Link href="/services" className="text-vibrant-orange font-semibold hover:text-orange-600">
                Learn More →
              </Link>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hammer text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Construction Debris</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Safe removal of construction waste, renovation debris, and building materials with proper disposal methods.
              </p>
              <Link href="/services" className="text-vibrant-orange font-semibold hover:text-orange-600">
                Learn More →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose Kane Pro?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As your trusted Louisiana neighbors, we combine Christian values with professional expertise to deliver exceptional junk removal services.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Same-Day Service</h3>
              <p className="text-gray-600 text-sm">
                Quick response times across all Louisiana service areas
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">
                Full Louisiana licensing and comprehensive insurance coverage
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Eco-Responsible</h3>
              <p className="text-gray-600 text-sm">
                Donate and recycle whenever possible to protect Louisiana
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cross text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Faith-Driven</h3>
              <p className="text-gray-600 text-sm">
                Christian values guide every aspect of our service
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 sm:py-24 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact Kane Pro Junk Removal today for your free estimate and experience the difference of working with Louisiana's trusted junk removal experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
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