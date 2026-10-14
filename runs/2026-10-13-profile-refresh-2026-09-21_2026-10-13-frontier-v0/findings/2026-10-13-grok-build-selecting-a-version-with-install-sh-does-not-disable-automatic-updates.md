---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-selecting-a-version-with-install-sh-does-not-disable-automatic-updates
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/auto_update.rs#L560-L790
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/auto_update.rs#L2637-L2652
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/version.rs#L28
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/scripts/install.sh#L207-L345
    precision: tagged_commit_file
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
    precision: official_docs
---
# 2026-10-13-grok-build-selecting-a-version-with-install-sh-does-not-disable-automatic-updates

Selecting a version with install.sh does not disable automatic updates. Selecting a version with install.sh does not disable automatic updates. With updates enabled and a successful eligible update check, the script installation can follow its configured pointer in either direction. The prior profile treated installation-time selection as a lasting pin. These observations correct that advice; they do not establish a one-session lifetime or that every installation has updated.

Channel: tagged-release (1.0.52 documentation and messages); implementation read at the September 29 mirror. Half: defect. Date: 2026-10-13 (re-check of pre-window behavior, not a new introduction).

Operator consequence: Disable automatic updates with [cli] auto_update = false, or use the documented explicit-version updater, grok update --version <X>, and verify its saved setting. Per process, --no-auto-update or GROK_DISABLE_AUTOUPDATER=1 are documented opt-outs. Managed maximum_version and required_minimum_version bound fleet versions. Read grok --version before attributing a run to a chosen version. Script and in-app downloads still lack a published checksum check.

## Receipt
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/auto_update.rs#L560-L790
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/auto_update.rs#L2637-L2652
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/version.rs#L28
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/scripts/install.sh#L207-L345
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
