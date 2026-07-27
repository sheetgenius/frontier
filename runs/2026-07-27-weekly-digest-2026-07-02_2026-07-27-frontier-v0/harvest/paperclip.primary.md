# Harvest -- Paperclip (primary sources)

Window: 2026-07-02 .. 2026-07-27. Repo: `paperclipai/paperclip` (fork=false,
parent=null, default_branch=master). Harvested 2026-07-27.

Ancestry method: channel claims are resolved with the GitHub compare API as
`<merge_commit>...<tag>`. `status=ahead` means the tag contains the commit;
`status=behind` means it does not. Dates are ISO from the GitHub API.

Baseline at window open: `v2026.626.0`, commit
`4c6c0c6ad048838dda4a67e1aca43aa37a6fcf0d`, published 2026-06-27T03:49:47Z.

Reference points pinned at harvest time:

- `master` HEAD: `2568bdecc4577c60d76d58a45c5eaf3dc58f7e13`, 2026-07-26T15:52:16Z
- Newest tag: `v2026.722.0`, commit `e55d702916c4d3ddbcac49b697f879808b160f59`,
  published 2026-07-22T23:05:41Z, commit-dated 2026-07-22T22:54:46Z
- `master` is 53 commits ahead of `v2026.722.0` (compare
  `v2026.722.0...master`: `status=ahead, ahead_by=53, behind_by=0`)

Three tagged releases landed in window:

| tag | published (ISO) | tag commit | stated size |
|-----|-----------------|------------|-------------|
| `v2026.707.0` | 2026-07-07T14:49:05Z | `390627b46eb333309d357004384b220ecf8a65af` | 89 commits, 8 contributors |
| `v2026.720.0` | 2026-07-20T16:52:36Z | `903bd157c22a39c1b90813b8d2a7e63cfd10fa65` | 195 commits, 16 contributors |
| `v2026.722.0` | 2026-07-22T23:05:41Z | `e55d702916c4d3ddbcac49b697f879808b160f59` | 44 commits, 13 contributors |

---

## 1. Critical DNS-rebinding RCE advisory published -- against a version line
   that was already patched three months earlier

**What changed.** Paperclip published a repository security advisory rated
Critical, CVSS 3.1 base 9.6. It was published in window. The vulnerable code
path was closed in April.

**Receipt.** https://github.com/paperclipai/paperclip/security/advisories/GHSA-x8hx-rhr2-9rf7
-- `GHSA-x8hx-rhr2-9rf7`, "Drive-by RCE Against Local Paperclip Instances via
DNS Rebinding", `state=published`, `severity=critical`, CVSS
`CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:H/A:H` score 9.6, published
2026-07-22T23:12:15Z. No CVE ID assigned. Declared vulnerable range: `<0.3.1`.
Reporter credited: `sagilayani`.

**Date.** Published 2026-07-22 -- seven minutes after `v2026.722.0` went out at
2026-07-22T23:05:41Z.

**Channel.** `tagged-release` (the fix); the advisory itself is a disclosure
event.

**What the vulnerability actually allows.** **Unauthenticated remote code
execution** on a developer workstation, triggered by nothing more than visiting
a web page. Three flaws combine:

1. `local_trusted` deployment mode auto-authenticates every request as instance
   admin with no token or session (`server/src/middleware/auth.ts`).
2. No `Host` header validation ran in `local_trusted` mode -- the hostname guard
   was gated on `authenticated` + `private` only.
3. The `process` adapter executes arbitrary commands via `spawn()` with no
   sandboxing (`server/src/adapters/process/execute.ts`).

