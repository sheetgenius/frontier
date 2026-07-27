# Cross-check -- pi-coding-agent

Twenty-one social claims adjudicated against `harvest/pi-coding-agent.primary.md`
for the window 2026-07-02 to 2026-07-27. Pi is the control case for this whole
lane, and it inverts every pattern the other two sources show. Because Pi has
essentially no unreleased backlog -- `compare/v0.82.1...main` is two commits --
there is nothing for the conversation to know first, and the record proves it:
six release posts across four tags cluster in a band from thirty-two seconds
before to five minutes after the GitHub release, median lag about three minutes.
The conversation does not lead the changelog here; it echoes it, accurately, in
near-real time. The one clean refutation in the trio is Pi's own vendor account
refuted by Pi's own next tag, seventeen and a half hours later. And the most
uncomfortable finding is about us: our source contract watched
`@mariozechner/pi-coding-agent`, frozen at `0.73.1` since 2026-05-07T14:45:19Z,
for eighty-one days, while the live package `@earendil-works/pi-coding-agent`
moved from `0.80.3` to `0.82.1` across ten tagged releases -- and an unofficial
X changelog account reported four of those releases correctly, bullet for
bullet, while our primary lane read Pi as static. Verdicts: 5 confirmed, 5
partial, 1 refuted, 0 unconfirmed, 10 social_fact. Zero unconfirmed is itself
diagnostic: when tag, `main` and npm agree, almost every product claim is
immediately checkable. The derivation claim about another project borrowing Pi's
extension contract stays journal-only under the reputational-claims rule.

## The conversation knew first

Effectively nothing, and that is the finding. One row qualifies on the
arithmetic, and it measures publication choreography rather than field
knowledge.

| claim_id | kind | post (UTC) | confirming receipt (UTC) | lead | what was known |
|---|---|---|---|---|---|
| `pi-coding-agent-official-0-82-0-bash-metadata-constrained-sampling-2026-07-24` | vendor | 2026-07-24T06:11:44Z | `v0.82.0` published 2026-07-24T06:12:16Z | **32 seconds** | The vendor's own account announced bash-tool model and provider metadata and constrained sampling thirty-two seconds before the GitHub release API recorded the tag. Both halves are receipted (harvest sections 8 and 10). This is Pi's release pipeline firing marketing microseconds ahead of the API, not the field knowing anything. Recorded because it demonstrates the resolution the method can reach when timestamps are exact, and because it sets the floor against which the other two sources' one-day and fourteen-day gaps should be read. |

The full timing band, all against GitHub `published_at`:

| post | tag | delta |
|---|---|---|
| @pidotdev 2026-07-24T06:11:44Z | `v0.82.0` 06:12:16Z | 32s before |
| @PiChangelog 2026-07-24T06:14:01Z | `v0.82.0` 06:12:16Z | 1m 45s after |
| @PiChangelog 2026-07-25T12:50:22Z | `v0.82.1` 12:47:23Z | 2m 59s after |
| @pidotdev 2026-07-25T12:50:58Z | `v0.82.1` 12:47:23Z | 3m 35s after |
| @PiChangelog 2026-07-21T13:38:19Z | `v0.81.0` 13:34:03Z | 4m 16s after |
| @PiChangelog 2026-07-21T16:50:20Z | `v0.81.1` 16:45:17Z | 5m 03s after |

Where `main` and the tag are the same artifact, the gap the other two sources
open -- between what is fixed and what you can install -- closes, and with it
closes the space in which practitioners learn things the changelog has not said.
Hermes ran 1712 commits ahead of its tag and OpenClaw 2110 ahead of its newest
published preview; Pi ran two.

## Divergences

