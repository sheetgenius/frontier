# Harvest -- pi-coding-agent (primary sources)

Window: 2026-07-02 to 2026-07-27. Source contract: `sources/pi-coding-agent.yml`.
Repo: https://github.com/earendil-works/pi
Docs: https://pi.dev/docs/latest

Method note. Pi tags from `main` (`target_commitish: main` on every in-window
release), so ancestry is straightforward. All dates are GitHub API
`published_at` / `merged_at` and npm registry `time` values, in UTC. Baseline
from the prior digest: `v0.80.3`, tagged 2026-06-30, with the in-window work at
that time recorded as main-unreleased provider and reliability fixes.

---

## 1. Ten tagged releases, v0.80.5 through v0.82.1

Pi moved from the `v0.80.3` baseline to `v0.82.1` across ten GitHub releases:

| Tag | `published_at` (UTC) |
|---|---|
| `v0.80.5` | `2026-07-09T19:09:08Z` |
| `v0.80.6` | `2026-07-09T23:22:08Z` |
| `v0.80.7` | `2026-07-14T16:41:53Z` |
| `v0.80.8` | `2026-07-16T14:40:41Z` |
| `v0.80.9` | `2026-07-16T17:23:36Z` |
| `v0.80.10` | `2026-07-16T22:05:11Z` |
| `v0.81.0` | `2026-07-21T13:34:03Z` |
| `v0.81.1` | `2026-07-21T16:45:17Z` |
| `v0.82.0` | `2026-07-24T06:12:16Z` |
| `v0.82.1` | `2026-07-25T12:47:23Z` |

Receipt: https://github.com/earendil-works/pi/releases

Release channel: `tagged-release` for all ten. Pi published no prereleases in
the window; every GitHub release has `prerelease: false`.

Prior-window resolution: the main-unreleased provider and reliability work the
last digest recorded against the `v0.80.3` baseline reached tags this window,
beginning with `v0.80.5` on 2026-07-09. Nothing from that baseline is still
untagged.

Operator consequence: Pi is the only one of these three sources where the tag
you can install is within two days of `main`.

## 2. The watched npm surface is stale; the package moved

The source contract watches
https://www.npmjs.com/package/@mariozechner/pi-coding-agent. That package is
frozen: its `latest` dist-tag is `0.73.1`, published `2026-05-07T14:45:19Z`.
The live package is `@earendil-works/pi-coding-agent`, whose `package.json`
`name` at tag `v0.82.1` is `@earendil-works/pi-coding-agent` and whose `latest`
dist-tag is `0.82.1`, published `2026-07-25T12:47:12Z`. It also carries a
`legacy-node20` dist-tag at `0.74.2`.

Receipts:
- https://www.npmjs.com/package/@earendil-works/pi-coding-agent/v/0.82.1
- https://www.npmjs.com/package/@mariozechner/pi-coding-agent (latest `0.73.1`)
- https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/package.json

Release channel: `tagged-release` for `@earendil-works/pi-coding-agent@0.82.1`.

Operator consequence: anyone still installing `@mariozechner/pi-coding-agent`
is nine minor versions behind and has received no update since 2026-05-07,
including the protobufjs advisory fix in section 5. `sources/pi-coding-agent.yml`
should be corrected to the `@earendil-works` package.

## 3. `v0.80.4` is a phantom tag

The tag `v0.80.4` exists at commit `912d0953f678bb50b0725e9c0ff65b65d4be97f5`,
dated `2026-07-09T18:52:57Z`, message `Release v0.80.4`. It has no GitHub
release and was never published to npm; the registry jumps from `0.80.3`
(`2026-06-30T20:34:24Z`) to `0.80.5` (`2026-07-09T19:09:00Z`).

Receipts:
- `refs/tags/v0.80.4` -> `912d0953f678bb50b0725e9c0ff65b65d4be97f5`
- https://www.npmjs.com/package/@earendil-works/pi-coding-agent (no `0.80.4`)

Release channel: tag exists, no release, no artifact. Treat as not shipped.

Operator consequence: a version-string comparison against git tags will
report a release that no user can install; pin to npm versions.

## 4. Two breaking changes that hit anyone embedding Pi

Pi's SDK is the adapter surface, and it broke twice in nine days.

`v0.80.7` (`2026-07-14T16:41:53Z`) removed the `openai-responses`
`compat.sendSessionIdHeader` flag from `models.json`. Session-affinity is now
controlled by `compat.sessionAffinityFormat` with values `"openai"`,
`"openai-nosession"` or `"openrouter"`; `sendSessionIdHeader: false` becomes
`sessionAffinityFormat: "openai-nosession"`.

