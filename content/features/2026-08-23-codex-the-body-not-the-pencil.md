---
schema_version: bitter.frontier_feature.v0
feature_id: 2026-08-23-codex-the-body-not-the-pencil
title: "The Body, Not the Pencil"
dek: "Sixteen months of the Codex tree show one pattern: wherever a model can absorb a judgment, the hand-written version gets deleted. The rules engine, the lockfiles, the untrusted mode are gone, and the security policy is now a prompt. The team says the quiet part out loud."
published: 2026-08-23
last_updated: 2026-08-23
window:
  start: 2025-04-16
  end: 2026-08-23
run_id: 2026-08-23-codex-study-2025-04-16_2026-08-23-frontier-v0
sources:
  - codex
status: published
what_would_settle_it:
  - "Whether <code>guardianv2</code> flips to default-on in a later stable's feature table. The file to watch is <code>codex-rs/features/src/lib.rs</code> at each new tag."
  - "Whether the classifier's work gets its own line in usage analytics. The tree cannot answer a billing question; only the dashboard can."
  - "The promised file-deletion post-mortem, and whether the training-side claims (replay evals, RL graders, filtered data) ever get a public artifact."
  - "Whether the code-mode family graduates. Its first attempt, JsRepl, is already in the removed list; a second is being built with an embedded V8 crate."
  - "Whether an embedder survives a stable-to-stable jump: the app-server surfaces changed 265 files across one 48-hour pair of stables."
---

# The Body, Not the Pencil

