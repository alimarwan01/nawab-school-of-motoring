Continue working on the project from where the last session left off.

1. Read CLAUDE.md for project rules
2. Read PROJECT_STATE.md to understand current state
3. Read docs/requirements.md for the full picture
4. Check git log --oneline -20 for recent work
5. Check git status for uncommitted changes
   - If there are uncommitted changes you did not make, another terminal may be active — proceed carefully
   - If there are partial/broken changes from a crashed session, assess the damage
6. Run `pnpm tsc --noEmit` to check type health
7. Run `pnpm build` to check build health
8. If the build is broken, FIX IT FIRST before doing anything else
9. Check for unapplied Supabase migrations in `supabase/migrations/`
10. If PROJECT_STATE.md conflicts with what you see in the codebase, update PROJECT_STATE.md to match reality

Then:
- If there's work in progress, finish it
- If the last feature is done, start the next one from PROJECT_STATE.md
- If there are known issues, fix them first
- If everything is done, tell me

Do not ask what to work on — read PROJECT_STATE.md and continue.
