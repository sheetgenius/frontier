# Cross-check -- openclaw

Twenty-seven social claims adjudicated against `harvest/openclaw.primary.md` for
the window 2026-07-02 to 2026-07-27. OpenClaw's defining fact this window is that
its published channel map is a false view of what users install: `npm install
openclaw` on 2026-07-27 yields `2026.7.1-2`, an untagged respin published
2026-07-18T03:53:48Z with no git tag, no GitHub release, no notes and no
`gitHead`, twenty-eight minutes after a first respin `2026.7.1-1`; two real beta
tags carry no GitHub release at all; and an undocumented `extended-stable` line
sits at `2026.6.33`. Not one of the twenty-seven claims mentions npm, a respin,
a `-2` suffix, `extended-stable`, or version confusion of any kind. The only
version-string uncertainty in the entire record is our own scout flagging a
possible transcription artifact. The conversation was loud, and it was loud
about the wrong things: it spent the window on CVE identifiers and ClawHub
malware percentages that no primary source here corroborates, while a receipted
privilege escalation from channel-allowlist membership to global config
authority sat fixed only in beta, two approval defaults were quietly loosened,
and a confirmed workspace sandbox escape landed in no release on any channel.
Verdicts: 0 confirmed, 8 partial, 0 refuted, 7 unconfirmed, 12 social_fact. The
absence of refutations is itself the finding -- the crowd's product claims are
mostly unfalsifiable sentiment, and its checkable claims went stale rather than
wrong. Employment, foundation-structure and "abandoned as a security nightmare"
material about named people stays journal-only as conversation, never as fact.

## The conversation knew first

One genuine match, and it is the sharpest interval in the trio.

| claim_id | kind | post (UTC) | confirming receipt (UTC) | lead | what was known |
|---|---|---|---|---|---|
| `openclaw-joshavant-permission-friction-qa-2026-07-10` | staff-associated practitioner | 2026-07-10T00:25:15Z | PR #88953 merged 2026-07-10T09:53:57Z | **9h 28m 42s (0.39 days)** | The post describes stripping lines out so an agent could drive dedicated QA accounts without stopping to ask permission across hundreds of live test runs. Nine and a half hours later OpenClaw merged auto-approval for curated read-only boolean flags on default stdin-only safe bins (#88953), keeping unknown flags, tail follow/retry modes, file operands and custom profiles fail-closed. Four days after that, agent-initiated Skill Workshop apply, reject and quarantine dropped their approval prompt by default (#107690, merged 2026-07-14T17:31:52Z). Measured against the artifact rather than the merge, the lead is **14.2 days**: neither loosening reached a shipping channel until the npm `beta` tag moved to `2026.7.2-beta.4` on 2026-07-24T06:11:58Z, and neither is in stable or the npm `latest` respin. No causal claim is made; the sequence is the receipt. Affiliation weakens the independence of this instance, and it is recorded with that caveat. |

