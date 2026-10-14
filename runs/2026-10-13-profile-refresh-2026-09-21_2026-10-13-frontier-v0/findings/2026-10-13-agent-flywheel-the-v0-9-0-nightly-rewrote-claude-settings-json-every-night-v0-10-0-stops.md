---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-the-v0-9-0-nightly-rewrote-claude-settings-json-every-night-v0-10-0-stops
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/400
    precision: official_docs
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L7298-L7305
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/scripts/lib/update.sh#L7169
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2a595c42b107cdf4ae0a78387847b14221f37d38
    precision: commit
---
# 2026-10-13-agent-flywheel-the-v0-9-0-nightly-rewrote-claude-settings-json-every-night-v0-10-0-stops

The v0.9.0 nightly rewrote ~/.claude/settings.json every night; v0.10.0 stops it. Per #400, the 04:00 nightly first removed the legacy `git_safety_guard` hook, then three minutes later ran the UBS installer with `--easy-mode` from `$HOME`. That auto-accepted the installer's hook prompts, reinstalled `git_safety_guard.py`, and rewrote the user-level `~/.claude/settings.json` with project-relative hook paths, so every Bash and Edit call in every project reported a missing-hook error and the on-save scan never ran. v0.10.0 passes `--skip-hooks` in both the nightly and the manifest install; the commit says "ACFS owns agent hooks." The same commit makes `acfs doctor --fix --yes` actually forward `--yes` (before, it applied nothing) and lets unexpired holds pass doctor.

Channel: tagged-release. Half: defect. Date: 2026-10-03.

Operator consequence: On any host still running a v0.9.0 ACFS tree, inspect `~/.claude/settings.json` for UBS-added hooks and a `git_safety_guard` entry, and expect them back after each 04:00 run until the tree itself is updated, since the nightly will not update it. This was the installer rewriting Claude Code's global settings without asking, every day. That is the kind of default this watchlist tracks, and v0.10.0 fixes it.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/400
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L7298-L7305
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/scripts/lib/update.sh#L7169
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2a595c42b107cdf4ae0a78387847b14221f37d38
