---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-review-policy-bypass-on-interaction-verdict-routes-fixed-on-master-in
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/11405
    precision: merged_pr
---
# 2026-08-17-paperclip-review-policy-bypass-on-interaction-verdict-routes-fixed-on-master-in

Review-policy bypass on interaction verdict routes -- fixed on master, in no release.

An authorization bypass in Paperclip's own review governance. On an issue with reviewPolicy set to human_only or not_creator, an agent could resolve some pending confirmation interactions because the interaction verdict routes did not apply the issue review policy to every confirmation verdict. Separately, a writer could submit a terminal verdict and change reviewPolicy to 'anyone' in the same request, weakening the stored policy before the server authorized the verdict. The fix row-locks the issue and reauthorizes both the verdict and any policy change against the current policy inside the transaction, persists the transition and its requester activity in the same transaction so concurrent verdicts cannot read an older review cycle, and removes remediation text that had suggested weakening the policy. The PR states the problem reproduces on 8ee1fb21a6.

Channel: main-unreleased. Ancestry: PR #11405 merge commit 57edb26db, merged 2026-08-15T02:06:47Z, base master. gh api repos/paperclipai/paperclip/compare/57edb26db...master -> status=ahead (contained on the default branch). gh api repos/paperclipai/paperclip/compare/57edb26db...v2026.817.0 -> status=diverged, ahead=4, behind=121 -- the stable tag does not contain it. No prerelease contains it either: the newest beta ref beta/v2026.818.0-beta.0 points at 43ab441f, committed 2026-08-17T21:30:58Z, but 57edb26db is not in its ancestry path via the tag comparison above; the only channel it is on is master.

Operator consequence: Watch, and do not treat human_only or not_creator as a hard gate on any released Paperclip build. The fix is on master only; the stable published two days later does not contain it because the release was frozen on 2026-08-10. If you rely on a restricted-actor review policy today, verify approvals out of band until this reaches a tag.

## Receipt
- https://github.com/paperclipai/paperclip/pull/11405
