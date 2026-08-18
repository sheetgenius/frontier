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

## How the posts sit in these two issues

Direction taken 2026-08-18, and it matches what the archive's best issue already
does rather than overriding it.

**The posts go at the structural positions, not in the margins.** The lede, the
turn of each argument section, and the last line of the issue. They are the
reason a person reads this rather than a changelog, and burying them in a
pull-quote sidebar wastes the most valuable material in the run.

**The grounded research is what frames them, and that is what makes it
cohesive.** Neither half works alone. A post without a receipt is a rumour with
good timing; a receipt without the post is a changelog with a byline. The shape
that works, from "Rules Became Judgment": open on somebody announcing good news
on X, then let the primary record turn it -- two days later the next version
recorded what was actually true, and the release that fixed it got no post. The
post supplies the human stake, the receipt supplies the correction, and the
sentence that lands is the one the reader repeats.

That issue also closes on a post rather than on findings, and the close is the
strongest line in it. Both of these issues should close on a voice post that
carries the argument, never on reference material. The build already fails an
issue that ends on reference material; ending on a person is the positive form
of the same rule.

**Working assignments, subject to the capture pass and to Grok's read:**

- W1 opens on the operator arguing that limits stated in chat are not stored as
  rules, that the classifier rereads them, and that the vendor's own docs say to
  write a deny rule if you want a hard guarantee. Framed against Claude Code's
  own changelog: commands that could hide part of themselves from the approval
  dialog, closed in v2.1.221 and v2.1.223. He described the mechanism before the
  changelog admitted it.
- W2 opens on the maintainer who moved his own work off a rival harness because
  talking to the agent spun up cloud sessions he did not ask for. Framed against
  the channel record: npm latest frozen at 0.147.0 since 08-07 while nineteen
  alphas and 422 commits shipped past it.
- The Pi thread is a candidate for a section of its own in W2 and needs Grok's
  read on whether it is a real story or three posts pushed into a narrative.

**Grok is a collaborator on these articles, not a fetcher.** It is consulted at
the structural stage, while the shape is still open, because it can see how this
conversation reads to the people inside it and we cannot. Editorial authority
stays here and every product claim still clears the primary record, but "which
post carries this argument" and "where would our framing read as an outsider"
are questions it is better placed to answer than we are.

## Amendment, 2026-08-18: both working ledes were wrong

Grok was brought in as a collaborator while the shape was still open, given the
verified spine and all 41 posts, and told to disagree. It did, on both ledes,
and it was right both times. The full read is archived at
`runs/2026-08-18-x-social-harvest-.../grok/editorial-consult.md`. Two of the
corrections are to sentences already written into this plan, so they are
recorded here rather than quietly dropped.

**Correction 1. Elia did not scoop the changelog.** This plan said he "described
the mechanism before the changelog admitted it." That does not survive anyone
opening both links. He described a memory problem in the classifier: stated
limits are not stored as rules, the classifier rereads the transcript, and
compaction can drop an instruction with no signal. The changelog admitted a
display problem in the approval dialog, an allowlist that failed open, and a
five-minute window where MCP admin controls were skipped. Those rhyme. They are
not the same bug. The defensible sentence is that he named the layer the vendor
is asking operators to trust, and called it the soft one.

**Correction 2. The W2 lede was built on a phrase that is not in the post.**
This plan had the OpenClaw maintainer moving his work off a rival harness
"because talking to the agent spun up cloud sessions he did not ask for." He
wrote the opposite: he moved TO OpenClaw, and the cloud sessions are the feature
he was recommending, in his own product. Framing that against a frozen npm tag
is two unrelated facts held together by the word "default." The
against-consensus tag on that post is also wrong and is withdrawn: a maintainer
preferring his own harness is not a contrarian position.

**Corrected ledes.**

- W1 opens on the Claude Code maintainer answering, in public, how auto mode is
  safer than the bypass flag: skip does not check at all. Capture the parent
  too, where she stands on a study of 1,053 testers who caught a clearly
  dangerous prompt 13.6 percent of the time against the classifier's 89. Quoting
  only the reply makes us look like we arrived in the middle of the thread.
  Frame it against v2.1.221 and v2.1.223, the Antigravity allowlist that
  auto-approved every command, and Codex putting a model in the approval seat.
  The week was not "users discovered the prompt was lying." It was a vendor
  telling operators that taking the click away is the safety improvement. That
  is a claim a receipt can turn; a complaint is not.
- W2 opens on a Pi maintainer calling DeepSeek Harness unfinished and still the
  first new harness that made him want to reopen his own design choices. Frame
  it against the DSH kernel: the approval gate is itself a plugin that a later
  plugin can prepend to, and nothing authenticates the Web UI.

**W2's thesis moves, and the channel finding goes to the operator brief.** "The
default channel stopped moving" is what we learned by resolving git ancestry. It
is the correct brief and it is not the editorial. Between 08-13 and 08-17 the
harness timeline was one event, and an issue led on npm tags would read as
having missed it. The issue is the kernel: a plugin can prepend to the thing
that was supposed to stop it.

**Both halves, W1.** An issue of only approval holes is a defect log. The
capability half is the same maintainer's `/fork` post: the session copies, the
old in-session reporter becomes `/subtask`. Frame against `AGENTS.override.md`
loading before trust resolves and standard-trust agents getting default-open
write to any company-visible issue. More surface for the agent to operate, on
purpose, in the same week the approval seat is handed to a classifier. One
story, not two.

**Do not put the OMP maintainer in the DeepSeek section.** His
"we have not followed Pi since March" line is 81 views, dated 08-05, and answers
a direct question about staying in sync. It belongs in the OMP profile, where it
closes an open question written into `sources/omp.yml` at intake. His other line,
that a notebook-style kernel "is not an innovation," is about a different
project entirely; placing it near DeepSeek would make him look like he is
dunking on them. That is adjacency-as-prosecution and the no-pile-on rule exists
for exactly it. At most one of his five posts, in the OMP note.

**Capture the parents, not just the replies.** The Lydia thread's parent with the
study, and the architecture essay that Mario is actually correcting. Quoting a
correction without the claim it corrects is how a publication sounds like it
walked into the room for the last sentence.

**Titles on the table.** W1: "Shown Less Than Ran" (preferred), "The Classifier
Rereads", "Safer Than You". W2: "The Gate Is a Plugin" (preferred), "Everything
Loads First", "The Kernel Has No Privilege".

**The argument we were missing**, and it is worth a section rather than a line:
who is allowed to rewrite the harness, in what language, and at what time. Our
receipts cover whether authority binds. The conversation is about self-extension
as a design bet, skills-versus-plugins as a language bet, and portable
instruction files as the layer that survives swapping the harness. That last one
is this publication's own thesis happening in public, and W1 holds the receipt
that turns it: `AGENTS.override.md` loads before project trust is resolved.
