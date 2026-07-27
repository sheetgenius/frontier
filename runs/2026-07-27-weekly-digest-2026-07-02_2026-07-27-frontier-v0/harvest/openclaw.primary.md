# Harvest -- openclaw (primary sources)

Window: 2026-07-02 to 2026-07-27. Source contract: `sources/openclaw.yml`.
Repo: https://github.com/openclaw/openclaw
Docs: https://docs.openclaw.ai/

Method note, and it matters more here than anywhere else on the watchlist.
OpenClaw does not cut its stable tag from `main`. The `v2026.7.1` tag points
at commit `2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4`, and
`compare/b81666ca6af25c86cc099983a4358cdc5ea9ced8...v2026.7.1` shows the
stable line forked from `main` at `2026-07-08T18:19:05Z` and then took 215 of
its own commits, none of which carry a PR number. Merge date therefore proves
nothing about stable membership: a PR merged to `main` on 2026-07-10 is not in
a stable tag published 2026-07-13. Every stable-channel call below is resolved
against the maintainers' own PR manifest in the `v2026.7.1` release body plus
the fork-point analysis; every beta-channel call is resolved by git ancestry
against the beta tags, which do target `main`.

Receipt for the fork point:
https://github.com/openclaw/openclaw/compare/b81666ca6af25c86cc099983a4358cdc5ea9ced8...v2026.7.1

---

## 1. The published channel map is not the GitHub releases page

The GitHub releases list is an incomplete view of what OpenClaw actually
ships. Verified against the git tag refs and the npm registry on 2026-07-27:

| Channel | Version | Git tag | GitHub release | npm publish (ISO, UTC) |
|---|---|---|---|---|
| npm `latest` | `2026.7.1-2` | none | none | `2026-07-18T03:53:48Z` |
| (prior respin) | `2026.7.1-1` | none | none | `2026-07-18T03:25:50Z` |
| stable tag | `v2026.7.1` | `2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4` | yes | `2026-07-13T17:58:18Z` |
| npm `beta` | `2026.7.2-beta.4` | `5e63b365d4d3e62ef600b783fad7c5043b6f4738` | none | `2026-07-24T06:11:58Z` |
| tag only | `v2026.7.2-beta.5` | `208a040be59c895b538c8aa777c23df6351106a1` | none | not published |
| npm `extended-stable` | `2026.6.33` | `95a0c2bd0c58a9c1246a2a1d408ac78312243b14` | none | `2026-07-21T11:25:55Z` |
| npm `alpha` | `2026.5.19-alpha.1` | yes | yes | pre-window |

Receipts:
- https://github.com/openclaw/openclaw/releases/tag/v2026.7.1
- https://www.npmjs.com/package/openclaw/v/2026.7.1-2
- https://www.npmjs.com/package/openclaw/v/2026.7.2-beta.4
- https://www.npmjs.com/package/openclaw/v/2026.6.33
- Tag objects: `refs/tags/v2026.7.2-beta.4` (commit dated `2026-07-24T05:08:56Z`,
  message `docs(changelog): refresh 2026.7.2 final notes`),
  `refs/tags/v2026.7.2-beta.5` (commit dated `2026-07-27T04:19:24Z`, message
  `docs(changelog): refresh 2026.7.2 notes`),
  `refs/tags/v2026.6.33` (commit `7af0cfc9c5488e03c4e2f528bdc7ac9f7778b35e`,
  dated `2026-07-21T09:05:55Z`, message
  `fix(release): support frozen pre-AI extended-stable publish`)

Three facts follow, and each is load-bearing for the rest of this harvest:

1. `npm install openclaw` on 2026-07-27 gives `2026.7.1-2`, an untagged respin
   published 2026-07-18 with no git tag, no GitHub release and no release
   notes. Two respins went out 28 minutes apart that morning. None of the npm
   records carries a `gitHead`, so there is no published commit pointer for
   the artifact most users actually run.
2. `v2026.7.2-beta.4` and `v2026.7.2-beta.5` are real tags with no GitHub
   release. Any harvest that reads only the releases API would report
   `v2026.7.2-beta.3` (2026-07-18) as the newest preview and be nine days
   stale.
3. An `extended-stable` line exists at `2026.6.33`, tagged 2026-07-21, whose
   release-tooling commit message describes it as a frozen pre-AI publish.

Release channel: `tagged-release` for `v2026.7.1` and `v2026.6.33`;
`preview-or-beta` for the beta.4 and beta.5 tags; the npm `latest` respins
have no channel of record at all.

Operator consequence: state your OpenClaw version as an npm version, not a
GitHub release, or you will describe software nobody is running.

## 2. Prior-window beta work reached a stable tag on 2026-07-13

