---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omnigent-capability-more-sandboxes-more-harnesses-per-person-git-identity
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.13.0
    precision: github_release
---
# 2026-09-21-omnigent-capability-more-sandboxes-more-harnesses-per-person-git-identity

Capability: more sandboxes, more harnesses, per-person git identity. v0.12.0: Antigravity harness, Devin and Grok Build in the picker, ACP sub-agents (for example Devin) appear as child sessions with tool calls in the transcript, import of existing local Claude Code/Codex sessions, `omni host enable` as a user service; breaking: bare `omni` starts the host, legacy PTY transport removed. v0.13.0: libkrun microVM (`sandbox.provider: microsandbox`) and self-reclaiming Kubernetes agent-sandbox providers, auto-reaping of offline sandboxes, Jcode ACP harness, git and `gh` authenticated as the user's own connected account inside the sandbox, OAuth client-credentials and Vault Transit credential store; breaking: tmux 3.3+ required, `omnigent-canvas` extension removed. v0.14.0: Gensee sandbox provider, Kubernetes tolerations, CockroachDB backing store, multi-repo sandboxes, pending approvals survive server/runner restarts, and "tool approval retries retain the arguments that were reviewed" (#7457).

Channel: tagged-release. Half: capability. Date: v0.12.0 to v0.14.0.

Operator consequence: Try microsandbox if you ran `sandbox.type: none` for speed; every bundle advisory in item 1 is scoped to unsandboxed runners. The v0.14.0 approval-retry fix matters: before it, a retried approval could run arguments other than the ones a human reviewed.

## Receipt
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.13.0
