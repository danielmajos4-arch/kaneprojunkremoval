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
  const [useGoogleMaps, setUseGoogleMaps] = useState(false); // Default to custom map

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
    // Only load Google Maps if explicitly enabled
    if (!useGoogleMaps) return;

    let timeoutId: NodeJS.Timeout;
    let initAttempted = false;

    const initializeMap = () => {
      if (!mapRef.current || initAttempted) return;
      
      initAttempted = true;

      try {
        if (!window.google || !window.google.maps) {
          setMapError(true);
          return;
        }

        const center = { lat: 32.5404, lng: -92.3385 }; // Calhoun, LA coordinates
        
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 9,
          center: center,
          styles: [
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

          if (index === 0) {
            setTimeout(() => {
              infoWindow.open(map, marker);
            }, 1000);
          }
        });

        new window.google.maps.Circle({
          strokeColor: '#1e3a5f',
          strokeOpacity: 0.6,
          strokeWeight: 2,
          fillColor: '#ffcb00',
          fillOpacity: 0.1,
          map: map,
          center: center,
          radius: 50000,
        });

      } catch (error) {
        setMapError(true);
      }
    };

    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      timeoutId = setTimeout(() => {
        if (!mapLoaded) {
          setMapError(true);
        }
      }, 5000);

      const callbackName = `initMap_${Date.now()}`;
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}&callback=${callbackName}`;
      script.async = true;
      script.defer = true;
      script.onerror = () => setMapError(true);
      
      (window as any)[callbackName] = initializeMap;
      document.head.appendChild(script);
    };

    const loadTimer = setTimeout(loadGoogleMaps, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (loadTimer) clearTimeout(loadTimer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [useGoogleMaps]);

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
          {/* Map Toggle Buttons */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg p-1 shadow-lg border border-gray-200 inline-flex">
              <button
                onClick={() => setUseGoogleMaps(false)}
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 text-white shadow-sm bg-[#0000006e]"
              >
                <i className="fas fa-map mr-2"></i>
                Custom Map
              </button>
              <button
                onClick={() => setUseGoogleMaps(true)}
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 text-white shadow-sm bg-[#00000075]"
              >
                <i className="fab fa-google mr-2"></i>
                Google Maps
              </button>
            </div>
          </div>

          {/* Map Container */}
          {useGoogleMaps ? (
            /* Google Maps Implementation */
            (!mapError ? (<div className="relative w-full h-96 md:h-[500px] bg-gray-200">
              <div 
                ref={mapRef} 
                className="absolute inset-0 w-full h-full"
                role="img"
                aria-label="Interactive map showing Kane's Junk Removal service areas in Louisiana"
                style={{ minHeight: '400px' }}
              />
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
                    <p className="text-navy font-semibold">Loading Google Maps...</p>
                    <p className="text-gray-600 text-sm mt-2">Requires API key for full functionality</p>
                  </div>
                </div>
              )}
            </div>) : (<div className="relative w-full h-96 md:h-[500px] bg-red-50 border-2 border-red-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <i className="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
                <h3 className="text-lg font-semibold text-red-700 mb-2">Google Maps API Key Required</h3>
                <p className="text-red-600 text-sm mb-4">To use Google Maps, you'll need to add your API key.</p>
                <button
                  onClick={() => setUseGoogleMaps(false)}
                  className="bg-navy text-white px-4 py-2 rounded-lg hover:bg-navy-dark transition-colors"
                >
                  Switch to Custom Map
                </button>
              </div>
            </div>))
          ) : (
            /* Custom Map Illustration */
            (<div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden rounded-lg shadow-lg">
              {/* Louisiana Shape Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  viewBox="0 0 500 400" 
                  className="w-full h-full max-w-lg opacity-15"
                  fill="currentColor"
                  style={{ color: '#1e3a5f' }}
                >
                  <path d="M100 200 Q150 120 200 140 Q250 130 300 160 Q350 150 400 200 Q390 250 350 270 Q300 290 250 280 Q200 300 150 270 Q110 250 100 200 Z"/>
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
              {serviceAreas.map((area, index) => {
                const positions = [
                  { top: '45%', left: '50%' }, // Calhoun (center)
                  { top: '30%', left: '55%' }, // Farmerville
                  { top: '50%', left: '35%' }, // Ruston
                  { top: '60%', left: '70%' }, // West Monroe
                  { top: '65%', left: '75%' }, // Monroe
                ];
                
                return (
                  <motion.div
                    key={area.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={positions[index]}
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
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl border-2 border-white ${
                      area.isBase ? 'bg-red-600' : 'bg-navy'
                    }`}>
                      K
                    </div>
                    
                    {/* City Label */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white px-4 py-3 rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
                      <div className="text-base font-semibold text-navy">{area.name}</div>
                      <div className="text-sm text-gray-600 mt-1">{area.description}</div>
                      <div className="text-sm text-louisiana-gold font-semibold mt-2 flex items-center">
                        <i className="fas fa-phone mr-2"></i>
                        (318) 914-1201
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              {/* North Louisiana Label */}
              <motion.div 
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-lg shadow-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-base font-semibold text-navy">North Louisiana</div>
                <div className="text-sm text-gray-600">50-mile service radius</div>
              </motion.div>
              {/* Custom Map Badge */}
              <div className="absolute bottom-4 right-4 bg-navy/90 text-white px-3 py-2 rounded-lg text-sm">
                <i className="fas fa-map mr-2"></i>
                Interactive Service Areas
              </div>
            </div>)
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
                <h3 className="font-semibold mb-2 text-[#f07439]">5 Cities Served</h3>
                <p className="text-sm text-[#020812d1]">Calhoun, Farmerville, Ruston, West Monroe & Monroe</p>
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
                <h3 className="font-semibold mb-2 text-[#f07439]">Same Day Service</h3>
                <p className="text-sm text-[#010914ba]">Available Monday - Saturday, 7AM - 8PM</p>
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
                <h3 className="font-semibold mb-2 text-[#f07439]">Call for Service</h3>
                <a href="tel:+13189141201" className="hover:text-white transition-colors font-bold text-[#1c1919b0]">
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
              <span 
                key={area.name}
                className="px-3 py-1 rounded-full text-white bg-[#a6292900]"
              >
                {area.name} LA
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}