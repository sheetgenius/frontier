---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-content-exclusion-now-documented-as-applying-to-the-cli-docs-only
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: medium
evidence:
  - url: https://github.com/github/docs/commit/104e649542fd
    precision: commit
---
# 2026-09-21-github-copilot-cli-content-exclusion-now-documented-as-applying-to-the-cli-docs-only

Content exclusion now documented as applying to the CLI (docs-only). Docs now state that for Copilot Business and Enterprise users the CLI respects enterprise, org, and repo content exclusion; excluded files are not used as context.

Channel: docs-only. Half: capability. Date: 2026-09-02.

Operator consequence: Observe. If content exclusion is part of your data-handling story, this is the first dated doc that puts the CLI inside it. A local probe (excluded file, ask the agent to read it) is the only way to know whether it holds for shell reads, which the docs do not address.

## Receipt
- https://github.com/github/docs/commit/104e649542fd
