import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  const serviceAreas = [
    { 
      name: 'Calhoun', 
      position: { lat: 32.5404, lng: -92.3385 },
      description: 'Our home base - Same day service available',
      isBase: true
    },
    { 
      name: 'Farmerville', 
      position: { lat: 32.7733, lng: -92.4045 },
      description: 'Professional junk removal services',
      isBase: false
    },
    { 
      name: 'Ruston', 
      position: { lat: 32.5232, lng: -92.6379 },
      description: 'University area cleanouts & residential services',
      isBase: false
    },
    { 
      name: 'West Monroe', 
      position: { lat: 32.5149, lng: -92.1374 },
      description: 'Commercial & residential junk hauling',
      isBase: false
    },
    { 
      name: 'Monroe', 
      position: { lat: 32.5093, lng: -92.1193 },
      description: 'Full-service junk removal & debris cleanouts',
      isBase: false
    }
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const loadGoogleMaps = () => {
      // Check if Google Maps is already loaded
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Set a timeout to show fallback if Google Maps fails to load
      timeoutId = setTimeout(() => {
        if (!mapLoaded) {
          setMapError(true);
        }
      }, 5000);

      // Load Google Maps API with proper error handling
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&callback=initMap&loading=async`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        console.log('Google Maps failed to load, showing fallback');
        setMapError(true);
      };
      
      window.initMap = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      try {
        // Center on North Louisiana
        const center = { lat: 32.5404, lng: -92.3385 }; // Calhoun, LA coordinates

        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 9,
          center: center,
          styles: [
            {
              "featureType": "all",
              "elementType": "geometry.fill",
              "stylers": [{ "weight": "2.00" }]
            },
            {
              "featureType": "all",
              "elementType": "geometry.stroke",
              "stylers": [{ "color": "#9c9c9c" }]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#ffffff" }]
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#eeeeee" }]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#7b7b7b" }]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#ffffff" }]
            },
            {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#c8d7d4" }]
            }
          ],
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
          gestureHandling: 'cooperative'
        });

        mapInstanceRef.current = map;
        setMapLoaded(true);
        clearTimeout(timeoutId);

        // Add markers for each service area
        serviceAreas.forEach((area, index) => {
          const marker = new window.google.maps.Marker({
            position: area.position,
            map: map,
            title: `Kane's Junk Removal ${area.name} LA`,
            icon: {
              url: 'data:image/svg+xml;base64,' + btoa(`
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="${area.isBase ? '#dc2626' : '#1e3a5f'}" stroke="#ffcb00" stroke-width="3"/>
                  <text x="20" y="25" text-anchor="middle" fill="#ffcb00" font-family="Arial, sans-serif" font-size="10" font-weight="bold">K</text>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(40, 40),
            },
            animation: window.google.maps.Animation.DROP,
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 250px;">
                <h3 style="margin: 0 0 8px 0; color: #1e3a5f; font-size: 16px; font-weight: bold;">
                  ${area.name}, Louisiana
                </h3>
                <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
                  ${area.description}
                </p>
                <div style="margin-top: 10px;">
                  <a href="tel:+13189141201" 
                     style="background: #ffcb00; color: #1e3a5f; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
                    Call (318) 914-1201
                  </a>
                </div>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          // Open first marker (Calhoun) by default
          if (index === 0) {
            setTimeout(() => {
              infoWindow.open(map, marker);
            }, 1000);
          }
        });

        // Add service area circle overlay
        new window.google.maps.Circle({
          strokeColor: '#1e3a5f',
          strokeOpacity: 0.6,
          strokeWeight: 2,
          fillColor: '#ffcb00',
          fillOpacity: 0.1,
          map: map,
          center: center,
          radius: 50000, // 50km radius
        });
      } catch (error) {
        console.log('Error initializing Google Maps:', error);
        setMapError(true);
      }
    };

    loadGoogleMaps();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, []);

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
          {/* Google Maps Container */}
          {!mapError ? (
            <div 
              ref={mapRef} 
              className="w-full h-96 md:h-[500px]"
              role="img"
              aria-label="Interactive map showing Kane's Junk Removal service areas in Louisiana"
            />
          ) : (
            /* Fallback Map Illustration */
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

              {/* City Markers - Fallback */}
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ 
                    top: `${45 + (index * 5)}%`, 
                    left: `${40 + (index * 10)}%` 
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

              {/* Map Load Error Notice */}
              <div className="absolute bottom-4 right-4 bg-yellow-100 border border-yellow-300 px-3 py-2 rounded-lg text-xs text-yellow-800">
                <i className="fas fa-info-circle mr-1"></i>
                Interactive map unavailable
              </div>
            </div>
          )}
          
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