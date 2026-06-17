---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-gemini-cli-policy-resilience
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.46.0-preview.0"
status: accepted_signal
change_type: reliability
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Commit title: 'fix(policy): add EBUSY fallback and TOML parse recovery (#19919) (#21541)' with 51 additions and 8 deletions to packages/core/src/policy/config.ts plus comprehensive test coverage in pe"
    url: https://github.com/google-gemini/gemini-cli/commit/dceb2ea30650c3f6742e67ec71110857904e78b3
    precision: commit
---
# Policy File Resilience: EBUSY Fallback and TOML Recovery

## What Changed

Enhanced policy file persistence with EBUSY/EXDEV fallback mechanism and TOML parse recovery. When atomic rename fails on certain mount configs, falls back to copy-then-unlink. If policy file becomes corrupted with syntax errors, automatically backs up malformed file with .bak extension and recovers from scratch.

## Operator Implication

Prevents policy update failures in cross-device mount scenarios common in containerized environments. Automatic corrupted file recovery eliminates manual intervention for syntax errors. Improves resilience of configuration persistence layer.

## Receipt

- [Commit title: 'fix(policy): add EBUSY fallback and TOML parse recovery (#19919) (#21541)' with 51 additions and 8 deletions to packages/core/src/policy/config.t](https://github.com/google-gemini/gemini-cli/commit/dceb2ea30650c3f6742e67ec71110857904e78b3)
