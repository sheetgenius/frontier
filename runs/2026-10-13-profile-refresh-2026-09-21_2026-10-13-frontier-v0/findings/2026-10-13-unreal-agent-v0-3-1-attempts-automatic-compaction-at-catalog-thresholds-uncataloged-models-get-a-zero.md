---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-attempts-automatic-compaction-at-catalog-thresholds-uncataloged-models-get-a-zero
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: medium
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/contextbuilder/compaction.go#L13-L102
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/settings/default_settings.json
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/settings/settings.go#L70-L77
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/commit/1da8afde82da935ba6cd8479a35aff449620736b
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L352-L362
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L497-L504
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/contextbuilder/prompts/compaction.md
    precision: tagged_commit_file
---
# 2026-10-13-unreal-agent-v0-3-1-attempts-automatic-compaction-at-catalog-thresholds-uncataloged-models-get-a-zero

v0.3.1 attempts automatic compaction at catalog thresholds; uncataloged models get a zero threshold. The v0.3.0 Go tag adds compaction, first shipped as binaries and an image in v0.3.1. When the last response's input plus output usage reaches the configured threshold and eligible history exists, a subsequently scheduled model request attempts a summary call to the same model without tools. The rebuilt context retains whole turns from the last 20,000 tokens, pending tool calls with their latest running results, and the summary. Append-only history preserves the full record for replay. The bundled catalog, merged with `~/.config/unreal-agent/settings.json`, sets thresholds of 244,800 tokens for OpenAI and Codex models, 500,000 for the seven Anthropic models, and 524,288 for the two Fireworks GLM models. Its stated context windows are repository settings, not independently verified provider limits. A listed model without a threshold gets context_window/2; a model or provider missing from the catalog gets threshold 0. Eligibility also requires a cutoff beyond the retained-history condition. The source-based inference is that an uncataloged model can attempt summaries once that condition is met, provided usage is reported. OpenRouter and custom model IDs are not listed; Ollama usage reporting was not checked. If compaction request construction fails, the coordinator builds an ordinary request, and it does not apply an incomplete summary. New tool output is not continuously counted as a hard input budget. The summary prompt treats instructions in history as data. The maintainer's 2026-09-23 comment on #7 said compaction was being explored; it is now implemented.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: The harness attempts automatic summaries when the last usage checkpoint reaches the configured threshold and eligible history exists. This can extend runs, but does not guarantee avoiding context-limit errors or preserving task accuracy. Uncataloged models have a zero threshold and can attempt compaction once the retained-history condition is met. Before a long run, configure the intended threshold for any model outside default_settings.json and account for extra summary calls and lossy context. The catalog needs maintenance as models change. The two SWE-Marathon links in item 9 were not publicly readable at inspection; no compaction pass-rate result is established.

## Receipt
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/contextbuilder/compaction.go#L13-L102
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/settings/default_settings.json
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/settings/settings.go#L70-L77
- https://github.com/unreallabsai/unreal-agent/commit/1da8afde82da935ba6cd8479a35aff449620736b
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L352-L362
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L497-L504
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/contextbuilder/prompts/compaction.md
