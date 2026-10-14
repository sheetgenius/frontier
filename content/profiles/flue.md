---
schema_version: bitter.frontier_profile.v0
profile_id: flue
label: Flue
owner: withastro
source_contract: sources/flue.yml
homepage: https://www.flueframework.com
docs: https://flueframework.com/docs
tagline: "Flue's approval recipe stores exact arguments and ends the response while a person decides."
compared_with:
  - pi-coding-agent
x:
  project: flueai
repo: https://github.com/withastro/flue
surface_class: open_source_commits
evidence_floor: commit
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: changesets-channel
    finding_id: 2026-09-21-flue-release-channel-changed-changesets-per-package-github-releases-and-a-next-dist-tag
    last_verified: 2026-09-23
    status: retired
  - id: broken-publishes-2-0-4-2-0-5
    finding_id: 2026-09-21-flue-2-0-4-and-2-0-5-were-broken-publishes-2-0-6-is-the-first-good-cut-after-v2-0
    last_verified: 2026-10-13
    status: retired
  - id: recursion-and-abort-fixes-2-0-7
    finding_id: 2026-09-21-flue-2-0-7-fixes-harness-tool-infinite-recursion-and-lost-tool-results-on-abort
    last_verified: 2026-10-13
    status: retired
  - id: tool-timeout-and-mcp-annotations-2-1-0
    finding_id: 2026-09-21-flue-2-1-0-per-tool-timeoutms-mcp-tool-annotations-preserved-configurable-trace-budgets
    last_verified: 2026-10-13
    status: retired
  - id: allowed-tools-not-enforced
    finding_id: 2026-09-21-flue-docs-on-main-skill-allowed-tools-is-guidance-not-a-security-boundary
    last_verified: 2026-10-13
    status: retired
  - id: agent-behavior-reference
    finding_id: 2026-08-10-flue-flue-v2-0-2-publishes-an-agent-behavior-reference-page-stating-the
    last_verified: 2026-10-13
    status: retired
  - id: prompt-cache-safe-tool-additions
    finding_id: 2026-08-10-flue-flue-v2-0-2-makes-conditional-tool-additions-prompt-cache-safe-on
    last_verified: 2026-10-13
    status: retired
  - id: sandbox-role-renames
    finding_id: 2026-08-10-flue-flue-v2-0-2-renames-the-sandbox-types-to-their-roles-and-replaces-the
    last_verified: 2026-10-13
    status: retired
  - id: cloudflare-agents-pin
    finding_id: 2026-08-10-flue-flue-v2-0-3-takes-ownership-of-the-cloudflare-agents-sdk-pin-instead-of
    last_verified: 2026-10-13
    status: retired
  - id: virtual-sandbox-default
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: retired
  - id: model-harness-separation
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-10-13
    status: retired
  - id: headless-deployable-target
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-10-13
    status: active
  - id: skills-markdown-first
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-10-13
    status: retired
  - id: skills-typescript-native
    finding_id: 2026-06-23-flue-defineskill-typescript-skills
    last_verified: 2026-10-13
    status: retired
  - id: skill-naming-ascii-spec
    finding_id: 2026-06-23-flue-skill-naming-ascii-spec
    last_verified: 2026-10-13
    status: retired
  - id: connector-agent-install
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-10-13
    status: retired
  - id: first-party-connector-ecosystem
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-10-13
    status: retired
  - id: one-zero-beta-line
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-09-23
    status: retired
  - id: durable-recoverable-execution
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-10-13
    status: retired
  - id: durable-streams-transport
    finding_id: 2026-06-23-flue-event-index-decoupled-from-stream-offset
    last_verified: 2026-10-13
    status: retired
  - id: actions-orchestration-primitive
    finding_id: 2026-06-23-flue-workflows-rebuilt-on-actions
    last_verified: 2026-09-23
    status: retired
  - id: define-naming-unification
    finding_id: 2026-06-23-flue-define-naming-unification
    last_verified: 2026-06-23
    status: retired
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
  - id: export-style-release
    finding_id: 2026-10-13-flue-2-3-0-returns-flue-to-export-style-releases-squashed-commits-from-a-source-tree-not-on-git
    last_verified: 2026-10-13
    status: active
  - id: npm-provenance-absent
    finding_id: 2026-10-13-flue-2-3-0-carries-no-npm-provenance-published-from-a-maintainer-account-not-the-ci-trusted-pub
    last_verified: 2026-10-13
    status: active
  - id: pi-one-x-provider-contract
    finding_id: 2026-10-13-flue-2-3-0-moves-flue-onto-pi-1-x-azure-provider-id-renamed-tool-durations-redefined-and-the
    last_verified: 2026-10-13
    status: active
  - id: local-process-group-kill
    finding_id: 2026-10-13-flue-2-3-0-makes-the-local-sandbox-actually-kill-a-timed-out-command-s-whole-process-group
    last_verified: 2026-10-13
    status: active
  - id: step-agent-identity
    finding_id: 2026-10-13-flue-2-3-0-gives-execution-interceptors-the-agent-s-name-on-every-step-which-per-agent-policy
    last_verified: 2026-10-13
    status: active
  - id: two-two-regressions-fixed
    finding_id: 2026-10-13-flue-2-2-0-to-2-2-2-carried-two-regressions-ai-gateway-claude-ids-fixed-the-same-afternoon-and
    last_verified: 2026-10-13
    status: active
  - id: next-dormant-streaming-preview
    finding_id: 2026-10-13-flue-npm-next-is-dormant-at-2-2-0-next-1-older-than-latest-missing-later-stable-fixes-with-sand
    last_verified: 2026-10-13
    status: active
  - id: cloudflare-sandbox-zero-x
    finding_id: 2026-10-13-flue-flue-s-cloudflare-sandbox-adapter-targets-the-0-x-sdk-cloudflare-s-sandbox-sdk-1-0-dropped
    last_verified: 2026-10-13
    status: active
  - id: trace-content-default-and-readme
    finding_id: 2026-10-13-flue-trace-content-is-still-on-by-default-the-flue-opentelemetry-readme-said-the-opposite-until
    last_verified: 2026-10-13
    status: active
  - id: allowed-tools-docs-released
    finding_id: 2026-10-13-flue-the-allowed-tools-correction-shipped-in-2-1-1-the-field-is-still-unenforced
    last_verified: 2026-10-13
    status: active
  - id: application-owned-approval-gate
    finding_id: 2026-10-13-flue-2-2-0-documents-an-approval-gate-pattern-and-states-that-flue-has-no-built-in-approval-api
    last_verified: 2026-10-13
    status: active
  - id: bounded-history-and-pdfs
    finding_id: 2026-10-13-flue-2-2-0-adds-bounded-history-reads-pdf-attachments-and-server-timestamps-and-makes-readsubmi
    last_verified: 2026-10-13
    status: active
  - id: trace-truncation-linear
    finding_id: 2026-10-13-flue-2-1-1-fixes-quadratic-trace-truncation-that-could-reset-cloudflare-durable-objects
    last_verified: 2026-10-13
    status: retired
  - id: github-latest-trails-npm
    finding_id: 2026-10-13-flue-github-latest-still-points-to-2-2-2-while-npm-latest-is-2-3
    last_verified: 2026-10-13
    status: active
  - id: azure-provider-api-distinction
    finding_id: 2026-10-13-pi-coding-agent-provider-changes-chatgpt-sign-in-on-the-openai-provider-short-lived-anthropic-credentials
    last_verified: 2026-10-13
    status: active
