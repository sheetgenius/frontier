# Cross-check -- hermes-agent

Thirty-five social claims adjudicated against `harvest/hermes-agent.primary.md`
for the window 2026-07-02 to 2026-07-27. The headline is a silence. The single
most consequential authority change Hermes made in the window -- `approvals.mode`
defaulting to `smart`, moving the approval decision from the operator to an LLM
reviewer (PR #62661, merged 2026-07-12T07:25:56Z, first tagged in `v2026.7.20`
on 2026-07-20T18:35:55Z) -- appears in zero of the thirty-five harvested claims.
The same sweep captured a stale website installer, a Telegram gateway crash, a
WSL2 SQLite corruption, Docker file-ownership conflicts and a Discord routing
complaint. Nobody in this harvest posted about the default that moved the gate
off the human, and nobody posted about the policy override, denial circuit
breaker, `approvals suggest`, docker-daemon-redirect detector or recursive-`rm`
detector built to contain it, all of which are still `main-unreleased`. Where
the conversation did engage the release, it was mostly wrong in a specific and
provable direction: it described a shipped isolation feature as a sharing
feature, and it asserted a gateway limitation that the tag it was running had
removed five days earlier. Verdicts: 1 confirmed, 6 partial, 1 refuted, 18
unconfirmed, 9 social_fact. Conduct language from the ProAgentBench exchange and
the third-party-repo allegation stays journal-only under the reputational-claims
rule; both are recorded here as disputes, not as findings about people.

## The conversation knew first

Hermes cut `v2026.7.7` (2026-07-08) as an explicitly uncurated infrastructure
tag carrying roughly 660 merged PRs with no notes, and told users the readable
account would arrive with v0.19.0 twelve days later. That gap is where this
section lives: for twelve days the only description of what Hermes did was
written by people running it, not by the project. Both matches below are
measured against the v0.19.0 release notes (`v2026.7.20`, published
2026-07-20T18:35:55Z), which is the moment the changelog admitted the behaviour.
Both underlying merges predate their posts, so the lead is over the changelog,
not over the commit; the interval is stated honestly on that basis.

| claim_id | kind | post (UTC) | confirming merge (UTC) | changelog (UTC) | lead over changelog | what was known |
|---|---|---|---|---|---|---|
| `hermes-agent-2026-07-19-subagent-durability-gap` | field | 2026-07-19 (day precision) | PR #63494, 2026-07-13T14:28:22Z | `v2026.7.20`, 2026-07-20T18:35:55Z | 1 day | A community user stated the exact scope boundary of an untagged feature: completed-but-undelivered subagent results survive a restart, running subagents do not auto-resume. PR #63494 made background delegation completions durable through an ownership-checked ledger; its receipted scope is completions, not in-flight runs. On 2026-07-19 no tag carried it (`v2026.7.7.2` was current) and no notes described it. This is the strongest field case in the trio: a practitioner on `main` characterised an unreleased durability guarantee, and its limit, one day before the project did. |
| `hermes-agent-2026-07-19-async-subagent-visibility` | vendor | 2026-07-19 (day precision) | PR #67479, 2026-07-19T17:29:15Z | `v2026.7.20`, 2026-07-20T18:35:55Z | 1 day | The maintainer described live subagent probing with timestamps the same day PR #67479 merged live transcript files for `delegate_task` dispatches. Weak instance of the pattern -- a maintainer posting about his own merge is publication choreography, not field knowledge -- and the shutdown-control half of the post is unreceipted. Recorded for completeness, not as evidence the field was ahead. |

No other Hermes claim in this harvest predates a confirming primary. The
IronProxy announcement (2026-07-24) trails its original merge by twenty days.
The v0.19 community summary (2026-07-26) trails the release by six.

## Divergences

**1. The approvals default flip is invisible in the conversation.** `approvals.mode`
moved from `manual` to `smart` for new and default configurations, and the smart
path narrowed from a session-wide pattern pass to per-command review (PR #62661,
merged 2026-07-12T07:25:56Z, `ahead` of `v2026.7.1` and `v2026.7.7`, `behind`
`v2026.7.20`). Upgrading past `v2026.7.20` silently moves the approval gate from
a human to a model unless `approvals.mode: manual` is pinned. A grep of all
three social files in this trio for approval, permission, yolo, auto-accept and
gate language returns exactly one approval-adjacent post, and it belongs to
OpenClaw (`openclaw-joshavant-permission-friction-qa-2026-07-10`), where the
author wanted *fewer* prompts. The only "permission" hit in the Hermes file is
`gl00mt1t4n` on Docker file-ownership, which is filesystem permissions, not an
approval gate. Bound: this is a statement about the harvested set, not proof
that nobody anywhere noticed.

