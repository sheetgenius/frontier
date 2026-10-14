---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-claude-thoughts-become-public-summaries-and-refusals-stop-generic-retries
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/325d3a982dc91cf9566f78921fcc5a8d0a3b958d
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/89a4853310dcef07e0a427e15dc31558855c9315
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/60c940fd03fdaf60993b70070e6ca7142718200b
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_model_config/extensions/python/_functions/agent/Agent/read_prompt/end/_20_anthropic_thoughts.py
    precision: tagged_commit_file
---
# 2026-10-13-agent-zero-claude-thoughts-become-public-summaries-and-refusals-stop-generic-retries

Claude thoughts become public summaries and refusals stop generic retries. v2.13 replaces two built-in thoughts instructions with requests for brief public action summaries rather than private reasoning when provider/model names contain anthropic. v2.14 also matches claude in the model name, covering routes lacking anthropic in their labels. Custom wording is not automatically rewritten. Separately, Chat Completions refusal/content_filter finish reasons surface a policy error and bypass generic repair retries and media stripping. Native commentary also fills the thoughts display. This does not prove that the former wording caused every refusal or that displayed thoughts audit private reasoning.

Channel: tagged-release. Half: both. Date: 2026-09-23 (first stable); 2026-10-13 (broader model detection).

Operator consequence: Read thoughts as progress, not a reasoning trace. Check unattended-task logs for visible refusal errors after upgrading. A refusal now requires an operator decision instead of an automatic repair loop; widening Claude-name detection does not change that error policy.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/325d3a982dc91cf9566f78921fcc5a8d0a3b958d
- https://github.com/agent0ai/agent-zero/commit/89a4853310dcef07e0a427e15dc31558855c9315
- https://github.com/agent0ai/agent-zero/commit/60c940fd03fdaf60993b70070e6ca7142718200b
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_model_config/extensions/python/_functions/agent/Agent/read_prompt/end/_20_anthropic_thoughts.py
