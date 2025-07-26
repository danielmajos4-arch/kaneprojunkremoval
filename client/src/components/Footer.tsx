import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/kane-pro-logo.png" 
                alt="Kane's Junk Removal Louisiana Logo" 
                className="w-12 h-12 mr-3"
                width="48"
                height="48"
                style={{ imageRendering: 'auto', filter: 'none' }}
              />
              <div>
                <h3 className="text-xl font-military">KANE'S</h3>
                <p className="text-sm text-louisiana-gold">Junk Removal Louisiana</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional junk removal serving Calhoun, Ruston, Monroe, Farmerville & West Monroe Louisiana with Christian values and community heart since day one.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <i className="fas fa-phone text-louisiana-gold"></i>
                <a href="tel:+13189141201" className="hover:text-louisiana-gold transition-colors">
                  (318) 914-1201
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-louisiana-gold"></i>
                493 JB Cyrus Rd, Calhoun, LA 71225
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-clock text-louisiana-gold"></i>
                7am-8pm Mon-Sat, Closed Sunday
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-envelope text-louisiana-gold"></i>
                <a href="mailto:kaneprojunkremoval@gmail.com" className="hover:text-louisiana-gold transition-colors">
                  kaneprojunkremoval@gmail.com
                </a>
              </p>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-louisiana-gold">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-louisiana-gold transition-colors">
                  Residential Cleanouts
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-louisiana-gold transition-colors">
                  Commercial Cleanouts
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-louisiana-gold transition-colors">
                  Construction Debris
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-louisiana-gold transition-colors">
                  Furniture Removal
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-louisiana-gold transition-colors">
                  Appliance Removal
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-louisiana-gold transition-colors">
                  Emergency Cleanup
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-louisiana-gold">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/areas" className="hover:text-louisiana-gold transition-colors">
                  Calhoun, LA
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-louisiana-gold transition-colors">
                  Farmerville, LA
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-louisiana-gold transition-colors">
                  Ruston, LA
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-louisiana-gold transition-colors">
                  West Monroe, LA
                </Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-louisiana-gold transition-colors">
                  Monroe, LA
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2025 Kane Pro Junk Removal & Hauling. Licensed & Insured in Louisiana.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-300">Geaux Kane Pro!</span>
              <div className="flex gap-2">
                <span className="text-louisiana-gold text-xs">★★★★★</span>
                <span className="text-xs text-gray-300">Louisiana Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
