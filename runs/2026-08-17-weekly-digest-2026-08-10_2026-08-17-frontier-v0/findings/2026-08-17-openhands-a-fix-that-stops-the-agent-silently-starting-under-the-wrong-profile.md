---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openhands-a-fix-that-stops-the-agent-silently-starting-under-the-wrong-profile
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/16523
    precision: merged_pr
---
# 2026-08-17-openhands-a-fix-that-stops-the-agent-silently-starting-under-the-wrong-profile

A fix that stops the agent silently starting under the wrong profile missed v1.14.0 by 49 seconds.

Agent Profile activation in Agent Canvas is pointer-only, so the global agent_settings block may describe a different agent than the profile does. When /api/agent-profiles failed during front-page launch, the client silently fell back to those global settings and could start the wrong ACP agent. PR #16523 propagates the profile-discovery failure out of useCreateConversation and blocks conversation creation on stale inline agent_settings, replacing the regression test that had codified the unsafe fallback. It merged at 21:40:47 UTC on 2026-08-17; v1.14.0 was published at 21:41:36 UTC and does not contain it.

Channel: main-unreleased. Ancestry: PR #16523 merge commit e9ca71d138a658ea15d930b2be3a5b28c251a7f2, merged 2026-08-17T21:40:47Z. gh api repos/OpenHands/OpenHands/compare/e9ca71d138a658ea15d930b2be3a5b28c251a7f2...v1.14.0 returns {"status":"behind","ahead_by":0,"behind_by":1}  --  v1.14.0 is behind the commit, so the commit is NOT in the tag. gh api compare/v1.14.0...main lists e9ca71d13 as one of exactly three commits main is ahead by. No tag contains it as of 2026-08-17.

Operator consequence: Watch, and do not assume the latest release has it. As of the window close this fix exists only on main  --  v1.14.0 and every release before it still fall back to global settings when profile discovery errors, which means a transient API failure can start an agent other than the one your profile names, with that agent's tools and permissions, and no visible signal. This is exactly the class of failure that makes a profile a suggestion rather than a control. Wait for v1.15.0, or verify the running agent identity rather than trusting the profile you selected.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/16523