The attack: register a domain with two A records, one pointing at the attacker
and one at `127.0.0.1`, both TTL 0. The victim loads the attacker page; the
attacker's server then goes down; the page's JavaScript re-fetches, the browser
falls back to `127.0.0.1`, and the request reaches Paperclip on the SAME origin
-- so no CORS applies and the local instance auto-authorizes it as admin. The
script then POSTs to `/api/companies/import` to create an agent backed by the
`process` adapter with an arbitrary command, and POSTs to
`/api/agents/:id/wakeup` to run it. The attacker gets arbitrary command
execution as the OS user running Paperclip: read and write source, SSH keys,
credentials and browser data, install backdoors, pivot to other local services.
The victim sees a loading page. The reporter verified this end to end on macOS
with Firefox and a self-contained PoC.

**Fix status, resolved by source probe (not by the advisory metadata).** The
advisory's suggested fix was to enable the hostname guard for `local_trusted`.
Reading `server/src/app.ts` at pinned tag SHAs shows that was already done:

| tag | `shouldEnablePrivateHostnameGuard` condition |
|-----|---------------------------------------------|
| `v2026.318.0` (2026-03-18) | `deploymentMode === "authenticated" && deploymentExposure === "private"` -- **vulnerable, matches the advisory exactly** |
| `v2026.416.0` (2026-04-16) | `deploymentExposure === "private" && (deploymentMode === "local_trusted" \|\| deploymentMode === "authenticated")` -- **fixed** |
| `v2026.512.0`, `v2026.529.0`, `v2026.609.0`, `v2026.626.0`, `v2026.707.0`, `v2026.720.0`, `v2026.722.0` | same fixed condition |
| `master` HEAD `2568bdecc` | same fixed condition |

`v2026.416.0` was published 2026-04-16T11:44:38Z, commit-dated
2026-04-16T02:40:35Z -- the same day Paperclip published seven other repository
advisories. `GHSA-x8hx-rhr2-9rf7` is the straggler from that batch, disclosed
three months late.

**Operator consequence.** Anyone on `v2026.416.0` or later is not exposed to
this; anyone still on the retired `paperclipai@0.3.x` npm line or a
`v2026.318.0`-era build is trivially compromised by any web page they visit.
The gap between fix and disclosure means the advisory feed is not a reliable
signal of live exposure -- resolve the affected range against your actual tag.

---

## 2. Secrets stopped being ambient: per-user secrets, then run-bound API access

Two releases, one arc. Paperclip moved secret delivery from company-scoped
environment injection toward per-human scoping and then toward on-demand,
audited, run-bound reads.

### 2a. User-specific runtime secrets

**What changed.** Secrets can be scoped to the individual human operator rather
than only the company: user-specific secret definitions, per-user values,
environment bindings, and -- via new responsible-user run attribution --
a deterministic pre-dispatch check that the human behind a run has actually
supplied the value the run needs.

**Receipt.** PR https://github.com/paperclipai/paperclip/pull/8825
"feat(secrets): add user-specific runtime secrets", merged 2026-07-05T10:58:20Z,
merge commit `ad961227f57a217655c9e05e5987e6d0e5524409`, base `master`.
Ancestry: `ad961227f...v2026.707.0` = `ahead` (in the tag).
Release note: https://github.com/paperclipai/paperclip/releases/tag/v2026.707.0

**Date.** 2026-07-05 (merge); 2026-07-07 (tag).

**Channel.** `tagged-release` (`v2026.707.0`).

**Operator consequence.** A run can no longer silently start with a missing
per-human credential and fail deep inside the agent loop -- the check happens
before dispatch.

### 2b. Run-bound agent secret access with dual audit

**What changed.** A new `access.*` delivery mode exposes API-only secrets that
are never injected into the environment. `GET /api/agents/me/secrets` lists only
the aliases an agent has been granted; `POST /api/agents/me/secrets/:key/value`
returns a value with `Cache-Control: no-store`. Every value read is written to
both the security audit trail and the operator activity log. Low-trust
review and skill-test tokens stay denied. A "Secret access" editor manages
per-agent grants from agent settings.

