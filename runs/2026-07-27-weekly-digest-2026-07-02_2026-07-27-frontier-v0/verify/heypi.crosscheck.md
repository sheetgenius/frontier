# Cross-check -- heypi

Eight social claims, all eight authored by the maintainer, adjudicated against
`harvest/heypi.primary.md`. This is the one source in the batch where the
conversation genuinely ran ahead of the receipt: three claims predate the
confirming tag by 5, 6, and 13 days, and the X lane is what corrected our own
baseline, which had heypi "holding at its 0.2.0 beta." It did not hold. heypi
shipped a wholesale Pi-native rewrite and a new `0.3.0-beta` line across 105
commits on `main`, and the first public signal of that was a post on 2026-07-08,
thirteen days before anything was tagged. What the conversation got right is
the architecture: the Pi-delegation split, the smaller core, and the named
Vercel and Cloudflare Sandbox runtimes are all in the tagged tree. What it got
wrong is dates -- two "this week" ship promises, both missed -- and what it
omitted is everything that makes heypi interesting. The release carries the
strongest enforcement contract in the entire harvest: approvals run at the Pi
tool-call boundary, `approval_requested` is written before the UI posts and
`approval_resolved` before the tool continues, and **if either canonical write
fails, the call is blocked**; rejection, timeout, missing adapter UI, and
process shutdown all fail closed. It also carries the hole in that contract:
approvals are opt-in per tool, and if `admins` and `approvers` are both omitted,
any actor who can reach the approval UI may respond, with a startup warning as
the only guardrail. And it silently carries a security fix for non-loopback
admin binds that were unauthenticated until 2026-07-21. A grep of the heypi
social file for `approv`, `admin`, `audit`, and `migrat` returns nothing. The
governance shell's own conversation contains no governance.

Verdict counts: confirmed 0, partial 5, refuted 0, unconfirmed 0, social_fact 3
(n=8). Two of the five `partial` verdicts contain a sub-claim the primary
refutes outright: both stated ship dates.

## The conversation knew first

The confirming receipt for this source is the **git tag**, not the commit: the
harvest establishes that heypi publishes no GitHub Releases (verified: the
releases endpoint returns length 0), so the annotated `-beta.N` tag is the ship
signal and the npm version agrees with it. Intervals below are post-to-ship.

| claim_id | post date | confirming receipt | receipt date | interval |
|---|---|---|---|---|
| `heypi-2026-07-08-rewrite-core-5k` | 2026-07-08 | `0.3.0-beta.0`, tag `d2e8b354a`, tagger date 2026-07-21; rewrite commit `9b82dcc669` "feat: checkpoint pi-native rewrite" | 2026-07-21 | **13 days** |
| `heypi-2026-07-15-codex-tag-rewrite-sandboxes` | 2026-07-15 | `0.3.0-beta.0`; runtime packages `heypi-runtime-cloudflare` and `heypi-runtime-vercel`; commit `2bb96276bc` "feat(runtime): add sandbox providers" | 2026-07-21 | **6 days** |
| `heypi-2026-07-16-codex-tag-demo-0-3-0-tease` | 2026-07-16 | `0.3.0-beta.0`; CHANGELOG authority split, "Pi now owns model execution, transcripts, compaction, retries, tools, extensions, and session state" | 2026-07-21 | **5 days** |

Two honest caveats, because only genuine matters count. First, in two of the
three cases the underlying commit landed the **same day as the post**
(`9b82dcc669` on 2026-07-08, `2bb96276bc` on 2026-07-15), so the interval
measures how far the conversation ran ahead of the shippable receipt, not ahead
of the code. Second, all three posts are the maintainer describing his own
unreleased work: this is a builder narrating in public, not practitioners
detecting something the changelog had not admitted. That distinction matters for
how the digest uses it. It is still the strongest early-warning result in this
batch, and it is the case that justifies reading the conversation layer at all:
an operator watching only tags saw nothing until 2026-07-21, and an operator
watching X knew on 2026-07-08 that the 0.2.x line was finished.

