# Tripsure — Claude Code Instructions

## Project

Tripsure B2C informational website by Polaris Commerce Group Private Limited.  
Stack: Next.js 16, Tailwind CSS v4, TypeScript.

## gstack

gstack skills are available at `~/.claude/skills/gstack`.  
Run `~/.claude/skills/gstack/setup` if skills are not yet installed on your machine.

**Web browsing:** Always use `/browse` from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools directly.

**Available skills:**

| Skill | Purpose |
|---|---|
| `/browse` | Web browsing (use this for all browsing) |
| `/connect-chrome` | Connect to a Chrome instance |
| `/setup-browser-cookies` | Configure browser cookies |
| `/plan-ceo-review` | CEO-level plan review |
| `/plan-eng-review` | Engineering plan review |
| `/plan-design-review` | Design plan review |
| `/plan-devex-review` | Developer experience plan review |
| `/office-hours` | Office hours session |
| `/design-consultation` | Design consultation |
| `/design-shotgun` | Rapid design exploration |
| `/design-html` | HTML/CSS design generation |
| `/design-review` | Design review |
| `/review` | Code review |
| `/ship` | Ship a change |
| `/land-and-deploy` | Land and deploy |
| `/canary` | Canary deployment |
| `/qa` | Full QA pass |
| `/qa-only` | QA without fixes |
| `/benchmark` | Run benchmarks |
| `/investigate` | Deep investigation |
| `/retro` | Retrospective |
| `/document-release` | Generate release docs |
| `/document-generate` | Generate documentation |
| `/codex` | Codex tasks |
| `/cso` | CSO tasks |
| `/autoplan` | Automatic planning |
| `/careful` | Careful/cautious mode |
| `/freeze` | Freeze a file or feature |
| `/unfreeze` | Unfreeze a file or feature |
| `/guard` | Guard against regressions |
| `/setup-deploy` | Configure deployment |
| `/setup-gbrain` | Configure gbrain |
| `/learn` | Learning tasks |
| `/gstack-upgrade` | Upgrade gstack |

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
- Author a backlog-ready spec/issue → invoke /spec