The last digest recorded OpenClaw at `v2026.7.1-beta.1` with scoped capability
profiles and flagged it as beta-only. That line reached stable in this window.
`v2026.7.1` was published `2026-07-13T22:33:14Z`, with npm publish
`2026-07-13T17:58:18Z` and the docs release page dated 2026-07-13.

The authority-relevant items the docs release page and the GitHub release PR
manifest both attribute to `v2026.7.1`:

- Scoped attach grants for external MCP loopback clients, so external tools
  get session-scoped Gateway access without process-wide credentials or
  permission to impersonate another session:
  https://github.com/openclaw/openclaw/pull/96351
  (merged `2026-07-01T01:22:06Z`)
- `openclaw attach` launches an external harness bound to a Gateway session,
  keeping credentials out of arguments and revoking the grant when the session
  ends: https://github.com/openclaw/openclaw/pull/96454
  (merged `2026-07-01T22:52:40Z`)
- Control UI shows execution approvals for supported desktop nodes and rejects
  pending, unsupported or policy-blocked requests before they reach the node:
  https://github.com/openclaw/openclaw/pull/100505
  (merged `2026-07-06T02:04:44Z`)
- Admin-gated mobile pairing, with non-admin operators shown a disabled action
  and an access explanation: https://github.com/openclaw/openclaw/pull/100157

Receipts:
- https://github.com/openclaw/openclaw/releases/tag/v2026.7.1
- https://docs.openclaw.ai/releases/2026.7.1

Verification: all five PR numbers appear in the `v2026.7.1` release-body PR
manifest. None of the PRs named in sections 3 to 9 below appears there.

Release channel: `tagged-release`.

Operator consequence: this is the one clean promotion in the window -- the
scoped-grant work the last digest deferred is now in a stable tag, and
`v2026.7.1` is the version to cite for it.

## 3. Channel allowlists could grant global owner authority (privilege escalation)

The highest-severity authority fix of the window. A sender allowed to use one
channel could be treated as a global command owner; with config commands
enabled that permitted owner-gated mutations such as `/allowlist` and
`/config`. The fix separates transport-level command access from global owner
authority: only an explicit `commands.ownerAllowFrom` identity or an internal
`operator.admin` session grants owner status, owner wildcards are ignored
consistently with the documented contract, and doctor treats wildcard-only
owner configuration as missing. The PR carries a before/after Telegram proof
in which an `allowFrom`-listed non-owner runs `/activation always`: accepted
on `main`, refused on the branch.

Receipt: https://github.com/openclaw/openclaw/pull/107403
(merge commit `c214fc4bee1e319919a1747035075db7040edad1`, merged
`2026-07-14T12:19:21Z`). Fixes #106060, closes #104984.

Channel resolution: `diverged` from `v2026.7.1` and absent from the
`v2026.7.1` PR manifest; `behind` `v2026.7.2-beta.4` and `behind`
`v2026.7.2-beta.5`.

Release channel: `preview-or-beta`.

Operator consequence: thirteen days after the fix merged, a privilege
escalation from channel-allowlist membership to global config authority is
still fixed only in the beta line -- the stable tag and the npm `latest`
respin do not have it.

## 4. Requester-scoped MCP server connections

MCP server connections are scoped to the session that requested them rather
than shared process-wide.

Receipt: https://github.com/openclaw/openclaw/pull/106359
(`7d99de8e32d3374c3a9ce9d0c6c0a9669bc3c6ae`, merged `2026-07-14T11:39:57Z`).
Companion docs change: https://github.com/openclaw/openclaw/pull/113400
(`docs(security): clarify requester-scoped controls`, merged
`2026-07-24T21:07:35Z`).

Channel resolution: `behind` `v2026.7.2-beta.4`; absent from the `v2026.7.1`
manifest.

Release channel: `preview-or-beta`.

Operator consequence: one session can no longer reach another session's MCP
connections -- but only if you run the beta.

## 5. Node-pairing directory browsing now requires operator.admin; prototype-pollution guard added

Two boundary fixes merged within 35 minutes of each other on 2026-07-13,
both after the stable branch had already forked.

- Require `operator.admin` to approve `fs.listDir` nodes:
  https://github.com/openclaw/openclaw/pull/106004
  (`8592b87c391bf5c858871ad6e17ac6891c1c6713`, merged `2026-07-13T21:40:56Z`)
- Prototype-pollution guard on migration config merge:
  https://github.com/openclaw/openclaw/pull/106116
  (`b6330edbe4bfd08167a13ff0862a3fcb42ba79d3`, merged `2026-07-13T22:14:59Z`)

Channel resolution: both `diverged` from `v2026.7.1`, absent from its PR
manifest, `behind` `v2026.7.2-beta.4`.

Release channel: `preview-or-beta`.

