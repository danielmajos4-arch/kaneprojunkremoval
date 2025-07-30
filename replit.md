# Kane Pro Junk Removal Website

## Overview
A mobile-first, high-converting website for Kane Pro Junk Removal & Hauling, a Louisiana-based Christian-owned junk removal service. The application features a React frontend with Express backend, focused on lead generation through quote requests and contact forms. Updated to emphasize Christian business values and faith-driven service. Features authentic Kane Pro business imagery throughout hero sections and a professional work gallery showcasing real Louisiana junk removal services.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints for form submissions
- **Session Management**: Express sessions with PostgreSQL store

### Design System
- **Component Library**: Radix UI primitives with shadcn/ui
- **Theme**: Custom Louisiana-inspired theme (navy blue, gold, white)
- **Typography**: Professional fonts with Christian business messaging
- **Responsive**: Mobile-first design approach
- **Icons**: Font Awesome for consistent iconography
- **Branding**: Faith-driven professional branding with shield symbolizing protection and integrity

## Key Components

### Data Models
Three main entities defined in `/shared/schema.ts`:
- **Users**: Basic user authentication (id, username, password)
- **Quotes**: Quote request submissions (name, phone, email, city, service, details)
- **Contacts**: General contact form submissions (name, phone, email, city, message)

### Core Pages
1. **HomePage** (`/`): Hero section with quote form and service overview
2. **ServicesPage** (`/services`): Detailed service descriptions
3. **AboutPage** (`/about`): Company story and contact information
4. **ServiceAreasPage** (`/areas`): Geographic coverage details

### Form Components
- **QuoteForm**: Lead generation form for service quotes
- **ContactForm**: General inquiry form
- Both forms use React Hook Form with Zod validation and TanStack Query for API calls

### UI Components
- **FloatingCTA**: Sticky call-to-action button with phone number
- **Navigation**: Responsive navbar with shield logo
- **Footer**: Company information and quick links
- **Layout**: Wrapper component providing consistent structure

## Data Flow

### Form Submission Flow
1. User fills out quote or contact form
2. Client-side validation with Zod schemas
3. Form data sent to Express API endpoints (`/api/quotes` or `/api/contacts`)
4. Server validates data and stores in PostgreSQL via Drizzle ORM
5. Success/error feedback displayed to user via toast notifications

### Development Workflow
- Frontend runs on Vite dev server with HMR
- Backend runs on Express with tsx for TypeScript execution
- Database schema managed through Drizzle migrations
- Build process creates static frontend and bundled backend

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Library**: Radix UI primitives for accessible components
- **Forms**: React Hook Form + Hookform Resolvers for validation
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Font Awesome for consistent iconography

