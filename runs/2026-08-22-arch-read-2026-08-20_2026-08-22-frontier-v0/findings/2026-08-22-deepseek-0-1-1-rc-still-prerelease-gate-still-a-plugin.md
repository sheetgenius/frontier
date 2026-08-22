---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-22-deepseek-0-1-1-rc-still-prerelease-gate-still-a-plugin
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-20
  end: 2026-08-22
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.1-rc.2
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/b150a551b8d465e31e418e1b2eaf5e79bbb7d28e/docs/architecture.md
    precision: git_commit
---
# 2026-08-22-deepseek-0-1-1-rc-still-prerelease-gate-still-a-plugin

dsh-v0.1.1-rc.1 (528c682e) and dsh-v0.1.1-rc.2 (b150a551) published 2026-08-21, both prerelease=true. Zero prerelease=false GitHub releases. npm latest is 0.1.1-rc.2. architecture.md at b150a551 still says there is no privileged core to patch. user-approval/src/index.ts was not re-opened at this SHA.

Channel: preview-or-beta. Half: neither (posture).

Operator consequence: still a developer preview. Unpinned npx now leaves rc.8.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.1-rc.2
- https://github.com/deepseek-ai/deepseek-harness/blob/b150a551b8d465e31e418e1b2eaf5e79bbb7d28e/docs/architecture.md
