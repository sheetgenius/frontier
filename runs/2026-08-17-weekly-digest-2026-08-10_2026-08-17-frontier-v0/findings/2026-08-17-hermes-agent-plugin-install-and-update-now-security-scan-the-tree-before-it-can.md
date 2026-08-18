---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-plugin-install-and-update-now-security-scan-the-tree-before-it-can
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/80728
    precision: merged_pr
---
# 2026-08-17-hermes-agent-plugin-install-and-update-now-security-scan-the-tree-before-it-can

Plugin install and update now security-scan the tree before it can run.

`hermes plugins install` and `hermes plugins update` previously cloned and activated arbitrary git repos completely unscanned  --  and plugins run Python in-process with the agent, with full access to its environment, making them a more dangerous surface than the hub skills Hermes already scanned. A new `tools/plugin_guard.py` runs the existing skills_guard threat-pattern engine over the temp clone before it is moved into `~/.hermes/plugins/`, and re-scans after `hermes plugins update`. Verdicts: `safe` installs silently, `caution` prints findings and requires `Install anyway? [y/N]` or `--force`, `dangerous` is blocked and `--force` does not override. The plugin adaptation exempts the `requires_env` pattern on code files (plugins legitimately read their own API keys) while still enforcing it on docs and config files where it reads as an injection or social-engineering signal; foreign credential-store access (~/.ssh, ~/.aws, ~/.hermes/.env), reverse shells, destructive commands, persistence, obfuscated execution and symlink escapes stay at full strength. On by default, opt out via `plugins.scan_on_install: false`. A false-positive audit over all 60 bundled plugins returned 57 safe, 3 caution, 0 dangerous. The PR credits Claude Cowork's skill and plugin scanning as the inspiration and tabulates how the two policies differ  --  notably Cowork's is off by default as an Enterprise setting where Hermes ships it on.

Channel: tagged-release. Ancestry: merge_commit_sha 9d139320d46b2e6f1df52f06eccdd37ff323efb7; compare/9d139320...v2026.8.16.2 -> status=ahead, ahead_by=140, behind_by=0 (ancestor of stable tag v2026.8.16.2).

Operator consequence: You get this on upgrade with no action. Do check `plugins.scan_on_install` is not disabled in a config you inherited, and re-run `hermes plugins update` across anything you installed before v0.20.3  --  those trees were never scanned. Note the scanner is static pattern matching, not an LLM review: it catches shapes, not intent.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/80728
