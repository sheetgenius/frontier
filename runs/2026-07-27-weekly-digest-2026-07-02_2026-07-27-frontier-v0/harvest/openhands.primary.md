# Harvest -- OpenHands (primary sources)

Window: 2026-07-02 .. 2026-07-27. Repo: `OpenHands/OpenHands` (fork=false,
parent=null, default_branch=main). Harvested 2026-07-27.

Ancestry method: every channel claim below is resolved with the GitHub compare
API as `<commit>...<tag>`. `status=ahead` means the tag contains the commit;
`status=behind` means the tag does NOT contain it; `status=diverged` means
neither is an ancestor of the other. Dates are ISO from the GitHub API, not
rendered HTML.

Reference points pinned at harvest time:

- OSS tags in window: `1.9.0`, `1.9.1`, `1.9.2`, `1.9.3`, `1.10.0`, `1.11.0`
- Last OSS tag: `1.11.0`, commit `11ca68ab2e15dcd85c21e4d7d3409e7a259369ac`,
  published 2026-07-09T19:37:16Z, commit-dated 2026-07-09T19:36:38Z
- Last cloud tag: `cloud-1.47.1`, commit `f4bfa7f9498110d3f193d9eea4f954305fdc70ac`,
  published 2026-07-21T13:53:05Z, commit-dated 2026-07-21T13:52:23Z
- `main` HEAD: `ee9e78b7defdfa744e0bbe48c9cafa90b6135ad7`, 2026-07-25T20:43:21Z

---

## 1. The OSS tag freeze broke: six open-source tags in four days

**What changed.** The open-source line, frozen at `1.8.0` since 2026-06-10, was
tagged six times between 2026-07-06 and 2026-07-09. `1.9.0` is the catch-up
release: it drains the entire enterprise/ACP/sandbox backlog that sat on `main`
across the previous two harvest windows.

| tag | published (ISO) | tag commit |
|-----|-----------------|------------|
| `1.9.0` | 2026-07-06T15:05:19Z | `14da5aa34b3e6f58640622ba343781ea9f44e54f` |
| `1.9.1` | 2026-07-07T21:38:24Z | `6e2898809d21873b8d8b23b30dbd6eee19558731` |
| `1.9.2` | 2026-07-07T22:10:22Z | `ede3d75eb06f24312772ae74285b69e164568835` |
| `1.9.3` | 2026-07-08T16:44:40Z | `8ea5cd70faf1c23eb9dde3eb59a6493461669024` |
| `1.10.0` | 2026-07-08T19:44:54Z | `a114a2319017db60714bba2502b1aceb5e1fde34` |
| `1.11.0` | 2026-07-09T19:37:16Z | `11ca68ab2e15dcd85c21e4d7d3409e7a259369ac` |

The gap from `1.8.0` (2026-06-10T16:58:51Z) to `1.9.0` (2026-07-06T15:05:19Z) is
25 days and 22 hours.

**Receipt.** https://github.com/OpenHands/OpenHands/releases/tag/1.9.0 --
release body is 181 lines and includes, by name, the previously main-unreleased
cluster this publication tracked: `#14752` first-signer-owns-default-org,
`#14773` BYOK gating, `#14741` `hide_personal_workspaces`, `#14795` PluginSpec
token redaction, `#14849` `DynamicRemoteSandboxSpecService`, `#14934` Slack
attachments, `#14168` conversation limits.

**Date.** 2026-07-06 (first OSS tag of the window).

**Channel.** `tagged-release`.

**Operator consequence.** Self-hosters who were pinned to `1.8.0` can finally
take the enterprise, sandbox-spec, and integration work on a supported tag
instead of tracking `main`.

---

## 2. CVE-2026-44681 (authlib) is no longer main-only -- it shipped in 1.9.0

**What changed.** The authlib bump that resolves CVE-2026-44681 is contained in
the open-source `1.9.0` tag. The running story is closed.

**Receipt.** PR https://github.com/OpenHands/OpenHands/pull/14983 -- "fix: Fix
CVE-2026-44681: Update authlib to >=1.6.12", merged 2026-06-29T18:17:42Z, merge
commit `e6fe5057fcc020069e05529c85107cba3e0c127f`, base `main`. Listed in the
`1.9.0` release body.

Ancestry of `e6fe5057fcc020069e05529c85107cba3e0c127f`:

