---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omnigent-carry-forward-shared-editor-approval-did-not-narrow-adjacent-editor-powers-did-two-of-them
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/server/routes/sessions/routes/elicitations.py
    precision: tagged_commit_file
---
# 2026-09-21-omnigent-carry-forward-shared-editor-approval-did-not-narrow-adjacent-editor-powers-did-two-of-them

Carry-forward: shared-editor approval did not narrow; adjacent editor powers did, two of them only on main. Tool approvals remain any-editor, as in v0.10.0. Three other shared-session paths were tightened: v0.13.0 makes workspace file reads for view-only sharees an owner opt-in (`share_workspace_files`) after read-only shares served `.env` and key files verbatim (#6557). On main only at close: the environment shell proxy accepted `LEVEL_EDIT`, so an editor could run any command on the owner's machine outside every policy and approval gate (#7619, "security fix reported out of band"); and an editor could replace a session-scoped agent bundle whose code runs with the owner runner's authority (#7750).

Channel: tagged-release (#6557); main-unreleased at window close (#7619, #7750). Half: defect. Date: #6557 in v0.13.0 (2026-09-09); #7619 merged 2026-09-17; #7750 merged 2026-09-21.

Operator consequence: On every in-window tag, sharing a session as editor gives the editor a shell on the owner's host through the shell proxy, bypassing Omnigent policy entirely. Do not grant edit on a session whose runner is your workstation until you run a build containing a405cab6 and 4595e372 (v0.15.0, out of window). Read-only shares on v0.12.0 and earlier expose workspace secrets; upgrade to v0.13.0+.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/server/routes/sessions/routes/elicitations.py
