---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-correction-on-a-policy-server-outage-claude-code-and-codex-tool-calls-get-an-explicit-ask
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/native/native_policy_hook.py#L543-L584
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/tests/test_native_policy_hook.py#L378-L390
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/native/native_policy_hook.py#L540-L580
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/pull/6429
    precision: merged_pr
  - url: https://github.com/omnigent-ai/omnigent/pull/8665
    precision: merged_pr
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/types.py#L66-L80
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-correction-on-a-policy-server-outage-claude-code-and-codex-tool-calls-get-an-explicit-ask

Correction: on a policy-server outage, Claude Code and Codex tool calls get an explicit ask, not no opinion, and response checks now give up after two minutes. The September read of this, taken from the PR body, was wrong in the part that matters. Since v0.13.0, when a claude-native or codex-native session cannot reach the Omnigent policy server (after up to 30 seconds of retries), the PreToolUse hook does not abstain. It returns an explicit `ask`, and Omnigent's comments and tests say that choice was made because abstaining "fails open in bypassPermissions/acceptEdits". Prompt submission still blocks, PostToolUse fails open, and devin-native and kimi-native sessions deny. One v0.18.0 change completes the picture: policy evaluations that cannot park on a human, the response and tool-result phases, now give up after at most 120 seconds and fail open "exactly as before", instead of holding a turn open for hours.

Channel: tagged-release. Half: both. Date: 2026-10-13 (re-read at v0.18.0; outage behavior since v0.13.0; #8665 first ships in v0.18.0).

Operator consequence: The layering answer for an outage: Omnigent pushes the decision into the harness's own prompt rather than letting a bypass-mode harness run silently, provided the harness honors a hook `ask` in that mode. Confirm that on the Claude Code and Codex versions you run before relying on it, and keep a harness-native deny list for anything that must never run. Response and tool-result policies (output checks, redaction after the fact) are advisory under failure and now give up within two minutes.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/native/native_policy_hook.py#L543-L584
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/tests/test_native_policy_hook.py#L378-L390
- https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/native/native_policy_hook.py#L540-L580
- https://github.com/omnigent-ai/omnigent/pull/6429
- https://github.com/omnigent-ai/omnigent/pull/8665
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/types.py#L66-L80
