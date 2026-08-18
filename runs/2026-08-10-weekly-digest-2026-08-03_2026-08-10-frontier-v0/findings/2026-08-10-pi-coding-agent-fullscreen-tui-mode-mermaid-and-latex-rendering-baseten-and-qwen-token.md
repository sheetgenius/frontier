---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-pi-coding-agent-fullscreen-tui-mode-mermaid-and-latex-rendering-baseten-and-qwen-token
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.84.0
    precision: github_release
---
# 2026-08-10-pi-coding-agent-fullscreen-tui-mode-mermaid-and-latex-rendering-baseten-and-qwen-token

Fullscreen TUI mode, Mermaid and LaTeX rendering, Baseten and Qwen Token Plan providers.

v0.84.0 adds a fullscreen TUI mode switchable at runtime, with a sticky editor and footer, an independently scrollable transcript, and draggable scrollbars; Mermaid diagram and terminal-Unicode math rendering in interactive transcripts; arbitrary OpenAI-compatible `samplingParams` plus opt-in vLLM `thinking_token_budget`; and a built-in Baseten provider. v0.84.1 adds a Qwen Token Plan Individual provider (PR #7659, @arasovic) and multi-click word/paragraph selection. v0.84.2 adds fullscreen transcript search on Ctrl+Shift+F, a configurable fullscreen exit output (print the transcript, or only a resume hint), and `--use-theme <name[/name]>` for a per-run theme that does not touch saved settings (PR #7722, @rwachtler). Note the qualifier in docs/usage.md at v0.84.2: the flag is documented as `--tui-mode <mode>` with `regular` (default) or **experimental** `fullscreen`, and iTerm2 renders inline images only as text placeholders in fullscreen because its inline-image protocol cannot crop placements during application-owned scrolling.

Channel: tagged-release. Ancestry: Documented in the v0.84.0 and v0.84.1 release bodies. v0.84.0 tag sha a5f43bf8aff3c55752432655f7334e3dafd1e256, v0.84.1 tag sha 53fa77ccd8a279eb87e92294ef3687b03ff80112, both prerelease=false and draft=false per gh api repos/earendil-works/pi/releases. Supporting commits appear in gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.2: 05e89b41 "feat(tui): render LaTeX math in Markdown" (2026-08-05), 5446cd75 "feat(coding-agent): rename UI mode to TUI mode" (2026-08-05), c03d78bd "feat(ai): add Qwen Token Plan Individual provider (#7659)" (2026-08-06).

Operator consequence: Try fullscreen mode, but keep `regular` as the default for now. The three releases spend most of their surface area on the terminal, and the payoff is real for long sessions  --  a transcript you can scroll and search without losing the editor. The caveat is that the release notes call it a headline feature while the docs still call it experimental, with named terminal-specific degradations. That gap between the release note and the doc is the thing to notice. `samplingParams` and `thinking_token_budget` matter more if you self-host: they let a vLLM or OpenAI-compatible endpoint be tuned from Pi's config instead of forked code.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.84.0
