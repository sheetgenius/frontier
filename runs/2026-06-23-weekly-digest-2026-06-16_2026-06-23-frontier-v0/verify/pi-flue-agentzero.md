# Adversarial Verification — Pi / Flue / Agent Zero

Window: 2026-06-16 .. 2026-06-23. Verifier: Opus 4.8 adversarial pass.
Method: re-fetched primary sources via `gh api`; quoted verbatim; proved
channel by tag ref type and merge-commit ancestry.

## CLUSTER 1 — Pi coding agent (repo `earendil-works/pi`)

Canonical repo confirmed: `earendil-works/pi` (NOT `badlogic/pi-mono`). All
release bodies, PR #5962, and tags resolve against `earendil-works/pi`.

| Claim | Verdict | Deciding verbatim receipt | Corrected framing |
|---|---|---|---|
| **A** — In-window releases v0.79.6..v0.79.10, all tagged-release, all published 2026-06-16..06-23; v0.79.5 is prior-window boundary (06-16T17:56Z), excluded | **CONFIRMED** | `gh api repos/earendil-works/pi/releases`: v0.79.6 `published 2026-06-16T22:00:56Z`, v0.79.7 `2026-06-18T16:23:49Z`, v0.79.8 `2026-06-19T07:55:20Z`, v0.79.9 `2026-06-20T20:17:09Z`, v0.79.10 `2026-06-22T09:16:23Z`; all `draft:false, prerelease:false`. v0.79.5 `published 2026-06-16T17:56:13Z` (`draft:false`) — sits BEFORE v0.79.6's 22:00Z, so it is the prior-window boundary. | None. 5 in-window tagged releases exactly as claimed. |
| **B** (top signal) — v0.79.10 (PR #5962) adds `reason` + `willRetry` to extension `session_before_compact`/`session_compact` events; channel = tagged-release | **CONFIRMED** | Release body v0.79.10, verbatim: "**Extension compaction event context** - Extension `session_before_compact` and `session_compact` events now include `reason` and `willRetry`, so extensions can distinguish manual `/compact`, threshold auto-compaction, and overflow retry flows." Added section: "Added `reason` and `willRetry` metadata to extension `session_before_compact` and `session_compact` events so extensions can distinguish manual, threshold, and overflow compaction flows ([#5962] by [@PizzaMarinara])." **Channel proof:** tag ref `refs/tags/v0.79.10` is `type:commit` sha `8e1900...`; PR #5962 `merged_at 2026-06-22T08:36:17Z` to `base:main`, merge_commit `5b9b70...`; `compare v0.79.10...5b9b70` → `status:behind, behind_by:5` (merge commit is an ancestor of the tag, i.e. shipped in v0.79.10). | None. Verbatim, in a published tagged release. |
| **C** — No new GOVERNANCE/trust surface added to core this window; project-trust static | **CONFIRMED (not refuted)** | Across all 5 in-window bodies, the only governance/trust touchpoints are documentation/UX fixes, not new core surface: v0.79.10 "Fixed the usage docs slash command table to include `/trust` and `/import`" (docs-table fix, ref [#5959]); v0.79.7 "Updated extension docs, examples, runtime help, trust prompts, and config labels to use the configured project config directory instead of hardcoded `.pi` paths" (label/path rename, not a new trust mechanism). No new `/trust` capability, no project-trust schema change. | None. The `/trust` mentions are doc/label refactors; refutation attempt failed. |

## CLUSTER 2 — Flue (repo `withastro/flue`)

| Claim | Verdict | Deciding verbatim receipt | Corrected framing |
|---|---|---|---|
| **D** — `/releases` empty (`[]`); CHANGELOG.md is receipt; in-window tags v1.0.0-beta.1 (06-16) & v1.0.0-beta.2 (06-18); large `## Unreleased` stages further work | **CONFIRMED** | `gh api repos/withastro/flue/releases` → `[]`. Tag `v1.0.0-beta.1` → commit `05f9d4...` "chore: release v1.0.0-beta.1" dated `2026-06-16T08:29:38Z`; `v1.0.0-beta.2` → commit `2352ef...` "chore: release v1.0.0-beta.2" dated `2026-06-18T05:01:41Z`. CHANGELOG.md opens with a multi-entry `## Unreleased` section. No tag newer than beta.2. | None. |
| **E** (top signal) — runs PRIVATE-BY-DEFAULT; receipts shrink to `{ runId }`; `streamUrl`/`offset` dropped; `flue logs` REMOVED | **CONFIRMED AS WRITTEN, BUT CHANNEL MISFRAMED — staged in `## Unreleased`, NOT shipped in an in-window tag** | All three live verbatim in CHANGELOG `## Unreleased` only: (logs) "**The `flue logs` command is removed.** Use SDK `client.runs.get()`, `client.runs.events()`, or `client.runs.stream()` for typed run inspection, or consume the raw `/runs/:runId` APIs. The owning workflow must still export `runs` middleware for HTTP access." (private-by-default) "existing runs are private over HTTP unless the workflow separately exports `runs: WorkflowRunsHandler`... Workflow HTTP and SDK admission receipts are now `{ runId }`, and waited results are `{ runId, result }`; remove uses of workflow `streamUrl` and `offset`". **REFUTING evidence on channel:** the in-window shipped tag `1.0.0-beta.1` CHANGELOG still treats `flue logs` as a working command — "`flue logs` treats `--since` as an opaque Durable Streams offset, supports `--format ndjson`, and uses public run metadata" — and beta.1's run envelope is still "`{ streamUrl, offset, runId? }`". Latest `main` commit is `2026-06-22T20:34:38Z` "Add unified resource run and console", UNTAGGED. | The signal content is real and verbatim-backed, but it is **main-unreleased**, not delivered in the v1.0.0-beta.1/beta.2 in-window tags. Digest must label it "staged in `## Unreleased` on main; not in any released tag this window." Presenting it as a shipped in-window change would be inaccurate. The literal sub-claims ("`flue logs` removed", "runs private-by-default") are NOT refuted as facts about main; they ARE refuted as facts about the in-window releases. |
| **F** — `sources/flue.yml` now has a changelog surface naming CHANGELOG.md as canonical receipt (harvester said already resolved) | **CONFIRMED RESOLVED** | `sources/flue.yml` contains a `primary_surfaces` entry `id: changelog, kind: changelog_file, url: https://github.com/withastro/flue/blob/main/CHANGELOG.md, priority: 1` with note: "Canonical receipt surface. Flue publishes no GitHub Releases (github.com/withastro/flue/releases is empty), so cite the version-tagged CHANGELOG.md (or a release tag) as the receipt, never the /releases page. Surfaced by the 2026-05-28_2026-06-03 run audit (item 2)." | None. Genuinely resolved — does NOT point only at the empty /releases page. Harvester's "already resolved" claim is accurate. |

## CLUSTER 3 — Agent Zero (repo `agent0ai/agent-zero`) — verifying the NEGATIVE

| Claim | Verdict | Deciding verbatim receipt | Corrected framing |
|---|---|---|---|
| **G** — Silent window: latest tag v1.20 (2026-06-04, pre-window); zero commits to default branch in-window; latest merged PR #1676 is 2026-06-11 (pre-window) | **CONFIRMED (silent window holds for the DEFAULT branch) — with one disclosure** | `default_branch = main`. `commits?since=2026-06-16&until=2026-06-23&sha=main` → length `0`; same query without `sha` (default branch) → `0`. Latest `main` commit is `2026-06-04T15:29:53Z` "Make file browser paths editable". Releases: top tag `v1.20` `published 2026-06-04T16:32:20Z` (pre-window); no tag past v1.20. Latest merged PR is #1676 "feat: major improvements to native Telegram integration UX and streaming", `merged_at 2026-06-11T02:11:12Z`, `base:ready` (pre-window). **DISCLOSURE (does NOT refute):** the non-default integration branch `ready` had `23` commits in-window (latest `2026-06-23T00:21:44Z` "Refine welcome screen setup surfaces"). All merged PRs target `base:ready`, not `main`. | Silent-window claim is scoped to the **default branch (`main`)** and is TRUE: zero in-window commits, no in-window tag, no in-window merge to main. Activity exists on the pre-merge `ready` branch but has not landed on the default branch and shipped no release — so it does not reach an operator via the canonical surface. Digest should add the one-line caveat that `ready` (their staging branch) is active, to avoid a future "but they were committing" rebuttal. |

## Summary of corrections required

1. **Flue top signal (E):** must be reframed from "shipped this window" to
   "**staged in `## Unreleased` on `main`, not in any in-window release tag
   (beta.1 / beta.2).**" The in-window beta.1 CHANGELOG still documents
   `flue logs` as functional and still uses the `{ streamUrl, offset }`
   envelope. The facts are real; the channel/timing framing was wrong.
2. **Agent Zero (G):** silent-window verdict holds for the default branch;
   add the disclosure that the `ready` staging branch saw 23 in-window
   commits (none merged to `main`, no release).
3. Pi A/B/C and Flue D/F survive intact with verbatim primary receipts.
