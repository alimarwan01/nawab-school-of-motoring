Deploy the current state to production and verify it works.

1. Run /code-review if available — fix any findings with confidence > 80 before proceeding
2. Run all tests — fix any failures before deploying
3. Run the build (`pnpm build`) — fix any errors
4. Verify environment variable parity:
   - Read `.env.example` for the list of required variables
   - Check what is set in Vercel using Vercel MCP
   - Flag any variables missing in Vercel — tell the user which ones to add
   - Common required vars: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
5. Commit all changes with /commit (or manual git commit if /commit unavailable)
6. Push to GitHub (this triggers Vercel auto-deploy)
7. Wait for the Vercel deployment to complete
   - Use the Vercel MCP to check deployment status
8. Verify the deployment:
   - Check that the site loads
   - Check that key pages work
   - Check that auth flows work (if applicable)
   - Check that database operations work (if applicable)
9. If anything is broken in production:
   - Check environment variable differences between local and Vercel
   - Check for SSR vs CSR behavior differences
   - Check Vercel function runtime limits (10s serverless, 25s Pro)
   - Check Supabase connection limits
   - Use Vercel MCP to check deployment logs
   - Fix it, re-deploy, verify again
10. Update PROJECT_STATE.md with deployment status
11. Report what's live and working

Do not report "deployed" until you have verified it actually works.
