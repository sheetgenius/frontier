---
schema_version: bitter.frontier_profile.v0
profile_id: flue
label: Flue
owner: withastro
source_contract: sources/flue.yml
homepage: https://www.flueframework.com
docs: https://flueframework.com/docs
tagline: "Astro's agent framework rebuilt itself as a Vite plugin with no workflows and no synchronous replies, and it ships your prompts and tool results to your trace backend unless you say no. Pin @flue/runtime 2.1.0."
x:
  project: flueai
repo: https://github.com/withastro/flue
surface_class: open_source_commits
evidence_floor: commit
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: changesets-channel
    finding_id: 2026-09-21-flue-release-channel-changed-changesets-per-package-github-releases-and-a-next-dist-tag
    last_verified: 2026-09-23
    status: active
  - id: broken-publishes-2-0-4-2-0-5
    finding_id: 2026-09-21-flue-2-0-4-and-2-0-5-were-broken-publishes-2-0-6-is-the-first-good-cut-after-v2-0
    last_verified: 2026-09-23
    status: active
  - id: recursion-and-abort-fixes-2-0-7
    finding_id: 2026-09-21-flue-2-0-7-fixes-harness-tool-infinite-recursion-and-lost-tool-results-on-abort
    last_verified: 2026-09-23
    status: active
  - id: tool-timeout-and-mcp-annotations-2-1-0
    finding_id: 2026-09-21-flue-2-1-0-per-tool-timeoutms-mcp-tool-annotations-preserved-configurable-trace-budgets
    last_verified: 2026-09-23
    status: active
  - id: allowed-tools-not-enforced
    finding_id: 2026-09-21-flue-docs-on-main-skill-allowed-tools-is-guidance-not-a-security-boundary
    last_verified: 2026-09-23
    status: active
  - id: agent-behavior-reference
    finding_id: 2026-08-10-flue-flue-v2-0-2-publishes-an-agent-behavior-reference-page-stating-the
    last_verified: 2026-08-10
    status: active
  - id: prompt-cache-safe-tool-additions
    finding_id: 2026-08-10-flue-flue-v2-0-2-makes-conditional-tool-additions-prompt-cache-safe-on
    last_verified: 2026-08-10
    status: active
  - id: sandbox-role-renames
    finding_id: 2026-08-10-flue-flue-v2-0-2-renames-the-sandbox-types-to-their-roles-and-replaces-the
    last_verified: 2026-08-10
    status: active
  - id: cloudflare-agents-pin
    finding_id: 2026-08-10-flue-flue-v2-0-3-takes-ownership-of-the-cloudflare-agents-sdk-pin-instead-of
    last_verified: 2026-08-10
    status: active
  - id: virtual-sandbox-default
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: model-harness-separation
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: headless-deployable-target
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: skills-markdown-first
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-06-23
    status: active
  - id: skills-typescript-native
    finding_id: 2026-06-23-flue-defineskill-typescript-skills
    last_verified: 2026-06-23
    status: active
  - id: skill-naming-ascii-spec
    finding_id: 2026-06-23-flue-skill-naming-ascii-spec
    last_verified: 2026-06-23
    status: active
  - id: connector-agent-install
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: first-party-connector-ecosystem
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-09-23
    status: active
  - id: one-zero-beta-line
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-09-23
    status: retired
  - id: durable-recoverable-execution
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-09-23
    status: active
  - id: durable-streams-transport
    finding_id: 2026-06-23-flue-event-index-decoupled-from-stream-offset
    last_verified: 2026-06-23
    status: active
  - id: actions-orchestration-primitive
    finding_id: 2026-06-23-flue-workflows-rebuilt-on-actions
    last_verified: 2026-09-23
    status: retired
  - id: define-naming-unification
    finding_id: 2026-06-23-flue-define-naming-unification
    last_verified: 2026-06-23
    status: active
  - id: run-unified-through-http-app
    finding_id: 2026-06-23-flue-run-unified-through-http-app
    last_verified: 2026-09-23
    status: retired
  - id: run-observability-private-by-default-staged
    finding_id: 2026-06-23-flue-workflow-runs-private-by-default
    last_verified: 2026-09-23
    status: retired
  - id: flue-logs-removed-staged
    finding_id: 2026-06-23-flue-logs-removed-typed-run-apis
    last_verified: 2026-09-23
    status: retired
  - id: run-observability-history
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-09-23
    status: retired
  - id: v090-breaking-migration
    finding_id: 2026-06-01-flue-v090-major-refactor
    last_verified: 2026-09-23
    status: retired
posture_basis:
  capability:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    - 2026-06-23-flue-workflows-rebuilt-on-actions
    - 2026-06-23-flue-defineskill-typescript-skills
  accessibility:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-06-23-flue-define-naming-unification
    - 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
  governance:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-06-23-flue-workflow-runs-private-by-default
    - 2026-06-23-flue-logs-removed-typed-run-apis
    - 2026-06-23-flue-workflows-rebuilt-on-actions
