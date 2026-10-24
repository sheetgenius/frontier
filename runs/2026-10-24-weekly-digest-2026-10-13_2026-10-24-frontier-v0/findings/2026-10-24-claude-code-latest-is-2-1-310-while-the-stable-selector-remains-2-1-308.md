---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-latest-is-2-1-310-while-the-stable-selector-remains-2-1-308
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.310
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.308
    precision: github_release
  - url: https://registry.npmjs.org/@anthropic-ai%2fclaude-code
    precision: official_docs
  - url: https://registry.npmjs.org/@anthropic-ai%2fclaude-code/2.1.310
    precision: official_docs
  - url: https://downloads.claude.ai/claude-code-releases/latest
    precision: official_docs
  - url: https://downloads.claude.ai/claude-code-releases/stable
    precision: official_docs
  - url: https://github.com/Homebrew/homebrew-cask/blob/9ec411cdc7fb37ffd19f74613fe46b8859117ad0/Casks/c/claude-code.rb
    precision: tagged_commit_file
  - url: https://github.com/Homebrew/homebrew-cask/blob/12865dc5fe70b59d5d5f33e23f7c9fe1507c8abf/Casks/c/claude-code@latest.rb
    precision: tagged_commit_file
---
# 2026-10-24-claude-code-latest-is-2-1-310-while-the-stable-selector-remains-2-1-308

Latest is 2.1.310 while the stable selector remains 2.1.308. At 2026-10-24T10:18:01.961288Z npm dist-tags were latest=2.1.310, next=2.1.310 and stable=2.1.308. Native latest read at 10:18:01.637374Z was 310; native stable at 10:18:01.743196Z was 308. These match the initial and crosscheck observations. The pinned Homebrew ordinary/latest casks in the install table carry 308/310. MCP Tasks remains feature-level public beta, requiring 304+ and eligibility rather than a preview-only binary.

Channel: tagged-release. Half: both. Date: 2026-10-24.

Operator consequence: For the complete window repair set, test and pin npm install -g @anthropic-ai/claude-code@2.1.310. The stable selector is not that release. A version pin still does not establish hosted rollout, beta eligibility or runtime enforcement; main's post-310 guard changes are documentation and comments only.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.310
- https://github.com/anthropics/claude-code/releases/tag/v2.1.308
- https://registry.npmjs.org/@anthropic-ai%2fclaude-code
- https://registry.npmjs.org/@anthropic-ai%2fclaude-code/2.1.310
- https://downloads.claude.ai/claude-code-releases/latest
- https://downloads.claude.ai/claude-code-releases/stable
- https://github.com/Homebrew/homebrew-cask/blob/9ec411cdc7fb37ffd19f74613fe46b8859117ad0/Casks/c/claude-code.rb
- https://github.com/Homebrew/homebrew-cask/blob/12865dc5fe70b59d5d5f33e23f7c9fe1507c8abf/Casks/c/claude-code@latest.rb
