---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-gemini-cli-skill-install-path-traversal-fix-reaches-stable-in-v0-49
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0
    precision: github_release
---
# 2026-07-01-gemini-cli-skill-install-path-traversal-fix-reaches-stable-in-v0-49

Skill-install path-traversal fix reaches stable in v0.49.0 (channel: tagged-release, 2026-06-25). Operator consequence: The path-traversal vulnerability in skill install/link/uninstall (PR #27767, merge bca5667) that was pending last window is now shipped in a stable release. Malicious SKILL.md frontmatter names (e.g. '..'), traversal sequences during remote skill clone/extract, and fragile prefix-match uninstall could previously escape the target directory; the fix replaces startsWith checks with path.relative validation. Operators running skills from untrusted sources should upgrade to v0.49.0 or later. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0
