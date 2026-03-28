Set up a brand new project from scratch. Follow this exact process:

1. Read docs/requirements.md to understand what we're building
2. Ask the user to describe what they want if requirements.md is empty
3. Create the GitHub repository
4. Initialize Next.js with TypeScript, Tailwind, pnpm:
   `pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
5. Install core dependencies:
   - `pnpm add @supabase/supabase-js @supabase/ssr`
   - `pnpm add -D vitest @vitejs/plugin-react jsdom @testing-library/react`
   - `pnpm add zod react-hook-form @hookform/resolvers`
   - `pnpm add -D playwright @playwright/test`
6. Set up shadcn/ui:
   `pnpm dlx shadcn@latest init`
7. Attempt to install Claude Code plugins (continue if any fail — they are enhancements, not requirements):
   - `/plugin install security-guidance@claude-plugins-official`
   - `/plugin install commit-commands@anthropics-claude-code`
   - `/plugin install code-review@anthropics-claude-code`
   - `/plugin install frontend-design@anthropics-claude-code`
   Note: If plugin commands fail or are not recognized, skip them and continue.
8. Attempt to install official skills for our stack (continue if any fail):
   - Vercel: `npx skills add vercel-labs/agent-skills`
   - Supabase: `npx skills add supabase/agent-skills`
   - shadcn/ui: follow instructions at ui.shadcn.com/docs/skills
   - Anthropic webapp-testing: `npx skills add anthropics/skills/skills/webapp-testing`
   Note: If skill commands fail or are not recognized, skip them and continue.
9. Create the folder structure from docs/stack.md
10. Verify .gitignore includes: `.env*.local`, `.supabase/`, `node_modules/`, `.next/`, `.DS_Store`, `*.log`
11. Create `.env.example` listing every required environment variable with placeholder values (not real secrets):
    - NEXT_PUBLIC_SUPABASE_URL=your-project-url
    - NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    - SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (server-only)
12. Create `.env.local` from `.env.example` template
13. Set up Supabase:
    - Initialize: `supabase init`
    - Create initial migration with the database schema
    - Set up auth helpers
14. Add security middleware: create `middleware.ts` with security headers and rate limiting for auth routes
15. Add global error boundary: `app/global-error.tsx`
16. Add health check route: `app/api/health/route.ts` (verifies DB connection)
17. Set up basic layout, auth pages (login/signup), and a protected dashboard page
18. Run tests to verify everything works
19. Replace README.md with a project-specific README (name, what it does, how to run locally, env vars needed, how to deploy)
20. Create initial commit and push to GitHub
21. Tell the user to:
    - Create a Supabase project and add the URL/keys to Vercel env vars
    - Connect the GitHub repo to Vercel
    - Verify .env.example matches what's configured in Vercel
22. Update PROJECT_STATE.md with setup status, File Map, and what was installed

At the end, report which plugins/skills installed successfully and which failed.
This sets up a complete, deployable, production-ready foundation — not a skeleton.
