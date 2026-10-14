---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-fixes-sigterm-handling-but-retains-false-success-responses-provider-dependent-dupli
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: medium
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/issues/13#issuecomment-5822471686
    precision: official_docs
  - url: https://github.com/unreallabsai/unreal-agent/issues/11#issuecomment-5800680734
    precision: official_docs
  - url: https://github.com/unreallabsai/unreal-agent/issues/16#issuecomment-6021820979
    precision: official_docs
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L231-L238
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/commit/4be534be93e8f686b0be256062267af77c8e66df
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/commit/0c9baa7310fabd37d045c106cac8a5ca43e8b1cd
    precision: commit
---
# 2026-10-13-unreal-agent-v0-3-1-fixes-sigterm-handling-but-retains-false-success-responses-provider-dependent-dupli

v0.3.1 fixes SIGTERM handling but retains false-success responses, provider-dependent duplicate outputs and unbounded Bash capture. Three outside reports against v0.1.x and v0.2.0 code, filed on 2026-09-22 and 2026-09-23, are still open. In #13, a provider returns HTTP 200 with a `response.failed` event (the reproduction uses `insufficient_quota`), and the runner records it and exits 0. The maintainer said persisting failed responses is intended "to capture usage in session logs" and that he would look at exiting nonzero; no fix commit exists, and the v0.3.1 coordinator still ignores `Response.Failure`. In #11, parallel Bash fan-out across turns produced two `function_call_output` items for one call, and a provider 400 that repeats on every resume, which poisons the session. The maintainer called it "a known limitation for some provider-model pairs", citing the launch post's footnote that two results for one call (running, then final) are "underspecified in the Responses API documentation" and were rejected by "some models on some inference providers (not OpenAI)". The Anthropic adapter avoids the pattern (item 6); the Responses-API providers do not. #3 remains open on its other half: no Bash timeout and no on-disk output cap (item 4). Fixed in the v0.3.0 Go tag and v0.3.1 binary release: SIGTERM now cancels through the runner's context (#16), and skill frontmatter is parsed as YAML (#15, 0c9baa7).

Channel: tagged-release. Half: defect. Date: 2026-09-22..2026-10-06.

Operator consequence: In CI, do not trust the exit status of `unreal-agent-runner`: scan the JSONL for a failed response before you count a run as a success. For a provider-model pair that rejects repeated native tool outputs, replaying the same poisoned history can repeat the 400. Start a fresh session or constrain fan-out on the affected pair; this is not a claim that every OpenRouter, Fireworks or Ollama model rejects the pattern. Upgrade to v0.3.x if you stop runners with SIGTERM, as container runtimes and CI timeouts do. All of these reports came in within about 36 hours of launch. The issue tracker is the only public defect list: there is no SECURITY.md and no published repository advisory was found. Dependency advisories still apply to the benchmark environment (items 11 through 13).

## Receipt
- https://github.com/unreallabsai/unreal-agent/issues/13#issuecomment-5822471686
- https://github.com/unreallabsai/unreal-agent/issues/11#issuecomment-5800680734
- https://github.com/unreallabsai/unreal-agent/issues/16#issuecomment-6021820979
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L231-L238
- https://github.com/unreallabsai/unreal-agent/commit/4be534be93e8f686b0be256062267af77c8e66df
- https://github.com/unreallabsai/unreal-agent/commit/0c9baa7310fabd37d045c106cac8a5ca43e8b1cd
