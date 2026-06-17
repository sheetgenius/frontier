# bitter council ergonomics journal

Live log of pain points encountered when trying to track / observe / debug a running `bitter council` macro. Append entries; don't rewrite history. Each entry: what I tried, what happened, what would have worked.

## Seeded by Claude (pre-codex-session, 2026-05-13)

These are observations from a session where I tried to track a running council from the outside. The goal-session may add more entries below as it works.

### 1. `bitter macro events` (default text mode) shows zero useful info

```
$ bitter macro events
634/634 macro events (next=634)
```

That's it. The progress bar I expected is missing — the command prints a count and exits. To get anything useful you have to know about `--json` and pipe through a parser.

**Would have worked:** Default `bitter macro events` should print at minimum: current phase, last 3 child transitions, current child + delta count. JSON should be opt-in (`--json`), not the only useful mode.

### 2. No `--help` flag — must use `bitter macro <subcommand>` to discover

```
$ bitter macro --help
... unknown subcommand '--help'. Known: run, list, last, inspect, dossier, project, events, select, synthesize, verify, replay-trace, replay-execution, repair-orphans, export-provider-lines, compare, pane, watch, defs, show.
```

The error message lists subcommands, which is great, but `--help` is a reflex for every CLI. Also: which of those 18 subcommands tells me about progress? Not obvious. `watch`, `events`, `pane`, `inspect`, `last` all sound plausible.

**Would have worked:** `bitter --help` should top-level explain macro subcommands. `bitter macro --help` should list them with one-line descriptions ("watch — live updates", "pane — live UI", "events — full stream of typed events", "inspect — point-in-time snapshot").

### 3. `bitter macro watch` errors with no message

```
$ bitter macro watch
operation: macro.failed
namespace: macro
error:
  code: ...
```

It fails but the error is opaque. The error code wasn't human-readable enough to know what argument was missing. After trying flags and finding nothing in the events output, I gave up and built my own polling loop.

**Would have worked:** `bitter macro watch` (no args) should default to "watch the current run." If there's no current run, say so. If watch needs an explicit macro_run_id, the error should say `bitter macro watch <run-id>`. The opaque `operation: macro.failed` envelope is technically correct and editorially useless.

### 4. `--json` output silently truncated in terminal at 65534 bytes

```
$ bitter macro events --json | python3 -c "import json, sys; json.load(sys.stdin)"
json.decoder.JSONDecodeError: Unterminated string starting at: line 1856 column 26 (char 65534)
```

The CLI clearly emitted full output, but piping to a python parser silently chopped it at 64k. Took five minutes to realize this was a buffer issue, not a malformed-JSON bug. Solved by redirecting to a file first.

**Would have worked:** Either: (a) this is a terminal pipe-buffer issue, not bitter's fault, but the CLI could warn when the output exceeds a threshold ("JSON output is 280KB; consider --output-file"). Or (b) provide a `--output-file path` flag so users don't have to know about pipe buffer sizes.

### 5. The progress signal IS in the event stream — just buried

What I actually wanted (current phase + per-child state + last delta) was 100% extractable from the events JSON. The structure is excellent:

```
phase: research|review|synthesis
child_id: research_claude|research_codex|...
kind: stream.start|stream.delta|stream.end
text: <actual streaming content for deltas>
```

That's everything a `bitter macro tail` would need. But I had to write 30 lines of Python to render it because no CLI surface exists.

**Would have worked:** `bitter macro tail` that prints synthesis stream live, identical to `tail -f` on a log file. `bitter macro progress` that re-renders the same per-phase/per-child summary every 2 seconds. The implementation is essentially the Python prototype I wrote at `/tmp/bitter-macro-progress.sh`.

### 6. `bitter macro inspect` shows static state, not live

`bitter macro inspect` is great for post-mortem (artifact paths, verification status, snapshot of contracts). It's not useful for "is my council 30% done or 90% done?" because it's a point-in-time snapshot of declared state, not a render of live events.

**Would have worked:** `inspect` is fine for what it does. The problem is the lack of any other "live observability" command — operators reach for `inspect` because nothing else exists, then bounce off.

### 7. Token / cost info missing entirely from the live view

Even with `--json`, I couldn't find tokens-in / tokens-out / estimated cost. The deltas carry the streaming text, not the token count. The end events don't surface cumulative usage. This matters for budget awareness: a council with `reasoning_effort=high` on `gpt-5.5` is real money, and right now you only know the total after `macro_run.json` is written at the end.

**Would have worked:** Token / cost rollup in `bitter macro progress`. Per-child and total. Even an estimate is better than nothing.

### 8. The default `bitter macro last` output is one line