**1. Our record was stale and the conversation was not.** The source contract
watches `https://www.npmjs.com/package/@mariozechner/pi-coding-agent`, whose
`latest` dist-tag is `0.73.1`, published 2026-05-07T14:45:19Z -- eighty-one days
before window close, with no publish since. The live package is
`@earendil-works/pi-coding-agent`, `latest` `0.82.1`, published
2026-07-25T12:47:12Z, and `package.json` at tag `v0.82.1` carries the
`@earendil-works` name. Anyone still installing the watched package is nine
minor versions behind and never received the protobufjs advisory fix. Meanwhile
the X lane reported `v0.81.0`, `v0.81.1`, `v0.82.0` and `v0.82.1` accurately
within minutes of each tag, the earliest of them at 2026-07-21T13:38:19Z, by
which point the watched package had been frozen for seventy-five days. The
answer to "did the conversation know Pi was still shipping while our record read
it as static" is yes, unambiguously, and the corrective came from an unofficial
account. `sources/pi-coding-agent.yml` should be repointed to the
`@earendil-works` package; until it is, our own primary lane is the least
reliable source in this cross-check.

**2. The unofficial changelog account was more complete than the official one on
the claim that mattered most.** For `v0.82.0`, @pidotdev said bash shell-outs can
see "the loaded model and provider". The release exposes `PI_SESSION_ID`,
`PI_SESSION_FILE`, `PI_PROVIDER`, `PI_MODEL` and `PI_REASONING_LEVEL` to commands
run by built-in and factory-created bash tools. `PI_SESSION_FILE` hands every
subprocess Pi launches a first-class pointer to the full session transcript.
@PiChangelog described the same change as "session/model metadata", which is
closer. The official framing named the two benign variables and omitted the one
with a blast radius.

