---
schema_version: bitter.frontier_profile.v0
profile_id: paperclip
label: Paperclip
owner: Paperclip
source_contract: sources/paperclip.yml
homepage: https://paperclip.ing/
docs: https://docs.paperclip.ing/
tagline: "Governs agent labor as operating state. Its one Critical advisory this window described a hole it had already closed 97 days earlier."
compared_with:
  - hermes-agent
x:
  project: papercliping
  maintainers:
    - handle: dotta
      name: dotta
repo: https://github.com/paperclipai/paperclip
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-07-27
last_full_review: 2026-07-27
claims:
  - id: adapter-runtime-command-spec
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-05-07
    status: active
  - id: sandbox-callback-bridge
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-05-07
    status: active
  - id: e2b-sandbox-provider
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-05-07
    status: active
  - id: issue-cost-summaries
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-05-07
    status: active
  - id: secrets-provider-vaults
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-05-12
    status: active
  - id: cursor-cloud-adapter
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-05-12
    status: active
  - id: routine-revision-history
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-05-12
    status: active
  - id: planning-mode-issues
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-05-12
    status: active
  - id: host-env-isolation-remote-probes
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-05-12
    status: active
  - id: scoped-agent-permissions-and-protected-assignments
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: active
  - id: routine-env-secrets-precedence
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: active
  - id: board-managed-document-locks
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: active
  - id: modal-sandbox-plugin
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: active
  - id: acpx-claude-settings-respect
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: active
  - id: skills-cli-and-first-admin-claim
    finding_id: 2026-05-29-paperclip-v2026.529.0
    last_verified: 2026-06-03
    status: active
  # --- v2026.618.0 (June 18) tagged-release: multi-tenant authority cluster landed ---
  - id: cloud-tenant-deprivilege
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: active
    channel: tagged-release
  - id: per-company-jwt-signing-keys
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: active
    channel: tagged-release
  - id: plugin-tenant-isolation-fk
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: active
    channel: tagged-release
  - id: negated-phrasing-review-fix
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: active
    channel: tagged-release
  - id: http-log-credential-redaction
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: active
    channel: tagged-release
  # --- master-unreleased (ahead of v2026.618.0 as of 2026-06-23) ---
  - id: preflight-budget-cap-enforcement
    finding_id: 2026-06-23-paperclip-heartbeat-preflight-budget-caps
    last_verified: 2026-06-23
    status: active
    channel: main-unreleased
  - id: task-watchdog-scoped-recovery
    finding_id: 2026-06-23-paperclip-task-watchdog-control-plane
    last_verified: 2026-06-23
    status: active
    channel: main-unreleased
  - id: same-company-ceo-authz-central
    finding_id: 2026-06-23-paperclip-same-company-ceo-authz-centralization
    last_verified: 2026-06-23
    status: active
    channel: main-unreleased
posture_basis:
  capability:
    - 2026-05-07-paperclip-agent-company-control-plane
    - 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    - 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    - 2026-06-23-paperclip-heartbeat-preflight-budget-caps
  accessibility:
    - 2026-05-07-paperclip-agent-company-control-plane
    - 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    - 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
  governance:
    - 2026-05-07-paperclip-agent-company-control-plane
    - 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    - 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    - 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    - 2026-06-23-paperclip-heartbeat-preflight-budget-caps
    - 2026-06-23-paperclip-task-watchdog-control-plane
    - 2026-06-23-paperclip-same-company-ceo-authz-centralization
stance:
  use_for: "Teams that want agent work to be operating state rather than a chat session -- roles, issues, budgets, review gates, and a per-company tenant boundary as first-class objects -- and who will track the calendar tag line. v2026.722.0 is the current floor: it replaces ambient environment injection with run-bound, dual-audited secret reads, and it carries the cross-tenant and log-redaction fixes from the two tags before it."
  avoid_for: "Solo developers with one agent -- the model assumes several to coordinate. Anyone who needs a pre-release channel to track: there is none, the npm/canary line has been dead since 2026-03-12, and preview work ships inside stable tags behind experimental settings. And do not read Paperclip's advisory feed as a measure of your own exposure: the window's one Critical describes a code path closed 97 days before disclosure, under a version range no operator can map onto their build."
  watch_next: "Whether the open-by-default company skill policy gets inverted, given Paperclip's own April advisory about malicious skills exfiltrating user data; whether the run-bound secret-access audit trail gains a read surface rather than only two write paths; whether the new agent-writes-to-human-inbox grant becomes auditable before something is tidied away; and whether the dormant npm line is formally retired or left to rot as a distribution channel."