```
$ bitter macro last
macro_22533a75-a68e-45c4-bbea-273731e2f044  council.research.v1  running  2026-05-13T06:17:49.859Z
```

That's the macro_run_id, definition, status, start time. Nothing about phase, children, progress. To know more I have to chain into other commands.

**Would have worked:** `bitter macro last` should default to "rich status" — current phase + per-child summary + elapsed + ETA estimate. The terse one-line output should be `--brief` or `--script` mode.

---

## What a good `bitter macro tail` would look like

```
$ bitter macro tail

[macro_22533... · council.research.v1 · synthesis (3/3)]
synthesis  ► I'll verify the doctrine citations directly in the local
              files, then synthesize the three-section recommendation
              and call out where the prior research diverged. Since this
              is editorial structure work, I'll keep it read-only.
              
              The research lenses across primary surfaces converge on
              three concepts: authority, durable work, and verification.
              Workspace appears in only 2 of 10 contracts; it is not...
```

Just the live text from the currently-streaming child, prefixed with a small header. Behaves like `tail -f`.

## What a good `bitter macro progress` would look like

```
$ bitter macro progress

macro_22533a75-a68e-45c4-bbea-273731e2f044  council.research.v1  ⏱ 4m12s
gpt-5.5 · reasoning_effort=high

phase       child                deltas  state  duration
research    research_claude         126  ✓ done  1m04s
research    research_codex            5  ✓ done    18s
research    research_gemini          80  ✓ done    47s
review      review_claude            68  ✓ done    33s
review      review_codex              1  ✓ done    07s
review      review_gemini            28  ✓ done    21s
synthesis   synthesis                12  ► live    14s (streaming)

tokens (approx)  in: 28.3K   out: 6.7K   estimated cost: $0.42
```

One command, no flags, current state, exit cleanly.

## Added by Codex goal session (2026-05-13)

### 9. Local source changes do not reach the managed `bitter` launcher until rebuilt

What I tried:

```
$ bitter macro progress macro_22533...
```

The installed launcher still pointed at the managed runtime bundle from an
older commit, so the new subcommand was only available through an explicit
source invocation:

```
$ bun /Users/c3po/co/bitter/packages/kernel/src/index.ts --no-update macro progress macro_22533...
```

That works for developer verification, but it is not the same surface the real
council commands use. It is easy to think a CLI feature is shipped when it only
exists in the working tree.

**Closed by:** Build the local Bitter bundle and install/link it before running
the real councils, then verify `bitter macro help`, `bitter macro progress`,
and `bitter macro tail` through `/Users/c3po/.local/bin/bitter`.

### 10. `macro tail last` can print an empty live-child header before any child emits text

What I tried:

```
$ bitter --no-update macro tail last
```

Right after Council 01 started, all three research children were already
marked `live`, but none had assistant output yet. `tail` chose the first live
child alphabetically, printed a header for `research_claude`, then switched to
`research_codex` once Codex produced the first actual text. That is technically
accurate, but visually noisy: an implicit tail should not make the operator
care about an empty lane.

**Closed by:** Change live tail streaming so an implicit tail waits until the
chosen child has output before printing its first header. Explicit
`--child <id>` still prints immediately, because the operator asked for that
lane.

### 11. Default live tail is inherently unstable during fanout phases

What I tried:

```
$ bitter --no-update macro tail last
```

During Council 01, the research and review phases had multiple provider
children live at once. `tail last` followed the child with the most recent
output, so the stream jumped between `research_codex`, `research_gemini`,
`review_gemini`, `review_claude`, and synthesis as fresher text arrived. That
is honest for "current output," but it is not ideal when the operator wants to
track one provider's reasoning lane.

**Closed by:** Use `bitter macro progress` as the lane index, then
`bitter macro tail --child <child_id>` for stable lane-following. The shipped
surface already supports this; the remaining possible improvement is a future
`tail --mode latest|sticky` flag if default switching keeps proving noisy.

### 12. `tail --child synthesis` fails before the synthesis child exists

What I tried:

```
$ bitter --no-update macro tail macro_a54b7267-8857-4fc0-bf01-92dd17af5923 --child synthesis
```

During Council 02 review, I wanted to park a tail on the future synthesis lane.
The command failed immediately with `kernel.macro.child_not_found` because the
child directory is not created until synthesis starts. That is correct for a
completed run, but hostile for live observation: the operator often knows which
future lane they want before it exists.

**Closed by:** For human live tails only, make explicit `--child <id>` wait
while the macro is still running if the child is not present yet. JSON snapshot
mode continues to fail fast because scripts need deterministic current-state
answers.

## Open Ergonomics Gaps — worklist for next codex session (2026-05-14)

