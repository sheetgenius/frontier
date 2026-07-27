# Cross-check -- agent-flywheel

Twenty-two social claims, adjudicated against `harvest/agent-flywheel.primary.md`.
This is the source where the conversation and the installable artifact have come
apart, and the cross-check can prove it. ACFS shipped **no tagged release in the
window** and still holds at `v0.7.0`, tagged 2026-06-26, six days before the
window opened; `main` is 73 commits ahead of that tag and 0 behind, and the
internal `VERSION` file reads `0.7.0` at both ends, so the project is not even
carrying a pre-release marker for a month of accumulated work. Every capability
post in this window therefore describes `main`, and every reader who follows
those posts to the installer receives the 2026-06-26 tree. The conversation was
also right about something the primary independently confirms: the community
complaint that you cannot find a cohesive list of what the system is made of has
a documentary cause, because the CHANGELOG has no `v0.7.0` heading at either the
tag or main, and its `[Unreleased]` section still compares `v0.6.0...HEAD` over
a range ending 2026-03-21, three months before v0.7.0 was actually tagged. And
the window produced one clean refutation: the description of ACFS as
"free/open-source" does not survive contact with the tagged LICENSE, which is
"MIT License (with OpenAI/Anthropic Rider)" and states that "no rights are
granted to any Restricted Party." Frontier discloses the restriction and does
not opine on its enforceability.

Verdict counts: confirmed 0, partial 3, refuted 1, unconfirmed 6, social_fact 12
(n=22).

## The conversation knew first

**Empty, and structurally so.** The only tagged receipt available for this
source in this window is `v0.7.0`, whose tag object is dated 2026-06-26T22:45:26Z
and whose GitHub Release published 2026-06-26T22:46:27Z -- both before the
window opened on 2026-07-02. Every in-window post postdates it. The other
accepted surface, https://agent-flywheel.com/, is a current-posture snapshot
fetched 2026-07-27, not a dated change receipt, so a post preceding our fetch is
not foreknowledge of anything.

One near-miss, recorded because it is genuinely interesting and deliberately
kept out of the table above: on 2026-07-20T11:05:23Z a community account
described difficulty finding a single cohesive component list for ACFS
(`agent-flywheel-x-015`), and on 2026-07-25T13:35:18Z another described being
unable to map how the components fit (`agent-flywheel-x-021`). Our own probe on
2026-07-27 found the documentary cause. But the defect itself predates both
posts -- it was already true at the 2026-06-26 tag -- so the conversation did
not know first. It diagnosed correctly from the outside, five to seven days
before we confirmed the mechanism from the inside. That is worth saying, and it
is not a knew-first.

## Divergences

**1. Released is not merged, and only the receipts show it.** Posts on
2026-07-23 and 2026-07-25 point operators at the complete guide and describe
using Flywheel tools and skills from Cursor after install. The installer,
service, and integration work behind that description exists only on `main`:
`compare/v0.7.0...d652882b6ed6266dfd1b1d4df83e16f870799c91` returns 73 ahead, 0
behind, with 67 of those commits landing inside this window. `curl | bash`
against ACFS today installs the 2026-06-26 tree. An operator's actual
environment is defined by `v0.7.0` no matter how busy the repository looks or
how current the conversation sounds. This is the single most important thing
this cross-check has to say about the source.

**2. Local Mac and Linux use versus the throwaway-VPS premise.** The 2026-07-23
post frames Flywheel as usable locally on Mac or Linux. The project's own front
page, fetched 2026-07-27, states its privilege posture verbatim: "Passwordless
sudo with dangerous flags enabled for maximum velocity on throwaway VPS
environments." Disposability is the whole safety argument. And the v0.7.0
safe-mode gap is still open because no tag closed it: on a host without another
`NOPASSWD` rule, a safe-mode run skips ACFS's passwordless-sudo write but does
not remove the ACFS sudoers file left by an earlier vibe-mode run, does not
remove provider-supplied passwordless sudo, and does not remove the dangerous
agent shortcuts. Switching modes is not remediation; the harvest's operator
consequence is that the only reliable rollback remains rebuilding the VPS. On a
laptop there is no VPS to rebuild. The conversation promotes the local path and
drops the premise that made the posture defensible.

