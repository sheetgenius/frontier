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

## Verification pass, 2026-08-17/18: what the adversarial lane changed

Fourteen load-bearing claims went to a verifier mandated to refute them, with an
independent second opinion on anything not confirmed on the first pass. Nine
survived untouched. Five did not, and every failure was a number or a scope
claim rather than a fabricated event: the stories were real, the arithmetic was
not.

- Agent Zero's lost CVE fix shipped broken through **11** stable releases, not
  13. Two verifiers recounted the tags independently and agreed.
- Claude Code's `stable` sits **seven** releases behind `latest`, not eight.
  2.1.230 was never published; 234 minus 226 is version arithmetic wearing a
  release count's clothes.
- Claude Code's shell-permission holes were closed in v2.1.221 **and** v2.1.223.
  Writing it as "v2.1.221 to v2.1.223" invented a contiguous run; 2.1.222
  carries none of that defect class.
- OpenClaw's boundary fix was stamped `tagged-release` and is in no
  non-prerelease tag. Wrong channel is disqualifying here of all places. The
  corrected line is stronger anyway: four stable releases shipped in the window
  and the fix is on none of them.
- Codex published **nineteen** 0.148.0 alphas, not twenty-one. alpha.3 and
  alpha.10 are git tags with no release and no npm publish; the highest suffix
  was read as a count.

**The Codex refutation corrects the W2 thesis, not just a number.** The draft
framing was that the work landed somewhere no operator could install. That is
false: `npm install -g @openai/codex@alpha` installs 0.148.0-alpha.21 today,
full platform matrix, published 2026-08-17. The true and narrower statement is
that the **default** channel stopped moving -- npm `latest` frozen at 0.147.0
since 08-07 -- while 422 commits and a model-driven risk classifier accumulated
on a channel you have to opt into by name.

So W2's thesis is not "you cannot install it." It is that the default install
stopped being the thing everybody is writing about. That survives contact with
the evidence, and the version that did not survive would have failed on this
publication's own signature argument, which is the worst place to be wrong.

## The X lane after the switch, 2026-08-18

One `grok-4.6` call at xhigh returned 41 posts from 28 distinct voices across 15
of the 17 watched projects, with 20 of them explicitly cutting against the
prevailing take and every URL well formed. For comparison, the Hermes path
produced one source per call at 20 to 40 minutes each. The lane went from a
scheduling constraint to a thing you just run.

The sweep also recorded where it is thin, which is the part worth keeping: eve
is docs links with almost no argument, omnigent is vendor posts with no user
friction, gemini-cli reads mostly as "it became Antigravity", and agent-zero has
nothing outside official clips. Those are gaps to state, not holes to fill.

Three threads in it bear directly on the two issues:

1. **Pi is the centre of gravity nobody planned.** A DeepSeek Harness engineer
   says DSH reused Pi's adaptor work and that DeepSeek researchers use Pi daily;
   Pi's own author replies that DSH's architecture is neat but Pi agents already
   do that self-extension today; a third voice argues Pi starts from primitives
   while DSH stuffs everything in. Meanwhile OMP's maintainer states the fork has
   not followed Pi since about March. That last one answers an open question
   written into sources/omp.yml at intake, from the maintainer's own mouth, and
   it needs a primary cross-check before it can be used.
2. **The W1 thesis has a practitioner saying it plainly.** On the approval
   boundary, one operator argues that limits stated in chat are not stored as
   rules, that the classifier rereads them, and that the vendor's own docs tell
   you to write a deny rule if you want a hard guarantee. That is this window's
   argument in somebody else's words, which is better than making it ourselves.
3. **A maintainer moved his own work off a rival harness** over cloud sessions
   he did not ask for. Voice, not claim, and it should be carried as voice.

Every one of these is a lead. The gists are the sweep's own words by design and
no fragment of them may be quoted; anything that becomes a card gets re-fetched
by URL in a capture pass with no expected text to anchor on.
