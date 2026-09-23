---
schema_version: bitter.frontier_harvest.v0
provider: omnigent
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/omnigent.yml
channels_present: [tagged-release, main-unreleased]
window_volume: 4 stable tags (v0.11.0 to v0.14.0), 3 advisories published (1 critical, 2 high, all fixed in v0.14.0), 11 material changes; two shared-session security fixes main-unreleased at close
lane: primary sources, researcher; omnigent-ai/omnigent releases, advisories, compare API, PR merge ancestry, pinned raw reads of cost.py, qwen_executor.py, policies/types.py, feature_flags.py, elicitation routes
---

# Harvest -- omnigent (primary sources)

Punctuation is ASCII. Repo omnigent-ai/omnigent (identity confirmed: `gh api repos/omnigent-ai/omnigent` -> full_name omnigent-ai/omnigent, default_branch main, description "an open-source AI agent framework and meta-harness: orchestrate Claude Code, Codex, Cursor, Pi, and custom agents..."; matches contract). Tags are cut from release branches, so tag-to-tag compares are `diverged`; first-containing-tag below was resolved per merge SHA with `compare <sha>...<tag>` behind_by=0. Findings about behavior through a wrapped harness are findings about the pair.

## Release ledger

| Tag | SHA | Published (GitHub) | PyPI upload | Prerelease | vs previous stable |
|---|---|---|---|---|---|
| v0.10.0 (baseline) | 40755dd8 | 2026-08-19T04:34:41Z | 2026-08-19T00:57:34Z | false | -- |
| v0.11.0 | 496b7b13 | 2026-08-25T20:10:48Z | 2026-08-25T17:52:30Z | false | diverged ahead_by=124 behind_by=3 |
| v0.12.0 | f04b0354 | 2026-09-01T22:18:22Z | 2026-09-01T21:15:30Z | false | diverged ahead_by=306 behind_by=1 |
| v0.13.0 | eebef804 | 2026-09-09T14:56:32Z | 2026-09-09T14:29:07Z | false | diverged ahead_by=386 behind_by=2 |
| v0.14.0 | fc89a3ba | 2026-09-15T13:06:10Z | 2026-09-15T13:00:15Z | false | diverged ahead_by=269 behind_by=7 |

Tags without GitHub releases in window: daily `v0.1X.0.devYYYYMMDD` tags (v0.13.0.dev20260902 through dev20260909, v0.14.0.dev20260910 through dev20260915, v0.15.0.dev20260916 through dev20260921) and rc tags (v0.13.0rc1-rc3, v0.14.0rc1). PyPI lists only stables. CHANGELOG.md at v0.14.0 tops out at `## [v0.13.0] -- 2026-09-09`; v0.14.0 notes live only on the GitHub release body (same lag pattern as v0.10.0). Newest in-window pin for all code reads: v0.14.0.

## 1. Three bundle-upload advisories published 2026-09-16, all fixed in v0.14.0 by one PR

- **Date:** advisories published 2026-09-16; fix released 2026-09-15
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #7457 "fix: align bundle validation and MCP approval retries", merge 4a406d5b (merged 2026-09-15T08:24:06Z). compare 4a406d5b...v0.14.0 status=ahead ahead_by=6 behind_by=0 (contained). compare 4a406d5b...v0.13.0 diverged behind_by=7 (not contained). Advisory records: GHSA-598r-29w2-g93q critical CVSS 9.9 CWE-22 affected >=0.3.0,<=0.13.0 patched 0.14.0; GHSA-q5jc-8hqr-9hm4 high 8.8 CWE-94 affected <=0.13.0 patched 0.14.0; GHSA-p5x3-3gqh-x44g high 8.8 CWE-22/CWE-668 affected <=0.13.0 patched 0.14.0. No CVE IDs assigned at observation.
- **Receipt:** https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-q5jc-8hqr-9hm4
- **Half:** defect (closed) | security-relevant | **Confidence:** high

**What changed.** What each actually allows, all requiring an authenticated user who can upload an agent bundle to a multi-user server:
- GHSA-q5jc: the policy-handler allowlist, the defense the June advisory family relied on, was skipped for the single-file omnigent YAML shape and never read the `function:` key. A policy with `function: {path: <module.attr>}` was imported and called at session start before the `callable()` check: arbitrary Python import-and-call on the runner/server. The policy system itself was the RCE vector.
- GHSA-598r: a terminal's `os_env.cwd` was not validated on upload and wins over the runner workspace at runtime, so with `sandbox.type: none` it yields an unconfined host shell outside the workspace. `OMNIGENT_RUNNER_WORKSPACE` does not mitigate it.
- GHSA-p5x3: the same cwd check did not recurse into sub-agents; mitigated by `OMNIGENT_RUNNER_WORKSPACE`.
The advisories state the fix enforces the upload boundary only; it does not change terminal runtime cwd precedence, and trusted local configurations are out of scope.

