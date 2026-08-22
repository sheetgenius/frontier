# Pi `dev` at a17323e5 versus DSH at 141eb6fe

Architecture read, 2026-08-22. Question: at
[a17323e5](https://github.com/earendil-works/pi/tree/a17323e5b1e766433e76a3ed7a129f640924c079),
is there a component a plugin cannot replace or prepend to?

`plugins.md` is a claim. Proof is the load path.

Pins (do not substitute live HEAD):

- Pi window-close `dev`: [`a17323e5b1e766433e76a3ed7a129f640924c079`](https://github.com/earendil-works/pi/tree/a17323e5b1e766433e76a3ed7a129f640924c079) (2026-08-20T23:09:41+02:00)
- Pi window-close `main`: [`5cd93f688aaab89dbb6dfa4aca535f21796ae185`](https://github.com/earendil-works/pi/commit/5cd93f688aaab89dbb6dfa4aca535f21796ae185)
- Pi installable tag: [`v0.84.2`](https://github.com/earendil-works/pi/releases/tag/v0.84.2) / `914cf1472e715297caa30db4b9535d534a9eb718`
- DSH: [`dsh-v0.1.0-rc.8`](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.8) / `141eb6fef83422698aef7a981029e843e8161534`

Local trees: `tmp/pi` and `tmp/dsh` (gitignored), detached at those SHAs.

## What Pi `dev` actually is

Channel: feature branch `dev`. Not a tag. Not `main`.

At the pin, `git rev-list --count 5cd93f68..a17323e5` is 264.
`git rev-list --left-right --count 5cd93f68...a17323e5` is 7 behind, 264 ahead (diverged).
`git rev-list --count v0.84.2..a17323e5` is 336.

[`packages/agent/docs/plugins.md`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugins.md)
is present at `a17323e5` and absent at both `v0.84.2` and `5cd93f68` (`git cat-file -e` fails on both).
The same split holds for
[`packages/agent/src/plugins/services/provider.ts`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/src/plugins/services/provider.ts),
[`packages/coding-agent/src/experimental/client.ts`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/client.ts),
and
[`packages/coding-agent/src/experimental/services/session-builtins.ts`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/session-builtins.ts).
The old extension loader
[`packages/coding-agent/src/core/extensions/loader.ts`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/core/extensions/loader.ts)
exists on the tag, on window-close `main`, and on `dev`.

The tip commit of the pin is docs: `a17323e5 docs(agent): design plugin dependency discovery and reload`.
`plugins.md` was first added at `0ebbae32` (2026-08-17) on this branch.

The new hosts are not the default binary on this SHA.
[`areExperimentalFeaturesEnabled()`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/core/experimental.ts)
is `process.env.PI_EXPERIMENTAL === "1"`.
[`runExperimentalCommand`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/main.ts)
returns false without that flag, so `pi client` / `pi server` never enter the experimental CLI.
With the flag, an interactive `pi client` opens the service-only TUI
([experimental services README](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/README.md)).

Sampled from the 264, not listed as titles: diffs that touch plugin load, experimental hosts, plugin docs, and reload. Those are the docs commits on `packages/agent/docs/plugins.md` / `plugin-reloading.md`, `8222adee feat(agent): add routed plugin service runtime`, `48a07ddb` / `d5e3b478` / `bafbdecd` / `8df02a43` (service slices and TUI), and the `plugin-app` fixture (`cd8bedcf`, `4cb81e2b`, `1ae13eb7`). The rest of the 264 was not read as a tour.

## Where authority sits

### Docs claim

[`plugins.md` L3](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugins.md#L3):

> Status: Tentative design input, not a normative contract or implementation handoff. [...] The application host contexts, plugin kernel, references, telemetry propagation, and most other example facets remain illustrative.

[`plugins.md` L11-12](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugins.md#L11): the plugin kernel "knows nothing about Harness, tools, TUI components, RPC services, connections, or coding-agent policy." An application host "owns one concrete runtime." The session host "owns session authority -- the real Harness." The server host "owns server-wide authority: session records (`SessionRepo`), session-worker management, authentication, attachment, and routing."

[`plugins.md` L37](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugins.md#L37):

> No privileged built-ins. Built-ins and third-party plugins receive identical bindings, so shipping the product continuously exercises the extension API.

That sentence is about feature plugins sharing bindings. It is not "there is no host."

[`plugins.md` L398](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugins.md#L398):
the host keeps `AgentHarness.close()` and `Session.close()`; raw `Session.mutate()`; `setTools()`; unscoped hook registration; transport exposure.
"This is a composition and lifecycle boundary, not a security sandbox: session facets are trusted code in the authoritative process. The manifest may explicitly grant broader local capability, but built-ins receive no implicit bypass."

[`plugins.md` L810](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugins.md#L810):
"The server routes session traffic contract-agnostically. [...] No server facet participates in routing or re-provides session services."

[`plugin-reloading.md` L44](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugin-reloading.md#L44):

> Cordis-style inverse tracking is useful for orderly release of process-local resources, but it is not a transaction over Session history, filesystem emissions, subprocess effects, or network effects.

[`plugin-reloading.md` L52-58](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugin-reloading.md#L52):
`/reload` "belongs to host control, outside the plugin runtime being replaced." It "must not be implemented as a session plugin service method."

[`plugins.md` L1018](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugins.md#L1018):
"Before this becomes normative" includes "the exact minimal kernel contract [...] the built-in manifest, and the concrete server/session/TUI host context surfaces."

Permission wrapping in the docs is a contribution-registry example
([`plugins.md` L546-556](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/docs/plugins.md#L546)):
`draft.wrap("bash", ...)` so wrappers compose as `telemetry(permission(sandbox(coreBash)))`. That is design. There is no compiled-in approval waterfall in `packages/agent/src` at this SHA.

### Load path at the pin

There is no plugin kernel in source. `createPluginKernel` / `PluginKernel` occur only in `plugins.md`. `find` under `packages/agent/src` for `*kernel*` is empty. `definePlugin` exists only in
[`packages/coding-agent/test/fixtures/plugin-app/lib/api.ts`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/test/fixtures/plugin-app/lib/api.ts)
(a prototype; `plugins.md` L180 says it "demonstrates the composition model with an ad hoc RPC implementation").

What is compiled:

1. [`RemoteServiceProvider`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/src/plugins/services/provider.ts)
   takes a constructor allowlist. `#assertAllowed` throws `service_not_allowed` if the id is missing (L396-399). A second `provide()` for the same singleton throws `service_mode_mismatch` / "already has a provider" (L87-88).

2. Server allowlist is a const array:
   [`BUILTIN_SERVER_SERVICES = [SessionDirectory, SessionManagement]`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/server-builtins.ts).
   [`createExperimentalServerServices`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/server.ts)
   constructs `new RemoteServiceProvider(BUILTIN_SERVER_SERVICES)` per attached client and `provide()`s those two services in host code.

3. Session allowlist is a const array:
   [`BUILTIN_SESSION_SERVICES = [Accounts, Chat, Models, Transcript]`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/session-builtins.ts).
   [`createSessionWorkerServices`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/worker.ts)
   builds `new RemoteServiceProvider([...BUILTIN_SESSION_SERVICES, ...options.serviceTokens])`, then in this order: `provideChatService`, `provideModelsService`, `provideBuiltinServiceStubs`, then optional `configureServices`.

4. [`provideChatService`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/chat-provider.ts)
   calls `harness.prompt` / `harness.requestAbort` directly. Remaining Chat members throw `ServiceSliceNotImplemented`.

5. `configureServices` / extra `serviceTokens` are accepted on `SessionWorkerRuntime`. Production experimental code never sets them. The only caller that does is
   [`packages/coding-agent/test/fixtures/faux-session-worker.ts`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/test/fixtures/faux-session-worker.ts).
   Default path: `serviceTokens` is `[]`.

6. [`experimental/services/README.md`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/coding-agent/src/experimental/services/README.md):
   "The plugin kernel, and host facet contexts remain protocol/host infrastructure slices rather than presentation service tokens." Continuation point for Models: "move provider/auth composition behind plugin facets."

7. [`packages/agent/src/harness/execution/effect-gate.ts`](https://github.com/earendil-works/pi/blob/a17323e5b1e766433e76a3ed7a129f640924c079/packages/agent/src/harness/execution/effect-gate.ts)
   is a process-local admission gate for cancellation, not a permission plugin.

Approval, permission popups, and sandbox policy are not compiled-in plugins on this path. The old coding-agent still delegates sandboxing; that is the tagged product, not this experimental host.

## What a later plugin can and cannot do

Cannot, at this SHA, in the experimental host:

- Load through a kernel that is not in source.
- Appear on the experimental allowlist without a host edit to `BUILTIN_*` or a production `serviceTokens` caller (there is none).
- Replace `Chat` / `Models` / `Accounts` / `Transcript` after the host `provide()`s them (second `provide` throws).
- Sit in front of a refusal: there is no approval waterfall to prepend to.
- Own `/reload` or routing (design: host infrastructure; implementation: host modules).

Can, in design only: wrap a tool via a contribution registry; provide a service if a trusted manifest allowlists the id; receive the same facet bindings as a built-in feature.

Can, on the default binary of this SHA: the existing extension runner under `packages/coding-agent/src/core/extensions/`. That is the v0.84.2-era extension API. It is not the plugin architecture named in `plugins.md`.

## Nearest DSH precedent

This comparison changes the Pi verdict. Last brief treated "no privileged built-ins" as compositionally the same claim as DSH. The load path does not.

DSH at `141eb6fe`,
[`docs/architecture.md`](https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/docs/architecture.md):

> Every part of the product is a plugin, including the model adapter, the tool registry, the session log, and the agent loop itself, so every part is replaceable from configuration.

> There is no privileged core to patch

> Any row it prints can be replaced by a patch of your own.

[`docs/subsystems/approval.md`](https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/docs/subsystems/approval.md):
"`never` is enforced inside the service before waterfall dispatch, so even an answerer registered later with `prepend` cannot bypass it."
[`packages/interaction/user-approval/src/index.ts`](https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/packages/interaction/user-approval/src/index.ts)
L307-312 implements that. The approval *row* remains a Cordis plugin (`id: approval` in the base bundle). Disabling or replacing that row is composition, not waterfall prepend. Cordis fiber reload is in-process. Last brief already had this; it still holds at the pin.

Pi at `a17323e5` does not have that composition. There is no dump-config row for Chat, no patch-by-id, no in-process Cordis HMR. Reload is specified as complete-generation host restart. The hosts and the allowlist are not plugins. DSH is not a second copy of this tree, and this tree is not a second copy of DSH.

DSH profile posture is unchanged. Do not retell rc.8 on that page.

## What an operator should do

Watch for a tag that contains `a17323e5`. Do not install `dev`. Do not treat `PI_EXPERIMENTAL=1` as a release. `v0.84.2` still has no `plugins.md` and still loads the old extension API. Credential print remaining ungated on the tag is last brief's fact, not this read.

## What remains unverified

- Did not execute `PI_EXPERIMENTAL=1` / `pi client`. File that would settle runtime behavior: a local run of that binary at this SHA, or a test that already does (several `experimental-*.test.ts` files exist; their assertions were not used as a substitute for the load-path read).
- Did not read all 264 diffs. File that would settle an unread commit: a diff in this range that introduces `packages/agent/src/plugins/` kernel code or a production `configureServices` that `provide()`s Chat before the host. Grep at the pin found neither.
- Live `origin/dev` after 2026-08-21 (qa.md: 84 / 266) was not read. The pin forbids it. File that would settle a later kernel: `plugins.md` at a *later* SHA dropping "remain illustrative", or a kernel module the experimental server actually calls.
- Did not re-walk DSH `vendor/include` `applyEntryPatches` as a tour; used architecture.md, approval.md, and user-approval `index.ts` at `141eb6fe`, plus the last brief's dump-config read. That is enough for the comparison because Pi has no equivalent row.

## One-sentence verdict

Pi `dev` at a17323e5 did not grow a DSH-style replaceable gate: application hosts and a compiled-in service allowlist are not plugins, and the plugin kernel that would make built-in features unprivileged is still a design document.
