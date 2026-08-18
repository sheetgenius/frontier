---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-antigravity-1-1-12-lets-the-headless-agent-settle-its-own-questions-instead-of
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: medium
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.12
    precision: github_release
---
# 2026-08-17-antigravity-1-1-12-lets-the-headless-agent-settle-its-own-questions-instead-of

1.1.12 lets the headless agent settle its own questions instead of asking.

'Improved headless `-p` runs so the agent settles a choice itself where it would otherwise ask, instead of stalling on a question nobody is there to answer.' That is the whole description on the only surface that carries it. Which choices, and by what rule, are not stated; there is no code to read and no doc page covers it -- the vendor's headless doc still says only that 'a tool that requires approval it cannot obtain is soft-denied: the run continues, exits 0, and prints a notice to stderr', which describes the prior behaviour rather than this one.

Channel: tagged-release. Ancestry: Tag 1.1.12 -> f7519c9084190ed421e89dd81c63970b5177c9ef, stable tag, commit on main. Entry verbatim in the release body and in CHANGELOG.md pinned at that SHA.

Operator consequence: This is the same widening the prior window recorded, moved from interactive into automation: the scope of a decision the operator used to make has been transferred to the model, in the mode where no human is watching. Watch it and instrument it -- run headless jobs with `--output-format stream-json` and read the event stream to see which choices the agent is now making for itself, because the soft-deny notice on stderr that you may be alerting on will no longer fire for those. Do not treat 'it did not ask' as 'it did not need to'.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.12
