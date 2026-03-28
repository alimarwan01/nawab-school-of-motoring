Build a feature end-to-end. Follow this exact process:

1. Read PROJECT_STATE.md to understand current state
2. If the project has more than 20 files, review the File Map in PROJECT_STATE.md to scope which files you need
3. Read docs/requirements.md if this is a new project
4. Write a brief spec (3-5 bullets) of what you'll build and show it to the user
5. Wait for user approval of the spec
6. Plan the implementation — database schema, API routes, components, pages
7. Implement everything:
   - Database migrations first (if any migration modifies or removes existing columns, warn the user in plain English before applying)
   - API/server logic next (with error handling, validation, rate limiting)
   - UI components and pages last (responsive, accessible, semantic HTML)
   - Tests alongside each piece
8. Run all tests and fix failures
9. Run the build (`pnpm build`) and fix any errors
10. Run /code-review on the changes if available — fix any findings with confidence > 80
11. Commit with /commit if available (or manual git commit)
12. Push to GitHub to trigger Vercel deploy
13. Update PROJECT_STATE.md: completed features, File Map, any new integrations
14. Report done with a summary

DO NOT stop partway through. Complete all steps before reporting to the user.

Feature to build: $ARGUMENTS
