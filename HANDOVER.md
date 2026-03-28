# Nawab School of Motoring — Website Handover

## Live Preview
https://nawab-school-of-motoring.vercel.app

## Source Code
https://github.com/alimarwan01/nawab-school-of-motoring

## What It's Built With
- **Next.js 16** (React framework)
- **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (styling and components)
- **Vercel** (hosting — free tier)

Any web developer familiar with React/Next.js can work on this immediately.

## Running It Locally
```bash
git clone https://github.com/alimarwan01/nawab-school-of-motoring.git
cd nawab-school-of-motoring
pnpm install
pnpm dev
```
Opens at http://localhost:3000

## Where to Change Things

### Phone number, address, social links
**One file:** `src/lib/constants.ts`
Change it here and it updates across the entire site (header, footer, contact page, SEO, schema markup — everywhere).

### Prices
**One file:** `src/data/pricing.ts`
All hourly rates, block bookings, student rates, Pass Plus, and test day car hire prices are here.

### Reviews / Testimonials
**One file:** `src/data/testimonials.ts`
Each review has: name, quote, result, date, source (google/freeindex), source URL, and optional photo path.

### Student photos
**Folder:** `public/students/`
JPEG images named after students. Add new ones here and reference them in the testimonials data file.

### Show Me / Tell Me questions
**File:** `src/app/show-tell/page.tsx`
Questions are grouped into categories (Brakes & Steering, Lights & Indicators, etc). Update if the DVSA changes them. Current questions are from December 2017 per GOV.UK.

### Test routes
**File:** `src/data/routes.ts`
16 Leicester routes from Cannock Street test centre.

### SEO (meta tags, schema markup)
**File:** `src/app/layout.tsx`
Pulls from `src/lib/constants.ts` automatically. Sitemap at `src/app/sitemap.ts`, robots at `src/app/robots.ts`.

## Pages
| Page | URL | What it does |
|------|-----|-------------|
| Home | / | Hero, stats, Google rating, how it works, about, wall of passes, pricing snapshot, CTA |
| Services | /services | 6 service types + what's included |
| Pricing | /pricing | Full pricing with comparison cards |
| Reviews | /testimonials | 44 verified reviews from Google & FreeIndex |
| Show/Tell | /show-tell | DVSA vehicle check questions (tap to reveal) |
| Routes | /routes | 16 Leicester test routes (tap to expand) |
| Contact | /contact | Phone, address, map, contact form |

## To Deploy on His Domain
1. Add `nawabmotoring.co.uk` as a custom domain in Vercel project settings
2. Change the domain's DNS A record to point to Vercel's IP (Vercel will show the exact values)
3. Vercel handles SSL automatically
4. His old hosting can be cancelled once the DNS is switched

## What's Not Set Up Yet
- **Supabase** — not connected. Contact form validates but doesn't store submissions. Connect Supabase and uncomment the insert in `src/app/api/contact/route.ts` to save form submissions to a database.
- **Admin panel** — no way to edit the site without code. Prices, reviews, and content are in code files.
- **Google Maps embed** — uses approximate coordinates. Replace the iframe URL in `src/app/contact/page.tsx` with the real embed URL from Google Maps.
