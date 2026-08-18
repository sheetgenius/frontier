---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-eve-eve-0-36-0-changes-the-default-agent-model-from-claude-sonnet-5-to-zai
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.36.0
    precision: github_release
---
# 2026-08-17-eve-eve-0-36-0-changes-the-default-agent-model-from-claude-sonnet-5-to-zai

eve 0.36.0 changes the default agent model from Claude Sonnet 5 to zai/glm-5.2.

eve's default agent model becomes `zai/glm-5.2`. New agents created with `eve init`, config-less agents, and the setup model picker all now use GLM 5.2 instead of Claude Sonnet 5. The change lands in `default-agent-model.ts` and the interactive `select-model` flow, with README and docs updated to match.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.36.0 published 2026-08-13T18:28:09Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.35.0...eve%400.36.0'` returned dc8a261 0f359fe ee8943b 2714386 20a5201 b58b2f2, containing the change commit 20a5201  --  in the history of the stable tag eve@0.36.0. The commit itself (`gh api repos/vercel/eve/commits/20a5201`, dated 2026-08-13T18:07:36Z, "Default new agents to zai/glm-5.2 (#1949)") touches packages/eve/src/shared/default-agent-model.ts, the setup model picker and its tests, README.md and seven docs files  --  so this is a code default, not a docs claim.

Operator consequence: Pin your model explicitly and stop inheriting the framework's default  --  that is the durable lesson regardless of which model you prefer. Concretely: any eve agent you scaffold after 0.36.0, and any agent running without an explicit model config, silently changes providers on upgrade, which changes cost, latency, tool-calling behaviour and where your prompts are processed. Re-run your evals rather than assuming parity. The wider signal is worth watching rather than acting on: a major US platform vendor moved its out-of-the-box default off a frontier US model onto an open-weights Chinese one, in a patch-cadence release, with a one-line note. Defaults are the loudest thing a harness says about the model layer, and this one says the model layer is now interchangeable enough to swap by default.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.36.0
