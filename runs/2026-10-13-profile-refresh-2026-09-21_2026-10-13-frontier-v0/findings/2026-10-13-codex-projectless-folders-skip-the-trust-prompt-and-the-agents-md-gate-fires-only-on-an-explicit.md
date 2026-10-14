---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-projectless-folders-skip-the-trust-prompt-and-the-agents-md-gate-fires-only-on-an-explicit
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/pull/49160
    precision: merged_pr
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/projectless.rs#L66-L90
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agents_md.rs#L64-L66
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/config_toml.rs#L614-L616
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/loader/mod.rs#L1098-L1109
    precision: tagged_commit_file
---
# 2026-10-13-codex-projectless-folders-skip-the-trust-prompt-and-the-agents-md-gate-fires-only-on-an-explicit

Projectless folders skip the trust prompt, and the AGENTS.md gate fires only on an explicit untrusted decision. From 0.160.0, launching the TUI in a local directory with no project root marker, no Git checkout and no project config layer skips the folder-trust prompt and, when no saved trust, explicit choice, managed default or remote workspace says otherwise, applies the workspace-write profile with a granular approval policy that disallows shell-escalation, execpolicy-rule and skill prompts while allowing `request_permissions` and MCP elicitations (projectless.rs L66-L90; https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/loader/mod.rs#L412-L414). Re-reading trust at the tag also corrects the prior posture: project `AGENTS.md` is skipped only when the project is explicitly marked untrusted (agents_md.rs L64-L66 with config_toml.rs L614-L616), so a checkout with no saved trust decision, the usual CI and ephemeral case, still loads it. What an undecided or untrusted project loses is "project-local config, hooks, and exec policies" (loader/mod.rs L1098-L1109). The 0.154.0 fix that stops startup running workspace-controlled PATH helpers before trust still holds at the tag (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/utils/path-utils/src/system_commands.rs#L14).

Channel: tagged-release. Half: both. Date: 2026-10-01 (0.160.0); the AGENTS.md gate is unchanged since 2026-08-26 (0.150.0).

Operator consequence: CI that relies on a repository's `AGENTS.md` does not need to grant trust; CI that relies on the repository's `.codex/` config, hooks or exec policies does. Conversely, opening a hostile clone does not drop its `AGENTS.md` unless someone recorded "untrusted", so treat the instructions file as attacker-controlled input in unattended runs. Running Codex in a scratch folder outside any repository now starts writing there without a prompt, inside the sandbox and with escalation prompts off.

## Receipt
- https://github.com/openai/codex/pull/49160
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/projectless.rs#L66-L90
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agents_md.rs#L64-L66
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/config_toml.rs#L614-L616
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/loader/mod.rs#L1098-L1109