### Development Tools
- **Build**: Vite for frontend, esbuild for backend
- **TypeScript**: Full TypeScript support across stack
- **Validation**: Zod for runtime type validation
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Build Process
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js`
- Static assets served from built frontend directory

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Production build optimizations for both frontend and backend
- Session storage configured for PostgreSQL in production

### Local Development
- `npm run dev`: Starts development server with hot reloading
- `npm run db:push`: Pushes schema changes to database
- `npm run build`: Creates production build
- `npm start`: Runs production server

The application is designed for deployment on platforms like Replit, with configuration for their specific development environment including cartographer integration and runtime error overlays.

## Recent Changes (January 2025)
✓ Replaced yellow shield logo with authentic Kane Pro business logo across all pages
✓ Added professional "See Kane Pro in Action" work gallery with 12 responsive images
✓ Implemented authentic business background images across all hero sections
✓ Enhanced floating call button with prominent red styling and animations
✓ Completed military-to-Christian messaging conversion with faith-driven branding
✓ Removed logo from homepage hero section for cleaner design focus
✓ Enhanced glassmorphic navigation with blue-tinted background and white text
✓ Added business email kaneprojunkremoval@gmail.com across all pages and contact forms

## Modern Animation System (January 26, 2025)
✓ Implemented comprehensive Framer Motion animation system
✓ Added hero section staggered fade-in animations (headline, subtext, CTAs)
✓ Enhanced CTA buttons with scale hover effects and shine animations
✓ Created scroll-triggered service card animations with lift hover effects
✓ Animated service area markers with sequential appearance timing
✓ Added testimonial star rating animations with delayed scale effects
✓ Implemented work gallery hover animations with image scaling
✓ Enhanced trust badges with staggered fade-in on scroll
✓ Added CSS animation utilities for lightweight effects
✓ Optimized animations for 60fps performance and reduced motion support

## SEO & Performance Optimizations (January 26, 2025)
✓ Enhanced meta tags with targeted Louisiana junk removal keywords
✓ Optimized title tags for local SEO (Calhoun, Ruston, Monroe, Farmerville, West Monroe)
✓ Added comprehensive JSON-LD structured data for LocalBusiness schema
✓ Improved Open Graph and Twitter Card meta tags for social sharing
✓ Created robots.txt and XML sitemap with image optimization
✓ Added PWA manifest for mobile app-like experience
✓ Optimized all images with proper alt text, dimensions, and lazy loading
✓ Enhanced mobile responsiveness with touch-friendly 44px minimum targets
✓ Added critical CSS optimizations and font-display: swap for performance
✓ Implemented heading hierarchy (single H1 per page) for SEO
✓ Added performance monitoring scripts and intersection observer for images
✓ Updated all content to include location-specific keywords naturally
✓ Enhanced accessibility with ARIA labels and semantic HTML

## Color Theme Conversion (January 27, 2025)
✓ Completed systematic color theme conversion to modern professional palette
✓ Updated CSS root variables to deep green (#1E5631), vibrant orange (#FF7F11), neutral background (#F8F9FA), charcoal text (#1A1A1A)
✓ Converted all navigation components and hero sections to new color scheme
✓ Updated call-to-action buttons to vibrant orange with enhanced visibility and hover effects
✓ Modified all page headers and content sections across HomePage, ServicesPage, AboutPage, ServiceAreasPage
✓ Converted work gallery and portfolio sections to use new color themes with proper contrast
✓ Updated trust badges and service preview sections to match modern palette
✓ Enhanced footer component with deep green background and vibrant orange accents
✓ Ensured consistent color application across all text, backgrounds, and accent elements
✓ Maintained high contrast ratios for accessibility while implementing high-converting colors

## Modern Off-Canvas Navigation (January 27, 2025)
✓ Implemented modern off-canvas drawer navigation that slides from right
✓ Added smooth 0.3s ease transitions for drawer slide-in animation
✓ Created semi-transparent dark overlay with backdrop blur for modern premium feel
✓ Positioned drawer at 75% screen width with solid white background
✓ Added clear close button (X) at top-right of drawer with hover effects
✓ Implemented body scroll lock when menu is open for better UX
✓ Enhanced mobile menu items with clean styling and smooth hover animations
✓ Maintained all existing menu functionality while modernizing visual experience
✓ Ensured accessibility with proper focus management and overlay click-to-close
✓ Removed shield logo elements from hero sections across Services and Service Areas pages
✓ Replaced pricing section with "Free In-Person Estimates" section to reflect actual business model

## Comprehensive Local SEO Optimization (January 27, 2025)
✓ Added comprehensive SEO component with structured data (JSON-LD LocalBusiness schema)
✓ Implemented city-specific meta titles, descriptions, and keywords for each page
✓ Added local landmark references: Louisiana Tech University (Ruston), Downtown Monroe/Ouachita River (Monroe), Antique Alley/Thomas Road (West Monroe), Highway 80/Calhoun Middle School (Calhoun)
✓ Enhanced H1 headings to target specific cities: HomePage (Calhoun), ServicesPage (Ruston), AboutPage (Monroe), ServiceAreasPage (West Monroe)
✓ Added city-specific H2 service headings: "Residential Junk Removal in Ruston, LA", "Commercial Junk Removal in Monroe, LA", "Construction Debris Removal in Calhoun, LA"
✓ Included detailed service area listings with local community references across all pages
✓ Optimized Open Graph and Twitter Card meta tags for social media sharing
✓ Created robots.txt and XML sitemap with proper canonical URLs for search engines
✓ Enhanced local content with neighborhood and landmark mentions throughout service descriptions
✓ Implemented proper heading hierarchy (single H1 per page, descriptive H2s) for SEO structure
✓ Added business email kaneprojunkremoval@gmail.com consistently across all contact forms and pages

## Enhanced Conversion-Focused CTA (January 27, 2025)
✓ Enhanced floating "CALL NOW" button with persuasive text block above the button
✓ Added "Need a quote fast?" headline in bold (18-20px) and "Call now for same-day estimates & pickup" subtext (14-16px)
✓ Implemented semi-transparent background with backdrop blur for text readability across all backgrounds
✓ Added subtle pulse animation and white border to the text block for increased visibility
✓ Improved mobile responsiveness with proper spacing and max-width constraints
✓ Maintained existing phone link functionality while enhancing conversion messaging
✓ Created cohesive call-to-action block that emphasizes same-day service promise

## Comprehensive Mobile Optimization (January 27, 2025)
✓ Fixed icon spacing across all pages by reducing gaps from gap-2/gap-3 to gap-1/gap-2 for better mobile alignment
✓ Updated grid layouts from md:grid-cols-2 to sm:grid-cols-2 for improved mobile stacking behavior
✓ Enhanced text readability with leading-relaxed classes and responsive font sizing (text-base sm:text-lg)
✓ Optimized section spacing with py-12 sm:py-16 for mobile-first design approach
✓ Improved service cards with responsive padding (p-4 sm:p-6) and better content flow
✓ Enhanced testimonial cards with mobile-friendly text sizing and improved spacing
✓ Reduced location pin icon gaps to minimal spacing for cleaner visual connection between icons and text
✓ Applied consistent mobile optimization patterns across HomePage and ServicesPage
✓ Ensured proper touch-friendly spacing and clean layouts on all mobile devices

## Monroe LA SEO Optimization (January 28, 2025)
✓ Updated ServiceAreasPage title tag to "Monroe LA Junk Removal | Kane Pro | Ouachita Parish"
✓ Enhanced meta description with "Monroe LA junk removal, same-day service, free quote" and phone number
✓ Changed main H1 to "Monroe LA Junk Removal & Northeast Louisiana Coverage" for better local SEO
✓ Repositioned Monroe LA as primary service area with special gold ring highlighting and "PRIMARY SERVICE AREA" badge
✓ Integrated "Monroe LA", "Ouachita Parish", and "Northeast Louisiana" keywords throughout content naturally
✓ Updated all service descriptions to emphasize Monroe LA and Ouachita Parish coverage
✓ Enhanced Monroe detailed section with Monroe LA-focused headers and local business keywords
✓ Updated customer testimonials to include Monroe LA and Ouachita Parish references
✓ Modified emergency service section to emphasize Monroe LA and Ouachita Parish storm response
✓ Updated coverage map section to lead with "Monroe LA & Northeast Louisiana Coverage"
✓ Applied authentic business image (WhatsApp attachment) to Calhoun service area card
✓ Optimized all alt text and image descriptions for Monroe LA local SEO targeting

## Critical Bug Fix (January 28, 2025)
✓ Fixed JSX syntax error in ServiceAreasPage.tsx that was preventing app startup
✓ Removed orphaned JSX code that was outside component structure causing "Adjacent JSX elements must be wrapped in an enclosing tag" error
✓ Cleaned up malformed component structure and restored proper React component syntax
✓ App now runs successfully on port 5000 without compilation errors