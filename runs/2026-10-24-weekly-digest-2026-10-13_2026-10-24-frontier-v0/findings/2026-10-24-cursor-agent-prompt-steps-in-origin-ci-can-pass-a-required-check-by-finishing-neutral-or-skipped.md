---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-agent-prompt-steps-in-origin-ci-can-pass-a-required-check-by-finishing-neutral-or-skipped
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
  - url: https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md
    precision: official_docs
  - url: https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-5-2026
    precision: official_docs
---
# 2026-10-24-cursor-agent-prompt-steps-in-origin-ci-can-pass-a-required-check-by-finishing-neutral-or-skipped

Agent prompt steps in Origin CI can pass a required check by finishing neutral or skipped. A general agent became a first-class CI step on Origin: write a prompt where a script would go and the agent does the work in the job's checkout. The agent also chooses the check's conclusion, and the documented required-check rule counts neutral and skipped as passing. An agent that decides a step does not apply therefore satisfies a required check exactly as a green test would. The step runs under a team service account, not the person who pushed, and the configuration language behind it is documented only through release notes.

Channel: docs-only (hosted CI; no public origin.ci.ts reference). Half: both. Date: week of 2026-10-12.

Operator consequence: Do not make a prompt step's check required unless you accept an agent's neutral or skipped verdict as a pass; keep a deterministic check beside it for anything that gates a merge. Review what the Origin CI service account can write before giving it a prompt that edits files. Pin behavior with a test on a scratch repository, since neither the config reference nor the billing for prompt steps is published. This is a durable primitive, not a workaround: it lets a team delete glue scripts that called an agent from CI, and it moves human attention from writing CI steps to auditing what the agent declared not applicable.

## Receipt
- https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-12-2026
- https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md
- https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-5-2026