| tag | compare status | reading |
|-----|----------------|---------|
| `1.8.0` | diverged (behind_by=126) | not in 1.8.0 |
| `cloud-1.39.0` | behind | not in cloud-1.39.0 |
| `cloud-1.40.0` | behind | not in cloud-1.40.0 |
| `1.9.0` | ahead (ahead_by=28) | **in 1.9.0** |
| `cloud-1.41.0` | ahead | in cloud-1.41.0 |
| `1.11.0` | ahead | in 1.11.0 |
| `cloud-1.47.1` | ahead | in cloud-1.47.1 |

Manifest proof at the two tag SHAs (`pyproject.toml`):

- `1.8.0` (`bc26df351dd5d833a95131556dbe2da69af82253`): `authlib = ">=1.6.9"`
  with the comment `# CVE-2026-27962 (fixed in 1.6.9)`
- `1.9.0` (`14da5aa34b3e6f58640622ba343781ea9f44e54f`):
  `authlib = ">=1.6.12,!=1.7.0"` with the comment
  `# CVE-2026-44681 (fixed in 1.6.12 and 1.7.1; 1.7.0 is vulnerable)`

**Correction to the running story.** Cloud was not ahead of OSS on this
particular CVE. `cloud-1.39.0` (2026-06-24) and `cloud-1.40.0` (2026-06-26)
both predate the 2026-06-29 merge and do NOT contain the fix. The first tag of
any line to carry it was OSS `1.9.0` at 2026-07-06T15:05:19Z, about ten minutes
before `cloud-1.41.0` at 2026-07-06T15:14:56Z. The fix sat main-only for seven
days (2026-06-29 to 2026-07-06), not for weeks.

**Date.** Advisory published 2026-05-13; fix merged to `main` 2026-06-29; first
tagged 2026-07-06.

**Channel.** `tagged-release` (OSS `1.9.0`).

**What the vulnerability actually allows.** GHSA-r95x-qfjj-fjj2 /
CVE-2026-44681, severity Medium, CVSS 3.1 base 6.1
(`AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N`). Canonical advisory:
https://github.com/advisories/GHSA-r95x-qfjj-fjj2 ; NVD:
https://nvd.nist.gov/vuln/detail/CVE-2026-44681

It is an **unauthenticated open redirect**, not RCE and not an auth bypass. In
Authlib's `OpenIDImplicitGrant` and `OpenIDHybridGrant`, the `openid`-scope
check runs BEFORE `redirect_uri` is validated against the client's registered
URIs. The resulting `InvalidScopeError` carries the raw attacker-supplied
`redirect_uri`, and Authlib renders any error that has a `redirect_uri` as an
HTTP 302. A single unauthenticated GET to `/authorize` with a vulnerable
`response_type` (`id_token`, `id_token token`, `code id_token`, `code token`,
`code id_token token`), any `client_id` including a nonexistent one, and a
`scope` lacking `openid` makes the authorization server issue a 302 to any URL
the attacker chooses. No session, no consent, no CSRF token, and no valid
client are required, because the scope check runs before client lookup.

Operator impact: a phishing link that shows the legitimate identity provider's
domain in the address bar at click time, with the provider itself issuing the
redirect. That lends the attacker's landing page the provider's reputation and
can satisfy domain-allowlist controls that trust the provider. The `state`
parameter is echoed back, giving the attacker a stable correlator. No
authorization codes, ID tokens, or access tokens leak, because the flaw fires
before any authorization decision. Affected only if the deployment registers
the OIDC Implicit or Hybrid grants; plain authorization-code flow is not
affected by this variant.

**Operator consequence.** Self-hosters on any OpenHands tag from `1.9.0`
forward carry patched authlib; anyone still on `1.8.0` does not.

---

## 3. 1.9.0 also drained a 21-advisory dependency backlog

**What changed.** The `1.9.0` release body names 21 distinct CVE/GHSA
identifiers across Python and npm dependency bumps -- the accumulated output of
a month of agent-authored dependency PRs that had no tag to ship in.

Unique advisory IDs in the `1.9.0` body: CVE-2026-8723, CVE-2026-12143,
CVE-2026-41691, CVE-2026-44681, CVE-2026-44727, CVE-2026-45409, CVE-2026-48526,
CVE-2026-48712, CVE-2026-48779, CVE-2026-49458, CVE-2026-49855, CVE-2026-53539,
CVE-2026-54278, CVE-2026-54283, CVE-2026-54285, GHSA-4xgf-cpjx-pc3j,
GHSA-6v7p-g79w-8964, GHSA-cmwh-pvxp-8882, GHSA-gj48-438w-jh9v,
GHSA-jm82-fx9c-mx94, GHSA-qx2v-qp2m-jg93.

