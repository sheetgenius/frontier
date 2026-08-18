---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-no-new-security-advisory-published-in-the
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/security/advisories
    precision: official_docs
---
# 2026-08-17-paperclip-no-new-security-advisory-published-in-the

No new security advisory published in the window.

Paperclip filed no repository security advisory during the window, despite merging at least two security-class fixes to master in it: the review-policy bypass (#11405) and the CWE-78 CLI guidance fix (#11400). Both are described in their PR bodies in vulnerability-report form -- 'What happened', 'Steps to reproduce', affected commit -- without a corresponding advisory.

Channel: docs-only. Ancestry: gh api repos/paperclipai/paperclip/security-advisories -> 12 published advisories. Newest is GHSA-x8hx-rhr2-9rf7 (critical, DNS-rebinding drive-by RCE, published 2026-07-22T23:12:15Z), already recorded in the 2026-07-27 harvest. Eight of the remaining eleven were published 2026-04-16, one 2026-04-10. Nothing published between 2026-08-03 and 2026-08-17.

Operator consequence: Do not use Paperclip's advisory feed as your exposure signal. The 2026-07-27 harvest already showed it running three months behind the fix; this window shows security-class fixes going out through PR titles with no advisory at all. Watch merged PRs prefixed `fix(security)` and `security(...)` on master instead.

## Receipt
- https://github.com/paperclipai/paperclip/security/advisories
