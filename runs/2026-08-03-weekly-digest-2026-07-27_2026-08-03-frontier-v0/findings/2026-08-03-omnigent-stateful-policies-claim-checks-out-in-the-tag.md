---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-omnigent-stateful-policies-claim-checks-out-in-the-tag
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.7.0/omnigent/policies/builtins/risk_score.py
    precision: source_file_at_tag
  - url: https://x.com/omnigent_ai/status/2083261389410337267
    precision: official_account_post
---
# 2026-08-03-omnigent-stateful-policies-claim-checks-out-in-the-tag

On 2026-07-31 Omnigent's official account posted that its stateful policies
support dynamic session-context decisions at server, agent and session level,
with built-ins including a Session Risk Score. That is a vendor claim about a
governance capability, so it was adjudicated against the primary record before
being carried.

It checks out, and it is in the tag rather than on main.
`omnigent/policies/builtins/risk_score.py` is present at `?ref=v0.7.0` (21,890
bytes at the tag; 22,059 on main, so the file has moved slightly since). The
builtins directory at the tag also carries `cost.py`, `safety.py`,
`orchestration.py`, `routing.py`, `working_dir.py`, `context.py`, `prompt.py`,
`cel.py`, `github.py`, `google.py` and `_shell.py`.

Recorded because the publication's default posture toward a landing page is
scepticism, and the honest result of checking this one was that the claim was
accurate and shipped. A vendor statement that survives the check is worth the
same receipt as one that does not.

Channel: tagged-release.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.7.0/omnigent/policies/builtins/risk_score.py
- https://x.com/omnigent_ai/status/2083261389410337267
