Analyze this project, sync missing starter template pieces, and recommend tools we're missing.

This skill does two things:
1. **Starter sync** — compares this project against ~/claude-starter and adds anything missing that won't break things
2. **Tool analysis** — scans the 33K tool database for gaps

---

## Part 1: Starter Template Sync

Compare the current project against `~/claude-starter`. For each missing piece, decide whether to add it.

### Step 1: Detect the current project's stack

Read package.json, requirements*.txt, Pipfile, pyproject.toml, Cargo.toml, go.mod, Dockerfile, docker-compose.yml, or whatever exists to determine:
- Language (TypeScript, Python, Go, Rust, etc.)
- Framework (Next.js, FastAPI, Django, Flask, etc.)
- Package manager (pnpm, npm, pip, poetry, cargo, etc.)
- Database (Supabase, PostgreSQL, SQLite, etc.)
- Deploy target (Vercel, Docker, Fly.io, etc.)
- Test runner (vitest, pytest, go test, etc.)
- Build command (pnpm build, python -m build, docker build, etc.)

### Step 2: Sync slash commands

Check if `.claude/commands/` exists. For each command in `~/claude-starter/.claude/commands/`:

**Stack-agnostic commands — copy directly if missing:**
- `find-tools.md` (this file — always keep in sync)
- `research.md`
- `plan.md`

**Stack-adaptive commands — copy if missing, but adapt to the detected stack:**
- `build.md` — replace `pnpm` with the project's package manager, replace `pnpm build` with the project's build command, replace `pnpm test` with the project's test command, replace Vercel/Supabase references with the project's actual deploy/database tools
- `fix.md` — same adaptations
- `deploy.md` — replace Vercel steps with the project's deploy method (docker push, fly deploy, etc.)
- `review.md` — replace `pnpm tsc`, `pnpm lint`, `pnpm test`, `pnpm build` with the project's equivalents (e.g., `python -m mypy .`, `ruff check .`, `pytest`, `python -m build`)
- `status.md` — replace build/test commands with the project's equivalents
- `continue.md` — replace build/test commands with the project's equivalents, replace Supabase migration checks with the project's migration tool (alembic, prisma, etc.)
- `rollback.md` — replace Vercel/Supabase rollback steps with the project's equivalents
- `setup.md` — SKIP this entirely for existing projects (it's only for new project scaffolding)

**Rules:**
- NEVER overwrite an existing command file
- When adapting, keep the same workflow structure — just swap the tool-specific commands
- If you can't determine the equivalent command for this stack, use a sensible placeholder with a comment like `# TODO: replace with your build command`

### Step 3: Sync project tracking files

- **PROJECT_STATE.md** — if missing, create it from `~/claude-starter/PROJECT_STATE.md` template. Fill in what you can determine from the current project (look at git log, existing files, README)
- **docs/requirements.md** — if missing AND no equivalent exists (like AGENTS.md, specs/, etc.), create from template
- **docs/stack.md** — if missing, create one adapted to the detected stack. Document the actual tools, conventions, and folder structure of this project — don't paste the Next.js template

### Step 4: Merge .mcp.json

Read `~/claude-starter/.mcp.json` and the project's `.mcp.json` (if it exists).
- Add any MCP servers from the starter that are missing in the project
- NEVER overwrite or modify existing MCP server entries
- Skip servers that don't apply (e.g., skip Supabase MCP if the project doesn't use Supabase, skip Vercel MCP if the project doesn't deploy to Vercel)
- Context7 is universally useful — always add it if missing

### Step 5: Merge .claude/settings.json permissions

Read `~/claude-starter/.claude/settings.json` and the project's `.claude/settings.json` or `.claude/settings.local.json`.
- Add any missing permissions that are relevant to the project's stack
- NEVER remove existing permissions
- Skip permissions for tools the project doesn't use (e.g., skip `Bash(pnpm:*)` for Python projects, skip `Bash(supabase:*)` if no Supabase)
- Add permissions for tools the project DOES use that are missing (e.g., add `Bash(pytest:*)` for Python projects, `Bash(docker:*)` for Docker projects)

### Step 6: Report what was synced

List everything that was added, adapted, or skipped (and why).

---

## Part 2: Tool Database Analysis

```bash
python3 ~/basil/github_resources/find_tools.py --project .
```

This scans the project and:
1. Reports what's already installed
2. Checks Claude Code setup (missing plugins, skills, MCP servers, conflicts)
3. Identifies capability gaps prioritized as: must-have > should-have > needed > nice-to-have
4. Recommends curated best-of-best tools for each gap
5. Searches 33K database for additional options
6. Finds relevant Claude Code skills

If `find_tools.py` is not found or fails, skip this part and just report the starter sync results.

## Manual search (when $ARGUMENTS is provided)

```bash
python3 ~/basil/github_resources/find_tools.py $ARGUMENTS
```

Or browse categories:
```bash
python3 ~/basil/github_resources/starred_resources.py search "<query>" -c <category>
python3 ~/basil/github_resources/starred_resources.py browse <category>
```

Categories: frontend, backend, mobile, ai-ml, data-apis, self-hosting, devops-infra, security-privacy, design, dev-tools, claude-agents, architecture, productivity, finance, hardware-iot, media, communication, automation, intelligence, learning, science-math, meta, cli-desktop

---

## After the analysis, for each approved tool:
1. Install it using the project's package manager
2. Create the appropriate lib/config file
3. Document it in docs/stack.md under Integrations
4. Add any env vars to the project's env example file
5. Update PROJECT_STATE.md

$ARGUMENTS
