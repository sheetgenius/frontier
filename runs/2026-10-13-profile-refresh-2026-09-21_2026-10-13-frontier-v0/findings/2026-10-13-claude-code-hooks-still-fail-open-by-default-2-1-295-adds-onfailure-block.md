---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-hooks-still-fail-open-by-default-2-1-295-adds-onfailure-block
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.295
    precision: github_release
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L676
    precision: tagged_commit_file
  - url: https://code.claude.com/docs/en/hooks#block-the-action-when-a-hook-fails
    precision: official_docs
---
# 2026-10-13-claude-code-hooks-still-fail-open-by-default-2-1-295-adds-onfailure-block

Hooks still fail open by default; 2.1.295 adds onFailure block. A command or HTTP hook can now be declared fail-closed, so a missing script, a crash or a timeout blocks the action; the default stays fail-open. Around it, paths where a policy check silently did not apply were closed after stable: a PreToolUse or PermissionRequest hook whose matcher failed was skipped, permission rules were not re-applied after a hook rewrote a tool's input, `prompt` and `agent` hooks phrased as instructions approved what they were told to block, Esc during a prompt hook could pass the unchecked prompt, and a managed `continue: false` did not end the turn. The window's one "Security:" line closes a PreToolUse-approval and auto-mode bypass of the prompt for UNC network reads.

Channel: tagged-release (2.1.288 to 2.1.296, latest only; the 2.1.280 PermissionRequest change at line 1604 is on stable). Half: both. Date: 2026-10-02 (2.1.288), 2026-10-05 (2.1.290), 2026-10-06 (2.1.292), 2026-10-08 (2.1.294, 2.1.295), 2026-10-09 (2.1.296).

Operator consequence: Add `"onFailure": "block"` to every policy hook once the fleet is on 2.1.295 or later; without it a mistyped path or a slow hook is an allow. Stable 2.1.287 has none of these fixes, so a policy that depends on PreToolUse rewrites, on `prompt` or `agent` hooks, or on a managed `continue: false` should set managed `requiredMinimumVersion` to 2.1.296 or be re-tested on stable. Write `prompt` and `agent` hook criteria as conditions, not imperatives, and test each with a command it must block. The native switch removes one reason to wrap Claude Code in an external fail-closed shim, but only on latest.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.295
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L676
- https://code.claude.com/docs/en/hooks#block-the-action-when-a-hook-fails
