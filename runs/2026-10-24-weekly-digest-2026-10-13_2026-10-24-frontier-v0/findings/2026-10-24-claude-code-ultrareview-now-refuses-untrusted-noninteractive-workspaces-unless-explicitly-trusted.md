---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-ultrareview-now-refuses-untrusted-noninteractive-workspaces-unless-explicitly-trusted
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L86
    precision: tagged_commit_file
  - url: https://www.manifold.security/blog/ai-coding-agents-git-hijack
    precision: official_docs
---
# 2026-10-24-claude-code-ultrareview-now-refuses-untrusted-noninteractive-workspaces-unless-explicitly-trusted

Ultrareview now refuses untrusted noninteractive workspaces unless explicitly trusted. `claude ultrareview` now asks for workspace trust on a terminal and refuses where no terminal can ask. Automation must supply the boolean `--trust-workspace` flag or the documented environment bypass. Put a PR number or base branch before that flag. This is directly relevant to the carried report that repository git configuration could execute before trust. The release note does not name that report, its undisclosed git setting, or a corresponding advisory.

Channel: tagged-release. Half: both. Date: 2026-10-22.

Operator consequence: Pin 309+ for this new gate and make the trust decision before granting it in CI. Do not add the bypass globally merely to restore unattended behavior. The prior statement that no release names an ultrareview trust change is superseded; the stronger claim that the researcher's exact exploit is fixed remains unverified. Stable 308 lacks even this newly documented gate.

## Receipt
- https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L86
- https://www.manifold.security/blog/ai-coding-agents-git-hijack
