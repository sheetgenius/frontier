---
schema_version: bitter.frontier_profile.v0
profile_id: pi-coding-agent
label: Pi Coding Agent
owner: Earendil Works (formerly badlogic / Mario Zechner)
source_contract: sources/pi-coding-agent.yml
homepage: https://pi.dev/
docs: https://pi.dev/docs/latest
tagline: "Refuses to govern, ships what it merges, and now lets an installed extension own your provider credentials."
x:
  maintainers:
    - handle: badlogicgames
      name: Mario Zechner
repo: https://github.com/earendil-works/pi
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-07-27
last_full_review: 2026-07-27
claims:
  - id: typebox-extension-sdk-validation
    finding_id: 2026-05-06-pi-thin-harness-provider-churn
    last_verified: 2026-05-06
    status: active
  - id: terminating-tool-results
    finding_id: 2026-05-06-pi-thin-harness-provider-churn
    last_verified: 2026-05-06
    status: active
  - id: provider-retry-timeout-controls
    finding_id: 2026-05-07-pi-thin-harness-churn
    last_verified: 2026-05-07
    status: active
  - id: session-dir-env
    finding_id: 2026-05-07-pi-thin-harness-churn
    last_verified: 2026-05-07
    status: active
  - id: earendil-works-package-migration
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-05-12
    status: active
  - id: jsonc-models-json
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-05-12
    status: active
  - id: harness-stream-configuration
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-05-12
    status: active
  - id: security-hardening-cluster
    finding_id: 2026-06-02-pi-coding-agent-oauth-hardening
    last_verified: 2026-06-03
    status: active
  - id: compaction-event-context
    finding_id: 2026-06-23-pi-extension-compaction-event-context
    last_verified: 2026-06-23
    status: active
  - id: selective-provider-base-entrypoints
    finding_id: 2026-06-23-pi-selective-provider-base-entrypoints
    last_verified: 2026-06-23
    status: active
  - id: mistral-prompt-cache-cost-accounting
    finding_id: 2026-06-23-pi-mistral-prompt-caching
    last_verified: 2026-06-23
    status: active
  - id: dependency-and-session-path-hardening
    finding_id: 2026-06-23-pi-vulnerable-dependency-update
    last_verified: 2026-06-23
    status: active
  - id: no-governance-in-core
    finding_id: 2026-06-23-pi-extension-compaction-event-context
    last_verified: 2026-06-23
    status: open_question
posture_basis:
  capability:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
    - 2026-06-23-pi-extension-compaction-event-context
    - 2026-06-23-pi-selective-provider-base-entrypoints
  accessibility:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
    - 2026-06-23-pi-selective-provider-base-entrypoints
  governance:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
    - 2026-06-23-pi-extension-compaction-event-context
stance:
  use_for: "Embedding agent functionality in custom UIs and runtimes -- Cloudflare Workers, custom CLIs, CI runners -- where you own the product surface and the governance layer. Also the reference case for release honesty on this watchlist: two commits between the newest tag and the default branch, deterministic checksummed source archives, and a medium-severity dependency advisory closed in a tagged release four days after publication."
  avoid_for: "Operators who want built-in subagents, plan mode, approval prompts, or MCP -- Pi ships none of them by design and delegates sandboxing to Gondolin, Docker, or OpenShell. Anyone installing `@mariozechner/pi-coding-agent`, which is frozen at 0.73.1 and never received the protobufjs fix; the live package is `@earendil-works/pi-coding-agent`. And anyone pinning against the SDK without tracking versions: it took two breaking changes in nine days, and credential storage stopped being a public surface."
  watch_next: "Whether extension-registered providers -- which can now own authentication and request dispatch -- get any review or capability boundary, since extension review is now credential review with no prompt to catch it; whether `PI_SESSION_FILE` in every bash subprocess gets a scope or an opt-out; whether the `/base` entry points become a genuinely separate lean SDK; and whether the phantom-tag pattern recurs, since a git tag on this project is not proof of a release."
---

# Pi Coding Agent

## Operator Read

