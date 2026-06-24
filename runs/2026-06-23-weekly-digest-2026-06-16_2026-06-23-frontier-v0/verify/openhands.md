---
schema_version: bitter.frontier_verify.v0
provider: openhands
label: OpenHands
repo: OpenHands/OpenHands
repo_canonical_confirmed: true   # fork:false, parent:null, source:null, full_name=OpenHands/OpenHands
window_start: 2026-06-16
window_end: 2026-06-23
verifier: opus-4-8-adversarial
verify_date: 2026-06-23
method: re-fetched primary sources via gh api; channel proven by git ancestry (compare), not date
posture: tried to REFUTE each claim; claim survives only on verbatim primary-source receipt
---

# OpenHands Verification — 2026-06-16 .. 2026-06-23 (adversarial)

## Per-claim verdict table

| Claim | Verdict | Deciding verbatim receipt / decisive ancestry | Corrected framing |
|-------|---------|-----------------------------------------------|-------------------|
| **A** — no in-window tagged release; latest is 1.8.0 (bc26df351, 2026-06-10 PRE-window); no 1.9.0; latest cloud is cloud-1.38.0 (2026-06-09); every in-window finding is main-unreleased | **SUPPORTED** | `releases` API: newest tag `1.8.0`, published `2026-06-10T16:58:51Z`. `git/refs/tags/1.8.0` → commit `bc26df351dd5d833a95131556dbe2da69af82253`, commit-dated `2026-06-10T15:20:31Z`. Swept ALL 100 tags' commit dates: single most-recent is `2026-06-10T15:20:31Z` (=1.8.0); NO tag points to any commit on/after 2026-06-16. `cloud-1.38.0` → `70293480`, commit-dated `2026-06-09T21:38:56Z`. No `1.9.0` in release or tag list. | None. Channel claim holds. |
| **B** — all six prior-window items (#14752, #14773, #14168, #14795, #14770, #14741) STILL main-unreleased, not in 1.8.0 | **SUPPORTED** | All 6 merged (verified `.merged=true`). `<merge_sha>...1.8.0` = `diverged`, behind_by = 9/33/38/31/18/7 respectively — exactly matching harvest. Reverse `1.8.0...<merge_sha>` = `diverged`, ahead_by = 9/.../31 with behind_by=2 → merge commits are NOT ancestors of 1.8.0. Containment refuted in both directions for spot-checks #14752/#14168/#14773/#14795. | None. (#14168 is reverted — see C — but still "not in 1.8.0," so carry-forward statement is literally true.) |
| **C** — #14168 concurrency limits REVERTED in-window by #14877, adds migration 124 dropping the columns | **SUPPORTED** | PR #14877 title: *"fix: revert conversation limit enforcement from #14168"*; merged `2026-06-17T19:15:35Z` (in-window); merge `dd40cb1b3`. Body verbatim: *"PR #14168 added DB-backed per-org/per-user max concurrent sandbox/conversation limits. This reverts that feature..."* and *"Add migration `124_remove_max_concurrent_sandboxes.py` to drop the columns introduced by migration 120, with a downgrade that recreates them."* Ancestry `dd40cb1b3...1.8.0` = diverged, behind_by=69 → on main, not in tag. | None. True revert, in-window, columns dropped (migration 124; the columns originated in migration 120). |
| **D** — #14741 hide_personal_workspaces STILL UI-only; no in-window server-side enforcement | **SUPPORTED** | Refutation search returned ZERO: `search/issues q="hide_personal_workspaces ... merged:2026-06-16..2026-06-23"` → total_count=0. Broader `"personal workspace" merged:in-window` → only #14780 (global-skills repo loading), unrelated to access control. No in-window PR adds a server-side access boundary on personal workspaces. | None. Could not refute; "UI-only, not an access-control boundary" stands. |
| **E1** — #14867 API-key auth decoupled from Keycloak ("API-key authentication performs zero Keycloak round-trips") | **SUPPORTED** | PR #14867 title *"fix: decouple API-key (Bearer) auth from Keycloak offline sessions"*; merged `2026-06-17T14:28:50Z` (in-window); ancestry `9f03703cd...1.8.0` = diverged, behind_by=62. Receipt is VERBATIM in body checklist: *"API-key **authentication performs zero Keycloak round-trips**"* and *"a valid key authenticates with zero Keycloak round-trips."* | None. Exact phrase present (markdown bold). Trust-model framing accurate. |
| **E2** — #14697 + #14650 conversation secret enricher injecting per-user Jira DC OAuth tokens across web/Slack/API start paths | **SUPPORTED** | #14697 *"feat(jira-dc): share linked OAuth token with eligible conversations"*, merged `2026-06-16T04:45:48Z`, behind_by=48; body verbatim: *"makes the linked Jira Data Center OAuth token available to eligible web, Slack, and API-started conversations, not only Jira-triggered resolver jobs."* #14650 *"feat(jira-dc): persist and inject per-user OAuth tokens in resolver conversations"*, merged `2026-06-16T02:14:08Z`, behind_by=47; body verbatim: *"adds Jira Data Center OAuth token persistence and resolver sandbox injection so agents started from Jira can call back into Jira using the linked user credential."* Both diverged, not in 1.8.0. | None. Both in-window, main-unreleased; receipts exact. |
| **E3** — #14849 dynamic sandbox-spec service fetching from runtime-api GET /api/warm-runtime-configs | **SUPPORTED (with artifact-quality defect)** | PR #14849 *"feat: add DynamicRemoteSandboxSpecService backed by runtime-api warm configs"*; merged `2026-06-16T21:27:56Z`; body verbatim: *"fetches available sandbox specs from the runtime-api `GET /api/warm-runtime-configs` endpoint rather than relying on a hardcoded preset list ... The default spec is selected by config name (e.g. `"v1_current"`) via `OH_SANDBOX_SPEC_DEFAULT_SPEC_NAME`."* Real merge commit `56034afe10` (ahead of, contained on main; `...1.8.0`=diverged behind_by=54). Adds `dynamic_remote_sandbox_spec_service.py`. | **SHA ERROR in harvest:** harvest cites merge commit `9ab0ddb15` for #14849, but `9ab0ddb153` is actually PR #14852 (pyjwt dependabot bump). Correct merge SHA is `56034afe10f63389d3f372a2e90f22d2d8685e5b`. Claim verdict unaffected; flag for artifact correction. |

## Channel proof summary (ancestry, not date)

Every in-window finding's merge commit, compared `...1.8.0`, returns `status=diverged`
with `behind_by>0` — i.e. the commit is NOT an ancestor of the only release operators
run. 1.8.0's commit (`bc26df351`, 2026-06-10) predates all in-window merges. No tag —
mainline or `cloud-*` — points to any commit dated on/after 2026-06-16. The
enterprise/security/sandbox build-out of both this window and the prior window is
confirmed entirely unreleased.

## Refutation attempts that FAILED (claims survived)

- Tried to find any in-window tag (release or cloud-*) with a commit on/after 06-16: none.
- Tried to find any of the six carry-forward items contained in 1.8.0: all diverged.
- Tried to find an in-window server-side enforcement PR for personal workspaces: none.
- Tried to find the E1 phrase absent / paraphrased: it is verbatim in the PR body.

## Defects found (do not change verdicts)

1. **#14849 merge SHA mis-transcribed** in harvest (`9ab0ddb15` belongs to #14852/pyjwt).
   Correct: `56034afe10`. Other cited SHAs spot-checked (#14752, #14168, #14877, #14867,
   #14697, #14650) resolve correctly.
2. Receipt for E1 in harvest quotes *"API-key authentication performs zero Keycloak
   round-trips."* — verbatim present as a body checklist item (with markdown bold);
   accurate, not a paraphrase.

## Bottom line

All seven claims SUPPORTED on verbatim primary-source receipts and git-ancestry channel
proof. The headline — two consecutive windows of enterprise/security/sandbox build-out,
zero of it in any release operators run — is SAFE to publish as-is. One non-load-bearing
SHA transcription error (#14849) should be corrected in the harvest artifact for
reproducibility, but it does not affect any verdict or the channel posture.
