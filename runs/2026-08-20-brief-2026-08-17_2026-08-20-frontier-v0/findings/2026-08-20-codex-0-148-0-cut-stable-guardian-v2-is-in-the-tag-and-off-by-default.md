---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-codex-0-148-0-cut-stable-guardian-v2-is-in-the-tag-and-off-by-default
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.148.0
    precision: github_release
  - url: https://github.com/openai/codex/blob/rust-v0.148.0/codex-rs/features/src/lib.rs
    precision: tagged_commit_file
---
# 2026-08-20-codex-0-148-0-cut-stable-guardian-v2-is-in-the-tag-and-off-by-default

Codex 0.148.0 cut stable on 2026-08-18. Guardian V2 is in that tag as an UnderDevelopment feature with default_enabled false.

`gh api repos/openai/codex/releases/tags/rust-v0.148.0` returns prerelease=false, published_at=2026-08-18T22:26:03Z. `gh api .../compare/rust-v0.147.0...rust-v0.148.0` reports ahead_by=381. The tree at rust-v0.148.0 contains `codex-rs/ext/guardian-v2` and protocol types for Guardian risk and approval review. In `codex-rs/features/src/lib.rs` at that tag, Feature::GuardianV2 has key "guardianv2", stage Stage::UnderDevelopment, default_enabled: false. Feature::GuardianApproval is Stage::Stable, default_enabled: true. The extension returns early unless both GuardianV2 and GuardianApproval features are enabled (`codex-rs/ext/guardian-v2/src/extension.rs` at the tag). Review threshold default is 0.8 in config.rs. At 0.148.0, scoring errors warn rather than fail closed. At 0.149.0, `#39307` fail-closes scoring errors. `approval_policy = "untrusted"` is removed in 0.149.0.

Channel: tagged-release. Half: both.

Operator consequence: `npm i -g @openai/codex` after this tag no longer lands 0.147.0. Do not plan as if a model now gates every tool call; the classifier is in the binary and off. If you enable it, prefer 0.149.0. Search configs for `untrusted` before that upgrade. Config lockfiles are gone in 0.148.0.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.148.0
- https://github.com/openai/codex/blob/rust-v0.148.0/codex-rs/features/src/lib.rs
