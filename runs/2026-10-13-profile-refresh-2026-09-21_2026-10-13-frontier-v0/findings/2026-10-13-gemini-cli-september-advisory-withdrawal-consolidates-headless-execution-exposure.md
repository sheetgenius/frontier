---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-september-advisory-withdrawal-consolidates-headless-execution-exposure
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/advisory-database/blob/4d9c664d5781d67b4be4238094de5f05fe74a628/advisories/github-reviewed/2026/06/GHSA-jj69-4grx-fqj5/GHSA-jj69-4grx-fqj5.json
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-wpqr-6v78-jr5g
    precision: official_docs
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-12537
    precision: official_docs
---
# 2026-10-13-gemini-cli-september-advisory-withdrawal-consolidates-headless-execution-exposure

September advisory withdrawal consolidates headless execution exposure. GHSA-jj69-4grx-fqj5 was withdrawn as a duplicate of GHSA-wpqr-6v78-jr5g, not merely updated as a second active advisory. The canonical record describes older headless workflows automatically loading attacker-controlled workspace environment/configuration and YOLO ignoring fine-grained shell allowlists, enabling command execution. The duplicate/NVD description specifies malicious .gemini/.env causing host execution before sandbox isolation. Patched channels are CLI 0.39.1 stable, 0.40.0-preview.3, and run-gemini-cli Action 0.1.22; the canonical CLI ranges include versions below 0.39.1 and exactly 0.40.0-preview.2. The current window's stables are outside those ranges.

Channel: docs-only. Half: defect. Date: 2026-09-24.

Operator consequence: Deduplicate vulnerability inventories and audit pinned Action and CLI versions separately. Explain the trust/allowlist exposure rather than treating a CVE number as a diagnosis. This metadata change supplies no new fix version for the window's boundary repairs.

## Receipt
- https://github.com/github/advisory-database/blob/4d9c664d5781d67b4be4238094de5f05fe74a628/advisories/github-reviewed/2026/06/GHSA-jj69-4grx-fqj5/GHSA-jj69-4grx-fqj5.json
- https://github.com/advisories/GHSA-wpqr-6v78-jr5g
- https://nvd.nist.gov/vuln/detail/CVE-2026-12537
