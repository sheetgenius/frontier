---
schema_version: bitter.frontier_harvest.v0
provider: temporal-agent-harness
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/temporal-agent-harness.yml
channels_present: [preview-or-beta, main-unreleased]
window_volume: 4 GitHub releases (all prerelease), 2 PyPI versions, 2 tags re-pointed after publish, 3 main-unreleased commits past 0.4.0 in window, 0 advisories, 9 material items
lane: primary sources, researcher; first cycle (no parent harvest, no profile); code read at tag 0.4.0 (e4bde4be) and main d7a55f8855 (main head at window close)
---

# Harvest -- temporal-agent-harness (primary sources)

Punctuation is ASCII. Pin tags or SHAs, not main. Baseline is the intake notes (`sources/temporal-agent-harness.notes.md`, 2026-09-22); there is no parent harvest and no profile.

Identity check: `gh api repos/temporal-community/temporal-agent-harness` -> full_name temporal-community/temporal-agent-harness, description "Temporal-native Durable Multi Agent Harness", default_branch main, created 2026-06-18T22:43:11Z, license MIT, homepage null, 60 stars / 17 forks (2026-09-23). pyproject at 0.4.0 names "Temporal Technologies Inc." as author. CODEOWNERS at 0.4.0: global @Alex-Tideman @JasonSteving99 @long-nt-tran @JoshuaFrenchwood; `/temporal_agent_harness/` @JasonSteving99; `/.github/workflows/` @JasonSteving99 @Alex-Tideman. Matches the contract.

Channel rule for this source: every GitHub release is `prerelease=true`, so no tag qualifies as `tagged-release` under the brief's definition. Everything in a tag is `preview-or-beta`; the PyPI wheel is the only versioned install artifact. Where PyPI carries a version, it is recorded alongside.

Pins used below:
- T = https://github.com/temporal-community/temporal-agent-harness/blob/0.4.0 (tag 0.4.0 -> e4bde4beb078d7ec3432c84b71e64e1efd554752)
- M = https://github.com/temporal-community/temporal-agent-harness/blob/d7a55f8855c31eb1a3281d2502f626c8a153aa44 (main head at 2026-09-21T23:59:59Z per `commits?sha=main&until=...`)

## Release ledger

| Tag | Tag commit (current) | GitHub published_at | prerelease | PyPI upload (wheel) | ahead_by vs previous tag |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | 056187fabf (2026-09-04T00:14:52Z) | 2026-09-04T00:17:05Z | true | none | n/a (first) |
| 0.2.0 | f07bc18cf4 (2026-09-10T23:47:59Z) | 2026-09-10T23:49:33Z | true | none | 10 (behind 0, ahead) |
| 0.3.0 | 3e6ff46cf0 (2026-09-11T07:51:48Z) | 2026-09-11T06:41:36Z | true | 2026-09-11T07:55:02Z | 3 (behind 0, ahead) |
| 0.4.0 | e4bde4beb0 (2026-09-16T01:34:53Z) | 2026-09-15T23:46:50Z | true | 2026-09-16T01:42:54Z | 7 (behind 0, ahead) |
| main @ d7a55f8855 | 2026-09-17T22:19:48Z | n/a | n/a | n/a | 3 ahead of 0.4.0 (behind 0) |

`gh api .../compare/0.1.0...0.4.0` -> ahead_by=20, behind_by=0. PyPI JSON (`curl -s https://pypi.org/pypi/temporal-agent-harness/json`, 2026-09-23): info.version=0.4.0, requires_python >=3.11, classifier "Development Status :: 2 - Pre-Alpha", releases {0.3.0, 0.4.0} only. Zero published security advisories (`gh api .../security-advisories` -> 0). No new tag or release through 2026-09-23. All four releases fall inside the window; none existed on 2026-08-20.

## 1. Tags 0.3.0 and 0.4.0 were re-pointed after their release pages went live; the wheel came from a manual dispatch that skips the tag/version check

