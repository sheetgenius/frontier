---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-ordinary-installs-now-keep-the-host-s-ubuntu-lts-v0-9-0-defaulted-to-upgrading-toward-25
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L6632-L6641
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/install.sh#L6325-L6343
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/ubuntu_upgrade.sh#L840-L852
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57a3ba443d90e8b482b87c1377c094ca62ef6c24
    precision: commit
  - url: https://lists.ubuntu.com/archives/ubuntu-announce/2026-July/000325.html
    precision: official_docs
---
# 2026-10-13-agent-flywheel-ordinary-installs-now-keep-the-host-s-ubuntu-lts-v0-9-0-defaulted-to-upgrading-toward-25

Ordinary installs now keep the host's Ubuntu LTS; v0.9.0 defaulted to upgrading toward 25.10, which ACFS's own code now calls end-of-life. Before v0.10.0 the installer was also a distribution upgrader. Unless the operator passed `--skip-ubuntu-upgrade`, a 22.04 or 24.04 LTS host with any pending package update was walked through reboot-driven release upgrades toward 25.10, an interim release; the code's own comment concedes LTS users "should not be forced to upgrade to a non-LTS target". v0.10.0 inverts the default. Ordinary installs keep a supported LTS, and an upgrade happens only with an explicit `--target-ubuntu` of 22.04, 24.04 or 26.04, with `--skip-ubuntu-upgrade` winning in either argument order. Non-root sudo, Docker and WSL installs no longer enter the root-only reboot phase. The release leaves the opt-in 26.04 upgrade unqualified. The same tag's upgrade library calls 25.10 end-of-life, and the maintainer dates that to 2026-07-09, so v0.9.0 (2026-09-04) was steering LTS hosts toward a release that had already lost support, independently confirmed by Canonical at https://lists.ubuntu.com/archives/ubuntu-announce/2026-July/000325.html. A post-stable fix contained in the mirror source tree records that recovery from 25.10 to 26.04 failed twice on a real 25.10 image: stock 25.10's `env` lacks `--default-signal`, and old-releases still returned 404 for that release on 2026-10-09.

Channel: tagged-release. Half: both. Date: 2026-10-03.

Operator consequence: Use v0.10.0 for new hosts: it leaves 22.04 and 24.04 alone, which is what most operators want from a tool installer. Check `/etc/os-release` on hosts built with v0.9.0 or older. If one is on 25.10, rebuild it on a 24.04 or 26.04 LTS image rather than relying on the v0.10.0 recovery path, which the maintainer's post-stable fix reports failed on a real image. If you want 26.04 in place, pass `--target-ubuntu=26.04` knowing the release does not qualify that path. This is scaffolding removed: the installer stopped acting as a distribution manager by default.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L6632-L6641
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/install.sh#L6325-L6343
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/ubuntu_upgrade.sh#L840-L852
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57a3ba443d90e8b482b87c1377c094ca62ef6c24
- https://lists.ubuntu.com/archives/ubuntu-announce/2026-July/000325.html
