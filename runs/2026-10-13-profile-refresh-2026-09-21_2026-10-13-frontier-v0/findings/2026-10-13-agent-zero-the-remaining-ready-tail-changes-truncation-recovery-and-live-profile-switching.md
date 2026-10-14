---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-the-remaining-ready-tail-changes-truncation-recovery-and-live-profile-switching
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/compare/v2.14...091c3677a54fb892b32750d8368896f4ed5dbc77
    precision: git_compare
  - url: https://github.com/agent0ai/agent-zero/commit/2f8a06515ea30ebd8a4fc58cc39fc796a2ca937c
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/675e7d051de8c95ea2fc561e76f56794fbe5d4bc
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/7216b8641b0169e82f0bc1498e0e8ec6ffdb0848
    precision: commit
---
# 2026-10-13-agent-zero-the-remaining-ready-tail-changes-truncation-recovery-and-live-profile-switching

The remaining ready tail changes truncation recovery and live profile switching. The actual end-of-window branch tail identifies output-limit truncation and prevents Context Doctor from repairing and dispatching incomplete native-call arguments on that path. A separate change removes the WebUI/API running-context guard for changing an agent profile: later model turns use the new profile, prompt cache is forfeited and subordinate profiles remain their own. It does not remove messaging /permissions' active-run refusal. These source changes are on ready, outside stable and outside main.

Channel: branch-only. Half: both. Date: 2026-10-13.

Operator consequence: Wait for a later stable tag containing the three pinned commits before relying on truncation recovery or mid-run profile switching. Re-read the relevant extension/endpoint at that tag; do not treat the mutable ready image or the old 36-commit branch account as proof of inclusion.

## Receipt
- https://github.com/agent0ai/agent-zero/compare/v2.14...091c3677a54fb892b32750d8368896f4ed5dbc77
- https://github.com/agent0ai/agent-zero/commit/2f8a06515ea30ebd8a4fc58cc39fc796a2ca937c
- https://github.com/agent0ai/agent-zero/commit/675e7d051de8c95ea2fc561e76f56794fbe5d4bc
- https://github.com/agent0ai/agent-zero/commit/7216b8641b0169e82f0bc1498e0e8ec6ffdb0848