**Operator consequence.** Upgrade any server that accepts bundles from more than one user to v0.14.0. Before upgrading, re-audit uploaded bundles for `function:` policies with no `handler`/`callable`, absolute or `..` cwd on terminals and sub-agents. Do not treat a registered-handler allowlist as containment on <=0.13.0. Single-user local installs are outside the stated threat model.

## 2. Carry-forward: spend caps are gated before the next call on already-reconciled spend; the orchestrator-attached sub-agent cap became approvable

- **Date:** cost.py changed in v0.13.0 (2026-09-09); unchanged into v0.14.0
- **Channel:** `tagged-release`
- **Ancestry evidence:** cost.py blob 5b4ca596 (47665 bytes) identical at v0.10.0, v0.11.0, v0.12.0; blob 3df98b5d (51953 bytes) at v0.13.0 and v0.14.0. PR #6505 merge c4eb1276, first containing tag v0.13.0. Module docstring at v0.14.0 lines 1-50: gates at the request phase (before the LLM turn) and tool-call phase, reading cumulative `event["context"]["usage"]["total_cost_usd"]`, "Cost is refreshed at turn boundaries, so a single very expensive turn can still overshoot before the next check." `max_cost_usd` is still described as a "downgrade gate," not a hard stop. Unpriced models fail closed (DENY when token usage is present but `total_cost_usd` absent). Diff v0.12.0 -> v0.14.0 touches only `subagent_cost_budget`: new `_SUBAGENT_OVER_BUDGET_APPROVED_KEY`; with `expensive_models` omitted or empty, the first over-cap gate now returns ASK ("Approve to lift the cap and continue") instead of DENY.
- **Receipt:** https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/policies/builtins/cost.py
- **Half:** both | economics | **Confidence:** high (code read at tag)