**Receipt.** PR https://github.com/paperclipai/paperclip/pull/9921
"feat(secrets): add run-bound agent secret access", merged 2026-07-22T13:04:39Z,
merge commit `0b496c9c03b1e6cee5cb773954823590c7d1d76b`, base `master`.
Ancestry: `...v2026.720.0` = `behind`, `...v2026.722.0` = `ahead` -- first
shipped in `v2026.722.0`.
PR body, on the motivation: environment injection is "ambient, long-lived, and
not suitable for every secret consumer."
Release note: https://github.com/paperclipai/paperclip/releases/tag/v2026.722.0

**Date.** 2026-07-22 (merge and tag, same day).

**Channel.** `tagged-release` (`v2026.722.0`).

**Operator consequence.** Secret reads by agents become individually attributable
events in two ledgers instead of an untraceable environment variable -- this is
the first Paperclip primitive where "which agent read which secret, when" is
answerable after the fact.

---

## 3. Two real multi-tenancy hardening fixes shipped in v2026.720.0

### 3a. Cross-tenant existence oracle closed

**What changed.** The API returns `404` instead of `403` for resources belonging
to another tenant, so a caller can no longer distinguish "exists but forbidden"
from "does not exist."

**Receipt.** PR https://github.com/paperclipai/paperclip/pull/3967
"security(server): close cross-tenant existence oracle (404 instead of 403)",
merged 2026-07-14T22:53:09Z, merge commit
`7f2ed0ad90d7186d108f65400e322bda08dcbfe2`, base `master`.
Ancestry: `...v2026.707.0` = `behind`, `...v2026.720.0` = `ahead`.

**Date.** 2026-07-14 (merge); 2026-07-20 (tag).

**Channel.** `tagged-release` (`v2026.720.0`).

**Operator consequence.** An authenticated tenant can no longer enumerate the
existence of another tenant's issues, agents, or projects by probing IDs and
reading the status code.

### 3b. Invite-token entropy widened, public invite endpoints rate-limited

**What changed.** Invite-token entropy is widened and the public (unauthenticated)
invite endpoints are rate-limited.

**Receipt.** PR https://github.com/paperclipai/paperclip/pull/8979
"security(invites): widen invite-token entropy and rate-limit public invite
endpoints", merged 2026-07-14T22:47:58Z, merge commit
`1cfed0c0ff05b27618f0d6f948e55d6dd2e779d5`, base `master`.
Ancestry: `...v2026.707.0` = `behind`, `...v2026.720.0` = `ahead`.

**Date.** 2026-07-14 (merge); 2026-07-20 (tag).

**Channel.** `tagged-release` (`v2026.720.0`).

**Operator consequence.** Guessing or brute-forcing a company invite token to
join a tenant uninvited is materially harder; the endpoints that accept those
guesses now throttle.

### 3c. Cookie headers redacted from server logs

**What changed.** `Cookie` headers are redacted from server logs so session
material does not land in log output.

**Receipt.** PR https://github.com/paperclipai/paperclip/pull/7977
"fix: redact HTTP cookies from server logs", merged 2026-07-20T22:17:09Z, merge
commit `156830006b594cba76ef1b21a9bc0bbfdc3f7ec2`, base `master`.
Ancestry: `...v2026.720.0` = `behind`, `...v2026.722.0` = `ahead`.

**Date.** 2026-07-20 (merge); 2026-07-22 (tag).

**Channel.** `tagged-release` (`v2026.722.0`).

**Operator consequence.** Session cookies were previously recoverable by anyone
with read access to server logs or a log-shipping pipeline; on `v2026.722.0`
they are not.

---

## 4. ACP became the default execution engine for local coding adapters

**What changed.** Local coding adapters (Claude, Codex, Gemini, custom) now run
through ACP by default rather than the CLI lane, with local coding processes
confined. A companion change relays the ACP stdio session into sandbox execution
targets over the existing sandbox runner contract, so sandboxed runs get the
same default lane as local ones instead of silently falling back to CLI.

