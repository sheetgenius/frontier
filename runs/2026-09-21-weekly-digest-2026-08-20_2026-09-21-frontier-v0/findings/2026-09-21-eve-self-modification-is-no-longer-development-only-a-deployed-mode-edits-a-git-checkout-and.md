---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-eve-self-modification-is-no-longer-development-only-a-deployed-mode-edits-a-git-checkout-and
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/self-modification/mode.ts
    precision: tagged_commit_file
---
# 2026-09-21-eve-self-modification-is-no-longer-development-only-a-deployed-mode-edits-a-git-checkout-and

Self-modification is no longer development-only: a deployed mode edits a git checkout and opens draft PRs. The parent recorded a dev-only subagent that wrote authored
source under `EVE_DEV=1` with no approval. It now has a production form: a
deployed agent can, for principals your `authorize` callback admits, edit a
disposable checkout of its own repo and publish a draft pull request. It
cannot merge or deploy. The local form at 0.63.0 still requires `EVE_DEV=1`
and, per `runtime/local-dev-capability.ts` lines 30-38 and 80-90, a
host-signed loopback peer address.

Channel: tagged-release. Half: both. Date: 2026-09-09 (0.52.4), consolidated through 2026-09-18 (0.62.0).

Operator consequence: Answer to the carry-forward check: no, not
development-only any more, but deployed mode is off unless you configure
`deployed` with an `authorize` callback and GitHub credentials. Re-audit: if
you enabled it, your `authorize` function is the only thing between a chat
user and a draft PR against your agent's repo, and the GitHub credential scope
is the blast radius. Keep branch protection on the target branch; the draft PR
is the human gate. See "Observed after window close" for 0.64.0, which drops
the loopback restriction on local mode.

## Receipt
- https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/self-modification/mode.ts
