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
something more precise, and more useful. What Codex is deleting is its deterministic *defaults* -- the
built-in policy, the preset, the allowlist that guessed what was safe. What it
keeps is deterministic *constraints*: at the same tag, the surviving policy
crate still parses hand-written rules to a hard
[`Allow`, `Prompt`, or `Forbidden`](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/execpolicy/src/decision.rs),
and [#39630's own text](https://github.com/openai/codex/pull/39630) says an
untrusted project now asks about every command "unless an explicit exec policy
rule allows it." And what it grows is everything around both: threads, state,
events, approval routing, an embeddable server.

Three moves, one design. Ambiguous judgment goes to models. Hard boundaries
stay in rules and operating systems. The machinery around them thickens.
This piece reads sixteen months of the tree, and the team's public statements
alongside it, to show that design being drawn -- and what it means for
everyone who is not OpenAI.

## Sixteen months, measured

The velocity is real. From the
[first commit](https://github.com/openai/codex/commit/59a180ddec4adaf9760972cdb1eb89f06a81be8b)
on 2025-04-16 to rust-v0.149.0 there are 9,577 commits; the ninety days
before this piece put 2,905 commits on `main`, from 204 distinct author
names. The `codex-rs`
workspace grew from 24 top-level entries in June 2025 to 115 at 0.149.0. The two stable
tags of 18 and 20 August sit 623 commits apart from their predecessor, cut 48
hours apart -- while stable releases themselves became rare events: seventeen
in August 2025, three in August 2026, over a near-daily alpha train.

The clearest instrument in the tree is the
[feature table](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/features/src/lib.rs):
116 flags: 38 stable, 41 under development, 34 removed, 3 deprecated. Read
it as a roadmap stapled to a graveyard. Under development: a code-mode family, a network
proxy, token and rollout budgets, agent identity, something called Chronicle.
Removed: a JavaScript REPL, a search tool, tool search, steering,
collaboration modes, the first multi-agent mode. Some flags retire downward
into deletion; a few retire upward, absorbed into default behavior. Either
way the experiment ends in public -- including experiments the rest of the
field is still building as products.

## Three deletions, three different jobs

The deletions are not one policy, and treating them as one hides the design.

The [legacy policy engine](https://github.com/openai/codex/pull/32093) was
built-in *adjudication*: shipped heuristics that guessed which commands were
safe. The same release ran a
[one-time, scoped migration](https://github.com/openai/codex/pull/34271) of
the user's rules file, deleting exact legacy allow entries for prefixes Codex
no longer proposes -- an upgrade touching operator-owned policy on disk, but a
compatibility migration, not a license to rewrite it. The `untrusted` preset
and its allowlist were default *trust*: a canned answer to "what needs
asking." Both deletions remove the harness's own opinion while keeping the
operator's: rules an administrator writes still bind, and
[managed requirements](/profiles/codex/) can still impose them.

The [config lockfile](https://github.com/openai/codex/pull/38011) and
[auto-compaction's off switch](https://github.com/openai/codex/pull/29815)
are a different pattern. The lockfile was export, replay, and validation of
effective configuration; compaction is context lifecycle. Removing both says:
how the runtime keeps itself productive is becoming provider-owned behavior,
not an operator knob. You keep the boundaries. You are losing the freeze
switches.

The shape of the migration: defaults and internal method move into the
co-designed runtime; explicit constraints remain code you can read.

## The gate has layers

Walk one approval through the system as the tag builds it. Codex edits
freely inside its writable workspace. When it wants a path outside the
sandbox, or the network, the boundary turns that want into a request. An
explicit rule can settle it: `allow` runs "without further approval,"
`forbidden` is "blocked without further consideration," `prompt` sends it to
review -- and where several rules match,
[the policy takes the most restrictive decision](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/execpolicy/src/policy.rs).
Otherwise the request routes to a reviewer, and *who that reviewer is* is the
change this year: the
[App Server protocol](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/app-server-protocol/schema/json/ClientRequest.json)
routes approvals to a reviewer that "Defaults to `user`," or -- when the
client selects it or managed policy requires it -- to `auto_review`, "a
carefully prompted subagent" applying "a risk-based decision framework." The
schema still accepts the legacy name for that value: `guardian_subagent`.

Guardian is where judgment became inference. Its
[reviewer policy](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/ext/guardian-v2/src/async_scorer/classifier_instructions.md)
is a prose rubric, versioned in the tree like source: which parts of a session
count as trusted, a four-level scale for how much the user actually
authorized, and instructions like "Judge authorization by the material
semantics, not exact syntax." That is a real security adjudicator written in
natural language. It is not the whole security policy: the reviewer approves
or denies a boundary crossing; it does not widen the sandbox or grant itself
the network, and a `forbidden` rule is "blocked without further
consideration" before any reviewer enters it.

The flag table misleads on its own. `guardian_approval` is stable and
enabled at 0.149.0 -- the *capability* has
graduated. Routing is a separate fact: the default reviewer is still you.
"Approve for me" is a mode an operator or an organization selects. The
development that matters is not that every install already has a model in the
gate. It is that model-mediated approval is now a supported architectural
primitive, one selection away, with V2 -- the anticipatory scorer quoted
above -- in the stable tag and off, as
[The Classifier Is Off](/digests/2026-08-17_2026-08-20-weekly/) reported.

## The team narrates the bet

None of this needs inferring from commits alone; the people shipping it
describe the doctrine in public.

In June, a Codex teammate located the bottleneck: [[q:rohan-software-factory]].
Two weeks later the engineering lead, Tibo Sottiaux, attached the thesis to a
shipping feature: [[q:tibo-driver-seat]]. In August Sottiaux told operators
the current product is temporary: [[q:tibo-primitive-in-months]]. An AI Engineer
attendee supplied the design rule from a May conversation, the only public
trace of it we could find:

<!--card:vihaan-may-rule-->

The same instinct shows up around the team. The engineer whose internal
Harness Engineering writeup the team publicly credits gives the advice as a
slogan -- [[q:lopopolo-let-it-cook]] -- and warns against growing a rulebook
the model has to carry. The rule licenses deleting a heuristic the next
model will absorb. Nobody quoted here proposes deleting a boundary.

## What the trade buys, and what it costs

OpenAI has published its own case for the model in the reviewer seat, and it
is worth taking seriously. In its
[internal Auto-review deployment](https://alignment.openai.com/auto-review/),
sessions stop for human approval roughly 200 times less often than under
manual approval; the reviewer approves about 99% of the small fraction
escalated to it; and after a denial, Codex finds an acceptable path "in more
than half of cases." By 30 April 2026, a majority of internal Codex Desktop
token usage was Auto-review. Those are the vendor's own measurements of its
own deployment -- but they name the real problem this architecture attacks.

July showed it live. Users reported deleted files; the lead published the
failure read -- full access, no sandbox, no auto-review, and
[[q:tibo-deletion-incident]] -- and an operator stated the constraint every
approval design answers to: [[q:born2code-yolo-friction]]. The
[layered response](https://x.com/thsottiaux/status/2089891927659585918) was
prompts, execution checks, harder-to-reach full access, an updated reviewer,
and [[q:tibo-layered-recap]] -- inference three ways, wrapped around an OS
sandbox.

The cost is a new kind of opacity. Human judgment was slow and visible. Model
judgment is high-volume, silently upgradeable, and hard to replay. Within
days of the 0.148.0 stable, one operator watched auto-review vanish from
their analytics and guessed at invisible rerouting:
[[q:acsmif-invisible-guardian]]. The tags can show `guardianv2` present and
off by default; they cannot show what runs server-side or what gets billed.
The protocol contains the seed of the answer -- an
[unstable decision-source field](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/app-server-protocol/schema/json/ServerNotification.json)
on auto-review decisions -- but a governable gate needs the full receipt:
reviewer model and prompt version, the authorization evidence, the rationale,
the matching rule, the cost. A judgment you cannot replay is a judgment you
cannot govern.

## The limit of the bet, and the field converging on it

Inside the team, the bet has a stated boundary. Asked whether harnesses stop
mattering: [[q:pvncher-computer-use-leverage]]. Asked whether multi-agent is
model or harness: [[q:pvncher-trained-tools]]. And OpenAI's platform post
gives the strongest reason the harness is not dissolving: on ARC-AGI-3,
[retained reasoning and context compaction raised GPT-5.6 Sol's score from 13.3% to 38.3%](https://developers.openai.com/blog/codex-as-a-platform)
while cutting output tokens sixfold. The harness is not incidental to the
model; it is part of what the model *is* in production. The independent check
points the same way: on [SWE-Marathon](https://arxiv.org/abs/2606.07682), no
agent-model configuration clears 30% pass@1 across 1,300 logged attempts at
ultra-long tasks, and the failures --
poor self-verification, premature stops, reward-hacking in 13.8% of rollouts
-- are exactly the ones judgment alone does not fix.

The field is converging on the same split from the other side.
[Claude Code's hook system](https://code.claude.com/docs/en/hooks) offers
both shapes explicitly: command hooks that return an exit code with no model
in the decision path, and prompt or agent hooks that delegate the judgment
call. [A fork of Pi is rewriting itself to escape its upstream](/features/2026-08-23-oh-my-pi-without-the-pi/);
[DeepSeek Harness makes the approval path a plugin](/digests/2026-08-17_2026-08-20-weekly/);
Codex deletes its defaults and keeps its constraints. Different projects,
one emerging grammar: deterministic machinery for invariants, model judgment
for ambiguity, and an argument -- still open -- about which parts belong to
whom. When the eval side objected that this makes model rankings
incomparable -- [[q:onusoz-standardized-pencil]] -- the Codex lead's reply
was the closest thing to a mission statement the record contains:

<!--card:tibo-brain-in-the-pencil-->

A body, in the lead's telling. The record above says what kind: judgment moving
into the cortex, limits held in the skeleton, and more nerves every release.

## If you run or embed Codex

Find out who reviews your approvals. The capability is stable; the routing
defaults to you. If you or your organization selected "Approve for me,"
record that as a policy decision: which reviewer, which version, what it may
approve, where its rationale goes. Watch your usage dashboard the way you
watch your sandbox config, because the reviewer's cost is the one receipt
the tree cannot give you.

Treat upgrades as policy migrations, not feature updates. 0.145.0 migrated
your rules file once, narrowly; 0.148.0 dropped config replay; 0.149.0
removed a preset your config may still name, and the setting now fails with
an actionable error instead of being silently ignored -- the right kind of
removal. Before promoting a new stable, replay the actions
you care about: the ordinary, the ambiguous, the destructive, the
adversarial. Compare what got approved, denied, and recorded.

If you embed the loop, know what "open" means here, because the team argued
it out in public. When a reader complained that [[q:lucasmeijer-ui-nowhere]],
the lead drew the boundary at the loop: [[q:tibo-agent-code-is-harness]].
The agent code, the terminal UI, the protocol, and App Server are
[Apache-2](https://github.com/openai/codex/blob/rust-v0.149.0/LICENSE); the
desktop app is a product. And App Server hands you the reviewer route
along with the loop -- what it does not hand you is the institution:
identity, consent, which actions stay human-only, how approvals enter your
audit record. The official account said it plainly:
[[q:openaidevs-app-owns-approvals]]. Take them at their word, in both
directions.

## What we expect next

Forecasts, with their falsifiers.

First: `guardianv2` graduates. The anticipatory scorer's flag flips
default-on by year end, following `guardian_approval` from capability to
default. Refuted if it is still off in the last stable of 2026.

Second: the audit surface becomes a product. The unstable decision-source
field grows into decision events with rationales, version identifiers, and a
priced line item, because enterprises will not route approvals to a reviewer
they cannot replay or invoice. Refuted if the field is removed -- or still
marked unstable, alone, at year end.

Third: presets keep dying and constraints keep growing -- fewer named modes,
more explicit rules and managed requirements, because that is what an
enterprise-shaped gate looks like. Refuted if a new approval preset ships in
a stable this year.

Fourth: the hybrid gate becomes the field's grammar. Within two quarters,
most tier-one harnesses on [our watchlist](/profiles/) offer a model reviewer
beside their deterministic policy, the way Claude Code's hooks already pair
exit codes with prompt hooks. Refuted if, by late February, most still have
no model anywhere in the approval path -- or if one of them ships a gate that
is judgment only.

Fifth: agents get names. The roadmap carries `UseAgentIdentity` and the
workspace carries a `workload-identity` crate, and every enterprise question
in this piece -- who approved, who is billed, who is allowed -- needs a
per-agent identity to hang its answer on. Refuted if both are still under
development, or gone, at year end.

Sixth: the tool call loses ground to the code call. `CodeModeHost` is stable
and on; `CodeModeOnly` -- a flag whose name says tool calls stop being the
default path -- is in development; and the first attempt, JsRepl, was
shipped, measured, and removed. We expect the second attempt to graduate.
Refuted if CodeMode follows JsRepl into the removed list.

## Where the layer bet lands

[Bitter Lesson Maxing](/bitter-lesson/) asks which layer becomes more
valuable as general models improve. Codex's answer is not "delete the
harness." It is: delete what the next model absorbs -- heuristics, defaults,
canned trust -- and pour the savings into what it cannot: state, boundaries,
events, the protocol a person interrupts through. A harness trained into the
model is the opposite of replaceable; it is co-design, the advantage
[this publication's thesis](/bitter-lesson/) assumes providers keep. The
lesson for everyone else is not to stop building harnesses. It is to stop
building on the layer Codex just deleted -- the temporary cognitive patches
-- and to own what gets more valuable as the cortex improves: durable state,
authority, verification, the audit trail, the human boundary. The gate's
judgment may be rented. The institution around the gate cannot be.

[Amdahl's law](/amdahls-law/) says find the serial human moment. OpenAI's
own numbers say the reviewer collapses two hundred interruptions into one --
attention saved on a scale no approval UI ever managed. What it does not yet
give back is the thing the old, slow gate gave for free: a decision a person
can read afterward. The attention did not disappear. It moved downstream, to
whoever must answer for judgments made at machine volume.

They deleted the default rulebook and kept the walls. The model is one
selection away from deciding what you meant. It does not get to decide where
the walls are -- and the next fight, on this record, is whether it has to
show its work.