**Receipt.** PR https://github.com/paperclipai/paperclip/pull/9238 "Make ACP the
default engine for local adapters", merged 2026-07-09T02:05:03Z, merge commit
`eedc7ddef27e852ab130c8f5c68149ff86bec17f`, base `master`. Ancestry:
`...v2026.707.0` = `behind`, `...v2026.720.0` = `ahead`.

Companion: PR https://github.com/paperclipai/paperclip/pull/9390 "feat: run ACP
sessions in sandbox execution targets", merged 2026-07-11T00:13:54Z, merge
commit `9cde4e128c4f530463408775f7ea462ecc3e234c`. Its body states that sandbox
targets previously exposed only one-shot command execution, so every
ACP-capable adapter refused remote targets and fell back to the CLI lane with a
"supports only the local Paperclip host" warning.

**Date.** 2026-07-09 and 2026-07-11 (merges); 2026-07-20 (tag).

**Channel.** `tagged-release` (`v2026.720.0`).

**Operator consequence.** The default protocol between Paperclip and every local
coding agent changed in one release -- streaming updates and structured events
now come over ACP, and any operator tooling that parsed CLI-lane output should
be re-checked.

---

## 5. Agents were granted a governed write capability over human inboxes

**What changed.** Agents can archive and tidy user inboxes, gated by an
inbox-archive access policy.

**Receipt.** PR https://github.com/paperclipai/paperclip/pull/9724
"feat(inbox): let agents safely tidy user inboxes", merged 2026-07-16T21:49:18Z,
merge commit `59fb27ff794ce60b81b859922112f3d658376918`, base `master`.
Ancestry: `...v2026.707.0` = `behind`, `...v2026.720.0` = `ahead`.
Supporting PRs cited in the release note: #9658, #9654.
Release note: https://github.com/paperclipai/paperclip/releases/tag/v2026.720.0

**Date.** 2026-07-16 (merge); 2026-07-20 (tag).

**Channel.** `tagged-release` (`v2026.720.0`).

**Operator consequence.** An agent can now remove items from a human's attention
queue -- the governance question is whether the archive policy is auditable
before an operator discovers something was tidied away.

---

## 6. Breaking change: PAPERCLIP_* environment bindings now reach runs

**What changed.** The heartbeat previously stripped every `PAPERCLIP_`-prefixed
environment binding before resolution, silently dropping operator-named secrets
such as `PAPERCLIP_CLOUD_PROD_PROVIDER_RAILWAY_TOKEN`. Now only
`PAPERCLIP_API_KEY` is categorically rejected, harness-assigned runtime vars
always win, and every other `PAPERCLIP_*` binding flows through.

**Receipt.** PR https://github.com/paperclipai/paperclip/pull/9974
"fix(runtime): scope PAPERCLIP_ env-binding strip to reserved keys", merged
2026-07-22T12:01:57Z, merge commit
`5ed0b74b34f3265abcc5c16c61d5a94d6be0183d`, base `master`. Ancestry:
`...v2026.720.0` = `behind`, `...v2026.722.0` = `ahead`.

The `v2026.722.0` release Upgrade Guide states that a previously-set static
`PAPERCLIP_API_KEY` in adapter or config env no longer overrides the run token
-- the harness-minted run token is now the only source of the run API key.
https://github.com/paperclipai/paperclip/releases/tag/v2026.722.0

**Date.** 2026-07-22 (merge and tag).

**Channel.** `tagged-release` (`v2026.722.0`).

**Operator consequence.** Two-sided break: operators who worked around the strip
by renaming secrets should undo the workaround, and anyone who pinned a static
`PAPERCLIP_API_KEY` to override the run token loses that override on upgrade.

---

## 7. Skills became a governed, authorable subsystem -- with an open-by-default
   company policy

**What changed.** A three-pane Skill Studio IDE with sandboxed test runs; skills
organized into nested folders with a dedicated "My Skills" view; import from a
project; prechecks before company skill forks land. The release note states
company skill policy is **open-by-default** with core UX for tightening it.