Operator consequence: the merge timestamps land before the stable tag's
publish time and after its fork point, which is exactly the case where date
reasoning gives the wrong channel.

## 6. Two approval defaults were loosened

Both are documented as deliberate, and both are beta-only.

- Skill Workshop agent-initiated apply, reject and quarantine actions now run
  without an additional approval prompt by default;
  `skills.workshop.approvalPolicy: "pending"` remains available as an opt-in
  approval gate: https://github.com/openclaw/openclaw/pull/107690
  (`3976ec47d3e0e458469976c6234be9ce34f2ede5`, merged `2026-07-14T17:31:52Z`)
- Curated read-only boolean flags on default stdin-only safe bins are
  auto-approved, with unknown flags, tail follow/retry modes, file operands
  and custom profiles left fail-closed:
  https://github.com/openclaw/openclaw/pull/88953
  (`1bac1022e65b8e122db7663e668bfd0035e99fc4`, merged `2026-07-10T09:53:57Z`)

Channel resolution: both `diverged` from `v2026.7.1` and absent from its PR
manifest; both `behind` `v2026.7.2-beta.4`.

Release channel: `preview-or-beta`.

Operator consequence: the agent can now modify its own skill library without a
prompt on the beta line, so `skills.workshop.approvalPolicy: "pending"` is the
setting to check before moving to 2026.7.2.

## 7. Plugin install provenance warnings

Arbitrary executable plugin sources now require explicit `--force`
acknowledgement in CLI and chat installs, while trusted ClawHub, bundled,
official-catalog and tracked-update flows stay frictionless. Crestodian
installs are restricted to trusted sources.

Receipt: https://github.com/openclaw/openclaw/pull/102197
(`00364ee7778be91c3029e678010fd5def14f1614`, merged `2026-07-14T17:25:37Z`)

Channel resolution: `diverged` from `v2026.7.1`, absent from its PR manifest,
`behind` `v2026.7.2-beta.4`.

Release channel: `preview-or-beta`.

Operator consequence: supply-chain friction on plugin installs exists only in
the beta line; stable still installs arbitrary executable plugin sources
without the acknowledgement step.

## 8. External gateway supervision mode

`OPENCLAW_SUPERVISOR_MODE=external` hands lifecycle ownership to an external
supervisor such as OCM while preserving verified restart and deferral
behaviour, blocking native service mutation and self-update, and providing a
versioned atomic restart-handoff consume contract.

Receipt: https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.3
(published `2026-07-18T23:16:53Z`, release SHA
`d111bef0eed5aefb1e7c5ac59801c1f0924495f1`, tag commit dated
`2026-07-18T21:01:49Z`)

Release channel: `preview-or-beta`.

Operator consequence: this is the first supported way to run OpenClaw under a
foreign supervisor without granting it native service authority, which is what
a platform team needs before putting the Gateway under existing orchestration.

## 9. Workspace sandbox escape via symlink-then-dotdot (main-unreleased, 2026-07-27)

A POSIX workspace path containing a symlink followed by `..` could be approved
as in-root while an OS operation on the raw path resolved outside the
workspace. The PR documents a reproduced probe on a fresh `origin/main`:
`sub/up/../outside/secret.txt` with `sub/up -> ..` reads a planted sibling
file while `assertSandboxPath` returns success and reports the normalized
in-root path `sub/outside/secret.txt`. The shipped read, write and edit tools
route filesystem operations through the same `@openclaw/fs-safe` `Root`.

The PR is explicit that this is defence-in-depth and not race-safe: it blocks
the demonstrated escape at validation time but does not close the TOCTOU
window, and a validated in-root symlink can still be swapped before a later
operation on the raw path. Atomic fs-safe adoption is tracked in #114382 and
the broader work in #113705.

Receipt: https://github.com/openclaw/openclaw/pull/113405
(`cc027149e553ff4be1afe2ca9cc3de9ccdea6f68`, merged `2026-07-27T07:16:00Z`).
Pre-fix probe commit cited in the PR: `af7b0708aad80212613dd8bb37ab0c36d24023d6`.

Channel resolution: `diverged` from `v2026.7.2-beta.4` and from
`v2026.7.2-beta.5`.

Release channel: `main-unreleased`.

Operator consequence: as of 2026-07-27 no OpenClaw release on any channel
carries this fix, and the maintainers state the underlying TOCTOU window
remains open even with it.

## 10. `/acp sessions` exposed every gateway session to non-owner senders

An ACP information-disclosure fix: `/acp sessions` listed every gateway
session to senders who were not the owner.

Receipt: https://github.com/openclaw/openclaw/pull/110745
(`0a588fa7952722063a1937c0ca1e41bbb73035c2`, merged `2026-07-19T00:38:48Z`)

