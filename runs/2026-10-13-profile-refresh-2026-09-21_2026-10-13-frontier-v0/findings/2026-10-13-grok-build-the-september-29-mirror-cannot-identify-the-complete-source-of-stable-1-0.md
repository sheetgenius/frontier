---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-the-september-29-mirror-cannot-identify-the-complete-source-of-stable-1-0
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/xai-org/grok-build/commit/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8
    precision: commit
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/SOURCE_REV
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/compare/4247f661689354b831191f11eeeac8424993fe3d...2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8
    precision: git_compare
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-permission-rules/src/policy/path_match.rs#L8-L73
    precision: tagged_commit_file
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.46.external.md?generation=1790815986081588
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/LICENSE
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/README.md#L31-L35
    precision: tagged_commit_file
  - url: https://www.manifold.security/blog/ai-coding-agents-git-hijack
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-fast-worktree/src/git/safety.rs#L310-L324
    precision: tagged_commit_file
---
# 2026-10-13-grok-build-the-september-29-mirror-cannot-identify-the-complete-source-of-stable-1-0

The September 29 mirror cannot identify the complete source of stable 1.0.52. The prior instruction to join grok --version to a matching public crate version cannot identify stable 1.0.52. The public Apache-2.0 Rust repository is a periodic private-monorepo mirror, with zero GitHub tags and releases. A September 29 snapshot labeled 1.0.45 contains a change later documented in 1.0.46. Its label does not certify the contents of any binary. The GitSpawn report tested Grok 1.0.13 on 2026-09-01 using a repository directory delivered with malicious .git/config. Ordinary cloning does not copy that local config. It reports background Git running attacker commands with user privileges; it does not establish 1.0.52 status. No named fix was found through 1.0.56, and limited public probe hardening does not prove current safety or exposure.

Channel: tagged-release artifacts compared with an older public mirror; no release-tag ancestry. Half: defect. Date: 2026-09-29..2026-10-13.

Operator consequence: Use the September 29 mirror for claims about that snapshot. Read generation-pinned notes and embedded guides for shipped-version claims, while distinguishing documentation from tested enforcement. A new complete sync with an explicit binary/source correspondence would settle the gap; another crate version alone would not.

## Receipt
- https://github.com/xai-org/grok-build/commit/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/SOURCE_REV
- https://github.com/xai-org/grok-build/compare/4247f661689354b831191f11eeeac8424993fe3d...2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-permission-rules/src/policy/path_match.rs#L8-L73
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.46.external.md?generation=1790815986081588
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/LICENSE
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/README.md#L31-L35
- https://www.manifold.security/blog/ai-coding-agents-git-hijack
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-fast-worktree/src/git/safety.rs#L310-L324