**3. Pi's vendor account was refuted by Pi's own next tag inside a day.** On
2026-07-24T19:16:43Z the official account said Pi might not need a new release
for Opus 5 because dynamic model catalogs would surface it via `pi update
--models` or cache expiry. `v0.82.1` published 2026-07-25T12:47:23Z, seventeen
hours and thirty-one minutes later, bundling Opus 5 model data on Anthropic and
Bedrock with adaptive thinking including `xhigh` (#7081) plus
`ANTHROPIC_AUTH_TOKEN` bearer handling. The vendor then said so itself. This is
the cleanest crowd-is-wrong case in the trio precisely because the crowd was the
vendor and the disproof was its own changelog. The general lesson transfers:
"you will not need to upgrade" is a prediction, not a receipt, and the same
shape appears unadjudicated in OpenClaw's 2026-07-08 "live without a client
update" claim.

**4. A widely-shared community recipe was pinned to an SDK surface two breaking
releases old.** The 2026-07-21T19:12:13Z one-shot prompt for a DIY web UI cites
Pi 0.80.6 APIs. `v0.80.7` (2026-07-14T16:41:53Z) removed the `openai-responses`
`compat.sendSessionIdHeader` flag in favour of `compat.sessionAffinityFormat`,
and `v0.80.8` (2026-07-16T14:40:41Z) replaced `CreateAgentSessionOptions.
authStorage` and `modelRegistry` with an async `modelRuntime`, unexported
`AuthStorage` and its backends, and changed `ModelRegistry.refresh()` from
synchronous `void` to `Promise<void>`. The recipe circulated five days after the
second break, with a maintainer quote-post approving of the approach. Pi's SDK
is its adapter surface and it broke twice in nine days; the conversation
celebrated the extensibility and did not track its version.

**5. The conversation praised Pi's minimalism without pricing it.** Community
and maintainer posts across 2026-07-21 to 2026-07-26 endorse building your own
control surface over shipping a finished official UI, and the receipted README
posture at `v0.82.1` agrees: Pi deliberately skips sub agents and plan mode and
tells users to build or install third-party packages. What no post mentions is
what `v0.81.0` did to that bargain -- extensions can now register complete
pi-ai providers with their own authentication, model refresh and custom
streaming. An installed extension can own credential acquisition and request
dispatch, and Pi ships no permission prompt to catch it; security and
containerization docs both predate the window untouched, delegating sandboxing
to Gondolin, Docker or OpenShell. Extension review is now credential review. The
conversation admired the posture; nobody costed it.

**6. Version truth lives in npm for both Pi and OpenClaw, for opposite
reasons, and only Pi's conversation got it right by accident.** The tag
`v0.80.4` exists at `912d0953f678bb50b0725e9c0ff65b65d4be97f5` dated
2026-07-09T18:52:57Z with no GitHub release and no npm publish; the registry
jumps `0.80.3` to `0.80.5`. No social post mentions `v0.80.4`, because the X
lane tracks releases and npm rather than raw tags. That instinct is correct for
Pi, where a tag can be a phantom, and it is exactly the instinct that would have
caught OpenClaw's untagged `2026.7.1-2` respin had anyone applied it there.

**7. The one primary fact with real editorial weight has no social trace at
all.** Pi removed the sentence pointing at `openclaw/openclaw` as a real-world
SDK integration example on 2026-07-26T16:29:38Z (commit `cee5ff7520`,
`main-unreleased`, one file). OpenClaw's `v2026.7.2-beta.1` notes, published
2026-07-15T18:48:24Z, advertise discovering OpenCode and Pi sessions from paired
nodes and resuming Pi sessions directly in a terminal (#106941, #106927,
#107200). Ten days and twenty-two hours separate the two, which the harvest
rounds to eleven days. Reported as fact; no motive inferred and none available
from the record. The integration now runs one way in the record: OpenClaw reads
Pi sessions, and Pi no longer points back. Neither the Pi nor the OpenClaw
social harvest contains a single post about either half -- the changelog knew,
and the conversation did not.

**8. Scope bound on every negative finding above.** The Pi social harvest carries
its own coverage caveat: discovery was densest from roughly 2026-07-16 onward
via profile mirrors and per-status lookups, without authenticated X search, so
early-window absence is not established silence. Every "no post mentions" in
this file is a statement about the harvested set only.

## Claim-by-claim

| claim_id | verdict | primary receipt | note |
|---|---|---|---|
| `pi-coding-agent-official-0-82-0-bash-metadata-constrained-sampling-2026-07-24` | confirmed | https://github.com/earendil-works/pi/releases/tag/v0.82.0 (published 2026-07-24T06:12:16Z); https://github.com/earendil-works/pi/pull/6971; `docs/environment-variables.md#bash-tool-session-environment`; `packages/ai/README.md#constrained-sampling-for-tools` | Both halves land. Incomplete rather than wrong: the release also exposes `PI_SESSION_ID` and `PI_SESSION_FILE`, the latter a pointer to the full session transcript handed to every bash subprocess. Post predates the release API by 32 seconds. Divergence 2. |
| `pi-coding-agent-official-dynamic-model-catalogs-opus5-no-release-2026-07-24` | refuted | https://github.com/earendil-works/pi/releases/tag/v0.82.1 (published 2026-07-25T12:47:23Z) and https://github.com/earendil-works/pi/pull/7081 | "Pi may not need a new release for Opus 5" is contradicted by Pi's own next tag 17h 30m 40s later, which bundled Opus 5 model data for Anthropic and Bedrock with adaptive thinking including `xhigh`, plus model-data fetch and bearer-token work. The vendor publicly acknowledged the reversal the following day. Strongest refutation in the trio. |
| `pi-coding-agent-official-0-82-1-opus5-fetch-bearer-2026-07-25` | confirmed | https://github.com/earendil-works/pi/releases/tag/v0.82.1 (published 2026-07-25T12:47:23Z; npm `0.82.1` 2026-07-25T12:47:12Z); harvest sections 9 and 10 | Opus 5 model data and `ANTHROPIC_AUTH_TOKEN` bearer auth for Anthropic-compatible gateways, including compaction and branch summaries, both receipted. Post trails the tag by 3m 35s. |
| `pi-coding-agent-official-week-features-llamacpp-openrouter-kimi-bash-2026-07-25` | confirmed | `v0.81.0` llama.cpp management; https://github.com/earendil-works/pi/pull/6927 (OpenRouter OAuth PKCE) and https://github.com/earendil-works/pi/pull/6935 (Kimi Code OAuth), both `v0.82.0`; `v0.82.0` bash session environment | A marketing roundup that is receipted bullet for bullet against three tagged releases. Rare, and worth saying so. |
| `pi-coding-agent-official-prompt-caching-blog-amplify-2026-07-23` | social_fact | post is the receipt | An argument about cache economics, not a version claim. Receipted mechanism behind it: `v0.80.7` cache-friendly dynamic tool loading (https://github.com/earendil-works/pi/pull/6474) lets extensions add tools mid-execution while supported Anthropic and OpenAI Responses models preserve the cached prompt prefix. |
| `pi-coding-agent-maintainer-mitsuhiko-prompt-cache-visibility-2026-07-23` | partial | https://github.com/earendil-works/pi/pull/6474 (`v0.80.7`, published 2026-07-14T16:41:53Z) | Cache *preservation* under dynamic tool loading is confirmed. Cache *visibility* -- the specific claim that Pi made cache behaviour more legible to the operator -- is unreceipted in this harvest; the nearest neighbours are `v0.81.1` retry lifecycle events surfaced to interactive, JSON, RPC and SDK consumers, which is retry visibility, not cache visibility. The harness-economics framing is conversation. |
| `pi-coding-agent-official-poolside-laguna-openrouter-welcome-2026-07-21` | partial | https://github.com/earendil-works/pi/pull/6927; `v0.80.7` `compat.sessionAffinityFormat` value `"openrouter"` | OpenRouter is a receipted, first-class Pi provider surface, so any OpenRouter-hosted model is structurally reachable. The specific model's availability is unreceipted, and the 78.5% SWE-bench Multilingual figure is rejected under `benchmark_claim_without_method`: it is a model vendor's number quoted onward with no method card. Do not carry the figure. |
| `pi-coding-agent-official-syntaxfm-pi-auto-research-adoption-2026-07-24` | social_fact | post is the receipt | Adoption chatter about a podcast episode. Unresolved lead worth flagging: "Pi Auto Research" corresponds to no feature name in any of the ten in-window releases or the docs index. A product-shaped name circulating with no primary is exactly the thing this lane exists to catch. |
| `pi-coding-agent-community-changelog-0-81-0-llamacpp-extension-providers-2026-07-21` | partial | https://github.com/earendil-works/pi/releases/tag/v0.81.0 (published 2026-07-21T13:34:03Z); harvest sections 7, 9, 10 | Three of four confirmed: llama.cpp router connect with Hugging Face search, download and explicit load/unload; extensions registering complete pi-ai providers with their own authentication via `refreshModels(context)`; Qwen Token Plan providers (#6858). Persisted tool, compaction and branch-summary usage in session totals is unreceipted here. Post trails the tag by 4m 16s. |
| `pi-coding-agent-community-changelog-0-81-1-source-archives-retry-2026-07-21` | confirmed | https://github.com/earendil-works/pi/pull/6913 (merged 2026-07-21T15:18:05Z), https://github.com/earendil-works/pi/releases/tag/v0.81.1 (published 2026-07-21T16:45:17Z), https://github.com/earendil-works/pi/pull/6901 | Deterministic checksummed source archives with documented rebuild instructions, and compaction/branch-summarization retry with lifecycle events exposed to interactive, JSON, RPC and SDK consumers. Both exact. This is the strongest supply-chain posture in the trio: Pi is independently rebuildable from a checksummed archive while OpenClaw ships its most-installed artifact with no tag and no `gitHead`. |
| `pi-coding-agent-community-changelog-0-82-0-constrained-sampling-login-bash-2026-07-24` | confirmed | https://github.com/earendil-works/pi/releases/tag/v0.82.0; harvest sections 8, 9, 10 | Every bullet receipted, including the detail: JSON Schema and OpenAI Lark/regex grammars, generated capability metadata (`supportsGrammarTools`, `supportsStrictTools`) preventing unsupported requests, `/login` sign-in for OpenRouter and Kimi Code, and `bash_execution_update` events correlated with request IDs. An unofficial account, more precise than several official posts elsewhere in this harvest. |
| `pi-coding-agent-community-changelog-0-82-1-opus5-gateway-catalog-304-2026-07-25` | partial | https://github.com/earendil-works/pi/releases/tag/v0.82.1; https://github.com/earendil-works/pi/pull/7081; harvest section 9 | Opus 5 on Anthropic and Bedrock with adaptive thinking including `xhigh`, and `ANTHROPIC_AUTH_TOKEN` bearer auth including compaction and branch summaries, both confirmed. `pi.dev` catalog revalidation via `If-None-Match` 304s and persistent llama.cpp model listings across restarts are unreceipted in this harvest. The scout notes the gateway bearer wording looked truncated in the lookup payload; the underlying feature is nonetheless receipted. |
| `pi-coding-agent-community-dodoreach-oneshot-webui-prompt-sdk-2026-07-21` | partial | https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/README.md and `docs/security.md` (last touched 2026-06-15T07:16:13Z); breaking changes https://github.com/earendil-works/pi/releases/tag/v0.80.7 and https://github.com/earendil-works/pi/releases/tag/v0.80.8 | "No built-in sandbox" is confirmed: Pi delegates sandboxing to Gondolin, Docker or OpenShell, and no permission-prompt, subagent, plan-mode or MCP feature landed in the window. The 0.80.6 SDK pinning is the problem -- the SDK took two breaking changes in nine days, on 2026-07-14 and 2026-07-16, so a recipe published 2026-07-21 against a 0.80.6 snapshot was already two breaks behind. Divergence 4. Named SessionManager APIs specifically were not among the receipted removals; the staleness claim is about the SDK surface as a whole, not about SessionManager. |
| `pi-coding-agent-community-dodoreach-mobile-companion-camping-2026-07-18` | social_fact | post is the receipt | Adoption anecdote. No Pi feature receipt and none claimed. |
| `pi-coding-agent-maintainer-badlogic-love-diy-pi-ui-prompt-2026-07-22` | social_fact | post is the receipt | Maintainer endorsement of DIY control surfaces. Corroborated in kind by the primary record rather than by it: the `v0.82.1` README states the same posture, that Pi ships powerful defaults but skips features like sub agents and plan mode and directs users to build or install third-party packages. A rare case where social signal and primary posture agree exactly. Endorsing the approach does not verify any API or security claim inside the quoted prompt. |
| `pi-coding-agent-community-bentlegen-hunk-extension-api-like-pi-2026-07-26` | social_fact | post is the receipt | Ecosystem influence: Pi's extension surface treated as reference design by another project. Conversation, not product change. |
| `pi-coding-agent-community-bentlegen-api-lifted-from-pi-2026-07-26` | social_fact | post is the receipt | A derivation claim about another project. Journal-only under the reputational-claims rule: no code comparison was performed, and none is available from this harvest. Publishable only as "this was said", never as a finding about provenance or conduct. |
| `pi-coding-agent-maintainer-badlogic-fomo-vs-building-experience-2026-07-26` | social_fact | post is the receipt | Attention-bottleneck discourse from a maintainer. No feature claim. |
| `pi-coding-agent-maintainer-badlogic-provider-specific-api-resistance-2026-07-26` | social_fact | post is the receipt | Maintainer intent on API boundary discipline: resisting provider-specific behaviour in a general API while acknowledging demand. Consistent in kind with what the code did in the window -- `v0.80.8` collapsed provider-specific credential surfaces into a single `ModelRuntime.getAuth()` and unexported `AuthStorage`. The specific capability under discussion was not reconstructed and no product claim is filed. |
| `pi-coding-agent-community-dillon-mulroy-workflow-show-and-official-thanks-2026-07-23` | social_fact | post is the receipt | Adoption and workflow discourse plus an official thank-you. Whether Pi-specific features are demonstrated is unchecked. |
| `pi-coding-agent-discovery-coverage-gap-note-2026-07-27` | social_fact | scout note is the receipt | Process caveat, not a Pi claim. Binds every negative statement in this file: coverage is densest from roughly 2026-07-16, authenticated X search was unavailable, and early-window absence is not established silence. Two unresolved secondary leads (an alleged 2026-07-11 endorsement post and an official-account notice) had no status URLs resolved and are not carried. |
