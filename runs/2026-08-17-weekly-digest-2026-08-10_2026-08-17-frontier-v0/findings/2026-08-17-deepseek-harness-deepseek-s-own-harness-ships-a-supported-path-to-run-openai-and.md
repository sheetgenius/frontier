---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-deepseek-s-own-harness-ships-a-supported-path-to-run-openai-and
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/packages/llm/llm-pi-ai/README.md
    precision: official_docs
---
# 2026-08-17-deepseek-harness-deepseek-s-own-harness-ships-a-supported-path-to-run-openai-and

DeepSeek's own harness ships a supported path to run OpenAI and Anthropic models, and to drive Codex and Claude Code as subagents.

The lab that trains the model did not build a single-vendor harness. `@deepseek-ai/dsh-llm-pi-ai` is a first-party "generic multi-provider adapter for the harness LLM seam," it is a declared dependency of `@deepseek-ai/dsh-base`  --  the bundle architecture.md calls "the first layer of every profile"  --  and its README's worked config shows an `openai` route with `apiKeyEnv: OPENAI_API_KEY`, an `anthropic` route pinned to `claude-sonnet-4-5`, and a hand-declared `acme-gateway` route for any OpenAI-compatible endpoint. It is supported rather than incidental: there is a dedicated CI workflow, .github/workflows/pi-ai-provider-e2e.yml. On the delegation side, docs/capability-seams.md lists `subagent-codex` and `subagent-claude-code` as shipped implementations of the `ctx.subagents` seam, spawning through `ctx.subprocess`, and the rc.7 release notes add "Manage Codex and Claude Code subagent tasks through the Job Panel." Worth attributing precisely: the multi-provider layer is not DeepSeek's own, it is backed by the third-party `@earendil-works/pi-ai` (repo github.com/earendil-works/pi, latest 0.84.2 published 2026-08-14), so provider coverage and wire-protocol behaviour are facts about that pair.

Channel: preview-or-beta. Ancestry: `gh api repos/deepseek-ai/deepseek-harness/compare/dsh-v0.1.0-rc.7...226600147e` returns `"status":"behind", "ahead_by":0`, so the llm work is contained in the sole tag, which the release API flags `prerelease: true`. The subagent providers are listed in docs/capability-seams.md at the same tag, and the Job Panel integration is named in that tag's own release notes.

Operator consequence: Try it, if you are evaluating harnesses independently of model choice  --  this is the rare lab-first-party harness that does not assume its own model, and it will drive Codex and Claude Code as subagents behind one interface. Two cautions. Provider behaviour you observe through this adapter is a fact about dsh plus pi-ai, and a pi-ai release can change it with no commit landing in deepseek-harness. And note the interaction with the escalation defect above: the loop reproduces specifically with OpenAI-family models through this path, so the multi-provider road is where the sharpest current bug lives.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/packages/llm/llm-pi-ai/README.md
