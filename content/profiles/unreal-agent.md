---
schema_version: bitter.frontier_profile.v0
profile_id: unreal-agent
label: Unreal Agent
owner: unreallabsai
source_contract: sources/unreal-agent.yml
homepage: https://unreallabs.ai
docs: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/README.md
tagline: "Unreal's runner resumes saved sessions around an asynchronous Go tool loop."
compared_with:
  - codex
  - pi-coding-agent
repo: https://github.com/unreallabsai/unreal-agent
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: terminal-authority
    finding_id: 2026-10-13-unreal-agent-v0-3-1-ships-an-interactive-tui-that-runs-bash-as-you-in-the-current-directory-with-no-app
    last_verified: 2026-10-13
    status: active
  - id: codex-default-no-refresh
    finding_id: 2026-10-13-unreal-agent-v0-3-1-ships-an-interactive-tui-that-runs-bash-as-you-in-the-current-directory-with-no-app
    last_verified: 2026-10-13
    status: active
  - id: install-v031
    finding_id: 2026-10-13-unreal-agent-v0-3-1-moves-installs-to-an-unsigned-homebrew-cask-that-strips-macos-quarantine-v0-3-0-is
    last_verified: 2026-10-13
    status: active
  - id: macos-quarantine
    finding_id: 2026-10-13-unreal-agent-v0-3-1-moves-installs-to-an-unsigned-homebrew-cask-that-strips-macos-quarantine-v0-3-0-is
    last_verified: 2026-10-13
    status: active
  - id: runner-workspace-env
    finding_id: 2026-10-13-unreal-agent-the-runner-trusts-its-workspace-a-repository-s-env-can-choose-the-endpoint-that-receives
    last_verified: 2026-10-13
    status: active
  - id: state-directory-resume
    finding_id: 2026-10-13-unreal-agent-v0-2-0-moves-sessions-out-of-the-workspace-after-a-61-8-gb-runaway-an-old-session-id-resum
    last_verified: 2026-10-13
    status: active
  - id: restart-dedup
    finding_id: 2026-10-13-unreal-agent-v0-3-1-deduplicates-every-input-kind-across-restarts-and-lets-settings-change-the-existing
    last_verified: 2026-10-13
    status: active
  - id: anthropic-fallback-default
    finding_id: 2026-10-13-unreal-agent-v0-3-1-adds-an-anthropic-provider-that-requests-server-side-model-fallback-unless-anthropi
    last_verified: 2026-10-13
    status: active
  - id: compaction-thresholds
    finding_id: 2026-10-13-unreal-agent-v0-3-1-attempts-automatic-compaction-at-catalog-thresholds-uncataloged-models-get-a-zero
    last_verified: 2026-10-13
    status: active
  - id: async-grace-batching
    finding_id: 2026-10-13-unreal-agent-the-async-tool-loop-holds-at-v0-3-1-now-batching-fast-tool-results-with-one-second-grace
    last_verified: 2026-10-13
    status: active
  - id: vendor-benchmark-boundary
    finding_id: 2026-10-13-unreal-agent-the-launch-post-published-benchmark-tables-on-22-september-run-on-builds-absent-from-the
    last_verified: 2026-10-13
    status: active
  - id: failure-and-sigterm
    finding_id: 2026-10-13-unreal-agent-v0-3-1-fixes-sigterm-handling-but-retains-false-success-responses-provider-dependent-dupli
    last_verified: 2026-10-13
    status: active
  - id: harbor-urllib3-fixes
    finding_id: 2026-10-13-unreal-agent-v0-3-1-refreshes-harbor-s-urllib3-lock-to-fix-proxy-tls-confusion-and-streaming-resource
    last_verified: 2026-10-13
    status: active
  - id: harbor-pyjwt-fixes
    finding_id: 2026-10-13-unreal-agent-v0-3-1-refreshes-harbor-s-pyjwt-lock-to-include-parser-key-validation-and-jwks-redirect
    last_verified: 2026-10-13
    status: active
  - id: harbor-multidict-fix
    finding_id: 2026-10-13-unreal-agent-v0-3-1-refreshes-harbor-s-multidict-lock-to-fix-an-items-view-reference-leak
    last_verified: 2026-10-13
    status: active
  - id: go-api-migration
    finding_id: 2026-10-13-unreal-agent-v0-3-1-changes-the-public-go-api-even-though-the-session-file-format-remains
    last_verified: 2026-10-13
    status: active
  - id: operation-update-errors
    finding_id: 2026-10-13-unreal-agent-v0-3-1-delivers-operation-failures-through-updates-after-add-or-cancel-accepts-the-request
    last_verified: 2026-10-13
    status: active
  - id: failed-response-dispatch
    finding_id: 2026-10-13-unreal-agent-a-failed-model-response-can-still-schedule-valid-tool-calls-in-v0-3-1-including-during-rec
    last_verified: 2026-10-13
    status: active
  - id: output-cap-provider-exception
    finding_id: 2026-10-13-unreal-agent-v0-3-1-accepts-a-per-request-output-token-cap-but-openai-codex-rejects
    last_verified: 2026-10-13
    status: active
