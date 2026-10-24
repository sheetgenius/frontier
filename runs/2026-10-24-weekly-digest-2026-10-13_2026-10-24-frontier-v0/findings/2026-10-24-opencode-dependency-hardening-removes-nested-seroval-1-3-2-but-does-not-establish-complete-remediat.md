---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-dependency-hardening-removes-nested-seroval-1-3-2-but-does-not-establish-complete-remediat
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/d93568f3344e1a93297d56bc1dc71892104856d0
    precision: commit
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/bun.lock
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-mv8w-475r-vwqw
    precision: official_docs
  - url: https://github.com/advisories/GHSA-jp82-f5mq-hwhp
    precision: official_docs
---
# 2026-10-24-opencode-dependency-hardening-removes-nested-seroval-1-3-2-but-does-not-establish-complete-remediat

Dependency hardening removes nested Seroval 1.3.2, but does not establish complete remediation. [Commit d93568f3344e1a93297d56bc1dc71892104856d0](https://github.com/anomalyco/opencode/commit/d93568f3344e1a93297d56bc1dc71892104856d0) removes `@solidjs/start/seroval` 1.3.2 and its nested plugin resolution from bun.lock; first v2.1.4, absent from v2.1.3. The [newest stable lockfile](https://github.com/anomalyco/opencode/blob/v2.1.4/bun.lock) still resolves root Seroval 1.5.6. Do not summarize this as all Seroval issues fixed. The older [CVE-2026-59940 / GHSA-mv8w-475r-vwqw](https://github.com/advisories/GHSA-mv8w-475r-vwqw) concerns malicious serialized JSON invoking unintended functions when an application exposes suitable plugin callables; patched Seroval is 1.5.3. Separately, [CVE-2026-104845 / GHSA-jp82-f5mq-hwhp](https://github.com/advisories/GHSA-jp82-f5mq-hwhp) covers small JSON inputs causing CPU/memory exhaustion through unchecked typed-array allocation, lists <=1.6.2 as affected and 1.6.3 as patched.

Channel: tagged-release. Half: defect. Date: 2026-10-23.

Operator consequence: These dependency records require a reachable deserialization-path audit; I did not establish an exploitable OpenCode CLI or hosted endpoint. Review the deployed web/server-function dependency graph separately from bundled Bun.

## Receipt
- https://github.com/anomalyco/opencode/commit/d93568f3344e1a93297d56bc1dc71892104856d0
- https://github.com/anomalyco/opencode/blob/v2.1.4/bun.lock
- https://github.com/advisories/GHSA-mv8w-475r-vwqw
- https://github.com/advisories/GHSA-jp82-f5mq-hwhp
