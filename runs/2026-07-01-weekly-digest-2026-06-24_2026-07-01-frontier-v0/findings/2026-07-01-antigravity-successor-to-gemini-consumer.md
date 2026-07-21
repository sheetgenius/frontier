---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-antigravity-successor-to-gemini-consumer
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
    precision: maintainer_authored_post
  - url: https://github.com/google-gemini/gemini-cli/discussions/27274
    precision: maintainer_authored_post
---
# 2026-07-01-antigravity-successor-to-gemini-consumer

Antigravity CLI (`agy`) is Google's closed-source Go successor to consumer Gemini
CLI. Per Google's own announcement (2026-05-19), Gemini CLI stopped serving
requests for AI Pro/Ultra, free individual Code Assist, and new GitHub-org
installs on 2026-06-18; enterprise Code Assist retained access, and the
open-source gemini-cli repo remains Apache-2.0 and enterprise-serving. Antigravity
joins the watchlist this cycle as the new consumer path. Full detail and the
tiered-discontinuation framing live in harvest/watchlist.md.

## Receipt
- https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
- https://github.com/google-gemini/gemini-cli/discussions/27274
