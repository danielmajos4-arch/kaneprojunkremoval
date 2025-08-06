import { Link } from "wouter";
import QuoteForm from "@/components/QuoteForm";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";
import { motion } from "framer-motion";
import { useState } from "react";

// Unique project showcases - duplicates removed, organized by project type
import Website_demolition_1 from "@assets/Website demolition (1)_1753836740875.jpg";
import Website_demolition_2_New from "@assets/Website demolition_1753837579366.jpg";
import WhatsApp_Image_1_Demolition from "@assets/WhatsApp Image 2025-07-26 at 21.22.48 (1)_1753837567906.jpeg";
import WhatsApp_Image_Storm_Project from "@assets/WhatsApp Image 2025-07-27 at 21.55.19 (3)_1753837691478.jpeg";
import Junk_removal_Project from "@assets/Junk removal_1753837631446.jpeg";
import Screen_Shot_Truck_Load_1 from "@assets/Screen Shot 2025-07-29 at 9.17.50 PM_1753838411149.png";
import WhatsApp_Image_Truck_Project_2 from "@assets/WhatsApp Image 2025-07-29 at 22.01.08 (1)_1753838451889.jpeg";
import WhatsApp_Image_New_1 from "@assets/WhatsApp Image 2025-07-29 at 23.30.59 (1)_1753839452505.jpeg";
import WhatsApp_Image_New_3 from "@assets/WhatsApp Image 2025-07-29 at 23.30.59_1753839452506.jpeg";

// New project image
import PostWebsiteProject from "@assets/post website_1754353712118.png";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServiceAreasPage() {
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string; category?: string } | null>(null);

  // EDITABLE PROJECT GALLERY - Update descriptions below as needed
  const galleryImages = [
    // DEMOLITION PROJECTS
    {
      id: 1,
      src: Website_demolition_1,
      alt: "Professional barn demolition Monroe LA - Complete structure removal and site cleanup",
      category: "Demolition"
    },
    {
      id: 2,
      src: Website_demolition_2_New,
      alt: "Residential demolition West Monroe LA - Safe and efficient structure removal",
      category: "demolition"
    },
    {
      id: 3,
      src: WhatsApp_Image_1_Demolition,
      alt: "Complete demolition service Monroe LA - Professional cleanup and debris removal",
      category: "Junk removal"
    },

    // STORM & DISASTER CLEANUP
    {
      id: 4,
      src: WhatsApp_Image_Storm_Project,
      alt: "Emergency storm cleanup West Monroe LA - Fast response disaster recovery",
      category: "storm cleanup"
    },

    // LARGE SCALE JUNK REMOVAL
    {
      id: 5,
      src: Junk_removal_Project,
      alt: "Commercial property cleanout Monroe LA - Large scale junk removal service",
      category: "Commercial Junk Removal"
    },
    {
      id: 6,
      src: WhatsApp_Image_New_1,
      alt: "Residential junk removal Monroe LA - Same day pickup and hauling service",
      category: "Residential Junk Removal"
    },
    {
      id: 7,
      src: WhatsApp_Image_New_3,
      alt: "Home cleanout service Northeast Louisiana - Professional junk hauling",
      category: "Residential Junk Removal"
    },

    // TRUCK LOADS & HAULING
    {
      id: 8,
      src: Screen_Shot_Truck_Load_1,
      alt: "Construction debris hauling Monroe LA - Full truck load removal service",
      category: "Hauling Service"
    },
    {
      id: 9,
      src: WhatsApp_Image_Truck_Project_2,
      alt: "Professional hauling service Monroe area - Efficient junk and debris removal",
      category: "Hauling Service"
    },

    // NEW DEMOLITION PROJECT
    {
      id: 10,
      src: PostWebsiteProject,
      alt: "Before and after demolition Monroe LA - Complete site transformation and cleanup",
      category: "Hauling service"
    }
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
      {/* Project Gallery - Organized Showcase */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-deep-green mb-2">
              Our Work in Monroe LA
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              10+ unique project showcases across Northeast Louisiana
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Demolition (4)</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Junk Removal (3)</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Hauling (2)</span>
            </div>
          </div>

          {/* Organized Gallery Grid - Improved Layout */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative cursor-pointer overflow-hidden rounded-lg shadow-md aspect-square group"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
                data-testid={`gallery-image-${image.id}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Category overlay */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs px-2 py-1 bg-black bg-opacity-75 text-white rounded">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {/* Empty image slots for future projects */}
            {[11, 12, 13].map((placeholderId) => (
              <motion.div
                key={`placeholder-${placeholderId}`}
                className="relative aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                variants={fadeInUp}
                data-testid={`upload-slot-${placeholderId}`}
              >
                <i className="fas fa-plus text-2xl text-gray-400 mb-2"></i>
                <p className="text-xs text-gray-500 text-center px-2">
                  Add New<br/>Project
                </p>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>
      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-vibrant-orange z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 rounded-full"
              data-testid="close-modal"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-vibrant-orange">
                    Project #{selectedImage.id}
                  </span>
                  {selectedImage.category && (
                    <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                      {selectedImage.category}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-700">{selectedImage.alt}</p>
              </div>
            </div>
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