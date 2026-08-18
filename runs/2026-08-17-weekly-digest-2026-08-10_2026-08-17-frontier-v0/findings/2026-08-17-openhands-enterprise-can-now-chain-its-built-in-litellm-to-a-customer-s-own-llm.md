---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openhands-enterprise-can-now-chain-its-built-in-litellm-to-a-customer-s-own-llm
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: medium
evidence:
  - url: https://github.com/OpenHands/docs/pull/702
    precision: merged_pr
---
# 2026-08-17-openhands-enterprise-can-now-chain-its-built-in-litellm-to-a-customer-s-own-llm

Enterprise can now chain its built-in LiteLLM to a customer's own LLM gateway.

A new 630-line Enterprise integrations page documents pointing OHE's built-in LiteLLM instance at a customer's existing OpenAI-compatible gateway (LiteLLM or Bifrost) rather than at LLM providers directly, including how to attribute traffic per team and per user as it traverses both gateways. The PR is explicit that OHE does not point the runtime at an external gateway directly  --  the built-in instance forwards.

Channel: docs-only. Ancestry: OpenHands/docs PR #702, merge commit ee751c973fb55ff4a595875abd88428ef96e978b, merged 2026-08-14T19:06:04Z. Files: enterprise/integrations/external-llm-gateways.mdx added (+630) and docs.json nav (+2). Docs-only: the Enterprise code it describes lives in the private OpenHands/enterprise repository (gh api -> 404), so no code channel can be resolved and no ancestry established.

Operator consequence: Study it if you already run a gateway as your routing, rate-limiting, audit and cost point of record and were told OpenHands Enterprise would displace it. The documented pattern keeps your gateway authoritative and makes OHE a client of it, which is the right shape: the platform gets convenience, you keep the ledger. Note the caveat, though  --  traffic passes through two gateways, so per-user attribution depends on OHE forwarding identity correctly, and the code that does that forwarding is in a repository you cannot read.

## Receipt
- https://github.com/OpenHands/docs/pull/702
