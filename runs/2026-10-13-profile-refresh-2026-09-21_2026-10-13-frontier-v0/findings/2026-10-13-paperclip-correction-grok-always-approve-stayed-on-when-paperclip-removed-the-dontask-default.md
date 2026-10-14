---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-correction-grok-always-approve-stayed-on-when-paperclip-removed-the-dontask-default
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/fbd20b28d31c7702180bacc1de95ddc7028b4246
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/v2026.824.1/packages/adapters/grok-local/src/server/execute.ts#L206-L209
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L266-L273
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L555-L556
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/commit/f1a394bd30cb56fb9e479f98b9f50176fe921858
    precision: commit
---
# 2026-10-13-paperclip-correction-grok-always-approve-stayed-on-when-paperclip-removed-the-dontask-default

Correction: Grok always-approve stayed on when Paperclip removed the dontAsk default. The September profile wrongly said unattended Grok might need a manual --always-approve setting. alwaysApprove defaulted true before and after removal of the default dontAsk mode, and the adapter emits --always-approve when true. The maintainer reported that Grok CLI 1.0 interpreted the old default combination as deny-by-default, failed at the first tool and could be recorded as succeeded. Explicit configurations change that combination; no universal failure claim or local Grok reproduction is supported. Native Grok Build arrives in v2026.1005.0 with the ACPX default from section 1.

Channel: tagged-release. Half: defect. Date: 2026-09-02 (original fix); 2026-10-13 (correction and tagged reread).

Operator consequence: For intentional Grok prompts, set alwaysApprove: false on grok_local or a restrictive native acpxPermissionMode. Historical runs with the affected default combination warrant checking actual work, rather than trusting the success label. This correction replaces the prior consequence; it is not a newly shipped September-to-October fix.

## Receipt
- https://github.com/paperclipai/paperclip/commit/fbd20b28d31c7702180bacc1de95ddc7028b4246
- https://github.com/paperclipai/paperclip/blob/v2026.824.1/packages/adapters/grok-local/src/server/execute.ts#L206-L209
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L266-L273
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L555-L556
- https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0
- https://github.com/paperclipai/paperclip/commit/f1a394bd30cb56fb9e479f98b9f50176fe921858
