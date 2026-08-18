# Catch-up plan: two missed weekly windows

Opened 2026-08-17. The series is weekly and the last published issue covers
2026-07-27..2026-08-03. Two windows are outstanding. This file is the loop's
durable state: update the checkboxes as each step lands, because the loop must
survive a context compaction and the repo is the only memory that does.

Cadence is a standard, not a preference. A short, tight, on-time issue beats a
magisterial late one. If a window is thin, publish short and say it was thin.
Never widen a window to manufacture bulk.

## Windows

| | window | run_id |
|---|---|---|
| W1 | 2026-08-03 .. 2026-08-10 | `runs/2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0` |
| W2 | 2026-08-10 .. 2026-08-17 | `runs/2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0` |

Seventeen sources, first cycle for `deepseek-harness` and `omp`.
`parent_window` for W1 is 2026-07-27..2026-08-03; for W2 it is W1.

## Order of operations

Lane A is one fan-out across the whole 2026-08-03..2026-08-17 span, tagged per
change into w1 or w2 by event date. Sweeping once and splitting by date beats
two sweeps of the same surfaces: fewer fetches, and no chance of the two passes
disagreeing about the same commit.

- [x] Scaffold both run dirs
- [x] Lane B (writing): `node ops/wire/harvest-feeds.mjs --since 2026-08-03`
      -> 15/15 feeds live, 119 items -> W1 `writing.json`. Split by item date.
- [x] Lane A (primary sources): 14 researchers over 17 sources, read-only,
      channel resolved by git ancestry. Workflow `wf_2292ad80-15a`. All 14
      returned, no errors. 182 material changes: 60 in W1, 119 in W2, 3 outside.
      Channels: 128 tagged-release, 27 preview-or-beta, 12 main-unreleased,
      14 docs-only, 1 unresolved. Halves: 70 capability, 55 defect, 34 both.
      All seven carry-forward checks answered with ancestry proofs.
- [ ] Lane C (X, via Hermes on Grok): SERIALIZED, one call at a time, 20-40 min
      each. Chain: deepseek-harness (running) -> omp -> openhands -> claude-code
      -> codex -> broad. Doctor was OK at 2026-08-17.
- [ ] Adversarial receipt verification: re-fetch every receipt pinned, confirm
      it supports the exact claim, drop what does not survive.
- [ ] Capture verification: every quotable post re-fetched by URL in a second
      pass given NO expected text to anchor on. Nothing quoted from a harvest.
      Slice fragments with `ops/social/slice-quote.mjs`, never retype them.
- [ ] W1 findings -> signals -> thread check -> digest -> exemplar pass
- [ ] W2 findings -> signals -> thread check -> digest -> exemplar pass
- [ ] Wire issues (cadence is the wire's whole job; it also stopped at 08-03)
- [ ] Profiles that moved, incl. first profiles for deepseek-harness and omp
- [ ] manifest / audit / qa per run
- [ ] build + integrity + static-link green IN THE FOREGROUND, then push
- [ ] verify the live edge with a cache-busted curl after each push

## Carry-forward checks inherited from the 2026-08-03 manifest

Every one gets an answer, including the negative ones.

1. Whether OpenHands' open-source series passes 1.11.0 again, and what its
   release automation does at a number it has already published.
2. Whether the Omnigent `worktree_guard` fix reaches a tag, and whether v0.8.0
   carries it.
3. Whether Omnigent's `max_cost_usd` grows a hard stop rather than a downgrade
   gate.
4. Whether the OpenClaw workspace-boundary fix reaches a stable release.
5. Whether Claude Code's publish cadence resumes.
6. Whether Paperclip tags the review-round cap and the rest of its unreleased
   default-branch work.
7. Whether Pi's auth `print-api-key` / `print-bearer-token` commands are gated
   from the agent's own shell tool.

## Standing constraints for this catch-up

- Parallel research agents: yes. Parallel editing agents: never. Researchers
  return data; the coordinator writes, builds, and commits serially.
- Two new sources means two identity traps. Do not attribute `omp` behaviour to
  `pi-coding-agent` or the reverse; do not read DeepSeek's star count as
  adoption. A harvest once mapped a different project called "ZERO" onto the
  `agent-zero` contract.
- Never chain a build and a push without gating on the exit code. A build that
  timed out into the background is not a green build.
