---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-gemini-cli-case-insensitive-sensitive-path-blocklist-vscode-human-i
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/ae0a3aa7b928cc73bb09604bb9c2c020e6b647db
    precision: maintainer_commit
---
# 2026-07-01-gemini-cli-case-insensitive-sensitive-path-blocklist-vscode-human-i

Case-insensitive sensitive-path blocklist + .vscode human-in-the-loop landed on main (nightly-only, not yet stable) (channel: main-unreleased, 2026-06-26). Operator consequence: New agent-execution trust behavior: case-insensitive blocking of sensitive dirs (.git/.env/node_modules incl. .GIT/.Git), Windows trailing-char and NTFS ADS (::$DATA) bypass prevention, ReDoS-safe non-regex trimming, and a new human-in-the-loop confirmation prompt for .vscode modifications (deny outside workspace). NOT in v0.49.0 or v0.50.0-preview.1 — only in v0.51.0 nightlies. Operators should WATCH for it to reach a stable/preview tag; do not assume the hardened blocklist or the .vscode approval gate is present in current stable. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/ae0a3aa7b928cc73bb09604bb9c2c020e6b647db
