---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-unreleased-on-main-after-2-1-296-the-mods-guard-extends-to-ask-verdicts-and-pins-policy
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/compare/v2.1.296...bf2323b3021c9d3db7a31e1e7d61068c3f704497
    precision: git_compare
  - url: https://github.com/anthropics/claude-code/blob/bf2323b3021c9d3db7a31e1e7d61068c3f704497/mods/sec-default/README.md
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/sec-default/README.md
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-unreleased-on-main-after-2-1-296-the-mods-guard-extends-to-ask-verdicts-and-pins-policy

Unreleased on main after 2.1.296: the mods guard extends to ask verdicts and pins policy and code-loading variables. On every released build the guard holds only deny rules over a user's mod: even where it loads, an installed mod can turn an ask from a rule or a non-managed hook into an allow, and nothing stops its `$.env.set`, which reaches every command and MCP server the session starts afterward. Source pushed to main after 2.1.296 holds asks as well as denies, refuses a user mod that sets variables locating policy and sign-in or loading code into child processes, and seats the guard on machines that only have a `managed-mcp.json`. No published binary contains it. The vendor's README calls the env pin 'a list, not a boundary' that stops a careless plugin, not a hostile one, so even after it ships `allowManagedModsOnly` remains the control against a hostile user mod. The ask hold also leaves classic `PermissionRequest` hooks, mode-owned asks in plain `-p` runs, and hosted sessions without the guard outside its reach.

Channel: main-unreleased. Half: defect. Date: 2026-10-11 to 2026-10-13.

Operator consequence: Treat the released guard as deny-only. Until a changelog line names these holds, a managed fleet that lets users install mods should assume a user mod can approve what an ask rule exists to stop and can set `NODE_OPTIONS` or `LD_PRELOAD` for every child; `allowManagedModsOnly` closes both today. To settle it, read the next release's changelog and search its binary for "is not for plugins outside policy to change". The vendor wrote these gaps into its public source before its changelog, so diffing `mods/` between tags is now a leading indicator.

## Receipt
- https://github.com/anthropics/claude-code/compare/v2.1.296...bf2323b3021c9d3db7a31e1e7d61068c3f704497
- https://github.com/anthropics/claude-code/blob/bf2323b3021c9d3db7a31e1e7d61068c3f704497/mods/sec-default/README.md
- https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/sec-default/README.md