**3. "Open source" against the tagged rider.** See the refuted row below. The
code is public and the grant is MIT-shaped for everyone outside the named class;
the tagged text withholds the grant from OpenAI, Anthropic, their affiliates,
and any person or entity acting on their behalf, for their benefit, or under
their direction. Withholding the grant from named persons is the condition
excluded by clause 5 of the Open Source Definition ("No Discrimination Against
Persons or Groups"), so the unqualified label does not hold against the receipt.
This is a factual statement about a license text, not a claim about the author.

**4. The crowd disagrees with itself about onboarding, and the receipts settle
it.** One community account reports the stack was "useful and not too hard"
(2026-07-19); two others report a learning curve and an inability to map how the
components fit (2026-07-20, 2026-07-25). The primary explains the second group:
an operator reconstructing what `v0.7.0` contains cannot use the CHANGELOG,
because the CHANGELOG says that work is unreleased. Version headings present at
both SHAs are `[Unreleased]`, `v0.6.0`, `v0.5.0`, `v0.4.0`, `v0.3.0`, `v0.2.0`,
`v0.1.0` -- there is no `v0.7.0` heading anywhere. The complaint is not a skill
issue.

**5. Tool count.** A community post puts the tool count at roughly 20; the
official site says "30+ modern developer tools". Neither figure is an
independent count, and the harvest does not enumerate. Do not repeat either
number as fact.

**6. Cost.** Informal community spend chatter (2026-07-15) sits against the
project's own attributed figure, unchanged across the window: Cloud VPS
$40-56/month, Claude Max $200/month or $400 for power users, ChatGPT Pro
$200/month, "Estimated Monthly Total: $440 - $656/month". Use the attributed
figure; the chatter is sentiment about affordability, not a measurement.

**7. Advisory-not-enforcing, conceded on the record.** On 2026-07-25 the author
describes the concurrency mechanism in agent mail as an **advisory** file
reservation system, in his own word. That is this window's governing pattern --
documented is not enforced -- stated plainly by the person who built the
mechanism, with no prompting and no defensiveness. The mechanism itself was not
probed (the related-portfolio repositories are `context_only_not_weekly_harvest`
per the source contract), so the receipt here is for the statement, not for the
behavior. It is a strong quotation and a weak product fact, and the digest
should use it as exactly that.

## Key player: @doodlestein

Jeffrey Emanuel, author of ACFS
(`Dicklesworthstone/agentic_coding_flywheel_setup`) and of the related-surface
tools named throughout. Thirteen of this source's twenty-two harvested posts are
his, across six days. Seven of the thirteen land on 2026-07-25 alone, between
00:39Z and 19:27Z. Everything below is a receipt for what he **said**, on the
date and at the URL given. None of it is a receipt for what is true of any
product, and no motive or characterization is inferred from any of it.

**Method and orchestration topology.**

| date (UTC) | post | what he said |
|---|---|---|
| 2026-07-25T00:39:26Z | https://x.com/doodlestein/status/2080815151624638905 | Describes his harness: Claude Code drives `ntm` to direct a swarm of Claude Code and Codex instances, with agent mail in the loop. |
| 2026-07-25T01:08:11Z | https://x.com/doodlestein/status/2080822385712775250 | Publishes an Opus 5 "mega orchestration prompt" assuming `ntm`, `rch`, `br`, `bv`, and beads-oriented swarm workflows. High engagement. |
| 2026-07-25T10:40:46Z | https://x.com/doodlestein/status/2080966482461065625 | Pairs Claude Code and Codex with `ntm`, linking `Dicklesworthstone/ntm` as session and swarm orchestration tooling. |
| 2026-07-25T10:42:10Z | https://x.com/doodlestein/status/2080966833830539655 | States that file-reservation and concurrency concerns are handled by an **advisory** file reservation system in agent mail; links `mcp_agent_mail_rust`. |
| 2026-07-25T19:26:48Z | https://x.com/doodlestein/status/2081098862115143886 | Shows multi-model agents, named in the post as Fable 5 and Sol Max, collaborating via MCP Agent Mail on a FrankenSQLite project, with images. |

**Distribution and the method-not-a-tool framing.**

| date (UTC) | post | what he said |
|---|---|---|
| 2026-07-21T20:48:54Z | https://x.com/doodlestein/status/2079669972633035255 | Shares the agent-flywheel.com complete guide and describes the system as free and open-source agent coding tooling. (Refuted as to the unqualified "open source" label; see the claim table.) |
| 2026-07-23T16:12:47Z | https://x.com/doodlestein/status/2080325262562959730 | Points operators at the complete guide and frames Flywheel as usable locally on Mac or Linux, with planning, beads, and bundled tools as the core method. |
| 2026-07-25T16:45:41Z | https://x.com/doodlestein/status/2081058316197716313 | Says Flywheel tools and skills can be used from Cursor after install, and again frames the project as a methodology rather than a single tool. |

**Component advocacy.**

| date (UTC) | post | what he said |
|---|---|---|
| 2026-07-10T20:16:08Z | https://x.com/doodlestein/status/2075675460600467809 | Urges adoption of `dcg` (destructive_command_guard) and frames dangerous-command guarding as a solved problem. |
| 2026-07-20T05:07:24Z | https://x.com/doodlestein/status/2079070649528529011 | Argues nothing else comes close to beads, that beads uniquely work with `bv`, and points at a Rust implementation at `Dicklesworthstone/beads_rust`. |
| 2026-07-25T13:52:57Z | https://x.com/doodlestein/status/2081014848075284636 | States that `coding_agent_session_search` (cass) has been public for 6+ months and does essentially the same job as newer projects getting more attention. High engagement. |
| 2026-07-25T14:06:56Z | https://x.com/doodlestein/status/2081018366156759184 | Frames the primary user of cass as another agent, says the tool is agent-intuitive via its README, and points at a `jeffreys-skills.md` cass skill URL. |

**Economics.**

| date (UTC) | post | what he said |
|---|---|---|
| 2026-07-26T22:54:04Z | https://x.com/doodlestein/status/2081513410601140263 | Argues that cheaper models which fail and retry can cost more than stronger models succeeding once. |

**Receipted facts that bound all of the above.** These are properties of the
project, each with a primary receipt, and they are what a reader needs in order
to place any of the statements: the last tag is `v0.7.0`, 2026-06-26, and no tag
landed in this window; `main` is 73 commits ahead of it with `VERSION` reading
`0.7.0` at both ends; the tagged LICENSE is "MIT License (with OpenAI/Anthropic
Rider)" and withholds the grant from named parties; the official site states
"Passwordless sudo with dangerous flags enabled for maximum velocity on
throwaway VPS environments" and an "Estimated Monthly Total: $440 - $656/month";
and the CHANGELOG contains no `v0.7.0` heading at either the tag or main. Post
times decoded from X status snowflakes; the decoder was validated to the second
against independently recorded GMT timestamps elsewhere in this run.

