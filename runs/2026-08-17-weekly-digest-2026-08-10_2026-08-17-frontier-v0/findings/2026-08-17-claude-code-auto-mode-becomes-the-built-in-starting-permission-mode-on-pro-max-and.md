---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-claude-code-auto-mode-becomes-the-built-in-starting-permission-mode-on-pro-max-and
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/permission-modes#which-mode-a-session-starts-in
    precision: official_docs
---
# 2026-08-17-claude-code-auto-mode-becomes-the-built-in-starting-permission-mode-on-pro-max-and

Auto mode becomes the built-in starting permission mode on Pro, Max, and Team  --  and a project-level `defaultMode: "auto"` silently voids your user-level default.

The permission-modes doc has moved to present tense: "On Pro, Max, and Team plans, the built-in starting mode is auto mode." In auto mode a second model  --  the classifier  --  reviews each action in place of the human. The Week 32 digest dated the switch: "Starting August 14, auto mode is the default permission mode for new sessions on Pro, Max, and Team plans." The rollout has real edges the marketing line does not carry. Enterprise plans and Console API keys still start in Manual. `claude -p` and the Agent SDK still start in Manual. Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, Claude Platform on AWS, and signed-in apps-gateway sessions still start in Manual. And a sharp footgun is documented in the precedence list: an `"auto"` value in a project's `.claude/settings.json` or `.claude/settings.local.json` "doesn't take effect, and Claude Code then uses the built-in default rather than a `defaultMode` from `~/.claude/settings.json`"  --  a project file trying to opt in to auto mode instead discards the machine-level default entirely.

Channel: tagged-release. Ancestry: No public repo, so ancestry is established by the docs' own version pin against the npm publish record. The permission-modes doc states: "The built-in `auto` default requires Claude Code v2.1.228 or later on macOS, Linux, and WSL, and v2.1.233 or later on native Windows. On earlier versions, the built-in default is Manual." Both are published, non-prerelease npm versions: registry `time[]` gives 2.1.228 = 2026-08-11T17:45:45Z and 2.1.233 = 2026-08-14T18:50:44Z, and both resolve at registry.npmjs.org/@anthropic-ai/claude-code/{2.1.228,2.1.233}. This is a code channel, not a docs-only announcement  --  but activation is additionally gated server-side: the docs' starting-mode table gives `default` when "Feature-flag fetching is off, or this is your first session after you install Claude Code or upgrade to a version that adds this default".

Operator consequence: Re-audit your default before your next upgrade lands it for you. If your threat model requires a human on each action, set `permissions.defaultMode` to `default` in managed settings, or remove the mode from the cycle outright with `permissions.disableAutoMode: "disable"`  --  the doc names that as the only way "nobody can select it". Then grep your repos for a project-scoped `defaultMode: "auto"`: any repo carrying one is not merely a no-op, it detonates the user-scope default for every session opened in that directory. Enterprise-plan teams get a reprieve they should not mistake for a policy  --  the built-in default did not move for them, so nothing enforces Manual if a member switches.

## Receipt
- https://code.claude.com/docs/en/permission-modes#which-mode-a-session-starts-in
