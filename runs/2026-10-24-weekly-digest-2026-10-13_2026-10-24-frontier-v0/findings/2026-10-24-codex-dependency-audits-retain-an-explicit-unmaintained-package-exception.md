---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-dependency-audits-retain-an-explicit-unmaintained-package-exception
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/4dbd9d30ea0466ec5bb1524f24c56cfc8ee4c5b1
    precision: commit
  - url: https://rustsec.org/advisories/RUSTSEC-2026-0374.html
    precision: official_docs
---
# 2026-10-24-codex-dependency-audits-retain-an-explicit-unmaintained-package-exception

Dependency audits retain an explicit unmaintained-package exception. Stable [suppresses RUSTSEC-2026-0374 in cargo audit and cargo deny](https://github.com/openai/codex/commit/4dbd9d30ea0466ec5bb1524f24c56cfc8ee4c5b1), retaining basic-toml 0.1.10 through age localization dependencies in codex-secrets. [RustSec classifies the 20 October notice as informational unmaintained-package status with no patched release](https://rustsec.org/advisories/RUSTSEC-2026-0374.html). It is an exception, not a repaired exploitable vulnerability.

Channel: tagged-release. Half: defect. Date: 2026-10-23.

Operator consequence: Record the exception and remove it when age localization migrates away from basic-toml. A clean dependency-audit result must be read with its ignore list.

## Receipt
- https://github.com/openai/codex/commit/4dbd9d30ea0466ec5bb1524f24c56cfc8ee4c5b1
- https://rustsec.org/advisories/RUSTSEC-2026-0374.html