posture_basis:
  capability:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-10-13-flue-2-3-0-moves-flue-onto-pi-1-x-azure-provider-id-renamed-tool-durations-redefined-and-the
    - 2026-10-13-flue-2-2-0-adds-bounded-history-reads-pdf-attachments-and-server-timestamps-and-makes-readsubmi
    - 2026-10-13-flue-2-2-0-documents-an-approval-gate-pattern-and-states-that-flue-has-no-built-in-approval-api
  accessibility:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-10-13-flue-2-2-0-to-2-2-2-carried-two-regressions-ai-gateway-claude-ids-fixed-the-same-afternoon-and
    - 2026-10-13-flue-npm-next-is-dormant-at-2-2-0-next-1-older-than-latest-missing-later-stable-fixes-with-sand
    - 2026-10-13-flue-flue-s-cloudflare-sandbox-adapter-targets-the-0-x-sdk-cloudflare-s-sandbox-sdk-1-0-dropped
    - 2026-10-13-flue-github-latest-still-points-to-2-2-2-while-npm-latest-is-2-3
    - 2026-10-13-pi-coding-agent-provider-changes-chatgpt-sign-in-on-the-openai-provider-short-lived-anthropic-credentials
  governance:
    - 2026-10-13-flue-2-3-0-returns-flue-to-export-style-releases-squashed-commits-from-a-source-tree-not-on-git
    - 2026-10-13-flue-2-3-0-carries-no-npm-provenance-published-from-a-maintainer-account-not-the-ci-trusted-pub
    - 2026-10-13-flue-2-3-0-makes-the-local-sandbox-actually-kill-a-timed-out-command-s-whole-process-group
    - 2026-10-13-flue-2-3-0-gives-execution-interceptors-the-agent-s-name-on-every-step-which-per-agent-policy
    - 2026-10-13-flue-trace-content-is-still-on-by-default-the-flue-opentelemetry-readme-said-the-opposite-until
    - 2026-10-13-flue-the-allowed-tools-correction-shipped-in-2-1-1-the-field-is-still-unenforced
    - 2026-10-13-flue-2-2-0-documents-an-approval-gate-pattern-and-states-that-flue-has-no-built-in-approval-api
