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