import ContactForm from "@/components/ContactForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import { motion } from "framer-motion";
import kaneProBackground from "@assets/IMG_3900.png";

import WhatsApp_Image_2025_07_26_at_21_22_48__3_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (3).jpeg";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Serving all of Northeast Louisiana
          </motion.p>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-vibrant-orange mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg text-text-dark leading-relaxed">
                <strong>Kane Pro Junk Removal</strong> is a full-service, locally family-owned junk removal company, providing exceptional services to both residential and commercial customers throughout Northeast Louisiana.
              </p>
              
              <p className="text-base sm:text-lg text-text-dark leading-relaxed">
                We are a locally owned and operated LLC, offering personalized and efficient junk removal solutions to meet your unique needs. Our team of experienced professionals is committed to delivering top-quality service while maintaining the highest standards of safety and professionalism.
              </p>

              <p className="text-base sm:text-lg text-text-dark leading-relaxed">
                At Kane Pro Junk Removal, we understand that junk removal can be a daunting task, which is why we make it our priority to provide you with a stress-free experience. We handle everything from furniture and appliances to construction debris and yard waste, ensuring that your property is left clean and clutter-free.
              </p>

              <p className="text-base sm:text-lg text-text-dark leading-relaxed">
                Our team is equipped with the necessary tools and equipment to handle any size job, big or small. We take great care to protect your property and belongings from any potential damages that may occur during the junk removal process.
              </p>

              <p className="text-base sm:text-lg text-text-dark leading-relaxed">
                We are committed to providing our customers with the highest level of satisfaction, and we guarantee that you'll be completely happy with our services. <strong>So if you're looking for a junk removal company that you can trust, look no further than Kane Pro Junk Removal.</strong>
              </p>

              <div className="pt-6">
                <motion.a 
                  href="tel:+13189141201"
                  className="inline-flex items-center px-8 py-4 bg-vibrant-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-phone mr-3"></i>
                  Contact us today to schedule your appointment!
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-2xl p-8 shadow-xl">
                <img 
                  src={WhatsApp_Image_2025_07_26_at_21_22_48__3_}
                  alt="Kane Pro Junk Removal team at work in Louisiana"
                  className="w-full rounded-xl shadow-lg mb-6"
                />
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Serving Northeast Louisiana
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                    <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                    <span>Calhoun • Farmerville • Ruston • West Monroe • Monroe</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
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
              Why Choose Kane Pro?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As your trusted Louisiana neighbors, we combine Christian values with professional expertise to deliver exceptional junk removal services.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cross text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Faith-Driven Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Every job reflects our Christian values - honesty, integrity, and treating your property with respect.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-home text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Local Louisiana Experts</h3>
              <p className="text-gray-600 leading-relaxed">
                Born and raised in Louisiana, we understand our communities and serve our neighbors with pride.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Eco-Responsible</h3>
              <p className="text-gray-600 leading-relaxed">
                We donate usable items to Louisiana charities and recycle materials to protect our beautiful state.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Same-Day Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Need it gone today? We offer same-day pickup when possible across all our Louisiana service areas.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Fully Licensed & Insured</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete peace of mind with full Louisiana licensing, insurance, and EPA-certified disposal methods.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">100% Satisfaction</h3>
              <p className="text-gray-600 leading-relaxed">
                We're not done until you're completely happy. That's our promise to every Louisiana customer.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact Kane Pro Junk Removal today for your free estimate and experience the difference of working with Louisiana's trusted junk removal experts.
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
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}