## Divergences

**1. Total silence on the governance contract, in the product whose entire pitch
is governance.** The tagged approvals doc contains the strongest enforcement
language in this window's harvest -- the audit write is a precondition for
execution, and every failure mode fails closed. Not one post mentions it. Nor
does any post mention its limit: approvals are opt-in per tool, "configuring
approvers alone does not make tools require approval", and omitting both
`admins` and `approvers` degrades the gate to "any actor who can reach the
approval UI may respond." The enforcement strength of a heypi deployment is a
property of its config, not of the tool, and the conversation offers an operator
no way to learn that.

**2. Silence on an unauthenticated admin surface.** Commit `2dd2456e00`
("Require auth for exposed admin", 2026-07-10, touching
`packages/heypi/src/admin.ts` and `admin.test.ts`) sat `main-unreleased` for
eleven days before the 2026-07-21 tag. Anyone who bound the heypi admin surface
to a non-loopback interface before that date was serving it unauthenticated.
There is no advisory; the fix is one bullet in a Security section inside a
rewrite changelog, alongside host-path disclosure and unsafe wildcard admin
hosts. The upgrade urgency is invisible unless you read that section, and the
conversation -- which was extremely active in exactly that eleven-day span --
never raised it.

**3. "Cleaned-up config" versus a demolition.** The 2026-07-21 announcement
lists "cleaned-up config" among the release's improvements. The CHANGELOG says
the release "Removed the previous database-backed runtime, config format,
**migration path**, CLI and admin application, compatibility shims, generic
progress API, and obsolete examples," and opens by declaring `0.3.0-beta.0`
"intentionally incompatible with the previous beta architecture, configuration,
persistence, and package layout." There is no migration path from 0.2.x. Every
existing deployment is a rebuild. An operator who read only the post would
upgrade expecting a config tidy-up.

**4. The anti-serverless posture and the Vercel/Cloudflare packages.** Two of
the window's highest-engagement posts (2026-07-11 and 2026-07-20) tell operators
not to run agents on serverless infrastructure. On 2026-07-21 the maintainer
tagged `heypi-runtime-vercel` and `heypi-runtime-cloudflare` as shipped runtime
packages. Both are true and they are reconcilable -- Vercel Sandbox and
Cloudflare Sandbox are long-running container primitives, not serverless
functions -- but the conversation never draws that line, and a reader taking the
posts at face value would get heypi's runtime matrix exactly backwards.

**5. Ship dates are the one thing the conversation is reliably wrong about.**
On Wednesday 2026-07-08 the maintainer said a release was targeted by end of
week; it tagged 2026-07-21, nine days past the stated target. On Wednesday
2026-07-15 he said the release was planned for the same week; it tagged
2026-07-21, two days past. The X lane is a leading indicator of intent and
architecture. It is not a leading indicator of dates, and nothing in this
harvest suggests it should be treated as one.

**6. Version shape.** Posts say "0.3.0" and "0.3.0-beta.0" interchangeably. The
tags are `0.3.0-beta.0`, `0.3.0-beta.1`, and `0.3.0-beta.2`, all
`preview-or-beta`, all annotated git tags with **no GitHub Releases page** at
all. There is no stable 0.3.0. A reader who took "0.3.0 release" literally would
go looking for a release surface that does not exist -- which is also why "the
maintainer announced it on X" is, for this source, closer to being the primary
distribution channel than it is for any other source in the harvest.

**7. A dating wrinkle worth carrying.** The CHANGELOG dates all three betas
2026-07-21; the git tagger and committer timestamps put beta.1 and beta.2 at
2026-07-22T01:35Z. Per receipt discipline the git object timestamps win. Both
are in-window and nothing material turns on it, but it is one more case of a
project's prose date and its object date disagreeing.

## Claim-by-claim

