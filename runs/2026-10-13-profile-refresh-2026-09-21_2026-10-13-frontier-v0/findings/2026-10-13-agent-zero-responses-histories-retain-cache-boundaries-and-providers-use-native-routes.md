---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-responses-histories-retain-cache-boundaries-and-providers-use-native-routes
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/429946fba4d93f75dc930c39a0957c907aac6ae0
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/responses_history.py
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/commit/5a4b4130b25bd609c954c47eba8c1fac797f322e
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/litellm_transport.py#L29-L44
    precision: tagged_commit_file
---
# 2026-10-13-agent-zero-responses-histories-retain-cache-boundaries-and-providers-use-native-routes

Responses histories retain cache boundaries and providers use native routes. Completed local Responses turns retain masked extras at their original history boundaries instead of discarding cacheable prefixes as conversations grow. Replay eligibility and secret masking remain, and extras count toward compression. This is distinct from v2.13's Chat Completions cache fix; Chat Completions remains the fallback when no Responses alias is configured. Nebius, Venice chat, Z.AI/Coding and OpenRouter embeddings move to native LiteLLM routes while documented overrides/fallbacks remain. Upstream cache-hit and startup percentages are upstream measurements, not independently reproduced results here.

Channel: tagged-release. Half: both. Date: 2026-10-13 (first stable; implementations 2026-10-07).

Operator consequence: Re-test long Responses sessions and affected custom/gateway providers. Inspect effective overrides and actual cached-token usage before claiming a cost reduction. Native provider routing removes some provider-specific scaffolding, but a general dependency update still needs compatibility checks.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/429946fba4d93f75dc930c39a0957c907aac6ae0
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/responses_history.py
- https://github.com/agent0ai/agent-zero/commit/5a4b4130b25bd609c954c47eba8c1fac797f322e
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/litellm_transport.py#L29-L44