Packages touched include pyjwt (JWT verification, on the bearer-auth trust
boundary), starlette, python-multipart (request-body upload parsing),
jupyter-server, dompurify (twice), bleach, qs, ws, and protobufjs.

**Receipt.** https://github.com/OpenHands/OpenHands/releases/tag/1.9.0

**Date.** 2026-07-06.

**Channel.** `tagged-release`.

**Operator consequence.** One upgrade from `1.8.0` to `1.9.0` closes 21
advisories at once; the size of the batch is itself the measure of how long the
OSS line went unshipped.

---

## 4. The freeze reopened immediately: zero OSS tags since 2026-07-09

**What changed.** After `1.11.0` on 2026-07-09, the open-source line stopped
again. Through the end of the window (2026-07-27) there is no `1.12.0` tag and
no OSS tag of any kind, while the cloud line tagged six more times.

`main` is 50 commits ahead of `1.11.0` (compare `1.11.0...main`: `status=ahead,
ahead_by=50, behind_by=0`).

Cloud tags cut after `1.11.0`, all confirmed `status=ahead` against `1.11.0`:

| cloud tag | commit-dated (ISO) | commits ahead of 1.11.0 |
|-----------|--------------------|-------------------------|
| `cloud-1.45.1` | 2026-07-09T20:07:11Z | 1 |
| `cloud-1.46.0` | 2026-07-10T19:51:25Z | 9 |
| `cloud-1.46.1` | 2026-07-14T12:30:21Z | 15 |
| `cloud-1.46.2` | 2026-07-15T16:04:58Z | 20 |
| `cloud-1.47.0` | 2026-07-21T08:19:41Z | 34 |
| `cloud-1.47.1` | 2026-07-21T13:52:23Z | 36 |

The full OSS tag list confirms nothing above `1.11.0` exists: `1.11.0`,
`1.10.0`, `1.9.3`, `1.9.2`, `1.9.1`, `1.9.0`, `1.8.0`, `1.7.0`.

**The mechanism, pinned.** The release-please PR for the OSS line is open and in
DRAFT state: https://github.com/OpenHands/OpenHands/pull/15217 -- "chore(main):
release 1.12.0", `state=open`, `draft=true`, created 2026-07-09T20:08:08Z, last
updated 2026-07-25T20:51:47Z, base `main`, head
`release-please--branches--main`, labels `autorelease: pending`, `type: chore`,
`release-line: gui`, `mergeable_state=clean`. Its generated body is headed
`## 1.12.0 (2026-07-25)`.

