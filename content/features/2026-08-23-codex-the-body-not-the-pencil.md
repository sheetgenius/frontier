---
schema_version: bitter.frontier_feature.v0
feature_id: 2026-08-23-codex-the-body-not-the-pencil
title: "The Body, Not the Pencil"
dek: "Sixteen months of the Codex tree show a division of labor being drawn: models take the ambiguous judgments, hand-written rules and OS sandboxes keep the hard boundaries, and the harness around both gets thicker, not thinner. What OpenAI deletes, keeps, and grows is a map of where every agent builder's footing moved."
published: 2026-08-23
last_updated: 2026-08-24
window:
  start: 2025-04-16
  end: 2026-08-23
run_id: 2026-08-23-codex-study-2025-04-16_2026-08-23-frontier-v0
sources:
  - codex
  - claude-code
status: published
what_would_settle_it:
  - "Whether <code>guardianv2</code> flips to default-on, and whether <code>approvalsReviewer</code> ever defaults to <code>auto_review</code> anywhere. The files to watch are <code>features/src/lib.rs</code> and the App Server protocol schema at each tag."
  - "Whether the review surface becomes auditable: decision events with rationale, reviewer model and prompt versions, and attributable cost. The protocol carries an [UNSTABLE] decision-source field today; watch it graduate or vanish."
  - "The promised file-deletion post-mortem, and any public artifact behind the training-side claims (replay evals, RL graders, filtered data)."
  - "Whether the code-mode family graduates. Its first attempt, JsRepl, is already in the removed list; a second is being built with an embedded V8 crate."
  - "Whether the App Server protocol earns embedders' trust: a declared compatibility policy or a protocol version number -- or another 200-file churn across the next pair of stables."
---

# The Body, Not the Pencil

