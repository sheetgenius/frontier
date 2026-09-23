---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omnigent-omnigent-now-answers-wrapped-harnesses-safety-prompts-and-flips-their-approval-routing
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/5864
    precision: merged_pr
---
# 2026-09-21-omnigent-omnigent-now-answers-wrapped-harnesses-safety-prompts-and-flips-their-approval-routing

Omnigent now answers wrapped harnesses' safety prompts and flips their approval routing. Capability: operators can switch Claude Code permission modes live from the Omnigent UI and set a permission mode (including Bypass permissions) per scheduled automation; ACP agents can run unattended. Defaults the meta-harness now sets on the wrapped harness: v0.12.0 pre-accepts Claude Code's one-time bypass-permissions consent dialog via an invocation-local `--settings` sidecar (`skipDangerousModePermissionPrompt`) whenever a launch requests bypass; the PR states it does not write the user's config and cannot defeat MDM because Claude checks org policy first. v0.13.0 completes the default codex-native "Auto" stance with `-c approvals_reviewer="auto_review"`, so escalated Codex approvals (for example an out-of-workspace write) are settled by Codex's automatic reviewer instead of the human; the PR notes this also applies to local interactive `omnigent codex` launches in the bare default stance.

Channel: tagged-release. Half: both. Date: v0.11.0 (2026-08-25), v0.12.0 (2026-09-01), v0.13.0 (2026-09-09).

Operator consequence: On v0.13.0+, a codex-native session left on the default stance no longer asks you about escalated commands; set an explicit approval policy if you want a human in that loop. A scheduled task with Bypass permissions runs Claude Code with no consent prompt and no one watching. Attribute these behaviors to the pair: the wrapped harness's approval surface is still there, but Omnigent now pre-answers it.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/5864