**2. The containment built for that default is entirely main-unreleased, and
also unmentioned.** `approvals.smart_policy` (#72186), the consecutive-denial
circuit breaker (#72203), `hermes approvals suggest` (#72259), the
docker/podman daemon-redirect approval requirement (#71092) and the
recursive-`rm`-with-trailing-flags detector (#68996) all merged after the tag
and are all `ahead` of `v2026.7.20`. The release that flipped the decision to a
model ships none of the controls written to bound it. Zero social claims.

**3. IronProxy is announced as capability and exists as a revert.** The official
account described the credential firewall on 2026-07-24 in present tense. Git
ancestry: PR #30179 merged 2026-07-04T20:29:24Z and was reverted twelve minutes
later by PR #58489 at 2026-07-04T20:41:25Z; the revert is `behind` `v2026.7.20`
and therefore is what shipped. The re-land (PR #70848, merged
2026-07-24T16:49:01Z) is `ahead` of the tag. Anyone running the release has the
revert, not the firewall, and the feature is disabled by default behind
`hermes egress setup` even on `main`. No post in the harvest carries that
distinction.

**4. The crowd asserted a Discord limitation the tag had already removed.** On
2026-07-25 a community user stated Hermes cannot bind separate agents to
separate channels, favourably contrasting OpenClaw. `v2026.7.20`, published five
days earlier, shipped profile-based inbound routing on a single multiplexed
gateway: one bot token routing specific guilds, channels or threads to different
profiles with isolated config, skills, memory and secrets (PR #64835, merged
2026-07-15T16:50:07Z; multiplex hardening PR #65700, merged
2026-07-16T14:17:56Z). Here the changelog knew first and the conversation did
not read it.

**5. A community release summary inverted the direction of the headline gateway
change.** The 2026-07-26 v0.19 write-up describes Hermes as offering shared
memory and identity across platforms. The release's actual gateway change is
per-profile isolation of config, skills, memory and secrets on one shared bot
token (#64835). Sharing and isolation are opposite operator postures, and the
summary picked the wrong one.

**6. The pain cluster has a receipted counterweight, and an unreceipted
correlation that must not be published as cause.** Against the reliability
complaints (Telegram gateway crash, WSL2 `state.db` corruption, self-break
reinstall, stuck macOS installer), `v2026.7.20` shipped a durable
delivery-obligation ledger closing a P1 silent-loss window on every messaging
channel (PR #67181, merged 2026-07-19T07:45:32Z), plus sandbox credential-mount
and live-transcript redaction fixes (#67640, #67635, both merged
2026-07-20T13:50Z). Separately and strictly as sequence: that ledger writes to
`state.db`, it shipped 2026-07-20, and a `state.db` WAL corruption report
appeared 2026-07-25. No primary connects them and this cross-check asserts no
connection.

**7. Adoption chatter and practitioner experience disagree about memory, and
neither has a receipt.** Tutorial and showcase posts sell memory as the selling
point while a same-window practitioner calls memory and context recovery the
core unsolved problem. The tension is real and stays unresolved; nothing in the
primary record adjudicates it.

## Claim-by-claim

| claim_id | verdict | primary receipt | note |
|---|---|---|---|
| `hermes-agent-2026-07-08-cloud-portal-launch` | unconfirmed | none | Nous Portal, org controls and unified billing sit outside the harvested surface, which is repo-scoped. Nothing confirms or contradicts. Stays a lead. |
| `hermes-agent-2026-07-10-desktop-cloud-autoconnect` | unconfirmed | none | Desktop app is a separate artifact with no channel of record in this harvest. |
| `hermes-agent-2026-07-09-gpt-5-6-portal` | unconfirmed | none | Model-catalog claim against a hosted surface we do not hold receipts for. |
| `hermes-agent-2026-07-16-kimi-support` | unconfirmed | none | The maintainer's own "an update is needed for direct" is a stated gap and publishable as conversation; the routing matrix itself is unreceipted. |
| `hermes-agent-2026-07-16-raft-1-0-support` | unconfirmed | none | Raft 1.0 identity and support surface both unresolved. |
| `hermes-agent-2026-07-19-async-subagent-visibility` | partial | https://github.com/NousResearch/hermes-agent/pull/67479 (merged 2026-07-19T17:29:15Z, `behind` `v2026.7.20`) | Reading and probing subagent activity is confirmed: `delegate_task` dispatches return live per-child transcript files carrying every tool call, result and streamed reply. Shutdown control and "check direction" are not receipted. See "The conversation knew first". |
| `hermes-agent-2026-07-19-desktop-tool-backend-fixes` | unconfirmed | none | Desktop release notes are outside the harvested surface. |
| `hermes-agent-2026-07-20-grows-with-user-portal` | social_fact | post is the receipt | Commercial positioning. Publishable as what Nous is selling, never as capability. |
| `hermes-agent-2026-07-22-portal-models-discount` | social_fact | post is the receipt | A promo was announced. Scope, duration and eligibility are not receipted; a post is not a price card. |
| `hermes-agent-2026-07-22-teknium-cloud-sovereignty` | social_fact | post is the receipt | Maintainer commercial intent, echoing earlier sovereignty framing on 2026-07-04. Intent, not economics. |
| `hermes-agent-2026-07-24-ironproxy-credential-firewall` | partial | https://github.com/NousResearch/hermes-agent/pull/70848 (merged 2026-07-24T16:49:01Z, `ahead` of `v2026.7.20`); revert https://github.com/NousResearch/hermes-agent/pull/58489 (merged 2026-07-04T20:41:25Z, `behind` `v2026.7.20`) | Mechanism confirmed exactly: per-provider stand-in proxy tokens under standard env names, swapped for real credentials by a boundary daemon, fail-closed with `proxy.enabled: true` and `enforce_on_docker`. Availability is the opposite of implied: the feature is `main-unreleased`, disabled by default, and the tag carries the revert. Divergence 3. |
| `hermes-agent-2026-07-24-claude-opus-5-providers` | unconfirmed | none | No Hermes receipt. Ecosystem context only: Pi shipped Opus 5 on Anthropic and Bedrock in `v0.82.1` on 2026-07-25T12:47:23Z. |
| `hermes-agent-2026-07-25-compaction-streaming-timeout` | unconfirmed | none | Backend streaming and non-dynamic timeout are unreceipted. High-value if a commit surfaces, because it is a stated fix for a stated pain. |
| `hermes-agent-2026-07-26-mcp-progressive-disclosure` | unconfirmed | none | Nothing in the harvest covers progressive tool disclosure. The internal-test accuracy and token-savings figures are rejected under `benchmark_claim_without_method` regardless of whether the mechanism lands. Plausibly inside the 1712 unenumerated `main` commits (`compare/v2026.7.20...main`). |
| `hermes-agent-2026-07-14-plugins-tracking-issue` | social_fact | post is the receipt | Roadmap intent. The linked issue is the primary surface and was not resolved in this pass. |
| `hermes-agent-2026-07-26-user-stories-docs` | unconfirmed | none | Docs URL unresolved; canonical docs domain remains a contract open question. |
| `hermes-agent-2026-07-10-sol-terra-pr-review-bench` | social_fact | post is the receipt | Maintainer model-preference chatter. Rejected as evaluation evidence under `benchmark_claim_without_method`: five PRs, no published method, LLM judge. |
| `hermes-agent-2026-07-21-proagentbench-dispute` | social_fact | post is the receipt | A public exchange, fully receipted as an exchange. Scores unverified and rejected as evaluation evidence; the maintainer's counter-claim that the eval's Hermes system prompt defaults to silence is itself unreceipted. Material fact about the conversation: the table was revised three days later (Raven 0.715, OpenClaw 0.682, Hermes 0.579), moving all three numbers substantially. Conduct language from the exchange stays journal-only. |
| `hermes-agent-2026-07-23-head-to-head-openclaw-userbench` | social_fact | post is the receipt | Community comparison discourse. No method package; not evaluation evidence. |
| `hermes-agent-2026-07-20-stale-installer-remote-friction` | unconfirmed | none | Installer artifact unreceipted. Bounded context: on 2026-07-20 the newest tag was `v2026.7.7.2` (v0.18.2) until v0.19.0 published at 18:35:55Z, so an installer at 0.17 would be at least one minor behind. That arithmetic is context, not confirmation. |
| `hermes-agent-2026-07-25-macos-desktop-remote-install-stuck` | unconfirmed | none | Referenced GitHub issues unresolved in this pass. |
| `hermes-agent-2026-07-25-docker-cli-permission-auth-rewrite` | unconfirmed | none | Filesystem ownership across Docker and host, not an approval-gate claim. Nearest receipted neighbour (#67640, master credential stores never mounted into skill sandboxes) is a different boundary. |
| `hermes-agent-2026-07-26-telegram-gateway-crash` | unconfirmed | none | Crash-on-unstable-network is unreceipted. Counterweight, receipted: PR #67181 (merged 2026-07-19T07:45:32Z, in `v2026.7.20`) means a gateway death no longer silently discards an already-paid-for reply. That mitigates the consequence, not the crash. |
| `hermes-agent-2026-07-25-sqlite-wal-state-db-corruption` | unconfirmed | none | No WAL fix in the harvest. Sequence only, no causal claim: `v2026.7.20` (2026-07-20) added a durable delivery-obligation ledger in `state.db` (#67181); the corruption report is 2026-07-25. Highest-priority reliability lead to resolve against issues. |
| `hermes-agent-2026-07-22-self-break-reinstall-openclaw-compare` | unconfirmed | none | Single anecdote about self-modification breaking an install. The OpenClaw comparison inside it is sentiment. |
| `hermes-agent-2026-07-19-subagent-durability-gap` | partial | https://github.com/NousResearch/hermes-agent/pull/63494 (merged 2026-07-13T14:28:22Z, `behind` `v2026.7.20`) | Durability half confirmed precisely: background delegation completions survive process restart and are redelivered through an ownership-checked ledger. The non-resume half is consistent with the receipted scope -- the fix covers completions, not in-flight runs -- but is not affirmatively receipted. Strongest field case in "The conversation knew first". |
| `hermes-agent-2026-07-25-discord-channel-binding-limits` | refuted | https://github.com/NousResearch/hermes-agent/pull/64835 (merged 2026-07-15T16:50:07Z) and https://github.com/NousResearch/hermes-agent/pull/65700 (merged 2026-07-16T14:17:56Z), both in `v2026.7.20` published 2026-07-20T18:35:55Z | The claim that Hermes cannot bind separate agents to separate channels is contradicted: one multiplexed gateway on a single bot token routes specific guilds, channels or threads to different profiles, each with isolated config, skills, memory and secrets, and the capability was in a tag five days before the post. Narrowing: the "always creates threads" sub-claim is unaddressed by these receipts, and the related RBAC friction citing long-open issue #527 is unresolved. |
| `hermes-agent-2026-07-19-credentials-in-memory-pr` | unconfirmed | none | The specific path (prose-form credentials into persistent memory, then model context) is unreceipted. Corroborated in kind only: Hermes shipped several fixes for credentials reaching model-visible surfaces in the window (#67635 live-transcript redaction, in `v2026.7.20`; #69054 stop printing secret names, `main-unreleased`). Open lead, identity not established: PR #67776 ("stop masking prose words that merely embed a secret keyword", merged 2026-07-27T03:59:12Z, `main-unreleased`) sits in the same prose-secret code area and in the PR-number range opened around 2026-07-19, but its stated effect is the opposite direction -- reducing over-masking, not closing a leak. Do not treat as the same PR without confirmation. |
| `hermes-agent-2026-07-26-memory-context-recovery-pain` | social_fact | post is the receipt | Practitioner judgment that memory and context recovery are the core unsolved problem. Counterweight in the same window: adoption posts sell memory as the differentiator. Divergence 7. |
| `hermes-agent-2026-07-26-desktop-local-deps-complaint` | unconfirmed | none | Desktop packaging footprint unreceipted. |
| `hermes-agent-2026-07-05-community-review-200k-stars-showcase` | unconfirmed | none | The 200K GitHub stars figure has no receipt in this harvest and is the single highest-priority number to resolve or kill: it is quoted onward as adoption evidence. The feature descriptions (memory, skills, cron, sub-agents, plain-text skills without embeddings) are secondhand and unreceipted. |
| `hermes-agent-2026-07-06-alexfinn-learn-journey-moa` | unconfirmed | none | Mixture of Agents, `/learn`, `/journey` and a named model profile appear nowhere in the harvested primary record. Non-maintainer feature list; do not promote any item. |
| `hermes-agent-2026-07-26-vps-daytona-modal-telegram-ops` | partial | https://github.com/NousResearch/hermes-agent/pull/67181 (merged 2026-07-19T07:45:32Z, in `v2026.7.20`) | Messaging-gateway operation including Telegram is receipted, and the durable ledger is what makes a detached always-on setup survive a gateway death without losing replies. VPS, Daytona and Modal hosting are unreceipted; this is a user report of a working setup, not a support matrix. |
| `hermes-agent-2026-07-26-third-party-repo-eval-risk` | unconfirmed | none | Quality and safety allegations about a third-party repo, not the official tree. Journal-only under the reputational-claims rule: not publishable, and the repo is not named here, without a direct primary receipt for the exact allegation. |
| `hermes-agent-2026-07-26-community-v0-19-gateway-cron` | partial | https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.20 (published 2026-07-20T18:35:55Z); gateway work https://github.com/NousResearch/hermes-agent/pull/67181, https://github.com/NousResearch/hermes-agent/pull/64835 | v0.19.0 exists and gateway work is real. Cron latency is unreceipted. The "shared memory and identity across platforms" framing is backwards against the release's actual gateway change, which is per-profile isolation of config, skills, memory and secrets. Divergence 5. |
