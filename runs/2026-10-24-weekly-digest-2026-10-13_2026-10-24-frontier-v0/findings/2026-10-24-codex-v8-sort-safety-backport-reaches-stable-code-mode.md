---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-v8-sort-safety-backport-reaches-stable-code-mode
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/6ae8b8aa7c608730d4315d59c5c081897ae02780
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/patches/v8_array_sort_elements_kind.patch
    precision: tagged_commit_file
  - url: https://cveawg.mitre.org/api/cve/CVE-2026-85046
    precision: official_docs
---
# 2026-10-24-codex-v8-sort-safety-backport-reaches-stable-code-mode

V8 sort safety backport reaches stable Code Mode. Codex upgrades V8 and [backports CVE-2026-85046 sort guards](https://github.com/openai/codex/blob/rust-v0.164.0/patches/v8_array_sort_elements_kind.patch). Comparator mutation could let optimized sort write objects into incompatible array storage. The [CNA record](https://cveawg.mitre.org/api/cve/CVE-2026-85046) describes arbitrary code execution inside Chrome's sandbox through crafted HTML, published on 3 September 2026. That Chrome impact is not evidence of a Codex sandbox escape or exploitation; the October event is the Codex backport reaching stable.

Channel: tagged-release. Half: defect. Date: 2026-10-23.

Operator consequence: Include 0.164.0 in Code Mode runtime upgrade tests. An empty repository/npm advisory feed would have missed this dependency repair. Verify the runtime version actually serving embedded scripts; no exploit was run.

## Receipt
- https://github.com/openai/codex/commit/6ae8b8aa7c608730d4315d59c5c081897ae02780
- https://github.com/openai/codex/blob/rust-v0.164.0/patches/v8_array_sort_elements_kind.patch
- https://cveawg.mitre.org/api/cve/CVE-2026-85046
