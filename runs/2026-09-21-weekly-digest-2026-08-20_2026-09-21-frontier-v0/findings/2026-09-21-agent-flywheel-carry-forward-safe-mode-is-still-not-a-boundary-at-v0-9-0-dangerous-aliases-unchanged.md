---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-flywheel-carry-forward-safe-mode-is-still-not-a-boundary-at-v0-9-0-dangerous-aliases-unchanged
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/acfs/zsh/acfs.zshrc#L628-L637
    precision: tagged_commit_file
---
# 2026-09-21-agent-flywheel-carry-forward-safe-mode-is-still-not-a-boundary-at-v0-9-0-dangerous-aliases-unchanged

Carry-forward: safe mode is still not a boundary at v0.9.0; dangerous aliases unchanged. Two things moved, the boundary did not. (a) Since v0.8.0,
`~/.zshrc.local` is sourced last (v0.8.0 line 746, v0.9.0 line 762; v0.7.0
line 238 sourced it before the aliases), so an operator override such as
`alias cc='claude'` now actually sticks; the in-file comment says the earlier
order "silently re-armed them on every new shell". (b) `cod` now pins a model
and xhigh effort on the command line, overriding `~/.codex/config.toml`.

Channel: tagged-release. Half: defect. Date: 2026-09-04 (tag read).

Operator consequence: The profile's avoid_for stands at v0.9.0: switching
to safe mode does not revoke an earlier vibe run's sudoers file, and the
dangerous shortcuts ship regardless of mode. New mitigation that works: put
un-dangerous alias overrides in `~/.zshrc.local` on v0.8.0+. On v0.7.0 that did
not work. Note the `cod` model pin is a model-and-effort pin, not a CLI version
pin.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/acfs/zsh/acfs.zshrc#L628-L637
