---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-headless-runs-fail-loudly-where-they-used-to-pass-and-the-tui-went-fullscreen-by-default
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/modes/print-mode.ts#L154-L157
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/releases/tag/v0.87.1
    precision: github_release
  - url: https://github.com/earendil-works/pi/releases/tag/v1.0.0
    precision: github_release
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-defaults.ts#L61
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-headless-runs-fail-loudly-where-they-used-to-pass-and-the-tui-went-fullscreen-by-default

Headless runs fail loudly where they used to pass, and the TUI went fullscreen by default. Three silent passes became failures. In text print mode (`-p`), a final answer cut off at the model's output limit used to exit 0. From 1.2.0 it prints the partial text, warns on stderr and exits 1; this branch covers text mode only. A bad `--mode` was silently ignored until 0.87.1. `--provider` without `--model` quietly ran another provider's default model until 1.0.0. Interactively, 1.0.0 made the fullscreen TUI the default. `tuiMode: "regular"` or `--tui-mode regular` restores normal scrollback, and 1.0.3 moved transcript top and bottom to `Ctrl+Home`/`Ctrl+End`.

Channel: tagged-release (v0.87.1, v1.0.0, v1.2.0). Half: both. Date: 2026-10-12.

Operator consequence: CI jobs that call `pi -p` can start failing on 1.2.0 where answers were being truncated. Those failures are real truncated answers, so raise the output limit or split the task rather than masking the exit code. Scripts that passed `--provider` alone now error instead of running the wrong model, which may explain an earlier cost surprise. If you drive Pi inside tmux or rely on scrollback capture, set `tuiMode: "regular"`.

## Receipt
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/modes/print-mode.ts#L154-L157
- https://github.com/earendil-works/pi/releases/tag/v0.87.1
- https://github.com/earendil-works/pi/releases/tag/v1.0.0
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-defaults.ts#L61
