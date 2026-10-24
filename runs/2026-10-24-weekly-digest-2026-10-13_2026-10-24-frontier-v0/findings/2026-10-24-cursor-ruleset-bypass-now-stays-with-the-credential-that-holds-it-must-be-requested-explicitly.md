---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-ruleset-bypass-now-stays-with-the-credential-that-holds-it-must-be-requested-explicitly
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-12-2026
    precision: official_docs
  - url: https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-16-2026
    precision: official_docs
  - url: https://web.archive.org/web/20261024093142/https://cursor.com/docs/release-notes/agents-window#oct-20-2026
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
    precision: official_docs
---
# 2026-10-24-cursor-ruleset-bypass-now-stays-with-the-credential-that-holds-it-must-be-requested-explicitly

Ruleset bypass now stays with the credential that holds it, must be requested explicitly from the CLI, and leaves a record. Three moves point the same way. Bypass authority is bound to the credential that was granted it: an app's own installation token now carries the app's bypass for direct pushes, while a person's token used by an app no longer carries the person's. Bypass use becomes a deliberate act in the CLI (`origin pr merge --bypass-rules`, required where the repository demands it) instead of a side effect of who runs the merge. And every bypass merge is now itemized in the pull request activity and audit events, also visible in the Agents Window. The 16 October entry adds a defect disclosure in the restrictive direction: rulesets configured with role-based bypass actors never let anyone bypass, because Origin did not resolve role membership during evaluation.

Channel: docs-only. Half: both. Date: week of 2026-10-12 (web notes); 2026-10-16 (API); 2026-10-20 (Agents Window 3.26 notes); 2026-10-23 (CLI stable artifact).

Operator consequence: Re-audit direct pushes to protected branches made by apps acting as members before the week of 12 October; read with section 26, an app holding the user-token scope could have minted a token for a member on the bypass list, though the notes say nothing about whether that happened or how long the behavior lasted. Replace any `originRole` bypass entries with user, group or app entries and test the emergency path you thought you had. In automation, pass `--bypass-rules` only where a person decided to bypass, and review the "skipping N rules" entries. Making bypass explicit keeps a serial human decision at exactly the point where it is worth paying for.

## Receipt
- https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-12-2026
- https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-16-2026
- https://web.archive.org/web/20261024093142/https://cursor.com/docs/release-notes/agents-window#oct-20-2026
- https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
- https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
