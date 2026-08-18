---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-eve-eve-0-39-0-promotes-chatgpt-subscription-models-to-a-stable-chatgpt-api
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.39.0
    precision: github_release
---
# 2026-08-17-eve-eve-0-39-0-promotes-chatgpt-subscription-models-to-a-stable-chatgpt-api

eve 0.39.0 promotes ChatGPT subscription models to a stable chatgpt() API with Codex-owned authentication.

ChatGPT subscription models move from `experimental_chatgpt()` to the stable `chatgpt()` API, with Codex-owned authentication, automatic token refresh, `eve dev` recovery through `codex login` or `/model`, setup and source-authoring support, and local-only deployment safeguards. The deprecated `experimental_chatgpt()` alias remains available.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.39.0 published 2026-08-17T21:49:08Z, prerelease=false, draft=false  --  the last release inside the window. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.38.3...eve%400.39.0'` returned b285784 267a59a 73d381e 24f6c06 4c1bd80 4af3b1e 7a8f43b e8da571 99eb632 00c0a26 7a140d4 2c99a4a, containing the minor-change commit 00c0a26  --  in the history of the stable tag eve@0.39.0.

Operator consequence: Try it if you already pay for a ChatGPT subscription and would rather not add a metered API key to run agents. The load-bearing detail is the safeguard, not the promotion: the path is local-only by deployment design, so a subscription-backed agent runs on your machine and does not become a deployed service. That boundary is the whole reason a subscription credential is acceptable here, and it is what you should verify still holds before building anything on it. Note also that the credential is Codex-owned  --  eve is borrowing another vendor's harness authentication, so a change in Codex's login flow becomes a change in your eve agent's ability to authenticate. That coupling is a fact about the pair, not about eve.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.39.0
