# Kane Pro Junk Removal Website

## Overview
Kane Pro Junk Removal & Hauling is a Louisiana-based, Christian-owned business offering junk removal and hauling services. This project is a mobile-first, high-converting website designed to generate leads through quote requests and contact forms. It emphasizes Christian business values, features authentic imagery, and showcases a professional work gallery. The business vision is to provide faith-driven service with market potential in local Louisiana communities.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS with shadcn/ui components, custom Louisiana-inspired theme (navy blue, gold, white)
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite
- **Design System**: Radix UI primitives, professional typography, mobile-first responsive design, Font Awesome icons, faith-driven professional branding.
- **Gallery System**: Organized project showcase with categorized images, no duplicates, responsive grid layout with hover effects and modal viewing.

### Backend
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (using Neon Database for serverless PostgreSQL)
- **API Design**: RESTful endpoints for form submissions
- **Session Management**: Express sessions with PostgreSQL store

### Key Components
- **Data Models**: Users, Quotes (name, phone, email, city, service, details), Contacts (name, phone, email, city, message).
- **Core Pages**: HomePage, ServicesPage, AboutPage, ServiceAreasPage.
- **Form Components**: QuoteForm and ContactForm, utilizing React Hook Form, Zod, and TanStack Query.
- **UI Components**: FloatingCTA, responsive Navigation, Footer, and a consistent Layout wrapper.
- **Gallery System**: ServiceAreasPage features an organized project gallery with:
  - 9 unique project images (duplicates removed)
  - Categorized by project type (Demolition, Storm Cleanup, Junk Removal, Hauling)
  - Responsive grid layout with hover effects and category indicators
  - Enhanced modal viewing with project details
  - 3 placeholder slots for new project uploads with clear instructions

### Data Flow
- **Form Submission**: Client-side validation (Zod) -> Formspree API (https://formspree.io/f/xpwllvvz) -> Direct email delivery -> User feedback (toast notifications).
- **Contact Integration**: All forms across the website now use Formspree for consistent lead management and direct email delivery to client.

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM
- **UI Library**: Radix UI primitives
- **Forms**: React Hook Form + Hookform Resolvers
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome

### Development Tools
- **Build**: Vite (frontend), esbuild (backend)
- **TypeScript**: Used across the stack
- **Validation**: Zod
- **Database Tools**: Drizzle Kit