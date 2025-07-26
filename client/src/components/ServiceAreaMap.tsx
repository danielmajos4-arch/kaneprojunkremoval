import { motion } from 'framer-motion';

export default function ServiceAreaMap() {
  const serviceAreas = [
    { 
      name: 'Calhoun', 
      position: { top: '45%', left: '48%' },
      description: 'Our home base - Same day service available',
      isBase: true
    },
    { 
      name: 'Farmerville', 
      position: { top: '35%', left: '52%' },
      description: 'Professional junk removal services',
      isBase: false
    },
    { 
      name: 'Ruston', 
      position: { top: '50%', left: '35%' },
      description: 'University area cleanouts & residential services',
      isBase: false
    },
    { 
      name: 'West Monroe', 
      position: { top: '55%', left: '78%' },
      description: 'Commercial & residential junk hauling',
      isBase: false
    },
    { 
      name: 'Monroe', 
      position: { top: '60%', left: '82%' },
      description: 'Full-service junk removal & debris cleanouts',
      isBase: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-military text-navy mb-4">
            Kane's Junk Removal Service Area Map
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve Calhoun, Farmerville, Ruston, West Monroe, and Monroe Louisiana with professional junk hauling and debris removal services.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Louisiana Map Illustration */}
          <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
            {/* Louisiana Shape Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-full max-w-md opacity-10"
                fill="currentColor"
                style={{ color: '#1e3a5f' }}
              >
                <path d="M50 150 Q100 80 150 100 Q200 90 250 120 Q300 110 350 150 Q340 200 300 220 Q250 240 200 230 Q150 250 100 220 Q60 200 50 150 Z"/>
              </svg>
            </div>

            {/* Service Area Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-80 h-80 border-4 border-louisiana-gold rounded-full opacity-20"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            {/* City Markers */}
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ 
                  top: area.position.top, 
                  left: area.position.left 
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + (index * 0.2),
                  type: "spring",
                  stiffness: 200 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {/* Marker Icon */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
                  area.isBase ? 'bg-red-600' : 'bg-navy'
                }`}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                
                {/* City Label */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
                  <div className="text-sm font-semibold text-navy">{area.name}</div>
                  <div className="text-xs text-gray-600">{area.description}</div>
                  <div className="text-xs text-louisiana-gold font-semibold mt-1">
                    <i className="fas fa-phone mr-1"></i>
                    (318) 914-1201
                  </div>
                </div>
              </motion.div>
            ))}

            {/* North Louisiana Label */}
            <motion.div 
              className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-semibold text-navy">North Louisiana</div>
              <div className="text-xs text-gray-600">50-mile service radius</div>
            </motion.div>
          </div>
          
          <div className="p-6 bg-navy text-white">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-louisiana-gold rounded-full mb-3">
                  <i className="fas fa-map-marker-alt text-navy"></i>
                </div>
                <h3 className="font-semibold mb-2">5 Cities Served</h3>
                <p className="text-gray-300 text-sm">Calhoun, Farmerville, Ruston, West Monroe & Monroe</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-louisiana-gold rounded-full mb-3">
                  <i className="fas fa-clock text-navy"></i>
                </div>
                <h3 className="font-semibold mb-2">Same Day Service</h3>
                <p className="text-gray-300 text-sm">Available Monday - Saturday, 7AM - 8PM</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-louisiana-gold rounded-full mb-3">
                  <i className="fas fa-phone text-navy"></i>
                </div>
                <h3 className="font-semibold mb-2">Call for Service</h3>
                <a href="tel:+13189141201" className="text-louisiana-gold hover:text-white transition-colors font-bold">
                  (318) 914-1201
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            <strong>Coverage Area:</strong> We serve a 50-mile radius from our Calhoun, Louisiana headquarters, including all of North Louisiana.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {serviceAreas.map((area, index) => (
              <motion.span 
                key={area.name}
                className={`px-3 py-1 rounded-full ${area.isBase ? 'bg-red-600 text-white' : 'bg-navy text-white'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {area.name} LA
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}