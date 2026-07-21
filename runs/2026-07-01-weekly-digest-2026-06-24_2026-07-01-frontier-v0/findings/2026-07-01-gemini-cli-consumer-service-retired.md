---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-gemini-cli-consumer-service-retired
source: gemini-cli
source_contract: sources/gemini-cli.yml
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
  - url: https://github.com/google-antigravity/antigravity-cli/releases
    precision: github_release
---
# 2026-07-01-gemini-cli-consumer-service-retired

Accomplished-fact update to the multi-window "Antigravity succession" thread. Per
Google's own announcement (2026-05-19), consumer Gemini CLI stopped serving
requests on 2026-06-18 -- AI Pro/Ultra, free individual Code Assist, and new
GitHub-org installs. Enterprise Code Assist (Standard/Enterprise or via Google
Cloud) retained access, and the open-source gemini-cli repo remains Apache-2.0 and
enterprise-serving, which is why it kept shipping in-window (v0.49.0, 2026-06-25;
nightlies through 06-30). The succession is tiered: consumer dark, enterprise kept,
OSS repo active. Prior digests framed this as prospective ("may be entering a
managed succession") even after the shutdown had occurred; this finding records it
as executed. Detail and the correction live in harvest/watchlist.md and
content/corrections.md.

## Receipt
- https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
- https://github.com/google-gemini/gemini-cli/discussions/27274