stance:
  use_for: "Vite and Cloudflare shops that want durable, addressable agents over HTTP, with conversations as the only durable unit and an external engine (Cloudflare Workflows, Inngest, Temporal) for anything that must be deterministic. The tool contract is now worth using: per-tool timeouts, recorded outcomes on abort, and checkpointed steps for durable tools."
  avoid_for: "Any job that must run without a model: the no-model `run()` body is gone and has no direct replacement. Synchronous request/response integrations: agent prompts always return 202. Tracing to a third-party backend before you have decided to set `content: false`. Relying on a skill's `allowed-tools` to restrict it."
  watch_next: "Whether trace content goes back to opt-in; whether the `allowed-tools` doc fix reaches a release and the type comment stops saying 'pre-approved'; whether any Flue fix ever arrives with an advisory rather than a changelog line; whether `next` prereleases start to lead stables by more than a day."
---

# Flue

Flue is the Astro team's TypeScript framework for agents, built on an
"Agent = Model + Harness" split. It is on this watchlist because it keeps
making decisions most frameworks avoid, in public: it deleted its own central
primitive, made the model mandatory for every job, and turned trace capture of
every conversation on by default. You can disagree with each call. Flue
writes each one down in its changelog.

## Where it stands, 2026-09-21

**Channel.** Pin
[@flue/runtime 2.1.0](https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.0),
released 18 September, the last of six stables between 9 and 18 September. From 2.0.7 the
project releases with changesets: one GitHub Release per package per cut
(runtime, sdk, cli, vite, react, opentelemetry and the channel and store
packages, 28 in all), tags
named `@flue/runtime@X`, and prereleases on an npm `next` dist-tag. The root
CHANGELOG stops at 2.0.6. Read `packages/runtime/CHANGELOG.md` or the release
body instead.

**Skip 2.0.4 and 2.0.5.** According to the
[changelog at v2.0.6](https://github.com/withastro/flue/blob/v2.0.6/CHANGELOG.md),
2.0.4 shipped raw `workspace:` dependency specifiers and would not install
outside the monorepo, and 2.0.5 shipped without its bundled docs. The move to
changesets came the next day.

**What 2.x is.** The rewrite that sat unreleased on main in July shipped as
[2.0.0 on 31 July](https://github.com/withastro/flue/blob/v2.0.0/CHANGELOG.md).
Flue is now a Vite plugin: `vite dev` and `vite build` own the app, and
`flue dev`, `flue build` and the terminal console are gone. Workflows are
removed with no compatibility stubs. A job is now a program that drives an
agent, through `flue run`, the SDK, or an external durable engine. The old
no-model `run()` body has no direct replacement, so every job goes through a
model. Agent prompts always return a 202; there is no `?wait=result`, and
callers read the reply from history or the stream. The homepage, fetched
2026-09-23, now describes this product rather than the 1.0 beta.

**Trace content is on unless you turn it off.** Since 2.0.0 both
`createOpenTelemetryInstrumentation()` and `createCloudflareTracing()` emit
prompts, system instructions, tool arguments and tool results, and the OTel
adapter adds exception stacks, unless you pass `content: false`. The
changelog's theory is that installing the instrumentation "is the consent".
Collapsing five knobs into one boolean and a transform is a clean design. The
trouble is which way the default points: the most sensitive payload in the
system flows to a third party because someone wired up tracing. 2.1.0 made the
56 KiB per-span budget configurable and did not change the default. Set
`content: false`, or write the transform, before you point Flue at a hosted
backend.

**The tool contract firmed up.**
[2.0.7](https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.0.7)
stops a harness tool that calls another harness tool from recursing without
bound, and an aborted submission now keeps the results of calls that finished
and records the rest as interrupted. Before it, the durable record of an
aborted batch was incomplete, which matters if you audit what a tool did. 2.1.0
adds `timeoutMs` per tool: on expiry the signal aborts and the model sees a
`ToolTimeoutError` instead of one hung call eating the submission's budget.
Put it on every network-bound tool.

**MCP hints arrive, unenforced.** 2.1.0 keeps the `annotations` an MCP server
sends, such as `destructiveHint`, and the release notes say Flue does not act
on them. Your own gate can read them. They are the server's claim about
itself, so gate on them only for servers you trust.

**`allowed-tools` limits nothing.** Flue has never enforced a skill's
`allowed-tools`, and the 2.1.0 type comment still calls them "pre-approved
tools". A
[commit on main on 21 September](https://github.com/withastro/flue/commit/c5a2a725fe)
rewrites the docs to say it is guidance, not a security boundary. That fix is in
no release. If a skill relies on the field, move the restriction into tool
code or an approval gate.

**Cost reads $0 for unknown.** 2.0.8 warns once when a Workers AI dynamic
model resolves, because those models' cost silently read as $0 on your
dashboards. Unknown, not free.

## What is unresolved

- Flue ships security-relevant fixes as ordinary changelog lines, with no
  advisory channel. Watching it means reading every package changelog.
- Whether the Vite bet lowers adoption cost for Vite and Cloudflare shops more
  than it raises it for everyone else. Nothing in the record measures that yet.
- Whether the in-browser demo chat grows into the promised new `flue dev`.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. The 2.0.0 changelog
and the homepage were re-read on 2026-09-23. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
