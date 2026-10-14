---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-1-0-89-removes-fast-routing-saved-preferences-fall-back-to-balance
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.89
    precision: github_release
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L139
    precision: tagged_commit_file
  - url: https://github.com/github/docs/commit/9c7da1a58938cb45da17789618a85b7d9d26eb43
    precision: commit
---
# 2026-10-13-github-copilot-cli-1-0-89-removes-fast-routing-saved-preferences-fall-back-to-balance

1.0.89 removes Fast routing; saved preferences fall back to Balance. 1.0.89 removes the unsupported Fast profile from Auto routing. Previously stored, exported or resumed Fast preferences fall back to Balance rather than routing on Fast. The 2026-10-02 docs change removes gemini-3.5-flash and gemini-3.6-flash from the CLI model list. This scoped edit does not assign every provider-wide retirement to the CLI.

Channel: tagged-release (Fast fallback in 1.0.89); docs-only (CLI model-list removals). Half: both. Date: 2026-09-28 to 2026-10-02.

Operator consequence: Review saved Auto routing, resumed sessions and budget/evaluation assumptions after upgrading. Select a supported model explicitly when comparable cost or behavior matters. Do not treat docs model-list removal as a measured capability or cost regression.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.89
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L139
- https://github.com/github/docs/commit/9c7da1a58938cb45da17789618a85b7d9d26eb43