stance:
  use_for: 'TypeScript agent services whose teams will <a href="https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L228-L433">own application authorization</a>.'
  avoid_for: 'Deployments whose policy requires <a href="https://registry.npmjs.org/@flue%2Fruntime/2.3.0">npm provenance</a>.'
  watch_next: 'Check the next stable for <a href="https://registry.npmjs.org/@flue%2Fruntime/2.3.0">npm provenance</a> and <a href="https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150">public runtime regression tests</a>.'

---

# Flue

<a id="release-decision"></a>

## Where it stands, 2026-10-13

On [12 October 2026](https://registry.npmjs.org/@flue%2Fruntime),
[Flue 2.3.0 repaired execution faults](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L11-L16),
but [the runtime package has no npm attestation linking it to its public source tag and publishing workflow](https://registry.npmjs.org/@flue%2Fruntime/2.3.0).
Deploy it only if your policy permits packages without npm provenance. For
authorization, use the [application-owned approval gate below](#approval-boundary).

For [TypeScript agent services](https://github.com/withastro/flue/blob/v2.3.0/README.md#L1-L20)
on [Node](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/node-target.md)
or [Cloudflare](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/cloudflare-target.md),
install one exact Flue version. The older [2.2.2 cut is attested](https://registry.npmjs.org/-/npm/v1/attestations/@flue%2fruntime@2.2.2),
[with the execution faults described below](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L11-L28).

```sh
npm install -E @flue/runtime@2.3.0 @flue/vite@2.3.0 @flue/cli@2.3.0
```

Match any SDK, React and telemetry packages to that version.
[Sandbox output streaming (`onOutput`) is preview-only](https://github.com/withastro/flue/blob/4420fcd540ac63f040b8b1d206c00054faa0df63/apps/docs/src/content/docs/reference/sandbox-api.md#L103-L106):
2.2.0-next.1 [lacks later stable repairs](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L11-L28);
[stable 2.3.0 does not include it](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/reference/sandbox-api.md#L62-L71).
[The 2.2.0-next.1 GitHub prerelease was published on 25 September 2026](https://api.github.com/repos/withastro/flue/releases/tags/%40flue%2Fruntime%402.2.0-next.1).
Use it only for a deliberate streaming trial in your command UI.

**Run your own upgrade checks before deploying.** Track the
[root changelog at each version tag](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16);
[GitHub's Latest release still names 2.2.2](https://api.github.com/repos/withastro/flue/releases/latest),
although [npm latest is 2.3.0](https://registry.npmjs.org/@flue%2Fruntime).
GitHub's Latest badge alone leaves you on the older cut.
Flue 2.3.0 [deleted the public runtime, SDK and telemetry regression tests](https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150).
Keep lockfile integrity hashes and test abort repair, timeouts, redaction and
bounded history in your application.

<a id="approval-boundary"></a>

**Approve the stored action through a route you control.** Flue's
[documented gate stores exact arguments, ends the response with `pending_approval`
and executes those arguments on authenticated approval](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L228-L433).
Use it for refunds, publishing and deletion; [your application owns the route,
expiry and idempotent effects](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L339-L433).
[There is no built-in approval API](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L230).

A skill's [`allowed-tools` restricts nothing](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/skills.md#L58-L60);
use [MCP annotations as hints to require approval, never skip it](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L433).
The human can decide on a specific action [without keeping a tool call waiting](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L232-L237).

**Stop the runaway reminder.** [On 2.2.x, a guarded finish hook could append
the same reminder until the response hit its loop ceiling; 2.3.0 re-renders
before the callback](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L11).
On 2.3.0, test [allowed and refused agents](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L14),
[a child process that ignores SIGTERM](https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/node/local-env.ts#L20-L107),
and [a guarded reminder that runs once](https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/session.ts#L1633-L1675).
[Fail closed when agent identity is missing](https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/client.ts#L492-L495).
Run `local()` inside a trusted container or VM; [it supplies no isolation](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/sandboxes.md#L115).

**Set a trace-content policy before exporting.** Tracing
[captures prompts, instructions and tool payloads by default](https://github.com/withastro/flue/blob/v2.3.0/packages/opentelemetry/README.md#L46).
Set [`content: false` or a redacting transform](https://github.com/withastro/flue/blob/v2.3.0/packages/opentelemetry/README.md#L48-L60). If you trusted the
[2.1.0 README's opposite advice](https://github.com/withastro/flue/blob/767e9a848b1ec0b53b6f637fefd2e0491a7e77f5/packages/opentelemetry/README.md#L46),
inspect backend access and retention before exporting more.

## Integration checks

**Pin Flue's Pi dependencies, `pi-ai` and `pi-agent-core`, as well as Flue itself.** 2.3.0
[removed Flue's Claude-ID rewrite](https://github.com/withastro/flue/commit/deee93b40d275ecc9a50c50af2158f20089d54bc),
leaving one less patch to maintain. But [`pi-ai` and `pi-agent-core` now admit
`^1.1.0`](https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/package.json#L87-L88),
so installs on this date could resolve to [Pi 1.2.0](https://github.com/earendil-works/pi/releases/tag/v1.2.0)
without another Flue release. Record both resolved versions; use 1.1.0
overrides if that is your tested baseline. For AI Gateway Claude,
[skip 2.2.0 and 2.2.1: their model-ID regressions were fixed in 2.2.2](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L18-L28).

**Budget for provider and latency changes when migrating.** Azure users must
[rename provider keys and model-specifier prefixes from `azure-openai-responses`
to `azure`](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L7).
[Keep API ID `azure-openai-responses` and `AZURE_OPENAI_*` variables unchanged](https://github.com/earendil-works/pi/blob/v1.0.3/packages/ai/CHANGELOG.md#L5-L11).
Mark 2.3.0 on your dashboards: [tool `durationMs` now excludes Flue's
hooks and result storage](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L7).
A lower number after upgrading is not evidence of faster execution.

**Use SDK pagination for long chats.** [Since 2.2.0,
`history`, `historyBefore` and `observe` support bounded windows; generation-bound
cursors return 410 after reset](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L30-L34).
Handle resets and pass the [now-required `settlements` to
`readSubmissionReply()`](https://github.com/withastro/flue/blob/v2.3.0/packages/sdk/src/public/reply.ts#L51-L54).
[React still observes the whole conversation](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L34).

**Choose a native PDF route before delegating document work.** [Since 2.2.0,
Anthropic, OpenAI and Azure Responses, and Google APIs receive PDFs natively;
other APIs receive a text placeholder](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L30-L35).

**Keep Cloudflare Sandbox on the blueprint's dependency line.** The
[2.3.0 blueprint installs `^0.11.0`](https://github.com/withastro/flue/blob/v2.3.0/blueprints/sandbox--cloudflare.md#L77-L91).
[SDK 1.0.0 no longer exports `Sandbox` or `getSandbox()`](https://registry.npmjs.org/@cloudflare/sandbox/-/sandbox-1.0.0.tgz),
the [API Flue's adapter wraps](https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/cloudflare/cf-sandbox.ts#L1-L53).
Block that major upgrade until a compatible adapter ships.

[Pi has absorbed a provider workaround](https://github.com/withastro/flue/commit/deee93b40d275ecc9a50c50af2158f20089d54bc), and
[Flue's approval pattern turns a live wait into a stored decision](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L228-L433).
Let application code handle the routine checks. Spend human review on the refund
or release being authorized and on the [upgrade trade](#release-decision).

## What is unresolved

- Package origin and runtime regression coverage in a later stable. Require an
  npm attestation linking that release to its public tag and workflow, and
  public tests for the contracts your application uses.
- We did not test Flue 2.3.0 with Pi 1.2.0. Provider and tool contract tests
  would qualify your resolved pair for your application.
- Whether output streaming reaches stable or the preview resumes.
  A tagged stable `onOutput` implementation settles stable availability; a new
  `next` publication or removal of its dist-tag settles the preview's status.
- Cloudflare Sandbox 1.x support through Flue. A matching tagged blueprint and
  adapter would establish an upgrade path. Validate it on your deployment.
- [Conversation deletion remains a request in Discussion #855](https://github.com/withastro/flue/discussions/855).
  A tagged deletion API with documented retention semantics would establish
  what Flue can erase.

## Profile hygiene

This page describes Flue as of 2026-10-13. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md)
for the evidence contract.
