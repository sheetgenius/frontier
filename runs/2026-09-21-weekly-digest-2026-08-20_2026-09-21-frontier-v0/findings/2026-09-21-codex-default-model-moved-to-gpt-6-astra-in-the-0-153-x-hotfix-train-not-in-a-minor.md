---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-codex-default-model-moved-to-gpt-6-astra-in-the-0-153-x-hotfix-train-not-in-a-minor
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.153.4
    precision: github_release
  - url: https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/models-manager/models.json
    precision: tagged_commit_file
---
# 2026-09-21-codex-default-model-moved-to-gpt-6-astra-in-the-0-153-x-hotfix-train-not-in-a-minor

Default model moved to GPT-6-Astra in the 0.153.x hotfix train, not in a minor. When `model` is unset, a patch release changed which model runs. 0.153.2 says the Astra Fast tier is "2x speed, increased usage". 0.154.0 says fresh sessions and forks now "respect server model defaults unless explicitly overridden" (#43177), so the effective default can also come from the server catalog. 0.154.0 updates the bundled OpenAI Docs skill with Astra migration guidance (#42931). Changelog (docs-only): GPT-5.3-Codex-Spark was deprecated 2026-09-14. GPT-5.5 retires from Codex with ChatGPT sign-in on 2026-10-14, and the changelog says to switch to gpt-5.6-sol. Marketing for the "GPT-6 Astra" launch is out of scope. The Codex primary surfaces record only the catalog, picker, and default change above.

Channel: tagged-release. Half: both. Date: 2026-09-03 (config-only) -> 2026-09-04 (bundled default).

Operator consequence: Any fleet that leaves `model` unset changed model on a patch upgrade (0.153.3 -> 0.153.4). Pin `model` explicitly if cost, latency, or eval baselines matter. Re-run evals if you did not pin. Grep configs, custom agents, and scheduled tasks for `gpt-5.5` and `gpt-5.3-codex-spark` before 2026-10-14.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.153.4
- https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/models-manager/models.json
