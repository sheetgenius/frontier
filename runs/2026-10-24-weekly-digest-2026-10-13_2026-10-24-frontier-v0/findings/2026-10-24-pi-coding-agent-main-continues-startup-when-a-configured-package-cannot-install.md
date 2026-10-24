---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-main-continues-startup-when-a-configured-package-cannot-install
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/6dfb5467851adb603d525f9c27e28f341e3f08b9
    precision: commit
---
# 2026-10-24-pi-coding-agent-main-continues-startup-when-a-configured-package-cannot-install

Main continues startup when a configured package cannot install. Package installation failures during resource resolution become warnings: startup skips the failed package's resources and keeps running. The next startup or reload retries. Explicit install and extension-update commands still fail nonzero. This behavior is not in npm latest 1.4.0.

Channel: main-unreleased. Half: both. Date: 2026-10-23.

Operator consequence: Source-based hosts can keep working through a package outage, but must confirm required policy extensions loaded before admitting work. A running process no longer proves that every configured package is present. That policy consequence is inferred from skipped resources, not a demonstrated bypass of a named extension.

## Receipt
- https://github.com/earendil-works/pi/commit/6dfb5467851adb603d525f9c27e28f341e3f08b9
