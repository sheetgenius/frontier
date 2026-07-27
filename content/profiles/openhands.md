---
schema_version: bitter.frontier_profile.v0
profile_id: openhands
label: OpenHands
owner: OpenHands
source_contract: sources/openhands.yml
homepage: https://openhands.dev/
docs: https://docs.openhands.dev/
tagline: "The platform that fronts other harnesses. Its open-source line thawed for four days in July, then refroze."
compared_with:
  - claude-code
  - codex
  - gemini-cli
x:
  project: OpenHandsDev
  maintainers:
    - handle: rbren_dev
      name: Robert Brennan
    - handle: xingyaow_
      name: Xingyao Wang
repo: https://github.com/OpenHands/OpenHands
surface_class: mixed_official_docs
evidence_floor: release_note
status: active_watch
last_updated: 2026-07-27
last_full_review: 2026-07-27
claims:
  - id: release-channel-lag
    finding_id: 2026-06-23-openhands-channel-posture
    last_verified: 2026-06-23
    status: active
  - id: api-key-redaction
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: active
  - id: secret-injection-subprocess
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: active
  - id: sandbox-grouping-ui
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: active
  - id: self-hosted-gitlab
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: active
  - id: subagent-delegation-opt-in
    finding_id: 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    last_verified: 2026-05-12
    status: active
  - id: critic-result-gui
    finding_id: 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    last_verified: 2026-05-12
    status: active
  - id: acp-agent-settings-ui
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-05-27
    status: active
  - id: org-level-llm-profiles
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-06-23
    status: active
  - id: mcp-acp-env-per-org-member
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-05-27
    status: active
  - id: frontend-cve-cluster-and-acp-secrets
    finding_id: 2026-06-03-openhands-cve-2026-44492-axios
    last_verified: 2026-06-03
    status: active
  - id: apikey-keycloak-decouple
    finding_id: 2026-06-23-openhands-apikey-keycloak-decouple
    last_verified: 2026-06-23
    status: active
  - id: conversation-secret-enricher
    finding_id: 2026-06-23-openhands-conversation-secret-enricher
    last_verified: 2026-06-23
    status: active
  - id: dynamic-sandbox-spec-service
    finding_id: 2026-06-23-openhands-dynamic-sandbox-spec-service
    last_verified: 2026-06-23
    status: active
  - id: concurrency-limits-reverted
    finding_id: 2026-06-23-openhands-concurrency-limit-revert
    last_verified: 2026-06-23
    status: retired
  - id: acp-env-broadcast-closed
    finding_id: 2026-06-23-openhands-acp-env-leak-closed
    last_verified: 2026-06-23
    status: active
  - id: hide-personal-workspaces-ui-only
    finding_id: 2026-06-23-openhands-hide-personal-workspaces-ui-only
    last_verified: 2026-06-23
    status: open_question
posture_basis:
  capability:
    - 2026-05-07-openhands-platform-hardening
    - 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    - 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    - 2026-06-23-openhands-conversation-secret-enricher
    - 2026-06-23-openhands-dynamic-sandbox-spec-service
  accessibility:
    - 2026-05-07-openhands-platform-hardening
    - 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    - 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    - 2026-06-23-openhands-channel-posture
  governance:
    - 2026-05-07-openhands-platform-hardening
    - 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    - 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    - 2026-06-23-openhands-apikey-keycloak-decouple
    - 2026-06-23-openhands-acp-env-leak-closed
    - 2026-06-23-openhands-concurrency-limit-revert
    - 2026-06-23-openhands-channel-posture
stance:
  use_for: "Teams that want the platform to own sandboxing, evaluation, sub-agent posture, and RBAC rather than build their own, and that can run 1.11.0 or later. Also the strongest option on the watchlist if you want one enterprise shell across GUI, CLI, and SDK -- including the ability to put Claude Code, Codex, or Gemini CLI behind it over ACP."
  avoid_for: "Self-hosting from the official install page, which still hands you the 1.8 image and calls it current, and for anything where a security fix reaching you on the vendor's own timetable matters. The open-source line was frozen for 26 days, tagged six times in four days, and has been frozen again since 2026-07-09 while six cloud tags shipped -- including the only tags carrying the HIGH-severity vite fix. Also avoid it if you want governance to live in your own codebase; OpenHands ships those decisions as platform defaults."
  watch_next: "Whether PR #15217 (draft 1.12.0, clean and unmerged since 2026-07-09) ever merges and how long the second freeze runs; whether the install docs are ever bumped past 1.8; and whether the open-source line is now formally a periodic snapshot of the cloud line rather than a co-equal channel."