| claim_id | verdict | primary receipt or "none" | note |
|---|---|---|---|
| `heypi-2026-07-08-rewrite-core-5k` | partial | Rewrite commits `9b82dcc669` (2026-07-08) and `7da4c65494` (2026-07-14), both confirmed ancestors of `0.3.0-beta.0`, tagged 2026-07-21 | The rewrite is real and it became the 0.3.0 line. The "~5k LOCs" figure has no primary; the CHANGELOG states no line counts and the maintainer's own later post says "under 10k" and then "~70% reduction", three different numbers in thirteen days. The "release by end of week" sub-claim is **refuted** by the tag date: 2026-07-21, nine days past the stated target. Predates its receipt by 13 days. |
| `heypi-2026-07-11-serverless-agents-critique` | social_fact | none (post is the receipt) | Maintainer runtime philosophy: agents want long-running processes and persistent environments. Publishable as stated position. Sits in tension with the Vercel and Cloudflare Sandbox runtime packages tagged ten days later; see Divergence 4 for why that is tension and not contradiction. |
| `heypi-2026-07-15-codex-tag-rewrite-sandboxes` | partial | Commit `2bb96276bc` "feat(runtime): add sandbox providers" (2026-07-15) and `015388d9be` "fix(runtime): enforce sandbox path and shell contracts" (2026-07-16), both ancestors of `0.3.0-beta.0`; packages `heypi-runtime-cloudflare`, `heypi-runtime-vercel` in the 6-package workspace | Cloudflare Sandbox and Vercel Sandbox support: confirmed as shipped runtime packages. Cleaner Pi integration: confirmed by the authority split. "Much smaller footprint": no primary. "Same-week release": **refuted**, tagged 2026-07-21, six days later. Predates the ship receipt by 6 days; the code landed the same day as the post. |
| `heypi-2026-07-16-codex-tag-demo-0-3-0-tease` | partial | `0.3.0-beta.0` tagged 2026-07-21; CHANGELOG authority split (harvest sec. 1) | The 0.3.0 version line and the heavy Pi delegation are both confirmed, the latter verbatim: Pi owns model execution, transcripts, compaction, retries, tools, extensions, and session state; heypi owns chat transport, policy, resource staging, and coordination. It shipped on a `-beta.N` preview line, not as 0.3.0. "Core under 10k LOCs" and "better long-running-task performance" have no primary. Predates its receipt by 5 days. |
| `heypi-2026-07-20-stop-serverless-agents` | social_fact | none (post is the receipt) | Restatement of the anti-serverless position with a cheap-VPS recommendation. Highest engagement of any heypi post in the window per the scout pass, and the least connected to what shipped the next day. |
| `heypi-2026-07-21-codex-tag-slack-serverless-stitching` | social_fact | none (post is the receipt) | Public exchange on release day tying the Slack-fed Codex Tag workflow to the anti-serverless argument. No runtime matrix is claimed or receipted. |
| `heypi-2026-07-21-0-3-0-beta-0-release-codex-tag` | partial | `0.3.0-beta.0`, tag `d2e8b354a`, tagger date 2026-07-21; npm `@hunvreus/heypi@0.3.0-beta.2`; 6-package workspace; CHANGELOG (harvest sec. 1, 4, 7) | Version, ground-up rewrite, Pi delegation, and the Vercel and Cloudflare Sandbox runtimes are all confirmed. `create-heypi` exists as a workspace package; the specific `npm create heypi -- codex-tag` scaffold is not itself receipted. The "~70% LOC reduction" figure has no primary. "Cleaned-up config" materially understates the record, which says the previous config format, persistence, admin app, CLI, and **migration path** were removed. Same-day as the tag, so not a knew-first. |
| `heypi-2026-07-21-self-host-model-skills-quote` | partial | Staged skills listed in the tagged Added section; model execution assigned to Pi by the authority split (harvest sec. 1, 6) | Staged skills are receipted. "Whatever model you want" is a property inherited from Pi, which now owns model execution -- heypi's own contract covers transport, policy, resource staging, and coordination, not model choice. Narrow accordingly before repeating as an operator promise. |
