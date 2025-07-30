import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import { motion } from "framer-motion";
import { useState } from "react";

import Website_demolition from "@assets/Website demolition.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServiceAreasPage() {
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string } | null>(null);

  // Simplified gallery with 10 plain images for easy editing
  const galleryImages = [
    {
      id: 1,
      src: "/portfolio-1.png",
      alt: "Junk removal project Monroe LA",
    },
    {
      id: 2,
      src: "/portfolio-2.png",
      alt: "Demolition project West Monroe LA",
    },
    {
      id: 3,
      src: "/portfolio-3.png",
      alt: "Construction cleanup Ruston LA",
    },
    {
      id: 4,
      src: "/hero-background-latest.png",
      alt: "Demolition Monroe Louisiana",
    },
    {
      id: 5,
      src: "/portfolio-1.png",
      alt: "Interior demolition Monroe LA",
    },
    {
      id: 6,
      src: "/portfolio-2.png",
      alt: "Commercial junk removal Monroe LA",
    },
    {
      id: 7,
      src: "/portfolio-3.png",
      alt: "Residential demolition West Monroe LA",
    },
    {
      id: 8,
      src: "/hero-background-latest.png",
      alt: "Emergency demolition Monroe LA",
    },
    {
      id: 9,
      src: "/portfolio-1.png",
      alt: "Junk hauling Northeast Louisiana",
    },
    {
      id: 10,
      src: "/portfolio-2.png",
      alt: "Demolition services Monroe area",
    },
  ];

  return (
    <>
      <SEO
        title="Monroe LA Junk Removal & Demolition Service Areas | Kane Pro"
        description="Kane Pro serves Monroe, West Monroe, Ruston & Northeast Louisiana with professional junk removal and demolition. Same-day service available."
        keywords="Monroe LA junk removal, West Monroe demolition, Ruston junk hauling, Northeast Louisiana demolition, Monroe service areas"
        canonicalUrl="https://kaneprojunkremoval.com/service-areas"
        ogTitle="Monroe LA Service Areas | Professional Junk Removal & Demolition"
        ogDescription="Serving Monroe, West Monroe, Ruston & Northeast Louisiana with same-day junk removal and demolition services."
        structuredData={generateLocalBusinessSchema("Northeast Louisiana")}
        city="Monroe"
      />
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-2" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-vibrant-orange">
                Home
              </Link>
            </li>
            <li><span className="mx-2">/</span></li>
            <li className="text-charcoal font-medium">Service Areas</li>
          </ol>
        </div>
      </nav>
      {/* Header - Mobile Optimized */}
      <section className="pt-6 pb-4 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl font-bold text-deep-green mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Monroe LA Service Areas
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional junk removal & demolition across Northeast Louisiana
          </motion.p>
        </div>
      </section>
      {/* Service Areas - Mobile Optimized */}
      <section className="py-8 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-deep-green mb-2">
              We Serve Monroe & Northeast Louisiana
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                city: "Monroe, LA",
                population: "47K+",
                highlights: ["Downtown", "ULM Area", "Garden District"],
                icon: "fas fa-city",
              },
              {
                city: "West Monroe, LA",
                population: "13K+",
                highlights: ["Antique Alley", "Commercial", "Residential"],
                icon: "fas fa-building",
              },
              {
                city: "Ruston, LA",
                population: "24K+",
                highlights: ["Louisiana Tech", "Student Housing", "Downtown"],
                icon: "fas fa-graduation-cap",
              },
              {
                city: "Calhoun, LA",
                population: "2K+",
                highlights: ["Rural Properties", "Farm Cleanouts"],
                icon: "fas fa-tractor",
              },
              {
                city: "Farmerville, LA",
                population: "3.8K+",
                highlights: ["Lake D'Arbonne", "Estate Cleanouts"],
                icon: "fas fa-lake",
              },
              {
                city: "Grambling, LA",
                population: "5.2K+",
                highlights: ["Grambling State", "Community Projects"],
                icon: "fas fa-school",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-3">
                  <i className={`${area.icon} text-xl text-vibrant-orange mr-2`}></i>
                  <div>
                    <h3 className="text-base font-bold text-charcoal">{area.city}</h3>
                    <p className="text-xs text-gray-500">{area.population}</p>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  {area.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500">
                      <i className="fas fa-map-marker-alt text-vibrant-orange mr-2"></i>
                      {highlight}
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+13189141201"
                  className="btn-secondary text-xs px-3 py-2 w-full block text-center"
                >
                  Call Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Project Gallery - Simplified for Visual Editor */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-deep-green mb-2">
              Our Work in Monroe LA
            </h2>
            <p className="text-sm text-gray-600">
              Recent projects across Northeast Louisiana
            </p>
          </div>

          {/* Simple Gallery Grid - 10 Images */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative cursor-pointer overflow-hidden rounded-lg shadow-md aspect-square"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform hover:scale-110 pt-[2px] pb-[2px]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-vibrant-orange z-10"
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={Website_demolition}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
      {/* Service Highlights - Mobile Optimized */}
      <section className="py-8 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-deep-green">
              Why Choose Kane Pro?
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "fas fa-map-marked-alt",
                title: "Local Monroe Experts",
                description: "Northeast Louisiana specialists",
              },
              {
                icon: "fas fa-hammer",
                title: "Full Demolition",
                description: "All demo projects covered",
              },
              {
                icon: "fas fa-clock",
                title: "Same-Day Service",
                description: "Available across Monroe area",
              },
              {
                icon: "fas fa-shield-alt",
                title: "Licensed & Insured",
                description: "Fully licensed in Louisiana",
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-lg p-4 shadow-md"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
              >
                <i className={`${highlight.icon} text-2xl text-vibrant-orange mb-2`}></i>
                <h3 className="text-sm font-bold text-charcoal mb-1">
                  {highlight.title}
                </h3>
                <p className="text-xs text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section - Mobile Optimized */}
      <section className="py-8 bg-deep-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Ready for Service in Monroe LA?
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Same-day junk removal & demolition across Northeast Louisiana
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+13189141201"
                className="btn-cta text-sm px-5 py-3"
              >
                <i className="fas fa-phone mr-2"></i>
                Call (318) 914-1201
              </a>
              <a href="#quote-form" className="btn-outline text-sm px-5 py-3">
                <i className="fas fa-calculator mr-2"></i>
                Get Free Quote
              </a>
            </div>

            <p className="text-xs text-gray-300 mt-3">
              Licensed & Insured • Serving All of Monroe & Northeast Louisiana
            </p>
          </motion.div>
        </div>
      </section>
      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}