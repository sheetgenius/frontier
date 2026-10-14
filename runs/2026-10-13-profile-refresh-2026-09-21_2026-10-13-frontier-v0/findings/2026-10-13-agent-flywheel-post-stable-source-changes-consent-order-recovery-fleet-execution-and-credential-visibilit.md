---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-post-stable-source-changes-consent-order-recovery-fleet-execution-and-credential-visibilit
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: medium
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/compare/v0.10.0...f405ac94b84104ebcbf721fb0e4f6345a0ee154d
    precision: git_compare
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/e2d7f9358050a0f86d31e05badeb818e258b2d5f
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L12143-L12189
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57a3ba443d90e8b482b87c1377c094ca62ef6c24
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/99c91d7195fc8dfeae3f853d5dcb81dc6588e460
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/docs/operations/swarm-fleet-launch.md
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/1964648021e21cb9babbb1fe89206b9f096f2322
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/7b6dd2c00b9d3c027dfc79493279fd05091dbc53
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/7411fd3f3a89e47d8df4167ebc0912685bf544bf
    precision: commit
---
# 2026-10-13-agent-flywheel-post-stable-source-changes-consent-order-recovery-fleet-execution-and-credential-visibilit

Post-stable source changes consent order, recovery, fleet execution and credential visibility. Stable can change base packages before an interactive Proceed confirmation; e2d7f935 moves ensure_base_deps after that confirmation, with --yes unaffected. This is a narrow ordering fix, not a guarantee that no earlier bootstrap or explicit upgrade mutates the host. The recovery patch addresses the maintainer-reported Ubuntu 25.10 failures and removes Meta Skill ARM64 refusal (section 24). Multi-host fleet code adds dispatch, Git-bundle collection, candidate testing and guarded integration/publication over explicit SSH hosts. Later untagged work adds agent-readiness, credential-source status, OAuth lifecycle and vault references. The concrete permission, packet-redaction and website dependency mechanisms are recorded separately in sections 16 through 18.

Channel: mixed. Half: both. Date: 2026-10-04..2026-10-13.

Operator consequence: None is a stable ACFS upgrade; source containment in the binary mirror does not qualify a preview installer. Keep sensitive use on a reviewed stable tree and watch the next real tag for interactive consent order and exact fleet authority gates. Recovery, live fleet throughput and hosted readiness were not reproduced. Read the full bounded compare because the Unreleased changelog is empty.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/compare/v0.10.0...f405ac94b84104ebcbf721fb0e4f6345a0ee154d
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/e2d7f9358050a0f86d31e05badeb818e258b2d5f
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L12143-L12189
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57a3ba443d90e8b482b87c1377c094ca62ef6c24
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/99c91d7195fc8dfeae3f853d5dcb81dc6588e460
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/docs/operations/swarm-fleet-launch.md
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/1964648021e21cb9babbb1fe89206b9f096f2322
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/7b6dd2c00b9d3c027dfc79493279fd05091dbc53
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/7411fd3f3a89e47d8df4167ebc0912685bf544bf