---

# Paperclip

## Operator Read

Paperclip models agent work as a company: agents have roles, work items are
issues, work happens in workspaces, progress moves through a board. The bet is
that multi-agent operations should look like operating a team, with issues,
budgets, reviewers and audit trails, rather than like running a chat session.
That bet has not moved. What moved in the 2026-07-02 to 2026-07-27 window is
where secrets live, which protocol the local adapters speak, and how much you
should trust a security advisory with this project's name on it.

Three calendar tags shipped:
[`v2026.707.0`](https://github.com/paperclipai/paperclip/releases/tag/v2026.707.0)
(July 7),
[`v2026.720.0`](https://github.com/paperclipai/paperclip/releases/tag/v2026.720.0)
(July 20), and
[`v2026.722.0`](https://github.com/paperclipai/paperclip/releases/tag/v2026.722.0)
(July 22). `master` sat 53 commits past the newest tag at window close. On a
watchlist where the recurring hazard is a fix stranded on a branch, Paperclip's
release cadence is genuinely good: roughly a tag every eight days, and every
security change described below is in one an operator can install.

The window's loudest event was a Critical advisory that, read carefully, is not
an emergency. The window's most useful event was quieter: secret delivery
stopped being ambient.

> **Current floor**: `v2026.722.0` (2026-07-22). It is the first tag with
> run-bound agent secret reads and with `Cookie` headers redacted from server
> logs, and it inherits the cross-tenant and invite-token fixes from
> `v2026.720.0`. It also carries two unconditional database migrations and one
> two-sided environment-variable break -- see *Upgrade notes* below.

## The Critical that was already fixed

On 2026-07-22, seven minutes after `v2026.722.0` went out, Paperclip published
[`GHSA-x8hx-rhr2-9rf7`](https://github.com/paperclipai/paperclip/security/advisories/GHSA-x8hx-rhr2-9rf7):
"Drive-by RCE Against Local Paperclip Instances via DNS Rebinding," severity
Critical, CVSS 3.1 base score 9.6, no CVE assigned. The mechanism is real and
nasty. In `local_trusted` deployment mode every request is auto-authenticated as
instance admin with no token or session; the private-hostname guard did not run
in that mode; and the `process` adapter executes arbitrary commands via
`spawn()`. Chain those and a web page you merely visit can rebind a hostname to
`127.0.0.1`, reach your local instance on the same origin so no CORS applies,
create an agent backed by the `process` adapter, and wake it. Arbitrary command
execution as the OS user running Paperclip. The victim sees a loading spinner.

Now the arithmetic. The advisory's own suggested fix was to enable the
private-hostname guard for `local_trusted`. That was already in the tree.
Reading `server/src/app.ts` at pinned tags, `shouldEnablePrivateHostnameGuard`
is `deploymentMode === "authenticated" && deploymentExposure === "private"` at
[`v2026.318.0`](https://github.com/paperclipai/paperclip/blob/v2026.318.0/server/src/app.ts),
which matches the advisory exactly, and
`deploymentExposure === "private" && (deploymentMode === "local_trusted" || deploymentMode === "authenticated")`
at [`v2026.416.0`](https://github.com/paperclipai/paperclip/blob/v2026.416.0/server/src/app.ts),
published 2026-04-16, and at every tag since including `master`. Fix to
disclosure: **97 days**. No tag that shipped in this window was ever exposed.

The second defect is worse for operators than the first. The advisory's declared
vulnerable range is `<0.3.1`. That range belongs to the npm packages
(`paperclipai@*`, `@paperclipai/server@*`, `@paperclipai/shared@*`), whose last
tag `paperclipai@0.3.1-canary.1` is commit-dated 2026-03-12 and which has not
moved since. Every release Paperclip actually ships is on the calendar line
`v2026.MMDD.0`. An operator holding `v2026.720.0` cannot compare their version
string to `<0.3.1` at all. The range is not merely imprecise; it is
uninterpretable from the build you are running.

Two operator consequences, and they point in the same direction. If you are on
`v2026.416.0` or later you were never exposed to this and should not upgrade in
a panic. If you are still on a `v2026.318.0`-era build or the retired npm line,
any page you visit can own your workstation, and the advisory is the least of
your problems. Either way, resolve an affected range against your actual tag
before you act on a severity score.

The last piece is the one worth carrying into how you read this field. We
searched all fourteen social files in this cycle's sweep for `advisor`, `CVE`,
`CVSS`, `GHSA`, `rebind`, `RCE`, `drive-by`, `vulnerab`, `exploit`, and `9.6`.
Nothing. A Critical 9.6 landed against a live agent runtime and the public
conversation did not register it in either direction. Sharper still: a
maintainer post on 2026-07-25 reciting `v2026.722.0`'s highlights lists granted
secrets and Connections v3 and omits the Critical published against that same
tag two days earlier. We came prepared to debunk a panic and found no panic to
debunk, which is the less comfortable finding.
*See the window digest,
[Assume the Rule Does Not Bind](/digests/2026-07-02_2026-07-27-weekly/).*

## Secrets stopped being ambient

This is the substantive change of the window, and it arrived as an arc across
two tags rather than as a feature.

**Per-human scoping first.**
[User-specific runtime secrets](https://github.com/paperclipai/paperclip/pull/8825)
(merged 2026-07-05, shipped in `v2026.707.0`) let a secret be defined against an
individual operator rather than only against the company, with per-user values,
environment bindings, and a deterministic pre-dispatch check that the human
responsible for a run actually supplied the value that run needs. A run no
longer starts and then dies deep inside the agent loop on a missing credential.

**Then the environment stopped being the delivery mechanism.**
[Run-bound agent secret access](https://github.com/paperclipai/paperclip/pull/9921)
(merged and tagged 2026-07-22, first in `v2026.722.0`) adds an `access.*`
delivery mode for secrets that are never injected into the environment at all.
`GET /api/agents/me/secrets` lists only the aliases that agent was granted;
`POST /api/agents/me/secrets/:key/value` returns a value with
`Cache-Control: no-store`. Every read is written to both the security audit
trail and the operator activity log. Low-trust review and skill-test tokens stay
denied. The PR states the motivation plainly: environment injection is "ambient,
long-lived, and not suitable for every secret consumer."

That is the first Paperclip primitive where *which agent read which secret, and
when* is answerable after the fact. It is a real advance on the vault work from
May, which centralized storage without making individual reads attributable.

The boundary it does not cover: the PR describes two write paths and no read
surface. An audit trail nobody can query is a liability record, not a control.
That is now the standing open question on this subsystem.

## ACP became the default lane

[PR #9238](https://github.com/paperclipai/paperclip/pull/9238) (merged
2026-07-09, shipped in `v2026.720.0`) makes ACP, not the CLI lane, the default
execution engine for local coding adapters -- Claude, Codex, Gemini, and custom
-- with local coding processes confined. A
[companion change](https://github.com/paperclipai/paperclip/pull/9390) relays the
ACP stdio session into sandbox execution targets over the existing sandbox
runner contract. Its body is the useful disclosure: sandbox targets previously
exposed only one-shot command execution, so every ACP-capable adapter refused
remote targets and silently fell back to the CLI lane with a "supports only the
local Paperclip host" warning. Sandboxed runs were quietly on a different
protocol than local ones.

This is not billed as breaking and for most operators it will not be. But the
default protocol between Paperclip and every local coding agent changed inside
one release. Streaming updates and structured events now arrive over ACP. If you
built anything that parses CLI-lane output, re-check it against `v2026.720.0`
rather than assuming.

## Multi-tenancy hardening, all tagged

Three fixes, none announced as security events, all installable.

The [cross-tenant existence oracle](https://github.com/paperclipai/paperclip/pull/3967)
is closed: the API now returns `404` rather than `403` for another tenant's
resources, so an authenticated caller can no longer enumerate the existence of
another tenant's issues, agents, or projects by probing IDs and reading the
status code. Merged 2026-07-14, shipped in `v2026.720.0`.
[Invite-token entropy is widened and the public invite endpoints rate-limited](https://github.com/paperclipai/paperclip/pull/8979)
in the same tag, which makes guessing a company invite token materially harder
and throttles the endpoint that accepts the guesses. And
[`Cookie` headers are redacted from server logs](https://github.com/paperclipai/paperclip/pull/7977)
as of `v2026.722.0`; before it, session material was recoverable by anyone with
read access to server logs or a log-shipping pipeline. That completes the
credential-redaction work started in June, which covered passwords and tokens in
HTTP error lines but not cookies.

## Where agent authority expanded

Two changes went the other way, and neither drew a single post in the sweep.

**Agents can now write to a human's inbox.**
[PR #9724](https://github.com/paperclipai/paperclip/pull/9724) (merged
2026-07-16, `v2026.720.0`) lets agents archive and tidy user inboxes, gated by
an inbox-archive access policy. Framed as a convenience, it is the most
consequential authority grant in the window: an agent removing items from a
human's attention queue is an agent editing the channel through which that human
learns anything is wrong. The governance question is not whether the policy
exists but whether it is auditable *before* an operator discovers something was
tidied away.

**Skills became an authorable subsystem with an open-by-default policy.** The
[three-pane Skill Studio](https://github.com/paperclipai/paperclip/pull/9241)
with sandboxed test runs and
[nested folders plus a My Skills view](https://github.com/paperclipai/paperclip/pull/9633)
both landed in `v2026.720.0`, and
[company skills honor responsible-user grants](https://github.com/paperclipai/paperclip/pull/9571)
in the same tag. The release note states that company skill policy ships
**open-by-default**, with core UX available for tightening it. Skills are
executable agent instructions, and Paperclip's own April advisory batch includes
[`GHSA-w8hx-hqjv-vjcq`](https://github.com/paperclipai/paperclip/security/advisories/GHSA-w8hx-hqjv-vjcq),
"Malicious skills able to exfiltrate and destroy all user data." An
open-by-default authoring policy sits directly on that threat model. If you
upgrade to `v2026.720.0` and want authorship restricted, you go tighten it
after, not before.

## Channel reality: one line, and no canary

The standing question about an "untagged canary operating state" is **resolved,
and the answer is that the lane is dead**. The npm tag line stops at `0.3.1`,
with the newest canary tag `paperclipai@0.3.1-canary.1` commit-dated
2026-03-12. Nothing has been cut there in over four months. There is no
`preview-or-beta` release channel in tag form at all.

Preview work ships *inside* stable tags behind experimental settings. In this
window that includes the
[MCP Tool Gateway and Apps](https://github.com/paperclipai/paperclip/pull/9556)
eight-part split, where a named gateway brokers every tool call and a
tool-access policy decides which agents and profiles may use which tools; plus
Cases, Decision Training, and a built-in Summarizer. The MCP gateway is the
first Paperclip design where tool calls are brokered and policy-gated rather
than direct. Worth studying now. Not worth adopting yet.

The practical consequence is blunt: an operator who wants early sight of
Paperclip changes must run `master` or enable experimental settings on a stable
tag. There is no third option. Paperclip is meanwhile investing in *identifying*
untagged builds rather than tagging them -- builds off a formal release surface
now report their source SHA even without git metadata.

## Upgrade notes for v2026.722.0

- **`PAPERCLIP_*` env bindings now reach runs.**
  [PR #9974](https://github.com/paperclipai/paperclip/pull/9974) scopes the strip
  to reserved keys. Previously the heartbeat dropped every `PAPERCLIP_`-prefixed
  binding before resolution, silently discarding operator-named secrets such as
  `PAPERCLIP_CLOUD_PROD_PROVIDER_RAILWAY_TOKEN`. Now only `PAPERCLIP_API_KEY` is
  categorically rejected and everything else flows through. This breaks in two
  directions: undo any rename workaround you built, and expect to lose a static
  `PAPERCLIP_API_KEY` override, because the harness-minted run token is now the
  only source of the run API key.
- **Two migrations run whether or not you enable the feature.**
  [Connections v3](https://github.com/paperclipai/paperclip/pull/9958) adds
  `0182_connections_v3_schema_core` and
  `0183_connection_user_authorization_state`, which execute automatically on
  startup, backfill connection UIDs, create default workspace grants, and rename
  the legacy `remote_http` transport to `mcp_remote`. The UI is gated. The schema
  change is not.
- **Re-check anything parsing CLI-lane adapter output**, per the ACP default
  change in `v2026.720.0`.

## Still true from earlier windows

Collapsed, because it has not changed and should not bury the current read. The
architecture registered in this profile's `claims:` block still holds: adapters
declare a runtime command spec carrying their own install recipe; remote targets
reach the host only through a scoped sandbox callback bridge with env
sanitization; sandbox providers are pluggable across E2B, Daytona, Cloudflare,
exe.dev, and Modal; the `cursor_cloud` adapter routes work to Cursor's hosted
agents; agents cannot self-transition an issue to `in_review` by asserting it in
output; assignment mutations route through a real authorization service;
approved documents lock and agent writes divert to a derived document; routine
env layers with documented `agent < project < routine` precedence; and the
v2026.618.0 multi-tenant cluster (cloud-tenant deprivileging, per-company JWT
signing keys, plugin `company_id` isolation) is tagged and installable.

One staleness note an operator should carry. The three claims tagged
`channel: main-unreleased` in the block above -- preflight budget-cap
enforcement, the task watchdog, and centralized same-company CEO-agent authz --
were verified against `v2026.618.0` on 2026-06-23. Four tags have shipped since.
This window's harvest did not re-probe their ancestry, so treat that channel
label as **stale rather than current**: those controls may well be tagged now,
and we have not confirmed it either way.

Deployment reality is also unchanged. Paperclip wants Postgres, a running
server, and a configured set of adapter environments. It is a system you adopt
deliberately, not a tool you bolt on.

## Open questions

Answered this window, so they stop being asked:

- **Is the canary lane quiet or abandoned?** Abandoned. Last tag 2026-03-12, no
  preview channel exists in tag form, and preview work ships gated inside stable
  tags instead.
- **Does budget surfacing become budget enforcement?** Advanced in June and not
  re-probed here; see the staleness note above rather than treating the
  main-unreleased label as current.

Still open:

- Are the run-bound secret-access audit trails **queryable**, or only written?
  Two ledgers with no described read surface is a record, not a control.
- Does the open-by-default company skill policy get inverted, given Paperclip's
  own advisory about malicious skills exfiltrating and destroying user data?
- Will Connections v3 grants supersede the per-agent secret grants added in
  `v2026.722.0`, or will operators maintain two authorization models
  indefinitely?
- Is the inbox-archive policy auditable from the human's side? An agent that can
  quietly clear an attention queue needs a record the human, not the agent, can
  read.
- What counts as a "real review path" for the `in_review` restriction -- a human
  reviewer, a configured approval workflow, or any non-agent transition? Still
  undocumented outside the original PR, and still the load-bearing ambiguity in
  Paperclip's governance story.
- Does the dormant npm line get formally retired, or does a distribution channel
  quietly rot while an advisory keeps pointing at it?
- How does Paperclip's own authz service compose with agent-owned permission
  files such as `~/.claude/settings.json` via the ACPX-Claude adapter, now that
  ACP is the default lane for every local adapter? The resolution rule is in no
  release note, and the default change makes the question load-bearing rather
  than academic.

## What to watch next

- **Whether the secret-access audit trail gets a read surface.** This is the
  single change that would turn `v2026.722.0`'s best feature from a compliance
  artifact into an operator control.
- **Whether skill policy defaults invert.** Paperclip has both the threat model
  and the advisory in its own repository. Shipping open is a decision, and the
  next release either revisits it or confirms it.
- **Whether the MCP Tool Gateway leaves experimental.** A brokered, policy-gated
  tool lane is the most interesting authority design Paperclip has drafted; it
  is also gated, so it currently governs nobody.
- **Whether advisory hygiene improves.** This window produced a Critical whose
  affected range cannot be resolved against the shipping version line and whose
  fix predated disclosure by 97 days. Both are fixable with editorial care, and
  both determine whether Paperclip's next advisory is actionable.
- **Whether the tag cadence holds** at roughly one every eight days as the
  experimental surface grows. Fifty-three commits sat past the newest tag at
  window close, which is fine at this cadence and would not be at a slower one.

## Profile hygiene

This profile follows the discipline in
[METHOD.md](../../METHOD.md#the-object-grammar): every concrete claim in the
prose carries an inline source link, and posture sections cite finding IDs when
naming a specific feature, behavior change, or cross-project comparison.

Note on this revision. The 2026-07-02 to 2026-07-27 material is carried in prose
with pinned receipts -- release tags, merged pull requests with ancestry
resolved by compare, a published repository advisory, and two source reads of
`server/src/app.ts` at pinned tags -- and is **not** registered in the `claims:`
block. That block continues to hold the register from the May and June windows,
whose architectural claims still hold at `v2026.722.0`; the three entries marked
`channel: main-unreleased` carry the staleness qualifier described above.
Paperclip's default branch is `master` and it publishes per-release notes, so
version-level claims are cited at `release_note` precision against the tag and
per-change claims against the merged pull request. Paperclip ships roughly
weekly; re-verify against the current tag.