The entries below are candidate fixes drawn from friction observed across
councils run in early May 2026 and from this journal's own previous entries.
They are ordered by Tier so the next codex session can pull from the top
without re-deciding scope. Each entry names the gap and the minimal viable
fix; full design judgment lives with the implementer.

### Tier 1 — high-leverage, small surface

1. **`bitter --help` and `bitter macro --help` return `Unknown flag`.** Universal
   CLI reflex, broken. Top-level help should enumerate macro subcommands with
   one-line descriptions. First thing every operator (and every agent) tries.

2. **`bitter council --dry-run` does not exist.** A council fan-out costs 5–10
   minutes and real provider tokens; today the operator commits blind and
   learns budget only after. `--dry-run` should print backend, model, reviewer
   roster, rendered prompt, and estimated token budget — then exit without
   fanning out.

3. **No way to name a council; `bitter macro` listings are opaque.** Twenty
   macros all read `council.research.v1`. Need `bitter council --name "<slug>"`
   stored on the macro_run, plus a derived title in listings (first non-blank
   line of the question file, truncated). Without this, finding "the council
   that pressure-tested sections" requires reading dossiers.

4. **`bitter macro tail` default switches lanes during fanout.** Entry #11 in
   this journal documents this. The shipped workaround is `--child <id>`. The
   remaining fix is `tail --mode sticky`: lock onto the first attached child
   until it finishes, then move on.

### Tier 2 — bigger work, structural value

5. **Live token + cost in `bitter macro progress`.** Approximate output-only
   `tokens~5662` today. Need per-child *input* tokens and `cost ≈ $X.XX`. This
   is load-bearing for the Bitter-as-meta-harness story (Bitter perceives
   provider cost across all watched harnesses). Requires adapter accounting
   work, not just rendering.

6. **`bitter council resume <macro_run_id>` does not exist.** Reviewer timeout
   mid-flight forces a full restart. Resume from the last completed child
   stage saves 5–10 minutes per failed run.

7. **`bitter macro events` default prints a count then exits.** Already in
   entry #4 of this journal. Default should print the last N events
   summarized; JSON becomes opt-in (`--json`).

8. **`bitter macro inspect` is a wall.** Useful for post-mortem, hostile for
   "what happened in this run." Add `--summary` for a 10-line reader-friendly
   view alongside the existing verification/contract output.

### Tier 3 — nice-to-haves, land opportunistically

9. **Macro IDs are opaque.** `macro_22533a75-...` is sortable but not
   scannable. Date-prefixed form (`m_2026-05-13_001`) reads at a glance.

10. **`bitter macro dossier <id> --diff <other_id>`** to compare re-runs of the
    same question (pressure-test against original).

11. **`bitter macro events --since-time 5m`** as a wall-clock-relative
    alternative to sequence-number `--since`.

12. **`bitter council --question-file` should accept multiple paths,**
    concatenated in order. Lets you keep a reusable preamble (research
    discipline, accept/reject format) injected before the round-specific
    question.

13. **`bitter macro doctor`** to detect and clean zombie `running` macros
    (saw 5+ stuck after one early-May session).

14. **Per-origin throttle warnings in council.** When a council backend hits
    rate limits, surface the wait visibly; currently silent.

### Operating discipline

Per the standing principle (now saved as `feedback-cli-improvements-mindset`
in operator memory): friction observed during real work goes into this
journal *immediately*, not retroactively. The raw observation is the
artifact. The next codex session should append encountered friction in
flight, not after — same pattern that produced entries 9–12 above.

## In-Flight Friction — Tier-1 CLI ergonomics pass (2026-05-14)

13. **Dry-run token estimates are necessarily approximate today.** The new
    `bitter council --dry-run` can reuse the actual research prompt composer
    and registry budget, but review/synthesis prompts depend on future child
    outputs. The current estimate uses deterministic placeholders and an
    output reserve. That is good enough for "should I fan out now?", but not
    enough for Tier-2 cost accounting.

14. **Sticky tail semantics need a persisted observer cursor.** Implementing
    `bitter macro tail --mode sticky` in the live stream path works, but the
    stickiness lives in the tailing process. If the observer restarts, it
    re-attaches from artifact state and loses the prior lane choice. That is
    acceptable for Tier 1, but a future TUI/watch surface should persist or
    expose observer cursor state when continuity matters.

15. **`bitter macro dossier last` is rejected while nearby commands accept
    `last`.** During the Tier-1 validation run, `macro list` and
    `macro tail last --mode sticky` worked, but `macro dossier last` returned
    `kernel.macro.run_not_found`. The command succeeded with no selector for
    latest. Fixed in the Tier-1 branch because it was a one-line selector
    normalization and directly affected dossier capture during validation.
