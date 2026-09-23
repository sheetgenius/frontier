---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-codex-untrusted-projects-stop-feeding-agents-md-and-startup-stops-running-workspace-helpers-befo
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.150.0
    precision: github_release
  - url: https://github.com/openai/codex/releases/tag/rust-v0.154.0
    precision: github_release
  - url: https://github.com/openai/codex/pull/39837
    precision: merged_pr
---
# 2026-09-21-codex-untrusted-projects-stop-feeding-agents-md-and-startup-stops-running-workspace-helpers-befo

Untrusted projects stop feeding AGENTS.md, and startup stops running workspace helpers before trust. When the project is untrusted, project-scoped `AGENTS.md` discovery is skipped. User-level instructions are kept, and trust level is part of the instruction cache key, so a runtime trust change reloads instructions. Managed deny-read rules stay enforced after permission changes (#40004). From 0.154.0, startup no longer executes workspace-controlled helpers before trust is established.

Channel: tagged-release. Half: defect. Date: 2026-08-26 (0.150.0); 2026-09-09 (0.154.0).

Operator consequence: Cloning a hostile repo and opening it untrusted no longer lets it inject instructions or run helpers at startup. Upgrade to >=0.154.0 for both fixes. If your workflow depends on repo AGENTS.md, the project must now be trusted. Check this in CI and in ephemeral checkouts where trust is never granted.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.150.0
- https://github.com/openai/codex/releases/tag/rust-v0.154.0
- https://github.com/openai/codex/pull/39837
