import ContactForm from "@/components/ContactForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import { motion } from "framer-motion";
import kaneProBackground from "@assets/IMG_3900.png";

export default function ContactPage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
      <SEO
        title="Contact Kane Pro Junk Removal - Get Free Quote | Monroe, LA"
        description="Contact Kane Pro Junk Removal for free estimates in Monroe, West Monroe, Ruston & Northeast Louisiana. Same-day service available. Licensed & insured. Call (318) 914-1201!"
        keywords="contact junk removal Monroe LA, free estimate junk removal Louisiana, same day junk pickup Monroe, licensed insured junk removal"
        canonicalUrl="https://kanejunkremoval.com/contact"
        ogTitle="Contact Kane Pro Junk Removal | Free Estimates & Same-Day Service"
        ogDescription="Get your free junk removal estimate today! Serving Monroe, West Monroe, Ruston & Northeast Louisiana with professional, Christian-based service."
        structuredData={generateLocalBusinessSchema("Monroe")}
        city="Monroe"
      />

      {/* Hero Section */}
      <section
        className="relative py-16 sm:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 86, 49, 0.85), rgba(30, 86, 49, 0.85)), url(${kaneProBackground})`,
        }}
        aria-label="Contact Kane Pro Junk Removal"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Main CTA */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Need That Junk Gone? We'll Haul It Off Today!
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-6 font-medium">
                Call Now - We'll Come Out & Give You A Price Over The Phone
              </p>
              
              {/* Primary CTA */}
              <div className="mb-6">
                <motion.a
                  href="tel:+13189141201"
                  className="inline-flex items-center justify-center px-8 py-4 bg-vibrant-orange text-white font-bold text-xl rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg border-2 border-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="hero-phone-cta"
                >
                  <i className="fas fa-phone mr-3 text-xl animate-pulse"></i>
                  CALL (318) 914-1201
                </motion.a>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-white text-sm">
                <div className="flex items-center gap-2">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span>5.0 Stars • Google Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-shield-alt text-blue-400"></i>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-clock text-green-400"></i>
                  <span>Same-Day Service</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-white mb-4">Here's What You Get:</h2>
              
              <div className="space-y-4 text-white">
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone text-vibrant-orange text-lg"></i>
                  <div>
                    <p className="font-semibold">(318) 914-1201</p>
                    <p className="text-sm text-white/80">Text or call - we answer fast</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <i className="fas fa-truck text-vibrant-orange text-lg"></i>
                  <div>
                    <p className="font-semibold">Same Day Pickup</p>
                    <p className="text-sm text-white/80">Call before noon, gone by evening</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <i className="fas fa-dollar-sign text-vibrant-orange text-lg mt-1"></i>
                  <div>
                    <p className="font-semibold">Fair Pricing</p>
                    <p className="text-sm text-white/80">No hidden fees, no surprises</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <i className="fas fa-map-marker-alt text-vibrant-orange text-lg mt-1"></i>
                  <div>
                    <p className="font-semibold">All Around Monroe</p>
                    <p className="text-sm text-white/80">Monroe, West Monroe, Ruston<br />
                    & all Northeast Louisiana</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-12 sm:py-16 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
              How to Get Started
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Got junk? Here's the fastest ways to get it gone today.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: "fas fa-phone",
                title: "Call Right Now",
                description: "We'll pick up and give you a price on the spot",
                action: "tel:+13189141201",
                actionText: "(318) 914-1201",
                bgColor: "bg-vibrant-orange",
                testId: "contact-phone-method"
              },
              {
                icon: "fas fa-truck",
                title: "Text Your Address",
                description: "Send us pics of your junk, get a quick quote back",
                action: "sms:+13189141201",
                actionText: "Text Us",
                bgColor: "bg-deep-green",
                testId: "contact-text-method"
              },
              {
                icon: "fas fa-calendar",
                title: "Schedule Online",
                description: "Fill out the form below and we'll call you back",
                action: "#contact-form",
                actionText: "Get Quote",
                bgColor: "bg-vibrant-orange",
                testId: "contact-form-method"
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div
                  className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <i
                    className={`${method.icon} text-white text-2xl`}
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {method.description}
                </p>
                <motion.a
                  href={method.action}
                  className={`inline-flex items-center justify-center px-6 py-3 ${method.bgColor} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-md`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid={method.testId}
                  onClick={method.action.startsWith('#') ? (e) => {
                    e.preventDefault();
                    document.querySelector(method.action)?.scrollIntoView({ behavior: 'smooth' });
                  } : undefined}
                >
                  {method.actionText}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Trust Signals */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
              Why Folks Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We show up on time, work hard, charge fair prices, and treat your property right.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: "fas fa-truck",
                title: "Same Day Pickup",
                description: "Call before lunch, gone by dinner",
                bgColor: "bg-vibrant-orange",
              },
              {
                icon: "fas fa-dollar-sign",
                title: "Fair Prices",
                description: "No surprise fees or upcharges",
                bgColor: "bg-deep-green",
              },
              {
                icon: "fas fa-handshake",
                title: "Local & Trusted",
                description: "Your neighbors recommend us",
                bgColor: "bg-vibrant-orange",
              },
              {
                icon: "fas fa-broom",
                title: "We Clean Up",
                description: "Leave your place spotless",
                bgColor: "bg-deep-green",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-5 bg-neutral-bg rounded-lg hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div
                  className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <i
                    className={`${item.icon} text-white text-lg`}
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 sm:py-16 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
              Get Your Quote
            </h2>
            <p className="text-lg text-gray-600">
              Tell us what you need hauled off and we'll call you back with a price.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 bg-deep-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Get That Junk Gone?
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Stop looking at that pile of junk. Call us and we'll haul it off today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+13189141201"
              className="inline-flex items-center justify-center px-8 py-4 bg-vibrant-orange text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="final-phone-cta"
            >
              <i className="fas fa-phone mr-3"></i>
              Call (318) 914-1201
            </motion.a>
            
            <motion.a
              href="#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-deep-green transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="final-form-cta"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-calculator mr-3"></i>
              Get Free Quote
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}