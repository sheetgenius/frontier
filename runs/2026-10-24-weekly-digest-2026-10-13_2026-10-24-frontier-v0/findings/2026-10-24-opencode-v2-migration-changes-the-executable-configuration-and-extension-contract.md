---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-v2-migration-changes-the-executable-configuration-and-extension-contract
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/config/normalize.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/commit/3be039593a9a2cbe44f9578e37ac2bd789768262
    precision: commit
---
# 2026-10-24-opencode-v2-migration-changes-the-executable-configuration-and-extension-contract

V2 migration changes the executable, configuration and extension contract. Intake standing contract plus new migration repairs: V2 normalizes supported V1 configuration in memory without rewriting the source file, but V1 plugins do not run on the V2 API. Global `cli.json` replaces `tui.json`; project-local TUI configuration does not carry over as a global setting. V2 reads `AGENTS.md` instructions, with no `CLAUDE.md` fallback. It accepts and preserves `lsp` configuration but does not run language servers, expose LSP tools or produce LSP diagnostics. Recent fixes map legacy `apply_patch` permission to `edit` in 2.1.3, resolve relative session directories in 2.1.3, and recognize V2 agent fields and attribute V1 global sessions in 2.1.4. V1 itself gained a same-major update guard in 1.19.2; local ancestry places #54904 in 1.19.2 and not 1.19.1. Its explicit `opencode upgrade --major` path remains distinct from a V1 patch update.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Adapt before migrating: preserve the V1 data/configuration, inventory executable and server versions, port plugins, move required instructions into `AGENTS.md`, and replace LSP-dependent verification with the project compiler, lint or typecheck commands. Test one real imported session and each agent permission set on 2.1.4. The V2 architecture removes some old integration scaffolding, but migration creates a compatibility review; a successfully imported conversation does not establish equivalent verification or authority.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/config/normalize.ts
- https://github.com/anomalyco/opencode/commit/3be039593a9a2cbe44f9578e37ac2bd789768262
