---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-certain-scoped-tools-use-grants-could-authorize-tools-outside-their-restrictions-until-v20
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.720.0/server/src/services/tool-access-policy.ts#L669-L675
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/tool-access-policy.ts#L673-L680
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L731-L761
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/c46e41e81c03cd3c8b64cf993615b604d7fe8c62
    precision: commit
  - url: https://github.com/paperclipai/paperclip/pull/14915
    precision: merged_pr
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/security/advisories
    precision: official_docs
---
# 2026-10-13-paperclip-certain-scoped-tools-use-grants-could-authorize-tools-outside-their-restrictions-until-v20

Certain scoped tools:use grants could authorize tools outside their restrictions until v2026.1012.0. Certain scoped tools:use grants could authorize tools outside their intended restrictions from v2026.720.0 through v2026.1005.0. A nonmatching scope.allow could fall through to a selector check that ignored allow; a matching allow entry could bypass other restrictions. Recognized selectors could still constrain the old matcher. The fixed matcher requires a matching allow entry and all additional selectors; malformed or unknown restrictions reject that grant. Null and empty-object scopes remain broad. A nonmatching grant is not a global deny overriding other grants, policies or profiles. The same release binds native MCP gateway assignments to their owner and validates legacy owner/profile/assignment provenance; another agent run token could previously authenticate an assignment whose owner column was null. This is not evidence of unauthenticated internet access, cross-company compromise or actual abuse. No corresponding public advisory was found through verification on 2026-10-14.

Channel: tagged-release. Half: defect. Date: 2026-10-12.

Operator consequence: Upgrade to v2026.1012.0 and audit grants using allow lists, combined selectors, malformed restrictions or unknown selectors. Compare actual tool audit calls with intended restrictions for the affected period. A newly unavailable tool can be the fix rejecting a bad grant; repair the grant instead of widening it reflexively. Review other grants and policy decisions before assuming one nonmatch denies access. Release notes, rather than the advisory feed alone, carried both fixes.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.720.0/server/src/services/tool-access-policy.ts#L669-L675
- https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/tool-access-policy.ts#L673-L680
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L731-L761
- https://github.com/paperclipai/paperclip/commit/c46e41e81c03cd3c8b64cf993615b604d7fe8c62
- https://github.com/paperclipai/paperclip/pull/14915
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0
- https://github.com/paperclipai/paperclip/security/advisories
