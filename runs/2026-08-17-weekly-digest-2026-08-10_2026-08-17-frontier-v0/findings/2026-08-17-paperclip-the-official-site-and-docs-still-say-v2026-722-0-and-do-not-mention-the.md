---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-the-official-site-and-docs-still-say-v2026-722-0-and-do-not-mention-the
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
    precision: github_release
---
# 2026-08-17-paperclip-the-official-site-and-docs-still-say-v2026-722-0-and-do-not-mention-the

The official site and docs still say v2026.722.0 and do not mention the release channels at all.

Nothing, on the marketing and docs surfaces, and that is the finding. Hours after publishing a 315-commit stable that introduces four install channels and changes what Docker `:latest` means, paperclip.ing advertises v2026.722.0 as the latest release and docs.paperclip.ing's changelog stops at the same version. The installation guide teaches a bare `npx paperclipai` with no channel and never explains that channels now exist. Positioning on the site is otherwise unchanged: 'the app people use to manage AI agents for work', 'Open source. Self-hosted.', users as 'the board of directors', with a waitlist link and no pricing.

Channel: docs-only. Ancestry: Fetched https://paperclip.ing/ -- 'Latest release v2026.722.0 (July 22, 2026)'. Fetched https://docs.paperclip.ing/reference/changelog/ -- newest entry v2026.722.0 (2026-07-22), then v2026.720.0 and v2026.707.0. Fetched https://docs.paperclip.ing/guides/getting-started/installation/ -- shows only `npx paperclipai onboard --yes`, `npx paperclipai run`, `npx paperclipai auth bootstrap-ceo`, with no channel specifier and no channel explanation. The four-channel contract exists only as doc/CHANNELS.md inside the repository, verified as a blob at v2026.817.0.

Operator consequence: Ignore paperclip.ing and docs.paperclip.ing for currency; treat the repository releases page, doc/CHANNELS.md and the npm dist-tags as canonical. This answers the source contract's own open question about which surface wins when they diverge: on this evidence the site and docs lag the repository by at least one full release, and the docs do not describe the install channels their own install guide now depends on.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
