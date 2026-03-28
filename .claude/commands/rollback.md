Roll back a failed database migration or broken deploy.

For a failed database migration:
1. Identify which migration failed (check supabase/migrations/ and Supabase dashboard)
2. Do NOT try to manually edit the failed migration
3. Create a new corrective migration that reverses the damage
4. Apply the corrective migration
5. Verify the database is in a good state
6. Update PROJECT_STATE.md

For a broken deployment:
1. Check if the previous Vercel deployment was working (Vercel keeps all deploys)
2. Use Vercel MCP or `vercel rollback` to revert to the last working deployment
3. Diagnose what broke in the new deploy
4. Fix it locally, test it, then re-deploy
5. Update PROJECT_STATE.md

For a data loss incident:
1. If a backup exists in backups/, restore from it: `supabase db reset && psql < backups/backup-YYYY-MM-DD.sql`
2. If no backup exists, check Supabase dashboard for point-in-time recovery (Pro plans only)
3. Document what happened in PROJECT_STATE.md under Known Issues

Before any major schema change, always run: `supabase db dump > backups/backup-$(date +%Y-%m-%d).sql`

$ARGUMENTS
