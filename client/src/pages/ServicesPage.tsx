import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import { motion } from "framer-motion";

import WhatsApp_Image_2025_07_26_at_21_22_48__3_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (3).jpeg";
import WhatsApp_Image_2025_07_26_at_21_22_48__2_ from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (2).jpeg";
import WhatsApp_Image_2025_07_26_at_21_22_48 from "@assets/WhatsApp Image 2025-07-26 at 21.22.48.jpeg";

// Optimized structured data
const generateServicesSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kane Pro Junk Removal",
    description:
      "Professional junk removal services in Monroe, West Monroe, Ruston & Northeast Louisiana",
    telephone: "+13189141201",
    email: "kaneprojunkremoval@gmail.com",
    url: "https://kaneprojunkremoval.com/services",
    areaServed: [
      { "@type": "City", name: "Monroe", addressRegion: "LA" },
      { "@type": "City", name: "West Monroe", addressRegion: "LA" },
      { "@type": "City", name: "Ruston", addressRegion: "LA" },
      { "@type": "City", name: "Calhoun", addressRegion: "LA" },
      { "@type": "City", name: "Farmerville", addressRegion: "LA" },
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Junk Removal Services Monroe LA | Residential & Commercial | Kane Pro"
        description="Professional junk removal in Monroe, West Monroe, Ruston & Northeast Louisiana. Residential cleanouts, commercial services, construction debris. Call (318) 914-1201!"
        keywords="junk removal Monroe LA, residential junk removal Louisiana, commercial junk removal Monroe, construction debris removal Louisiana, appliance removal Monroe LA"
        canonicalUrl="https://kaneprojunkremoval.com/services"
        ogTitle="Monroe LA Junk Removal Services | Kane Pro Professional Hauling"
        ogDescription="Complete junk removal services in Monroe & Northeast Louisiana. Same-day service available for residential, commercial & construction needs."
        structuredData={generateServicesSchema()}
        city="Monroe"
      />

      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-vibrant-orange">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-charcoal font-medium">Services</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-8 pb-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-green mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Monroe Louisiana Junk Removal Services
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional junk hauling for homes and businesses across Northeast
            Louisiana
          </motion.p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-6 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-base font-semibold text-deep-green">
              Serving:
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Monroe 71201",
              "West Monroe 71291",
              "Ruston 71270",
              "Calhoun 71225",
              "Farmerville 71241",
              "Grambling",
            ].map((area, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 rounded-full bg-vibrant-orange text-white text-xs font-semibold"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Residential Services */}
            <motion.div
              className="grid lg:grid-cols-2 gap-8 items-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <i className="fas fa-home text-vibrant-orange mr-2"></i>
                  Residential Junk Removal
                </h2>

                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  Complete home cleanouts and junk hauling throughout Monroe,
                  West Monroe, Ruston, and Northeast Louisiana. We handle
                  everything from single items to full estate cleanouts.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-sm text-charcoal mb-2">
                      What We Remove
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Furniture & mattresses</li>
                      <li>• Appliances & electronics</li>
                      <li>• Garage & basement cleanouts</li>
                      <li>• Estate & moving cleanouts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-charcoal mb-2">
                      Service Areas
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Monroe & West Monroe</li>
                      <li>• Ruston (Louisiana Tech area)</li>
                      <li>• Calhoun & Farmerville</li>
                      <li>• Same-day service available</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="tel:+13189141201"
                  className="btn-cta inline-block text-sm px-4 py-2"
                >
                  <i className="fas fa-phone mr-1"></i>
                  Get Free Estimate
                </a>
              </div>

              <div>
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48__3_}
                  alt="Residential junk removal team in Monroe Louisiana"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </motion.div>

            {/* Commercial Services */}
            <motion.div
              className="grid lg:grid-cols-2 gap-8 items-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="order-2 lg:order-1">
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48__2_}
                  alt="Commercial junk removal services in Monroe Louisiana"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <i className="fas fa-building text-vibrant-orange mr-2"></i>
                  Commercial Junk Removal
                </h2>

                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  Professional commercial cleanouts for businesses in Monroe,
                  West Monroe, and Northeast Louisiana. We work around your
                  schedule to minimize disruption.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-sm text-charcoal mb-2">
                      Business Types
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Office buildings</li>
                      <li>• Retail stores</li>
                      <li>• Restaurants & cafes</li>
                      <li>• Warehouses</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-charcoal mb-2">
                      Services
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Equipment removal</li>
                      <li>• Renovation cleanup</li>
                      <li>• Scheduled service</li>
                      <li>• Volume discounts</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="tel:+13189141201"
                  className="btn-secondary inline-block text-sm px-4 py-2"
                >
                  <i className="fas fa-briefcase mr-1"></i>
                  Commercial Quote
                </a>
              </div>
            </motion.div>

            {/* Construction Services */}
            <motion.div
              className="grid lg:grid-cols-2 gap-8 items-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <i className="fas fa-hard-hat text-vibrant-orange mr-2"></i>
                  Construction Debris Removal
                </h2>

                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  Safe, efficient construction debris removal for Louisiana
                  contractors. We understand job site requirements and keep
                  projects on schedule.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-sm text-charcoal mb-2">
                      Materials
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Drywall & lumber</li>
                      <li>• Concrete & brick</li>
                      <li>• Roofing materials</li>
                      <li>• Renovation debris</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-charcoal mb-2">
                      Specialties
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Storm damage cleanup</li>
                      <li>• Emergency response</li>
                      <li>• EPA compliant disposal</li>
                      <li>• Licensed & insured</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="tel:+13189141201"
                  className="btn-cta inline-block text-sm px-4 py-2"
                >
                  <i className="fas fa-tools mr-1"></i>
                  Construction Quote
                </a>
              </div>

              <div>
                <img
                  src={WhatsApp_Image_2025_07_26_at_21_22_48}
                  alt="Construction debris removal in Louisiana"
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600">
              Common questions about Louisiana junk removal
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How much does junk removal cost in Monroe, LA?",
                a: "Costs typically range from $150-$600 depending on volume. We provide free in-person estimates for accurate pricing based on your specific needs.",
              },
              {
                q: "Do you offer same-day service?",
                a: "Yes! Same-day service available in Monroe, West Monroe, Ruston, and surrounding areas when you call before 2 PM.",
              },
              {
                q: "What items can you remove?",
                a: "We remove furniture, appliances, electronics, construction debris, and most household items. We cannot remove hazardous materials without proper certification.",
              },
              {
                q: "Are you licensed and insured?",
                a: "Yes, Kane Pro is fully licensed and insured to operate in Louisiana with general liability and workers compensation coverage.",
              },
              {
                q: "Do you recycle or donate items?",
                a: "Absolutely! We donate usable items to local Louisiana charities and recycle materials when possible to keep items out of landfills.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm p-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3 className="text-base font-semibold text-charcoal mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
              Louisiana Customer Reviews
            </h2>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
              ))}
              <span className="ml-2 text-base text-gray-600">5.0 stars</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Professional junk removal in Ruston. On-time, fair pricing, highly recommend!",
                author: "Sarah M., Ruston LA",
              },
              {
                text: "Excellent commercial cleanout for our Monroe office renovation. Very professional.",
                author: "Mike T., Monroe LA",
              },
              {
                text: "Fast same-day service in Calhoun! Great local company with integrity.",
                author: "Jennifer L., Calhoun LA",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="fas fa-star text-yellow-400 text-sm"
                    ></i>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-2 italic">
                  "{review.text}"
                </p>
                <p className="text-xs text-vibrant-orange font-semibold">
                  {review.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 bg-deep-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready for Professional Junk Removal?
            </h2>
            <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Serving Monroe, West Monroe, Ruston & Northeast Louisiana with
              same-day service available
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13189141201"
                className="btn-cta text-base px-6 py-3"
              >
                <i className="fas fa-phone mr-2"></i>
                Call (318) 914-1201
              </a>
              <a href="#quote-form" className="btn-outline text-base px-6 py-3">
                <i className="fas fa-calculator mr-2"></i>
                Get Free Quote
              </a>
            </div>

            <p className="text-sm text-gray-300 mt-4">
              Licensed & Insured • Same-Day Service Available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}
