---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-1-0-85-copilot-allow-all-falsey-values-used-to-enable-auto-approval
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L99
    precision: tagged_commit_file
---
# 2026-09-21-github-copilot-cli-1-0-85-copilot-allow-all-falsey-values-used-to-enable-auto-approval

1.0.85: COPILOT_ALLOW_ALL falsey values used to enable auto-approval. The note says COPILOT_ALLOW_ALL no longer refuses to start on values such as 1, 0, yes or empty, "and falsey values now disable automatic tool approval instead of enabling it." Read plainly: before 1.0.85, setting `COPILOT_ALLOW_ALL=0` (or another falsey value that parsed) turned auto-approval on. No advisory was published for it (`gh api repos/github/copilot-cli/security-advisories` lists only GHSA-9ccr-r5hg-74gf, patched 1.0.43, and GHSA-g8r9-g2v8-jv6f, patched 0.0.423; both pre-window).

Channel: tagged-release. Half: defect. Date: 2026-09-16.

Operator consequence: Upgrade to 1.0.85 or later. Then grep CI and wrapper environments for `COPILOT_ALLOW_ALL`; any job that set it to 0/false to be safe was running with all tools auto-approved on 1.0.84 and earlier. Remove the variable rather than set it false. Same release: the `/permissions` picker marks Allow all only when all three `--allow-all-*` flags are set (L69), and "approve-for-location" now persists (L124), so re-check persisted approvals after upgrade.

## Receipt
- https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L99
