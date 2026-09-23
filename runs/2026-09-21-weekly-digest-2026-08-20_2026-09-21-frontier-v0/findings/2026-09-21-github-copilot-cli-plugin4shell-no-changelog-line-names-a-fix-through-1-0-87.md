---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-plugin4shell-no-changelog-line-names-a-fix-through-1-0-87
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: medium
evidence:
  - url: https://www.air.security/blog-posts/plugin4shell
    precision: third_party_research
  - url: https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L567
    precision: tagged_commit_file
---
# 2026-09-21-github-copilot-cli-plugin4shell-no-changelog-line-names-a-fix-through-1-0-87

AIR Security's Plugin4Shell write-up (2026-09-17) says GitHub Copilot's plugin install checks out a pinned commit SHA without verifying the result, so a repository with a branch named after that SHA serves different code, and that GitHub had shipped no fix. The Copilot CLI changelog at SHA c13b3dcae4f1, through 1.0.87 of 2026-09-21, adds a sha field for pinning plugin sources (line 567) and names no change to how a pinned checkout is verified. Claude Code shipped its fix without a changelog line, so the absence of an entry is not proof either way.

Channel: tagged-release (1.0.87, 2026-09-21, no fix named). Half: defect.

Operator consequence: Until GitHub states a fix, treat a pinned sha in a Copilot plugin source as a request, not a verification. Source plugins from hosts that reject 40-hex branch names (AIR says GitHub does) or from repositories you control, and re-check the installed tree's HEAD after install.

## Receipt
- https://www.air.security/blog-posts/plugin4shell
- https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L567