stance:
  use_for: "Contained trials of async tool work, and Go integrations whose owners can enforce execution limits, consume operation outcomes and migrate sessions. Compare successful tasks, dollars and human interventions before adopting it."
  avoid_for: "Unrestricted workstation use, unknown repositories opened with the runner, or consequential automation without a host that rejects failed responses before dispatch and recovery. Exit 0 and accepted cancellation are insufficient success checks."
  watch_next: "Use <a href='#what-is-unresolved'>the open questions below</a> as acceptance checks before expanding the trial."
---

# Unreal Agent

## Where it stands, 2026-10-13

**Install v0.3.1 for a contained trial.** The terminal client
[is interactive](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/README.md); the runner
[supports automation](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-runner/README.md) and
[resuming saved sessions](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L658-L679).
The [stable 6 October 2026 release adds Homebrew packaging](https://github.com/unreallabsai/unreal-agent/releases/tag/v0.3.1). Install
[the runner and `unreal-agent` terminal client with `brew install unreallabsai/tap/unreal-agent`](https://github.com/unreallabsai/homebrew-tap/blob/3d844f21a9417c719c9de225bee74415e9409ef6/Casks/unreal-agent.rb).
The terminal client [starts fresh on every launch](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L190-L203).
The client [runs shell commands in its launch directory without approvals or containment](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L190-L262),
with [your environment inherited by child processes](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/primitives/process.go#L606-L609).
Use a VM or container with restricted mounts, credentials and network access.

**Choose a package you can deploy.** On macOS, the tap
[clears quarantine from a package described as unsigned](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/.goreleaser.yaml#L61-L84).
If your fleet requires signing or notarization, put the release archives through
your own process. Docker carries
[only the runner](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/Dockerfile.release),
as [`unrea1labs/unreal-agent:v0.3.1`](https://hub.docker.com/v2/repositories/unrea1labs/unreal-agent/tags),
with a digit one. For binaries or images, skip
[v0.3.0: its release run was canceled](https://github.com/unreallabsai/unreal-agent/actions/runs/37487295997).

**Measure the whole job before switching harnesses.** The draw is
[async tool work and append-only, forkable sessions](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/README.md),
plus [grace timers that batch fast tool results](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L200-L258).
The vendor's
[22 September 2026 comparisons report lower aggregate input-token use](https://web.archive.org/web/20260922183130/https://unreallabs.ai/blog/unreal-agent/)
against historical [Codex 0.154.0/0.155.1](https://hub.harborframework.com/jobs/11a440fb-b1c4-473b-98a6-907500b3fdaf)
and [Pi 0.85.1](https://hub.harborframework.com/jobs/6ccd097a-747b-4867-be57-a56969df988f),
with one [Pi comparator mixing 0.85.1 and 0.86.1](https://hub.harborframework.com/jobs/da4ac972-9d5a-4142-b057-85f07375f14e),
using Unreal builds unmapped to public tags for
[Terminal-Bench](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6),
[SWE-Atlas](https://hub.harborframework.com/jobs/3d2fa057-e11c-4be0-a962-e8be81b87709) and
[DeepSWE](https://hub.harborframework.com/jobs/2311ca63-2929-49eb-ba0c-0084ef31ba8b).
Savings on the public release remain unresolved.

Before adopting it, compare this release with your installed alternative on the
same model, tasks and attempt count. Record successful tasks, input/output tokens,
dollars and human interventions. A smaller model bill earns its keep only if
setup, review and recovery leave you ahead.

**Use the runner only on a workspace you trust.** It
[loads the project's `.env` before choosing endpoint and credentials](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L222-L258).
An unset endpoint override can make the
[OpenAI client send your existing key to the file's chosen destination](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openai/client.go#L28-L46).
The file can also [replace `SANDBOX_EGRESS_PROXY`](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L525-L565).
Inspect it before supplying credentials, and enforce egress outside the process.

**Reject failed responses before consequential automation.** In this release, the coordinator can
[dispatch valid tool calls from a failed model response](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go),
including during [recovery](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L552-L563),
and the runner can still [exit 0](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L107-L110).

An embedding host must reject those responses before either path dispatches.
Inspect the [runner's JSONL log, which stores one JSON record per line](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L696-L703),
before counting a CI run as successful. The check comes too late
to prevent a command already executed.

**Choose credentials deliberately.** The terminal client's
[`openai-codex` default offers your existing Codex login and saves an accepted choice](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/README.md).
[Unreal Agent constructs its own tool loop](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L225-L262).
[Tokens are read once without refresh](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/client.go#L44-L83).
[Renew with Codex and restart when rejected](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/README.md#L61-L73), or use
[`unreal-agent -setup`](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/README.md)
to change the saved provider choice.

**Need to resume? Use the runner.**
[v0.2.0 moved runner sessions from the workspace to a user-level state directory](https://github.com/unreallabsai/unreal-agent/releases/tag/v0.2.0);
an ID [missing from that directory silently starts empty](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L658-L679).
Resume 0.1.x work with
[`-session-directory`](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L160) pointing to
[`<old-cwd>/.harness/sessions`](https://github.com/unreallabsai/unreal-agent/blob/v0.1.1/cmd/internal/agentrunner/run.go), or migrate
the files before cleanup. For parallel Bash, test your provider-model pair:
[repeated native tool outputs](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/responsesapi/request.go)
[are reported to cause recurring 400s on resume for some pairs](https://github.com/unreallabsai/unreal-agent/issues/11).
If that happens, start fresh or limit fan-out.

**Enforce runtime, disk and total-spend limits outside the loop.** v0.3.1
[fixes SIGTERM cancellation](https://github.com/unreallabsai/unreal-agent/commit/4be534be93e8f686b0be256062267af77c8e66df),
but [Bash has no internal timeout or on-disk capture cap](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/shell.go).
Add command timeouts and a state-directory quota. The runner's JSON
[`max_output_tokens` limits each request, not total spend](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/usage.go#L18-L20); leave it unset for
[`openai-codex`, which rejects it](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/client.go#L73-L78).

**[Configure the thresholds for automatic conversation summaries when using custom models](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/settings/settings.go#L31-L67).** The harness
[attempts automatic summaries from the last usage checkpoint and eligible history](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/contextbuilder/compaction.go#L13-L102).
[Uncataloged models get threshold zero](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/settings/settings.go#L70-L77),
so [reported usage can trigger summaries once enough history exists](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/contextbuilder/compaction.go#L41-L102).

Configure
[`settings.json`](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L158-L160)
in [the XDG config directory, normally `~/.config/unreal-agent`](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/xdgpath/directory.go#L9-L32).
Test task accuracy before committing to a long run.

**Disable fallback for fixed-model Claude evaluations.** The Anthropic adapter
[requests the `server-side-fallback-2026-07-01` beta by default](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/messagesapi/adapter.go#L92-L105).
Set [`ANTHROPIC_FALLBACK=false`](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/providers/providers.go#L95-L118)
to disable that request.

**Port and test your Go host before upgrading.** Restart deduplication now
[covers every persisted input kind; `ResumeState.ExternalInputIDs` becomes `InputIDs`](https://github.com/unreallabsai/unreal-agent/commit/31f4fdadc54dd5061ae33959bc151d1b649c3a31).
Adapt translators to [`tool.Result` and `ToLLMResult`](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/tool/tool.go#L25-L37)
and preserve [raw provider payloads for replay](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/model.go#L58-L63).
[`Add` and `Cancel` returning nil means acceptance; operation failures arrive on `Updates`](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/local_manager.go#L75-L165).
Wait for terminal outcomes and reconcile an unknown remote-cancellation result
before advancing dependent work.

## What is unresolved

- Public-release savings and summary quality: the
  [SWE-Atlas job identifies build `5cc55ebc88d3` and records no inference-cost total](https://hub.harborframework.com/jobs/3d2fa057-e11c-4be0-a962-e8be81b87709).
  A readable v0.3.1 comparison with its public build SHA, compaction settings,
  task outcomes before and after summaries, full costs and explained aggregation
  would settle what the install earns.
- Removing the host's failed-response check: a tagged fix and regression results
  covering both dispatch and recovery would establish when it can be retired. A
  nonzero exit-status fix alone would not settle execution authority.
- Anthropic fallback: this review leaves the beta's availability, served model
  and billing unresolved. Versioned provider documentation and a recorded
  request identifying the served model and its charges would settle them.
- ChatGPT credentials: this review leaves permission for this third-party client
  unresolved. Applicable provider terms and explicit coverage of Unreal
  Agent would settle the subscription question.
- Remote execution: the
  [maintainer points to a remote-job abstraction](https://github.com/unreallabsai/unreal-agent/issues/22#issuecomment-6035329363).
  Remote authentication and cancellation recovery remain unestablished. A published
  manager with those contracts and demonstrated recovery outcomes would establish
  what its host can rely on.

## Profile hygiene

This profile stops at 2026-10-13. Fact-check revision 4, 2026-10-14: receipt
placement, claim scope and the broken review link were corrected. This revision
adds no later product history.
