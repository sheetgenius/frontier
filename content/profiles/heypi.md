---
schema_version: bitter.frontier_profile.v0
profile_id: heypi
label: heypi
owner: Ronan Berder (hunvreus)
source_contract: sources/heypi.yml
homepage: https://heypi.dev/
docs: https://heypi.dev/docs/
tagline: "The part of an agent that says no, packaged and sold separately."
compared_with:
  - pi-coding-agent
  - openclaw
  - eve
repo: https://github.com/hunvreus/heypi
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-06-24
last_full_review: 2026-06-24
claims:
  - id: governance-shell-built-on-pi
    finding_id: 2026-06-24-heypi-governance-shell-on-pi
    last_verified: 2026-06-24
    status: active
  - id: pi-coding-agent-dependency-pin
    finding_id: 2026-06-24-heypi-governance-shell-on-pi
    last_verified: 2026-06-24
    status: active
  - id: approvals-not-required-by-default
    finding_id: 2026-06-24-heypi-approvals-opt-in-not-default
    last_verified: 2026-06-24
    status: active
  - id: bash-approval-command-classifier
    finding_id: 2026-06-24-heypi-approvals-opt-in-not-default
    last_verified: 2026-06-24
    status: active
  - id: sandbox-just-bash-default-network-off
    finding_id: 2026-06-24-heypi-sandbox-runtimes
    last_verified: 2026-06-24
    status: active
  - id: gondolin-vm-runtime
    finding_id: 2026-06-24-heypi-sandbox-runtimes
    last_verified: 2026-06-24
    status: active
  - id: host-runtime-warning-not-block
    finding_id: 2026-06-24-heypi-sandbox-runtimes
    last_verified: 2026-06-24
    status: active
  - id: secret-webcrypto-handoff
    finding_id: 2026-06-24-heypi-secret-handoff
    last_verified: 2026-06-24
    status: active
  - id: secret-plaintext-at-rest
    finding_id: 2026-06-24-heypi-secret-handoff
    last_verified: 2026-06-24
    status: active
  - id: adapter-local-permissions-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: active
  - id: https-by-default-webhooks-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: active
  - id: instructions-rename-0-2-0
    finding_id: 2026-06-24-heypi-0.2.0-beta-governance-hardening
    last_verified: 2026-06-24
    status: active
  - id: admin-panel-disabled-by-default
    finding_id: 2026-06-24-heypi-admin-panel-and-audit-default-off
    last_verified: 2026-06-24
    status: active
  - id: audit-is-typed-trace-events
    finding_id: 2026-06-24-heypi-admin-panel-and-audit-default-off
    last_verified: 2026-06-24
    status: active
  - id: scaffolder-create-heypi
    finding_id: 2026-06-24-heypi-scaffolder-onboarding
    last_verified: 2026-06-24
    status: active
  - id: single-host-node-service-deploy
    finding_id: 2026-06-24-heypi-scaffolder-onboarding
    last_verified: 2026-06-24
    status: active
  - id: durability-no-crash-replay
    finding_id: 2026-06-24-heypi-durability-disclaimer
    last_verified: 2026-06-24
    status: active
  - id: memory-off-not-a-security-boundary
    finding_id: 2026-06-24-heypi-durability-disclaimer
    last_verified: 2026-06-24
    status: active
  - id: tags-only-no-github-releases
    finding_id: 2026-06-24-heypi-channel-discipline-tags-no-releases
    last_verified: 2026-06-24
    status: active
  - id: no-team-adoption-signal-yet
    finding_id: 2026-06-24-heypi-channel-discipline-tags-no-releases
    last_verified: 2026-06-24
    status: open_question
