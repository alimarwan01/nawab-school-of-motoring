# Nawab School of Motoring

Professional website for Nawab School of Motoring, a DVSA approved driving school based in Leicester, UK.

## Features

- 7 pages: Home, Services, Pricing, Testimonials, Show Me/Tell Me, Test Routes, Contact
- Responsive mobile-first design
- Contact form with validation
- SEO optimised with meta tags and Open Graph
- All real content from the business

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Validation**: Zod + React Hook Form
- **Deployment**: Vercel

## Running Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (server-only)

## Deployment

Connected to Vercel via GitHub. Push to `main` triggers a production deploy.