Receipt: https://github.com/earendil-works/pi/releases/tag/v0.80.7
(PR https://github.com/earendil-works/pi/pull/6496)

`v0.80.8` (`2026-07-16T14:40:41Z`) replaced the SDK's
`CreateAgentSessionOptions.authStorage` and `modelRegistry` options with an
async `modelRuntime` option. `AuthStorage` and its storage backends are no
longer exported; consumers must use `ModelRuntime`, a custom pi-ai
`CredentialStore`, or `readStoredCredential()` for one-off reads of
`auth.json`. `ModelRegistry.getApiKeyAndHeaders()` is replaced by
`ModelRuntime.getAuth()`, and extension-facing `ModelRegistry.refresh()`
changed from synchronous `void` to `Promise<void>`, so extensions must await
it before synchronous registry reads.

Receipt: https://github.com/earendil-works/pi/releases/tag/v0.80.8

Release channel: `tagged-release` (both).

Operator consequence: credential storage is no longer a public SDK surface --
if you wrapped Pi and reached into `AuthStorage`, `v0.80.8` breaks you, and the
replacement routes every request-auth decision through `ModelRuntime.getAuth()`.

## 5. protobufjs advisory closed four days after publication

`v0.82.0` updated the packaged `protobufjs` dependency to 7.6.5 to address
GHSA-j3f2-48v5-ccww.

Advisory facts, verified from the GitHub advisory API:
GHSA-j3f2-48v5-ccww, CVE-2026-59877, severity `medium`, published
`2026-07-20T22:03:00Z`, "protobufjs: Denial of Service via infinite loop in
.proto option parsing". Vulnerable `>= 7.5.0, <= 7.6.4`, first patched 7.6.5;
also `>= 8.0.0, <= 8.6.5`, first patched 8.6.6.

Receipts:
- https://github.com/advisories/GHSA-j3f2-48v5-ccww
- https://github.com/earendil-works/pi/issues/7005 (opened `2026-07-23T08:28:46Z`,
  closed `2026-07-23T21:16:21Z`)
- https://github.com/earendil-works/pi/releases/tag/v0.82.0
  (published `2026-07-24T06:12:16Z`)

Release channel: `tagged-release`.

Operator consequence: advisory to tagged fix in four days, and the fix is in
the version npm serves as `latest` -- this is the clean case on the watchlist
this window.

## 6. Verifiable, checksummed release source archives

`v0.81.1` added deterministic, checksummed source archives to GitHub releases
with documented instructions for rebuilding the standalone binaries.
`v0.82.0` followed up by fixing release source archives to include the
generated provider model data needed to build those binaries.

Receipts:
- https://github.com/earendil-works/pi/pull/6913
  (`4b91ec66fd33026e6e44a0dca5a954a59abd3ee9`, merged `2026-07-21T15:18:05Z`)
- https://github.com/earendil-works/pi/releases/tag/v0.81.1
  (published `2026-07-21T16:45:17Z`)
- https://github.com/earendil-works/pi/blob/v0.81.1/README.md#building-standalone-binaries-from-release-source

Release channel: `tagged-release`.

Operator consequence: Pi is now independently rebuildable from a checksummed
archive, which is the strongest supply-chain posture of the three sources in
this harvest -- OpenClaw by contrast ships its most-installed artifact with no
git tag and no `gitHead`.

## 7. Extensions can register complete providers, including authentication

`v0.81.0` lets extensions register complete pi-ai providers with their own
authentication, model refresh, filtering and custom streaming, via
`refreshModels(context)` with optional provider-controlled persistence.

Receipt: https://github.com/earendil-works/pi/releases/tag/v0.81.0
(published `2026-07-21T13:34:03Z`),
https://github.com/earendil-works/pi/blob/v0.81.0/packages/coding-agent/docs/custom-provider.md#register-new-provider

Release channel: `tagged-release`.

Operator consequence: an installed Pi extension can now own credential
acquisition and request dispatch for a provider, so extension review is
credential review -- Pi still supplies no permission prompt to catch it.

## 8. Session and model identity exposed to bash tool subprocesses

`v0.82.0` exposes `PI_SESSION_ID`, `PI_SESSION_FILE`, `PI_PROVIDER`,
`PI_MODEL` and `PI_REASONING_LEVEL` as environment variables to commands run
by built-in and factory-created bash tools. Direct RPC bash commands also gained
streaming `bash_execution_update` events correlated with request IDs.

Receipts:
- https://github.com/earendil-works/pi/releases/tag/v0.82.0
- https://github.com/earendil-works/pi/blob/v0.82.0/packages/coding-agent/docs/environment-variables.md#bash-tool-session-environment
- https://github.com/earendil-works/pi/blob/v0.82.0/packages/coding-agent/docs/rpc.md#bash_execution_update
- https://github.com/earendil-works/pi/pull/6971

Release channel: `tagged-release`.

Operator consequence: `PI_SESSION_FILE` gives any command Pi runs a path to
the full session transcript, so a hostile or careless script now has a
first-class pointer to your conversation history.

## 9. Subscription OAuth logins for three more providers

`v0.82.0` added OpenRouter OAuth PKCE login through `/login`, minting a
user-controlled API key, and Kimi Code subscription OAuth with device
authorization and automatic token refresh. `v0.80.8` added xAI device-code
OAuth. `v0.81.0` added Qwen Token Plan and Qwen Token Plan China as built-in
providers. `v0.82.1` added `ANTHROPIC_AUTH_TOKEN` bearer authentication for
Anthropic-compatible gateways requiring `Authorization: Bearer`, including for
compaction and branch summaries.