**Receipt.** PR https://github.com/paperclipai/paperclip/pull/9241 "Skill Studio:
three-pane skill IDE with sandboxed test runs", merged 2026-07-09T18:08:56Z,
merge commit `b13eb5b2b5cc7ad721f96b914c55dad9e66c5f81`. PR
https://github.com/paperclipai/paperclip/pull/9633 "feat: organize skills with
nested folders and My Skills", merged 2026-07-16T20:50:46Z, merge commit
`52aea902632fcdb9b3e689c60e3a148a2009358b`. Both base `master`, both in
`v2026.720.0`. Related: #9356, #9620, #9564.
Release note: https://github.com/paperclipai/paperclip/releases/tag/v2026.720.0

Companion fix in the same release: PR
https://github.com/paperclipai/paperclip/pull/9571 "Company skills honor
responsible-user grants."

**Date.** 2026-07-09 and 2026-07-16 (merges); 2026-07-20 (tag).

**Channel.** `tagged-release` (`v2026.720.0`).

**Operator consequence.** Skills are executable agent instructions and the
company-wide sharing policy ships permissive; an operator who wants skill
authorship restricted must go tighten it after upgrading, not before.

Context worth carrying: Paperclip's own April advisory batch includes
`GHSA-w8hx-hqjv-vjcq` "Malicious skills able to exfiltrate and destroy all user
data" (published 2026-04-16). An open-by-default skill policy sits directly on
that threat model.

---

## 8. Experimental / preview surfaces (not on by default)

These shipped inside tagged releases but are gated behind experimental settings.
Channel: `preview-or-beta`.

### 8a. MCP Tool Gateway and Apps

A named MCP gateway brokers every tool call; governed access contracts and a
tool-access policy decide which agents and profiles may use which tools; new
Tools, Profiles, and Apps surfaces wire up, install, and smoke-test connections.
Landed as an eight-part split.

Receipt: PRs #9556 through #9563. Head of the split, PR
https://github.com/paperclipai/paperclip/pull/9556, merged 2026-07-14T17:56:22Z,
merge commit `7b35de65aaabbd53c2393cdf10c2223e36af1c23`; ancestry
`...v2026.720.0` = `ahead`.
Release note: https://github.com/paperclipai/paperclip/releases/tag/v2026.720.0

Date: 2026-07-14 (merge); 2026-07-20 (tag). Channel: `preview-or-beta`.

Operator consequence: the first Paperclip design where MCP tool calls are
brokered and policy-gated rather than direct -- worth studying now, not adopting.

### 8b. Connections v3 foundation

A v3 schema core adds a stable company-scoped connection UID, explicit
ownership/auth/transport fields, a subject-aware `connection_grants` table, and
multi-key credentials; the legacy `remote_http` transport is renamed
`mcp_remote`. A runtime layer adds subject-aware authorization state, scoped key
handling, and OpenAPI-registered grant routes that fail closed for unknown
scopes.

Receipt: PR https://github.com/paperclipai/paperclip/pull/9958
"feat(connections): add v3 schema core", merged 2026-07-21T20:16:26Z, merge
commit `7e00f6713800ae1829a2f5128a04767eae8a5e3d`; plus #9981, #9982.
Release note and Upgrade Guide:
https://github.com/paperclipai/paperclip/releases/tag/v2026.722.0 -- two
additive migrations, `0182_connections_v3_schema_core` and
`0183_connection_user_authorization_state`, run automatically on startup and
backfill connection UIDs, create default workspace grants, and rename the
transport.

Date: 2026-07-21 (merge); 2026-07-22 (tag). Channel: `preview-or-beta` for the
UI; the migrations run for everyone.

Operator consequence: the schema migration is unconditional even though the
feature is gated -- upgrading to `v2026.722.0` rewrites connection rows whether
or not you enable Apps.

