---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-antigravity-default-gates-tightened-url-fetch-now-asks-1-1-28-allow-always-pins-the-script-1-1-21-head
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.1.28/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-antigravity-default-gates-tightened-url-fetch-now-asks-1-1-28-allow-always-pins-the-script-1-1-21-head

Default gates tightened: URL fetch now asks (1.1.28); allow-always pins the script (1.1.21); headless denials are reported (1.1.27). URL fetch was allowed by default until 1.1.28: an agent reading a page from injected text needed no approval. Allow-always on a script runner was a wildcard over every script until 1.1.21.

Channel: tagged-release. Half: both. Date: 2026-08-26, 2026-09-05, 2026-09-09.

Operator consequence: Expect new URL prompts after upgrading to 1.1.28; grant per-domain rather than blanket. Review existing allow-always entries written before 1.1.21 for bare `npm run` / `pnpm` / `cargo run` grants and narrow them; the fix changes new suggestions, and the notes do not say it rewrites old grants. Headless pipelines should parse `denied_actions` (>= 1.1.27) and treat a non-empty list as a failed run; 1.1.20 had made denials non-fatal to the exit code.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.1.28/CHANGELOG.md
