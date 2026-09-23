---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-1-0-85-cli-parser-rewrite-and-copilot-plugins-flag-removals-breaking
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L141-L152
    precision: tagged_commit_file
---
# 2026-09-21-github-copilot-cli-1-0-85-cli-parser-rewrite-and-copilot-plugins-flag-removals-breaking

1.0.85: CLI parser rewrite and `copilot plugins` flag removals (breaking). Command-line parsing moved from Commander to a Rust grammar; error and help wording changed (L141). `copilot plugins install --skill [--scope project]` is replaced by `copilot skill add [--project]` (L149). The cross-kind `--kind`, `--scope`, `--mcp`, `--skill` flags on `copilot plugins` are gone (L150). `copilot plugins list --json` now emits a flat array instead of `{ plugins, errors }` (L151). New `copilot mcp` / `copilot skill` enable/disable subcommands (L49).

Channel: tagged-release. Half: both. Date: 2026-09-16.

Operator consequence: Adapt: scripts that parse `copilot plugins list --json` or install skills via `plugins install --skill` break on 1.0.85. Grep provisioning scripts before upgrading a fleet. Scripts that match CLI error text also need a recheck.

## Receipt
- https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L141-L152
