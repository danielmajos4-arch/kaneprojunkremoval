import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServiceAreasPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Gallery images organized by category
  const galleryImages = [
    {
      id: 1,
      src: "/portfolio-1.png",
      alt: "Residential junk removal project in Monroe LA",
      category: "residential",
      title: "Monroe Home Cleanout",
      description: "Complete residential junk removal in Monroe",
    },
    {
      id: 2,
      src: "/portfolio-2.png",
      alt: "Commercial demolition project in West Monroe LA",
      category: "demolition",
      title: "West Monroe Commercial Demo",
      description: "Professional demolition services",
    },
    {
      id: 3,
      src: "/portfolio-3.png",
      alt: "Construction debris removal in Ruston LA",
      category: "construction",
      title: "Ruston Construction Cleanup",
      description: "Construction debris and demo work",
    },
    {
      id: 4,
      src: "/hero-background-latest.png",
      alt: "Demolition project in Monroe Louisiana",
      category: "demolition",
      title: "Monroe Structural Demolition",
      description: "Safe structural demolition services",
    },
    {
      id: 5,
      src: "/portfolio-1.png",
      alt: "Interior demolition work in Monroe LA",
      category: "demolition",
      title: "Interior Demo Work",
      description: "Professional interior demolition",
    },
    {
      id: 6,
      src: "/portfolio-2.png",
      alt: "Commercial junk removal in Monroe LA",
      category: "commercial",
      title: "Monroe Office Cleanout",
      description: "Complete commercial junk removal",
    },
    {
      id: 7,
      src: "/portfolio-3.png",
      alt: "Residential demolition in West Monroe LA",
      category: "demolition",
      title: "West Monroe Demo Project",
      description: "Residential demolition services",
    },
    {
      id: 8,
      src: "/hero-background-latest.png",
      alt: "Emergency demolition services Monroe LA",
      category: "demolition",
      title: "Emergency Demo Response",
      description: "Same-day demolition services",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "demolition", name: "Demolition" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "construction", name: "Construction" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <SEO
        title="Service Areas Monroe LA | Junk Removal & Demolition Gallery | Kane Pro"
        description="Kane Pro serves Monroe, West Monroe, Ruston & Northeast Louisiana with junk removal and demolition services. View our project gallery and service areas."
        keywords="Monroe LA junk removal, West Monroe demolition, Ruston junk hauling, Northeast Louisiana demolition, service areas Monroe, junk removal gallery"
        canonicalUrl="https://kaneprojunkremoval.com/service-areas"
        ogTitle="Monroe LA Service Areas | Junk Removal & Demolition Projects"
        ogDescription="Professional junk removal and demolition serving Monroe, West Monroe, Ruston & Northeast Louisiana. View our completed projects."
        structuredData={generateLocalBusinessSchema("Northeast Louisiana")}
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
            <li className="text-charcoal font-medium">Service Areas</li>
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
            Monroe LA Service Areas & Project Gallery
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional junk removal and demolition services across Monroe and
            Northeast Louisiana
          </motion.p>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-10 sm:py-12 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mb-4">
              Serving Monroe Louisiana & Beyond
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
              Kane Pro provides junk removal and demolition services throughout
              Northeast Louisiana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "Monroe, LA 71201",
                population: "47,000+",
                services: "Full junk removal & demolition",
                highlights: [
                  "Downtown Monroe",
                  "ULM Campus Area",
                  "Garden District",
                ],
                icon: "fas fa-city",
              },
              {
                city: "West Monroe, LA 71291",
                population: "13,000+",
                services: "Residential & commercial demo",
                highlights: [
                  "Antique Alley",
                  "Commercial District",
                  "Residential Areas",
                ],
                icon: "fas fa-building",
              },
              {
                city: "Ruston, LA 71270",
                population: "24,000+",
                services: "University area cleanouts & demo",
                highlights: [
                  "Louisiana Tech",
                  "Student Housing",
                  "Historic Downtown",
                ],
                icon: "fas fa-graduation-cap",
              },
              {
                city: "Calhoun, LA 71225",
                population: "2,000+",
                services: "Same-day demolition service",
                highlights: [
                  "Rural Properties",
                  "Farm Cleanouts",
                  "Residential Demo",
                ],
                icon: "fas fa-tractor",
              },
              {
                city: "Farmerville, LA 71241",
                population: "3,800+",
                services: "Professional junk hauling & demo",
                highlights: [
                  "Lake D'Arbonne",
                  "Rural Demolition",
                  "Estate Cleanouts",
                ],
                icon: "fas fa-lake",
              },
              {
                city: "Grambling, LA 71245",
                population: "5,200+",
                services: "University & residential services",
                highlights: [
                  "Grambling State",
                  "Student Areas",
                  "Community Projects",
                ],
                icon: "fas fa-school",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <i
                    className={`${area.icon} text-2xl text-vibrant-orange mr-3`}
                  ></i>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">
                      {area.city}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {area.population} residents
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">{area.services}</p>

                <div className="space-y-1">
                  {area.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-xs text-gray-500"
                    >
                      <i className="fas fa-map-marker-alt text-vibrant-orange mr-2"></i>
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href="tel:+13189141201"
                    className="btn-secondary text-xs px-3 py-2 w-full block text-center"
                  >
                    Call for Service
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mb-4">
              Monroe LA Project Gallery
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
              View our completed junk removal and demolition projects across
              Northeast Louisiana
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-vibrant-orange text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                    <h4 className="font-bold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs">{image.description}</p>
                    <i className="fas fa-expand text-lg mt-2"></i>
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-2 left-2 bg-vibrant-orange text-white text-xs px-2 py-1 rounded-full capitalize">
                  {image.category}
                </span>
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
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
              <h3 className="text-lg font-bold mb-1">{selectedImage.title}</h3>
              <p className="text-sm">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Service Highlights */}
      <section className="py-10 sm:py-12 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mb-4">
              Why Choose Kane Pro in Monroe LA?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fas fa-map-marked-alt",
                title: "Local Monroe Experts",
                description:
                  "Born and raised in Northeast Louisiana, we know the area",
              },
              {
                icon: "fas fa-hammer",
                title: "Full Demolition Services",
                description:
                  "From small demo to structural demolition projects",
              },
              {
                icon: "fas fa-clock",
                title: "Same-Day Service",
                description:
                  "Available throughout Monroe and surrounding areas",
              },
              {
                icon: "fas fa-shield-alt",
                title: "Licensed & Insured",
                description:
                  "Fully licensed for Louisiana junk removal and demolition",
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-lg p-6 shadow-md"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
              >
                <i
                  className={`${highlight.icon} text-3xl text-vibrant-orange mb-4`}
                ></i>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
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
              Ready for Professional Service in Your Area?
            </h2>
            <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Serving all of Monroe, West Monroe, Ruston & Northeast Louisiana
              with same-day junk removal and demolition services
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
              Licensed & Insured • Same-Day Service Available Across Monroe LA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />
    </>
  );
}
