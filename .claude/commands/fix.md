Fix a bug or issue. Follow this process:

1. Read PROJECT_STATE.md for context
2. Reproduce the issue — understand exactly what's broken
3. If the bug only occurs in production (not locally), check:
   - Environment variable differences between local .env.local and Vercel
   - SSR vs CSR behavior differences
   - Vercel function runtime limits (10s serverless, 25s Pro)
   - Supabase connection limits or RLS policy issues
   - Use Vercel MCP to check deployment logs
4. Diagnose the root cause (not just the symptom)
5. Fix it properly — don't hack around it
6. Add a test that would have caught this bug
7. Run all existing tests to make sure nothing else broke
8. Run the build to verify
9. Commit with /commit if available, message: "fix: [description of what was fixed]"
10. Push to deploy
11. Verify the fix works in the deployed version
12. Update PROJECT_STATE.md — remove from Known Issues

Issue to fix: $ARGUMENTS