### 8c. Also gated

Cases (first-class Case object, #9198), Decision Training (#9702, #9779, #9532),
built-in Summarizer and summary slots (#9713), and sandbox execution -- all
listed under Experimental in
https://github.com/paperclipai/paperclip/releases/tag/v2026.720.0

---

## 9. Operating-state legibility: Work Timeline shipped tagged

**What changed.** A company-scoped Work Timeline page renders a Gantt-style SVG
view of when agents worked, how handoffs happened, and where work overlapped,
backed by a dedicated company endpoint with hardened security filters.

**Receipt.** Release note
https://github.com/paperclipai/paperclip/releases/tag/v2026.707.0 (PRs #8938,
#8880, #8875, #8923). The security-filter hardening is PR
https://github.com/paperclipai/paperclip/pull/8923 "Harden work timeline security
filters", merged 2026-07-03T10:19:15Z, merge commit
`a6b7b12fd779de59d3a2fd8663fb85866fb2e432`; ancestry `...v2026.707.0` = `ahead`.

**Date.** 2026-07-03 (merge); 2026-07-07 (tag).

**Channel.** `tagged-release` (`v2026.707.0`).

**Operator consequence.** Multi-agent execution across a whole company becomes
scannable in one view instead of run-by-run -- the closest thing yet to an
operating-state display rather than a task list.

---

## 10. The canary lane is dormant, and the baseline question resolves

**What changed.** Nothing, which answers the carried question. The npm-package
tag line -- `paperclipai@*`, `@paperclipai/server@*`, `@paperclipai/shared@*`,
including all `-canary.N` tags -- stops at `0.3.1`, commit-dated
2026-03-12T17:55:26Z. The last canary tag, `paperclipai@0.3.1-canary.1`, is
commit-dated 2026-03-12T17:42:00Z. Nothing has been cut on that line in over
four months.

The live line is the calendar-versioned `v2026.MMDD.0` tag series, which is what
every release in this window uses.

**Receipt.** Full tag listing via `repos/paperclipai/paperclip/tags`; newest
canary tag `paperclipai@0.3.1-canary.1` at `873535fbf0b4b133e2bb9c987c889763f8ee9b4b`.

**Date.** Last canary tag 2026-03-12; unchanged as of 2026-07-27.

**Channel.** No `preview-or-beta` release channel exists in tag form. Preview
work ships INSIDE stable tags behind experimental settings (see section 8).

**Operator consequence.** There is no pre-release channel to track -- an
operator who wants early sight of Paperclip changes must run `master` or enable
experimental settings on a stable tag. "Untagged canary operating state" is
resolved: the canary tags are abandoned, not merely quiet.

Related, and worth noting: PRs #9508 and #9638 in `v2026.720.0` make builds that
are not on a formal release surface their source SHA, preserved even without git
metadata; PR #9103 in `v2026.707.0` makes source installs report their version
from git metadata. Paperclip is investing in identifying untagged builds rather
than in tagging them.

---

## Channel summary

| channel | count | note |
|---------|-------|------|
| `tagged-release` | 3 | `v2026.707.0`, `v2026.720.0`, `v2026.722.0` |
| `preview-or-beta` | 5 feature groups | MCP Tool Gateway/Apps, Connections v3, Cases, Decision Training, Summarizer -- all gated inside stable tags, no preview tag line |
| `main-unreleased` | 53 commits | `master` past `v2026.722.0` as of 2026-07-26 |

## Open questions carried forward

- Does the open-by-default company skill policy get inverted, given Paperclip's
  own advisory on malicious skills exfiltrating user data?
- Are the run-bound secret-access audit trails queryable by an operator, or only
  written? The PR describes dual logging but not a read surface.
- Will Connections v3 grants supersede the per-agent secret grants added in
  `v2026.722.0`, or coexist as two authorization models?
- Does the four-month-dormant npm tag line get formally retired, or is a
  distribution channel quietly rotting?
