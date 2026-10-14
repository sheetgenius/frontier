---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-v0-10-0-redacts-tokens-in-self-update-origin-warnings-including-discovered-checkouts
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/63f24b80d2aca35ea34513ec181ab0e29029b96b
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L938-L973
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L5512-L5619
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L302-L335
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-v0-10-0-redacts-tokens-in-self-update-origin-warnings-including-discovered-checkouts

v0.10.0 redacts tokens in self-update origin warnings, including discovered checkouts. Git remote get-url applies insteadOf rewrites, so a credential-bearing GitHub URL could reach the old unexpected-origin warning. The fix commit reports tokens printed into update logs and world-readable /data/tmp logs, with two hosts stranded on old code after origin rejection. Stable strips the userinfo and accepts the intended GitHub origin. The affected path runs where self-update discovers or bootstraps a Git checkout, including /data/projects/agentic_coding_flywheel_setup, /dp/agentic_coding_flywheel_setup or $HOME/agentic_coding_flywheel_setup outside a deployed ~/.acfs tarball. A person reading an affected log could exercise the token's granted GitHub access; no live exposure was reproduced.

Channel: tagged-release. Half: defect. Date: 2026-10-03.

Operator consequence: If an older deployed updater used credentialed insteadOf rewrites, inspect retained update and /data/tmp logs and rotate any exposed token. Absence of ~/.acfs/.git is not an exemption. Deliver the corrected updater runtime deliberately; the nightly disables self-update by default, with ACFS_NIGHTLY_SELF_UPDATE=true as an opt-in. Do not describe the empty advisory searches as proof that no advisory or vulnerability exists.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/63f24b80d2aca35ea34513ec181ab0e29029b96b
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L938-L973
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L5512-L5619
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L302-L335
