---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-origin-lets-an-agent-s-ownership-decision-or-an-installed-app-s-approval-satisfy-code-owne
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: medium
evidence:
  - url: https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-12-2026
    precision: official_docs
  - url: https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md
    precision: official_docs
  - url: https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
    precision: official_docs
---
# 2026-10-24-cursor-origin-lets-an-agent-s-ownership-decision-or-an-installed-app-s-approval-satisfy-code-owne

Origin lets an agent's ownership decision, or an installed app's approval, satisfy code-owner review. The ruleset editor's "Require review from code owners" toggle became a three-way Code owner review setting. Classic keeps the familiar rule: an owner must approve the files they own. Agentic still enforces CODEOWNERS, but when Origin's own agent reviews ownership on a pull request, its decision replaces the approval count. In the same week, an `ORIGIN_CODEOWNERS` entry can name an app as `app_<id>`, and that app's approval satisfies the paths it owns, provided it is installed on the repository's namespace; an uninstalled app shows "Not installed" and cannot approve. The notes do not say which changes the agent may clear without a person, which model decides, or where the decision is recorded. The shipped client protocol carries a risk rating, a per-rule human-review flag and bot owners, which points to a tiered design whose thresholds Cursor has not published.

Channel: docs-only (hosted ruleset option); supporting protocol fields first appear in Origin CLI stable artifact 2026.10.23-18-47-36-f52be1e. Half: capability. Date: week of 2026-10-12 (vendor label spanning 12 to 18 October; no capture of the notes page before 2026-10-24); read 2026-10-24.

Operator consequence: This is the window's clearest case of a human gate moving to a machine, and it is opt-in per ruleset. Before switching a protected branch to Agentic, list the paths where a named human owner is the accountability boundary and keep Classic there until Cursor documents when the agent's decision stands in for a person and how it is logged. Audit `ORIGIN_CODEOWNERS` for `app_` entries: an app's review scope now carries owner authority for its paths. If you trial Agentic, measure owner approvals avoided against agent decisions a human later overturned; that ratio, not the count of automated reviews, says whether scarce reviewer attention was saved.

## Receipt
- https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-12-2026
- https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md
- https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md
- https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
- https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
