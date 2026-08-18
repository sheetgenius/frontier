---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openclaw-the-agent-s-screen-becomes-a-first-class-surface-click-to-control-in
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/123097
    precision: merged_pr
---
# 2026-08-17-openclaw-the-agent-s-screen-becomes-a-first-class-surface-click-to-control-in

The agent's screen becomes a first-class surface  --  click-to-control in the browser, and a view from iOS and Android.

The Control UI Desktop panel  --  previously a 380px-minimum dock panel with no touch affordances and no mobile entry point  --  gained a full-bleed document mode at `/?view=desktop` (and `/desktop`), and the iOS and Android apps now open it in their existing authenticated webview. Separately, taking control stopped being a toolbar button you had to find: a transparent overlay covers the view-only stage so clicking anywhere on the desktop reconnects with `control: true`, and the overlay is a real `<button>` with the same accessible name and a `:focus-visible` outline. The panel also now covers the Gateway host machine itself and paired node desktops, not just cloud workers. View-only remains the default and the server still enforces a single controller.

Channel: preview-or-beta. Ancestry: Merge commits 2a8b322ebf52d6d32dbf1170fc4344fee158a474 (PR #123097, merged 2026-08-13T11:10:49Z) and 2278ca6952ea8e5f97decf932fde4ee2c7799e1f (PR #123096, merged 2026-08-13T10:07:12Z), plus df707a96702d8c0c77fc9f45e432ab4e9a7c04af (PR #122545 'view this machine in the Desktop panel') and 0c824f09d545f82715da4d022015aa5645eedb00 (PR #122724 'observe paired node desktops'). compare/v2026.8.1-beta.2...<each sha> -> status=behind, ahead_by=0 for all four. compare/v2026.7.1-2...2a8b322eb -> diverged, ahead_by=13657. In no stable tag.

Operator consequence: Watch this one  --  it is the source's thesis made concrete: agent work that was invisible unless you were at a desk is now something you can look at from a phone. Before enabling it, decide who should be able to see and drive those screens, because the panel now reaches the Gateway host and every paired node, not just leased cloud boxes. Nothing to do on stable yet; none of it is in a stable tag.

## Receipt
- https://github.com/openclaw/openclaw/pull/123097
