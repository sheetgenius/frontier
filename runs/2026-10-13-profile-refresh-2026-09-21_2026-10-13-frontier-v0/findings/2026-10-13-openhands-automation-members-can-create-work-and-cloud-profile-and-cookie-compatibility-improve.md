---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-automation-members-can-create-work-and-cloud-profile-and-cookie-compatibility-improve
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/automation/commit/b2d0ce49cd717b3b687dca861a86c86fc5cac59b
    precision: commit
  - url: https://github.com/OpenHands/automation/commit/8bc0b16a2c80931af8e06978be548e453f7fd23b
    precision: commit
  - url: https://github.com/OpenHands/automation/commit/fb3f3cbe5bd2714589873a318d542fcd4d95ce24
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/b7f5fc2ccda9d5c5ee7e3c32b3b75ec1ec1b16f7
    precision: commit
  - url: https://github.com/OpenHands/automation/releases/tag/1.14.0
    precision: github_release
  - url: https://github.com/OpenHands/automation/releases/tag/1.17.0
    precision: github_release
  - url: https://github.com/OpenHands/automation/releases/tag/1.19.2
    precision: github_release
---
# 2026-10-13-openhands-automation-members-can-create-work-and-cloud-profile-and-cookie-compatibility-improve

Automation members can create work and Cloud profile and cookie compatibility improve. Four creation routes now require view_automations rather than manage_automations. An ordinary org member can create an automation and manage it as creator; this does not grant management of everyone else's work. Automation 1.17.0 exposes Cloud agent-profile selection/capabilities and fixes rejection of profile-bearing preflight templates; API selections check the org's profiles, whereas callerless Git Sync selection remains constrained. Automation 1.19.2 accepts both openhands_auth and legacy keycloak_auth and preserves the original cookie name upstream, following enterprise's new-login transition in 1.66.0.

Channel: tagged-release. Half: both. Date: 2026-09-22 (automation 1.14.0); 2026-10-02 (1.17.0); 2026-10-09 (1.19.2).

Operator consequence: Revise any permission guide that says view-only members cannot create work. Keep creator identity distinct from org-wide management. For separately operated services, align the enterprise login transition and automation cookie support; a tagged compatibility repair does not date a hosted deployment.

## Receipt
- https://github.com/OpenHands/automation/commit/b2d0ce49cd717b3b687dca861a86c86fc5cac59b
- https://github.com/OpenHands/automation/commit/8bc0b16a2c80931af8e06978be548e453f7fd23b
- https://github.com/OpenHands/automation/commit/fb3f3cbe5bd2714589873a318d542fcd4d95ce24
- https://github.com/OpenHands/enterprise/commit/b7f5fc2ccda9d5c5ee7e3c32b3b75ec1ec1b16f7
- https://github.com/OpenHands/automation/releases/tag/1.14.0
- https://github.com/OpenHands/automation/releases/tag/1.17.0
- https://github.com/OpenHands/automation/releases/tag/1.19.2
