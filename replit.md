# Portfolio Application - Cloud & DevOps Engineer

## Overview

This is a professional portfolio website for S Sanjay, a Cloud & DevOps Engineer. The application is built as a modern single-page application showcasing technical skills, projects, professional experience, and providing contact functionality. The portfolio emphasizes technical credibility with a clean, professional design inspired by modern tech companies like Linear, Vercel, and Stripe.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Rendering**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (minimal alternative to React Router)
- Single-page application architecture with client-side navigation

**Rationale**: Vite provides significantly faster development experience compared to traditional bundlers, while React's component model enables maintainable UI development. Wouter reduces bundle size compared to React Router.

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority** for type-safe component variant management
- **Framer Motion** for animations and transitions

**Design System**: Uses a comprehensive theming system with CSS variables for colors, supporting light/dark modes. Custom spacing primitives, typography scales, and border radius values defined in tailwind.config.ts ensure design consistency.

**Rationale**: shadcn/ui provides accessible, customizable components without runtime overhead. Radix UI ensures WCAG compliance. Tailwind enables rapid UI development while maintaining design consistency through the configuration.

**State Management**
- **TanStack Query (React Query)** for server state management
- **React Hook Form** with **Zod** validation for form state
- React Context API for theme management

**Rationale**: TanStack Query handles caching, synchronization, and background updates for server data. React Hook Form minimizes re-renders. Zod provides runtime type validation matching TypeScript types.

### Backend Architecture

**Server Framework**
- **Express.js** on Node.js for HTTP server
- **TypeScript** throughout the backend
- Custom middleware for request/response logging
- File serving for static assets (resume PDF download)

**Rationale**: Express provides minimal, flexible HTTP routing. TypeScript ensures type safety across the full stack.

**Development Workflow**
- **tsx** for running TypeScript files directly in development
- **esbuild** for production bundling (fast JavaScript/TypeScript bundler)
- Vite middleware integration for development with Express

**Rationale**: tsx provides instant TypeScript execution in dev mode. esbuild offers extremely fast production builds. Vite's middleware mode enables full-stack development with single dev server.

### Data Storage Solutions

**Database Setup**
- **Drizzle ORM** for type-safe database queries
- **PostgreSQL** via **Neon Database** serverless driver (@neondatabase/serverless)
- Schema defined with Drizzle's schema builder

**Current Schema**: 
- User table with id, username, and password fields
- UUID primary keys using PostgreSQL's `gen_random_uuid()`

**Rationale**: Drizzle provides type safety without code generation overhead. Neon's serverless driver enables edge deployment with connection pooling. The setup is prepared for user authentication but currently minimal.

**Note**: While database infrastructure is configured, the current application uses in-memory storage (MemStorage class) for user data. The PostgreSQL setup via Drizzle is ready for future authentication features.

### Authentication & Authorization

**Current State**: Basic infrastructure present but not actively implemented
- User schema exists in database
- In-memory storage with user CRUD methods
- No active authentication flows in the UI

**Prepared Infrastructure**:
- User model with username/password fields
- Session management setup via connect-pg-simple (PostgreSQL session store)

**Rationale**: Foundation is laid for future user authentication features without current implementation overhead.

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** (@radix-ui/*) - Unstyled, accessible component primitives for 20+ components (dialogs, dropdowns, tooltips, etc.)
- **Lucide React** - Icon library (imported as needed in components)
- **cmdk** - Command palette component
- **embla-carousel-react** - Carousel/slider functionality
- **vaul** - Drawer component primitives
- **react-day-picker** - Calendar/date picker
- **input-otp** - OTP input component
- **react-resizable-panels** - Resizable panel layouts

**Development Tools**
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific dev tooling
- **@replit/vite-plugin-dev-banner** - Development environment banner

**Database & ORM**
- **Neon Database** (@neondatabase/serverless) - Serverless PostgreSQL
- **Drizzle ORM** (drizzle-orm) - Type-safe ORM
- **drizzle-kit** - Migration and schema management CLI
- **drizzle-zod** - Generate Zod schemas from Drizzle schemas

**Form Handling**
- **React Hook Form** - Performant form management
- **@hookform/resolvers** - Validation resolvers for various schemas
- **Zod** - Runtime type validation and schema definition

**Data Fetching**
- **TanStack Query** (@tanstack/react-query) - Server state management with caching

**Styling & Animation**
- **Tailwind CSS** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** - Type-safe variant styling
- **clsx** + **tailwind-merge** - Utility for conditional class merging
- **Framer Motion** - Animation library
- **date-fns** - Date formatting utilities

**Session Management**
- **connect-pg-simple** - PostgreSQL session store for Express sessions

**Assets**
- **Google Fonts** (DM Sans, Fira Code, Geist Mono, Architects Daughter) - Typography loaded via link tags in HTML

**Rationale for Dependencies**: The dependency selection prioritizes type safety (TypeScript + Zod + Drizzle), accessibility (Radix UI), developer experience (Vite + tsx), and modern React patterns (hooks, composition). The comprehensive UI component library ensures consistent, accessible user interfaces without building from scratch.