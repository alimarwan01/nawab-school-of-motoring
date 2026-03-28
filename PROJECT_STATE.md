# Project State

## Status: FOUNDATION COMPLETE

## What This Project Does
Professional website for Nawab School of Motoring, a DVSA approved driving school in Leicester & Luton. Redesign of the existing site at nawabmotoring.co.uk.

## Completed Features
- Home page with hero, features grid, pricing snapshot, featured testimonials, CTA
- Services page with 6 service types and 4 key features
- Pricing page with all rates (hourly, block, student, Pass Plus, test day hire)
- Testimonials page with 38 student reviews
- Show Me / Tell Me page with 13 question combinations
- Test Routes page with 16 Leicester routes from Cannock Street
- Contact page with phone, address, Google Map embed, validated contact form
- Global layout with responsive header (mobile hamburger menu) and footer
- Security middleware (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- Global error boundary
- Health check API endpoint
- Contact form API endpoint with Zod validation
- Full SEO meta tags and Open Graph on all pages
- Responsive mobile-first design throughout

## In Progress

## Up Next
- Connect Supabase for contact form submissions storage
- Connect Vercel for deployment
- Add real Google Maps embed coordinates
- Consider adding: image gallery of successful students, online booking system

## Known Issues
- Contact form submissions are not persisted yet (needs Supabase connection)
- Google Maps embed uses placeholder coordinates (needs real embed URL)
- Next.js 16 middleware deprecation warning (cosmetic, non-breaking)

## Architecture Decisions
- Static site with minimal server-side functionality (contact form API only)
- No auth needed — public-facing marketing site
- Navy blue + emerald green colour scheme for professional, trustworthy feel
- All pricing/testimonials/routes stored as TypeScript data files for easy editing
- shadcn/ui for consistent component library

## File Map
- src/app/page.tsx — home page
- src/app/services/page.tsx — services page
- src/app/pricing/page.tsx — pricing page
- src/app/testimonials/page.tsx — testimonials page
- src/app/show-tell/page.tsx — show me / tell me questions
- src/app/routes/page.tsx — Leicester test routes
- src/app/contact/page.tsx — contact page
- src/app/contact/contact-form.tsx — contact form client component
- src/app/api/contact/route.ts — contact form API endpoint
- src/app/api/health/route.ts — health check
- src/components/header.tsx — site header with navigation
- src/components/footer.tsx — site footer
- src/components/cta-banner.tsx — reusable call-to-action banner
- src/components/icons.tsx — custom SVG icons (Facebook, Twitter/X)
- src/data/testimonials.ts — 38 student reviews
- src/data/pricing.ts — all pricing data
- src/data/show-tell.ts — 13 show me / tell me combinations
- src/data/routes.ts — 16 test routes

## Environment
- **Vercel Project**: not yet connected
- **Supabase Project**: not yet created
- **GitHub Repo**: https://github.com/alimarwan01/nawab-school-of-motoring

## Integrations
