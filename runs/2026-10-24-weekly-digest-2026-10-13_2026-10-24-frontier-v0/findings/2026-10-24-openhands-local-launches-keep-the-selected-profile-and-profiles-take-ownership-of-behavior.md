---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-local-launches-keep-the-selected-profile-and-profiles-take-ownership-of-behavior
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/api/agent-profiles-service/profile-behavior.ts
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/commit/818c161b534477849716d445b2927b433f9dd9ab
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/d332f8156f12014df1b3522ab01c2508eabf6e8b
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/commit/61cd03c89ed7e5581d1f304f5791962612701b37
    precision: commit
---
# 2026-10-24-openhands-local-launches-keep-the-selected-profile-and-profiles-take-ownership-of-behavior

Local launches keep the selected profile, and profiles take ownership of behavior. The old local launch path could substitute inline global settings when a profile lacked an explicit secret allow-list. At v1.33.0, local launch awaits default-profile migration, requires a selected or active profile, and sends its ID with a separate per-launch LLM override. Migration failure stops the launch. SDK 1.55.0 removes inline agent-profile launches. Canvas 1.29.0 also puts skills, condenser, verification and Model Router selection on profiles. A public-skill allow-list now complements the deny-list. The Cloud branch falls back for an OpenHands profile with a nonempty `llm_profile_ref` not found in the fetched LLM-profile list and fetched detail lacking a `secret_refs` array. An absent LLM reference returns false from that fallback; a failed detail fetch also refuses it. A Cloud launch with no selected or active profile separately returns an empty launch. These are distinct from the local path.

Channel: tagged-release. Half: both. Date: 2026-10-15 (SDK v1.55.0); 2026-10-19 (Canvas v1.28.0); 2026-10-20 (Canvas v1.29.0).

Operator consequence: Upgrade Canvas and a remote server together to at least the new 1.55.0 floor, then inspect the migrated default profile and saved profile-specific choices. A model pick need no longer discard the local profile's other authority. This removes a fragile global-settings workaround and shifts human attention to reviewing a reusable profile. Router prompting still depends on the agent using the routing tool; profile ownership does not make it a hard spending boundary.

## Receipt
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/api/agent-profiles-service/profile-behavior.ts
- https://github.com/OpenHands/software-agent-sdk/commit/818c161b534477849716d445b2927b433f9dd9ab
- https://github.com/OpenHands/software-agent-sdk/commit/d332f8156f12014df1b3522ab01c2508eabf6e8b
- https://github.com/OpenHands/OpenHands/commit/61cd03c89ed7e5581d1f304f5791962612701b37