posture_basis:
  capability:
    - 2026-06-24-heypi-governance-shell-on-pi
    - 2026-06-24-heypi-sandbox-runtimes
    - 2026-06-24-heypi-0.2.0-beta-governance-hardening
    - 2026-06-24-heypi-secret-handoff
    - 2026-06-24-heypi-scaffolder-onboarding
  accessibility:
    - 2026-06-24-heypi-scaffolder-onboarding
    - 2026-06-24-heypi-secret-handoff
    - 2026-06-24-heypi-admin-panel-and-audit-default-off
    - 2026-06-24-heypi-governance-shell-on-pi
  governance:
    - 2026-06-24-heypi-approvals-opt-in-not-default
    - 2026-06-24-heypi-0.2.0-beta-governance-hardening
    - 2026-06-24-heypi-admin-panel-and-audit-default-off
    - 2026-06-24-heypi-secret-handoff
    - 2026-06-24-heypi-sandbox-runtimes
    - 2026-06-24-heypi-durability-disclaimer
stance:
  use_for: "Teams that want one shared chat-ops agent in Slack/Discord/Telegram with a code-owned, self-hosted footprint, and who will wire their own per-tool approvals and operate the admin panel to get the reviewable record."
  avoid_for: "Operators who expect approvals, an audit trail, and isolation to be on by default; anyone who needs crash-replay durability from the framework; production deployments unwilling to track a beta line or pin a stable 0.1.x tag."
  watch_next: "Whether 0.2.0 leaves beta with a stable support contract; whether the audit trail becomes a first-class, default-on, tamper-evident record rather than trace events in a default-off panel; whether approvals ever ship as a default posture rather than a primitive; and whether the Pi dependency pin drifts."
---

# heypi

## Operator Read

