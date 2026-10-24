---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-origin-cli-stable-2026-10-23-adds-gates-authorship-takeover-pr-import-identity-mapping-and
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.24-05-09-43-624e85d/darwin-arm64/co.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.24-09-27-15-1b4d3b5/darwin-arm64/co.tar.gz
    precision: official_docs
  - url: https://web.archive.org/web/20261024092649/https://cursor.com/docs/release-notes/origin-cli
    precision: official_docs
  - url: https://web.archive.org/web/20261024093602/https://cursor.com/docs/origin/cli/reference/commands
    precision: official_docs
---
# 2026-10-24-cursor-origin-cli-stable-2026-10-23-adds-gates-authorship-takeover-pr-import-identity-mapping-and

Origin CLI stable 2026.10.23 adds gates, authorship takeover, PR-import identity mapping and installation-token use that its release notes do not describe. The sampled newer builds contain commands missing from notes that still end on 6 October. The CLI exposes a review-gate system in which reviewing lanes report verdicts against a rubric pinned by blob OID, per-repository personal gates in preview or enforce mode with per-pull-request exemptions, and authorship takeover with built-in loss of the taker's own approvals. GitHub pull-request history import gains explicit identity mapping and a dry run. CI jobs can drive the CLI with a short-lived app installation token instead of a person's login. Gate and stack commands only appear where Cursor enables them server-side.

Channel: tagged-release (Origin CLI stable artifact 2026.10.23-18-47-36-f52be1e; latest 2026.10.24-09-27-15-1b4d3b5 at crosscheck; earlier latest 624e85d preserved as an earlier sample). Half: capability. Date: 2026-10-23 (stable artifact); 2026-10-24 (latest artifact).

Operator consequence: Learn what your build does from `origin --help` and `origin <group> --help`, not from the notes or the command reference. For GitHub history imports, supply a `--user-map` and run `--validate` first so imported reviews and authorship land on the right principals rather than a synthetic actor. Treat `commandeer` as an accountability event worth alerting on. Give unattended jobs an installation token rather than a stored personal login; it expires within 15 minutes and is bounded by the installation's grant.

## Receipt
- https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
- https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
- https://downloads.cursor.com/co/2026.10.24-05-09-43-624e85d/darwin-arm64/co.tar.gz
- https://downloads.cursor.com/co/2026.10.24-09-27-15-1b4d3b5/darwin-arm64/co.tar.gz
- https://web.archive.org/web/20261024092649/https://cursor.com/docs/release-notes/origin-cli
- https://web.archive.org/web/20261024093602/https://cursor.com/docs/origin/cli/reference/commands
