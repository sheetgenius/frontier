---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-agents-md-reaches-all-providers-in-2-1-281-managed-only-still-admits-nested-instructions
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1477
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/commit/163ae3a264caab2b8317433e15c0895921240474
    precision: commit
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/agents-md/README.md
    precision: tagged_commit_file
  - url: https://code.claude.com/docs/en/memory#project-instructions
    precision: official_docs
---
# 2026-10-13-claude-code-agents-md-reaches-all-providers-in-2-1-281-managed-only-still-admits-nested-instructions

AGENTS.md reaches all providers in 2.1.281; managed-only still admits nested instructions. A repository that has only `AGENTS.md` now gets it as project instructions on every provider and with telemetry off from 2.1.281, so the CLAUDE.md shim is unnecessary everywhere. The loader is a built-in mod with public source, and `managed-only` keeps launch-time project, local and user instruction files and every AGENTS.md out; subdirectory CLAUDE.md, .claude/rules and path-scoped rules still load on demand. The organization's managed CLAUDE.md and auto memory remain at launch. `/doctor prompt-audit` flags instruction files written for older models, a vendor tool for deleting scaffolding. The 2.1.281 line was added a day and a half after release, and the same commit erased the 2.1.277 caveat.

Channel: tagged-release (2.1.281 and 2.1.283, on stable); docs-only (retroactive changelog edit). Half: capability. Date: 2026-09-23 (2.1.281; changelog line added 2026-09-25), 2026-09-25 (2.1.283).

Operator consequence: Delete "see AGENTS.md" CLAUDE.md shims and SessionStart hooks that print AGENTS.md once the fleet is at 2.1.281 or later, which stable is; keep an `@AGENTS.md` import only for older pins. A `CLAUDE.local.md` suppresses AGENTS.md under the default value, so developers who keep local notes need `claude-md-and-agents-md`. `managed-only` removes launch-time repository instructions and all AGENTS.md files, but nested CLAUDE.md, .claude/rules and path-scoped rules still load on demand; it is not a complete repository-instruction exclusion. Before v2.1.285 use the `agents-md@builtin` key. Cite the changelog at a pinned commit when a line matters: entries change after release.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1477
- https://github.com/anthropics/claude-code/commit/163ae3a264caab2b8317433e15c0895921240474
- https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/agents-md/README.md
- https://code.claude.com/docs/en/memory#project-instructions
