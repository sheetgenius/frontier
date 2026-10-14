---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-gemini-enterprise-gained-administrator-enabled-claude-5-5-while-its-linux-sandbox-descript
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261009030952/https://www.antigravity.google/docs/enterprise
    precision: official_docs
  - url: https://web.archive.org/web/20261010095514/https://antigravity.google/docs/enterprise/?hl=de
    precision: official_docs
  - url: https://web.archive.org/web/20260916032705/https://antigravity.google/docs/cli/sandbox
    precision: official_docs
---
# 2026-10-13-antigravity-gemini-enterprise-gained-administrator-enabled-claude-5-5-while-its-linux-sandbox-descript

Gemini Enterprise gained administrator-enabled Claude 5.5, while its Linux sandbox description conflicts with the CLI sandbox page. The Enterprise page added Claude Opus 5.5 and Sonnet 5.5 as administrator opt-in, billed by token, with CLI identifiers `claude-opus-5-5-<level>` and `claude-sonnet-5-5-<level>`. Levels are low, medium (default), high and max; `--effort` needs agy 1.2.11 or later. The page advises CLI users to enable `--sandbox=true` and calls the Linux mechanism bubblewrap, while the CLI sandbox page says namespaces. The verifier found no real bwrap or nsjail string in the 1.3.4 Linux binary; this does not prove which runtime boundary is enforced.

Channel: docs-only; Enterprise account configuration and model service. Half: both. Date: 2026-10-09..2026-10-10 (documentation change).

Operator consequence: An Enterprise team can select Claude within the Google harness after administrator approval and with a separate token bill; it must configure that account before switching jobs. Pin a documented model identifier and thinking level and check `agy models` under the actual project. Do not choose a Linux isolation policy from the conflicting mechanism names: a vendor correction or a runtime probe of mounts, network and denied paths would settle the boundary.

## Receipt
- https://web.archive.org/web/20261009030952/https://www.antigravity.google/docs/enterprise
- https://web.archive.org/web/20261010095514/https://antigravity.google/docs/enterprise/?hl=de
- https://web.archive.org/web/20260916032705/https://antigravity.google/docs/cli/sandbox
