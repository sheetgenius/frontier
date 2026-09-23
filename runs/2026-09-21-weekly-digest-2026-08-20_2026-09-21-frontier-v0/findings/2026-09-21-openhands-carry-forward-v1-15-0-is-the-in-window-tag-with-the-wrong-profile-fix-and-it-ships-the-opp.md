---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openhands-carry-forward-v1-15-0-is-the-in-window-tag-with-the-wrong-profile-fix-and-it-ships-the-opp
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.15.0
    precision: github_release
---
# 2026-09-21-openhands-carry-forward-v1-15-0-is-the-in-window-tag-with-the-wrong-profile-fix-and-it-ships-the-opp

Carry-forward: v1.15.0 is the in-window tag with the wrong-profile fix, and it ships the opposite move too. The parent's main-only items reached a tag. #16523 stops a launch from silently falling back to a different profile. #16701 stops ACP model picks from being written into agent_settings when profile discovery fails. #16671 also shipped in the same tag: the home LLM dropdown now wins over a profile's pinned LLM, and the named profile's non-LLM config is cleared for that launch. v1.17.0 adds #16439, which rebuilds the active profile stamp from event history on reload.

Channel: tagged-release. Half: defect. Date: 2026-08-21.

Operator consequence: Upgrade past v1.14.0 to close the silent downgrade. Know the new rule on v1.15.0 and later. If you pick a model in the home pill that disagrees with the profile, the profile's non-LLM config does not apply to that launch. If you use profiles as tool, MCP or secret boundaries (items 2 and 3), launch from the profile and do not override the model.

## Receipt
- https://github.com/OpenHands/OpenHands/releases/tag/v1.15.0
