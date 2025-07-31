import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

// Optimized animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } },
};

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO
        title="Junk Removal, Demolition & Dumpster Rental Monroe LA | Same-Day Service | Kane Pro (318) 914-1201"
        description="Professional junk removal, demolition & dumpster rental services in Monroe, West Monroe, Ruston & Northeast Louisiana. Same-day service available. Licensed, insured, family-owned. Free estimates!"
        keywords="junk removal Monroe LA, demolition Monroe LA, dumpster rental Monroe LA, junk removal West Monroe LA, demolition services Louisiana, dumpster rental Louisiana, same day junk pickup Monroe, licensed junk removal Monroe, roll off dumpster Monroe"
        canonicalUrl="https://kanejunkremoval.com/"
        ogTitle="Monroe LA Junk Removal, Demolition & Dumpster Rental | Same-Day Service | Kane Pro"
        ogDescription="Fast, reliable junk removal, demolition & dumpster rental services serving Monroe, West Monroe, Ruston & Northeast Louisiana. Family-owned Christian business with same-day service."
        structuredData={generateLocalBusinessSchema("Northeast Louisiana")}
        city="Monroe"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-background-latest.png')` }}
          role="img"
          aria-label="Monroe Louisiana junk removal, demolition and dumpster rental service area"
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto mobile-optimized px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              Monroe Louisiana Junk Removal, Demolition & Dumpster Rental
              <motion.span
                className="text-vibrant-orange block text-2xl sm:text-3xl md:text-4xl mt-2"
                variants={fadeInUp}
              >
                Same-Day Service Available
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto font-medium text-white text-center bg-black/20 rounded-lg px-4 py-3 mb-6"
              variants={fadeInUp}
            >
              Fast, reliable junk hauling, demolition & dumpster rental services
              in Monroe, West Monroe, Ruston & Northeast Louisiana
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
              variants={fadeInUp}
            >
              <motion.a
                href="#quote-form"
                className="mobile-cta-button btn-cta text-lg px-6 py-3"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("quote-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-calculator mr-2"></i>
                FREE ESTIMATE
              </motion.a>
              <motion.a
                href="tel:+13189141201"
                className="mobile-cta-button btn-outline text-lg px-6 py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-phone mr-2"></i>
                (318) 914-1201
              </motion.a>
            </motion.div>

            <motion.div
              className="text-white text-center space-y-2"
              variants={fadeInUp}
            >
              <p className="flex items-center justify-center gap-2 text-base">
                <i className="fas fa-clock text-vibrant-orange"></i>
                Same-Day Service • Licensed & Insured
              </p>
              <p className="flex items-center justify-center gap-2 text-sm">
                <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                Serving Monroe, West Monroe, Ruston, Calhoun & Northeast LA
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mb-4">
                Monroe LA's Trusted Junk Removal, Demolition & Dumpster Rental
                Experts
              </h2>

              <div className="space-y-3 text-base text-text-dark leading-relaxed">
                <p>
                  <strong>Kane Pro Junk Removal & Demolition</strong> serves
                  Monroe and Northeast Louisiana with reliable, same-day junk
                  hauling, demolition, and dumpster rental services. As a local,
                  family-owned Christian business, we treat your Monroe LA
                  property with respect and care.
                </p>

                <p>
                  From furniture and appliances to construction debris, complete
                  demolition projects, and roll-off dumpster rentals, we handle
                  residential and commercial cleanouts throughout Monroe, West
                  Monroe, Ruston, and surrounding Northeast Louisiana areas.
                </p>

                <p>
                  <strong>
                    Licensed, insured, and committed to Monroe LA customer
                    satisfaction.
                  </strong>{" "}
                  We're not done until you're completely happy with our junk
                  removal, demolition, and dumpster rental services.
                </p>
              </div>

              <div className="mt-6">
                <motion.a
                  href="tel:+13189141201"
                  className="inline-flex items-center gap-2 btn-cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-phone"></i>
                  Schedule Free Monroe LA Estimate
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-deep-green rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold text-vibrant-orange mb-4">
                  Monroe LA Service Areas
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      city: "Monroe, LA",
                      desc: "Full-service junk removal, demolition & dumpsters",
                    },
                    {
                      city: "West Monroe, LA",
                      desc: "Residential & commercial demo + rentals",
                    },
                    {
                      city: "Ruston, LA",
                      desc: "University area cleanouts, demo & dumpsters",
                    },
                    {
                      city: "Calhoun, LA",
                      desc: "Same-day demolition & dumpster service",
                    },
                    {
                      city: "Farmerville, LA",
                      desc: "Professional junk hauling, demo & rentals",
                    },
                  ].map((area, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <i className="fas fa-map-marker-alt text-vibrant-orange"></i>
                      <div>
                        <h4 className="font-semibold text-sm">{area.city}</h4>
                        <p className="text-gray-300 text-xs">{area.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-vibrant-orange/10 rounded-lg border border-vibrant-orange/30">
                  <div className="flex items-center gap-2 text-vibrant-orange text-sm">
                    <i className="fas fa-clock"></i>
                    <span className="font-semibold">Mon-Sat: 7AM-8PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-12 bg-neutral-bg">
        <div className="max-w-6xl mx-auto mobile-optimized px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mb-3">
              Our Monroe LA Junk Removal, Demolition & Dumpster Rental Services
            </h2>
            <p className="text-base text-text-dark max-w-2xl mx-auto">
              Complete junk hauling, demolition, and dumpster rental solutions
              for homes and businesses in Monroe and Northeast Louisiana
            </p>
          </div>

          <div className="mobile-service-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                image: "/portfolio-1.png",
                title: "Residential Cleanouts",
                description:
                  "Monroe LA home cleanouts, furniture, appliances & household items",
                features: [
                  "Furniture & Appliances",
                  "Garage Cleanouts",
                  "Estate Sales",
                  "Same-Day Service",
                ],
              },
              {
                image: "/portfolio-2.png",
                title: "Commercial Removal & Demo",
                description:
                  "Monroe office cleanouts, retail spaces & commercial demolition",
                features: [
                  "Office Furniture",
                  "Retail Cleanouts",
                  "Commercial Demolition",
                  "Scheduled Service",
                ],
              },
              {
                image: "/portfolio-3.png",
                title: "Construction Debris & Demolition",
                description:
                  "Monroe LA renovation cleanup, building materials removal & structural demolition",
                features: [
                  "Drywall & Wood",
                  "Roofing Materials",
                  "Structure Demolition",
                  "Contractor Ready",
                ],
              },
              {
                image: "/dumpster-rental.png",
                title: "Dumpster Rental Monroe LA",
                description:
                  "Roll-off dumpster rentals for Monroe LA construction, renovation & cleanout projects",
                features: [
                  "10-40 Yard Dumpsters",
                  "Same-Day Delivery",
                  "Flexible Rental Periods",
                  "Competitive Pricing",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 mobile-service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden mobile-image-container">
                  <img
                    src={service.image}
                    alt={`${service.title} service in Monroe Louisiana`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 service-card-mobile"
                    loading="lazy"
                    width="300"
                    height="220"
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                      filter: 'brightness(1.02) contrast(1.05) saturate(1.1)',
                      aspectRatio: '300/220',
                      display: 'block',
                      width: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="service-content p-4 sm:p-5">
                  <h3 className="service-title text-base sm:text-lg font-bold text-deep-green mb-2 group-hover:text-vibrant-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="service-description text-sm text-text-dark mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="service-features text-xs text-gray-600 mb-4 sm:mb-5 space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <i className="fas fa-check text-vibrant-orange text-xs"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="btn-secondary text-sm block text-center transform transition-all duration-300 group-hover:bg-vibrant-orange group-hover:text-white py-2 sm:py-3"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              {
                icon: "fas fa-shield-alt",
                text: "Licensed & Insured",
                color: "text-deep-green",
              },
              {
                icon: "fas fa-heart",
                text: "Christian Values",
                color: "text-vibrant-orange",
              },
              {
                icon: "fas fa-clock",
                text: "Same-Day Service",
                color: "text-deep-green",
              },
              {
                icon: "fas fa-leaf",
                text: "Eco-Friendly",
                color: "text-vibrant-orange",
              },
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <i className={`${badge.icon} text-2xl ${badge.color} mb-2`}></i>
                <span className="text-xs font-semibold text-text-dark">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-12 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              What Monroe Louisiana Customers Say
            </h2>
            <p className="text-base text-gray-300">
              Trusted by families and businesses across Monroe and Northeast
              Louisiana
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Kane Pro came same day after hurricane damage for both junk removal and demolition. True Monroe professionals who understand Louisiana values. Highly recommend!",
                author: "Sarah M., Monroe LA",
                rating: 5,
              },
              {
                text: "Needed demolition work in West Monroe and they handled everything perfectly. Faith-driven service shows in their work ethic. On time, efficient, and left our property cleaner than before.",
                author: "Mike T., West Monroe LA",
                rating: 5,
              },
              {
                text: "Rented a dumpster for our Monroe home renovation. Fair pricing and they delivered exactly when promised. These folks understand Monroe Louisiana communities and deliver quality service.",
                author: "Jennifer L., Ruston LA",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex justify-center mb-3">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-200 mb-3 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-xs font-semibold text-vibrant-orange">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <span className="text-yellow-400 font-bold">5.0 Stars</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="text-gray-300">
                50+ Happy Monroe LA Customers
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="text-gray-300">
                Family-Owned Christian Business
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}