In the space of one month, OpenAI's Codex deleted three things an operator
could once read. [Pull request #32093](https://github.com/openai/codex/pull/32093)
removed the legacy exec policy engine, the crate that decided which commands
run without asking. [#38011](https://github.com/openai/codex/pull/38011)
removed config lockfile support. [#39630](https://github.com/openai/codex/pull/39630),
in [rust-v0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0),
retired the `untrusted` approval policy, fourteen months after
[the rename that named it](https://github.com/openai/codex/pull/1378).

What replaced them is not a better rules engine. At the same tag there is a
[markdown file](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/ext/guardian-v2/src/async_scorer/classifier_instructions.md)
that opens: "You are acting as a first-step asynchronous security reviewer."
It defines which parts of a session count as trusted, a four-level rubric for
how much the user actually authorized, a risk taxonomy, and instructions like
"Judge authorization by the material semantics, not exact syntax." The
security policy of OpenAI's coding agent is written in prose, addressed to
a model, and versioned in the tree like any other source file.

This piece reads sixteen months of that tree, and the team's public
statements alongside it, to say where Codex is actually going.

## Sixteen months, measured

The velocity is real. From the
[first commit](https://github.com/openai/codex/commit/59a180ddec4adaf9760972cdb1eb89f06a81be8b)
on 2025-04-16 to rust-v0.149.0 there are 9,577 commits; the ninety days
before this piece added 2,905 of them from 204 distinct author names. The
Rust workspace grew from 24 crates in June 2025 to 47 in October, 65 in
February, and 115 at 0.149.0. The two stable tags of 18 and 20 August are
623 commits apart from their predecessor, cut 48 hours apart.

The shape of the release train changed underneath that. Codex cut seventeen
stable minor versions in August 2025 and three in August 2026, while the
alpha line now tags near-daily -- the 0.148.0 alphas alone made 21 GitHub
releases. The stable channel is becoming a curated event; the alpha channel
is where the project actually lives, which is where its
[network egress hardening](/profiles/codex/) sat while 0.145.0 was still the
newest stable an operator could run.

The clearest instrument in the tree is the
[feature table](https://github.com/openai/codex/blob/rust-v0.149.0/codex-rs/features/src/lib.rs):
116 flags, each with a stage and a default. 38 are stable, 41 are under
development, and 34 are removed. Read it as a roadmap stapled to a graveyard.
Under development: a code-mode family, a network proxy, token and rollout
budgets, agent identity, something called Chronicle. Removed: a JavaScript
REPL, a search tool, tool search, steering, collaboration modes, remote
control, the first multi-agent mode, two whole Windows sandbox
implementations. This is a team that ships an idea, measures it, and deletes
it in public -- including ideas the rest of the field is still building.

## What they deleted, and what replaced it

Line the deletions up and they are not housekeeping. They are one policy.

The exec policy engine was the deterministic middle of the product: a
hand-authorable ruleset deciding what runs. It was
[deleted outright at 0.145.0](https://github.com/openai/codex/pull/32093),
and [the same release](https://github.com/openai/codex/pull/34271) began
editing the user's own rules file on startup, removing allow entries for
prefixes Codex no longer suggests. The crate that survives under the old
name is ten source files, and the functions its API leads with are amend
functions -- machinery for appending what got granted mid-session, not for
encoding what an administrator decided in advance. The flag for model-proposed rule
amendments, `RequestRule`, is itself in the removed list. Config lockfiles
went in 0.148.0. The `untrusted` preset went in 0.149.0. Even
[automatic compaction lost its off switch](https://github.com/openai/codex/pull/29815)
in July: the judgment of when to summarize your session is no longer yours
to disable.

What replaced the middle is a classifier. The
[guardian approval MVP merged on 2026-03-07](https://github.com/openai/codex/pull/13692);
at 0.149.0 the `guardian_approval` flag is stable and **on by default**. A
model already sits in the approval path of every default install. Guardian
V2 -- the version whose prose policy is quoted above, an asynchronous scorer
that watches the trajectory and decides whether *future* actions deserve
blocking review -- is in the stable tag and off, the state
[The Classifier Is Off](/digests/2026-08-17_2026-08-20-weekly/) reported at
its release. The publication called this window's pattern
[Rules Became Judgment](/digests/2026-07-02_2026-07-27-weekly/) in July. The
August tags finished the sentence: the rules are not just outranked, they
are being deleted.

## The team says this out loud

None of this needs inferring from commits alone; the people shipping it
narrate the philosophy in public.

In June, a Codex teammate framed the product as a software factory and
located the remaining bottleneck precisely: [[q:rohan-software-factory]].
Two weeks later the engineering lead, Tibo Sottiaux, attached the thesis to
a shipping feature: [[q:tibo-driver-seat]]. In August he told operators the
current product is temporary: [[q:tibo-primitive-in-months]]. And an AI
Engineer attendee supplied the missing design rule from a May conversation,
the only public trace of it we could find:

<!--card:vihaan-may-rule-->

The same instinct shows up around the team. The engineer whose internal
Harness Engineering writeup the team publicly credits now gives the advice
as a slogan -- [[q:lopopolo-let-it-cook]] -- and warns against growing a
rulebook of skills the model has to carry.

Set against the architecture fights elsewhere in the field --
[a fork rewriting Pi to leave it](/features/2026-08-23-oh-my-pi-without-the-pi/),
[DeepSeek Harness making the approval path a plugin](/digests/2026-08-17_2026-08-20-weekly/)
-- Codex is running a different experiment: not where the gate plugs in, but
whether the gate is code at all.

## Where the model is not trusted

The honest version of this story is not "Codex trusts the model." The same
two stable tags that deleted policy carried heavy work in `network-proxy`,
`windows-sandbox-rs`, `sandboxing`, `bwrap`, and `linux-sandbox`, and
[0.149.0 fail-closes Guardian scoring errors](https://github.com/openai/codex/pull/39307)
that 0.148.0 let fail open. Enforcement is deterministic and getting more so,
even around the classifier itself.
What moved into the model is adjudication -- the decision about what should
happen, not the mechanism that stops what should not.

July showed the design under stress. Users reported deleted files; the lead
published the failure read himself -- full access, no sandbox, no
auto-review, and [[q:tibo-deletion-incident]] -- and an operator in the
thread stated the constraint every approval design lives under:
[[q:born2code-yolo-friction]]. The August recap listed the response across
five layers: instructions, execution checks that escalate risky deletes,
harder-to-reach full access, an updated auto-review, and
[[q:tibo-layered-recap]]. Note what that list is: prompts, a classifier, and
training -- inference three ways -- wrapped around an OS sandbox. The
deterministic layer an operator could read and audit is not on the list.

The cost surfaced within days. One operator, watching auto-review analytics
vanish, guessed the work had moved to a classifier the dashboard never
showed: [[q:acsmif-invisible-guardian]]. The tags can confirm `guardianv2`
exists and defaults off; they cannot say what runs server-side or what gets
billed. When the judgment was a rules file, auditing it was reading. Now it
is a second model's transcript you may not be shown.

## The body, and the argument against it

Inside the team, the bet has a stated limit. Asked whether harnesses stop
mattering, another Codex engineer only half agreed:
[[q:pvncher-computer-use-leverage]]. Asked whether multi-agent lives in the
model or the harness: [[q:pvncher-trained-tools]]. That is not scaffolding
in the pejorative sense. It is the claim that the loop and the model are
co-trained -- which is also why the open-source question got contentious.
When a reader complained that [[q:lucasmeijer-ui-nowhere]], the lead drew
the boundary at the loop: [[q:tibo-agent-code-is-harness]]. The official
account completed the picture for embedders:
[[q:openaidevs-app-owns-approvals]]. You can have the body's skeleton under
Apache-2; the preferred skin is a closed app, and if you embed the loop,
the approvals are yours to build.

The sharpest outside attack came at the end of the window, and it is about
measurement, not safety. If the interesting behavior lives in each lab's
harness, public model rankings stop being comparable:
[[q:onusoz-standardized-pencil]]. The lead's reply is the closest thing to
a mission statement the record contains:

<!--card:tibo-brain-in-the-pencil-->

A body, not a pencil. Trained into, not wrapped around. That framing
explains nearly everything above: why deterministic policy reads to this
team as a prosthetic the next model outgrows, why the tools that stay are
the ones models are trained against, and why the harness can be Apache-2
while the advantage is not in the license.

## If you run Codex

A model is already in your approval path. `guardian_approval` is stable and
default-on at 0.149.0; "Approve for me" is the named mode. Decide whether
your audit story survives the gate being a classifier, and watch your usage
dashboard the way you watch your sandbox config, because the one receipt the
tree cannot give you is what the reviewer costs.

Treat upgrades as policy events, not just feature events. 0.145.0 edited
rules files on disk; 0.148.0 dropped lockfiles; 0.149.0 removed a preset
your config may still name. Diff your `~/.codex` after every stable, and
pin receipts to tags, because the stable channel is now three cuts a month
over a near-daily alpha train.

If you embed the loop, you are the gate. The app-server is the product
OpenAI says teams should build on, and the official line is that your
application owns approvals. The CLI's classifier does not come with the
crate.

## The harness that bets against itself

[Bitter Lesson Maxing](/bitter-lesson/) asks whether a layer becomes more
valuable or less necessary as general models improve. Codex is the first
harness we have read that answers by *deleting* its own specialized layer in
public, on the explicit bet that the next model absorbs it. On the record
above, that is not a slogan; it is a maintenance policy with a graveyard.

But note what the body metaphor concedes. A harness trained into the model
is the opposite of a replaceable one -- it is model-and-harness co-design,
the exact advantage [this publication's thesis](/bitter-lesson/) assumes
providers will keep and independents will not. The bitter-lesson harness is
not the thin harness. Thin is what you build when you cannot train the
model; deletion is what you can afford when you can.

[Amdahl's law](/amdahls-law/) says the question that matters is where the
serial human moment went. Codex's answer: out of the rules file and the
approval prompt, into a classifier you rent. The operator who ran yolo
because approvals were friction now has a reviewer that neither interrupts
nor itemizes. The attention did not disappear; it moved to auditing a
judgment you can no longer read, and to a line on a bill that, as of this
window, one operator could not find.

They deleted the rules and kept the sandbox. The judgment is a model now;
the boundary is an operating system.
