---
schema_version: bitter.frontier_profile.v0
profile_id: temporal-agent-harness
label: Temporal Agent Harness
owner: temporal-community
source_contract: sources/temporal-agent-harness.yml
homepage: https://github.com/temporal-community/temporal-agent-harness
docs: https://github.com/temporal-community/temporal-agent-harness/tree/04a49d1b037de46da2cba31676d2aa2f4c59118f/docs/internal
tagline: "Temporal Agent Harness 0.6.0 puts Code Mode in workflow workers and makes history compatibility part of the upgrade."
compared_with: []
repo: https://github.com/temporal-community/temporal-agent-harness
surface_class: open_source_commits
evidence_floor: official_docs
status: retired
retired_on: 2026-10-24
retired_reason: "a community reference harness with little outside adoption (about 120 GitHub stars at retirement); its durable-execution design remains a useful precedent, but it no longer earns a weekly read."
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: approvals-server-no-login
    finding_id: 2026-09-21-temporal-agent-harness-the-packaged-server-binds-0-0-0-0-with-no-authentication-main-adds-wildcard-cors
    last_verified: 2026-10-13
    status: active
  - id: always-allowlists-the-tool
    finding_id: 2026-09-21-temporal-agent-harness-in-the-coding-example-opencode-always-maps-to-remember-true-which-allow-lists-the-tool-by
    last_verified: 2026-10-13
    status: active
  - id: caller-policy-wins
    finding_id: 2026-09-21-temporal-agent-harness-the-caller-s-agentconfig-approval-policy-wins-over-the-agent-s-default-dangerously-skip
    last_verified: 2026-10-13
    status: active
  - id: tags-re-pointed
    finding_id: 2026-09-21-temporal-agent-harness-tags-0-3-0-and-0-4-0-were-re-pointed-after-their-release-pages-went-live-the-wheel-came
    last_verified: 2026-09-23
    status: retired
  - id: wildcard-cors-released
    finding_id: 2026-10-13-temporal-agent-harness-0-5-0-ships-wildcard-cors-on-the-unauthenticated-all-interface-server
    last_verified: 2026-10-13
    status: active
  - id: messages-and-policy-handlers
    finding_id: 2026-10-13-temporal-agent-harness-first-class-messages-shipped-in-0-5-0-the-packaged-skip-all-route-is-gone-and-the-examples
    last_verified: 2026-10-13
    status: active
  - id: auto-mode-jev-boundaries
    finding_id: 2026-10-13-temporal-agent-harness-auto-mode-can-approve-or-deny-without-a-person-but-a-remembered-tool-name-bypasses-the-eva
    last_verified: 2026-10-13
    status: active
  - id: workflow-local-code-mode
    finding_id: 2026-10-13-temporal-agent-harness-0-6-0-moves-code-mode-into-the-workflow-old-code-mode-histories-need-a-tested-cutover
    last_verified: 2026-10-13
    status: active
  - id: install-channel-and-publishing
    finding_id: 2026-10-13-temporal-agent-harness-0-5-0-and-0-6-0-publishing-shas-match-their-current-tags-npm-clients-lack-recorded-provena
    last_verified: 2026-10-13
    status: active
  - id: nexus-mcp-checkout-path
    finding_id: 2026-10-13-temporal-agent-harness-the-nexus-mcp-extra-cannot-resolve-from-public-pypi-alone-as-observed
    last_verified: 2026-10-13
    status: active
  - id: chat-approver-boundary
    finding_id: 2026-10-13-temporal-agent-harness-the-repository-chat-server-sends-approvals-to-slack-and-discord-without-its-own-approver
    last_verified: 2026-10-13
    status: active
  - id: gemini-conversations-and-errors
    finding_id: 2026-10-13-temporal-agent-harness-0-6-0-adds-workflow-held-gemini-conversations-and-stops-retrying-nontransient-gemini-4xx
    last_verified: 2026-10-13
    status: active
  - id: unreleased-filesystem-viewer
    finding_id: 2026-10-13-temporal-agent-harness-main-after-0-6-0-8-commits-unreleased-code-mode-gets-a-virtual-filesystem-and-agent-memory
    last_verified: 2026-10-13
    status: active
  - id: console-state-patch-guard
    finding_id: 2026-10-13-temporal-agent-harness-0-5-0-guards-console-state-patches-against-prototype-chain-paths
    last_verified: 2026-10-13
    status: active
  - id: inspectable-dag-preflight
    finding_id: 2026-10-13-temporal-agent-harness-0-5-0-adds-inspectable-agent-dag-scripts-and-code-mode-preflight-checks
    last_verified: 2026-10-13
    status: active
  - id: dependency-lock-advisories
    finding_id: 2026-10-13-temporal-agent-harness-release-locks-match-19-dependency-advisories-the-root-lock-update-is-main-only
    last_verified: 2026-10-13
    status: active
  - id: agent-state-lifecycle-migration
    finding_id: 2026-10-13-temporal-agent-harness-0-5-0-replaces-runner-state-and-authored-run-methods-with-declared-state-and-lifecycle-hoo
    last_verified: 2026-10-13
    status: active
