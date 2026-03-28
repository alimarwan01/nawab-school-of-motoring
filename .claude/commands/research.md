Search my curated database of 33,000+ developer tools to find the best options for what we're building.

The database is at ~/basil/github_resources/resources.db. Use it like this:

```bash
python3 ~/basil/github_resources/starred_resources.py search "<query>" -c <category>
```

Categories: frontend, backend, mobile, ai-ml, data-apis, self-hosting, devops-infra, security-privacy, design, dev-tools, claude-agents, architecture, productivity, finance, hardware-iot, media, communication, automation, intelligence, learning, science-math, meta, cli-desktop

You can also browse subcategories:
```bash
python3 ~/basil/github_resources/starred_resources.py browse <category>
python3 ~/basil/github_resources/starred_resources.py browse <category> <subcategory>
```

Process:
1. Based on what we're building, search for relevant tools across appropriate categories
2. Filter for quality — prioritize tools with high github_stars, audit_status='alive', and recent last_pushed dates
3. Present the top options with a brief explanation of what each does
4. Recommend which ones to use for our project
5. If I approve, integrate them into the project

What to research: $ARGUMENTS
