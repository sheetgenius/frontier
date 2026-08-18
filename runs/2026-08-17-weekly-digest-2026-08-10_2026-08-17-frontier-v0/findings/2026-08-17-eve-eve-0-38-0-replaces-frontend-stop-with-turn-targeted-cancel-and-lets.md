---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-eve-eve-0-38-0-replaces-frontend-stop-with-turn-targeted-cancel-and-lets
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.38.0
    precision: github_release
---
# 2026-08-17-eve-eve-0-38-0-replaces-frontend-stop-with-turn-targeted-cancel-and-lets

eve 0.38.0 replaces frontend stop() with turn-targeted cancel() and lets extensions contribute channels and schedules.

`stop()` on frontend agent bindings is replaced by `cancel()`. Cancellation now targets the exact durable turn through `MessageResponse.cancel()` while the binding stays attached through settlement. Separately, extensions can now contribute both channels and schedules: mounted channel and schedule IDs receive the extension namespace while authored route paths, cron expressions and handler behaviour remain unchanged. Built-in inbound hooks can also return `title` to set the workflow run title without changing the message sent to the model.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.38.0 published 2026-08-14T16:49:41Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.37.1...eve%400.38.0'` returned c0ca9a5 a7d34e5 7aacca9 8904392 775c061 abcd06d 4c3c475 bdd5a9b ccc604c e306fc3 48c1105 692c5c6, containing the minor-change commit 48c1105 and the extension commits 8904392 (channels) and 775c061 (schedules)  --  all in the history of the stable tag eve@0.38.0.

Operator consequence: Update any frontend that calls `stop()`  --  this is the second approval- and cancellation-vocabulary rename in seven days, after 0.32.0's `deny`-to-`cancel`, and it is the clearest evidence available that eve's control-flow surface is not settled. The extension change is the more interesting one for the filesystem-first thesis: a channel or a schedule can now arrive from a package rather than from your own project tree, namespaced but live. Before installing a third-party eve extension, check what channels and schedules it mounts  --  an extension can now give your agent an inbound surface and a cron trigger you did not author.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.38.0