heypi is the part of an agent that says *no* -- packaged and sold separately. It
is a TypeScript framework that takes a minimal coding harness and wraps it in the
machinery a team needs before letting an agent touch a shared channel: approvals,
an audit record, sandboxed tools, encrypted secret handoff, scoped memory, and an
admin panel. The harness it wraps is [Pi](https://pi.dev/) -- heypi pins
[`@earendil-works/pi-coding-agent`](https://raw.githubusercontent.com/hunvreus/heypi/0.2.0-beta.0/packages/heypi/package.json)
as a hard dependency -- and that pairing is the whole thesis. Pi deliberately
refuses to bake governance into its core and tells you to *build your own
confirmation flow*. heypi is that flow, productized: the [governed chat-ops
layer](https://heypi.dev/docs/) above a harness that declines to govern.

That is a genuinely useful position, and the project is honest about its edges in
a way the frontier mostly is not. But the operator read has to separate the
landing page from the docs, because they do not say the same thing. The landing
page promises *a multiplayer chat agent for your team* with *approvals, an audit
trail, and sandboxed tools*. The docs describe a kit of governance primitives with
conservative-but-low-capability defaults, where the headline controls are things
you assemble rather than things that are on. The gap is not dishonesty. It is the
difference between what a framework *can* enforce and what it enforces *out of the
box* -- and for a tool whose entire pitch is governance, that difference is the
product.

## What heypi Actually Ships On Top Of Pi

The substrate is the story. Pi gives heypi the agent loop and the tool contract;
heypi's own packages add the operational shell around it. The dependency is
explicit and pinned --
[`@earendil-works/pi-coding-agent: ^0.79.6`](https://raw.githubusercontent.com/hunvreus/heypi/0.2.0-beta.0/packages/heypi/package.json)
-- and the sandbox is a second earendil-works package,
[`@earendil-works/gondolin`](https://raw.githubusercontent.com/hunvreus/heypi/0.2.0-beta.0/packages/heypi-runtime-gondolin/package.json),
a warm QEMU virtual machine per runtime scope. An agent is a folder:
[`instructions.md`](https://heypi.dev/docs/configuration/agent) for identity and
standing rules, `tools/` for trusted TypeScript tools, `skills/` for bundled Pi
skills, `jobs/` for scheduled work, and `extensions/` for explicit Pi extensions.
State -- sessions, approvals, trace events -- lives in a local
[SQLite store](https://heypi.dev/docs/). There is no configuration dashboard -- the
app is code you own and deploy, and the admin panel that does exist is for
inspection, not setup.

This matters because it inverts Pi's refusal without hiding it. The author said it
plainly when introducing the project: *it's built on Pi, so you can use Pi
extensions (ish)*. The "(ish)" is the honest part, and the maintenance risk worth
tracking -- heypi rides Pi's fast release churn, and a Pi breaking change can
surface as a heypi break.

*Findings: 2026-06-24-heypi-governance-shell-on-pi,
2026-06-24-heypi-sandbox-runtimes.*

## The Approval That Isn't On Yet

heypi's headline feature is approvals, and the single most important sentence in
its documentation is the one that walks the headline back:
[*approval does not make every tool call require approval. Tool confirmation does
that.*](https://heypi.dev/docs/configuration/approvals) Out of the box there is no
global approval posture. The one automatic gate is the bash runtime's
[`approval.command()`](https://heypi.dev/docs/configuration/approvals) classifier,
which blocks destructive commands, pauses for approval on risky ones, and allows the
low-risk rest. Every other tool runs ungated until the operator wires an `approval` policy
or a custom-tool `confirm` function by hand.

This is not a bug, and it is not hidden -- it sits in the docs in the second
paragraph. But it means an operator who reaches for heypi *because* of approvals is
buying a kit, not a posture. The human-in-the-loop that a Show HN commenter rightly
called [the key feature](https://news.ycombinator.com/item?id=48327336) -- *most
agent frameworks forget the human-in-the-loop part, which is critical for anything
with real side-effects* -- exists as a first-class, documented primitive. It does
not exist as a default. Before exposing a heypi bot to a channel, enumerate the
tools that must gate on a named approver and wire each one. The framework makes
that easy. It does not make it automatic.

*Findings: 2026-06-24-heypi-approvals-opt-in-not-default,
2026-06-24-heypi-admin-panel-and-audit-default-off.*

## Where The Conservatism Is Real

The defaults that *are* safe are the quieter ones, and they are well chosen. The
default runtime,
[`just-bash`](https://heypi.dev/docs/configuration/runtime), is an in-process bash
interpreter over a virtual filesystem with the network off, so the easy path is
also the contained one. Docker and the Gondolin VM are there when a deployment
needs a real boundary. The host runtimes that run against the actual machine
(`host-bash`, `guarded-bash`) are reachable, but they
[announce themselves](https://heypi.dev/docs/configuration/runtime): *for shared or
team-facing bots, prefer just-bash, Docker, or Gondolin.* That is the right
default and the right warning. But a warning is not a boundary, and for any
multiplayer bot the runtime should be an explicit, isolating choice rather than an
inherited one.

The [admin panel](https://heypi.dev/docs/configuration/admin) is disabled by
default, binds to loopback `127.0.0.1:4321`, and authenticates through a one-time
login URL that expires in five minutes, with the documentation warning *never set
it on a public host*. [Memory is off by default](https://heypi.dev/docs/configuration/agent),
and where it can be enabled the docs are blunt that write validation is *a hygiene
check, not a security boundary*. None of these will impress a demo. All of them are
the difference between a chat-ops agent that survives contact with a real team and
one that becomes an incident.

*Findings: 2026-06-24-heypi-sandbox-runtimes,
2026-06-24-heypi-admin-panel-and-audit-default-off.*

## The Audit Trail, Read Closely

The landing page lists an audit trail as a headline feature. In the docs there is
no audit-trail page. What exists is
[typed trace event persistence](https://raw.githubusercontent.com/hunvreus/heypi/0.2.0-beta.0/CHANGELOG.md)
-- messages, turns, tool calls, and approvals recorded as structured events, added
in 0.2.0-beta.0 with secret redaction -- surfaced through the admin panel's
conversation view and the [`heypi events`](https://heypi.dev/docs/configuration/admin)
command. That is a real and useful record. But it is assembled from a default-off
panel and a CLI, not delivered as an always-on, tamper-evident ledger. An operator
who wants the reviewable history the marketing implies has to turn the panel on and
operate it. "Audit trail" is the right ambition, stated one product generation
early.

*Findings: 2026-06-24-heypi-admin-panel-and-audit-default-off,
2026-06-24-heypi-0.2.0-beta-governance-hardening.*

## Secrets: Honest About The Boundary

The secret handoff is the cleanest piece of the design and a fair model for the
rest of it. The managed
[`secret_request`](https://heypi.dev/docs/configuration/secrets) flow encrypts a
credential in the browser with WebCrypto so it is *not stored as chat history and
is not sent to the model* -- a real improvement over the universal bad habit of
pasting a token into a channel. Then the docs immediately name the limit: secrets
land as files in the scoped runtime workspace, and *anyone who can read the scoped
runtime workspace can read saved secrets*; pending requests are *lost on process
restart*. The encryption protects the handoff, not the storage. Treat heypi's
secret handling as a way to keep credentials out of the transcript and the model
context -- not as a vault -- and isolate the runtime workspace accordingly.

*Findings: 2026-06-24-heypi-secret-handoff.*

## Reach: One Command, One Host, Your Code

For accessibility, heypi's pitch is the inverse of a hosted workflow platform: you
own the app. [`npm create heypi@latest`](https://raw.githubusercontent.com/hunvreus/heypi/0.2.0-beta.0/CHANGELOG.md)
scaffolds a TypeScript app, prompts for an adapter, runtime, and model, and writes
starter files; the curated model picker spans OpenAI, Anthropic, Google, and xAI.
What you deploy is [one long-running Node service](https://heypi.dev/docs/) with a
persistent state directory, where an app lock prevents a second process -- *a
guardrail, not a scaling mechanism*. The accessibility win is genuine for a team
with a developer: a shared agent in the channels people already use, with no
multi-tenant SaaS in the path and no canvas to configure. The ceiling is just as
clear. This is an owned codebase on a single host, not a click-to-deploy product,
and a team without an operator to run the Node service is not the audience.

*Findings: 2026-06-24-heypi-scaffolder-onboarding,
2026-06-24-heypi-governance-shell-on-pi.*

## What heypi Refuses To Own

heypi names its non-features, which is rarer than it should be. It explicitly
[does not replay in-flight agent turns after a crash](https://heypi.dev/); on
restart it *fails stale running calls* rather than resuming them, and pending
secret requests are dropped. This is the sharpest line between heypi and the
durability-first framing of a tool like
[eve](https://github.com/vercel/eve), whose entire headline is checkpointed,
crash-surviving execution. heypi has decided that recovery is the operator's to
own, and says so. An operator should take it at its word and not build a workflow
that assumes an interrupted turn will come back.

*Findings: 2026-06-24-heypi-durability-disclaimer.*

## Channel Discipline

heypi ships [git tags and a CHANGELOG but no GitHub Releases](https://github.com/hunvreus/heypi/tags)
at all. The line so far runs 0.1.0 (2026-05-29) through four stable patch tags to
0.2.0-beta.0 on 2026-06-23 -- and that current ship is a *beta*, with roughly two
dozen further commits sitting on `main` past the tag (admin and CSRF fixes, a dev
hot-reload toggle). The newest governance shell on the watchlist therefore exhibits
the same merged-versus-shipped gap as everything it sits beside: the most recent
work is one channel ahead of the most recent release. Pin 0.1.3 for a stable
surface, or adopt the beta and track `main` deliberately -- but do not run a beta
as though it were a supported stable line.

*Findings: 2026-06-24-heypi-channel-discipline-tags-no-releases,
2026-06-24-heypi-0.2.0-beta-governance-hardening.*

## How heypi Differs From Its Neighbors

heypi is legible mostly by contrast, and three contrasts matter.

Against [**Pi**](https://pi.dev/), the substrate: Pi is a minimal harness that
refuses governance in its core and hands you the agent loop. heypi is the
governance layer Pi told you to build yourself. They are not competitors; one is
the floor the other stands on.

Against [**OpenClaw**](https://docs.openclaw.ai/), its own stated reference point:
the project began as *Openclaw, but for teams*. OpenClaw is a single-user gateway
that puts a personal assistant in your chat apps; heypi is multiplayer by
construction -- one agent a whole team shares, with approver and admin identities
scoped per adapter. Where OpenClaw's authority model is per-sender, heypi's unit is
the shared channel.

Against [**eve**](https://github.com/vercel/eve), the durability-first foil: eve is
*the framework for building agents* in the Next.js mold -- filesystem-defined,
durable by default, running on a managed platform. heypi is governance-first and
ownership-first: an app you self-host, centered on approvals and an audit record,
that explicitly disclaims the crash-replay durability eve leads with. The contrast
is not that one governs and the other does not -- both document human-in-the-loop.
eve's [HITL docs](https://eve.dev/docs/human-in-the-loop) make approval gates
(`needsApproval`, with `always`/`once`/`never` and custom predicates) and an
`ask_question` pause-the-agent tool first-class, and tie them to a durable
pause-and-resume that parks the run at `session.waiting` until a human answers,
then continues -- across a crash. The divergence is the default and the locus:
heypi documents its approvals but ships them off until you wire them, on a host you
own; eve makes the gate a durable platform primitive. Same axis, opposite emphases.

*Findings: 2026-06-24-heypi-governance-shell-on-pi,
2026-06-24-heypi-approvals-opt-in-not-default,
2026-06-24-heypi-durability-disclaimer.*

## Open Questions

- Is the git tag or the npm publish the canonical ship signal, given heypi cuts no
  GitHub Releases? The channel an operator should track is not yet stated.
- Which governance surfaces will become default-on rather than opt-in as the
  project matures -- approvals especially? Today only the bash classifier gates
  anything automatically.
- Will the audit trail become a first-class, default-on, tamper-evident record, or
  remain typed trace events viewed through a default-off panel?
- What exactly does Gondolin isolate relative to Docker and `just-bash`? The
  runtime docs name it; the isolation depth is not described.
- **Adoption is unproven (open_question, verified 2026-06-24).** heypi is small and
  early -- on the order of 100 GitHub stars at first harvest, with a 3-point Show HN.
  Its editorial value here is category position, not demonstrated team uptake; the
  "multiplayer chat agent for your team" claim has no public deployment evidence yet.

## What To Watch Next

- Whether 0.2.0 leaves beta with a stated support and upgrade contract.
- Whether approvals or the audit trail ever ship as a default posture rather than a
  wired-by-the-operator primitive.
- Pi dependency drift: heypi pins `^0.79.6`; a Pi breaking change is a heypi risk.
- Whether the secret-at-rest story tightens beyond plaintext files in the workspace.
- Any move from single-host ownership toward a managed or multi-tenant surface,
  which would change the "an app you own" positioning.

## Profile Hygiene

This profile follows the discipline in `RESEARCH_CONTRACT.md#profile`: every
concrete claim in the prose carries an inline source link and a `claims:` entry;
posture sections interpret freely but cite finding IDs when naming a specific
feature, behavior change, or cross-provider comparison. Cross-provider editorial
belongs in the weekly digest; the contrasts here are scoped to locating heypi, not
to synthesizing the field.

Note on `evidence_floor: official_docs` despite `surface_class: open_source_commits`:
heypi is an early project whose operator-visible behavior (approval semantics,
sandbox runtimes, secret handling, admin/audit) is canonically described in its
maintainer-authored docs at heypi.dev. Version, channel, and dependency claims are
sourced more precisely -- tags and CHANGELOG at `release_note`, the Pi/Gondolin
dependency pins at `commit` precision from `package.json`. Per the contract
clarification, the floor matches the strictest precision the source can be
reasonably harvested at; a future cycle can upgrade specific behavior claims to
`commit_diff_reviewed` against the heypi source tree. All claims are seeded from
the 2026-06-23..2026-06-24 introduction run; the `no-team-adoption-signal-yet`
claim is carried as an `open_question` (an absence asserted from the absence of
public adoption evidence).
