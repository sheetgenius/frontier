---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-paperclip-built-a-four-channel-release-train-canary-to-nightly-to-beta
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/11008
    precision: merged_pr
---
# 2026-08-17-paperclip-paperclip-built-a-four-channel-release-train-canary-to-nightly-to-beta

Paperclip built a four-channel release train: canary to nightly to beta to stable, with an enforced 3-day beta soak.

Two merges on 2026-08-10 replaced Paperclip's two-lane release model with four. #11006 adds a nightly channel: a scheduled job picks the newest master commit that published a green canary, runs the full release smoke suite (real Docker container, browser-driven onboarding) against that exact published artifact, and only republishes it as nightly on green -- if smoke fails there is no nightly that night. It also separated Docker tags by lane. #11008 adds a beta channel gated behind the npm-beta GitHub environment (required reviewers are the gate), re-smoked after publish, plus a preflight_stable job that reads the beta's npm publish time and refuses a stable promotion unless the same commit soaked as a beta for at least 3 days; skip_soak_justification is the recorded emergency bypass and a registry outage makes the preflight fail closed into requiring it. First nightly published 2026-08-10T21:42:18Z, first beta 2026-08-11T03:14:49Z.

Channel: tagged-release. Ancestry: PR #11006 merge commit f9173782cd12bc5e47466150892c0724789d26af, merged 2026-08-10T19:16:55Z, base master; compare f9173782...v2026.817.0 -> ahead, ahead_by=10, behind_by=0. PR #11008 merge commit 8f7b8b3fdab2c6940f5d712134d9f62e42c7a293, merged 2026-08-10T23:53:00Z, base master; compare 8f7b8b3f...v2026.817.0 -> ahead, ahead_by=4, behind_by=0. doc/CHANNELS.md read as a blob pinned at the tag confirms the shipped, not merely merged, user-facing contract. npm dist-tags on 2026-08-18 read latest=2026.817.0, beta=2026.818.0-beta.0, nightly=2026.818.0-nightly.0, canary=2026.818.0-canary.7.

Operator consequence: Pick a lane and pin it. `npx paperclipai@beta` is now a real release-candidate channel with a human approval gate, which is the first time this source has offered anything between 'every merge' and 'wait weeks'. If you want early sight of Paperclip changes you no longer have to run master.

## Receipt
- https://github.com/paperclipai/paperclip/pull/11008
