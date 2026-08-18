---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-correction-to-this-publication-s-own-record-the-canary-lane-was-never
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
    precision: github_release
---
# 2026-08-17-paperclip-correction-to-this-publication-s-own-record-the-canary-lane-was-never

Correction to this publication's own record: the canary lane was never dormant, and prerelease channel is resolvable by git ancestry.

The 2026-07-27 harvest concluded that Paperclip's canary lane was 'abandoned, not merely quiet' because the newest canary git tag it could see was paperclipai@0.3.1-canary.1 from 2026-03-12, and that 'no preview-or-beta release channel exists in tag form'. That was wrong, and the error was one of namespace, not of fact: canary tags moved to refs/tags/canary/v* on 2026-03-17 and have run continuously ever since -- 1058 of them. Nightly and beta now have their own namespaces too. This matters mechanically: beta/v2026.811.0-beta.0 points at 8f7b8b3f, which is exactly the merge-base of master and v2026.817.0, so the release body's claim that the stable is the promoted beta is provable by ancestry rather than taken on trust.

Channel: preview-or-beta. Ancestry: gh api repos/paperclipai/paperclip/git/matching-refs/tags/canary/ -> 1058 refs, first refs/tags/canary/v2026.3.17-canary.3, last refs/tags/canary/v2026.818.0-canary.7. matching-refs/tags/nightly/ -> 5 refs; matching-refs/tags/beta/ -> 2 refs: beta/v2026.811.0-beta.0 at 8f7b8b3fdab2c6940f5d712134d9f62e42c7a293 and beta/v2026.818.0-beta.0 at 43ab441f0ff28cf83d4968556c2d0a9742d28113. The flat repos/.../tags listing does not surface these because they live under slash-prefixed namespaces; the npm packument shows 1110 canary publishes on the 2026.* line with no gap.

Operator consequence: Re-audit how you resolve Paperclip's channel. Query refs/tags/canary/, refs/tags/nightly/ and refs/tags/beta/ explicitly, or read the npm dist-tags; the flat tag list and the GitHub releases page both show stable only and will keep telling you the prerelease lanes are empty.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
