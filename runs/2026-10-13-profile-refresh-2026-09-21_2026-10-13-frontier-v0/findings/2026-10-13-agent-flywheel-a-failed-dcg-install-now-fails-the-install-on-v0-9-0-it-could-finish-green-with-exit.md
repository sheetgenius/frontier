---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-a-failed-dcg-install-now-fails-the-install-on-v0-9-0-it-could-finish-green-with-exit
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/24b5c42303fe98afa2c2cb759cfe97c485616961
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L5180-L5201
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L10988-L10991
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-a-failed-dcg-install-now-fails-the-install-on-v0-9-0-it-could-finish-green-with-exit

A failed DCG install now fails the install; on v0.9.0 it could finish green with exit 0. The commit records the old failure mode. Nine tools the manifest marks required (br, bv, cass, cm, caam, dcg, ru, ubs, ms) could fail in the legacy stack phase, which is what a plain `curl | bash` runs, and still be listed under an Optional heading below a green Installation Complete! banner with exit 0. v0.10.0 counts them as failures and exits non-zero, which is why the v0.10.0 factory run reported exit 1 when the dcg checksum was refused (#427). The guard's binary is now required. Registering its Claude Code hook in the finalize step is still logged as optional, and the Antigravity hook still allows commands when dcg cannot run.

Channel: tagged-release. Half: defect. Date: 2026-10-03.

Operator consequence: On hosts built with v0.9.0, confirm that `dcg` is installed and its hook registered: a green install was not evidence of either. On v0.10.0, treat a non-zero installer exit as real, read the failure list, and still check the hook-registration line in the log. The install-time verdict got honest; the runtime posture, allow when the guard is missing, did not change.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/24b5c42303fe98afa2c2cb759cfe97c485616961
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L5180-L5201
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L10988-L10991