Receipts:
- https://github.com/earendil-works/pi/pull/6927 (OpenRouter OAuth PKCE)
- https://github.com/earendil-works/pi/pull/6935 (Kimi Code subscription OAuth)
- https://github.com/earendil-works/pi/pull/6651 (xAI device-code OAuth)
- https://github.com/earendil-works/pi/pull/6858 (Qwen Token Plan)
- https://github.com/earendil-works/pi/releases/tag/v0.82.1 (`ANTHROPIC_AUTH_TOKEN`)

Release channel: `tagged-release`.

Operator consequence: Pi keeps expanding subscription-based auth rather than
metered API keys, which is the cheaper path for teams that already hold those
subscriptions.

## 10. Capability additions worth noting

- `v0.82.0`: constrained tool sampling. Tools can prefer or require strict
  JSON Schema sampling or use OpenAI Lark/regex grammars, with generated model
  capability metadata (`supportsGrammarTools`, `supportsStrictTools`)
  preventing unsupported requests. Covers OpenAI, Anthropic, Amazon Bedrock,
  Google Gemini and Mistral.
  https://github.com/earendil-works/pi/blob/v0.82.0/packages/ai/README.md#constrained-sampling-for-tools
- `v0.81.0`: local llama.cpp model management -- connect to a llama.cpp router,
  search and download Hugging Face models, explicitly load and unload with live
  progress. https://github.com/earendil-works/pi/blob/v0.81.0/packages/coding-agent/docs/llama-cpp.md
- `v0.81.1`: compaction and branch summarization retry transient provider
  failures under the configured retry policy, with retry lifecycle events
  exposed to interactive, JSON, RPC and SDK consumers.
  https://github.com/earendil-works/pi/pull/6901
- `v0.80.7`: cache-friendly dynamic tool loading -- extensions add tools during
  execution while supported Anthropic and OpenAI Responses models preserve the
  cached prompt prefix. https://github.com/earendil-works/pi/pull/6474
- `v0.82.1`: Claude Opus 5 on Anthropic and Amazon Bedrock with adaptive
  thinking including `xhigh`, inference profiles and prompt caching.
  https://github.com/earendil-works/pi/pull/7081

Release channel: `tagged-release` (all).

Operator consequence: dynamic tool loading plus constrained sampling means a
Pi extension can now change the tool surface mid-run without breaking the
prompt cache, which is the cheap way to keep long sessions affordable.

## 11. Pi removed its OpenClaw reference from the README

On 2026-07-26 Pi removed the sentence pointing at `openclaw/openclaw` as a
real-world SDK integration example. The preceding sentence is unchanged: Pi
runs in four modes -- interactive, print or JSON, RPC for process integration,
and an SDK for embedding.

Receipt: https://github.com/earendil-works/pi/commit/cee5ff7520
(`cee5ff7520`, committed `2026-07-26T16:29:38Z`, message
`ref: remove openclaw reference from readme`, one file:
`packages/coding-agent/README.md`)

Release channel: `main-unreleased` (after `v0.82.1`).

Context, receipted, without inference about motive: OpenClaw's
`v2026.7.2-beta.1` notes (published `2026-07-15T18:48:24Z`) advertise
discovering OpenCode and Pi sessions from paired nodes and resuming Pi sessions
directly in a terminal (PRs #106941, #106927, #107200). The reciprocal pointer
from Pi to OpenClaw was removed eleven days later.

Operator consequence: the integration runs one way in the record -- OpenClaw
reads Pi sessions, and Pi no longer points back.

## 12. Main-unreleased volume since the tag

`compare/v0.82.1...main` reports `total_commits: 2` as of 2026-07-27: the
`[Unreleased]` changelog scaffold (`5bc1c2c0a6`, `2026-07-25T12:37:15Z`) and
the README change in section 11.

Receipt: https://github.com/earendil-works/pi/compare/v0.82.1...main

Release channel: `main-unreleased`.

Operator consequence: Pi has essentially no unreleased backlog. What is on
`main` is what is in the tag, which is the opposite of Hermes at 1712 commits
and OpenClaw at 2110.

## 13. Deliberate omissions still hold

Pi's own README at `v0.82.1` continues to state that Pi ships powerful
defaults but skips features like sub agents and plan mode, and that users
should instead ask Pi to build what they want or install a third-party Pi
package. The docs index carries Security ("project trust, sandbox boundaries,
and vulnerability reporting") and Containerization ("sandbox pi with Gondolin,
Docker, or OpenShell") sections, but both files predate this window
(`packages/coding-agent/docs/security.md` last touched `2026-06-15T07:16:13Z`;
`containerization.md` same commit `a851968170`). No permission-prompt, subagent,
plan-mode or MCP feature landed in the window.

Receipts:
- https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/README.md
- https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/docs/security.md
- https://pi.dev/docs/latest

Release channel: `tagged-release` (unchanged posture).

Operator consequence: Pi's stance is unchanged across ten releases -- sandboxing
is delegated to Gondolin, Docker or OpenShell, and the governance shell remains
the operator's to build.
