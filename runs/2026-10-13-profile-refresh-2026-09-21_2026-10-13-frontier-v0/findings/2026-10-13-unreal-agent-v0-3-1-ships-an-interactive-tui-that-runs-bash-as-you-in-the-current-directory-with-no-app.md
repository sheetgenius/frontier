---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-ships-an-interactive-tui-that-runs-bash-as-you-in-the-current-directory-with-no-app
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/README.md
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L84-L104
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L190-L262
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/startup.go#L127-L131
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/shell.go#L519-L530
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/primitives/process.go#L606-L609
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/client.go
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/CONTRIBUTING.md
    precision: tagged_commit_file
---
# 2026-10-13-unreal-agent-v0-3-1-ships-an-interactive-tui-that-runs-bash-as-you-in-the-current-directory-with-no-app

v0.3.1 ships an interactive TUI that runs Bash as you in the current directory with no approval step, defaulting to your ChatGPT login. The project now ships a terminal client: "A minimal terminal client for Harness. Run it from your workspace" (README L3). The Homebrew cask installs it as `unreal-agent`, `uat` and `unreal-agent-tui`. Its workspace is whatever directory you launch it from (`os.Getwd()`, run.go L190). The model gets Bash, run through your `$SHELL` in that directory (L245), plus ViewImage, plus skill use when `.harness/skills/*/SKILL.md` exists. Each command runs as soon as the model asks for it, as your user, and the child process inherits the whole environment, because the shell operation sets no environment of its own (operation/shell.go L522-L530; primitives/process.go L608). There is no approval, permission or policy code in the TUI or in the harness packages it uses. The system prompt is one line asking for a progress update before long-running tools (L254); unlike the runner's prompt, it claims no sandbox. With no provider flag the TUI defaults to `openai-codex` (L86). It finds your Codex auth file and asks "Use your existing Codex login?", offering `gpt-6.1-sol` (L45) at high reasoning effort (L103). It saves the answer to `~/.config/unreal-agent/preferences.json` and reuses it on later launches without asking again (README L20-L29; dialog text in startup.go L127-L130). The Codex client identifies itself as `originator: unreal-agent` and `User-Agent: unreal-agent`. It accepts only `https://chatgpt.com/backend-api/codex` or a loopback base URL, refuses redirects, and reads the token once at startup, so an expired token still means "Renew credentials with Codex, then restart the agent" (README L73; client.go L48-L60 and L90-L103). Every launch starts a new session (store.Create, L203), and the TUI has no resume. Unlike the runner, it does not read the workspace `.env` (item 3).

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: At intake the profile said to avoid running this directly on a workstation; that is now the vendor's default path. The advice therefore has to become a setup rule: run `unreal-agent` in a VM or a container whose mounts, credentials and network access you have restricted, because every command the model writes runs immediately as you, with your credentials in its environment. If you accept the Codex prompt, a third-party harness spends your ChatGPT plan on every later launch. `unreal-agent -setup` changes the choice, and `-provider openai` (or any other provider) keeps the subscription out. Human attention moves from per-command review, which this tool never asks for, to one decision per session: which box it runs in. That matches the vendor's stated view that approvals belong in "deterministic environment or sandbox constraints, outside the harness" (launch post, item 9), but the TUI ships no such box.

## Receipt
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/README.md
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L84-L104
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L190-L262
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/startup.go#L127-L131
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/shell.go#L519-L530
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/primitives/process.go#L606-L609
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/client.go
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/CONTRIBUTING.md