## Claim-by-claim

| claim_id | verdict | primary receipt or "none" | note |
|---|---|---|---|
| `agent-flywheel-x-001` | unconfirmed | none for the capability; context: site posture fetched 2026-07-27 (harvest sec. 3) | Local Mac and Linux use has no tagged or site receipt. Recorded because it collides with the project's own "throwaway VPS" framing and the still-open v0.7.0 safe-mode gap; see Divergence 2. |
| `agent-flywheel-x-002` | **refuted** | Tagged LICENSE at `v0.7.0`, pinned at `edaee4f6ceff772d4f56d42eda65b1d659fead73` (harvest sec. 4) | "Free" and publicly readable hold. The unqualified "open source" description does not: the tagged LICENSE is "MIT License (with OpenAI/Anthropic Rider)" and states that "no rights are granted to any Restricted Party", defined as OpenAI L.L.C., Anthropic PBC, their affiliates, and any person or entity acting on their behalf, for their benefit, or under their direction. Withholding the grant from named persons is excluded by clause 5 of the Open Source Definition. Frontier discloses the restriction without opining on enforceability. |
| `agent-flywheel-x-003` | unconfirmed | none | Cursor integration is not receipted at any tag. Per the source contract, `untagged_main_branch_commits` are rejected as posture evidence, so the 73 unreleased commits cannot be cited to confirm it either. Stays a lead. |
| `agent-flywheel-x-004` | social_fact | none (post is the receipt) | Advocacy for beads plus a checkable interop claim (beads uniquely work with `bv`) that was not probed -- the related-portfolio repositories are `context_only_not_weekly_harvest`. Publishable as preference, never as comparison. |
| `agent-flywheel-x-005` | unconfirmed | none | "Public for 6+ months" and functional parity with newer projects are both checkable and unchecked. cass is a related surface, out of harvest scope this window. |
| `agent-flywheel-x-006` | social_fact | none (post is the receipt) | Design intent: the primary user of the tool is another agent, and the README is the agent-facing interface. Interesting as method; no behavior receipt. |
| `agent-flywheel-x-007` | social_fact | none (post is the receipt) | Demonstration of multi-model agents coordinating via MCP Agent Mail. Screenshots are not receipts. Model names are as given in the post. |
| `agent-flywheel-x-008` | social_fact | none (post is the receipt) | The author's own word for his concurrency mechanism is "advisory". Strong as a quotation about enforcement posture; the mechanism itself was not probed. See Divergence 7. |
| `agent-flywheel-x-009` | social_fact | none (post is the receipt) | Cohabitation lineup: Claude Code and Codex with `ntm`. Not an ACFS installer pin. |
| `agent-flywheel-x-010` | social_fact | none (post is the receipt) | A published orchestration prompt is a real artifact and publishable as one. It assumes tools that are not receipted at any ACFS tag. |
| `agent-flywheel-x-011` | social_fact | none (post is the receipt) | Self-reported harness topology. The clearest single statement of the flywheel loop in the window: one driver agent, a swarm, and a mail layer between them. |
| `agent-flywheel-x-012` | partial | `v0.7.0` release notes cover DCG stack repair (harvest sec. 2) | DCG is receipted as a real component of the tagged ACFS stack -- the v0.7.0 notes record repairing it. "Solved problem" is rhetoric with no measured receipt, and the guard's own coverage was not probed. |
| `agent-flywheel-x-013` | unconfirmed | none | Token-efficiency praise with no method. Not evaluation evidence. |
| `agent-flywheel-x-014` | social_fact | none (post is the receipt) | Onboarding sentiment, positive, single source. Directly contradicted by two other community accounts in the same window; see Divergence 4. |
| `agent-flywheel-x-015` | partial | CHANGELOG at tag `edaee4f6c` and at main `d652882b6`: no `v0.7.0` heading at either SHA (harvest sec. 5) | The discoverability complaint is independently corroborated by a documented receipt-hygiene defect -- the changelog describes v0.7.0 content as unreleased under a date range ending 2026-03-21. The "~20 tools" figure is not confirmed; the project's own site says "30+". |
| `agent-flywheel-x-016` | social_fact | none for the chatter; official figure: "Estimated Monthly Total: $440 - $656/month" (harvest sec. 3) | Cost-of-operation sentiment. Anchor any cost writing to the project's attributed figure, not to the informal estimates. |
| `agent-flywheel-x-017` | social_fact | none (post is the receipt) | Averted-incident anecdote for dcg. Real as a report; not measured safety efficacy. |
| `agent-flywheel-x-018` | social_fact | none (post is the receipt) | Advocacy to install dcg before heavy autonomous use, citing reported destructive incidents. The incidents are unverified; do not treat as an incident report. |
| `agent-flywheel-x-019` | unconfirmed | none | Third-party paraphrase of dcg capabilities (multi-pack interception, harness hooks, trust levels). The repo was not probed this window. |
| `agent-flywheel-x-020` | unconfirmed | none | Weak lead: the harvest could not confirm the post body names ACFS or Flywheel components at all. The Telegram-control detail is unverified. Do not promote. |
| `agent-flywheel-x-021` | partial | CHANGELOG defect at both SHAs (harvest sec. 5) | The "cannot map how components fit" complaint has a documentary cause and is corroborated to that extent. The sentiment half is the poster's own. |
| `agent-flywheel-x-022` | social_fact | none (post is the receipt) | Cost-versus-retry reasoning from the author. Amdahl-adjacent and quotable; not a published project budget and must stay separate from the site's dollar figures. |
