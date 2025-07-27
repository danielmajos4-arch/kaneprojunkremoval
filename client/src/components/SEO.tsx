import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  structuredData?: object;
  city?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  structuredData,
  city
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    
    // Update keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      if (!document.querySelector('meta[name="keywords"]')) {
        document.head.appendChild(metaKeywords);
      }
    }
    
    // Update canonical URL if provided
    if (canonicalUrl) {
      const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      if (!document.querySelector('link[rel="canonical"]')) {
        document.head.appendChild(canonicalLink);
      }
    }
    
    // Update Open Graph title
    const ogTitleMeta = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitleMeta.setAttribute('property', 'og:title');
    ogTitleMeta.setAttribute('content', ogTitle || title);
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitleMeta);
    }
    
    // Update Open Graph description
    const ogDescMeta = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescMeta.setAttribute('property', 'og:description');
    ogDescMeta.setAttribute('content', ogDescription || description);
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescMeta);
    }
    
    // Update structured data if provided
    if (structuredData) {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Add new structured data
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    // Add city-specific geo meta tags
    if (city) {
      const cityCoordinates = {
        'Calhoun': { lat: '32.5143', lng: '-92.4204' },
        'Farmerville': { lat: '32.7765', lng: '-92.4026' },
        'Ruston': { lat: '32.5232', lng: '-92.6379' },
        'West Monroe': { lat: '32.5171', lng: '-92.1143' },
        'Monroe': { lat: '32.5093', lng: '-92.1193' }
      };
      
      const coords = cityCoordinates[city as keyof typeof cityCoordinates];
      if (coords) {
        // Update geo position
        const geoPosition = document.querySelector('meta[name="geo.position"]') || document.createElement('meta');
        geoPosition.setAttribute('name', 'geo.position');
        geoPosition.setAttribute('content', `${coords.lat};${coords.lng}`);
        if (!document.querySelector('meta[name="geo.position"]')) {
          document.head.appendChild(geoPosition);
        }
        
        // Update ICBM
        const icbm = document.querySelector('meta[name="ICBM"]') || document.createElement('meta');
        icbm.setAttribute('name', 'ICBM');
        icbm.setAttribute('content', `${coords.lat}, ${coords.lng}`);
        if (!document.querySelector('meta[name="ICBM"]')) {
          document.head.appendChild(icbm);
        }
        
        // Update geo placename
        const geoPlace = document.querySelector('meta[name="geo.placename"]') || document.createElement('meta');
        geoPlace.setAttribute('name', 'geo.placename');
        geoPlace.setAttribute('content', `${city}, Louisiana`);
        if (!document.querySelector('meta[name="geo.placename"]')) {
          document.head.appendChild(geoPlace);
        }
      }
    }
  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, structuredData, city]);
  
  return null; // This component doesn't render anything
}

// Local Business Structured Data Generator
export function generateLocalBusinessSchema(city?: string) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kane Pro Junk Removal & Hauling",
    "image": [
      "https://kanejunkremoval.com/kane-pro-logo.png",
      "https://kanejunkremoval.com/hero-background-latest.png"
    ],
    "url": "https://kanejunkremoval.com",
    "telephone": "+1-318-914-1201",
    "email": "kaneprojunkremoval@gmail.com",
    "priceRange": "$$",
    "description": `Professional junk removal and hauling services in ${city || 'Northeast Louisiana'}. We handle residential cleanouts, commercial debris removal, storm cleanup, appliance removal, and more. Family-owned Christian business with same-day service.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "493 JB Cyrus Rd",
      "addressLocality": "Calhoun",
      "addressRegion": "LA",
      "postalCode": "71225",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.5143,
      "longitude": -92.4204
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "areaServed": [
      {
        "@type": "Place",
        "name": "Calhoun, Louisiana"
      },
      {
        "@type": "Place", 
        "name": "Farmerville, Louisiana"
      },
      {
        "@type": "Place",
        "name": "Ruston, Louisiana"
      },
      {
        "@type": "Place",
        "name": "West Monroe, Louisiana"
      },
      {
        "@type": "Place",
        "name": "Monroe, Louisiana"
      }
    ],
    "serviceType": [
      "Junk Removal",
      "Debris Removal", 
      "Appliance Removal",
      "Furniture Removal",
      "Construction Debris Removal",
      "Storm Cleanup",
      "Estate Cleanouts",
      "Commercial Junk Removal"
    ],
    "paymentAccepted": ["Cash", "Check", "Credit Card"],
    "currenciesAccepted": "USD",
    "founder": {
      "@type": "Person",
      "name": "Kane"
    }
  };
  
  return baseSchema;
}