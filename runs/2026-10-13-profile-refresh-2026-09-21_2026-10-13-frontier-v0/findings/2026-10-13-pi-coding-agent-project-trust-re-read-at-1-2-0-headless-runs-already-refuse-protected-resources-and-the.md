---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-project-trust-re-read-at-1-2-0-headless-runs-already-refuse-protected-resources-and-the
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L31
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/project-trust.ts#L78-L88
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/main.ts#L671-L694
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-manager.ts#L333
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/commit/25cc5c7bf4cbc76b2e134c729eb8d57d521ed749
    precision: commit
---
# 2026-10-13-pi-coding-agent-project-trust-re-read-at-1-2-0-headless-runs-already-refuse-protected-resources-and-the

Project trust re-read at 1.2.0: headless runs already refuse protected resources, and the docs now admit a pre-trust `sessionDir` read. This corrects two things the profile tells readers. First, "headless modes show no trust prompt" is true, but the risk it implies is not. `-p`, `--mode json` and `--mode rpc` decide trust without a prompt, and under the default `"ask"` they decline. A checkout's `.pi` extensions, settings, skills and MCP servers stay unloaded unless you pass `--approve`, an extension decides, a saved decision exists, or you set `defaultProjectTrust: "always"`. That has been true since trust shipped in v0.79.0. What does load unasked, in every mode including interactive, is the context files: `AGENTS.override.md`, `AGENTS.md` and `CLAUDE.md` (security.md L57). Second, the docs now admit a pre-trust read. The checkout's `.pi/settings.json` `sessionDir` decides where the session is created before trust is resolved, and declining "cannot undo that initial session-directory lookup".

Channel: tagged-release (a docs change, first shipped in v0.87.1). The code has the same effect at v0.87.0 and v1.2.0.. Half: defect. Date: 2026-09-22.

Operator consequence: In CI, keep the default and pass `--no-approve` explicitly; reserve `--approve` for repositories you control. The open gap is context files, not headless trust. On checkouts you did not write, run with `--no-context-files` (`-nc`) or grep for `AGENTS.override.md`, in any mode. Before opening Pi in an untrusted checkout, check `.pi/settings.json` for `sessionDir`, or pass `--session-dir` or `PI_CODING_AGENT_SESSION_DIR`, which take precedence (main.ts L690-L694). That keeps your transcript out of a path the repo chose.

## Receipt
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L31
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/project-trust.ts#L78-L88
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/main.ts#L671-L694
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-manager.ts#L333
- https://github.com/earendil-works/pi/commit/25cc5c7bf4cbc76b2e134c729eb8d57d521ed749