In the space of one month, OpenAI's Codex deleted three things an operator
could once read. [Pull request #32093](https://github.com/openai/codex/pull/32093)
removed the legacy exec policy engine and its built-in default policy.
[#38011](https://github.com/openai/codex/pull/38011) removed config lockfiles.
[#39630](https://github.com/openai/codex/pull/39630), in
[rust-v0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0),
retired the `untrusted` approval preset and its known-safe command allowlist,
fourteen months after [the rename that named it](https://github.com/openai/codex/pull/1378).

It would be easy to read that as a harness deleting itself. The tree says
something narrower. Codex is deleting its deterministic *defaults*: the
built-in policy, the preset, the allowlist that guessed what was safe. It
keeps deterministic *constraints*: at the same tag the policy crate still
parses hand-written rules to a hard
[`Allow`, `Prompt`, or `Forbidden`](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/execpolicy/src/decision.rs),
and [#39630's own text](https://github.com/openai/codex/pull/39630) says an
untrusted project now asks about every command "unless an explicit exec policy
rule allows it." And it grows everything around both: threads, state, events,
approval routing, an embeddable server. Ambiguous judgment goes to models,
hard boundaries stay in rules and the operating system, and the machinery
between them thickens. The gate itself is as old as the product. On launch
day Michael Bolin, the CLI's original author, said the modes shipped [[q:bolinfest-launch-day-modes]]
What sixteen months changed is who sits in it.

## What was said, in order

The team states the doctrine in public. In June a Codex teammate located the
bottleneck: [[q:rohan-software-factory]]. Two weeks later the engineering
lead, Tibo Sottiaux, attached the thesis to a shipping feature:
[[q:tibo-driver-seat]] An AI Engineer attendee supplied the working rule from
a May conversation, the only public trace of it we could find:

<!--card:vihaan-may-rule-->

The engineer whose Harness Engineering writeup the team credits warned against
a rulebook the model has to carry, and put the alternative as a slogan:
[[q:lopopolo-let-it-cook]]

July tested it. Users reported deleted files, and the lead published the
failure read: full access, no sandbox, no auto-review, and
[[q:tibo-deletion-incident]] An operator in the thread stated the constraint
every approval design answers to: [[q:born2code-yolo-friction]] On 30 July
OpenAI moved the reviewer to a new model and said
[[q:openai-luna-reviewer-cost]]. On 4 August the lead told operators the
product itself is temporary: [[q:tibo-primitive-in-months]]

On 10 August Thorsten Ball, who builds Amp, argued
[[q:thorstenball-leverage-moved]] A Codex engineer, Eric Provencher, answered
the same day that he only half agreed: [[q:pvncher-computer-use-leverage]]
Asked later whether multi-agent work is model or harness, he said it is
[[q:pvncher-trained-tools]].

On 19 August the lead recapped the deletion fix as layers: instructions,
execution checks, a harder-to-reach full access mode, an updated reviewer,
and [[q:tibo-layered-recap]] The next day one operator watched auto-review
vanish from their analytics and guessed that
[[q:acsmif-invisible-guardian]]. Another found the part Codex kept, the
package that decides whether a command may run:
[[q:niresh-readable-rulebook]]

The openness question ran alongside. When a reader wrote that
[[q:lucasmeijer-ui-nowhere]], the lead drew the line at the loop:
[[q:tibo-agent-code-is-harness]] The official account said what that leaves
to an embedder: [[q:openaidevs-app-owns-approvals]]

And on 23 August Onur Solmaz, who works on a competing harness, made the eval
side's case: [[q:onusoz-standardized-pencil]]. The lead replied:

<!--card:tibo-brain-in-the-pencil-->

## What the tree says

The velocity is real. From the
[first commit](https://github.com/openai/codex/commit/59a180ddec4adaf9760972cdb1eb89f06a81be8b)
on 2025-04-16 to rust-v0.149.0 there are 9,577 commits; the ninety days
before this piece put 2,905 on `main`, from 204 distinct author names. The
`codex-rs` workspace grew from 24 top-level entries in June 2025 to 115. The
[feature table](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/features/src/lib.rs)
at 0.149.0 holds 116 flags: 38 stable, 41 under development, 34 removed, 3
deprecated. Removed: a JavaScript REPL, tool search, steering, collaboration
modes, the first multi-agent mode. Experiments end in public, including ones
the rest of the field still sells as products.

The deletions do different jobs. The
[legacy engine](https://github.com/openai/codex/pull/32093) was built-in
adjudication, shipped heuristics guessing which commands were safe; the same
release ran a [one-time, scoped migration](https://github.com/openai/codex/pull/34271)
of the user's rules file, deleting exact allow entries for prefixes Codex no
longer proposes. The `untrusted` preset was default trust. Both remove the
harness's opinion and keep the operator's: rules an administrator writes
still bind, and [managed requirements](/profiles/codex/) can still impose
them. The [lockfile](https://github.com/openai/codex/pull/38011) and
[auto-compaction's off switch](https://github.com/openai/codex/pull/29815)
are another pattern: how the runtime keeps itself productive becomes
provider-owned. You keep the boundaries. You lose the freeze switches.

Walk one approval through the tag. Codex edits freely inside its writable
workspace. A path outside it, or the network, becomes a request. An explicit
rule can settle it: `allow` runs "without further approval," `forbidden` is
"blocked without further consideration," and where several rules match
[the most restrictive decision wins](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/execpolicy/src/policy.rs).
Otherwise the request goes to a reviewer. The
[App Server protocol](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/app-server-protocol/schema/json/ClientRequest.json)
says that reviewer "Defaults to `user`," or, where the client selects it or
managed policy requires it, is `auto_review`, "a carefully prompted subagent"
applying "a risk-based decision framework." The schema still accepts the
legacy name, `guardian_subagent`.

That subagent's
[policy](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/ext/guardian-v2/src/async_scorer/classifier_instructions.md)
is a prose rubric versioned like source: which parts of a session count as
trusted, a four-level scale for how much the user authorized, and lines like
"Judge authorization by the material semantics, not exact syntax." It
approves or denies a crossing. It cannot widen the sandbox, and a `forbidden`
rule stops a command before any reviewer sees it.

## The dispute, line by line

**Is a model already in your approval path?** No, unless someone put it
there. `guardian_approval` is stable and enabled at 0.149.0, so the
capability has graduated; routing is a separate fact, and it defaults to the
user. "Approve for me" is a selection an operator or organization makes.
Guardian V2, the anticipatory scorer, is in the stable tag and off, as
[Approvals Belong to the App](/digests/2026-08-17_2026-08-20-weekly/) reported.

**Does an embedder get the reviewer?** Yes. App Server exposes the
`auto_review` route along with the loop. What it does not hand over is the
institution: identity, consent, which actions stay human-only, how approvals
enter your audit record. The official account's sentence holds in both
directions.

**What is open?** Settled by the license. The agent code, terminal UI,
protocol and App Server are
[Apache-2](https://github.com/openai/codex/blob/rust-v0.149.0/LICENSE); the
desktop app is not in the tree. Meijer is right about the app and wrong if
read as the whole product.

**Is the harness getting thinner?** Not on this record. The lead's "less
infrastructure" describes the defaults; the workspace grew almost fivefold
over the same sixteen months. OpenAI's own
[platform post](https://developers.openai.com/blog/codex-as-a-platform)
says retained reasoning and context compaction raised GPT-5.6 Sol's ARC-AGI-3
score from 13.3% to 38.3% while cutting output tokens sixfold. Ball's case
that the lever has moved and Provencher's that computer use still adds one
are both consistent with a tree that deletes heuristics and adds tools the
model is trained on. The independent check points the same way: on
[SWE-Marathon](https://arxiv.org/abs/2606.07682) no configuration clears 30%
pass@1 on ultra-long tasks, and the failures (weak self-verification,
premature stops) are ones judgment alone does not fix.

**What does the reviewer buy, and what does it cost?** OpenAI's case is
worth taking seriously. In its
[internal Auto-review deployment](https://alignment.openai.com/auto-review/),
sessions stop for human approval roughly 200 times less often, the reviewer
approves about 99% of what reaches it, and after a denial Codex finds an
acceptable path "in more than half of cases." Those are the vendor's
measurements of its own deployment, and so is the tenfold cost cut; neither
can be checked from outside. The cost that can be seen is opacity. The tags
show `guardianv2` present and off; they cannot show what runs server-side,
on which model, at what price. The protocol carries an
[unstable decision-source field](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/app-server-protocol/schema/json/ServerNotification.json)
on auto-review decisions, the seed of a receipt. A judgment you cannot
replay is a judgment you cannot govern.

**Pencil or body?** No receipt settles it, because it is a question about
what a benchmark is for. Solmaz wants models compared on a common harness;
the lead says the harness is part of what is being measured. The ARC-AGI-3
numbers support his description of his own product, and they are also why a
score measured in one lab's harness does not transfer to anyone else's.

## If you run or embed Codex

Find out who reviews your approvals. If you or your organization selected
"Approve for me," record it as a policy decision: which reviewer, what it may
approve, where its rationale goes. Watch the usage dashboard the way you
watch the sandbox config, because the reviewer's cost is the one receipt the
tree cannot give you.

Treat upgrades as policy migrations. 0.145.0 migrated your rules file once,
narrowly; 0.148.0 dropped config replay; 0.149.0 removed a preset your config
may still name, and the setting now fails with an actionable error instead of
being silently ignored, which is the right kind of removal. Before promoting
a new stable, replay the actions you care about (ordinary, ambiguous,
destructive, adversarial) and compare what got approved, denied and
recorded. If you wrote your own allowlist in a hook, the policy crate is
worth reading before you extend it.

## Where the layer bet lands

[Bitter Lesson Maxing](/bitter-lesson/) asks which layer gains value as
general models improve. Codex's answer is not "delete the harness." It is to
delete what the next model absorbs (heuristics, defaults, canned trust) and
spend on what it cannot: state, boundaries, events, the protocol a person
interrupts through. A harness trained into the model is co-design, the
advantage [this publication's thesis](/bitter-lesson/) assumes providers
keep. For everyone else the lesson is to stop building on the layer Codex
just deleted and to own what gains value as the model improves: authority,
verification, the audit trail, the human boundary.
[Claude Code's hooks](https://code.claude.com/docs/en/hooks) already pair
exit-code rules with prompt hooks; the split is not OpenAI's alone. The
gate's judgment may be rented. The institution around it cannot be.

[Amdahl Maxing](/amdahls-law/) says find the serial human moment. OpenAI's
own numbers say the reviewer removes almost all of them, which no approval
UI ever managed. What it does not yet give back is what the slow gate gave
for free: a decision a person can read afterward. The attention moved
downstream, to whoever must answer for judgments made at machine volume.

They deleted the default rulebook and kept the walls. The model may get to
decide what you meant. It does not get to decide where the walls are.
