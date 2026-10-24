---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-docker-cleanup-strips-sandbox-privilege-bits-including-persistent-container-leftovers
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/b0be65c30a11691901c99031aa0e8f8959908c2a
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/environments/docker_ownership.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/environments/docker.py
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-docker-cleanup-strips-sandbox-privilege-bits-including-persistent-container-leftovers

Docker cleanup strips sandbox privilege bits, including persistent-container leftovers. For non-root Hermes on Linux using a rootful, non-remapped Docker container, ownership handback now also strips setuid/setgid from regular sandbox files. Where the container has `SETFCAP`, `ALL`, or privileged capability, re-owning regular files also clears file capabilities. The follow-up covers persistent containers on detach, first command after reattachment, and orphan reaping, rather than just container deletion. It also handles a setgid file already owned by the host user. The walk uses host-derived sandbox directories, avoids following symlinks, and prunes nested binds. Cleanup has a bounded timeout and warns on failure; it is not a boundary against a still-running malicious root process modifying a mounted directory.

Channel: tagged-release. Half: defect. Date: 2026-10-21.

Operator consequence: Upgrade affected Docker deployments to v0.22.3 or later, inspect cleanup warnings, and inspect the actual persisted container and output directory before executing files on the host. Rootless/user-namespace Docker, Hermes running as root, and macOS/Windows have different applicability. This closes an output-handback gap; terminal isolation and host-side startup Git/LSP still need their own boundaries. No issue-specific published CVE range is asserted.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/b0be65c30a11691901c99031aa0e8f8959908c2a
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/environments/docker_ownership.py
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/environments/docker.py