stance:
  use_for: 'Pilot <a href="https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L247-L249">durable tool approvals</a> if your team already operates Temporal and can own experimental worker upgrades.'
  avoid_for: "Shared consoles without caller authentication and authorization; inspect <a href='https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L306-L338'>the approval and message routes</a>."
  watch_next: "A recorded replay of existing histories against <a href='https://github.com/temporal-community/temporal-agent-harness/commit/2d0c06bdeaf08e80500256ebd3c5405e9a342e01'>the 0.6.0 Code Mode change</a>."
---

# Temporal Agent Harness

## Where it stands, 2026-10-13

On 3 October 2026, [0.6.0 moved Code Mode, its script interpreter, into workflow workers and
replaced sandbox snapshots with replay against recorded tool results](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0).
For an operator moving 0.5.0 histories, the next job is testing worker
compatibility.

For a bounded Temporal pilot, [install `temporal-agent-harness[ui]==0.6.0`](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L88-L90).
[0.6.0 is a GitHub prerelease](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0),
with [Pre-Alpha status and Python >=3.11 on PyPI](https://pypi.org/pypi/temporal-agent-harness/0.6.0/json).
The [README calls it experimental and warns that APIs will change](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L7-L9).
Budget to own the experiment.

Check [approval authority](#who-can-release-a-waiting-tool),
[worker compatibility](#what-changes-on-the-workers), and
[optional integrations](#what-the-optional-integrations-require) before choosing your pilot.

## Who can release a waiting tool

**Protect the server before connecting real tools.** It [binds to 0.0.0.0 by
default](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/cli.py#L149)
and [accepts approvals, messages and callback results without authenticating
the caller](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L306-L338).
[Since 0.5.0, wildcard CORS permits cross-origin reads and JSON requests when
the browser and network allow access](https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/web/app.py#L176-L184).
Bind with `--host 127.0.0.1` and add authentication and origin checks. [Loopback
alone leaves that browser-permitted path open](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L176-L184).

**Remove or gate handlers that can relax approval policy.** Gated calls [park as
workflow waits for approval](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L608-L610).
0.5.0 [replaced the packaged skip-all route with first-class messages](https://github.com/temporal-community/temporal-agent-harness/commit/e62c778b4abbde588204c0ac294f35d4d46bfa33),
but examples [offer policy handlers with a `dangerously_skip_all` choice](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/auto_mode/workflow.py#L257-L284).
[`model_callable=False` filters the default generated toolset](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/subagent_toolset.py#L18-L29);
[HTTP callers](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L330-L338)
and [parents granted `dangerously_allow_all()` can still reach those
handlers](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/subagent_toolset.py#L57-L109).
A Temporal client can [override the starting policy](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L2002-L2014).
Relaxing it [releases permitted calls already waiting](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L2624-L2655).
Decide who may change policy before adapting the examples.

**Try auto approval for routine decisions, then audit its denials.** Auto
mode [shipped in 0.5.0](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.5.0)
and [can approve or deny unattended](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L601-L610);
[errors and unusable results escalate](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L2494-L2622).
[Enable the policy, define criteria and wire an evaluator](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L335-L363).

For Jev, [the TypeSafe-backed approval evaluator](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/activity.py#L85-L97),
[install the `jev` extra and set `TYPESAFE_API_KEY` on the worker](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/activity.py#L43-L71).
Pin a concrete model instead of [the `jev-latest` default](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/models.py#L21-L24);
[Jev's confidence and irreversibility checks are evaluator-specific](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/approver.py#L187-L202).
Allow for [arguments, criteria and optional state](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/approver.py#L254-L269)
going to [TypeSafe](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/activity.py#L85-L97)
and [the request entering workflow history](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/approver.py#L182-L202).

For this Temporal pilot, compare time saved on routine prompts with time
spent writing criteria, reviewing denials, controlling console access and
testing worker upgrades. Keep auto approval only if it improves completed
jobs per hour of human attention.

**Keep argument-sensitive tools out of Always allow.** The coding example's
OpenCode shim [maps an "always" reply to `remember=true`](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/callback_tools/coding_agent/opencode_shim/harness_backend.py#L289-L302),
[granting the bare tool name](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L2292-L2295)
and [bypassing auto mode while that name remains allowed](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L455-L482).

## What changes on the workers

**Replay-test Code Mode, the script interpreter, before moving existing
workflow histories to 0.6.0.**
Install [`temporal-agent-harness[ui,code-mode]==0.6.0` on every workflow
worker serving Code Mode, retaining pydantic-monty 1.0.0](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml#L79-L84).
Keep relevant old histories on compatible workers until a versioned cutover
passes a recorded replay of representative 0.5.0 histories on 0.6.0
workers, recording worker and Monty versions and outcomes; [no compatibility path was found in the change](https://github.com/temporal-community/temporal-agent-harness/commit/2d0c06bdeaf08e80500256ebd3c5405e9a342e01).
Make activity-backed tool effects idempotent: [the default supplies a
30-second start-to-close timeout without an explicit retry override](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L3769-L3775).

**Migrate 0.4.0 clients and agents together.** Follow
[the message migration](https://github.com/temporal-community/temporal-agent-harness/commit/e62c778b4abbde588204c0ac294f35d4d46bfa33),
[the state migration](https://github.com/temporal-community/temporal-agent-harness/commit/c0f8ca01bf550cf1da349b02c84e0ac545c2c1d2)
and [the lifecycle migration](https://github.com/temporal-community/temporal-agent-harness/commit/faec13de3ee346597f179ee8cb9c8e474beeb03b).
Handle [invalid initialization as a terminal start failure](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L1051-L1095),
and put essential failure cleanup elsewhere because [teardown does not run on
workflow failure](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L993-L1011).
Keep console and server aligned with [the 0.5.0 state-patch guard](https://github.com/temporal-community/temporal-agent-harness/commit/421636d5900320233df9f0096809b4462123ff04).

**Refresh checkout locks separately from the harness version.** The
[0.6.0 root lock](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/uv.lock#L3485-L3486)
and [Nexus lock](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/nexus/mcp/uv.lock#L1241-L1242)
retain urllib3 2.7.0. Its affected streaming path [can spin indefinitely on a
malicious chunked Deflate response; 2.8.0 fixes it](https://github.com/advisories/GHSA-gh4c-6fx4-qh6g).
The [root update is main-only](https://github.com/temporal-community/temporal-agent-harness/commit/f50412138cab078f19c54e683e7ba5e529323f17)
and [leaves Nexus unchanged](https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/nexus/mcp/uv.lock#L1241-L1242).
Inspect installed versions and affected call paths; [wheel resolution can
differ from checkout locks](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml).

## What the optional integrations require

**Review the generated plan before pressing Run.** DAG Studio is a
[checkout-only example](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L205-L207) for [inspecting generated plans before executing them
with a separate Run action](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/README.md#L45-L63).
Inspect the script and per-step tools. Packaged [preflight checks syntax and
types without dispatching host tools](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/tool.py#L208-L224);
it also [briefly starts and discards a clean script](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/monty_stepper.py#L289-L317).
The example [uses simulated tools and skips their approvals](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/step_agent.py#L62-L66).
Set real authorization before replacing them. Preflight cannot decide what
a plan should be allowed to do.

**Give chat approval controls only to intended approvers.** The
repository-only [Slack/Discord bridge lets anyone who reaches its buttons
under platform permissions decide, without an owner or permitted-user check](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/src/app.tsx#L1073-L1127).
Choose the channel's participants accordingly: [every message handler is
also offered there](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/README.md#L393-L394).

**Size shared storage when adopting the Gemini conversation helper.** 0.6.0
[stops retrying Gemini 4xx errors other than 408 and 429](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/ai_sdks/google_genai_plugin/_errors.py).
In custom loops, adopt the optional [helper that sends the full conversation
in every model activity input](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/ai_sdks/google_genai_plugin/_interactions_conversation.py#L1-L31)
where needed. For multiple hosts, configure shared payload offload; [the
default is local disk at 1,500,000 bytes](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/utils/large_payload.py#L65-L72).

**Pin npm client versions and recorded integrity hashes.** The separate [TypeScript
client at 0.1.0 has no recorded provenance attestation](https://registry.npmjs.org/@temporalio%2fagent-harness-client/0.1.0);
neither do [React 0.1.0](https://registry.npmjs.org/@temporalio%2fagent-harness-react/0.1.0)
or [Svelte 0.1.0](https://registry.npmjs.org/@temporalio%2fagent-harness-svelte/0.1.0).

**Use a checkout for Nexus MCP.** Its [published extra requires
`temporal-nexus-mcp`](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml#L91-L108),
which [the release documents as checkout-only](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml#L91-L101).
Use the [documented checkout/workspace](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/nexus_hello/README.md#L197-L200)
or explicitly verify a trusted private index.

**Keep main's file viewer out of shared consoles.** As of this profile's
date, [virtual filesystems, memory bundles, the viewer and the separate
`typesafe` extra are main-only](https://github.com/temporal-community/temporal-agent-harness/compare/04a49d1b037de46da2cba31676d2aa2f4c59118f...091c8756126ca9684e0b8fe57d82d9122c29f517).
The viewer [takes caller-supplied filesystem configuration and a task queue
without a session identity](https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/web/file_view.py#L61-L133).
Wait for authenticated access limited to the session's mounts before sharing
it.

## What is unresolved

- **Test the browsers that will reach your server.** Test cross-origin reads
  and JSON requests against 0.6.0. Record browser versions, network policy
  and results to establish reachability under [the shipped CORS configuration](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L176-L184).
- **Require released access controls before sharing a console.** A tagged
  implementation and route tests rejecting unauthenticated callers,
  disallowed origins and cross-session file access would show whether the
  [viewer boundary](https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/web/file_view.py#L61-L133)
  has changed.
- **Resolve payload custody before using sensitive inputs.** Check Temporal Cloud
  history-reader permissions and retention for [agent payloads](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/ai_sdks/google_genai_plugin/_interactions_conversation.py#L1-L31),
  and TypeSafe's processing and retention of [Jev requests](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/activity.py#L85-L97)
  before sending sensitive data. Published guidance and terms from each provider
  for those payloads would settle each service's part.
- **Verify npm archives against their stated source.** An archive-to-source
  build comparison and a recorded source-linked provenance attestation
  would answer the two [publication questions](https://github.com/temporal-community/temporal-agent-harness/pull/158).
- **Test the OpenCode shim before relying on protocol compatibility.** Pin
  OpenCode and harness versions, exercise changed protocol fields and record
  whether [the shim fails closed](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/callback_tools/coding_agent/opencode_shim/harness_backend.py#L289-L302)
  to settle behavior for that tested version pair.

## Profile date and evidence

This profile is dated 2026-10-13. Use the [evidence method](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md)
to check it. This page establishes no later state.

## Profile hygiene
