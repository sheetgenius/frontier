# Adversarial crosscheck: claude-code

Run: `2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0`.
Window: after `2026-10-13T23:59:59Z` through the independent reads on
`2026-10-24` UTC. Final channel read: `2026-10-24T10:11:06.796606Z`.
Input: `harvest/claude-code.primary.md` and `RESEARCHER-BRIEF.md` in this run.

Install today is VERIFIED. The 15 numbered sections yield 13 VERIFIED and 2
CORRECTED. One additional prior-claim assertion is REFUTED as confirmed-current
because its current receipt could not be read. No numbered section is wholly
REFUTED or UNVERIFIABLE. The harvest needs the corrections and material omissions
below before it supplies a public profile.

VERIFIED here means the inspected primary record supports the stated scope.
It does not mean the closed engine was executed or independently proved safe.
Unconfirmed protection is not treated as protection.

## Channel truth: VERIFIED

Independently ran `gh release list`, read the release objects, and ran
`npm view @anthropic-ai/claude-code time dist-tags --json`. The newest
non-prerelease release remains [2.1.310][r310], published
`2026-10-23T23:39:00Z`. Anthropic's stable selector remains 2.1.308. No newer
release or registry version appeared during these reads.

| Surface | Independent UTC read on 2026-10-24 | Result |
| --- | --- | --- |
| [npm dist-tags][npm] | 10:11:05.095903Z | latest=2.1.310, next=2.1.310, stable=2.1.308 |
| GitHub release list | 10:11:05.930865Z | v2.1.310, isLatest=true, isPrerelease=false |
| [Native latest selector](https://downloads.claude.ai/claude-code-releases/latest) | 10:11:06.370109Z | 2.1.310 |
| [Native stable selector](https://downloads.claude.ai/claude-code-releases/stable) | 10:11:06.796606Z | 2.1.308 |
| [Homebrew claude-code API](https://formulae.brew.sh/api/cask/claude-code.json) | 10:05:37.562316Z | 2.1.308 |
| [Homebrew claude-code@latest API](https://formulae.brew.sh/api/cask/claude-code@latest.json) | 10:05:37.483044Z | 2.1.310 |

Read both harvest-pinned Homebrew casks: [ordinary cask at
9ec411cdc7fb37ffd19f74613fe46b8859117ad0](https://github.com/Homebrew/homebrew-cask/blob/9ec411cdc7fb37ffd19f74613fe46b8859117ad0/Casks/c/claude-code.rb)
and [latest cask at
12865dc5fe70b59d5d5f33e23f7c9fe1507c8abf](https://github.com/Homebrew/homebrew-cask/blob/12865dc5fe70b59d5d5f33e23f7c9fe1507c8abf/Casks/c/claude-code@latest.rb).
They contain the claimed versions. The live ordinary-cask API now reports tap
head 12865dc5fe70b59d5d5f33e23f7c9fe1507c8abf, with the same 308 version.
That is not a channel correction.

The [310 npm manifest][npm310] pins eight optional platform packages to 310.
The 296, 299 and 310 manifests have the same Node >=22 requirement, license
field, binary entry and platform-package layout, apart from version pins.
The public LICENSE/README comparison between 296 and 310 is empty. No license
or package-layout change was found in this comparison. Independent native
dependency dist-tags were not inferred from the parent manifest.

The recommendation to pin 310 for the complete repair set is supported by
[309's sandbox/trust fixes][r309] and [310's remaining Windows hook fix][r310].
Calling the stable selector 310 would be wrong; the harvest does not do that.

## Release ledger: VERIFIED

All 13 rows, including baseline 296, match independently read GitHub release
objects and npm publication timestamps. All have prerelease=false. Each release
body also matches its corresponding version block in [the tagged changelog][cl].

| Version | GitHub published UTC | npm published UTC | Ahead / behind previous release |
| --- | --- | --- | --- |
| [2.1.296][r296] | 2026-10-09T19:28:59Z | 2026-10-09T16:58:10.924Z | 5 / 0 versus 295 |
| [2.1.299][r299] | 2026-10-14T02:49:42Z | 2026-10-14T00:23:19.588Z | 7 / 0 |
| [2.1.300][r300] | 2026-10-14T18:24:25Z | 2026-10-14T14:27:26.554Z | 3 / 0 |
| [2.1.301][r301] | 2026-10-15T19:22:06Z | 2026-10-15T14:34:23.330Z | 1 / 0 |
| [2.1.302][r302] | 2026-10-16T20:53:06Z | 2026-10-16T16:48:28.057Z | 1 / 0 |
| [2.1.303][r303] | 2026-10-18T22:26:54Z | 2026-10-18T21:15:23.178Z | 3 / 0 |
| [2.1.304][r304] | 2026-10-19T21:34:39Z | 2026-10-19T19:47:15.337Z | 1 / 0 |
| [2.1.305][r305] | 2026-10-20T20:46:50Z | 2026-10-20T19:29:36.816Z | 3 / 0 |
| [2.1.306][r306] | 2026-10-21T03:16:31Z | 2026-10-21T02:28:47.495Z | 1 / 0 |
| [2.1.307][r307] | 2026-10-21T22:17:02Z | 2026-10-21T20:47:18.383Z | 1 / 0 |
| [2.1.308][r308] | 2026-10-22T04:34:55Z | 2026-10-22T04:19:48.902Z | 1 / 0 |
| [2.1.309][r309] | 2026-10-22T22:18:57Z | 2026-10-22T20:34:13.713Z | 1 / 0 |
| [2.1.310][r310] | 2026-10-23T23:39:00Z | 2026-10-23T21:20:46.540Z | 2 / 0 |

The 296-to-299 gap is real. There are 12 in-window non-prerelease releases.
Neither 303 nor 308 supplies a specific change beyond general fixes.

## Independent ancestry and delivery

Created a separate blobless, no-checkout clone at
`/Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/claude-code-verify/`.
Verified origin `https://github.com/anthropics/claude-code.git` and
`remote.origin.partialclonefilter=blob:none`. No cloned code was executed.

Re-ran `git merge-base --is-ancestor` for every listed version against 308 and
310. Exit 0 means ancestor; exit 1 means not ancestor.

| Candidate | Against v2.1.308 | Against v2.1.310 |
| --- | --- | --- |
| v2.1.296 and every tag v2.1.299 through v2.1.308 | 0 | 0 |
| v2.1.309 | 1 | 0 |
| v2.1.310 | 1 | 0 |

The [carried guard commit
bf2323b3021c9d3db7a31e1e7d61068c3f704497](https://github.com/anthropics/claude-code/commit/bf2323b3021c9d3db7a31e1e7d61068c3f704497)
returns 1 against 296, and 0 against 299, 308 and 310. The entire
`mods/sec-default` directory has no difference between 308 and 310.

Resolved tags independently:

```text
v2.1.296 2301018b1f61073c501a8e7a4813ef48c239163b
v2.1.299 db93774d73e8fdbaf315a6f4c175ae99ad3d515a
v2.1.308 5ed799e5cc56bea9efff57398ca43e31d82784ff
v2.1.309 65823ec0034ed0aa0266bc43903fefd3ff94a327
v2.1.310 b70dc4113ad72e0ee44f7b1b95afaf510b53ee98
main      318b7e6ac4e726e88a4ad326214866a93c373b1b
```

`git rev-list --left-right --count previous...tag` reproduces the ledger's
counts, with the output's right column being the newer tag's ahead count.
296 to 310 is 25 ahead / 0 behind. The pinned main is 2 ahead of 310 and 5
ahead of 308. Read the [full post-310 diff](https://github.com/anthropics/claude-code/compare/v2.1.310...318b7e6ac4e726e88a4ad326214866a93c373b1b):
only README text and TypeScript comments change. The harvest correctly keeps
those clarifications out of the released executable claim.

Also independently downloaded the 299, 308 and 310 Linux x64 npm tarballs into
memory, verified their SHA-512 against their versioned manifests, and read
`package/claude` without executing or extracting it. All three match the
harvest's integrity values and contain `managedMcpServersUnreadable`,
`allowManagedModsOnly`, `allowModsToOverrideDenyRules` and the policy-path
variable. Reads completed at 10:09:39.730143Z, 10:09:35.336729Z and
10:09:45.752933Z respectively. [299 manifest](https://registry.npmjs.org/@anthropic-ai%2fclaude-code-linux-x64/2.1.299),
[308 manifest](https://registry.npmjs.org/@anthropic-ai%2fclaude-code-linux-x64/2.1.308),
[310 manifest](https://registry.npmjs.org/@anthropic-ai%2fclaude-code-linux-x64/2.1.310).
These are delivery checks, not enforcement tests.

## 1. Guard asks and environment pins: VERIFIED

Read the tagged [held-verdict predicate](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/held-verdict/verdicts/holds-over.ts),
its ranking, rewritten-verdict and equality helpers, [hook registration](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/register.ts),
[pinned-name composition](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/policy/pinned-names.ts),
both variable lists, and the [guard README][guard]. They support the distinction
between held policy/host asks and ordinary dialog asks, the nine policy variables,
ten loading variables, administrator opt-ins and seating caveats.

The delivery date 2026-10-14 and tagged-release channel follow from [299][r299]
and the independently repeated ancestry above. [304][r304], published
2026-10-19, separately supports person-only decisions and `isReadOnly`. The
[310 public type mirror](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/types/claude-code.d.ts#L10130)
still limits `ToolCheckDecider` to `host`, as the harvest warns. No enforcement
guarantee is inferred from the public code or package strings.

## 2. Headless default mode: VERIFIED

Read [302][r302] and its block in [310's changelog][cl], plus the
[permission-mode capture][modes]. The release explicitly changes unconfigured
`-p` and SDK sessions on third-party providers, with telemetry off, or on a
fresh install to default mode. Explicit auto remains possible. The classifier
model variable is client-side only. Date 2026-10-16 and inclusion in both 308
and 310 are correct. Interactive defaults were not reversed by this note.

## 3. Sandbox repairs and shell rewind: VERIFIED

Read [299][r299], [309][r309], [310's 309 block][cl] and the
[sandbox capture][sandbox]. The notes name the plugin reload write path,
shell startup outside the sandbox, MCP config writes, symlink/glob paths,
background Linux denials and the listed command shapes. They also explicitly
remove simulated edit/rewind behavior for `sed -i`.

The 309 release date is 2026-10-22. Its history reaches 310 and does not reach
308. The harvest correctly recommends testing latest for this repair set.
These notes establish named fixes, not exhaustive containment.

## 4. Nested Linux namespaces: VERIFIED

Read [305][r305] and the [captured sandbox troubleshooting contract][sandbox].
The latter explicitly says a malicious command can end up outside the sandbox,
that protected paths and credential rules cannot then be relied on, and that
the setting alone is insufficient for rootless Podman/Buildah. It directs the
setting to user settings rather than project settings. Date 2026-10-20,
opt-in status and tagged inclusion in 308/310 are supported.

## 5. Ultrareview trust: VERIFIED

Read the [309 trust change][r309] and [Manifold's original report](https://www.manifold.security/blog/ai-coding-agents-git-hijack).
The release requires terminal trust or refusal, with the named script bypasses.
The primary researcher report dates its separate, undisclosed git-setting path
to 2026-07-15 and reconfirmation to 2026-09-01 on 2.1.252. The report does not
identify a 309 fix. The harvest correctly leaves that exact protection open.
The new gate is dated 2026-10-22, in 310 and absent from 308.

## 6. Hook and approval repairs: VERIFIED

Read all four linked releases [299][r299], [300][r300], [309][r309] and
[310][r310], and the [hooks capture][hooks]. They support the three distinct
Windows missing-Git cases, PowerShell exit handling, prompt-before-expansion
ordering, next-prompt frontmatter hook timing, input validation and the VS Code
plan-feedback repair. Latest fix date 2026-10-23 is correct; 308 lacks 309/310.

The capture explicitly makes hook failure blocking opt-in and says exit 2 is
not honored by PermissionRequest. Its decision object is required for that
denial. The harvest's event-specific qualification is warranted.

## 7. MCP admission and retry safety: VERIFIED

Read [299][r299], [302][r302], [305][r305], [307][r307] and [309][r309].
They support the pre-connection policy checks, protocol-default extension,
optional-field compatibility repair, managed stdio env-substitution exception,
read-only/idempotent retry restriction and disabled-server repair. The main
307 event is dated 2026-10-21. The first four releases reach 308 and 310;
309 reaches only 310. The warning about unknown remote side effects is a
reasonable operator inference, not a claimed runtime test.

## 8. Idle compaction: CORRECTED

The [299 announcement][r299], [302 configuration row][r302] and pinned
[settings-reference capture][settings] support the threshold, approximate
54-minute timer, lossy summary and controls. Announcement date 2026-10-14 and
the distinction from the 290 control floor are correct.

Exact fix to the first paragraph: "Eligible interactive terminal conversations
on a one-hour prompt-cache TTL, with Anthropic feature-flag fetching available,
compact after about 54 idle minutes once context reaches the configured
threshold, 200,000 tokens by default, while the computer is awake."

The original wording makes this sound unconditional for large terminal
conversations. The documentation requires all those conditions. It also says a
normal 200K window compacts before reaching the default idle threshold; lowering
the threshold can make it eligible, with a 100,000 minimum. Do not imply the
default covers every long session or third-party/telemetry-off job.

## 9. Forks and lifecycle limits: VERIFIED

Read [302's fork and foreground/background defaults][r302], [299's turn/budget
repair][r299], [304's spawn/resume limit repair][r304], [305's workflow journal
repair][r305] and [309's teammate restrictions][r309]. These match the exact
surfaces and opt-out stated. The journal event is dated 2026-10-20; the
default change is separately in 302 on 2026-10-16. All except the 309 repair
reach stable 308. The harvest appropriately avoids an exactly-once guarantee.

## 10. Tool search and monitors: VERIFIED

Read [304][r304], [305][r305] and [310][r310]. They support the custom-base-URL
tool-search default, regression recovery, effort/system-message compatibility
fallback and broader Monitor availability, including the changed treatment of
long foreground sleeps. The newest event is dated 2026-10-23. 308 contains
tool-search changes; only 310 contains the listed new Monitor coverage.

## 11. Transcripts and exposure repairs: VERIFIED

Read [300's request-transcript and rewritten-prompt entries][r300] and
[299's gateway-key entries][r299]. They name the exact telemetry/title and
Anthropic-request paths, and retain intentional delivery of Anthropic API
keys to Anthropic. Both releases were published on 2026-10-14 and reach
308/310. The separate web-header allegation has no claimed fix here.

## 12. Safety and classifier observability: VERIFIED

Read [307][r307], [301][r301], [302][r302] and [300][r300]. The named safety
event, classifier verdict/mode/category fields, opt-in details and cache-lifetime
token split are present. The safety-event release date is 2026-10-21. All reach
308/310. Event output is not proof of isolation or quota correctness.

## 13. MCP Tasks: VERIFIED

Read the full task lifecycle and eligibility portions of the [2026-10-24 MCP
capture][mcp], plus [304][r304] and [310][r310]. The capture supports the beta,
304 minimum, feature flags, excluded providers/surfaces, main-conversation
scope, open stream input, one-shot exclusion, resume identity, cancellation
limits and noninteractive elicitation cancellation. It additionally requires
a supporting server on protocol 2026-07-28; legacy negotiation rules it out.

The date is an observation of documentation captured at
2026-10-24T08:50:41Z, not proof that implementation or every rollout began that
day. The docs-only label is correct. Both current binary channels clear the
minimum, which alone does not grant eligibility.

## 14. Hosted review: VERIFIED

Opened the [dated official engineering article](https://claude.dev/blog/solving-code-review-at-anthropic/),
which says 2026-10-15 and GA on Team/Enterprise, and read the [2026-10-17 review
documentation capture][review]. Read [304's depth controls][r304], [307's stop
command][r307] and [309's queued-push fix][r309]. These support the claim,
including Standard as default and the distinction from local review.

The dated article is a canonical announcement, not a tag-pinned implementation
receipt. The archived service contract supplies behavioral scope. The harvest
correctly uses docs-only and attributes internal performance claims to Anthropic.
Installing a CLI tag does not establish hosted-service rollout.

## 15. Desktop environments and nested work: CORRECTED

Read the [2026-10-23 Desktop capture][desktop] and [310's cloud-role product
notes][r310]. Saved local/SSH environments, cloud environments, parallel sessions,
optional worktrees, earlier-layout limitations, SSH persistence caveats and
custom-role permissions are supported. This is docs-only current posture,
observed on 2026-10-24, not a verified Desktop release date.

Exact fix: replace "parallel and nested sessions" with "parallel sessions and,
inside a session, subagents, background shell commands and dynamic workflows
in the tasks pane." The capture describes those two scopes separately; it does
not establish nested session containers or a general hierarchy of sessions.
For cross-session supervision it explicitly limits visibility to Desktop-run
local/SSH/WSL sessions, excluding cloud, terminal CLI and VS Code sessions.
Keep that limit when proposing replacement of a session dashboard.

## Prior claims re-checked at the current channels

The most consequential checks below were performed against 308 as well as 310,
not merely the old 296 record.

- **Guard delivery and mod authority: VERIFIED as changed.** The [308 guard
  README](https://github.com/anthropics/claude-code/blob/v2.1.308/mods/sec-default/README.md),
  identical guard tree at 310, held-verdict code and [captured permission
  precedence][permissions] support the narrowed override claim. Seating and
  unsandboxed-plugin caveats remain essential. The old main-only status is
  superseded.
- **Headless versus interactive defaults: VERIFIED as changed.** The [308
  changelog's 302 entry](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L213)
  supports the reversal. Its [interactive-default entry](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1695)
  remains a different case.
- **Managed OS read-denial exception: VERIFIED as documented.** The [308
  entry](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1503)
  and [managed-settings capture][managed] preserve the distinction between an
  OS-denied source and startup-stopping parse/other failures. This does not
  imply other policy sources were absent in a real session.
- **Hook failure opt-in and restricted tools: VERIFIED as documented.** Read
  [308's onFailure entry](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L670),
  the [actual late-registration repair](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L706),
  and [current archived hook semantics][hooks]. The broader current Windows
  minimum remains 310.
- **Shell deny-rule scope: VERIFIED within the harvest's limits.** The
  [permissions capture][permissions] covers recognized file commands and
  redirects, but excludes arbitrary Python/Node file access and recursive
  commands that do not name the target. Read the old [308 command-shape
  repairs](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1186-L1187)
  and the new 309 notes. Neither complete Bash coverage nor absence of Bash
  coverage follows.
- **Cloud review machine-local stop: VERIFIED as documented.** [308's
  disableWorkflows qualification](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1580)
  still identifies the executing machine's administrator. Hosted review controls
  and the new ultrareview trust gate do not replace that policy.
- **AGENTS.md limitations: VERIFIED.** Re-read the [308 loader README](https://github.com/anthropics/claude-code/blob/v2.1.308/mods/agents-md/README.md).
  CLAUDE.local.md can suppress fallback, explicit both mode exists, and nested
  engine CLAUDE attachments still enter managed-only mode. Do not promise
  instruction equivalence on every path.
- **Model governance, defaults and safety switch: VERIFIED as documented.**
  Read stable entries for [exact model matching](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1738-L1739),
  [Opus](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L2103),
  [Sonnet](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1634),
  [Haiku](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L821),
  [plan defaults](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L2180)
  and [the API safety-switch exception](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1699).
  Read the 299 gateway enforcement repair too. Configured intent remains
  distinct from returned model identity.
- **OTel prompt masking, runner prompt files and MCP protocol: VERIFIED as
  documented.** Read stable [prompt_text](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1298),
  [runner file flags](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L2062)
  and [protocol extension](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L555).
  The harvest correctly retains the exposure and compatibility consequences.
- **Server review: VERIFIED only for the supported documentation scope.** The
  [current permission-mode capture][modes] and [stable server-review controls](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L2057-L2058)
  support server review, local fallback and opt-out. Region/account/session
  coverage remains untested.
- **Current fallback-billing page and 24-hour acknowledgment: REFUTED as a
  confirmed-current re-check.** The [live receipt](https://code.claude.com/docs/en/auto-mode-classifier-billing)
  returned HTTP 403 through direct requests, its Markdown variant and the web
  tool. I could read only the [2026-09-21 capture](https://web.archive.org/web/20260921092459/https://code.claude.com/docs/en/auto-mode-classifier-billing),
  which supports the historical fields, warning stream and 24-hour suppression.
  Exact correction: retain those details as historical documentation pending a
  readable current receipt; remove "read 2026-10-24, still describes" from any
  independently verified-current claim. This access failure does not establish
  that the behavior changed.
- **Plugin4Shell fixed build: VERIFIED, with disclosure dates separated.** The
  [repository advisory][plugin-ghsa] names <2.1.179 affected and 2.1.179 fixed.
  A malicious plugin upstream could supply a branch named like the reviewed
  commit hash and install attacker-controlled code in place of that commit.
  Both 308 and 310 are later releases. Repository publication was 2026-10-09;
  the global database event below is later.
- **GitSpawn exact protection: still open.** The 309 trust gate is confirmed;
  neither the [primary report](https://www.manifold.security/blog/ai-coding-agents-git-hijack)
  nor the inspected advisory records maps its withheld setting to a reproduced
  fixed path. Do not turn this into a protection claim.

## Material misses

These are omissions from the harvest, not additional independent vulnerabilities
inferred from bug-shaped language. CLI release dates and 308/310 inclusion are
established by the ledger and ancestry above. Hosted product notes retain their
hosted scope.

1. **Python SDK security disclosure entered NVD in this window.**
   [CVE-2026-96620](https://nvd.nist.gov/vuln/detail/CVE-2026-96620) was published
   `2026-10-16T20:18:28.293Z` and modified `2026-10-21T22:16:50.597Z`, confirmed
   through the NVD JSON API. The [canonical SDK advisory](https://github.com/anthropics/claude-agent-sdk-python/security/advisories/GHSA-h4mw-j7qp-8mwm)
   says an application forwarding untrusted resume IDs could inject CLI flags
   defining a stdio MCP server, allowing arbitrary commands at startup outside
   SDK permission controls. Python package versions below 0.2.121 are affected.
   This is an SDK boundary, not a newly disclosed flaw in CLI 310. The GHSA was
   already public on 2026-09-12; the fix was released in July. [Fix SHA
   347a1cb88d7652199399db1b7f914e0a459a6662](https://github.com/anthropics/claude-agent-sdk-python/commit/347a1cb88d7652199399db1b7f914e0a459a6662)
   joins resume/session-id arguments with `=`. The [compare to v0.2.121](https://github.com/anthropics/claude-agent-sdk-python/compare/347a1cb88d7652199399db1b7f914e0a459a6662...v0.2.121)
   returns ahead_by=4, behind_by=0 and that fix as merge base. [Release
   v0.2.121](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.121)
   is non-prerelease, published 2026-07-17T00:39:25Z; [PyPI's versioned
   record](https://pypi.org/pypi/claude-agent-sdk/0.2.121/json) agrees on July
   uploads. Channel: tagged-release SDK fix, newly indexed NVD disclosure.
   Check the Python dependency separately from the CLI pin.
2. **The global Plugin4Shell advisory record changed in-window.** The
   [GitHub Advisory Database entry](https://github.com/advisories/GHSA-pq7j-f95f-qfcv)
   was published there at 2026-10-15T20:22:07Z and updated one second later;
   its canonical [repository advisory][plugin-ghsa] remains dated October 9.
   The affected code and [2.1.179 fix](https://github.com/anthropics/claude-code/releases/tag/v2.1.179)
   did not become new in October. Report this as a later database publication,
   not a second vulnerability or new patch. The repository-only "no advisory
   updated" statement is accurate but does not cover GHSA/NVD discovery.
3. **Remote Control removes two accepted flags.** [300][r300],
   2026-10-14, removes `--sandbox` and `--no-sandbox` from
   `claude remote-control`; passing either now exits with an error. They
   previously had no effect. Use `sandbox.enabled` instead. Channel:
   tagged-release, included in 308/310. Wrappers can break immediately.
4. **Removal prompts change in both directions.** [299][r299],
   2026-10-14, stops prompting for an `rm` assembled at runtime in an unreadable
   shell script unless `CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT=1` is set.
   [309][r309], 2026-10-22, makes the dangerous rm/rmdir prompt in Desktop and
   VS Code bypass mode deny immediately with a rewrite hint. It also refuses
   the described unsandboxed write fallback when an enabled sandbox cannot run.
   Channel: tagged-release; the latter changes are absent from 308. Re-check
   prompt-dependent deletion policies and stalled-job expectations.
5. **Managed policy and hosted transport boundaries also changed.**
   [299][r299] repairs a locally changed stored plan suppressing policy fetch
   under forceLoginOrgUUID, and preserves machine forceLoginOrgUUID/Method over
   server policy. [300][r300] restricts settings-sourced CA/proxy/git variables
   in host-managed sessions, applies policy for the stated Desktop gateway
   case, and makes unsupported desktop gateway policy keys stop startup instead
   of warn. [304][r304], 2026-10-19, refreshes policy after API-key approval or
   account-source changes. Channel: tagged-release, all in 308/310. Inspect
   actual policy loading and deployment variables, not just the guard options.
6. **MCP naming and redirect compatibility became stricter.** [299][r299]
   fixes double-underscore deny/ask matching, narrows `mcp__a` allow rules and
   agent tool lists to the intended normalized server, and stops following
   redirects at Anthropic connector and session MCP proxy boundaries. Redirects
   from a connector's own server are explicitly unaffected. Date 2026-10-14;
   channel tagged-release, in 308/310. Audit prefix-based rules and redirects
   before assuming existing connector configuration behaves identically.
7. **Skill/mod policy contracts changed beyond person-only asks.**
   [304][r304] gives settings.read hooks individual layers plus the merged
   rewrite, caps each skill source at 1,024 hooks and 16,384 matcher characters,
   and removes a main-conversation skill's allowed-tools when plugin-only hook
   policy excludes its hooks. [305][r305], 2026-10-20, similarly strips
   Desktop path-mounted plugins' allowed-tools under managed-permission-only
   policy. Channel: tagged-release, in 308/310. Re-test policy mods and
   previously pre-approved skills; hook admission and tool grants interact.
8. **Additional hooks now fail closed on serialization/model failures.**
   [299][r299] refuses blockable actions when a plugin hook cannot receive or
   return the event, withholding a result if the tool already ran. [300][r300]
   fixes agent hooks ignoring their model and replaces an unavailable-model
   allow path with fallback to the caller's model. Both are dated 2026-10-14,
   tagged-release and included in 308/310. Test broken hook inputs and missing
   models alongside the Windows and onFailure cases already harvested.
9. **Safeguards persist differently across background restarts.**
   [299][r299] fixes restarted/woken background safe-mode sessions silently
   leaving safe mode and remotely disabled installed mods continuing to run;
   mods now unload between turns. It also prints an ID-based resume command
   so a session name cannot execute when that line is pasted. Date 2026-10-14;
   channel tagged-release, in 308/310. Verify resumed sessions and remote
   revocation, rather than relying only on launch-time state.
10. **Worktree cleanup could lose commits.** [301][r301], 2026-10-15,
    repairs unprompted removal of hook-created worktrees with possible unpushed
    commits. [304][r304] repairs detached/changed-branch exit cleanup that could
    remove a worktree and branch with commits. [309][r309] additionally ignores
    git replace refs during harness-created worktrees and branch checkouts.
    Channel: tagged-release; the cleanup repairs reach 308, while the replace-ref
    repair reaches 310. Re-test retention for nonstandard worktree hooks and
    detached HEAD workflows.
11. **Runner setup and remote replay have new contracts.** [307][r307],
    2026-10-21, adds a default 30-minute checkout-hook timeout that fails setup;
    `--checkout-hook-timeout-min` changes it and 0 disables it. [309][r309]
    tells a moved runner's model that an interrupted tool outcome is unknown.
    [302's hosted product notes][r302] repair a partially failed routine being
    restarted from the beginning, potentially duplicating external work.
    Channel: tagged-release runner controls, with separately scoped hosted
    fixes; 308 lacks the 309 unknown-outcome improvement. Check long setup hooks
    and reconcile remote side effects before retry.
12. **Native unattended retry gains usage-wait controls.** [301][r301]
    adds `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS` to bound waiting
    for a far-away usage reset. [305][r305] adds
    `CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS` to notice a limit lifted
    early. Dates 2026-10-15 and 2026-10-20; tagged-release, in 308/310. These
    can replace polling/wait wrappers, but do not repair or explain the separate
    reports of usage draining faster.

## Rule checks and limits

- Read the house authorities, researcher brief, harvest, profile, contract and
  notes. The notes' claim that no separate Claude Code advisory surface exists
  is stale, as the harvest already records. No notes were edited.
- Opened every numbered Receipt source: tagged files through the independent
  clone, all referenced release objects through GitHub, the nine dated official
  documentation captures, and the two canonical articles. No numbered receipt
  points at main or HEAD. Timestamped archives are the closed-document pins.
  The Manifold and Anthropic articles are dated primary reports, not immutable
  code snapshots; they cannot establish closed-engine ancestry.
- Read all 35 repository advisories and independently searched the global GHSA
  database by package and in-window publication/update dates. The repository
  scan has no post-cutoff publication/update. NVD keyword/date search found the
  SDK entry above. The Desktop malicious-git advisory
  [GHSA-4p2j-qj3c-6x84 / CVE-2026-88066](https://github.com/anthropics/claude-code/security/advisories/GHSA-4p2j-qj3c-6x84)
  was published 2026-10-13T12:24:43Z, before cutoff: a malicious git executable
  could run commands in Windows Desktop, fixed in Desktop 1.8089.0. It is not a
  new CLI 310 advisory.
- The Plugin4Shell carry-forward should include the plain-language consequence
  recorded above, rather than leaving readers with only a pin-bypass label.
  NVD's SDK item likewise needs its untrusted-input condition and startup
  command-execution consequence. A CVE number alone is insufficient.
- No social text was quoted or used as product evidence. The harvest separates
  announcement language, operator inferences and measured outcomes adequately.
  Neither hosted review marketing nor Desktop screenshots establish comparative
  quality, account rollout, overnight reliability or enterprise suitability.
- Closed engine enforcement, account-specific feature flags, Windows execution,
  the withheld GitSpawn exploit and actual MCP task side effects were not
  tested. The unreadable current billing receipt is explicitly rejected above.
  No protection or rollout claim was supplied to fill those gaps.
- Only this assigned repository file was written. No publication-repository git
  mutation, site build, npm install or cloned-code execution was performed.

## Receipt index

[npm]: https://registry.npmjs.org/@anthropic-ai%2fclaude-code
[npm310]: https://registry.npmjs.org/@anthropic-ai%2fclaude-code/2.1.310
[cl]: https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md
[guard]: https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md
[r296]: https://github.com/anthropics/claude-code/releases/tag/v2.1.296
[r299]: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
[r300]: https://github.com/anthropics/claude-code/releases/tag/v2.1.300
[r301]: https://github.com/anthropics/claude-code/releases/tag/v2.1.301
[r302]: https://github.com/anthropics/claude-code/releases/tag/v2.1.302
[r303]: https://github.com/anthropics/claude-code/releases/tag/v2.1.303
[r304]: https://github.com/anthropics/claude-code/releases/tag/v2.1.304
[r305]: https://github.com/anthropics/claude-code/releases/tag/v2.1.305
[r306]: https://github.com/anthropics/claude-code/releases/tag/v2.1.306
[r307]: https://github.com/anthropics/claude-code/releases/tag/v2.1.307
[r308]: https://github.com/anthropics/claude-code/releases/tag/v2.1.308
[r309]: https://github.com/anthropics/claude-code/releases/tag/v2.1.309
[r310]: https://github.com/anthropics/claude-code/releases/tag/v2.1.310
[modes]: https://web.archive.org/web/20261022024756/https://code.claude.com/docs/en/permission-modes
[hooks]: https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks
[sandbox]: https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing
[settings]: https://web.archive.org/web/20261019080610/https://code.claude.com/docs/en/settings-reference
[mcp]: https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp
[review]: https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review
[desktop]: https://web.archive.org/web/20261023144411/https://code.claude.com/docs/en/desktop
[permissions]: https://web.archive.org/web/20261023144933/https://code.claude.com/docs/en/permissions
[managed]: https://web.archive.org/web/20261017104632/https://code.claude.com/docs/en/managed-settings
[plugin-ghsa]: https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv
