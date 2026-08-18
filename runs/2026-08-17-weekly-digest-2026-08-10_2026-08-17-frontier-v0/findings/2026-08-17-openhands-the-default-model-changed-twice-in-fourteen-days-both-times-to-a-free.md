---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openhands-the-default-model-changed-twice-in-fourteen-days-both-times-to-a-free
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/16657
    precision: merged_pr
---
# 2026-08-17-openhands-the-default-model-changed-twice-in-fourteen-days-both-times-to-a-free

The default model changed twice in fourteen days, both times to a free OpenHands-routed endpoint.

Agent Canvas's default LLM moved from MiniMax M2.7 to openhands/glm-5.2 in v1.10.0 (PR #16146, merged 2026-08-03) and from GLM 5.2 to openhands/kimi-k3 in v1.14.0 (PR #16657, merged 2026-08-17). Both PRs change DEFAULT_SETTINGS.llm_model, the agent_settings default, and ONBOARDING_DEFAULT_LLM_MODEL, and both add the new model to FREE_OPENHANDS_MODELS listed first. In between, v1.12.0 shipped a single feature (PR #16281) whose stated purpose was that 'only the OpenHands-routed endpoints are free' and that users were confusing openhands/glm-5.2 with similarly named non-OpenHands provider endpoints. The Enterprise SaaS default moved to GLM 5.2 on the same footing (Enterprise 0.41.0 release notes, OpenHands/enterprise PR #89).

Channel: tagged-release. Ancestry: PR #16657 merge commit 8989bf3bb5762041baa52b91ecf1f347f9360db4 (merged 2026-08-17T19:12:29Z); gh api compare/8989bf3bb5762041baa52b91ecf1f347f9360db4...v1.14.0 returns status ahead, ahead_by 1, behind_by 0. PR #16146 merge commit 246dbd48c3705511b2c1c94f113072f1184027f5 (merged 2026-08-03T21:04:10Z); compare/246dbd48c...v1.10.0 returns status ahead, ahead_by 21, behind_by 0. PR #16281 merge commit 7d897d766990088da90af1a697b6293a107442e7; compare/7d897d766...v1.12.0 returns status ahead, ahead_by 1, behind_by 0. All three tags are non-prerelease GitHub releases.

Operator consequence: Pin, don't inherit. If you run Agent Canvas and never set llm_model in your profile, the model underneath your agents changed twice in fourteen days  --  including a change to a model family from a different vendor  --  and the change arrives on upgrade with no migration note. Set llm_model explicitly in the profile for anything whose output you compare across time, and note that the free tier is free only through the openhands/ prefix; the same model name from a direct provider endpoint bills you.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/16657
