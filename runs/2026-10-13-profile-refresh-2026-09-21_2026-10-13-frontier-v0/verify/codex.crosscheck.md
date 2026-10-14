# Codex adversarial crosscheck

Run: `2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0`.
Window: 2026-09-21 through 2026-10-13, with release dates compared in UTC.
Verification performed: 2026-10-14. Window cutoff: 2026-10-14T00:00:00Z.
Harvest reviewed: `harvest/codex.primary.md`, SHA-256
`0203eca93fb0d2d03f4471e28bdff5f726721ac4a7eee94db512a56068aa15ba`.

**Result: 6 VERIFIED, 7 CORRECTED, 1 REFUTED, 0 UNVERIFIABLE numbered sections.**
These counts cover sections 1 through 14 only. Unconfirmed publication claims
are rejected rather than silently accepted. REFUTED here can mean insufficient
evidence for publication; it does not mean the opposite claim has been proved.

**Install today: CORRECTED; `install_today_correct: false`.** The stable version
is right. The complete snapshot is not: three more prereleases shipped before
window close, two purportedly main-only fixes reached an alpha, the changelog
absence claim fails independent inspection, and the updater-disable instructions
omit a required restart.

## Independent channel check

I independently ran `gh release list -R openai/codex --limit 400`, fetched the
stable release bodies, queried npm `time` and `dist-tags` for both packages,
read PyPI JSON and Homebrew cask history, and made a fresh blobless, no-checkout
clone at
`/Users/c3po/co/frontier/tmp/refresh-2026-10-13/clones/codex-verify/`.
I read tagged blobs and commit diffs without executing upstream code. The
repository identity is `openai/codex`; its license remains Apache-2.0. There is
no LICENSE or NOTICE diff between the baseline and the end-of-window main
commit. [License at stable](https://github.com/openai/codex/blob/rust-v0.162.1/LICENSE).

The newest stable at the cutoff is
[rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1),
published 2026-10-09T19:44:51Z, prerelease=false. Its peeled commit is
`092d3acd6bec3e3a14bdc7e7a2810ab628ab759d`. No newer stable was found on
2026-10-14 either. Live npm `latest` is 0.162.1 for both `@openai/codex` and
`@openai/codex-sdk`; PyPI `openai-codex` is also 0.162.1.
[CLI registry](https://registry.npmjs.org/@openai%2fcodex),
[SDK registry](https://registry.npmjs.org/@openai%2fcodex-sdk),
[PyPI version record](https://pypi.org/pypi/openai-codex/0.162.1/json).

The standalone installer, npm alternative, Homebrew alternative, and download
fallback are confirmed in the [tagged README](https://github.com/openai/codex/blob/rust-v0.162.1/README.md#L14-L54).
The same installer-first ordering exists at
[0.155.1](https://github.com/openai/codex/blob/rust-v0.155.1/README.md#L14-L54),
so it is not a new install-channel transition in this window. The signed
PowerShell installer is listed in the
[0.162.0 release](https://github.com/openai/codex/releases/tag/rust-v0.162.0).

Historical Homebrew source confirms both of the harvest's October 13 cask
versions: [codex 0.162.1](https://github.com/Homebrew/homebrew-cask/blob/410fda78922483cdc65211cadbea846cf4232076/Casks/c/codex.rb)
and [ChatGPT 26.1007.41230, auto-updates enabled](https://github.com/Homebrew/homebrew-cask/blob/710f8bc53a14f9e92f470bba29672c01c3e43993/Casks/c/chatgpt.rb).
The latter commit is dated 2026-10-13T07:08:58Z. The live ChatGPT cask now says
26.1007.71326; that later observation is not a correction to the historical
cask claim.

The stable ledger's dates, prerelease flags, npm timestamps to the displayed
second, and every consecutive ahead/behind count reproduce. Counts below are
ahead / behind, reversing the left / right output of
`git rev-list --left-right --count previous...next`.

| Tag | GitHub published UTC | Prerelease | Ahead / behind | CLI npm published UTC |
| --- | --- | --- | --- | --- |
| rust-v0.155.1, baseline | 2026-09-18T20:03:04Z | false | 2 / 1 vs 0.155.0 | 2026-09-18T20:09:23Z |
| rust-v0.156.0 | 2026-09-22T19:51:01Z | false | 526 / 8 | 2026-09-22T19:55:37Z |
| rust-v0.156.1 | 2026-09-23T02:41:36Z | false | 2 / 1 | 2026-09-23T02:45:25Z |
| rust-v0.157.0 | 2026-09-25T02:31:06Z | false | 128 / 2 | 2026-09-25T02:35:19Z |
| rust-v0.157.1 | 2026-09-26T01:02:31Z | false | 5 / 1 | 2026-09-26T01:06:57Z |
| rust-v0.158.0 | 2026-09-28T05:07:23Z | false | 207 / 6 | 2026-09-28T05:12:20Z |
| rust-v0.159.0 | 2026-09-29T08:05:42Z | false | 89 / 17 | 2026-09-29T08:10:59Z |
| rust-v0.159.1 | 2026-09-29T20:32:34Z | false | 3 / 1 | 2026-09-29T20:36:58Z |
| rust-v0.159.2 | 2026-09-29T23:57:16Z | false | 2 / 1 | 2026-09-30T00:03:49Z |
| rust-v0.159.3 | 2026-09-30T22:57:34Z | false | 2 / 1 | 2026-09-30T23:02:02Z |
| rust-v0.160.0 | 2026-10-01T20:19:13Z | false | 56 / 5 | 2026-10-01T20:26:19Z |
| rust-v0.160.1 | 2026-10-05T18:29:37Z | false | 2 / 1 | 2026-10-05T18:33:51Z |
| rust-v0.161.0 | 2026-10-07T15:58:45Z | false | 155 / 4 | 2026-10-07T16:04:02Z |
| rust-v0.162.0 | 2026-10-08T18:55:59Z | false | 227 / 2 | 2026-10-08T19:01:18Z |
| rust-v0.162.1 | 2026-10-09T19:44:51Z | false | 3 / 1 | 2026-10-09T19:50:30Z |

Each tag is independently accessible at
`https://github.com/openai/codex/releases/tag/<tag>`; registry dates come from
the npm time records linked above. The fourteen in-window stable releases and
seven patch releases are correct.

The missing preview rows are:

| Tag and pinned receipt | GitHub published UTC | Prerelease | Ahead / behind 0.162.1 | CLI npm published UTC |
| --- | --- | --- | --- | --- |
| [rust-v0.163.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.8) | 2026-10-13T13:14:41Z | true | 210 / 4 | 2026-10-13T13:47:11.563Z |
| [rust-v0.163.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.9) | 2026-10-13T15:47:20Z | true | 217 / 4 | 2026-10-13T15:58:51.908Z |
| [rust-v0.163.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10) | 2026-10-13T19:04:12Z | true | 228 / 4 | 2026-10-13T19:15:22.778Z |

The SDK published those same versions at 13:48:07.396Z, 15:57:44.615Z, and
19:15:48.396Z respectively. There are **94**, not 91, new alpha release objects
after the parent's September 21 close, or 101 including its seven September 21
objects. Alpha.6 remains tag-only: the release API returns 404. Alpha.11 was
published on 2026-10-14T03:27:29Z and is outside this UTC window. Live npm
`alpha` was .11 during verification. Publication times establish .10 as the
newest published alpha at the cutoff; npm does not expose a historical
dist-tag audit log, so an exact October 13 tag-pointer observation cannot be
recreated from today's pointer alone.

The harvest's pinned main snapshot really is 204 ahead / 4 behind, but it is
from the morning of October 13. The last main commit before the cutoff is
`ca2b076fffbc24ad5fa57258ece8a8277b326138`, committed 2026-10-13T23:59:56Z,
**248 ahead / 4 behind** stable.
[End-of-window comparison](https://github.com/openai/codex/compare/rust-v0.162.1...ca2b076fffbc24ad5fa57258ece8a8277b326138).

## Receipt handling

I opened the numbered sections' release records and PR bodies through GitHub,
read their tagged blob receipts through `git show`, and checked their commit
identities and ancestry locally. Tag/SHA blob URLs are pinned. PR URLs identify
a discussion but do not freeze its mutable body; the commit receipts below and
the ancestry appendix supply the immutable replacements. No numbered source
blob is pinned to main or HEAD. The old comparison ends in a full SHA and is
pinned, although its cutoff is stale.

The live Learn pages, registry roots, release index, and advisory index are
not immutable snapshots. Their retrieval supports an observation made on
2026-10-14, not proof of their exact October 13 wording. The historical
release and cask claims have independent versioned receipts. In particular,
the current changelog contradiction below does not prove when the page gained
its CLI entries. Do not promote an undated documentation observation into an
in-window product change.

## 1. Background app server by default: VERIFIED

The default flip is in [75ec81c8623c0ca50b129de5a82521a23d37b726](https://github.com/openai/codex/commit/75ec81c8623c0ca50b129de5a82521a23d37b726),
first stable 0.157.0, published 2026-09-25. The
[0.162.1 feature definition](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L992-L995),
[startup eligibility](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/startup_orchestration.rs#L509-L514),
and [daemon README](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L11-L28)
support shared startup, environment inheritance, exclusions, and fallback to
an embedded server. This is eligible interactive startup, not every invocation.
The stable `exec/src/lib.rs` has no daemon references.

I also read the server-permission changes #49472/#50140 and model-default
changes #50013/#50913. Their first stable tags match the harvest. The
[analytics launch argument](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/backend/pid.rs#L408-L412)
and [analytics change](https://github.com/openai/codex/commit/2cc65cdd4c7c167f0c7252fcb5165d649c16aca0)
confirm the 0.161.0 opt-out default. The 0.162.1 compatibility hotfix is
`f715d50688d35b998fb90eb30d3bd8f026cc865b`. Runtime behavior was read, not
exercised.

## 2. Daemon updates past a CLI pin: CORRECTED

The mechanism survives scrutiny. I read
[package eligibility and the latest marker](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L245-L338),
[the package-seeding test](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install_tests.rs#L53-L80),
[updater startup conditions](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/lib.rs#L893-L930),
and the npm package-layout test at `install-context/src/lib.rs:740`.
`653e5fbb` first reaches stable 0.156.0; default interactive exposure starts in
0.157.0. Explicit standalone pins and already selected daemon installations
have different behavior from a newly seeded npm/Homebrew package.

**Exact fix:** after setting `updater.autoUpdateEnabled=false`, run
`codex app-server daemon restart`, then inspect the updater pidfile and daemon
version. Merely editing the file is not the documented enabled-state change:
the [README explicitly requires restart](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L48-L68).
Describe five minutes then hourly as the default check schedule, not a
guarantee that every running server updates within an hour. Existing package
selection, support, pin state, configuration, and network success still matter.

The updater's configuration-error fallback exists at
[0.162.1](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/cli/src/main.rs#L2360-L2372).
Its fail-closed network-policy fix
[d570b3632b100e36f931797cdbdb8906d0fcafa8](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8)
is absent from 0.162.1 and present from alpha.1. Do not claim observed
auto-upgrade behavior; no daemon or installer was run.

## 3. Default model and server precedence: CORRECTED

The model and release facts are confirmed: the
[0.159.1 release](https://github.com/openai/codex/releases/tag/rust-v0.159.1)
names GPT-6.1 Sol as default, and its
[0.162.1 catalog entry](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/models.json#L177-L248)
has priority 1, default low effort, and Ultra support. Backports `9fb2f5f4` and
`3b765518` first appear in 0.159.1; the later stable train contains the main-line
equivalent `b1e72963`, first in 0.161.0. Do not require the backport SHA itself
to be an ancestor of 0.162.1. The server-default and picker changes are first
in 0.162.0 as claimed.

**Exact fix:** replace "the binary will not warn" and "the binary will keep
offering it" with "the bundled 0.162.1 GPT-5.5 entry has no retirement timestamp;
server or cached catalog metadata can differ." The
[entry](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/models.json#L1397-L1406)
cannot establish all effective catalog behavior. The
[manager](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/src/manager.rs#L285-L287)
explicitly combines bundled, cached, and remote metadata. The live
[retirement notice](https://learn.chatgpt.com/docs/changelog)
still specifies 2026-10-14 for ChatGPT sign-in surfaces and excludes the API;
its historical wording is not pinned.

## 4. Stable sandbox and network fixes: VERIFIED

The claimed first stable tags reproduce: #44639/#45984/#46500 in 0.156.0;
#47389/#47407 in 0.157.0; #48155/#48176 in 0.159.0; #51211/#51407 in 0.162.0.
I read the PR mechanisms, immutable commit messages, and the Linux ripgrep
lookup diff. In particular,
[49305d74](https://github.com/openai/codex/commit/49305d74b4c0048ee44702e3dd058e08ad3b4a51)
isolates privileged sockets and requires bubblewrap for restricted Linux
execution;
[04e4d2b4](https://github.com/openai/codex/commit/04e4d2b40ffdeb7768319bec80bad6b2951c92e4)
denies macOS fcntls that can mutate files through read-only descriptors;
[7aa8f510](https://github.com/openai/codex/commit/7aa8f510496316b86a91a75ed0a71598ef03c640)
rejects sandbox-writable bubblewrap candidates; and
[ccde2fc8](https://github.com/openai/codex/commit/ccde2fc8b7fd08216757d3d3f67362847ab8341b)
protects pre-confinement ripgrep lookup.

No matching new public advisory was found in the repository list, the global
package advisory query, or the NVD search described below. That is a scoped
search result, not proof that no advisory can ever exist. The section's
mechanisms are supported, but its coverage is incomplete: see M1 through M6.

## 5. Terminal-input approval: VERIFIED

[c098f97e](https://github.com/openai/codex/commit/c098f97e5305394c7f30a876c1393cf34a3eedca)
first reaches 0.158.0, published 2026-09-28. The
[stable default](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1291-L1294)
and [decision path](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/unified_exec/stdin_approval.rs#L190-L251)
confirm retained launch permissions, current policy, and review of meaningful
input to escalated terminals. Empty polls and non-TTY Ctrl-C are exceptions;
the feature is not a review of every stdin call. Runtime-only grants are
excluded as claimed.

[804d6306](https://github.com/openai/codex/commit/804d6306e84f570393cdd1eec94c41464f503b1a)
and [1f52d407](https://github.com/openai/codex/commit/1f52d407041d933e490ca3033729bce6319d07fa)
first reach 0.161.0, preserving denied reads and network restrictions during
approved widening and binding grants to their originating turn.

## 6. Projectless defaults and explicit distrust: VERIFIED

[0d7b8117](https://github.com/openai/codex/commit/0d7b8117d3cc6d9ffe21d22375d70307133e9f16)
first reaches 0.160.0, published 2026-10-01. I read the complete
[projectless eligibility and default-selection function](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/projectless.rs#L15-L98),
not just its granular-policy initializer. Saved choices, configured permissions,
managed constraints, remote execution, and Windows sandbox setup qualify the
default as the harvest describes.

The correction to the old profile is right:
[AGENTS.md loading](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agents_md.rs#L63-L66)
calls [is_untrusted](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/config_toml.rs#L614-L616),
which requires an explicit Untrusted value. Missing trust is not that value.
The [project config/hook/policy gate](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/loader/mod.rs#L1098-L1109)
is separate. Unattended workflows do not need to trust a checkout merely to
read its AGENTS.md.

## 7. Guardian controls and Decisions comparison: CORRECTED

Guardian V2 is false at all fourteen stable tags and at alpha.10; the older
approval reviewer is true. I read the
[stable flags](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1763-L1814),
[Full Access short circuit](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-reviewer/src/routing.rs#L85-L91),
[comparison credential resolver](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L55-L66),
endpoint, usage labels, policy changes, and
[OTLP assessment change](https://github.com/openai/codex/commit/30758e5c77c14e6ddcc53a6c7407a477fed4ac76).
The listed stable ancestry is correct.

**Exact fixes:**

- #53389 is `preview-or-beta` by window close, first in alpha.8, not main-only.
  [27e6192e84fa8a2969d9d56c2fbe05754205958b](https://github.com/openai/codex/commit/27e6192e84fa8a2969d9d56c2fbe05754205958b).
  Alpha.8 also includes
  [90f00bd89ed3263b4d5993849cccb795f4330449](https://github.com/openai/codex/commit/90f00bd89ed3263b4d5993849cccb795f4330449),
  which adds an environment fallback after cached login credentials. The
  [alpha.10 resolver](https://github.com/openai/codex/blob/rust-v0.163.0-alpha.10/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L57-L76)
  is the appropriate end-of-window preview receipt.
- Replace the asserted billing consequence with: "The opt-in comparison sends
  transcript-bearing classifier requests to a separate endpoint using the
  selected API credential; verify its billing ownership before enabling it."
  Code proves routing and credential use, not an invoice or price. `/usage`
  source labels prove attribution, not the monetary cost of auto-review.
- Call the OTLP feature a new synchronous-review audit export, not the first
  audit trail of any kind or a log of every Guardian decision. Its receipt
  explicitly excludes cached V2 approvals and distinguishes errors and
  cancellations from completed allow/deny assessments.
- The final lens paragraph must name Guardian V2 specifically. Saying the model
  reviewer remains off without that qualification obscures the older reviewer,
  which is on by default.

## 8. Voice, worktrees, discovery, and instant interrupts: VERIFIED

The feature changes reproduce at the stated tags: voice and worktrees in
0.156.0, API-key model discovery and in-app voice in 0.161.0, and instant
interrupts in 0.162.0. I read
[a028250541f18b4f3040744be1325214ed5cc832](https://github.com/openai/codex/commit/a028250541f18b4f3040744be1325214ed5cc832)
and the [stable feature value](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1159-L1162).
This is a release-branch cherry-pick; the main-line SHA does not itself belong
to stable 0.162.1. The stable release body omits this default flip.

The [worktree-tool change](https://github.com/openai/codex/commit/e7ea5f4a8658ebe49e879be933effed2340fa276)
requires eligible local projects and attachment storage and leaves the task's
working directory unchanged. The [in-app voice gate](https://github.com/openai/codex/commit/6996cde697b228fbf5695ce855b2498c5c668795)
does not prove desktop voice availability. Preserve the distinction between
`instant_interrupt`, which can yield foreground observations, and
[code_mode_interrupt](https://github.com/openai/codex/commit/72c959528ee4ca74abdb8575fbbc4e36960a8c47),
whose default-on cancellation of cells and nested calls is alpha-only.

## 9. Daybreak CLI gate: CORRECTED

The stable claim is right: the gate is off at 0.161.0 and 0.162.1; the 0.161.0
backport and main-line 0.162.0 change reproduce. Explicit exec overrides survive
the disabled automatic-routing gate.
[Stable gate implementation](https://github.com/openai/codex/commit/5ad689169645a953ec7380762c4ae596712057ee),
[stable turn selection](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/daybreak.rs#L8-L33).
I fetched the live [auto-review](https://learn.chatgpt.com/docs/sandboxing/auto-review)
and [cyber-safety](https://learn.chatgpt.com/docs/cyber-safety) pages. They support
the desktop-only, policy-qualified permission-switch description as current
documentation; no dated desktop implementation receipt was found.

**Exact fix:** qualify the heading and "nothing changes" conclusion as applying
to stable 0.162.1. On 2026-10-13, alpha.10 shipped both the
[CLI Daybreak default flip](https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7)
and [API-key cyber-program default flip](https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be).
Both are absent from 0.162.1 and present in alpha.10 by merge-base checks.
Feature maturity marked Stable inside an alpha does not make that alpha a
stable release or grant an account Daybreak eligibility.

## 10. Remote execution authentication: VERIFIED

[2210190435febb8fad3e517ce82bd18b8fecf8f3](https://github.com/openai/codex/commit/2210190435febb8fad3e517ce82bd18b8fecf8f3)
and `ad26b252` first reach 0.158.0, published 2026-09-28. I read the
[exec-server compatibility policy and listen default](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/exec-server/src/server/transport.rs#L1-L40)
and [app-server non-loopback refusal](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-transport/src/transport/websocket.rs#L135-L142).
Authentication is opt-in for the former; the latter refuses an unauthenticated
non-loopback listener.

The current [app-server page](https://learn.chatgpt.com/docs/app-server)
still contradicts that refusal and describes experimental `process/spawn`
outside the command sandbox. This discrepancy was independently reproduced on
2026-10-14. Its exact October 13 page state is not independently archived.
Retain the distinction between the two server commands.

## 11. Removed scaffolding and APIs: CORRECTED

The removals and first stable tags are supported by the PR bodies and commit
history: personality and rollback in 0.156.0; GPT-5.6 Sol Ultrafast in 0.157.0;
GPT-5.4 in 0.158.0; suggestions and plugin-creator in 0.159.0; greetings in
0.161.0; partial forks, picker labels, and the CRLF toggle in 0.162.0. Patched
zsh removal remains alpha-only. The
[Personality feature](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1889-L1892)
is Removed.

**Exact fixes:** `thread/revert` is the alternative **for paginated threads**;
do not imply an unrestricted drop-in replacement for rollback. The
[removal commit](https://github.com/openai/codex/commit/3052bbcf8c9d48e130599308c583784db43e57aa)
retains legacy history markers for replay. For partial forks, state that legacy
positive integer strings now inherit **all** history, while invalid and zero
values are rejected. The [fork change](https://github.com/openai/codex/commit/6221a217e2b24701ecbf05a239e4ca899ae3a359)
also directs model overrides to `fork_turns: "none"`. Clients using short-history
forks can now pass much more context; merely saying the feature was removed
misses the compatibility consequence.

## 12. Release cadence, SDKs, and changelog: CORRECTED

Fourteen stables, seven minors, seven patches, and the anti-rollback release
pipeline changes are confirmed.
[Stable pointer protection](https://github.com/openai/codex/commit/5cbcf810e5f4e77a34989075f99721d1028ce492),
[alpha pointer protection](https://github.com/openai/codex/commit/5602705c9622593785441bd6a79237bd24ee3418).
PyPI has all fourteen matching SDK versions. The newest Python-specific GitHub
release remains [python-v0.154.0](https://github.com/openai/codex/releases/tag/python-v0.154.0),
published 2026-09-10T19:51:43Z.

**Exact fixes:**

- Replace 91 new alpha objects with 94 and append the three October 13 rows.
- Remove the claim that the official changelog carries none of these CLI
  releases. Independent HTML text extraction and the web reader both show all
  fourteen headings, install commands, and release details on the
  [changelog](https://learn.chatgpt.com/docs/changelog). Matching raw HTML strings
  is not equivalent to extracting its text. The claim about its historical
  October 13 state has no immutable capture and is not publishable as fact.
- Replace the PyPI delay range "4 to 10 minutes" with "approximately 3.4 to
  12.3 minutes," using the earliest artifact upload for each version. The
  endpoints are 0.159.1: 20:36:58.049Z npm to 20:40:23.844278Z PyPI on
  2026-09-29; and 0.160.1: 18:33:51.980Z npm to 18:46:10.683603Z PyPI on
  2026-10-05. [PyPI 0.159.1](https://pypi.org/pypi/openai-codex/0.159.1/json),
  [PyPI 0.160.1](https://pypi.org/pypi/openai-codex/0.160.1/json),
  [npm time records](https://registry.npmjs.org/@openai%2fcodex).
- Name the three patches' model-selection or daemon-compatibility changes
  directly. "Three behavior-changing patches" is not a rigorous partition:
  0.159.3 also introduces visible account-security reminders.

## 13. Desktop CVE item: REFUTED as a publishable security finding

The narrow vendor statement is confirmed: the live changelog dates its macOS
26.924 security note 2026-09-25 and names version 26.924.20706 and
CVE-2026-100754. The historical cask version is confirmed above.
[Vendor changelog](https://learn.chatgpt.com/docs/changelog).

The decisive missing fact remains missing. The
[CVE Services endpoint](https://cveawg.mitre.org/api/cve/CVE-2026-100754)
returned HTTP 404 with `CVE_RECORD_DNE`; the
[NVD query](https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2026-100754)
returned `totalResults: 0`. Neither receipt explains what the bug allows, its
attack prerequisites, or affected versions. The harvest correctly refuses to
promote secondary exploit descriptions, but its numbered finding still fails
the brief's plain-language-impact requirement.

**Exact fix:** retain only a docs-only vendor update notice in the research
record, explicitly with impact unverified. Hold security-signal promotion until
a vendor advisory, CNA/NVD record, or original researcher disclosure supplies
the mechanism. Do not convert absence of a public record into a claim that the
CVE or fix is fictitious, and do not borrow an exploit story from secondary
coverage.

## 14. Preview isolation work: CORRECTED

The alpha.1, alpha.2, and alpha.5 placements of the valid listed SHAs reproduce,
and none is an ancestor of stable 0.162.1. I read the credential-masking,
DNS-authorization, integrity-check, and updater PRs and their commit records.
[Credential masking](https://github.com/openai/codex/commit/bd274564e1b1b3febb3886d274e6d97c2a3d275e)
requires an already enabled proxy and remains default-off. The
[DNS fix](https://github.com/openai/codex/commit/37eaae6eeb71c3bd3d165f52515086db8f5e7dee)
prevents disclosure through resolution of unapproved names and removes the
managed macOS direct external-DNS allowance.

**Exact fixes:**

- #53389 and #53506 are in alpha.8, released 2026-10-13, not main-only.
  [Cached credentials](https://github.com/openai/codex/commit/27e6192e84fa8a2969d9d56c2fbe05754205958b),
  [duplicate Host rejection](https://github.com/openai/codex/commit/12cca49c81c8aa6a37a5cc4e39964ee3b70f9458).
- #52689's SHA is `10da569252004863c8256eb6bdabee3a8fc73042`, not
  `10da5699`. The written prefix does not resolve. The
  [correct commit](https://github.com/openai/codex/commit/10da569252004863c8256eb6bdabee3a8fc73042)
  is an ancestor of alpha.5 and not 0.162.1.
- Explicitly state that [sandbox integrity checks](https://github.com/openai/codex/commit/cba716c0f1caa4f2528dedbb1075b50126709d7e)
  are observational: preparation failures and timeouts do not stop execution.
  They must not be presented as an additional enforced containment boundary.
- Extend the preview account through alpha.10 and distinguish the genuine
  end-of-window main-only classifier change in M14 from fixes that have already
  shipped to preview.

## Prior claims re-checked at stable 0.162.1

- **Guardian defaults and Full Access: holds.** The flag values and early
  validation-only approval path were read directly, as linked in section 7.
  Full Access does not mean every host-side validation disappears.
- **User approval mode: holds for background scoring.** Independently checked
  [observation.rs:189-196](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/observation.rs#L189-L196).
  Synchronous routing has a `require_guardian` exception, visible in
  [approval.rs:57-67](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/approval.rs#L57-L67).
  Do not expand "background scoring is skipped" into "all required model review
  is impossible in User mode."
- **Trust and startup helpers: holds with the harvest's correction.** I read
  the explicit-Untrusted gate and
  [protected helper lookup](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/utils/path-utils/src/system_commands.rs#L1-L16).
  The profile's old claim that CI must grant trust to retain AGENTS.md is wrong.
- **Goal, token-budget, and planning defaults: holds with qualifications.**
  [Goals are on; token_budget is off](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1823-L1832),
  [budget resolution returns None while disabled](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/config/mod.rs#L2861-L2867),
  and [update_plan needs an explicit enable](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/config/mod.rs#L2730-L2736).
  I also read the goal objective-length handling and metrics helper cited by
  the harvest; those individual functions do not establish every persistence
  or accounting behavior in the old composite claim.
- **Deprecated delegation authority mode: corrected verdict holds.** The
  [thread field](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/v2/thread.rs#L110-L113),
  turn field, and request processor discard the legacy mode. Its existence in
  a schema is not enforcement of the old authority control.
- **MCP server removal and Linux packaging: holds.** No CLI `mcp-server`
  subcommand or crate exists at the tag. The
  [package manifest](https://github.com/openai/codex/blob/rust-v0.162.1/scripts/codex_package/layout.py#L148-L150)
  still requires bundled bubblewrap on Linux.
- **ExternalMessage: holds at the type contract.** The
  [Python SDK definition](https://github.com/openai/codex/blob/rust-v0.162.1/sdk/python/src/openai_codex/_inputs.py#L48-L54)
  expressly assigns tool-level authority and no user authorization.
- **Permission inheritance, profile selection, visibility, hooks, and MCP
  metadata: structural receipts confirmed.** I read
  [profile merge semantics](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/permissions_toml.rs#L33-L40),
  `shared_options.rs:35-49`, `status_line_setup.rs:94-99`,
  `hooks/src/events/pre_tool_use.rs:44`, and
  `codex-mcp/src/resource_origin.rs:300-306`. The declarations establish the
  named surfaces, not end-to-end runtime acceptance.
- **Plugin-share access controls and role-aware sharing: REFUTED as fully
  reverified.** The harvest's
  [common.rs:942-950 receipt](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/common.rs#L942-L950)
  defines API method names and serialization. It does not prove authorization
  checks or role semantics. Replace "holds" with "API surface present;
  authorization/role behavior not reverified" unless the owner and enforcement
  path are inspected.
- **Skills watcher and MCP result interception: narrow the asserted check.**
  A `mod skills_watcher` declaration and an exported `McpToolResultInput` type
  prove presence, not the full watcher or replacement behavior. The harvest
  already admits hot reload was not reread. Do not upgrade these structural
  checks to a fresh runtime verification.
- **Closed desktop/mobile/plugin claims and memory-MCP spawn: not established.**
  The harvest's explicit "could not verify" entries must not return to active
  current-profile assertions without new evidence.

## Material misses

Each stable placement below was independently checked with `git tag --contains`
and `git merge-base --is-ancestor`. The event date is the first stable release
date, unless the item explicitly names a preview or main-only merge.

| ID | Date and channel | Missing change, consequence, and pinned evidence |
| --- | --- | --- |
| M1 | 2026-10-08, tagged-release 0.162.0 | User ripgrep configuration could suppress the file list used for Linux deny-glob masks, leaving forbidden files accessible. `--no-config` closes that separate hole; replacing writable executables alone is insufficient. Re-test deny globs with RIPGREP_CONFIG_PATH set. [ac9b5b8380517ded445b09dd3196d8d9e2ba3c59](https://github.com/openai/codex/commit/ac9b5b8380517ded445b09dd3196d8d9e2ba3c59). |
| M2 | 2026-09-28, tagged-release 0.158.0 | A .git pointer could lead into another writable root and lose Git metadata protections through mount/grant ordering. Linux/macOS now preserve the resolved gitdir exclusion, including aliases. Re-audit linked worktrees with multiple writable roots. [a92ccbde5328697894d09935a656f7c5f07a7d3f](https://github.com/openai/codex/commit/a92ccbde5328697894d09935a656f7c5f07a7d3f). |
| M3 | 2026-09-22, tagged-release 0.156.0 | macOS managed configuration now accepts only forced preferences. Ordinary user defaults could previously supply a supposedly administrator-owned configuration or override lower requirements layers. Inspect MDM delivery rather than trusting a value merely because CFPreferences returns it. [73bf1812722f9b6fdbfac4997b2d96d7b64ff7c3](https://github.com/openai/codex/commit/73bf1812722f9b6fdbfac4997b2d96d7b64ff7c3). |
| M4 | 2026-09-22, tagged-release 0.156.0; Guardian V2 remains opt-in | An unscored exec_command requesting additional permissions could reuse an older Guardian V2 approval that did not cover the wider access. The change invalidates that score. Relevant to V2 users, not evidence that V2 became default-on. [663eb5fbdda690ca4471d92b3f9a29db43c5ba22](https://github.com/openai/codex/commit/663eb5fbdda690ca4471d92b3f9a29db43c5ba22). |
| M5 | 2026-09-25, tagged-release 0.157.0 | Unix local MCP servers and descendants stop inheriting unrelated parent file descriptors; Windows is explicitly not covered by this change. OAuth authorization endpoints are restricted to HTTP(S) before registration or URL return. Recheck integrations that relied on inherited descriptors or custom URI schemes. [Descriptor isolation](https://github.com/openai/codex/commit/afe4249cfe6bdf218ce8807a670fad122d2b60ed), [OAuth schemes](https://github.com/openai/codex/commit/2c2a42e65de077c5518ea5b4c3999633ef6a12fc). |
| M6 | 2026-10-07, tagged-release 0.161.0 | Skill and extension filesystem reads now use the callback's environment and permission grants. Cached skill pages are bound to both filesystem identity and permissions. Exercise grant changes, environment switching, and pagination in custom extensions. [da2e174a66a6572204a91373321b7d22d87fb12e](https://github.com/openai/codex/commit/da2e174a66a6572204a91373321b7d22d87fb12e). |
| M7 | 2026-10-08, tagged-release 0.162.0; flag off | Fresh V2 subagents can inherit client-defined dynamic tools when `multi_agent_v2_dynamic_tools` is enabled. This removes a delegation limitation for children started without parent history; it is not default behavior. [e4e33a56b073b5d9a550aaf513798480f88e4a38](https://github.com/openai/codex/commit/e4e33a56b073b5d9a550aaf513798480f88e4a38). |
| M8 | 2026-10-08, tagged-release 0.162.0 | Code Mode gains opt-in BM25-ranked `tools.tool_search` with nested-tool policy filtering and model support required. `code_mode_tool_search` defaults false. New `as_settled` and `stream_settled` helpers expose concurrent results as they finish. These reduce catalog and orchestration scaffolding without granting additional tool authority. [Ranked discovery](https://github.com/openai/codex/commit/4d15794336668d6098c0e36eb8e96cbbbfdb1d2d), [settlement helpers](https://github.com/openai/codex/commit/28a264fbc766a59f2b550b8318f88e4a4b8dffe1). |
| M9 | 2026-10-08, tagged-release 0.162.0 | Custom Responses-compatible providers can declare live-web access and remote-compaction capabilities. `external_web_access=false` restricts hosted search, while remote_compaction selects v2 or local fallback. Adapter authors can express real backend support without pretending to be the default provider. [c6049ebd9694c941386d85fb3e09acab2af289cb](https://github.com/openai/codex/commit/c6049ebd9694c941386d85fb3e09acab2af289cb). |
| M10 | 2026-09-25, tagged-release 0.157.0 | Fullscreen transcripts become default-on even without a [tui] section. Alternate-screen restrictions still win; `tui.fullscreen_transcript=false` restores terminal scrollback. This is an omitted visible default flip. [5106a5234ff10f49f2403e84b1f668ac2b4a61b5](https://github.com/openai/codex/commit/5106a5234ff10f49f2403e84b1f668ac2b4a61b5). |
| M11 | 2026-10-07, tagged-release 0.161.0 | Explicit user goal edits and clears are persisted as user instructions before state changes; automatic or omitted origins do not grant user authorization. Edits survive unloaded threads and concurrent compaction. Embedders should set the origin deliberately and preserve failure handling. [de020167989fde4937204a064ea2fedd54f3c931](https://github.com/openai/codex/commit/de020167989fde4937204a064ea2fedd54f3c931). |
| M12 | 2026-09-28 / 2026-10-07, tagged-release 0.158.0 / 0.161.0 | MCP OAuth gains pre-registered client secrets, including token refresh, and later `/mcp login <name>` from an active TUI session. Secrets persist in server configuration but are excluded from debug output, authorization URLs, and OAuth token records. Operators can connect confidential clients and repair login without leaving the session. [Client-secret support](https://github.com/openai/codex/commit/83b56bc5ad9489a47a0eb3edc3e5852f597125be), [in-session login](https://github.com/openai/codex/commit/4773a132c3512cc9dcfff1e03bcf57bbbd490cf8). |
| M13 | 2026-10-13, preview-or-beta alpha.10 | CLI Daybreak and API-key cyber-program controls become default-on, still requiring eligible account/provider/model support. Keep this separate from stable 0.162.1 and from granting Daybreak access. [CLI gate](https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7), [API-key gate](https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be). |
| M14 | 2026-10-13, main-unreleased at cutoff | Guardian V2's fallback async-classifier mode changes from snapshot to conversation. Explicit local/model modes still win and V2 itself remains off. The commit is absent from alpha.10 and present in cutoff main. It first reaches alpha.11 on October 14, outside this window. [4d82d36ccf0746b75437d78b874ba4c96ff2cc75](https://github.com/openai/codex/commit/4d82d36ccf0746b75437d78b874ba4c96ff2cc75). |

M3 and M4 merged before September 21 but first reached stable in the refresh
window. They are channel changes, not wrongly dated merge events. The parent
harvest's after-close notes were checked: they already named voice, worktrees,
usage, and several 0.156.0 sandbox fixes; those are not counted as new misses
here. The source-contract sweep also covered removals, installation, licensing,
permissions, hooks, memory, goals, MCP, plugins, SDKs, usage, and non-interactive
execution. No separate in-window license replacement was found.

## Advisory and editorial rule checks

The repository advisory endpoint returned only
[GHSA-w5fx-fh39-j5rw / CVE-2025-59532](https://github.com/openai/codex/security/advisories/GHSA-w5fx-fh39-j5rw),
published in 2025. That bug let model-chosen working directories widen the
sandbox writable root, allowing writes and command execution outside the
intended workspace. The fix is CLI 0.39.0 and IDE extension 0.4.12, not a new
2026-10 release.

The global npm-package query additionally returned
[GHSA-xrxf-jgv3-qmrm / CVE-2025-61260](https://github.com/advisories/GHSA-xrxf-jgv3-qmrm),
published 2026-04-14: automatically loading hostile project MCP configuration
could execute attacker commands at startup in CLI 0.23.0 and earlier. That is
also outside this window.

The [NVD OpenAI Codex search](https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=OpenAI%20Codex&resultsPerPage=100)
returned eight records. None was newly published in this window. They cover
older command-approval, sandbox, Markdown-image disclosure, and Git-metadata
execution problems. An October 11 last-modified date on CVE-2025-59532 does not
make its 2025 disclosure a new 2026 event. The dedicated desktop CVE lookup
remains unresolved as described in section 13.

Marketing is separated from code and channel evidence. No social post is used
as proof of a product fact or quoted here. The harvest's social and roundup
entries remain leads. Code definitions, inherited type names, and catalog
descriptions must not be turned into measured capability, runtime acceptance,
or billing claims.

The source code and docs were treated as untrusted data. No upstream install,
build, daemon, or test was run. No site build, npm install, or repository Git
write command was used. Only this crosscheck was authored outside the explicitly
authorized scratch clone. The harvest was not edited.

## Ancestry appendix

The following checks resolve the commit prefixes appearing in the numbered
harvest sections. `stable1621` is the exit code from
`git merge-base --is-ancestor SHA rust-v0.162.1`: 0 means contained, 1 means
not contained. First stable is derived from containing stable tags and checked
again with merge-base. The preview column is restricted to published previews
available by the UTC cutoff. A release-branch backport can correctly be absent
from a later stable while its main-line equivalent is present.

| Harvest section | Commit receipt | Commit date UTC | First stable | First 0.163 preview by cutoff | stable1621 |
| --- | --- | --- | --- | --- | --- |
| 1 | [75ec81c8](https://github.com/openai/codex/commit/75ec81c8623c0ca50b129de5a82521a23d37b726) | 2026-09-22 | rust-v0.157.0 | rust-v0.163.0-alpha.1 | 0 |
| 1, 4 | [49305d74](https://github.com/openai/codex/commit/49305d74b4c0048ee44702e3dd058e08ad3b4a51) | 2026-09-16 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 1 | [2cc65cdd](https://github.com/openai/codex/commit/2cc65cdd4c7c167f0c7252fcb5165d649c16aca0) | 2026-09-30 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 1 | [b588812e](https://github.com/openai/codex/commit/b588812e8cc82f88a3141ab6bcdf654cbb18361d) | 2026-09-30 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 1 | [b527ce47](https://github.com/openai/codex/commit/b527ce47348e7937730d06bc3504f17a8ac723f2) | 2026-10-01 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 1 | [c2f7fe89](https://github.com/openai/codex/commit/c2f7fe89d87ce853900d0b5cb1f5dc4863e44d73) | 2026-10-04 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 1 | [cb6da588](https://github.com/openai/codex/commit/cb6da58876afed3ede0ab11084f67dd5394ecb48) | 2026-10-02 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 1 | [f715d506](https://github.com/openai/codex/commit/f715d50688d35b998fb90eb30d3bd8f026cc865b) | 2026-10-09 | rust-v0.162.1 | none | 0 |
| 2 | [653e5fbb](https://github.com/openai/codex/commit/653e5fbb9d648a8b99cda14dc164290d6bf34007) | 2026-09-15 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 2, 14 | [d570b363](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8) | 2026-10-08 | none | rust-v0.163.0-alpha.1 | 1 |
| 3 | [9fb2f5f4](https://github.com/openai/codex/commit/9fb2f5f4b2209b421d5be118f7acd900b1f02728) | 2026-09-29 | rust-v0.159.1 | none | 1 |
| 3 | [3b765518](https://github.com/openai/codex/commit/3b765518aea81f4f2b91b85b6f9c826e93e20a1d) | 2026-09-29 | rust-v0.159.1 | none | 1 |
| 3 | [b1e72963](https://github.com/openai/codex/commit/b1e72963c3b71a9265a551e54beff078384efed9) | 2026-09-29 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 3, 11 | [2f412e60](https://github.com/openai/codex/commit/2f412e60d735b47caeec6b0e79070f673a191c4f) | 2026-10-06 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 3 | [1aaa453c](https://github.com/openai/codex/commit/1aaa453ce2868e14c10089c226ebec265657cb27) | 2026-09-10 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 4 | [e25bedc1](https://github.com/openai/codex/commit/e25bedc166b54acadb505b587a387091097b2393) | 2026-09-10 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 4 | [04e4d2b4](https://github.com/openai/codex/commit/04e4d2b40ffdeb7768319bec80bad6b2951c92e4) | 2026-09-18 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 4 | [888e02db](https://github.com/openai/codex/commit/888e02db34bc6fe226e2131448413c051491f5b8) | 2026-09-22 | rust-v0.157.0 | rust-v0.163.0-alpha.1 | 0 |
| 4 | [22a3f6d5](https://github.com/openai/codex/commit/22a3f6d5d89c026c6b4f606ae5604f9e00059b23) | 2026-09-23 | rust-v0.157.0 | rust-v0.163.0-alpha.1 | 0 |
| 4 | [645b683a](https://github.com/openai/codex/commit/645b683a9e712ae6d90a364e3cf597466e4146d0) | 2026-09-25 | rust-v0.159.0 | rust-v0.163.0-alpha.1 | 0 |
| 4 | [1d804e91](https://github.com/openai/codex/commit/1d804e91b75454927fb4f51615b067ba6158c37c) | 2026-09-25 | rust-v0.159.0 | rust-v0.163.0-alpha.1 | 0 |
| 4 | [7aa8f510](https://github.com/openai/codex/commit/7aa8f510496316b86a91a75ed0a71598ef03c640) | 2026-10-06 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 4 | [ccde2fc8](https://github.com/openai/codex/commit/ccde2fc8b7fd08216757d3d3f67362847ab8341b) | 2026-10-06 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 5 | [c098f97e](https://github.com/openai/codex/commit/c098f97e5305394c7f30a876c1393cf34a3eedca) | 2026-09-24 | rust-v0.158.0 | rust-v0.163.0-alpha.1 | 0 |
| 5 | [60713126](https://github.com/openai/codex/commit/60713126ee0dbc483fba83fc032dfaa5998521ec) | 2026-09-25 | rust-v0.158.0 | rust-v0.163.0-alpha.1 | 0 |
| 5 | [804d6306](https://github.com/openai/codex/commit/804d6306e84f570393cdd1eec94c41464f503b1a) | 2026-09-29 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 5 | [1f52d407](https://github.com/openai/codex/commit/1f52d407041d933e490ca3033729bce6319d07fa) | 2026-10-01 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 6 | [0d7b8117](https://github.com/openai/codex/commit/0d7b8117d3cc6d9ffe21d22375d70307133e9f16) | 2026-09-29 | rust-v0.160.0 | rust-v0.163.0-alpha.1 | 0 |
| 6 | [bd194593](https://github.com/openai/codex/commit/bd19459358f534ed1cae464ec13d56600aeb45f2) | 2026-08-21 | rust-v0.150.0 | rust-v0.163.0-alpha.1 | 0 |
| 7 | [9167a0b2](https://github.com/openai/codex/commit/9167a0b2d4a74d44a4d388057d304682e47313c6) | 2026-10-13 | none | rust-v0.163.0-alpha.8 | 1 |
| 7 | [520e13a4](https://github.com/openai/codex/commit/520e13a4bccfad50edf652d8243b4f1e9e67d6ff) | 2026-09-14 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 7 | [ca53e19c](https://github.com/openai/codex/commit/ca53e19c757a5b0b4b1fa4627f0780c76062be63) | 2026-09-15 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 7 | [26cb4d73](https://github.com/openai/codex/commit/26cb4d73e2ce25575644038d7af5beb2440d0ed0) | 2026-09-21 | rust-v0.157.0 | rust-v0.163.0-alpha.1 | 0 |
| 7 | [30758e5c](https://github.com/openai/codex/commit/30758e5c77c14e6ddcc53a6c7407a477fed4ac76) | 2026-09-24 | rust-v0.158.0 | rust-v0.163.0-alpha.1 | 0 |
| 7 | [851d9e95](https://github.com/openai/codex/commit/851d9e95f153c0f2fc4122adcaf68c5cd2df9464) | 2026-09-23 | rust-v0.158.0 | rust-v0.163.0-alpha.1 | 0 |
| 7 | [e9b4c696](https://github.com/openai/codex/commit/e9b4c6967ee308ed1d1880ec36e3fda183c1a9ac) | 2026-09-23 | rust-v0.158.0 | rust-v0.163.0-alpha.1 | 0 |
| 7 | [59f18e81](https://github.com/openai/codex/commit/59f18e8133f2c1d3427677658752ac46697d41b7) | 2026-10-01 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 7 | [4c9f42f4](https://github.com/openai/codex/commit/4c9f42f4f849e513e5fd99fe1c1a717ce93fadbf) | 2026-10-05 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 7 | [9552906b](https://github.com/openai/codex/commit/9552906b2b8358121f71695e1e6602791cdcecc0) | 2026-10-01 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 7, 14 | [27e6192e](https://github.com/openai/codex/commit/27e6192e84fa8a2969d9d56c2fbe05754205958b) | 2026-10-12 | none | rust-v0.163.0-alpha.8 | 1 |
| 8 | [3f59eb96](https://github.com/openai/codex/commit/3f59eb965a8bed447065dfcc1b5047f987a647bc) | 2026-09-11 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 8 | [68bc5369](https://github.com/openai/codex/commit/68bc5369ba0e694909b61603554d6622009b0cab) | 2026-09-11 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 8 | [7d4c7a07](https://github.com/openai/codex/commit/7d4c7a0767cdf81ff76c8fa5a05c22929568e3c6) | 2026-10-01 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 8 | [6996cde6](https://github.com/openai/codex/commit/6996cde697b228fbf5695ce855b2498c5c668795) | 2026-09-30 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 8 | [a0282505](https://github.com/openai/codex/commit/a028250541f18b4f3040744be1325214ed5cc832) | 2026-10-08 | rust-v0.162.0 | none | 0 |
| 8 | [406b0c44](https://github.com/openai/codex/commit/406b0c44460cf71e90c21c7abe6e581add3a6421) | 2026-10-07 | none | rust-v0.163.0-alpha.1 | 1 |
| 8 | [e7ea5f4a](https://github.com/openai/codex/commit/e7ea5f4a8658ebe49e879be933effed2340fa276) | 2026-10-02 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 9 | [c41a72cd](https://github.com/openai/codex/commit/c41a72cd3f5886a6b367e93e28c4ef0662a54500) | 2026-10-01 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 9 | [e1522188](https://github.com/openai/codex/commit/e1522188e908c9fad0acb3edbff8834f06ed5837) | 2026-10-01 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 9 | [6b4daafd](https://github.com/openai/codex/commit/6b4daafdb445340e5af66f067ad4057e6ed9fd81) | 2026-10-01 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 9 | [d7b674e2](https://github.com/openai/codex/commit/d7b674e24fef6df28fc7adb2a81555cf14651e6c) | 2026-10-06 | rust-v0.161.0 | none | 1 |
| 9 | [5ad68916](https://github.com/openai/codex/commit/5ad689169645a953ec7380762c4ae596712057ee) | 2026-10-06 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 9 | [66561d03](https://github.com/openai/codex/commit/66561d03012edb96e4ea87513cb10dea4c909986) | 2026-10-02 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 10 | [22101904](https://github.com/openai/codex/commit/2210190435febb8fad3e517ce82bd18b8fecf8f3) | 2026-09-23 | rust-v0.158.0 | rust-v0.163.0-alpha.1 | 0 |
| 10 | [ad26b252](https://github.com/openai/codex/commit/ad26b2520ab9e26c9c6d17ef51aa6ec3705674aa) | 2026-09-23 | rust-v0.158.0 | rust-v0.163.0-alpha.1 | 0 |
| 11 | [12e82f44](https://github.com/openai/codex/commit/12e82f44f84cac8c07fbb7589eb3985d4a11c4b2) | 2026-09-11 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 11 | [3052bbcf](https://github.com/openai/codex/commit/3052bbcf8c9d48e130599308c583784db43e57aa) | 2026-09-11 | rust-v0.156.0 | rust-v0.163.0-alpha.1 | 0 |
| 11 | [cf6754e6](https://github.com/openai/codex/commit/cf6754e6828db447c288d72ca188d3dbc46feb56) | 2026-09-21 | rust-v0.157.0 | rust-v0.163.0-alpha.1 | 0 |
| 11 | [694d8d45](https://github.com/openai/codex/commit/694d8d45bd3d440fa4f4cbf22667ac6c17a13758) | 2026-09-24 | rust-v0.158.0 | rust-v0.163.0-alpha.1 | 0 |
| 11 | [334b6e73](https://github.com/openai/codex/commit/334b6e7321d55697a2415a42e1725c814d3c0df4) | 2026-09-27 | rust-v0.159.0 | rust-v0.163.0-alpha.1 | 0 |
| 11 | [9db8162d](https://github.com/openai/codex/commit/9db8162d658100bbf0a5a151996f9c3396ff1791) | 2026-09-27 | rust-v0.159.0 | rust-v0.163.0-alpha.1 | 0 |
| 11 | [ceea6716](https://github.com/openai/codex/commit/ceea67163f93b4317c9352d1cd2af9fee32537b9) | 2026-09-29 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 11 | [6221a217](https://github.com/openai/codex/commit/6221a217e2b24701ecbf05a239e4ca899ae3a359) | 2026-10-06 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 11 | [685270a5](https://github.com/openai/codex/commit/685270a56a96c76ae5b0853373a19d6ed5bc6fd4) | 2026-10-05 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 11, 14 | [cd85a26c](https://github.com/openai/codex/commit/cd85a26cae00385a0dd9247381ef5d1d7ffe9ef3) | 2026-10-08 | none | rust-v0.163.0-alpha.1 | 1 |
| 12 | [5602705c](https://github.com/openai/codex/commit/5602705c9622593785441bd6a79237bd24ee3418) | 2026-09-30 | rust-v0.161.0 | rust-v0.163.0-alpha.1 | 0 |
| 12 | [5cbcf810](https://github.com/openai/codex/commit/5cbcf810e5f4e77a34989075f99721d1028ce492) | 2026-10-05 | rust-v0.162.0 | rust-v0.163.0-alpha.1 | 0 |
| 14 | [37eaae6e](https://github.com/openai/codex/commit/37eaae6eeb71c3bd3d165f52515086db8f5e7dee) | 2026-10-07 | none | rust-v0.163.0-alpha.1 | 1 |
| 14 | [cba716c0](https://github.com/openai/codex/commit/cba716c0f1caa4f2528dedbb1075b50126709d7e) | 2026-10-07 | none | rust-v0.163.0-alpha.1 | 1 |
| 14 | [72c95952](https://github.com/openai/codex/commit/72c959528ee4ca74abdb8575fbbc4e36960a8c47) | 2026-10-07 | none | rust-v0.163.0-alpha.1 | 1 |
| 14 | [89d68bc8](https://github.com/openai/codex/commit/89d68bc8d2cdcaa1695cf55e9273208093153cb2) | 2026-10-08 | none | rust-v0.163.0-alpha.1 | 1 |
| 14 | [78a19f5a](https://github.com/openai/codex/commit/78a19f5ab563038142292857553b41be0f2348f2) | 2026-10-08 | none | rust-v0.163.0-alpha.1 | 1 |
| 14 | [bd274564](https://github.com/openai/codex/commit/bd274564e1b1b3febb3886d274e6d97c2a3d275e) | 2026-10-08 | none | rust-v0.163.0-alpha.2 | 1 |
| 14 | [75e0b408](https://github.com/openai/codex/commit/75e0b4088eff1760443856cc5f187fc9327e37b5) | 2026-10-08 | none | rust-v0.163.0-alpha.2 | 1 |
| 14 | [c9e0fffb](https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768) | 2026-10-08 | none | rust-v0.163.0-alpha.2 | 1 |
| 14 | [65b82cdf](https://github.com/openai/codex/commit/65b82cdf96f9d305494bc8c6c8d2404d37709030) | 2026-10-09 | none | rust-v0.163.0-alpha.5 | 1 |
| 14 | [10da5692](https://github.com/openai/codex/commit/10da569252004863c8256eb6bdabee3a8fc73042) | 2026-10-09 | none | rust-v0.163.0-alpha.5 | 1 |
| 14 | [12cca49c](https://github.com/openai/codex/commit/12cca49c81c8aa6a37a5cc4e39964ee3b70f9458) | 2026-10-12 | none | rust-v0.163.0-alpha.8 | 1 |
