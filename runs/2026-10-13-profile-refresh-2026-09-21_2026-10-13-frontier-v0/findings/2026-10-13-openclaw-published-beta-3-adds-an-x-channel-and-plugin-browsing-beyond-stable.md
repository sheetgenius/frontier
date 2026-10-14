---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-published-beta-3-adds-an-x-channel-and-plugin-browsing-beyond-stable
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.1
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.2
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3
    precision: github_release
  - url: https://registry.npmjs.org/openclaw/2026.10.5-beta.3
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/pull/165138
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/compare/9666c02c...v2026.10.5-beta.3
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/compare/v2026.10.3...7e4c0f7378ea285e405bdb9cfca3207d2529d30f
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/pull/169556
    precision: merged_pr
---
# 2026-10-13-openclaw-published-beta-3-adds-an-x-channel-and-plugin-browsing-beyond-stable

Published beta.3 adds an X channel and plugin browsing beyond stable. npm beta no longer equals stable: beta.3 is published with the 10.5 feature line. It includes an X mentions channel admitting allowlisted accounts and replying publicly with API spend limits, ClawHub plugin/skill browsing from the Gateway, directed session sends without transcript access, Telegram/Discord progress display by default and managed official plugins preferring a build matched to the host. The X PR's live round trip was pending; synthetic proof is not production acceptance. Beta.3 also adds the Telegram import repair and device-join suggestion described in sections 12 and 13. A main-only Ollama change exposes policy-approved web tools directly when Tool Search is unset; it does not enable denied tools.

Channel: preview-or-beta; specified Ollama schema change is main-unreleased. Half: capability. Date: 2026-10-11 beta.1, 2026-10-12 beta.2, 2026-10-13 beta.3.

Operator consequence: Test the exact beta.3 package on a non-production Gateway for X ingress or transforming-hook compatibility. Use 10.3 as the main stable pin while monitoring release inclusion of the beta fixes, not a guessed future version. A public-reply channel requires explicit account admission and API budget decisions.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.1
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.2
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3
- https://registry.npmjs.org/openclaw/2026.10.5-beta.3
- https://github.com/openclaw/openclaw/pull/165138
- https://github.com/openclaw/openclaw/compare/9666c02c...v2026.10.5-beta.3
- https://github.com/openclaw/openclaw/compare/v2026.10.3...7e4c0f7378ea285e405bdb9cfca3207d2529d30f
- https://github.com/openclaw/openclaw/pull/169556