- **Date:** 2026-09-11 (0.3.0), 2026-09-15/16 (0.4.0)
- **Channel:** `preview-or-beta` (tag) plus PyPI wheel
- **Ancestry evidence:** Release 0.4.0 published_at 2026-09-15T23:46:50Z; the `release`-event run of publish.yml ran on head_sha 16bb1bdf3b and was cancelled (https://github.com/temporal-community/temporal-agent-harness/actions/runs/35037180376). `pyproject.toml` at 16bb1bdf reads `version = "0.3.0"`. A `workflow_dispatch` on ref 0.4.0 at d34f5f8103 (the version bump, #133) failed at "Run the test suite" (run 35037988034). A second `workflow_dispatch` on ref 0.4.0 at e4bde4beb0 succeeded (run 35045016382) and PyPI shows the 0.4.0 wheel at 2026-09-16T01:42:54Z. The tag now points at e4bde4be (committed 01:34:53Z, 108 minutes after the release was published). `compare/16bb1bdf3bad...0.4.0` -> ahead_by=2, behind_by=0. PR #134 body (merged 2026-09-16T01:34:54Z): "Two bugs reached the first commit tagged 0.4.0 that way (we'll move that tag up after this)." Same pattern at 0.3.0: release published 06:41:36Z; dispatch at 462eb8bd failed tests (runs 34572720900, 34573129350); the tag now points at 3e6ff46c, committed 07:51:48Z, 70 minutes after publish; PyPI 0.3.0 at 07:55:02Z.
- **Receipt:** https://github.com/temporal-community/temporal-agent-harness/pull/134 ; publish workflow at the tag: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/.github/workflows/publish.yml#L13-L19 (triggers), #L49-L51 (test gate), #L58-L71 (version check guarded by `if: github.event_name == 'release'`), #L32-L34 (no required reviewer; "the place to add required reviewers")
- **Half:** defect | **Confidence:** high

**What changed.** The README at 0.4.0 tells readers "A release tag marks a commit that is known-good at the moment it was cut: the tests passed" (T/README.md#L183-L187). For both PyPI-published versions that was not true of the commit the tag first named: the suite failed or was never run there, and the tag was moved to a later commit. The first 0.4.0 tag target carried pyproject version 0.3.0, the exact case the workflow's comment warns about. The version check that would catch it runs only on the `release` event; both successful PyPI uploads (0.3.0 and 0.4.0) came from `workflow_dispatch`, where that step is skipped. The versions happened to match at the final commits.

**Operator consequence.** "Pin to a release" means the PyPI wheel, not the tag. A `git clone --branch 0.4.0` done between 2026-09-15T23:46Z and 2026-09-16T01:34Z got 16bb1bdf, which is not what PyPI ships; anyone who vendored the examples then should re-fetch and compare SHAs (`git rev-parse 0.4.0` should read e4bde4be). Treat a tag as mutable until its PyPI upload exists. Watch for: a required reviewer on the `pypi` environment, or the version check running on dispatch too.

## 2. In the coding example, OpenCode "always" maps to `remember=True`, which allow-lists the tool by name: one "always" on bash approves every later bash command with any arguments

- **Date:** present at 0.4.0 (2026-09-16) and unchanged on main d7a55f8855
- **Channel:** `preview-or-beta` (example code; the README says `examples/` is not shipped in the wheel, T/README.md#L189-L192)
- **Ancestry evidence:** read at tag 0.4.0 and at d7a55f8855 (same mapping at M harness_backend.py lines 289 and 301).
- **Receipt:** https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/examples/callback_tools/coding_agent/opencode_shim/harness_backend.py#L273-L303 (line 290 `approved = reply in ("once", "always")`, line 302 `remember=reply == "always"`), #L55-L62 (`_approval_patterns`: for bash the prompt pattern is the literal command string); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/examples/callback_tools/coding_agent/opencode_shim/backend.py#L230 (`always=patterns or [tool]`, what the OpenCode dialog shows "always" would cover); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1517-L1520 (approved + remember -> `with_tool_allowed(entry.tool_name)`); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L103-L124 (`auto_approves` returns `tool_name in self.auto_approve_tools`, no argument match; `with_tool_allowed` adds the bare name); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1635-L1656 (`_apply_policy_update` re-evaluates every pending call and resolves any the new policy allows)
- **Half:** defect | **Confidence:** high (code reading; not run against a live OpenCode)

**What changed.** Nothing changed in-window beyond the example first shipping in a tag; this is the first read. The code confirms the contract's first operator question. The shim hands OpenCode `always=[<the bash command>]`, so the dialog frames "always" as covering that command pattern. The shim then discards the pattern and posts `remember: true` to `/api/approve`; the harness adds `bash` to `auto_approve_tools` by name, and `auto_approves` never looks at arguments. Every later `bash` call in that session, with any command, auto-approves, and any other `bash` call already parked at the gate is released in the same step. The same holds for `edit`, and `write` (which the shim presents as an `edit` prompt, #L237-L240, but remembers under the tool name `write`). The allow-list lives on the live session policy and is surfaced on `AgentStatus.approval_policy` "so a client can persist it and replay it into the next session" (agent_interface.py#L90-L94).

**Operator consequence.** If you run the coding example, never answer "always" to bash, edit or write: it is a session-wide blank check for that tool, not the pattern OpenCode shows. Re-audit any session where someone did: `GET /api/status/{id}` shows `approval_policy.auto_approve_tools`. The fix the evidence would settle: a pattern-scoped remember in the harness, or the shim mapping "always" to `remember=false`. Neither exists at 0.4.0 or d7a55f8855.

## 3. The caller's `AgentConfig.approval_policy` wins over the agent's default; `dangerously_skip_all_approvals` is layer zero; relaxing the live policy releases already-parked calls

- **Date:** present at 0.4.0; unchanged at d7a55f8855
- **Channel:** `preview-or-beta` (library, in the 0.4.0 wheel)
- **Ancestry evidence:** read at tag 0.4.0; same logic at M agent_workflow.py lines 1437-1438 (config wins), 1697-1699 (remember cascade), 1747-1767 (`_apply_policy_update`), agent_interface.py line 98 (`dangerously_skip_all_approvals`), 207 (`AgentConfig.approval_policy`).
- **Receipt:** https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1282-L1289 ("the caller's config value wins when given ... The caller can never be overridden"); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L71-L114 (layers 0-2; layer 0 short-circuits at #L110-L111), #L191-L196 and #L209 (AgentConfig docstring: "A caller's policy is authoritative and overrides the agent's default"); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1601-L1611 (`set_approval_policy`), #L1635-L1656 (re-evaluation, resolved with reason "auto-approved by updated policy"); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/slash_commands.py#L20 (default commands include `approvals`, `allow-tools`), #L250-L259 (`/approvals skip` -> `dangerously_skip_all()`), #L309-L337
- **Half:** both | **Confidence:** high

**What changed.** Answers operator questions 2 and 3. Anyone who can start the workflow with a Temporal client can pass `AgentConfig(approval_policy=ToolApprovalPolicy.dangerously_skip_all())` and the agent author's default is ignored; the runner has no floor the author can set. The packaged web app does not expose this: `POST /api/sessions` at 0.4.0 builds `AgentConfig(is_message_queuing_enabled=...)` only (T/temporal_agent_harness/web/app.py#L224-L236), so a caller who reaches the agent through the HTTP API cannot choose the startup policy. But at 0.4.0 the same caller can `POST /api/operator-commands` (app.py#L304-L309) with `/approvals skip`, a packaged default command, which swaps the live policy to layer zero and releases every parked call. The operator who relaxes the policy is told only "Approvals set to **skip**." (slash_commands.py#L319); the released calls appear afterward on the event stream as `tool_approval_resolved` with the updated-policy reason. There is no preview of what is about to run. The capability half: the policy is a small serializable object with an honest name for the dangerous layer, a caller who wants more gating than the author chose can get it, and approvals are deliberately kept off the agent-to-agent channel (agent_workflow.py#L1486-L1500) so a parent agent cannot approve its child's gated calls.

**Operator consequence.** On 0.4.0, treat Temporal namespace access and HTTP reachability of the packaged server as approval authority: either can turn gating off for a live session. Before relaxing a policy, read `pending_approvals` on `/api/status/{id}` (or `/status`) because every one the new policy allows runs immediately. On main (item 5) the packaged `/approvals` and `/allow-tools` commands are deleted, which removes the HTTP route to layer zero unless an agent author writes a handler that calls `set_approval_policy`. The startup override by a Temporal client is unchanged there.

## 4. The packaged server binds 0.0.0.0 with no authentication; main adds wildcard CORS

- **Date:** 0.0.0.0 default present at 0.4.0; CORS added 2026-09-17 in #139 (d7a55f8855)
- **Channel:** bind default `preview-or-beta` (0.4.0 wheel); CORS `main-unreleased`
- **Ancestry evidence:** `compare/0.4.0...d7a55f8855` -> ahead_by=3, behind_by=0; `git show 0.4.0:temporal_agent_harness/web/app.py | grep -i cors` returns nothing; d7a55f8855 adds `CORSMiddleware(allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])`.
- **Receipt:** https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/cli.py#L121 (`serve.add_argument("--host", default="0.0.0.0")`); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/serve.py#L44; https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/app.py#L281-L290 (`/api/approve` forwards `remember`), #L304-L309 (`/api/operator-commands`); no auth or middleware anywhere under `temporal_agent_harness/web` at 0.4.0 (`git grep -i "auth|middleware|bearer"` empty); README "Self-hosting the web app" names "auth middleware" as a reason to build your own app (https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/README.md#L579-L584). CORS: https://github.com/temporal-community/temporal-agent-harness/commit/d7a55f8855c31eb1a3281d2502f626c8a153aa44 (https://github.com/temporal-community/temporal-agent-harness/blob/d7a55f8855c31eb1a3281d2502f626c8a153aa44/temporal_agent_harness/web/app.py#L152-L160, comment: "Nothing here is credentialed, so the wildcard is safe").
- **Half:** defect | **Confidence:** medium-high (code reading; no cross-origin probe run)

**What changed.** `temporal-agent-harness serve`, the path the README leads with, listens on every interface with no authentication. Its endpoints approve tool calls (with `remember`), post callback results, send messages, and at 0.4.0 run operator commands including `/approvals skip`. Session ids come from `GET /api/sessions` and tool ids from `/api/attach`. On main, #139 adds wildcard CORS so a tic-tac-toe HTML file opened from disk can call the API. The code comment justifies it because nothing is credentialed. That reasoning misses the point: the uncredentialed endpoints are the authority. With wildcard CORS, any web page the operator visits can make JSON POSTs to the server and read the responses, subject to whatever local-network protections the browser applies. The coding example's shim reaches the agent through this same server (coding_agent/README.md "How it maps to the harness").

**Operator consequence.** Run `serve --host 127.0.0.1` on 0.4.0, and do not run the main-branch server with a coding agent attached. The 0.4.0 wheel has no CORS, but its 0.0.0.0 default exposes approvals to the LAN. Watch the next tag for whether #139's CORS ships, and for a loopback default.

## 5. Main after 0.4.0 in window: #137 deletes the operator-command channel and the packaged slash commands, and makes messages first-class

- **Date:** 2026-09-17T20:22:13Z
- **Channel:** `main-unreleased`
- **Ancestry evidence:** `compare/0.4.0...main` at window close (d7a55f8855): ahead_by=3, behind_by=0, commits 1d61f9bee9fc (2026-09-16, #135), e62c778b4abb (2026-09-17, #137), d7a55f8855c3 (2026-09-17, #139). None is in any tag.
- **Receipt:** https://github.com/temporal-community/temporal-agent-harness/commit/e62c778b4abbde588204c0ac294f35d4d46bfa33 (deletes `temporal_agent_harness/harness/slash_commands.py`, 378 lines; adds docs/design/unified-message-dispatch.md and per-message-events.md); https://github.com/temporal-community/temporal-agent-harness/blob/d7a55f8855c31eb1a3281d2502f626c8a153aa44/temporal_agent_harness/web/app.py#L219-L229 (`/api/operator-commands` gone; `create_session` now passes `AgentConfig()`)
- **Half:** both | **Confidence:** high

**What changed.** Per the commit body: one inbound path. Everything goes through `send_agent_message` into `@agent.accepts` handlers. Each handler declares `mid_turn` (ENQUEUE / REJECT / ACCEPT; REJECT is the default), replacing `AgentConfig.is_message_queuing_enabled`, which is removed from AgentConfig on main. `expected_turn` is dropped from the send. `message_id` joins `turn_id` on every event. `MessageQueued`, `reply` and `error` events are deleted in favour of `message_accepted` / `message_handler_start` / `message_handler_end|error`. For approvals, the packaged `/approvals strict|safe|skip` and `/allow-tools` defaults, which let any operator-command caller reach layer zero (item 3), no longer exist. The runtime `set_approval_policy` and the `remember` cascade are unchanged (M agent_workflow.py lines 1697-1699, 1715, 1747-1767). The shim's "always" mapping is unchanged (M harness_backend.py line 301).

**Operator consequence.** This is a breaking wire and API change that is not in the wheel. Code written against the main README will not run on 0.4.0, and 0.4.0 clients that send `expected_turn`, read `reply` events or set `is_message_queuing_enabled` will break on the next tag. The approval surface gets narrower when it ships, which is the capability half: less to lock down. Do not write against it until a tag carries it.

## 6. 0.4.0 closes an MCP approval bypass in the OpenAI Agents integration, and fails closed on unwrapped servers

- **Date:** merged 2026-09-14T21:27:30Z (#128, c01a9f0e3b71); shipped in the 0.4.0 wheel 2026-09-16
- **Channel:** `preview-or-beta` (0.4.0 tag and PyPI 0.4.0)
- **Ancestry evidence:** `git log 0.3.0..0.4.0` includes c01a9f0e3b71; `git show 0.3.0:.../_openai_runner.py | grep -c harness_mcp` -> 0.
- **Receipt:** https://github.com/temporal-community/temporal-agent-harness/pull/128 ; https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/ai_sdks/openai_agents/_openai_runner.py#L181-L189 (raises ValueError unless `is_harness_mcp_server(s)`); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/ai_sdks/openai_agents_harness.py#L542 (`as_harness_mcp_server`)
- **Half:** both | **Confidence:** high

**What changed.** The PR body says "MCP tools right now bypasses tool approvals + event emission. This fixes that." At 0.3.0, the first PyPI version, MCP tools in the OpenAI Agents SDK integration ran with no approval gate and no tool events. At 0.4.0 an MCP server must be wrapped with `as_harness_mcp_server(...)` or the run raises. The `inherently_safe` flag applies to the whole server, not per tool; the PR itself flags that as a TODO. The 0.4.0 release notes mention only Observable agent state and say nothing about this fix.

**Operator consequence.** Anyone on the 0.3.0 wheel with MCP servers under the OpenAI Agents integration should upgrade and re-audit what those tools did, because none of it was gated or logged as tool events. On upgrade, expect a hard ValueError until each server is wrapped. Marking a server `inherently_safe` auto-approves every tool it exposes under `allow_inherently_safe()`.

## 7. "No double-run tool calls" holds for completed activities on replay, not for a tool interrupted mid-run; nothing enforces idempotency

- **Date:** present at 0.4.0; default unchanged at d7a55f8855 (M agent_workflow.py line 2855)
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** read at tag 0.4.0.
- **Receipt:** https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/README.md#L204-L209 ("no lost state, no double-run tool calls. Model and tool calls retry by policy"); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L2577-L2716 (`activity_tool_defn`: default `ActivityConfig(start_to_close_timeout=timedelta(seconds=30))` at #L2669-L2676, no `retry_policy`, no idempotency key; `workflow.execute_activity(tool_name, ...)` at #L2708; the body publishes `tool_start` then runs `user_fn` on every attempt, #L2633-L2656). The subagent path, by contrast, dedupes its publish with a heartbeat memo (#L2208-L2215), and docs/internal/agents-as-subagents.md at the tag says "Best-effort, NOT idempotent" with idempotent resend deferred (https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/docs/internal/agents-as-subagents.md#L467-L471).
- **Half:** defect | **Confidence:** high on the code; the retry default is Temporal-service behaviour, not harness

**What changed.** Answers operator question 4. An activity-backed tool gets a 30-second start-to-close timeout and no retry policy from the harness. With no policy, the Temporal service's default applies: retries with backoff and no attempt cap. That is a Temporal behaviour, not a harness one. Replay after a worker crash does not re-run an activity whose completion is in history, and that is what the README claim rests on. An activity that was running when the worker died, or that exceeded 30 seconds, is scheduled again and `user_fn` runs again with the same arguments. A long `bash`-like activity tool can therefore run twice purely because of the default timeout. Nothing in the harness requires or checks that a tool is idempotent, and no `idempotent` flag or doc guidance exists at the tag (`git grep -i idempot` hits only subagent and approval-decision internals). Callback tools, the coding example's six, are different: the result submission is idempotent per `tool_id` (coding_agent/README.md "How it maps to the harness"), but the side effect runs on the laptop before submission.

**Operator consequence.** Make every activity-backed tool with side effects idempotent yourself, or set `activity_config` with `RetryPolicy(maximum_attempts=1)` and a realistic timeout. Read "no double-run" as "no re-run of completed work on replay". This is a harness-plus-Temporal-service claim, and the harness does not cover tool side effects (contract rejected evidence: `temporal_platform_guarantee_assumed_to_cover_tool_side_effects`).

## 8. What lands in workflow history, and where the default payload offload goes

- **Date:** present at 0.4.0
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** read at tag 0.4.0.
- **Receipt:** https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_protocol/events.py#L500 (`ToolRequested.tool_input`), #L517 (`ToolApprovalRequested.tool_input`), #L554 (`ToolStartEvent.tool_input`), #L564 (`ToolEndEvent.tool_output`), #L609 (`CallbackRequested.tool_input`), #L783-L787 (`ReplyDelta.text`), #L792-L796 (thought-summary deltas); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L154-L159 (activity-side events flush as one Signal into the workflow every 50 ms: "the knob that trades UI snappiness against workflow-history volume"); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/utils/large_payload.py#L65-L72 (default dir `/tmp/temporal-large-payloads`, threshold 1,500,000 bytes), #L31-L45 (no GC for either driver; S3 needs a bucket lifecycle policy), #L178 (`DEFAULT_PAYLOAD_STORAGE = local_payload_storage()`); https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/plugin.py#L146-L163 (plugin defaults to local storage; `None` disables offload)
- **Half:** both | **Confidence:** high on contents; retention and reader access are Temporal-service facts not settled here

**What changed.** Answers operator question 5, on contents. The user message arrives as a `send_agent_message` update, and the web app reads it back from history (`_session_user_message_from_history_event`, app.py). Tool arguments, tool outputs, callback results and reply and thought deltas stream as signals into the workflow's history. Model calls run as activities, so their inputs and outputs are activity payloads in history too. In the coding example, `read`, `grep` and `glob` are auto-approved `inherently_safe` tools (T/examples/callback_tools/coding_agent/tools.py#L100, #L125, #L133), confined to the project root (opencode_shim/local_tools.py#L44-L50). Any file under the root that the model asks for, `.env` included, therefore goes to the remote worker and into history with no prompt. Payloads over 1.5 MB go by default to `/tmp/temporal-large-payloads` on the local host, keyed by SHA-256, never deleted. No payload codec or encryption appears anywhere in the package (`git grep -i "codec|encrypt"` empty), so against Temporal Cloud, history holds plaintext prompts, file contents and command output unless the operator adds a codec.

**Operator consequence.** Before pointing a harness agent at Temporal Cloud or a shared S3 bucket, add a data-converter codec. Also set the namespace retention you want and a bucket lifecycle rule. Treat the project root the coding example serves as fully readable by the remote side. Clear `/tmp/temporal-large-payloads` on dev hosts. Retention and who can read the history are properties of the Temporal service and namespace, not of the harness; those were not reached here.

## 9. README drift: the repo front page at window close documents a dispatch model the wheel does not have

- **Date:** 2026-09-17 (#137, #139)
- **Channel:** `main-unreleased` (docs)
- **Ancestry evidence:** `git log 0.4.0..d7a55f8855 -- README.md` -> e62c778 (#137), d7a55f8 (#139); `git diff --stat` 103 insertions, 47 deletions.
- **Receipt:** https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/README.md vs https://github.com/temporal-community/temporal-agent-harness/blob/d7a55f8855c31eb1a3281d2502f626c8a153aa44/README.md
- **Half:** both | **Confidence:** high

**What changed.** Answers operator question 8 and the brief's question 6. The sections that differ between tag 0.4.0 and d7a55f8855 are:
- "## Slash Commands" (0.4.0 line 439), with its `/approvals strict|safe|skip` / `/allow-tools` / `/status` / `/stop` table. It is replaced on main by "## Accepted Messages" (line 438) and a new "### Discovery" (line 537), which cover `@agent.accepts`, `MidTurn`, `model_callable` and the `message_id` event vocabulary.
- "## A taste". The imports change (`slash_commands` out, `MidTurn` in) and the `slash_commands=slash_commands.default_commands()` constructor arg is removed.
- "### Try it -- run the example agents". "all six" becomes "all seven".
- "### All examples behind one UI". The tic-tac-toe agent is added.
"Versioning and stability", "What you get" and "Self-hosting the web app" are unchanged. None of the mid-turn dispatch semantics are in the 0.4.0 wheel.

**Operator consequence.** Read the README at the tag you install (`/blob/0.4.0/README.md`). On main, the front page describes a model with no slash commands and per-handler mid-turn modes. The installed wheel still has global message queuing and the packaged `/approvals skip`.

## Researcher lane notes

- #135 (1d61f9bee9fc, 2026-09-16, main-unreleased): makes the harness run on Python 3.11 and decouples it from Nexus. It moves MCP-server wrapping into `openai_agents_harness.py` and simplifies `_openai_runner.py`. No approval or policy semantics change. Operator effect: 3.11 users of the OpenAI Agents path should wait for the next tag.
- #139 (d7a55f8855, 2026-09-17, main-unreleased): tic-tac-toe example with a non-LLM model (TypeSafe `jev`), `TYPESAFE_API_KEY` in `.env.example`, and the wildcard CORS covered in item 4.
- Operator question 6 (does the shim fail closed when OpenCode's protocol shifts): not settled by reading. The README at the tag says to pin OpenCode because the protocol "shifts between releases" (T/examples/callback_tools/coding_agent/README.md#L88-L89). A probe is needed.
- Operator question 9 (`dangerously_allow_all` vs `model_callable`): not examined this cycle.
- Operator question 10 (org disclaimer vs Temporal authorship): unchanged from intake. Both statements stand.
- The hosted-example defaults are worth one line. Five of the in-tree examples ship `approval_policy_default=ToolApprovalPolicy.dangerously_skip_all()`: react_agent, openai_hello, pydantic_ai_hello, nexus_hello and monty/workflow.py (grep at 0.4.0). The coding example uses `allow_inherently_safe()`.

## Observed after window close

- 2026-09-22 d54bef90153a #143: chat-server, reach harness agents from Slack and Discord.
- 2026-09-22 1d19ec936570 #142: "Auto mode: gate tool calls with swappable custom evaluators, Jev builtin".
- 2026-09-23 70842387b6fb #145: approval decision audit panel.
- 2026-09-23 e9ba6ac036c9 #146: dynamic step favicon.
- Main is 7 ahead of 0.4.0 as of 2026-09-23 (`compare/0.4.0...main` ahead_by=7, behind_by=0). No new tag or PyPI version. The wildcard CORS is still present at e9ba6ac036.

## Surfaces checked

- gh api repos/temporal-community/temporal-agent-harness (identity, created_at, license, homepage)
- gh api releases (4, all prerelease=true; published_at vs created_at) and release bodies 0.1.0-0.4.0
- gh api tags (tag -> SHA) and commits for each tag SHA (commit times)
- gh api compare 0.1.0...0.2.0 (10), 0.2.0...0.3.0 (3), 0.3.0...0.4.0 (7), 0.1.0...0.4.0 (20), 0.4.0...d7a55f8855 (3), 0.4.0...main (7), 16bb1bdf...0.4.0 (2)
- gh api actions/workflows/publish.yml/runs and job step conclusions (runs 35037180376, 35037988034, 35045016382, 34572720900, 34573129350, 34576506529)
- PyPI JSON (upload times, classifiers, requires_python)
- gh api security-advisories (0)
- Local clone read at pinned refs 0.4.0, 0.3.0, 16bb1bdf, d34f5f81, 462eb8bd, d7a55f8855: publish.yml, pyproject.toml, README.md, CODEOWNERS, harness/agent_workflow.py, agent_protocol/agent_interface.py, agent_protocol/events.py, slash_commands.py, web/app.py, web/cli.py, web/serve.py, utils/large_payload.py, plugin.py, ai_sdks/openai_agents/_openai_runner.py, openai_agents_harness.py, coding_agent/{README.md, tools.py, opencode_shim/harness_backend.py, backend.py, local_tools.py}, docs/internal/agents-as-subagents.md
- gh pr view 128, 134; commit bodies of #135, #137, #139

## Not reached

- A live run of the OpenCode shim (fail-closed behaviour on protocol drift; whether a reattach can deliver a `callback_requested` twice and re-run a local tool).
- A cross-origin probe against the main-branch server, and which browsers' local-network protections would block it.
- Temporal Cloud retention and history-read permissions (a service fact, not in this repo).
- The upstream sdk-python vendoring provenance of the OpenAI Agents integration, and whether #128's MCP gating exists upstream.
- The original target of tag 0.3.0 before it moved (only the published_at vs commit-time gap and the failed dispatch at 462eb8bd are evidenced; the 0.4.0 original target is evidenced by the release-event run SHA).
