---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-local-aws-masking-and-signing-configuration-are-still-main-only
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/15fbcac045c29f77783bb176c20f54102f97fe32
    precision: commit
---
# 2026-10-24-codex-local-aws-masking-and-signing-configuration-are-still-main-only

Local AWS masking and signing configuration are still main-only. The [main-only patch exposes AWS signing actions in configuration and supplies local managed commands and snapshots with masked credentials](https://github.com/openai/codex/commit/15fbcac045c29f77783bb176c20f54102f97fe32). It requires credential_masking, rejects overlapping real/placeholder pairs and multiple signing actions per hook, and sets the proxy CA bundle when needed. Alpha.1 contains the signing primitive but not this wiring.

Channel: main-unreleased. Half: capability. Date: 2026-10-23.

Operator consequence: Wait for a containing release before planning native local AWS secret isolation. Test actual environment/snapshot delivery and signing together; generic stable masking and preview proxy signing are insufficient receipts for the combined path.

## Receipt
- https://github.com/openai/codex/commit/15fbcac045c29f77783bb176c20f54102f97fe32