Over the same 18 days, the cloud-line release PRs were merged normally and
appear as commits on `main`: `2bbc76d77` cloud 1.46.0 (#15224), `711ae250e`
cloud 1.46.1 (#15235), `613406ca2` cloud 1.46.2 (#15268), `2f8ea2e5e` cloud
1.47.0 (#15289), `f4bfa7f94` cloud 1.47.1. A further cloud PR, #15346
"chore(main): release cloud 1.48.0", has been open since 2026-07-21.

**Date.** Freeze reopened 2026-07-09; still open at 2026-07-27.

**Channel.** `main-unreleased` (everything past `1.11.0` on the OSS line).

**Operator consequence.** The cloud-first release asymmetry is structural, not a
one-off: an unmerged draft release PR holds the OSS line while cloud tags ship
on schedule. Self-hosters should expect to re-enter the same unpatched window
after every catch-up burst.

---

## 5. New main-only security fix: vite CVE-2026-53571 is in cloud, not in OSS

**What changed.** A HIGH-severity vite fix landed on `main` on 2026-07-16, made
it into `cloud-1.47.0` and `cloud-1.47.1`, and is in NO open-source tag. This is
the exact pattern from the previous window, reproduced with a new CVE.

**Receipt.** PR https://github.com/OpenHands/OpenHands/pull/14982 -- "fix: Fix
CVE-2026-53571: Update vite to 8.0.16, 7.3.5, 6.4.3", merged
2026-07-16T12:44:18Z, merge commit
`d6d34956d3d4e235039b36a53c484370a4a9f8f0`, base `main`.

Ancestry of `d6d34956d3d4e235039b36a53c484370a4a9f8f0`:

| tag | compare status | reading |
|-----|----------------|---------|
| `1.11.0` | behind (behind_by=23) | **not in the newest OSS tag** |
| `cloud-1.46.2` | behind | not in cloud-1.46.2 |
| `cloud-1.47.0` | ahead (ahead_by=11) | in cloud-1.47.0 |
| `cloud-1.47.1` | ahead | in cloud-1.47.1 |
| `main` | ahead | on main |

Manifest proof at tag SHAs (`frontend/package.json`, `dependencies`, not
`devDependencies`):

- OSS `1.11.0` (`11ca68ab2e15dcd85c21e4d7d3409e7a259369ac`): `vite: 7.3.2`
- `cloud-1.47.1` (`f4bfa7f9498110d3f193d9eea4f954305fdc70ac`): `vite: 7.3.5`
- `main` HEAD (`ee9e78b7defdfa744e0bbe48c9cafa90b6135ad7`): `vite: 7.3.5`

The advisory lists `>= 7.0.0, <= 7.3.4` as vulnerable and `7.3.5` as the first
patched 7.x. `1.11.0` at `7.3.2` is inside the vulnerable range.

**Date.** Advisory published 2026-06-15; merged to `main` 2026-07-16; first
tagged in `cloud-1.47.0` on 2026-07-21; still untagged on the OSS line at
2026-07-27.

**Channel.** `main-unreleased` on the OSS line; `tagged-release` on cloud.

**What the vulnerability actually allows.** GHSA-fx2h-pf6j-xcff /
CVE-2026-53571, severity High, CVSS 3.1 base 7.5
(`AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N`). Canonical advisory:
https://github.com/advisories/GHSA-fx2h-pf6j-xcff ; NVD:
https://nvd.nist.gov/vuln/detail/CVE-2026-53571

It is an **unauthenticated arbitrary file read** -- a bypass of the vite dev
server's `server.fs.deny` protection on Windows. Vite denies direct HTTP access
to sensitive files such as `.env`, `.env.*`, and `*.{crt,pem}`, but the deny
logic does not normalize Windows NTFS alternate-data-stream path forms or 8.3
short names before the check. A request like `/.env::$DATA?raw` passes the deny
check and Windows then resolves it to the file's default data stream, returning
the contents to the browser. Confidentiality impact only: no write, no code
execution.

Preconditions are narrow: the vite DEV server must be exposed to the network
(`--host` or `server.host`), the sensitive file must sit inside
`server.fs.allow`, and the host must be Windows with NTFS or 8.3 short-name
generation enabled. This is a development-server flaw, not a production-build
flaw -- but vite is a runtime `dependencies` entry in the OpenHands frontend,
not a devDependency.

**Operator consequence.** Anyone running the OpenHands frontend dev server on
Windows with network exposure can have `.env` and TLS key material read by an
unauthenticated remote request; on the open-source line there is no tag that
fixes it, so the only remedies are tracking `main` or pinning vite manually.

---

## 6. Install docs still send self-hosters to 1.8 -- three OSS tags behind

**What changed.** Nothing, and that is the finding. The official installation
page still instructs self-hosters to pull the `1.8` image and calls it the most
recent stable release, while the OSS line reached `1.11.0` on 2026-07-09. The
docs version-bump ritual that accompanied `1.7.0` and `1.8.0` was skipped for
the entire `1.9.x`-`1.11.0` burst.

**Receipt.** Docs source repo `OpenHands/docs`, file
`openhands/usage/run-openhands/local-setup.mdx`, pinned at docs `main` HEAD
`b0dafd13ed8c5fffb8a944c801ad89db5db070af` (2026-07-25T08:26:43Z):

- line 136: `docker.openhands.dev/openhands/openhands:1.8`
- line 129: `-e AGENT_SERVER_IMAGE_TAG=1.26.0-python`
- line 225: `The docker command above ... pulls the most recent stable release
  of OpenHands.`

Commit history for that file, newest first: `f941a712f` 2026-06-21T12:20:14Z
"Remove obsolete state migration notes (#583)"; `6087832ee` 2026-06-10T16:03:10Z
"Release 1.8.0 (#565)"; `5504ded55` 2026-05-01T14:52:34Z "Release 1.7.0 (#485)".
No commit bumps it for 1.9, 1.10, or 1.11.

Rendered surface agrees: https://docs.openhands.dev/openhands/usage/local-setup

For contrast, `main` has since bumped the SDK to `v1.37.1`
(https://github.com/OpenHands/OpenHands/pull/15378, commit `5f43190d2`,
2026-07-24T19:13:43Z), against the docs' pinned agent-server `1.26.0-python`.

**Date.** Docs last version-bumped 2026-06-10; unchanged as of 2026-07-25.

**Channel.** `tagged-release` docs pointing at a superseded tag.

**Operator consequence.** A self-hoster who follows the official install page
today lands on `1.8` and inherits all 21 advisories that `1.9.0` closed,
including the authlib open redirect -- the documented happy path is the
unpatched path.

---

## 7. Notable main-unreleased work past 1.11.0

All of the following are `main-unreleased` on the OSS line and carried only by
cloud tags. Each is confirmed on `main` and absent from `1.11.0` by virtue of
appearing in the `1.11.0...main` compare range.

### 7a. Agent Canvas placed behind SaaS authentication

PR https://github.com/OpenHands/OpenHands/pull/15286, merged
2026-07-17T17:28:20Z, merge commit `11d4ecf21fc144d10a614ddba63b84de5c90bfd4`.
Adds an optional `/canvas` proxy that requires existing SaaS authentication
before serving Agent Canvas, registered before the SPA catch-all so `/canvas`
can be protected without a dedicated subdomain. Gated on
`AGENT_CANVAS_INTERNAL_URL`; when unset, no proxy routes are registered.

Channel: `main-unreleased` (OSS); shipped in `cloud-1.47.x`.

Operator consequence: an agent-facing surface that previously needed its own
subdomain and its own access control is now authenticated by the main app --
but only for operators on the cloud line.

### 7b. MCP credential preservation, twice

PR https://github.com/OpenHands/OpenHands/pull/15257 "fix(mcp): preserve SaaS
credentials with encrypted storage", commit `478a05bf5`, 2026-07-14T12:21:52Z.
PR https://github.com/OpenHands/OpenHands/pull/15285 "fix(mcp): preserve MCP
auth secrets stripped by settings GET round-trip", commit `8ed181dc3`,
2026-07-15T15:50:18Z.

Channel: `main-unreleased` (OSS); `cloud-1.46.1` and `cloud-1.46.2`
respectively.

Operator consequence: MCP server credentials were being lost on a settings
read-modify-write cycle; self-hosters on `1.11.0` still have the bug.

### 7c. Database pool tuning churn

`d1563c952` (#15225) enable LIFO pooling 2026-07-10; `5adf4dac2` (#15270) lower
DB pool defaults and make them env-tunable 2026-07-15; `1a8beb35b` (#15333)
restore previous DB pool_size default 2026-07-20; `652503005` (#15379) prevent
webhook callbacks from starving the database pool 2026-07-24.

Channel: `main-unreleased`.

Operator consequence: connection-pool defaults were changed and then partly
reverted inside two weeks -- treat pool sizing on any tag in this range as
unsettled.

### 7d. Agent-profiles cloud launch behavior, applied then reverted

`cba578860` (#15228) "fix(agent-profiles): honor profile settings in cloud
launches" 2026-07-16T11:42:29Z, then `39d4271a1` (#15339)
"revert(agent-profiles): restore default tools in cloud launches"
2026-07-21T13:35:36Z.

Channel: `main-unreleased`, reverted before reaching the OSS line at all.

Operator consequence: agent-profile tool selection on launch is not a settled
contract; do not build on it yet.

---

## Channel summary

| channel | count | note |
|---------|-------|------|
| `tagged-release` (OSS) | 6 | `1.9.0`, `1.9.1`, `1.9.2`, `1.9.3`, `1.10.0`, `1.11.0`; all 2026-07-06..2026-07-09 |
| `tagged-release` (cloud) | 9 | `cloud-1.41.0` .. `cloud-1.47.1` |
| `main-unreleased` (OSS line) | 50 commits | everything after `1.11.0`, incl. CVE-2026-53571 |
| `preview-or-beta` | 0 | no prerelease or draft OSS release exists; PR #15217 is a draft release PR, not a published prerelease |

## Open questions carried forward

- Does `1.12.0` (PR #15217) ever merge, and how many days does the second freeze
  run before it does?
- Do the docs get a version bump when it does, or does `openhands:1.8` persist
  as the documented install target?
- Is the OSS line now formally a periodic snapshot of the cloud line rather than
  a co-equal release channel? The `release-line: gui` label on #15217 suggests
  release-please treats them as separate configured lines.