Deliberately excluded, for rigour. The 2026-07-04 milestone post is an official
self-announcement whose corroborating receipts happen to land later (see the
claim table), not the field knowing something first. The 2026-07-23 architectural
critique argues that OpenClaw's failures are structural four days before PR
#113405 documents a validator that returns success while an escape works -- but
the post names no such bug, so the match is thematic, not specific, and it is not
counted. Nothing in this social set predates the privilege-escalation fix
(#107403), the ACP session-disclosure fix (#110745) or the sandbox-escape fix
(#113405).

## Divergences

**1. The releases page is not what npm installs, and nobody in the conversation
noticed.** The official account announced `v2026.7.1` on 2026-07-14T05:24:01Z and
told users to update to it on 2026-07-15T01:32:01Z. Both were accurate that
week. On 2026-07-18, npm `latest` moved twice in twenty-eight minutes, to
`2026.7.1-1` at 03:25:50Z and `2026.7.1-2` at 03:53:48Z, neither carrying a git
tag, a GitHub release, release notes or a `gitHead`. As of 2026-07-27 the
artifact most users run has no commit pointer of record. Meanwhile
`v2026.7.2-beta.4` and `v2026.7.2-beta.5` exist as real tags with no GitHub
release, so any harvest reading only the releases API reports beta.3 (2026-07-18)
as newest and is nine days stale. Zero of twenty-seven claims touch any of this.
The practical instruction that follows -- state your OpenClaw version as an npm
version, never as a GitHub release -- appears nowhere in the conversation.

**2. The loud security discourse is aimed away from the receipted holes.** The
X record carries CVE-2026-25253, ClawJacked, ClawHavoc, malware-share
percentages for ClawHub skills and tens-of-thousands-of-instances RCE counts
across 2026-07-11 and 2026-07-23. None of it is corroborated by any primary in
this harvest; the only advisory receipted anywhere in this trio is
GHSA-j3f2-48v5-ccww against protobufjs, fixed in Pi. What is receipted, and
undiscussed: a sender allowed on one channel could be treated as a global
command owner and run owner-gated `/allowlist` and `/config` mutations, with a
before/after Telegram proof in the PR (#107403, merged 2026-07-14T12:19:21Z).
Thirteen days later that fix is `diverged` from `v2026.7.1`, absent from its PR
manifest, and present only in the beta line. The official 2026-07-15 post
telling users to update to `v2026.7.1` therefore pointed them, one day after the
fix merged, at a build that does not contain it.

**3. A confirmed sandbox escape is in no release on any channel, and in no
post.** PR #113405 (merged 2026-07-27T07:16:00Z) documents a reproduced probe on
fresh `origin/main`: a POSIX workspace path of the form `sub/up/../outside/
secret.txt` with `sub/up -> ..` reads a planted sibling file while
`assertSandboxPath` returns success and reports the normalized in-root path. The
shipped read, write and edit tools route through the same `@openclaw/fs-safe`
`Root`. The maintainers state plainly that the fix is defence-in-depth, does not
close the TOCTOU window, and that a validated in-root symlink can still be
swapped before a later operation. A grep of all three social files for sandbox,
symlink, escape and TOCTOU returns nothing about OpenClaw.

**4. Approval defaults were loosened on the beta line, deliberately and
undiscussed.** #107690 removed the approval prompt for agent-initiated skill
apply, reject and quarantine, leaving `skills.workshop.approvalPolicy: "pending"`
as opt-in; #88953 auto-approves curated read-only flags on safe bins. The agent
can now edit its own skill library without a prompt on beta. The only
approval-adjacent post in the entire trio wanted more of this, not less.

**5. Ecosystem enthusiasm outruns the channel the guardrails live on.** The
2026-07-23 ClawHub portability post and the 2026-07-26 ACP interop post both
promote surfaces whose safety fixes are beta-only. Plugin-install provenance
warnings requiring `--force` for arbitrary executable sources (#102197, merged
2026-07-14T17:25:37Z) are `diverged` from stable, so stable still installs
arbitrary executable plugin sources with no acknowledgement step. `/acp sessions`
listed every gateway session to non-owner senders until #110745 (merged
2026-07-19T00:38:48Z), which is in beta.4 and later only -- so anyone enabling
ACP on stable or beta.3 to try the advertised interop is running the unfixed
build.

**6. The maintainers wrote the misconfiguration down, which is the tell.** PR
#113692 (merged 2026-07-25T13:43:03Z, `main-unreleased`) documents Discord
channel-allowlist and ambient room event pitfalls in prose. That is the same
trap as divergence 2, being explained rather than only patched, which is the
signal that operators are hitting it in the field. No post reflects it.

**7. Counterweight, recorded.** The pain cluster (gateway SQLite trap on
2026-07-15, cloud churn on 2026-07-23, Windows SSH friction and the China survey
on 2026-07-26, "security nightmare" on 2026-07-16) is not one-sided. Against it:
the one clean promotion of the window, where scoped attach grants and
session-bound `openclaw attach` reached stable in `v2026.7.1`; a
staff-associated account publicly acknowledging the gateway trap with a fix
incoming on the day it was reported; a large volume of security fixes actually
landing; and a positive adoption report on 2026-07-26. OpenClaw's problem in
this window is not that it does not fix things. It is that the fixes and the
installable artifact are on different channels.

**8. The reciprocal-integration fact appears in neither conversation.**
OpenClaw's `v2026.7.2-beta.1` notes (published 2026-07-15T18:48:24Z) advertise
discovering OpenCode and Pi sessions from paired nodes and resuming Pi sessions
in a terminal (#106941, #106927, #107200). Pi removed its README pointer to
`openclaw/openclaw` on 2026-07-26T16:29:38Z. Reported as fact; no motive
inferred. Neither the OpenClaw nor the Pi social harvest mentions either half.

## Claim-by-claim

| claim_id | verdict | primary receipt | note |
|---|---|---|---|
| `openclaw-official-mobile-maintainer-credit-2026-07-02` | social_fact | post is the receipt | Credit and feedback engagement. Establishes no mobile behaviour. |
| `openclaw-official-100k-issues-prs-2026-07-04` | partial | https://github.com/openclaw/openclaw/pull/96351 (merged 2026-07-01T01:22:06Z) and https://github.com/openclaw/openclaw/pull/100505 (merged 2026-07-06T02:04:44Z) | GitHub numbers issues and PRs from one shared per-repo sequence, so these two receipts bracket the milestone: an item at 96,351 merged on 2026-07-01 and an item at 100,505 merged on 2026-07-06 put the crossing of 100,000 inside the first week of July, with the 2026-07-04 announcement inside the bracket. Two hedges: merge dates bound creation only loosely, and the counter is an upper bound on items actually created. "222 days", "volunteer-built" and "zero VC" have no receipt here; the last sits in unexamined tension with the 2026-07-08 foundation-and-sponsors framing, and both remain social. |
| `openclaw-official-mobile-gateway-auth-2026-07-06` | unconfirmed | none | iOS redesign, Android localization, `.local` gateways and QR/TLS/auth recovery are store artifacts outside the repo channel map. The only mobile item in the `v2026.7.1` PR manifest is admin-gated pairing (#100157), which is adjacent but different. |
| `openclaw-official-hf-local-onboard-2026-07-06` | unconfirmed | none | Hugging Face local-apps distribution and the fully-local no-cloud-keys claim are unreceipted. |
| `openclaw-hrudolph-gateway-release-qr-2026-07-07` | social_fact | post is the receipt | Release-process friction described by a staff-associated account, identity social-attributed only. Context, not confirmation: the stable line forked from `main` at 2026-07-08T18:19:05Z, one day later, and then took 215 of its own commits, none carrying a PR number, before `v2026.7.1` published 2026-07-13T22:33:14Z. Consistent with a delayed and diverging release process; not proof of the described delay or of the QR fix. |
| `openclaw-official-grok-4-5-live-2026-07-08` | unconfirmed | none | Model routing unreceipted. Note the shape: "live without a client update" is a dynamic-catalog claim, structurally the same as the Pi claim of 2026-07-24 that its own next release contradicted seventeen hours later. Worth probing whether OpenClaw's catalog behaves as advertised. |
| `openclaw-official-foundation-nonprofit-2026-07-08` | social_fact | post is the receipt | A foundation was announced. 501(c)(3) status requires filings, not a post. Publishable as announcement only. |
| `openclaw-steipete-foundation-independence-2026-07-09` | social_fact | post is the receipt | The maintainer publicly stated that his hire was personal and that the foundation has sponsors rather than owners. Fully receipted as a statement; not verified org structure or employment fact. Journal-only beyond the quoted framing under the reputational-claims rule. |
| `openclaw-joshavant-permission-friction-qa-2026-07-10` | partial | https://github.com/openclaw/openclaw/pull/88953 (merged 2026-07-10T09:53:57Z) and https://github.com/openclaw/openclaw/pull/107690 (merged 2026-07-14T17:31:52Z), both `preview-or-beta` | The anecdote itself is social. What the primary confirms is the direction the anecdote wanted: two approval defaults loosened within four days, both documented as deliberate, both `diverged` from `v2026.7.1` and absent from its manifest. See "The conversation knew first" for the 9h 29m interval and the 14.2-day interval to a shipping artifact. |
| `openclaw-community-cve-2026-25253-discourse-2026-07-11` | unconfirmed | none | The CVE identifier appears in no primary source in this harvest. That is not a refutation -- absence from a repo-and-npm harvest is not absence from NVD -- but exposure counts and dollar figures that vary between posts are not receipts, and nothing here supports promoting any of them. Resolve against NVD/GHSA before any use. |
| `openclaw-official-v2026-7-1-release-2026-07-14` | partial | https://github.com/openclaw/openclaw/releases/tag/v2026.7.1 (published 2026-07-13T22:33:14Z; npm 2026-07-13T17:58:18Z) and https://docs.openclaw.ai/releases/2026.7.1 | The version, the tag commit `2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4` and the docs release page are confirmed; the post trails the release by about seven hours. The 3,063 contributions / 532 contributors counts and the model list including GPT-5.6 and Muse Spark 1.1 are unreceipted. The claim went stale rather than wrong four days later, when npm `latest` moved to an untagged respin. Divergence 1. |
| `openclaw-hrudolph-gateway-sqlite-trap-2026-07-15` | unconfirmed | none | Stale startup-migrations lease and conflicting `installed_plugin_index` rows are unreceipted; the referenced issue was not resolved in this pass. Sequence worth keeping: reported two days after `v2026.7.1` published, which is the upgrade-breakage shape. Counterweight, receipted as conversation: the same post carries a staff-side acknowledgement and a fix-incoming statement on the day of the report. |
| `openclaw-official-muse-spark-1-1-2026-07-15` | partial | https://github.com/openclaw/openclaw/releases/tag/v2026.7.1 | `v2026.7.1` exists and the update instruction pointed at a real tag. Muse Spark 1.1 support is unreceipted. The instruction is the interesting half: issued 2026-07-15T01:32:01Z, roughly thirteen hours after the channel-allowlist privilege-escalation fix merged (#107403, 2026-07-14T12:19:21Z) into a line the recommended build does not contain. Divergence 2. |
| `openclaw-community-hermes-contrast-setup-security-2026-07-16` | social_fact | post is the receipt | Competitive sentiment. "Security nightmare" and "crashes constantly" are opinion and remain unfalsifiable here. Two-sided context, both receipted: the window does contain a privilege escalation fixed only in beta (#107403), an ACP session-disclosure fix (#110745) and a sandbox escape in no release (#113405), which gives the sentiment a factual basis it does not itself supply; and it also contains a large, sustained stream of security fixes, which cuts against "abandoned". Punch at the channel model, not at the project's diligence. |
| `openclaw-community-mac-mini-quarantine-setup-2026-07-16` | social_fact | post is the receipt | Operator behaviour under threat discourse: physical isolation as the trust boundary. Adoption evidence, not evidence any specific CVE is current. |
| `openclaw-official-next-beta-testing-2026-07-20` | partial | https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.3 (published 2026-07-18T23:16:53Z, release SHA `d111bef0eed5aefb1e7c5ac59801c1f0924495f1`) | A beta.3 build was published shortly before the post, carrying `OPENCLAW_SUPERVISOR_MODE=external`. The "2027.6.2-beta.3" string matches no OpenClaw tag and should be treated as a summarization artifact of the scout pass, not as a receipt about the post. The "fuller release soon" expectation did not land inside the window on any user-facing channel: beta.4 and beta.5 exist as tags with no GitHub release, and npm `latest` is still the untagged `2026.7.1-2` respin. |
| `openclaw-pat-erichsen-single-gateway-scale-2026-07-21` | unconfirmed | none | Hundreds of agents per gateway is unreceipted and is an anecdote, not a benchmark. Cross-source note: the Hermes conversation on 2026-07-25 treats OpenClaw's per-channel agent binding as the reference implementation while asserting Hermes cannot do it -- and the Hermes half of that comparison is refuted by `v2026.7.20`. The comparative belief circulating about these two gateways is at least half wrong. |
| `openclaw-community-security-architecture-critique-2026-07-23` | partial | https://github.com/openclaw/openclaw/pull/113405 (merged 2026-07-27T07:16:00Z, `main-unreleased`) | Narrowed hard. Every quantitative claim -- ClawHub malware share, tens of thousands of RCE-exposed instances, the named campaign, the CVE detail -- is unreceipted and must not be promoted. The structural thesis, that the failure mode is a validation boundary reporting success while the operation escapes, is confirmed in exactly one receipted instance: `assertSandboxPath` returns success and reports a normalized in-root path while the read lands outside the workspace, and the maintainers state the TOCTOU window stays open even after the fix. Supporting texture, also receipted: #107403, the exec-approval bypass wave, and #102197 showing stable still installs arbitrary executable plugin sources without acknowledgement. The argument has purchase; the evidence offered for it does not. |
| `openclaw-community-cloud-churn-ux-2026-07-23` | social_fact | post is the receipt | Second-hand churn anecdote plus an adoption argument about hiding setup wires. Pain signal only. |
| `openclaw-pat-erichsen-clawhub-npx-skills-2026-07-23` | partial | https://github.com/openclaw/openclaw/pull/102197 (merged 2026-07-14T17:25:37Z, `preview-or-beta`) | ClawHub as a first-class trusted install path is confirmed: #102197 keeps trusted ClawHub, bundled, official-catalog and tracked-update flows frictionless while forcing `--force` on arbitrary executable sources. Cross-agent `npx skills` portability is unreceipted. Operator consequence the post omits: the provenance friction that makes ClawHub the "trusted" lane exists only on beta, so on stable the distinction the post relies on is not enforced. |
| `openclaw-steipete-linux-app-soon-2026-07-26` | social_fact | post is the receipt | Distribution intent. No tagged receipt; nothing in the window's tags carries a Linux app. |
| `openclaw-community-clawhub-acp-buzz-2026-07-26` | partial | https://github.com/openclaw/openclaw/pull/110745 (merged 2026-07-19T00:38:48Z, `behind` `v2026.7.2-beta.4`) | OpenClaw has a real ACP surface -- receipted precisely by the fix to it. The Buzz workspace, the ClawHub skill and "backend support for any ACP agent" are unreceipted. Sharp operator note: `/acp sessions` listed every gateway session to non-owner senders, and the fix is in beta.4 and later only, so enabling ACP on stable or beta.3 to try this interop runs the disclosure. |
| `openclaw-community-china-survey-churn-2026-07-26` | social_fact | post is the receipt | A survey was described. Sample, sponsor, instrument and every number are unverified social summary; not usable quantitatively. Publishable only as "this claim circulated". |
| `openclaw-community-windows-cli-ssh-pain-2026-07-26` | unconfirmed | none | Single-user friction report; no receipt and no issue correlation in this pass. |
| `openclaw-community-security-sidecar-pitch-2026-07-26` | social_fact | post is the receipt | Third-party vendor pitch riding the pain discourse. Not a maintainer receipt and not evidence about OpenClaw's posture; evidence that a market formed around it. |
| `openclaw-community-skills-agent-critique-2026-07-26` | social_fact | post is the receipt | Philosophy critique about ownership versus rented capability. Competitive framing; no technical claim about runtime locality to adjudicate. |
| `openclaw-community-channel-aider-adoption-2026-07-26` | social_fact | post is the receipt | Positive gateway adoption anecdote across Telegram, WhatsApp and Discord. Recorded deliberately as counterweight to the pain cluster; no version or configuration receipt. |
