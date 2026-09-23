---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-plugin4shell-disclosed-in-window-fix-shipped-in-2-1-179-with-a-silent-changelog
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://www.air.security/blog-posts/plugin4shell
    precision: third_party_research
  - url: https://github.com/anthropics/claude-code/blob/8187baaaafb3/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-claude-code-plugin4shell-disclosed-in-window-fix-shipped-in-2-1-179-with-a-silent-changelog

AIR Security published Plugin4Shell on 2026-09-17. A marketplace plugin pinned to a 40-hex commit SHA could be swapped for other code, because git checkout prefers a ref over a commit of the same name and the agent did not verify the checkout resolved to the pinned commit. The attacker needs control of the plugin repository; AIR says GitHub rejects 40-hex branch names while Bitbucket and self-hosted git do not. AIR dates Anthropic's fix confirmation to 2026-06-17 in 2.1.179. The 2.1.179 changelog entry at SHA 8187baaaafb3 lists nine items and none mentions SHA verification or plugin checkout.

Channel: tagged-release (2.1.179, before the window). Half: defect.

Operator consequence: Any Claude Code at 2.1.179 or later is not exposed to this variant, and stable 2.1.267 is well past it. The durable lesson is about the channel: an operator reading the changelog to decide upgrades could not have known this fix existed. Plugins sourced from Bitbucket or self-hosted git on older builds are the exposure to check.

## Receipt
- https://www.air.security/blog-posts/plugin4shell
- https://github.com/anthropics/claude-code/blob/8187baaaafb3/CHANGELOG.md