**What changed.** Answer to the contract question: the check runs before a call, but it compares against spend already incurred and reconciled at turn boundaries. It can refuse the next turn or tool call; it cannot stop the turn that crosses the cap. The top-level `cost_budget` is unchanged since July. The sub-agent budget (usually attached by the orchestrating model at spawn, per #6505 a budget the user never set blocked at 12.6x its cap with no warning) no longer hard-stops: a human approval lifts it. Approvals in a shared session are resolvable by any editor (item 4).

**Operator consequence.** Size `max_cost_usd` with one turn of headroom; it is a gate on the next call, not a meter. If you relied on a model-attached sub-agent cap as a hard stop, it is now an approval prompt on v0.13.0+; put a top-level `cost_budget` with empty `expensive_models` on the root if you need a stop that does not ask.

## 3. Budgets did not reach native descendants in any in-window tag; scheduled-task caps attach fail-open

- **Date:** #4791 in v0.11.0 (2026-08-25); #7369 merged 2026-09-18
- **Channel:** `tagged-release` (#4791); `main-unreleased` at window close (#7369)
- **Ancestry evidence:** #4791 merge 03b6ee51, first containing tag v0.11.0. #7369 merge 51b9c146: not contained in v0.10.0 through v0.14.0 (behind_by>0 for each); compare 51b9c146...main behind_by=0; also in v0.15.0 (2026-09-22, OUT). No cherry-pick with that PR number in v0.14.0's first-parent commit subjects since 2026-08-19.
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/7369
- **Half:** defect | economics | **Confidence:** high on channel; PR-body level on behavior

**What changed.** #7369 says a native descendant with no locally attached policies could skip policy evaluation even when its root session had a cost budget; the fix routes descendants through the engine to inherit root policies and read shared tree spend. It also states it applies to stored root-session policies generally. Separately, v0.11.0 lets scheduled tasks set `max_cost_usd`, which auto-attaches a `cost_budget` on each firing; per #4791 the attachment is non-fatal: if the policy store is unavailable or create fails, "the session proceeds uncapped."

**Operator consequence.** On every installable tag in the window (v0.10.0 through v0.14.0), a root-session budget or stored policy did not bind native child sessions that had no policies of their own. Treat root caps as covering the root only until you run v0.15.0 or later (out of window, needs its own check). For scheduled tasks, verify the policy row exists on each fired session rather than trusting the task field.

## 4. Carry-forward: shared-editor approval did not narrow; adjacent editor powers did, two of them only on main

- **Date:** #6557 in v0.13.0 (2026-09-09); #7619 merged 2026-09-17; #7750 merged 2026-09-21
- **Channel:** `tagged-release` (#6557); `main-unreleased` at window close (#7619, #7750)
- **Ancestry evidence:** Approval route at v0.14.0: `omnigent/server/routes/sessions/routes/elicitations.py` `resolve_elicitation` calls `_require_access_and_level(user_id, session_id, LEVEL_EDIT, ...)` (lines ~115-118); the "ownership check" inside `_resolve_elicitation` compares the elicitation's registered session, not the user (`_harness_elicitation_owners.get(elicitation_id) == session_id`). #6557 merge 369101fe first tag v0.13.0. #7619 merge a405cab6 and #7750 merge 4595e372: not in v0.14.0, behind_by=0 vs main and vs v0.15.0 (OUT). No GHSA published for #7619 or #7750 at observation.
- **Receipt:** https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/server/routes/sessions/routes/elicitations.py
- **Half:** defect | security-relevant | **Confidence:** high (code at tag for approval; PR bodies for #7619/#7750)

**What changed.** Tool approvals remain any-editor, as in v0.10.0. Three other shared-session paths were tightened: v0.13.0 makes workspace file reads for view-only sharees an owner opt-in (`share_workspace_files`) after read-only shares served `.env` and key files verbatim (#6557). On main only at close: the environment shell proxy accepted `LEVEL_EDIT`, so an editor could run any command on the owner's machine outside every policy and approval gate (#7619, "security fix reported out of band"); and an editor could replace a session-scoped agent bundle whose code runs with the owner runner's authority (#7750).

**Operator consequence.** On every in-window tag, sharing a session as editor gives the editor a shell on the owner's host through the shell proxy, bypassing Omnigent policy entirely. Do not grant edit on a session whose runner is your workstation until you run a build containing a405cab6 and 4595e372 (v0.15.0, out of window). Read-only shares on v0.12.0 and earlier expose workspace secrets; upgrade to v0.13.0+.

## 5. Governance layering: on policy-server outage, native Claude/Codex tool calls now defer to the harness's own dialog

- **Date:** 2026-09-09 (v0.13.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #6429 merge 3f0d9771 first tag v0.13.0. #6055 merge ae47c337 first tag v0.13.0.
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/6429
- **Half:** both | governance layering | **Confidence:** high on channel; PR-body level on behavior

**What changed.** This is the first documented answer to the contract's layering question for a failure case. Before v0.13.0, if the Omnigent policy server was unreachable, claude-native and codex-native PreToolUse hooks denied every tool call (meta-harness refuses). From v0.13.0, PreToolUse returns no opinion and the wrapped harness's native approval dialog decides; `UserPromptSubmit` stays fail-closed as the only pre-turn gate for native sessions. Other native harnesses (hermes, opencode, kimi) keep fail-closed. Separately, #6055 made agent-declared output policies (`response`/`llm_response`) actually enforce on runner-relayed claude-sdk sessions: before v0.13.0 a DENY verdict let the denied text stream and persist as a normal message.

**Operator consequence.** For the Omnigent + Claude Code and Omnigent + Codex pairs on v0.13.0+, an Omnigent tool DENY is not guaranteed during a policy-server outage; the harness's own permission mode governs. If the harness is in a bypass or auto mode, nothing asks. Keep a harness-native deny list for anything that must not run, not only an Omnigent policy. If you used output policies on claude-sdk before v0.13.0, they were advisory; re-audit transcripts.

## 6. Omnigent now answers wrapped harnesses' safety prompts and flips their approval routing

- **Date:** v0.11.0 (2026-08-25), v0.12.0 (2026-09-01), v0.13.0 (2026-09-09)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #4018 (live Claude Code permission-mode switching) and #5346 (per-automation permission mode) first tag v0.11.0; #5056 (ACP honors `permission_mode` for unattended runs) first tag v0.11.0; #4585 merge cbd800fe first tag v0.12.0; #5864 merge 8488dfc7 first tag v0.13.0; #6926 (offer auto mode on Claude permission prompts) first tag v0.14.0.
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/5864
- **Half:** both | governance layering | **Confidence:** high on channel; PR-body level on behavior

**What changed.** Capability: operators can switch Claude Code permission modes live from the Omnigent UI and set a permission mode (including Bypass permissions) per scheduled automation; ACP agents can run unattended. Defaults the meta-harness now sets on the wrapped harness: v0.12.0 pre-accepts Claude Code's one-time bypass-permissions consent dialog via an invocation-local `--settings` sidecar (`skipDangerousModePermissionPrompt`) whenever a launch requests bypass; the PR states it does not write the user's config and cannot defeat MDM because Claude checks org policy first. v0.13.0 completes the default codex-native "Auto" stance with `-c approvals_reviewer="auto_review"`, so escalated Codex approvals (for example an out-of-workspace write) are settled by Codex's automatic reviewer instead of the human; the PR notes this also applies to local interactive `omnigent codex` launches in the bare default stance.

**Operator consequence.** On v0.13.0+, a codex-native session left on the default stance no longer asks you about escalated commands; set an explicit approval policy if you want a human in that loop. A scheduled task with Bypass permissions runs Claude Code with no consent prompt and no one watching. Attribute these behaviors to the pair: the wrapped harness's approval surface is still there, but Omnigent now pre-answers it.

## 7. Policy engine hardening: spawn bounds persist, sub-agents enforce their own guardrails, verdicts are attributed

- **Date:** v0.13.0 and v0.14.0
- **Channel:** `tagged-release`
- **Ancestry evidence:** #6043 merge ac99ec20 first tag v0.13.0; #4001 merge b203ba4c first tag v0.14.0. policies/types.py blob 1c4a0862 at v0.10.0 -> 08790d8d at v0.14.0; the diff adds only `deciding_policy_workspace_id` to the verdict type. #6126/#6172 (audit logs for admin and session policy API mutations) merged 2026-09-02. #6357 (fail loud when an --agent policy function cannot be resolved) and #7433 (reject mismatched native permission callbacks with 409) are main-unreleased at close.
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/4001
- **Half:** defect (closed) | **Confidence:** high on channel for #6043/#4001; release-note level for audit logs

**What changed.** Before v0.14.0 the `spawn_bounds` fan-out cap reset on every deployed tool call because each call built a fresh engine with an empty counter; the count now persists per session. v0.13.0 enforces a sub-agent's own guardrails on its conversation. Policy API mutations are audit-logged and denials carry the owning workspace id.

**Operator consequence.** If you relied on `spawn_bounds` to limit fan-out on a deployed server before v0.14.0, it did not bind; re-check fleet cost for that period. On any tag through v0.14.0, a policy function that fails to resolve may not fail loudly (#6357 unreleased); test that each custom policy actually loads.

## 8. Carry-forward: ACP result-phase fail-open unchanged; Usage page still flag-gated

- **Date:** re-read at v0.14.0
- **Channel:** `tagged-release`
- **Ancestry evidence:** `omnigent/policies/types.py` at v0.14.0 line 80: `FAIL_CLOSED_PHASES = ("PHASE_TOOL_CALL", "PHASE_REQUEST")`; comment at line 72 still says PHASE_TOOL_RESULT is intentionally not included. `omnigent/inner/qwen_executor.py` changed (blob 2f878c55 at v0.10.0/v0.11.0 -> 7a7f37e6 at v0.12.0 -> 8e2cecc0 at v0.13.0/v0.14.0) but `_fs_result_policy_denies` at v0.14.0 lines 831-841 still returns False when the evaluator is unwired and on evaluator exception ("result phase fails open"); `_handle_fs_write` docstring (lines 927-935) still says a result-phase denial refuses the response without undoing the write. `omnigent/server/feature_flags.py` at v0.14.0 (blob ec709ba7): `Feature.USAGE_PAGE = "usage_page"`, and "Unset or empty means every release feature" is off; `canvas` joined the gated set in v0.13.0.
- **Receipt:** https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/inner/qwen_executor.py
- **Half:** neither (unchanged) | **Confidence:** high

**Operator consequence.** Same as August. Do not treat v0.14.0 as a fix for ACP delegated file I/O policy; call-phase is the only enforceable gate for those writes. Set `OMNIGENT_FEATURES=usage_page` to see spend. `deny_tag_push` still defaults true: github.py blob 23d5197e identical v0.10.0 through v0.14.0.

## 9. Capability: more sandboxes, more harnesses, per-person git identity

- **Date:** v0.12.0 to v0.14.0
- **Channel:** `tagged-release`
- **Ancestry evidence:** release bodies v0.12.0, v0.13.0, v0.14.0.
- **Receipt:** https://github.com/omnigent-ai/omnigent/releases/tag/v0.13.0
- **Half:** capability | **Confidence:** high on release-note claims; code not line-audited

**What changed.** v0.12.0: Antigravity harness, Devin and Grok Build in the picker, ACP sub-agents (for example Devin) appear as child sessions with tool calls in the transcript, import of existing local Claude Code/Codex sessions, `omni host enable` as a user service; breaking: bare `omni` starts the host, legacy PTY transport removed. v0.13.0: libkrun microVM (`sandbox.provider: microsandbox`) and self-reclaiming Kubernetes agent-sandbox providers, auto-reaping of offline sandboxes, Jcode ACP harness, git and `gh` authenticated as the user's own connected account inside the sandbox, OAuth client-credentials and Vault Transit credential store; breaking: tmux 3.3+ required, `omnigent-canvas` extension removed. v0.14.0: Gensee sandbox provider, Kubernetes tolerations, CockroachDB backing store, multi-repo sandboxes, pending approvals survive server/runner restarts, and "tool approval retries retain the arguments that were reviewed" (#7457).

**Operator consequence.** Try microsandbox if you ran `sandbox.type: none` for speed; every bundle advisory in item 1 is scoped to unsandboxed runners. The v0.14.0 approval-retry fix matters: before it, a retried approval could run arguments other than the ones a human reviewed.

## Carry-forward answers

2 (Omnigent). Tags after v0.10.0 in window: v0.11.0, v0.12.0, v0.13.0, v0.14.0 (all prerelease=false). v0.15.0 is 2026-09-22, OUT. Spend caps: pre-call gate on post-hoc reconciled cumulative spend (item 2); cannot stop the crossing turn; sub-agent block-all cap is now approvable (v0.13.0); root budgets did not bind policy-less native descendants on any in-window tag (item 3). ACP result-phase fail-open: did not move (item 8). Shared-editor approval: not narrowed; approvals still LEVEL_EDIT at v0.14.0 (item 4). Usage page: still gated behind OMNIGENT_FEATURES (item 8).

3. Layering: on policy-server outage the wrapped Claude Code/Codex harness's own dialog refuses or not (v0.13.0, item 5); Omnigent now pre-answers the harness's bypass consent and routes Codex escalations to Codex's auto-reviewer by default (item 6). Security fixes: items 1, 4, 5, 7.

## Operator questions settled

- "When an Omnigent policy and the underlying harness's own permission system disagree, which one refuses?" Documented for one case: on policy-server outage, the harness's native dialog decides PreToolUse for claude-native/codex-native (#6429). In normal operation an Omnigent DENY at PreToolUse still blocks. Not documented on docs pages, only in PRs.
- "Are spend caps enforced before a call is made, or reconciled after it?" Both: gated before the next call, on spend reconciled after previous calls. Overshoot of one turn is by design per the docstring.
- "Is the governance work in the tag an operator installs, or on main?" At close, the shell-proxy owner check, session-agent mutation owner check, inherited-budget enforcement, and native-callback mismatch rejection were all main-only.

## Researcher lane notes

The window's pattern: the policy layer was both the RCE vector (GHSA-q5jc) and the thing that silently did not bind (spawn bounds reset, output policies advisory on claude-sdk, root budgets skipped on native descendants). Each fix landed, but three of the most operator-relevant ones sat on main at close.

## Observed after window close

- v0.15.0rc1 and v0.15.0 tagged 2026-09-22 (PyPI upload 2026-09-22T15:10:55Z); contain #7369, #7619, #7750, #7433, #6357. main is ahead of v0.14.0 by 307 at observation 2026-09-23 (includes post-window commits).

## Surfaces checked

- `gh api repos/omnigent-ai/omnigent` (identity), releases list, tags list
- Release bodies v0.11.0, v0.12.0, v0.13.0, v0.14.0
- Security advisories list and full records for GHSA-598r-29w2-g93q, GHSA-q5jc-8hqr-9hm4, GHSA-p5x3-3gqh-x44g
- PyPI JSON upload times
- compare between consecutive tags; per-PR merge SHA vs v0.10.0..v0.14.0, main, v0.15.0 for 22 PRs
- PR search (merged 2026-08-19..2026-09-21) by approval/owner/sandbox/policy/budget/permission/security; PR bodies #4001, #4585, #4791, #5864, #6055, #6429, #6505, #6557, #7369, #7433, #7619, #7750
- Raw at tag: cost.py (v0.12.0, v0.14.0, blob SHAs at all five tags), qwen_executor.py, policies/types.py, feature_flags.py, github.py blob SHAs, server routes (elicitations.py, _sessions/orchestration.py) at v0.14.0
- CHANGELOG.md headings at v0.14.0
- v0.14.0 commit subjects since 2026-08-19 (cherry-pick check)

## Not reached

- https://omnigent.ai/docs returned a redirect (307) the fetch did not resolve to content; docs-page wording on policies, spend caps and layering not read this window.
- Scheduled-task permission-mode and live mode-switch code (#5346, #4018) not line-audited.
- Whether a scheduled task's Bypass mode is subject to any Omnigent policy before launch not established.