Channel resolution: `behind` `v2026.7.2-beta.4` and `v2026.7.2-beta.5`;
merged after the `v2026.7.2-beta.3` tag commit (`2026-07-18T21:01:49Z`).

Release channel: `preview-or-beta` (first carried by the untagged-on-GitHub
`v2026.7.2-beta.4`).

Operator consequence: if you enabled ACP on stable or on beta.3, other senders
could enumerate your sessions; the fix exists only in beta.4 and later.

## 11. Exec-approval hardening wave, split across beta.5 and main

A cluster of exec-approval bypass fixes merged after beta.4, several tagged
`[AI]` by the project's own convention. Ancestry splits them:

In `v2026.7.2-beta.5` (`behind`), not in beta.4 (`diverged`):
- Require approval for opaque exec wrappers:
  https://github.com/openclaw/openclaw/pull/112953
  (`7fc9a7c465fada58ea024b5b6ca5a94bd82162d5`, merged `2026-07-24T09:17:22Z`)
- Redact AWS secret access keys:
  https://github.com/openclaw/openclaw/pull/112947
  (`dbb8bb47802a9d6930c5d703a62bd422c660f470`, merged `2026-07-24T06:11:13Z`)
- Redact unquoted config secret assignments:
  https://github.com/openclaw/openclaw/pull/112952, merged `2026-07-24T06:16:39Z`
- Redact additional GitLab token prefixes:
  https://github.com/openclaw/openclaw/pull/112954, merged `2026-07-24T08:45:17Z`

Already in `v2026.7.2-beta.4` (`behind`):
- Reject unsafe explicit approval IDs:
  https://github.com/openclaw/openclaw/pull/111055
  (`c745e7d66c8b06a3d316db5dba18ab9596821416`, merged `2026-07-19T00:38:22Z`)
- Require admin for keyed session model changes:
  https://github.com/openclaw/openclaw/pull/111651
  (`8d5ad804a65dddfd60a5e0d6e06e8a1108d8c035`, merged `2026-07-20T11:03:34Z`)
- Allow explicit `operator.admin` in device auto-approval, recorded with a
  critical audit finding: https://github.com/openclaw/openclaw/pull/111509
  (`31e52dc5c5318d971543d4b8b50c5b6abf8451d7`, merged `2026-07-19T19:05:05Z`)
- Keep exec approval carriers scoped:
  https://github.com/openclaw/openclaw/pull/111652
  (`1de4a099caa12943188af8c2eff733add86bb8cc`, merged `2026-07-20T08:36:04Z`)

Still `main-unreleased` (`diverged` from beta.4 and beta.5):
- Require approval for escaped newline shell words:
  https://github.com/openclaw/openclaw/pull/114134
  (`95f56b84cbd9e205ed0d05aa561eacf19a81eaa3`, merged `2026-07-27T04:01:56Z`)

Also observed in the same window: reusable exec approvals apply to approved
arguments (#112946, merged `2026-07-24T10:08:39Z`), inline eval approvals kept
one-shot (#112956, merged `2026-07-24T09:51:25Z`), and exec approvals moved
into the shared SQLite state DB (#114063, merged `2026-07-26T10:39:24Z`).

Operator consequence: the exec approval gate was bypassable through wrapper
binaries and shell-word forms; the fixes are spread across three channels and
no single OpenClaw artifact currently has all of them.

## 12. Other main-unreleased security work

- Prevent Zod eval under a strict Content Security Policy:
  https://github.com/openclaw/openclaw/pull/113617
  (`d2ff17acc33a7132bfbd8ccfc3307c54d7698cbb`, merged `2026-07-25T11:16:18Z`)
- Backport release security audit dependency updates:
  https://github.com/openclaw/openclaw/pull/113630, merged `2026-07-25T11:44:52Z`
- Report canonical `agents.entries` paths in audit and diagnostics:
  https://github.com/openclaw/openclaw/pull/113603, merged `2026-07-25T10:19:08Z`
- Document Discord channel-allowlist and ambient room event pitfalls:
  https://github.com/openclaw/openclaw/pull/113692, merged `2026-07-25T13:43:03Z`

Release channel: `main-unreleased`.

Operator consequence: the Discord docs change is the maintainers writing down
the allowlist trap from section 3 in prose, which is the signal that the
misconfiguration is common in the field.

## 13. Main-unreleased volume since the newest published preview

`compare/v2026.7.2-beta.3...main` reports `total_commits: 2110` as of
2026-07-27.

Receipt: https://github.com/openclaw/openclaw/compare/v2026.7.2-beta.3...main

Release channel: `main-unreleased`.

Operator consequence: 2110 commits in nine days between the newest
GitHub-published preview and `main`, on top of a stable line that forked
2026-07-08, means the gap between what OpenClaw has fixed and what any user
can install is the largest on the watchlist.
