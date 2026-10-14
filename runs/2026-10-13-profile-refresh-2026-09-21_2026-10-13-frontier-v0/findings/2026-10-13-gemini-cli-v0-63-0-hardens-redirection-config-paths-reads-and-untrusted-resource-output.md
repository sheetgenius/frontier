---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-v0-63-0-hardens-redirection-config-paths-reads-and-untrusted-resource-output
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/2fe7c2d3f065dc40ad573d50b2091116f8a4aa18
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0
    precision: github_release
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/safety/built-in.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/paths.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/fileUtils.ts
    precision: tagged_commit_file
---
# 2026-10-13-gemini-cli-v0-63-0-hardens-redirection-config-paths-reads-and-untrusted-resource-output

v0.63.0 hardens redirection config paths reads and untrusted resource output. Command-prefix ALLOW rules now need explicit allowRedirection for redirection even in autoEdit/YOLO. The allowed-path checker asks on .gemini configuration edits, recognizes more Windows short-name aliases and blocks .env.* except .env.example/.env.sample/.env.template/.env.dist. Reads re-resolve their target at execution and compare device/inode identities around the read. MCP resource listings/reads and web-search output gain untrusted-context wrappers. The repository's own issue-triage/dedup workflows remove shell tools and parse model output outside the agent; that workflow change is not an npm default.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Recheck narrowly allowlisted redirected commands and unattended edits to .gemini config. Audit .env path exceptions against the exact template names. These checks reduce particular injection/race paths without proving every filesystem race or shell-write path is closed. The repository workflow shows useful authority reduction: let the agent classify, then parse its output in ordinary code.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/2fe7c2d3f065dc40ad573d50b2091116f8a4aa18
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/safety/built-in.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/paths.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/fileUtils.ts
