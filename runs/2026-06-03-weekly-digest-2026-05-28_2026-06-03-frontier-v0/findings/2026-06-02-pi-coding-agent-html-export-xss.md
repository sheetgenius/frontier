---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-pi-coding-agent-html-export-xss
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: security
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "Commit 6cb23f9 'Fix HTML export URL sanitization' uses scheme allow-list to prevent stored XSS in HTML session exports via Markdown link/image URLs"
    url: https://github.com/earendil-works/pi/commit/6cb23f9
    precision: commit
---
# HTML export URL sanitization against stored XSS

## What Changed

Implemented sanitizeMarkdownUrl() function that strips C0 control characters (0x00-0x1F, 0x7F) from URLs and uses allow-list of permitted protocols (https, http, mailto, tel, ftp) instead of blacklisting dangerous ones. Applied to both link and image renderers in HTML exports.

## Operator Implication

Eliminates stored XSS vulnerability in exported HTML sessions by preventing protocol evasion techniques using control characters or unlisted schemes.

## Receipt

- [Commit 6cb23f9 'Fix HTML export URL sanitization' uses scheme allow-list to prevent stored XSS in HTML session exports via Markdown link/image URLs](https://github.com/earendil-works/pi/commit/6cb23f9)
