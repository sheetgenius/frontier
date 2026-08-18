---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-codex-codex-now-demands-an-explicit-trust-decision-for-unfamiliar-project
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/pull/36960
    precision: merged_pr
---
# 2026-08-10-codex-codex-now-demands-an-explicit-trust-decision-for-unfamiliar-project

Codex now demands an explicit trust decision for unfamiliar project directories.

TUI onboarding gains a directory-trust step with trust-and-continue or quit. The PR states the reason plainly: trusting a directory enables project-local config, hooks, and exec policies, which increases exposure to prompt injection. Trust is applied at the Git repository root when the session starts in a subdirectory, the decision is persisted, and config is reloaded before continuing. If trust cannot be persisted the prompt stays up and the config error is shown. Remote workspaces and projects with an explicit trust level skip the prompt. #37132 separately enforces managed authentication requirements locally before credentials are used.

Channel: tagged-release. Ancestry: grep of the rust-v0.146.0...rust-v0.147.0 compare commit list finds 17801b42062f63cf492f3db5df039b6b90779872 'Prompt before trusting local project directories (#36960)'. PR #36960 merged 2026-08-04T19:49:38Z; first non-prerelease tag containing it is rust-v0.147.0.

Operator consequence: Expect a new interactive gate and plan for it in headless contexts. Cloning an untrusted repo and running Codex in it no longer silently activates that repo's hooks and exec policies. Scripted or containerised first-runs that assumed a prompt-free start will now block, so pre-seed an explicit trust level for directories you intend to automate. The security framing is worth reading directly: OpenAI is treating repo-local Codex config as an injection vector, not a convenience.

## Receipt
- https://github.com/openai/codex/pull/36960
