---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-ghsa-7x36-8jrh-v4pw-a-copied-repo-s-git-config-could-run-code-on-the-host-before-any-promp
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/f6234d00c5d59450adea1d7edd30ad3859375c79
    precision: commit
---
# 2026-09-21-hermes-agent-ghsa-7x36-8jrh-v4pw-a-copied-repo-s-git-config-could-run-code-on-the-host-before-any-promp

GHSA-7x36-8jrh-v4pw: a copied repo's .git/config could run code on the host before any prompt (fixed v2026.9.7). GHSA-7x36-8jrh-v4pw: a copied repo's .git/config could run code on the host before any prompt (fixed v2026.9.7)

Channel: tagged-release. Half: defect. Date: commit 2026-09-02; tagged 2026-09-07.

Operator consequence: Every tag through v2026.8.31 is exposed. Upgrade to v2026.9.7 or later before opening Hermes in any directory you did not create or clone yourself. Project-skill trust (`hermes skills trust`) never gated this path; the exposure was pre-trust.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/f6234d00c5d59450adea1d7edd30ad3859375c79
