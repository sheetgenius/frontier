---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-the-system-theme-became-default-and-custom-themes-now-validate-at-startup
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/bf8e4b953183009507e68697750179951095a60c
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/96abe9a5ad45005cae34ed1c52d42f71fc88bedc
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/themes.md
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-the-system-theme-became-default-and-custom-themes-now-validate-at-startup

The system theme became default and custom themes now validate at startup. The default system theme derives colors from the terminal palette from 0.99.0. In 1.2.0, startup theme loading applies the same validation as reload. Custom themes need the new pi.dev theme schema reference, reusable colors under vars, and removal of unsupported metadata; previously accepted files can fail.

Channel: tagged-release. Half: both. Date: 2026-10-12.

Operator consequence: Check custom themes before upgrading to 1.2.0. Update their schema reference and move reusable colors into vars; selecting the regular TUI alone does not restore the previous theme default.

## Receipt
- https://github.com/earendil-works/pi/commit/bf8e4b953183009507e68697750179951095a60c
- https://github.com/earendil-works/pi/commit/96abe9a5ad45005cae34ed1c52d42f71fc88bedc
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/themes.md
