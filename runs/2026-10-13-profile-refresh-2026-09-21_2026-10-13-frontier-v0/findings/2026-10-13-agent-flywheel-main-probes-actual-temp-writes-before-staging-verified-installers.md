---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-main-probes-actual-temp-writes-before-staging-verified-installers
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/7162c7bffdeccdaff7ca7e76a3bf03546fa6a974
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/3fb4abbae3da8f6c169132d1084b1db0848dba45
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/a39b2a1bf324ef8d31fea2c76ca62aed4a48f806
    precision: commit
---
# 2026-10-13-agent-flywheel-main-probes-actual-temp-writes-before-staging-verified-installers

Main probes actual temp writes before staging verified installers. Per-user temporary-file quota exhaustion can permit mktemp but refuse the later data write. The maintainer reports dozens of failed tools after verification succeeded, then more failures after only the outer TMPDIR fallback was changed. These patches probe actual writes and select fallbacks for the run directory and both verified-installer staging paths. The code change does not relax checksum trust. Failures and acceptance on the maintainer hosts are attributed.

Channel: main-unreleased. Half: defect. Date: 2026-10-13.

Operator consequence: When a stable update reports Verified then a write/quota failure, inspect staging storage separately from checksum approval. Changing TMPDIR alone did not address both hard-coded staging paths; do not bypass checksum enforcement to solve a storage failure.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/7162c7bffdeccdaff7ca7e76a3bf03546fa6a974
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/3fb4abbae3da8f6c169132d1084b1db0848dba45
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/a39b2a1bf324ef8d31fea2c76ca62aed4a48f806
