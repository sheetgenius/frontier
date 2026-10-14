---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-defaults-moved-to-opus-5-5-sonnet-5-5-and-haiku-5-5-new-managed-keys-pin-exact-model-versi
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1597
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.283
    precision: github_release
  - url: https://code.claude.com/docs/en/settings-reference#availablemodelsmatch
    precision: official_docs
---
# 2026-10-13-claude-code-defaults-moved-to-opus-5-5-sonnet-5-5-and-haiku-5-5-new-managed-keys-pin-exact-model-versi

Defaults moved to Opus 5.5, Sonnet 5.5 and Haiku 5.5; new managed keys pin exact model versions and providers. Three model families changed default in 15 days: Opus 5.5 on 2026-09-22, when Opus also replaced Sonnet as the default model on Pro and Team Standard; Sonnet 5.5 on 2026-09-28; Haiku 5.5 on 2026-10-07. Opus 4.7+ and Fable moved to a 1M context by default on Bedrock, Vertex, Foundry and gateways. An `availableModels` allowlist naming `claude-opus-5` admits Opus 5.5 automatically; 2.1.283 adds `availableModelsMatch: "exact"` and `deniedModels` to stop that, and 2.1.285 adds `allowedProviders` to fence which API providers a machine may use. The setup page now warns that a new model can need a build newer than stable; Haiku 5.5 needs 2.1.293, which stable lacks.

Channel: tagged-release (all but 2.1.293 on stable); docs-only for the setup-page channel warning. Half: both. Date: 2026-09-22 (2.1.280), 2026-09-25 (2.1.283), 2026-09-28 (2.1.284), 2026-09-29 (2.1.285), 2026-10-01 (2.1.287), 2026-10-07 (2.1.293).

Operator consequence: Pro and Team Standard seats default to Opus and spend usage faster; set `model` if Sonnet was the plan. Evals keyed on `opus`, `sonnet` or `haiku` aliases changed model three times this window; pin full model IDs for alias drift, but record the model actually served because safety-related switches can override a pinned Opus model (section 17). Fleets with prefix allowlists should decide whether point releases enter automatically; `availableModelsMatch: "exact"` makes each one a deliberate change. Gateways that stop at 200K need `CLAUDE_CODE_DISABLE_1M_CONTEXT=1` or `/autocompact 200k`.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1597
- https://github.com/anthropics/claude-code/releases/tag/v2.1.283
- https://code.claude.com/docs/en/settings-reference#availablemodelsmatch
