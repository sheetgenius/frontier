---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-antigravity-1-1-11-print-mode-answered-interactive-slash-commands-as-prose
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
    precision: github_release
---
# 2026-08-10-antigravity-1-1-11-print-mode-answered-interactive-slash-commands-as-prose

1.1.11: print mode answered interactive slash commands as prose, reporting work it had not done.

Two paired entries. Capability: 'Added non-interactive answers for the read-only slash commands in print mode, so `-p "/usage"`, `/quota`, `/credits`, `/model`, `/effort` and `/skills` emit one tab-separated record per line -- or a structured payload under `--output-format json` and `stream-json` -- without starting an agent turn, spending quota, or leaving a conversation behind.' Defect: 'Added an explicit refusal for the remaining interactive-only slash commands in print mode, which previously fell through as literal prompt text and let the model answer as though the command had run, so `-p "/clear"` reported the context cleared while nothing was cleared; each now fails with the flag or subcommand that replaces it.'

Channel: tagged-release. Ancestry: Tag 1.1.11 -> 1d853acd23f2b0fc55da42377aab1a05f5e34aa8, stable tag on main; entry verbatim in the release body and in CHANGELOG.md at that SHA.

Operator consequence: If you have scripts that shell out to `agy -p "/something"`, audit them: before 1.1.11 an interactive-only command was fed to the model as text and the model confidently reported success. Any automation that trusted that output was reading a hallucinated confirmation. After upgrading, the read-only set is genuinely free to poll -- it costs no quota and leaves no conversation -- and everything else fails loudly with the flag that replaces it.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
