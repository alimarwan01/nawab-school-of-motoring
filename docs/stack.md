# Stack Conventions

## Supabase

### Database
- Always use RLS (Row Level Security) on every table
- Always create migrations with `supabase migration new <name>`
- Use `uuid` for primary keys (default Supabase behavior)
- Name tables in snake_case plural (e.g., `user_profiles`, `task_items`)
- Always add `created_at` and `updated_at` timestamps
- Use foreign key constraints for all relationships
- Before any major schema change, run `supabase db dump > backups/backup-$(date +%Y-%m-%d).sql`
- Never DROP COLUMN or DROP TABLE on production tables without user confirmation
- For schema changes on tables with data, use expand-contract: add new column, migrate data, then remove old column in a separate later migration
- If a migration fails, do NOT manually fix the database — create a corrective migration

### Auth
- Use Supabase Auth for all authentication
- Support email/password at minimum
- Store user profile data in a `profiles` table linked to `auth.users`
- Use auth helpers: `@supabase/ssr` for Next.js

### Storage
- Use Supabase Storage for file uploads
- Create separate buckets for different content types
- Set appropriate bucket policies (public vs private)

### Edge Functions
- Use Deno-based Supabase Edge Functions for server-side logic that can't be in Next.js API routes
- Deploy with `supabase functions deploy`

## Vercel

### Deployment
- Connect GitHub repo to Vercel project
- Push to `main` = production deploy
- Push to any other branch = preview deploy
- Use Vercel environment variables for secrets (never commit .env)
- Maintain `.env.example` listing every required variable (with placeholder values, not real secrets) — this is the canonical list of what must be configured in Vercel

### Configuration
- Use `vercel.json` only when needed (redirects, headers, etc.)
- Set environment variables in Vercel dashboard, not in code
- Common required vars: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY

## Next.js

### Structure
```
src/
  app/           # App Router pages and layouts
    (auth)/      # Auth-required routes (grouped)
    (public)/    # Public routes (grouped)
    api/         # API routes
  components/    # Reusable UI components
    ui/          # shadcn/ui components
  lib/           # Utilities, helpers, Supabase client
  types/         # TypeScript type definitions
```

### Patterns
- Server Components by default, Client Components only when needed
- Use `loading.tsx` and `error.tsx` for every route
- Use Supabase server client in Server Components
- Use Supabase browser client in Client Components
- Use Zod for all form validation schemas

## Security
- All API routes must validate and sanitize inputs (Zod handles this)
- Add rate limiting to auth-related API routes (login, signup, password reset)
- Set security headers in `next.config.js`: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Never expose SUPABASE_SERVICE_ROLE_KEY to the client — server-only
- Use NEXT_PUBLIC_ prefix only for variables safe to expose to the browser
- Add middleware.ts with security headers for all routes

## Monitoring
- Every project should have an `error_logs` table in Supabase for unhandled errors
- Add a global error boundary (`app/global-error.tsx`) that logs errors
- Add a health check at `/api/health` that verifies the database connection
- Consider adding an `/admin/errors` page (protected) for viewing recent errors

## Integrations
<!-- Claude: Add third-party services here as they are integrated -->
<!-- For each: name, what it's for, which env vars it needs, link to docs -->

## Git
- Commit often with clear messages (use /commit if available)
- One feature per branch
- Merge to main when feature is complete and tested