---

# OpenHands

## Operator Read

OpenHands is an enterprise operating environment that can front other harnesses:
its Settings page will point the platform at Claude Code, Codex, Gemini CLI, or a
custom command as the agent actually doing the work, under OpenHands' RBAC,
sandboxing, and integrations. That positioning is intact and still the reason to
consider it.

The load-bearing fact for anyone deciding what to run is that the open-source
release channel behaved like a valve this window rather than a pipeline. After 25
days and 22 hours frozen at `1.8.0`, the line was tagged six times in four days,
2026-07-06 through 2026-07-09, ending at
[`1.11.0`](https://github.com/OpenHands/OpenHands/releases/tag/1.11.0). Then it
stopped again. At window close there was no `1.12.0`, the default branch was
[50 commits ahead](https://github.com/OpenHands/OpenHands/compare/1.11.0...main),
six more cloud tags had shipped, and the release pull request for the
open-source line had sat in draft, mergeable and clean, for eighteen days.

So the practical read has two halves and you need both. **Upgrade to `1.11.0`:**
[`1.9.0`](https://github.com/OpenHands/OpenHands/releases/tag/1.9.0) drained the
entire enterprise, ACP, and sandbox backlog this profile tracked as main-only for
two windows, and closed 21 named advisories in a single tag. **Then accept that
you are exposed again:** a HIGH-severity vite advisory is in cloud tags and in no
open-source tag, and the official install page still tells a new self-hoster to
pull the `1.8` image and calls it the most recent stable release.

That last one is the worst artifact on this profile. A self-hoster who follows
the documented happy path today lands on the version that every advisory `1.9.0`
closed still applies to.

## Channel posture: thawed, then refrozen

Every claim in this section is resolved by git ancestry against the dereferenced
tag commit, not by version number or date.

### The thaw

Six open-source tags between 2026-07-06T15:05:19Z and 2026-07-09T19:37:16Z:
`1.9.0`, `1.9.1`, `1.9.2`, `1.9.3`, `1.10.0`, `1.11.0`.
[`1.9.0`](https://github.com/OpenHands/OpenHands/releases/tag/1.9.0) is the
catch-up release, and its body names by hand the cluster this publication had
been reporting as unreachable: first-signer-owns-default-org (#14752), BYOK
gating (#14773), `hide_personal_workspaces` (#14741), the `PluginSpec` git-token
redaction (#14795), the `DynamicRemoteSandboxSpecService` (#14849), and Slack
attachments (#14934).

It also closed 21 distinct CVE and GHSA identifiers in one upgrade, across pyjwt,
starlette, python-multipart, jupyter-server, dompurify, bleach, qs, ws, and
protobufjs. The size of that batch is itself the measure of how long the line
went untagged.

One caution on reading a release body as a feature list: `1.9.0` also names
`#14168` conversation limits, the per-org and per-user concurrency quota that
[#14877 had already reverted](https://github.com/OpenHands/OpenHands/pull/14877)
on 2026-06-17. Both the merge and its revert fall inside the tag range, and
release-please enumerates merges rather than surviving behavior. Do not expect
429-based per-tenant quotas in any 1.x; they are not there.

### The correction we owe on authlib

We reported the authlib fix for
[CVE-2026-44681](https://github.com/advisories/GHSA-r95x-qfjj-fjj2) as main-only
and framed it as cloud getting patched ahead of open source. On the second half
we were wrong, and the ancestry says so plainly.
[PR #14983](https://github.com/OpenHands/OpenHands/pull/14983) merged to `main`
on 2026-06-29. `cloud-1.39.0` and `cloud-1.40.0` both predate it and do not carry
it. The first tag on **any** line to carry the fix was open-source `1.9.0`, about
ten minutes ahead of `cloud-1.41.0`. It sat main-only for seven days, not weeks.

The vulnerability itself is narrower than "authlib CVE" suggests: an
unauthenticated open redirect in the OIDC Implicit and Hybrid grants, where the
`openid` scope check runs before `redirect_uri` is validated, so the resulting
error carries the attacker's raw redirect and Authlib renders it as a 302. No
tokens leak. The harm is a phishing link that shows your identity provider's
domain at click time, with the provider issuing the redirect. Deployments running
only the plain authorization-code flow are unaffected.

### The refreeze

Nothing has been tagged on the open-source line since `1.11.0` on 2026-07-09.
The mechanism is pinned:
[PR #15217](https://github.com/OpenHands/OpenHands/pull/15217), "chore(main):
release 1.12.0", is open, `draft=true`, `mergeable_state=clean`, created
2026-07-09T20:08:08Z and still updating at window close. Over the same eighteen
days the cloud-line release pull requests were merged normally and appear as
ordinary commits on `main`, producing `cloud-1.45.1` through `cloud-1.47.1`.

An unmerged draft holds the open-source line while the cloud line ships on
schedule. Read that as structural rather than as an oversight: after every
catch-up burst, self-hosters should expect to re-enter the same unpatched window.

### The new main-only advisory

[PR #14982](https://github.com/OpenHands/OpenHands/pull/14982) fixed
[CVE-2026-53571](https://nvd.nist.gov/vuln/detail/CVE-2026-53571)
([GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff), High,
CVSS 7.5) on `main` on 2026-07-16. It reached `cloud-1.47.0` on 2026-07-21 and no
open-source tag. Manifest proof at the tag commits: `1.11.0` pins
`vite: 7.3.2` in `frontend/package.json` `dependencies`, inside the advisory's
vulnerable range of `>= 7.0.0, <= 7.3.4`; `cloud-1.47.1` and `main` pin `7.3.5`,
the first patched 7.x.

What it allows: an unauthenticated arbitrary file read that bypasses the vite dev
server's `server.fs.deny` protection on Windows. The deny logic does not
normalize NTFS alternate-data-stream forms or 8.3 short names before checking, so
a request like `/.env::$DATA?raw` passes the check and Windows resolves it to the
file's default data stream. Confidentiality only, no write and no execution, but
the readable files are `.env` and `*.{crt,pem}`.

Preconditions are narrow and worth checking rather than assuming: the vite **dev**
server must be network-exposed, the sensitive file must sit inside
`server.fs.allow`, and the host must be Windows with NTFS or 8.3 short names. The
uncomfortable detail is that vite is a runtime `dependencies` entry in the
OpenHands frontend, not a devDependency. On the open-source line there is no tag
that fixes it. Your options are tracking `main` or pinning vite yourself.

### The install page is the sharpest gap

`OpenHands/docs`, file `openhands/usage/run-openhands/local-setup.mdx`, still
instructs self-hosters to pull `docker.openhands.dev/openhands/openhands:1.8` and
still says the command "pulls the most recent stable release of OpenHands." The
file's last version bump was `6087832ee` on 2026-06-10, for `1.8.0`. The entire
`1.9.x` through `1.11.0` burst was skipped. The
[rendered page agrees](https://docs.openhands.dev/openhands/usage/local-setup),
and it also pins `AGENT_SERVER_IMAGE_TAG=1.26.0-python` while `main` has since
moved the SDK to
[v1.37.1](https://github.com/OpenHands/OpenHands/pull/15378).

Of every gap on this profile, that is the purest: a document that does not merely
fail to describe the system but walks a new user into the version the project
already fixed.

*Findings: `2026-06-23-openhands-channel-posture`.*

## What is on main and not in any open-source tag

Everything below is confirmed on `main` and absent from `1.11.0`. All of it is
carried by cloud tags only.

- **Agent Canvas behind SaaS authentication.**
  [PR #15286](https://github.com/OpenHands/OpenHands/pull/15286) (merged
  2026-07-17) adds an optional `/canvas` proxy requiring existing SaaS auth,
  registered before the SPA catch-all so the surface can be protected without a
  dedicated subdomain. Gated on `AGENT_CANVAS_INTERNAL_URL`. An agent-facing
  surface that previously needed its own access control is now authenticated by
  the main app -- for cloud operators.
- **MCP credentials being lost, fixed twice.**
  [PR #15257](https://github.com/OpenHands/OpenHands/pull/15257) and
  [PR #15285](https://github.com/OpenHands/OpenHands/pull/15285) preserve SaaS
  credentials with encrypted storage and stop a settings GET round-trip from
  stripping MCP auth secrets. Self-hosters on `1.11.0` still have the bug.
- **Database pool churn.** LIFO pooling enabled, defaults lowered and made
  env-tunable, `pool_size` default restored, and
  [webhook callbacks stopped from starving the pool](https://github.com/OpenHands/OpenHands/pull/15379),
  all between 2026-07-10 and 2026-07-24. Treat pool sizing on any tag in this
  range as unsettled.
- **Agent-profile launch behavior, applied then reverted.** Honoring profile
  settings in cloud launches landed on 2026-07-16 and was reverted on 2026-07-21,
  never reaching the open-source line at all. Do not build on agent-profile tool
  selection yet.

## Platform surfaces you inherit

This is the durable read, now largely reachable on a tag. It is a short version
of what earlier revisions of this profile spelled out at length; the ancestry
detail lives in the diff log.

**Fronting other harnesses over ACP.**
[PR #14401](https://github.com/OpenHands/OpenHands/pull/14401) ships a Settings
page that wires OpenHands to external Agent Client Protocol agents. While ACP is
active, LLM, Condenser, and MCP settings grey out because the back-end agent owns
them. Feature flag `ENABLE_ACP` defaults `false`. This is the cleanest evidence
that OpenHands is positioning as the enterprise shell around third-party agents
rather than only as a harness.

**Org-level policy substrate.**
[PR #14406](https://github.com/OpenHands/OpenHands/pull/14406) adds encrypted
organization-level LLM profiles in SaaS mode, with six CRUD endpoints and
two-tier permissions. Activate is the load-bearing operation: one transaction
updates the org's active profile and the acting member's settings diff, with
`SELECT ... FOR UPDATE` serializing concurrent writes.

**Per-member isolation of agent settings.**
[PR #14528](https://github.com/OpenHands/OpenHands/pull/14528) split agent
settings into shared and private halves after MCP and `acp_env` configuration had
been broadcast to every org member's row. Operators on pre-2026-05-22 deployments
should still rotate MCP credentials added by individual members. The broadcast
vector is now
[structurally closed](https://github.com/OpenHands/OpenHands/pull/14921): the
`acp_env` field was removed entirely by the SDK 1.29.0 pin, and ACP provider
credentials ride the per-user Secrets panel.

**Machine identity split from human SSO.**
[PR #14867](https://github.com/OpenHands/OpenHands/pull/14867) decouples API-key
auth from Keycloak offline sessions, so a revoked Keycloak session no longer
invalidates an `sk-oh-...` key. That removes a class of opaque 401 lockouts for
webhooks and headless clients, and it **changes the revocation contract**: IdP
session revocation is no longer a kill switch for machine keys. Revoke at the key
store instead.

**A per-user conversation secret enricher.**
[PR #14697](https://github.com/OpenHands/OpenHands/pull/14697), stacked on
[#14650](https://github.com/OpenHands/OpenHands/pull/14650), injects a user's
linked third-party OAuth token into the sandbox at conversation start, and not
only from the originating integration. Jira Data Center is the first consumer;
the primitive is architectural. The cost is blast radius: any conversation a user
starts can carry that user's linked identity into the sandbox, and sandbox-side
actions inherit those permissions. Jira-triggered conversations are validated
before launch; web, Slack, and API paths are best-effort with no service-account
fallback.

**Sandbox-spec authority moved to a control plane.**
[PR #14849](https://github.com/OpenHands/OpenHands/pull/14849) fetches available
sandbox specs from runtime-api's `GET /api/warm-runtime-configs` rather than a
hardcoded preset list, with a 60-second cache and a default selected by config
name. A companion guardrail
([#14883](https://github.com/OpenHands/OpenHands/pull/14883)) refuses a custom
image whose agent-server SDK version does not match the app's pinned
`openhands-sdk`. What image agents execute in is now a runtime-api concern, and
trust flows from its warm configs.

**Sub-agents and critic scoring, both opt-in.** Behind
[`enable_sub_agents`](https://github.com/OpenHands/OpenHands/pull/14122)
(default off), work routes to built-in specialists -- `bash-runner`,
`code-explorer`, `general-purpose`, `web-researcher` -- with tool surfaces
declared by `TaskToolSet`; custom sub-agents live in `.agents/agents/*.md`.
Whether those tool restrictions are runtime-enforced or instruction-level is
still not established by public evidence, and after this window's field-wide
lesson about controls that read like boundaries, that is the question to answer
before relying on one. The
[`CriticResult`](https://github.com/OpenHands/OpenHands/pull/14133) GUI is an
evaluation surface, not a verdict; turn it on only if you can route the extra
model spend separately and test whether the score predicts something your team
already cares about.

**Reach and dependencies.** GUI, CLI, SDK, and hosted cloud, with Slack, Jira,
Linear, and GitHub integrations, plus
[self-hosted GitLab](https://github.com/OpenHands/OpenHands/commit/4e63531fa6595ec55102f08ef129845931fcd8ff).
Docker and container support are required for the sandbox model.

*Findings: `2026-05-27-openhands-acp-ui-and-org-llm-profiles`,
`2026-06-23-openhands-acp-env-leak-closed`,
`2026-06-23-openhands-apikey-keycloak-decouple`,
`2026-06-23-openhands-conversation-secret-enricher`,
`2026-06-23-openhands-dynamic-sandbox-spec-service`,
`2026-05-12-openhands-subagent-delegation-and-critic-evaluation`,
`2026-05-07-openhands-platform-hardening`.*

## Security posture

Credential handling shows active maintenance rather than assumed defaults:
[log redaction](https://github.com/OpenHands/OpenHands/commit/61e3dc2cadbefd4e0649b7c141ac2335c021ad2b)
scrubs credential patterns before write, ACP subprocesses
[receive injected secrets](https://github.com/OpenHands/OpenHands/commit/cf156b0073350ca8e93067bc2f4ae18b90537a0a)
without the primary agent context carrying them, and debug logging of hook
configuration secrets was
[removed](https://github.com/OpenHands/OpenHands/commit/0c6c461555f8651347ed140f1c555ff8a88ddf56).

The pattern is fixes-as-they-ship, tracked in commit history rather than in a
published security policy, and this window shows the cost of that: the two
advisories that mattered most to a self-hoster were legible only by reading
`pyproject.toml` and `frontend/package.json` at the tag commits. There is no
surface that tells an operator which advisories their installed version carries.

## What the public conversation added

Nothing, and that is the finding worth recording. Twenty-four public claims about
OpenHands were adjudicated against the primary record this window: none was
confirmed in full and none was refutable, because the conversation was about
benchmark scores, funding, energy studies, and product surfaces in other
repositories.

Zero posts mentioned the tag freeze, the draft `1.12.0`, the install page still
pointing at `1.8`, or the cloud-only vite advisory. One release-tracker post got
the mechanism of a real fix exactly right and attached it to "v1.37.1", which is
the software-agent-SDK version, not an OpenHands tag -- the open-source line has
no such release, and the fix it described is main-only. An operator who acted on
that post by upgrading would get nothing, because there is nothing to upgrade to.

On the single most operator-consequential property of this project, the
conversation layer is not late. It is blind. Use the tag list, not the timeline.

## What you are trading

Adopt OpenHands when you want the platform to own sandboxing, evaluation,
identity, and sub-agent posture, and when parity across GUI, CLI, and SDK matters
more than building your own thin layer. Skip it when you want governance to live
in your own codebase, because these are platform defaults rather than knobs you
bolt on.

Add one trade this window made explicit: you are also choosing a release channel
whose timing you do not control and whose lag is not announced. The features are
real, the sandboxing is real, and the version of both that you can install is
decided by a draft pull request. Budget for tracking `main` or for accepting a
known exposure window, and decide which before you deploy rather than after the
next advisory.

*Posture basis: `2026-05-07-openhands-platform-hardening`,
`2026-05-12-openhands-subagent-delegation-and-critic-evaluation`,
`2026-05-27-openhands-acp-ui-and-org-llm-profiles`,
`2026-06-23-openhands-apikey-keycloak-decouple`,
`2026-06-23-openhands-conversation-secret-enricher`,
`2026-06-23-openhands-dynamic-sandbox-spec-service`,
`2026-06-23-openhands-concurrency-limit-revert`,
`2026-06-23-openhands-channel-posture`.*

## Open questions

What this window answered:

- **When does the next 1.x consolidate the enterprise build-out?** Answered:
  `1.9.0` on 2026-07-06 did, and named the cluster explicitly. The two-window
  channel gap this profile carried is closed for everything merged before
  2026-07-09.
- **Was cloud patched ahead of open source on authlib?** Answered: no. Open-source
  `1.9.0` was the first tag on any line to carry it. We corrected our own framing
  above.
- **Is `hide_personal_workspaces` an access boundary?** Answered: no. It filters
  the org list and selector; the orgs API still returns personal orgs. It is now
  shipped in `1.9.0`, which changes its reach but not its meaning. Do not treat it
  as access control. *Findings:
  `2026-06-23-openhands-hide-personal-workspaces-ui-only`.*
- **Will per-tenant concurrency quotas return?** No sign of it. The DB-backed
  feature was reverted and its columns dropped; the surviving path is
  runtime-`/list` sandbox cleanup, which is not a policy quota.

Still open:

- Does [#15217](https://github.com/OpenHands/OpenHands/pull/15217) ever merge, and
  how many days does the second freeze run? It has been clean and unmerged since
  2026-07-09.
- Is the open-source line now formally a periodic snapshot of the cloud line
  rather than a co-equal channel? The `release-line: gui` label on #15217 suggests
  release-please treats them as separately configured lines, which would make the
  asymmetry a policy rather than an accident.
- Do the install docs get bumped when `1.12.0` lands, or does `openhands:1.8`
  persist as the documented target? The docs repo skipped three tags without
  anyone noticing.
- When OpenHands fronts Claude Code, Codex, or Gemini CLI via ACP, how do the
  org-level LLM profile and the back-end agent's own policy surfaces compose?
  OpenHands greys out LLM, Condenser, and MCP settings because the back-end owns
  them, but the org profile still declares preferences. The resolution rule is
  undocumented.
- Are custom sub-agent tool lists enforced at runtime, or is `TaskToolSet` an
  instruction-level restriction? Code or a runtime probe would settle it. See
  #14122 and SDK PR #2948.
- For the conversation secret enricher: which best-effort start path leaks which
  linked credential into a sandbox, and when does the service-account fallback
  land? There is no consolidated matrix.
- Does the runtime-api warm-config control plane change the sandbox *security*
  boundary or only its provisioning path? The boundary semantics are not
  documented.
- With API-key validity decoupled from the IdP session, what is the authoritative
  key-store revocation path and its propagation latency? The deauth contract moved
  and the runbook has not been published.
- Can an operator set platform-wide policy on sub-agents and critic in multi-user
  deployments, or must each user opt in individually?
- Does the KVM sandbox path (`SANDBOX_KVM_ENABLED`) change the security boundary,
  or only startup latency?

## What to watch next

- **Whether the second freeze breaks.** This is the whole story. Watch for a
  `1.12.0` tag, and count the days from 2026-07-09 when it arrives. If the gap
  matches the first freeze, the pattern is confirmed as the project's normal
  operating mode rather than a backlog artifact.
- **Whether the vite fix reaches an open-source tag,** and whether any future
  cloud-only security fix is announced as such. Right now the only way to know is
  to diff `frontend/package.json` between tags.
- **Whether the docs repo ever tracks the tag line again.** A single version bump
  would resolve the worst operator hazard on this profile.
- Whether the per-user conversation secret enricher grows a service-account
  fallback, and which start paths get tightened from best-effort to validated.
- The custom-sandbox-image program: how the runtime-api warm-config plane composes
  with per-tenant trust after #14849, #14883, and the lockstep SDK pin.
- The `acp_providers` registry: which back-end agents land first, and which take
  longer. The order is a signal about OpenHands' positioning relative to each
  provider.
- The composition question, still unanswered across three windows: when OpenHands
  fronts Claude Code over ACP, which side's policy wins? This is the schema-shape
  question recorded in amendment-006.
- Whether RBAC, usage reporting, and budgeting extend to cover sub-agent
  delegation and critic evaluation spend.

## Profile Hygiene

This profile follows the profile discipline defined in
[METHOD.md](../../METHOD.md#the-object-grammar): every concrete claim in the prose
has an inline source link; posture sections may interpret freely but cite finding
IDs when naming a specific feature, behavior change, or cross-project comparison.

Note on this revision. The 2026-07-02 to 2026-07-27 material is carried in prose
with pinned receipts and is not registered in the `claims:` block. The registered
claims continue to describe the platform build-out through 2026-06-23; what
changed this window is their *channel*, not their content, and the ancestry proof
for that lives in the run's harvest. Where a release-body claim is load-bearing it
is backed by manifest evidence at the tag commit rather than by the body alone:
`authlib = ">=1.6.12,!=1.7.0"` in `pyproject.toml` at `1.9.0`, and `vite: 7.3.2`
in `frontend/package.json` at `1.11.0` against `7.3.5` at `cloud-1.47.1`.

Earlier revisions of this profile carried the full ancestry narrative for the
main-unreleased period. That material has been collapsed now that `1.9.0` shipped
it; git history is the audit trail.