Pi is a deliberately minimal terminal coding harness from
[Earendil Works](https://github.com/earendil-works/pi). Its identity is a
refusal: no subagents, no plan mode, no approval prompts, no MCP, no governance
in core. The core stays small and the platform grows through extensions. That
posture is unchanged after ten tagged releases, and Pi's own README at `v0.82.1`
still says so.

What changed in the 2026-07-02 to 2026-07-27 window is the price of the refusal.
[`v0.81.0`](https://github.com/earendil-works/pi/releases/tag/v0.81.0) lets an
extension register a complete provider with its own authentication, model
refresh, filtering, and custom streaming. An installed extension can now acquire
credentials and dispatch requests, and Pi supplies no permission prompt to catch
it. Extension review is credential review. That is a coherent consequence of the
design rather than a contradiction of it, but it is a materially larger trust
decision than installing a tool.

Set against that, Pi is the cleanest project on this watchlist to reason about.
[`compare/v0.82.1...main`](https://github.com/earendil-works/pi/compare/v0.82.1...main)
reports two commits, both housekeeping. When `main` and the tag are the same
artifact, the gap between what is fixed and what you can install closes -- and
so does the space where a public claim about the project is unverifiable. Pi ran
two commits ahead of its tag while Hermes ran 1,712.

> **Current release**: `v0.82.1` (2026-07-25), on npm as
> `@earendil-works/pi-coding-agent@0.82.1`. Ten tagged releases landed in window,
> `v0.80.5` through `v0.82.1`, none of them prereleases. The `legacy-node20`
> dist-tag sits at `0.74.2`.

## Our own defect, and what it cost

State this plainly, because it is the largest error in the record and it is ours.

`sources/pi-coding-agent.yml` watched
[`@mariozechner/pi-coding-agent`](https://www.npmjs.com/package/@mariozechner/pi-coding-agent),
whose `latest` dist-tag is `0.73.1`, published 2026-05-07 and never republished.
The live package is
[`@earendil-works/pi-coding-agent`](https://www.npmjs.com/package/@earendil-works/pi-coding-agent/v/0.82.1),
which reached `0.82.1` on 2026-07-25, and
[`package.json` at `v0.82.1`](https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/package.json)
carries the `@earendil-works` name. For eleven weeks this publication read Pi as
static while it shipped ten tags, and we did not surface the protobufjs advisory
fix described below. The contract was corrected on 2026-07-27.

The operator-facing half matters more than our embarrassment. Anyone still
installing `@mariozechner/pi-coding-agent` is nine minor versions behind and has
received no update since 2026-05-07, including the dependency fix. Check the
scope on your install line before you check the version number.

There is a second, smaller version-truth hazard on this project.
**`v0.80.4` is a phantom tag.** It exists in git at commit `912d0953f6`, dated
2026-07-09, with the message `Release v0.80.4`. There is no GitHub release and
no npm publish; the registry jumps from `0.80.3` straight to `0.80.5`. Anything
that compares version strings against git tags will report a release nobody can
install. Pin to npm versions on this project, not to tags.

## Two breaking changes in nine days

Pi's SDK is its adapter surface, so an SDK break is a product break for everyone
embedding it.

[`v0.80.7`](https://github.com/earendil-works/pi/releases/tag/v0.80.7)
(2026-07-14) removed the `openai-responses` `compat.sendSessionIdHeader` flag
from `models.json`. Session affinity is now controlled by
`compat.sessionAffinityFormat` with values `"openai"`, `"openai-nosession"`, or
`"openrouter"`; a previous `sendSessionIdHeader: false` becomes
`sessionAffinityFormat: "openai-nosession"`.

[`v0.80.8`](https://github.com/earendil-works/pi/releases/tag/v0.80.8)
(2026-07-16) is the bigger one. `CreateAgentSessionOptions.authStorage` and
`modelRegistry` are replaced by an async `modelRuntime` option. `AuthStorage`
and its storage backends are **no longer exported**; consumers must use
`ModelRuntime`, a custom pi-ai `CredentialStore`, or `readStoredCredential()`
for one-off reads of `auth.json`. `ModelRegistry.getApiKeyAndHeaders()` becomes
`ModelRuntime.getAuth()`, and extension-facing `ModelRegistry.refresh()` changed
from synchronous `void` to `Promise<void>`, so extensions must await it before
any synchronous registry read.

The direction is defensible -- every request-auth decision now routes through
one method instead of a scattered credential surface. The consequence is that
credential storage stopped being a public SDK surface, and anyone who reached
into `AuthStorage` is broken. A widely shared community recipe for building a
DIY Pi web UI, published 2026-07-21, was pinned to `0.80.6` APIs and was already
two breaks stale on the day it circulated. Pi moves fast in a small surface;
that is not the same as a stable one.

## Supply chain: the clean case of the window

Two things here, and both deserve credit.

**A dependency advisory closed in four days.**
[`v0.82.0`](https://github.com/earendil-works/pi/releases/tag/v0.82.0)
(2026-07-24) updated the packaged `protobufjs` to 7.6.5 to address
[GHSA-j3f2-48v5-ccww](https://github.com/advisories/GHSA-j3f2-48v5-ccww)
(CVE-2026-59877, severity medium, a denial of service via infinite loop in
`.proto` option parsing), published 2026-07-20. The
[tracking issue](https://github.com/earendil-works/pi/issues/7005) was opened and
closed on 2026-07-23. Advisory to tagged fix in four days, and the fix is what
npm serves as `latest`. Across a window where this publication kept finding
repairs stranded on branches or behind stable channels, that is the shape the
rest of the field should be measured against.

**Pi became independently rebuildable.**
[PR #6913](https://github.com/earendil-works/pi/pull/6913), shipped in
[`v0.81.1`](https://github.com/earendil-works/pi/releases/tag/v0.81.1), adds
deterministic, checksummed source archives to GitHub releases with
[documented instructions](https://github.com/earendil-works/pi/blob/v0.81.1/README.md#building-standalone-binaries-from-release-source)
for rebuilding the standalone binaries; `v0.82.0` followed by including the
generated provider model data those builds need. You can verify what you run
against a checksum and rebuild it yourself. That is the strongest supply-chain
posture on the current watchlist, and it is worth noting that the project with
the fewest governance features has the most verifiable artifact.

## What the window handed to subprocesses

[`v0.82.0`](https://github.com/earendil-works/pi/releases/tag/v0.82.0) exposes
`PI_SESSION_ID`, `PI_SESSION_FILE`, `PI_PROVIDER`, `PI_MODEL`, and
`PI_REASONING_LEVEL` as
[environment variables](https://github.com/earendil-works/pi/blob/v0.82.0/packages/coding-agent/docs/environment-variables.md#bash-tool-session-environment)
to commands run by built-in and factory-created bash tools
([PR #6971](https://github.com/earendil-works/pi/pull/6971)). Direct RPC bash
commands also gained streaming
[`bash_execution_update`](https://github.com/earendil-works/pi/blob/v0.82.0/packages/coding-agent/docs/rpc.md#bash_execution_update)
events correlated with request IDs.

For an operator building a governance layer on top of Pi, this is exactly the
input you wanted: session identity, provider, model, and reasoning level
available to whatever you run. It also means `PI_SESSION_FILE` hands every
command Pi launches a first-class pointer to the full session transcript. A
hostile or merely careless script no longer has to find your history; the path
is in its environment. Pi's own vendor post announcing the change named the
model and provider variables and did not mention this one.

Both readings are true at once, which is the honest version of Pi's whole
bargain: it exposes the primitives cleanly and leaves the consequences to you.

## Capability, briefly

Everything below is `tagged-release`.

- **Constrained tool sampling** (`v0.82.0`): tools can prefer or require strict
  JSON Schema sampling or OpenAI Lark/regex grammars, with generated capability
  metadata (`supportsGrammarTools`, `supportsStrictTools`)
  [preventing unsupported requests](https://github.com/earendil-works/pi/blob/v0.82.0/packages/ai/README.md#constrained-sampling-for-tools)
  across OpenAI, Anthropic, Bedrock, Gemini, and Mistral.
- **Cache-friendly dynamic tool loading**
  ([PR #6474](https://github.com/earendil-works/pi/pull/6474), `v0.80.7`):
  extensions add tools mid-execution while supported Anthropic and OpenAI
  Responses models preserve the cached prompt prefix. Combined with constrained
  sampling, an extension can reshape the tool surface during a run without
  paying to rebuild the cache, which is the cheap way to keep long sessions
  affordable.
- **Local llama.cpp model management**
  ([`v0.81.0`](https://github.com/earendil-works/pi/blob/v0.81.0/packages/coding-agent/docs/llama-cpp.md)):
  connect to a llama.cpp router, search and download Hugging Face models, load
  and unload explicitly with live progress.
- **Retry on compaction and branch summarization**
  ([PR #6901](https://github.com/earendil-works/pi/pull/6901), `v0.81.1`):
  transient provider failures retry under the configured retry policy, with
  lifecycle events exposed to interactive, JSON, RPC, and SDK consumers.
- **Subscription OAuth kept expanding**: OpenRouter OAuth PKCE minting a
  user-controlled key ([PR #6927](https://github.com/earendil-works/pi/pull/6927))
  and Kimi Code device-authorization OAuth
  ([PR #6935](https://github.com/earendil-works/pi/pull/6935)) in `v0.82.0`, xAI
  device-code OAuth ([PR #6651](https://github.com/earendil-works/pi/pull/6651))
  in `v0.80.8`, Qwen Token Plan providers
  ([PR #6858](https://github.com/earendil-works/pi/pull/6858)) in `v0.81.0`, and
  `ANTHROPIC_AUTH_TOKEN` bearer auth for Anthropic-compatible gateways --
  including for compaction and branch summaries -- in
  [`v0.82.1`](https://github.com/earendil-works/pi/releases/tag/v0.82.1). Pi
  keeps routing toward subscriptions people already hold rather than metered API
  keys.
- **Claude Opus 5** on Anthropic and Bedrock with adaptive thinking including
  `xhigh` ([PR #7081](https://github.com/earendil-works/pi/pull/7081), `v0.82.1`).

*Findings: `2026-06-23-pi-selective-provider-base-entrypoints`,
`2026-06-23-pi-mistral-prompt-caching`.*

## The refusal still holds

Pi's [README at `v0.82.1`](https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/README.md)
continues to state that Pi ships powerful defaults but skips features such as
sub agents and plan mode, and directs users to ask Pi to build what they want or
install a third-party package. No permission-prompt, subagent, plan-mode, or MCP
feature landed across ten releases. The docs carry
[Security](https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/docs/security.md)
and Containerization sections, and both files predate this window untouched --
sandboxing is delegated to Gondolin, Docker, or OpenShell.

So the posture is stable and we should say so without hedging. What is new is
that the surface delegating governance now also delegates credential handling to
extensions, which raises the stakes on the one review step Pi asks the operator
to perform and does not assist with.

*Findings: `2026-06-23-pi-extension-compaction-event-context`.*

## Two facts, reported without inference

**Pi removed its OpenClaw reference.** On 2026-07-26,
[commit `cee5ff7520`](https://github.com/earendil-works/pi/commit/cee5ff7520)
("ref: remove openclaw reference from readme", one file) deleted the sentence
pointing at `openclaw/openclaw` as a real-world SDK integration example. The
preceding sentence, that Pi runs in four modes -- interactive, print or JSON,
RPC, and SDK -- is unchanged. Context, receipted: OpenClaw's `v2026.7.2-beta.1`
notes, published 2026-07-15, advertise discovering OpenCode and Pi sessions from
paired nodes and resuming Pi sessions directly in a terminal. Eleven days
separate the two events. We report this as a fact and infer no motive, because
the record supplies none. The operator-visible result is that the integration
now runs one way in the documentation: OpenClaw reads Pi sessions, and Pi no
longer points back.

**The vendor was refuted by its own next tag.** On 2026-07-24 Pi's official
account suggested a new release might not be needed for Opus 5, because dynamic
model catalogs would surface it through `pi update --models` or cache expiry.
`v0.82.1` shipped seventeen and a half hours later bundling Opus 5 model data
for Anthropic and Bedrock. Pi then said so itself. This is not a mark against
Pi; it is a clean demonstration that "you will not need to upgrade" is a
prediction rather than a receipt, from the party best positioned to know.

One structural note on Pi's public conversation, because it is unusually
measurable. Six release posts across four tags land between 32 seconds *before*
and 5 minutes 3 seconds *after* the GitHub release, median roughly three
minutes. On a project where `main` and the tag are the same artifact, there is
nothing for the conversation to know first, and the record shows it does not.
Read Pi's social lane as low-latency distribution, never as early warning.

## Open questions

Answered this window, so they stop being asked:

- **Is the Earendil migration settled?** Yes, on Pi's side: the repository is
  `earendil-works/pi`, the package is `@earendil-works/pi-coding-agent`, and the
  old npm name has not published since 2026-05-07. The thing that had not
  migrated was our own source contract.
- **Is `$PI_SESSION_DIR` reachable beyond tools and extensions?** Advanced
  substantially: `v0.82.0` puts `PI_SESSION_ID` and `PI_SESSION_FILE` into the
  environment of every command the bash tools run, so the session transcript
  path is now reachable from any subprocess. Whether it also reaches the system
  prompt or context files is still unanswered.

Still open:

- Does an extension-registered provider get any capability boundary? It can now
  own authentication and request dispatch, Pi ships no permission prompt, and
  the security and containerization docs predate the change. What does a careful
  operator actually inspect before installing one?
- Can `PI_SESSION_FILE` be scoped or withheld per tool? A pointer to the full
  transcript in every subprocess environment is a reasonable default for a
  harness that trusts its operator and a poor one for a harness running
  third-party scripts.
- Does the lean SDK arrive as a separate distributable, or do the
  [`/base` entry points](https://github.com/earendil-works/pi/releases/tag/v0.79.8)
  stay composable pieces inside the CLI packages? Not advanced this window.
- Is the phantom `v0.80.4` an isolated slip or a repeatable failure mode in the
  release process? One occurrence is an accident; a second would mean git tags
  on this project carry no information.
- Does Earendil Works add a cloud, enterprise, or hosted tier that would put
  pressure on the no-governance-in-core stance? Still nothing in the record.

## What to watch next

- **Any review or capability surface for extension-registered providers.** This
  is the change with the largest gap between what it enables and what Pi helps
  you check, and it is the item most likely to change this profile's stance.
- **Whether the two-commit channel gap holds.** It is currently Pi's strongest
  claim on operator trust and the reason claims about Pi are checkable at all.
- **Whether checksummed archives get adopted as a norm elsewhere.** Pi shipped
  the most verifiable artifact on the watchlist this window; whether that is a
  competitive signal or an outlier is a field-level question.
- **Any plan mode, approval surface, or MCP addition**, which would mark a real
  departure from the design stance rather than an extension of it.
- **SDK stability signals.** Two breaking changes in nine days is fine for a 0.x
  harness and expensive for anyone embedding it; a deprecation policy would
  change how safely Pi can be built on.

## Profile hygiene

This profile follows the discipline in
[METHOD.md](../../METHOD.md#the-object-grammar): every concrete claim in the
prose carries an inline source link, and posture sections cite finding IDs when
naming a specific feature, behavior change, or cross-project comparison.

Note on this revision. The 2026-07-02 to 2026-07-27 material is carried in prose
with pinned receipts -- GitHub releases, merged pull requests, files read at
pinned tags, npm registry records, and a published dependency advisory -- and is
**not** registered in the `claims:` block, which continues to hold the register
from the May and June windows. Those claims were re-read against `v0.82.1` and
still hold, including `no-governance-in-core`, which stays an `open_question`:
we looked again this cycle and the answer is still that Pi ships no governance in
core, while noting that `v0.81.0` moved credential handling into the extension
surface. All ten in-window releases are `tagged-release`; the only
`main-unreleased` material is the two-commit gap described above.

Correction recorded in this revision: the source contract watched
`@mariozechner/pi-coding-agent`, frozen since 2026-05-07, and was repointed to
`@earendil-works/pi-coding-agent` on 2026-07-27. Findings dated between
2026-05-07 and 2026-07-27 that describe Pi as quiet or unchanged should be read
with that defect in mind.
