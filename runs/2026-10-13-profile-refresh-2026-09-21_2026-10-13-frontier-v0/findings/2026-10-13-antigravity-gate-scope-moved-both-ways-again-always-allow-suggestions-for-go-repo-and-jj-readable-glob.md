---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-gate-scope-moved-both-ways-again-always-allow-suggestions-for-go-repo-and-jj-readable-glob
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.16/CHANGELOG.md?plain=1#L12
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.15/CHANGELOG.md?plain=1#L19
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.16/CHANGELOG.md?plain=1#L18
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L14
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L17
    precision: tagged_commit_file
---
# 2026-10-13-antigravity-gate-scope-moved-both-ways-again-always-allow-suggestions-for-go-repo-and-jj-readable-glob

Gate scope moved both ways again: always-allow suggestions for go, repo and jj, readable global config, and wider customization loading. Wider: approving `go vet` or `go build` now offers an always-allow for that subcommand with any arguments (1.2.16); the agent may read global rules and customization files in `~/.gemini/config` (`rules/`, `AGENTS.md`, `GEMINI.md`, `skills.json`, `rules.json`, `plugins.json`, `agents.json`) and asks before editing them, while other files there stay off-limits (1.2.15); customization manifests now load from every `.agents/` directory between the working directory and the project root (1.2.16); and the agent asks to bypass the sandbox less often (1.2.10). Narrower: the `repo` suggestion is limited to the subcommand, "matching `git`, `hg`, and `jj`" (1.2.15); `go run`, `go test`, `go generate`, `go install` and `go tool` still require the exact command (1.2.16); `jj config` and `jj op` are recognized as subcommands (1.2.9); directory entries in `skills.json`, `rules.json`, `agents.json` and `plugins.json` load only direct children unless named in `include_only` (1.2.10); and `/btw` side questions no longer run user and workspace hooks (1.3.3).

Channel: tagged-release. Half: both. Date: 2026-09-23 to 2026-10-10.

Operator consequence: Re-read persisted allow rules after upgrading. A `go build` or `go vet` grant now covers any arguments, and both commands take flags that run other programs (`-toolexec`, `-vettool`); test whether such a flag prompts under the grant before you keep it. Check that nested skills still load after 1.2.10, and that a session started in a monorepo package picks up the root `.agents/` you expect after 1.2.16. None of these notes rewrites grants written earlier.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.16/CHANGELOG.md?plain=1#L12
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.15/CHANGELOG.md?plain=1#L19
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.16/CHANGELOG.md?plain=1#L18
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L14
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L17
