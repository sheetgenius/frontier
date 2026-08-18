---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-omnigent-v0-8-0-narrowed-sandbox-dotfile-masking-to-top-level-only-by-default-on
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/3519
    precision: merged_pr
---
# 2026-08-10-omnigent-v0-8-0-narrowed-sandbox-dotfile-masking-to-top-level-only-by-default-on

v0.8.0 narrowed sandbox dotfile masking to top-level only, by default, on upgrade.

`cwd_hidden_scan_recursive` was introduced with default `false`. The sandbox previously walked the entire working-directory tree hiding every dotfile; it now scans only the top level of the cwd and of each `read_paths` root. The PR states the consequence in its own words: a dotfile nested below the first level (e.g. `services/api/.env`) is now readable by the sandboxed helper unless the flag is set to true, and this changes masking scope for existing configs on upgrade, not only new ones. A new `mask_paths` option was added to name non-dotfile secrets explicitly.

Channel: tagged-release. Ancestry: PR #3519 merge commit e957f1b76289; gh api repos/omnigent-ai/omnigent/compare/v0.8.0...e957f1b76289 -> status "behind", ahead_by 0 (ancestor of the v0.8.0 tag). Listed under "Breaking changes" in the v0.8.0 release body. Merged 2026-07-30, i.e. outside the window; the release that carries it is inside it.

Operator consequence: Re-audit before upgrading past v0.7.0. If you run untrusted source trees under an Omnigent os_env sandbox, an in-place upgrade to v0.8.0+ silently widens what the sandboxed helper can read; set `cwd_hidden_scan_recursive: true` or enumerate the sensitive paths under `mask_paths`. Old configs parse unchanged, so nothing warns you.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/3519
