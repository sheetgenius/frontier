---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-gemini-cli-at-reference-file-defensive-path-resolution-null-byte-sa
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: medium
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/b5fc06e
    precision: maintainer_commit
---
# 2026-07-01-gemini-cli-at-reference-file-defensive-path-resolution-null-byte-sa

At-reference (@file) defensive path resolution + null-byte sanitization landed on main (not yet stable) (channel: main-unreleased, 2026-06-30). Operator consequence: Centralized defensive path resolution for read_file/replace/write_file when the model emits '@'-prefixed paths (e.g. @policies/foo.txt): strips leading @ when the literal path is absent, sanitizes null bytes to avoid crashes, resolves symlinks to canonical paths (fixes macOS /var vs /private/var), and enforces plan-mode boundary restrictions against traversal. Fresh on main 2026-06-30; not in any stable/preview tag. Operators relying on @-reference file handling or plan-mode boundaries should WATCH for the next stable. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/b5fc06e
