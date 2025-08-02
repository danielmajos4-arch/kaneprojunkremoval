import ContactForm from "@/components/ContactForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import { motion } from "framer-motion";
import kaneProBackground from "@assets/IMG_3900.png";
import WhatsApp_Image_2025_07_26_at_21_22_48__3_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (3).jpeg";

export default function AboutPage() {
  // Optimized animation variants
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
        title="About Kane Pro Junk Removal - Family-Owned Business | Monroe, LA"
        description="Family-owned Christian junk removal serving Monroe, West Monroe, Ruston & Northeast Louisiana. Licensed, insured, eco-friendly. Same-day service available. Call (318) 914-1201!"
        keywords="family owned junk removal Monroe LA, Christian junk removal Louisiana, licensed insured junk removal Monroe, same day junk pickup Louisiana"
        canonicalUrl="https://kanejunkremoval.com/about"
        ogTitle="Kane Pro Junk Removal | Faith-Driven Family Business in Monroe, LA"
        ogDescription="Trusted family-owned junk removal serving Northeast Louisiana with Christian values and professional service."
        structuredData={generateLocalBusinessSchema("Monroe")}
        city="Monroe"
      />

      {/* Hero Section */}
      <section
        className="relative py-16 sm:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 86, 49, 0.85), rgba(30, 86, 49, 0.85)), url(${kaneProBackground})`,
        }}
        aria-label="About Kane Pro Junk Removal"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Kane Pro Junk Removal
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white/90 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Faith-driven family business serving Northeast Louisiana
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-3">
              Our Story
            </h2>
            <div
              className="w-16 h-1 bg-vibrant-orange mx-auto"
              aria-hidden="true"
            ></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-text-dark leading-relaxed">
                <strong>Kane Pro Junk Removal</strong> is Northeast Louisiana's
                trusted family-owned junk removal company, serving residential
                and commercial customers with Christian values and professional
                excellence.
              </p>

              <p className="text-base sm:text-lg text-text-dark leading-relaxed">
                As a locally operated LLC, we provide personalized, efficient
                solutions for all your junk removal needs. Our experienced team
                maintains the highest safety and professionalism standards while
                making your experience stress-free.
              </p>

              <p className="text-base sm:text-lg text-text-dark leading-relaxed">
                From furniture and appliances to construction debris and yard
                waste, we handle jobs of any size with care and precision,
                leaving your property clean and clutter-free.
              </p>

              <div className="pt-4">
                <motion.a
                  href="tel:+13189141201"
                  className="inline-flex items-center px-6 py-3 bg-vibrant-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Call Kane Pro Junk Removal at (318) 914-1201"
                >
                  <i className="fas fa-phone mr-2" aria-hidden="true"></i>
                  (318) 914-1201
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-xl p-6 shadow-lg">
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48__3_}
                  alt="Kane Pro Junk Removal team working in Monroe, Louisiana"
                  className="w-full rounded-lg shadow-md mb-4"
                  loading="lazy"
                  width="400"
                  height="300"
                />

                <div className="text-center">
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    Serving Northeast Louisiana
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                    <i
                      className="fas fa-map-marker-alt text-vibrant-orange"
                      aria-hidden="true"
                    ></i>
                    <span>
                      Monroe • West Monroe • Ruston • Calhoun • Farmerville
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose Kane Pro?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Christian values meet professional expertise for exceptional junk
              removal across Louisiana.
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
                icon: "fas fa-cross",
                title: "Faith-Driven Service",
                description:
                  "Christian values guide every job - honesty, integrity, and respect for your property.",
                bgColor: "bg-vibrant-orange",
              },
              {
                icon: "fas fa-home",
                title: "Local Louisiana Experts",
                description:
                  "Born and raised here, we understand our communities and serve neighbors with pride.",
                bgColor: "bg-deep-green",
              },
              {
                icon: "fas fa-leaf",
                title: "Eco-Responsible",
                description:
                  "We donate usable items and recycle materials to protect Louisiana's environment.",
                bgColor: "bg-vibrant-orange",
              },
              {
                icon: "fas fa-clock",
                title: "Same-Day Service",
                description:
                  "Need it gone today? Same-day pickup available across our service areas.",
                bgColor: "bg-deep-green",
              },
              {
                icon: "fas fa-shield-alt",
                title: "Fully Licensed & Insured",
                description:
                  "Complete peace of mind with Louisiana licensing and EPA-certified disposal.",
                bgColor: "bg-vibrant-orange",
              },
              {
                icon: "fas fa-handshake",
                title: "100% Satisfaction",
                description:
                  "We're not done until you're completely happy - that's our promise.",
                bgColor: "bg-deep-green",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Contact Louisiana's trusted junk removal experts for your free
              estimate today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:+13189141201"
                className="inline-flex items-center px-6 py-3 bg-vibrant-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Call Kane Pro Junk Removal"
              >
                <i className="fas fa-phone mr-2" aria-hidden="true"></i>
                (318) 914-1201
              </motion.a>

              <motion.a
                href="mailto:kaneprojunkremoval@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-deep-green text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Email Kane Pro Junk Removal"
              >
                <i className="fas fa-envelope mr-2" aria-hidden="true"></i>
                Email Us
              </motion.a>
            </div>
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
    </>
  );
}
