Run a thorough quality review of the codebase. This is a standalone quality gate you can run anytime.

1. Run /code-review if available (launches 5 parallel reviewers)
2. Fix any findings with confidence > 80
3. Run TypeScript type checking: `pnpm tsc --noEmit`
4. Fix any type errors
5. Run linting: `pnpm lint`
6. Fix any lint errors
7. Run all tests: `pnpm test`
8. Fix any test failures
9. Run the build: `pnpm build`
10. Fix any build errors
11. Check for code issues:
    - Unused imports or variables
    - Duplicate utility functions
    - Inconsistent naming patterns
    - Missing error handling on API routes
    - Missing loading/error states on pages
    - Placeholder content ("TODO", "lorem ipsum", "test123")
    - console.log statements
    - Hardcoded values that should be env vars
    - Missing RLS policies on Supabase tables
12. Check for security issues:
    - SUPABASE_SERVICE_ROLE_KEY usage in client components
    - Missing rate limiting on auth routes
    - Missing input sanitization where user content is rendered
    - Exposed secrets or API keys
13. Check for accessibility:
    - Missing alt text on images
    - Non-semantic HTML (divs used instead of nav, main, article, section)
    - Missing form labels
    - Missing aria attributes on interactive elements
    - Non-keyboard-accessible interactive elements
14. Check for SEO:
    - Missing page titles (metadata)
    - Missing meta descriptions
    - Missing Open Graph tags on public pages
15. Report a pass/fail summary with what was found and fixed

$ARGUMENTS
