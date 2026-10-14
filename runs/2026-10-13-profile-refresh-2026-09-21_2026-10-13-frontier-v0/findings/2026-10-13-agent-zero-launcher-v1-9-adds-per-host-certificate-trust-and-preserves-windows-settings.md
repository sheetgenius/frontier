---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-launcher-v1-9-adds-per-host-certificate-trust-and-preserves-windows-settings
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/a0-launcher/releases/tag/v1.9
    precision: github_release
  - url: https://github.com/agent0ai/a0-launcher/commit/dc72cb4a86d9f4b65f7e7d354f39e403f08dba5b
    precision: commit
  - url: https://github.com/agent0ai/a0-launcher/blob/v1.9/shell/remote_certificate_trust.js
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/a0-launcher/commit/d6b465d1500626954cb3fc0109ebbe5bd9c52942
    precision: commit
  - url: https://github.com/agent0ai/a0-launcher/commit/98e390f3849b4731566908867897aa9707a551db
    precision: commit
  - url: https://github.com/advisories/GHSA-5p4m-2wfm-xmqj
    precision: official_docs
  - url: https://github.com/agent0ai/a0-connector/commit/7676c282069a291a95b310fa2554c9c936896dc8
    precision: commit
  - url: https://github.com/agent0ai/a0-connector/blob/v2.14/constraints/a0-runtime.txt
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-54p9-h82j-f925
    precision: official_docs
---
# 2026-10-13-agent-zero-launcher-v1-9-adds-per-host-certificate-trust-and-preserves-windows-settings

Launcher v1.9 adds per-host certificate trust and preserves Windows settings. Launcher v1.9 lets a saved remote host opt into accepting unknown certificate issuers while retaining host-name and validity-date checks. The trust rule is host-specific, not blanket TLS disablement. Its Windows installer preserves settings around legacy uninstallers, failed installation and interrupted recovery; WSL/Docker discovery also changes. The Launcher lock moves js-yaml 4.2.0 to 4.3.2, above GHSA-5p4m-2wfm-xmqj's affected 4.x range below 4.3.1: crafted ordered-map YAML can consume quadratic CPU and stall parsing. That advisory predates this window; the shipped update is new. CLI v2.14 pins multidict 6.9.1 and framework v2.14 adds that floor. CVE-2026-104874 affects multidict C-extension 6.7.0..6.9.0 items-view reflected unions/subtractions and can exhaust memory. No reachable attacker-controlled parser or items-view path through Agent Zero was demonstrated.

Channel: tagged-release. Half: both. Date: 2026-10-13 (stable companion releases).

Operator consequence: Review which saved hosts receive certificate trust and retain a settings backup before Windows upgrade. Use Launcher v1.9 and CLI v2.14 for these shipped changes. Check dependency resolution without claiming that dependency membership proves application-level exploitation or that these availability bugs disclose data.

## Receipt
- https://github.com/agent0ai/a0-launcher/releases/tag/v1.9
- https://github.com/agent0ai/a0-launcher/commit/dc72cb4a86d9f4b65f7e7d354f39e403f08dba5b
- https://github.com/agent0ai/a0-launcher/blob/v1.9/shell/remote_certificate_trust.js
- https://github.com/agent0ai/a0-launcher/commit/d6b465d1500626954cb3fc0109ebbe5bd9c52942
- https://github.com/agent0ai/a0-launcher/commit/98e390f3849b4731566908867897aa9707a551db
- https://github.com/advisories/GHSA-5p4m-2wfm-xmqj
- https://github.com/agent0ai/a0-connector/commit/7676c282069a291a95b310fa2554c9c936896dc8
- https://github.com/agent0ai/a0-connector/blob/v2.14/constraints/a0-runtime.txt
- https://github.com/advisories/GHSA-54p9-h82j-f925
