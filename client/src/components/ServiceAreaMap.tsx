import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Load Google Maps API without API key for demo (shows map with watermark)
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      window.initMap = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

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
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "on" }]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{ "color": "#f2f2f2" }]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#ffffff" }]
          },
          {
            "featureType": "landscape.man_made",
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
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{ "visibility": "simplified" }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#c8d7d4" }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#070707" }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#ffffff" }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
      });

      mapInstanceRef.current = map;

      // Service area locations
      const serviceAreas = [
        { 
          name: 'Calhoun', 
          position: { lat: 32.5404, lng: -92.3385 },
          description: 'Our home base - Same day service available'
        },
        { 
          name: 'Farmerville', 
          position: { lat: 32.7733, lng: -92.4045 },
          description: 'Professional junk removal services'
        },
        { 
          name: 'Ruston', 
          position: { lat: 32.5232, lng: -92.6379 },
          description: 'University area cleanouts & residential services'
        },
        { 
          name: 'West Monroe', 
          position: { lat: 32.5149, lng: -92.1374 },
          description: 'Commercial & residential junk hauling'
        },
        { 
          name: 'Monroe', 
          position: { lat: 32.5093, lng: -92.1193 },
          description: 'Full-service junk removal & debris cleanouts'
        }
      ];

      // Add markers for each service area
      serviceAreas.forEach((area, index) => {
        const marker = new window.google.maps.Marker({
          position: area.position,
          map: map,
          title: `Kane's Junk Removal ${area.name} LA`,
          icon: {
            url: 'data:image/svg+xml;base64,' + btoa(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#1e3a5f" stroke="#ffcb00" stroke-width="3"/>
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
      const serviceAreaCircle = new window.google.maps.Circle({
        strokeColor: '#1e3a5f',
        strokeOpacity: 0.6,
        strokeWeight: 2,
        fillColor: '#ffcb00',
        fillOpacity: 0.1,
        map: map,
        center: center,
        radius: 50000, // 50km radius
      });
    };

    loadGoogleMaps();

    return () => {
      // Cleanup
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-military text-navy mb-4">
            Kane's Junk Removal Service Area Map
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve Calhoun, Farmerville, Ruston, West Monroe, and Monroe Louisiana with professional junk hauling and debris removal services.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div 
            ref={mapRef} 
            className="w-full h-96 md:h-[500px]"
            role="img"
            aria-label="Interactive map showing Kane's Junk Removal service areas in Louisiana"
          />
          
          <div className="p-6 bg-navy text-white">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-louisiana-gold rounded-full mb-3">
                  <i className="fas fa-map-marker-alt text-navy"></i>
                </div>
                <h3 className="font-semibold mb-2">5 Cities Served</h3>
                <p className="text-gray-300 text-sm">Calhoun, Farmerville, Ruston, West Monroe & Monroe</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-louisiana-gold rounded-full mb-3">
                  <i className="fas fa-clock text-navy"></i>
                </div>
                <h3 className="font-semibold mb-2">Same Day Service</h3>
                <p className="text-gray-300 text-sm">Available Monday - Saturday, 7AM - 8PM</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-louisiana-gold rounded-full mb-3">
                  <i className="fas fa-phone text-navy"></i>
                </div>
                <h3 className="font-semibold mb-2">Call for Service</h3>
                <a href="tel:+13189141201" className="text-louisiana-gold hover:text-white transition-colors font-bold">
                  (318) 914-1201
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Coverage Area:</strong> We serve a 50-mile radius from our Calhoun, Louisiana headquarters, including all of North Louisiana.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-navy text-white px-3 py-1 rounded-full">Calhoun LA</span>
            <span className="bg-navy text-white px-3 py-1 rounded-full">Farmerville LA</span>
            <span className="bg-navy text-white px-3 py-1 rounded-full">Ruston LA</span>
            <span className="bg-navy text-white px-3 py-1 rounded-full">West Monroe LA</span>
            <span className="bg-navy text-white px-3 py-1 rounded-full">Monroe LA</span>
          </div>
        </div>
      </div>
    </section>
  );
}