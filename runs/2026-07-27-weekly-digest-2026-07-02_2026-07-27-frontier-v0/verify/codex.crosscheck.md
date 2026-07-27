# Cross-check -- codex

Window: 2026-07-02 to 2026-07-27. Adjudicated 2026-07-27.

Inputs: `social/codex.raw.md` (20 claims) against `harvest/codex.primary.md`
(33 findings, receipts pinned, channel resolved by git ancestry against the
`openai/codex` tag graph).

Governing rule: a post is a receipt for what was said, never for what is true.

On the releases themselves the conversation was accurate and fast, and it was
accurate because it was not actually first -- the five `@CodexReleases` posts
carrying the most detail land 2 to 7 minutes after the GitHub release they
summarize, so what reads as scoop is a mirror with a lag. Every version-and-
feature claim in that set checks out against the tag graph: the `writes`
app-approval mode, MCP auth elicitation without an experimental opt-in, expanded
forced-`rm` detection, the Guardian auto-review revert, multi-agent v2 going
stable, the `/import` expansion, the desktop merge, app build 26.715. What none
of the 20 claims mentions is a single authority change from those same releases:
`rust-v0.145.0` rewriting `rules/default.rules` on first session start, the
removal of "don't ask again" for full access, denial text reaching the model,
plugin hooks recorded as trusted after a catalog refresh, or the fact that the
entire network-authority hardening wave sits on `rust-v0.146.0-alpha` and is in
nothing you can install with `@latest`. The conversation led the record exactly
once, and it was a maintainer describing server-side behavior the shipped binary
had not caught up to yet. The loudest security claim in the set -- seven sandbox
escapes across four products -- is unsourced in the direction it points and blind
in the direction it does not.

**Verdict key.** `confirmed` -- a primary receipt supports the claim as bounded,
with any unbacked detail named in the note. `partial` -- the primary supports
part of it and a decision-bearing part must be narrowed or dropped. `refuted` --
a primary receipt contradicts it. `unconfirmed` -- no primary either way; still a
lead. `social_fact` -- the claim is about the conversation itself (sentiment,
adoption, stated intent, a public exchange); the post is the receipt for that and
for nothing else. Receipts cite the harvest section number plus the tag, PR, or
probe; full URLs are in `harvest/codex.primary.md`.

Buckets: 3 confirmed, 9 partial, 1 refuted, 4 unconfirmed, 3 social_fact.

## The conversation knew first

One case clears the bar.

**GPT-5.6 Sol context window at 272,000 tokens. Post leads receipt by 5 days.**

- Post: 2026-07-13, `@thsottiaux`,
  <https://x.com/thsottiaux/status/2076495156757577895>
  (claim `codex-2026-07-13-maintainer-usage-context-multiaagent`). Describes a
  temporary context-limit revert from 372k to 272k for GPT-5.6 Sol after
  unintended usage drain.
- Receipt: 2026-07-18, `rust-v0.144.6`, which refreshed bundled instructions for
  GPT-5.6 Sol, Terra, and Luna and "corrected their context windows to 272,000
  tokens" (PRs #33972, #34009).
  <https://github.com/openai/codex/releases/tag/rust-v0.144.6>
- Interval: **5 days.**
- Why it counts: same number, same models, same direction. The post explains a
  change the release note only records. An operator who read X on 2026-07-13
  re-derived their prompt and compaction budget five days before the shipped
  binary agreed with them, and the release note alone would never have told them
  the 272k figure was a revert rather than a correction.

### Considered and declined

Recorded so the next window does not re-litigate them.

- `codex-2026-07-09-desktop-merge-computer-use` (2026-07-09) versus multi-folder
  local projects in the 2026-07-23 changelog entry -- 14 days. Declined: the post
  says "multi-repo project support" inside a summary of that day's release, with
  no detail tying it to the primary-folder mechanics the later entry describes.
  This reads as mis-attribution, not foresight. Filed under Divergences instead.
- `codex-2026-07-10-subagent-model-routing-pain` (2026-07-10) versus sub-agent
  model overrides in `rust-v0.145.0` (2026-07-21) -- 11 days. Declined: the
  release adds a control, it does not confirm the bug. PRs #32749 and #32751 make
  sub-agent models configurable and restrict them to the active backend; neither
  note says spawned subagents were being forced onto Sol.
- "Multi-agent over-use on high/xhigh being fixed" inside the 2026-07-13
  maintainer post, versus configurable sub-agent reasoning and concurrency in
  `rust-v0.145.0` (2026-07-21) -- 8 days. Declined: maintainer forward intent
  landing on an adjacent receipt, not an identical one.
- All five `@CodexReleases` version posts post-date their own receipt.
  `rust-v0.143.0` published 01:31:10Z, post 01:33:36Z. `rust-v0.144.0` published
  16:47:12Z, post 16:51:49Z. `rust-v0.144.5` published 02:54:48Z, post 02:57:02Z.
  The `0.144.2` revert merged 04:39:22Z, post 04:45:07Z. `rust-v0.145.0`
  published 18:21:04Z, post 18:27:37Z. Two to seven minutes, every time. This is
  the opposite of a lead and worth saying plainly: the tracker lane buys latency,
  not foresight.

## Divergences

**D1. The conversation's `rust-v0.145.0` has no exec-policy rewrite in it.**
`codex-2026-07-21-cli-0-145-multiaagent-v2-stable` is the most detailed social
account of the biggest release in the window, and it is a feature list: multi-
agent v2 stable, `/import`, paginated history, audio V3. The primary record
(harvest #21, PR #34271) says the same release removes exact `allow` entries from
your `rules/default.rules` on the next session start, writes `.sandbox_migration`
so it happens once, and deletes the legacy exec policy engine outright. Zero of
20 claims mention it. An operator upgrading on the strength of the social summary
gets their sandbox policy file edited without being told to back it up.

**D2. The network-authority wave is preview-only and nobody said so.** Harvest
#27 pins eleven network and proxy hardening PRs (#34590 through #35267) as
ancestors of `rust-v0.146.0-alpha.10.1` and of no stable tag. The conversation
neither claims this shipped nor notes that it did not -- it simply does not exist
in the social record. The gap matters because the same conversation is loudly
worried about sandbox containment (D3). The containment work that would answer
that worry is on an alpha channel, and no one reading X in July would know.

**D3. Seven sandbox escapes, zero receipts, and the product left off the list.**
`codex-2026-07-25-sandbox-escape-chatter` reports seven sandbox escapes across
Cursor, Codex CLI, Gemini CLI, and Antigravity. For the Codex leg the primary
record contradicts the "reported" framing: zero GitHub Security Advisories were
published on `openai/codex` in the window, the repository's only advisory remains
GHSA-w5fx-fh39-j5rw from 2025-09-19, and no Codex primary surface in the window
discloses an escape -- the sandbox work on stable is hardening (#14 forced `rm`,
#22 Windows sandboxing into the exec server), not incident response. Meanwhile
the product missing from the list, Claude Code, shipped five distinct isolation-
escape fixes in eleven days (`v2.1.210`, `v2.1.212`, `v2.1.216` twice,
`v2.1.217`), also with zero advisories. The crowd was counting, and counting in
the wrong place, while the escapes it could have proved sat in a changelog.
Adjudicated here only for the Codex leg; Cursor, Gemini CLI, and Antigravity are
other sources' harvests.

**D4. A shared config workaround with an eleven-day shelf life.** The
`~/.codex/config.toml` snippet under `features.multi_agent_v2` circulating on
2026-07-10 was superseded on 2026-07-21, when `rust-v0.145.0` unified multi-agent
settings under an `agents` key (harvest #16, PR #33550). Anyone who copied the
snippet and upgraded is now editing a key that moved. Crowd workarounds do not
carry a deprecation clock; release notes do.

**D5. Multi-folder projects attributed to the wrong date by fourteen days.**
`codex-2026-07-09-desktop-merge-computer-use` credits the 2026-07-09 desktop
merge with multi-repo project support. The changelog entry of 2026-07-09 lists PR
Chat, direct Markdown and code editing, custom domain support for Sites, faster
Computer Use with GPT-5.6, and clearer full-access warnings. Multi-folder local
projects are in the 2026-07-23 entry (harvest #26). Operators reading X in early
July would have gone looking for a feature that was two weeks away.

**D6. A security product in a window with no security advisories.**
`codex-2026-07-17-openai-codex-security-plugin` has OpenAI directing users to a
Codex Security plugin off the back of a cyber-range result, on 2026-07-17. In the
same window `openai/codex` published no advisory and shipped its one unambiguous
command-safety fix -- expanded forced-`rm` detection in `rust-v0.144.5` -- as a
release-note line with no CVE and no GHSA (harvest #14, #8). The same inversion
holds on the other side of the watchlist: Anthropic announced a Claude Security
plugin beta on 2026-07-22 across a window with zero advisories and eight
authority-repairing releases. Both vendors shipped security as a product while
publishing nothing through the channel a patch process actually listens to.

## Claim-by-claim

| claim_id | verdict | primary receipt | note |
| --- | --- | --- | --- |
| codex-2026-07-09-openai-chatgpt-work | partial | harvest #26 -- changelog `#codex-2026-07-09-app` | Desktop merge on macOS and Windows confirmed, same day, interval 0. "ChatGPT Work is a new agent powered by Codex and GPT-5.6" has no primary; plan eligibility unconfirmed. Publish the merge, not the product framing. |
| codex-2026-07-09-cli-0-144-approvals-sandbox | confirmed | harvest #9 (PR #30482), #10 (PR #28772), #22 (PRs #31138, #31574) -- `rust-v0.144.0` | All four sub-claims map to release content. Post lands 4m37s after the release publish. |
| codex-2026-07-08-cli-0-143-remote-plugins-mcp | partial | harvest #4 (PRs #30297, #29375), #10 (PR #29733), #15 (PR #30285) -- `rust-v0.143.0` | Remote plugins on by default with npm marketplace sources, hosted-MCP session auth, and Bedrock GPT-5.6 catalog all confirmed. "Defaulted MCP tools to tool search" and "Windows ConPTY/sandbox credential fixes" have no receipt. Post lands 2m26s after publish. |
| codex-2026-07-09-desktop-merge-computer-use | partial | harvest #26 -- changelog `#codex-2026-07-09-app` | PR review surface and faster Computer Use with GPT-5.6 are in the 2026-07-09 entry; note the changelog is a vendor assertion, not a measurement. Multi-repo project support belongs to the 2026-07-23 entry. Plugin management in Settings: no receipt. See D5. |
| codex-2026-07-13-maintainer-usage-context-multiaagent | partial | harvest #15 -- `rust-v0.144.6` (PRs #33972, #34009); harvest #16 -- `rust-v0.144.0` (PR #31621) | 272k context window confirmed 5 days later; this is the knew-first. Ultra-plus-concurrency over-use is corroborated by the in-product warning shipped 2026-07-09. The ~10% usage figure, the 5h limit disable, and auto-review efficiency work are server-side metering with no observable primary surface. |
| codex-2026-07-13-theo-usage-burn-stack | partial | harvest #16 -- `rust-v0.144.0` (PR #31621), `rust-v0.145.0` | Ultra reasoning at high multi-agent concurrency burning usage is confirmed by the warning OpenAI shipped for exactly that combination, but the receipt predates the post by 4 days, so this is the conversation catching up. Context-copy mechanism under multi-agent v2: no receipt. |
| codex-2026-07-10-subagent-model-routing-pain | partial | harvest #16 -- `rust-v0.145.0` (PRs #32749, #32751, #33550) | The gap is real: sub-agent model selection was not configurable until `rust-v0.145.0`. The release adds the control; it does not confirm a bug forcing Sol. The quoted `features.multi_agent_v2` key moved to `agents` on 2026-07-21 -- see D4. |
| codex-2026-07-16-cli-0-144-5-dangerous-command-detection | confirmed | harvest #14 -- `rust-v0.144.5` (PR #33455) | Exact match, including clearer rejection reasons. Post lands 2m14s after publish. Worth carrying: this shipped with no CVE and no GHSA. |
| codex-2026-07-13-cli-0-144-2-guardian-autoreview-revert | confirmed | harvest #13 -- `rust-v0.144.2` (revert PR #32672 of PR #31480) | Confirmed with one correction to the social framing: #32672 is the rollback, and what it rolled back is #31480, shipped in `rust-v0.144.0`. Post lands 5m45s after the revert merge. |
| codex-2026-07-17-openai-codex-security-plugin | unconfirmed | none | No primary in the harvest names a Codex Security plugin or "The Last Ones" cyber range. The marketplace it would install through is confirmed to exist (harvest #4). The post is a receipt that OpenAI said this and nothing more; do not carry the SOTA claim. See D6. |
| codex-2026-07-21-cli-0-145-multiaagent-v2-stable | partial | harvest #16 (PRs #34383, #33550, #32749, #33631, #33657), #17 (PRs #31672, #33411, #33426, #33444), #23 -- `rust-v0.145.0` | Multi-agent v2 stable with configurable models, reasoning, concurrency, and roles: confirmed. `/import` scope including Cursor and Claude Code settings, MCP, plugins, sessions, commands, and project-scoped memories: confirmed, and the primary adds hooks and subagents the post omits. Paginated threads exist (#23, #25) but "experimental paginated thread history" as a named feature and "audio/realtime V3" have no receipt. Post lands 6m33s after publish. See D1 for what this claim leaves out. |
| codex-2026-07-21-mongodb-codex-plugin | unconfirmed | none | No primary for the MongoDB plugin listing or its contents. The enabling mechanism -- a default-on remote catalog with npm sources -- is confirmed on stable since `rust-v0.143.0` (harvest #4), which is the operator-relevant part: third-party plugins now arrive by default, whoever publishes them. |
| codex-2026-07-23-openai-voice-multi-agent-control | partial | harvest #26 -- changelog `#codex-2026-07-23-app` | GPT-Live-powered ChatGPT Voice across Chat, Work, and Codex in the desktop app: confirmed, same day, interval 0. Voice controlling the computer, directing multiple agents, and iOS remote access for Codex: no receipt. Receipt quality is changelog-only; the desktop app ships on a train with no public tag or commit. |
| codex-2026-07-23-app-multi-folder-agents-md-skills | partial | harvest #26 -- changelog `#codex-2026-07-23-app`, build train 26.715 | Multi-folder local projects, the designated primary folder driving chats and Git operations, automatic feature discovery, ChatGPT Voice, and the 26.715 build number are all confirmed. The specific discovery list -- `AGENTS.md`, skills, `config.toml` -- is the post being more precise than the changelog, and an operator would act on that precision. Narrow it or probe it. |
| codex-2026-07-24-insforge-plugin-marketplace | unconfirmed | none | Vendor self-announcement of a marketplace listing. No primary for the listing or its skills. Same standing as the MongoDB claim: the marketplace is real, this entry in it is unchecked. |
| codex-2026-07-16-adoption-vs-claude-limits | social_fact | the post itself | Comparative quota experience. No primary surface publishes per-plan Codex or Claude Code quotas, so this is unfalsifiable by design. Publishable as conversation, never as a quota fact or a benchmark. |
| codex-2026-07-26-parallel-harness-comparison | social_fact | the post itself | One operator's head-to-head with no method, no repository, and no counts. Publishable as sentiment. The reported CLI hangs and 403s are the only piece worth a follow-up probe. |
| codex-2026-07-25-sandbox-escape-chatter | refuted | harvest #8, #14, #22 and "Not found / negative results" -- `gh api repos/openai/codex/security-advisories`, zero in window; newest GHSA-w5fx-fh39-j5rw, 2025-09-19 | Refuted as bounded to the Codex CLI leg: no sandbox escape was reported through any Codex primary channel in the window, and the advisory feed is empty. What is not refuted is that escapes exist in this class of tool -- see D3, where the product left off the list shipped five isolation-escape fixes in eleven days. The count of seven has no source. |
| codex-2026-07-12-browser-account-session-chatter | unconfirmed | none | Chrome cookie and password import for agent browsing is a credential-boundary claim with no primary support in either direction. The nearest receipt is "faster Computer Use with GPT-5.6" in the 2026-07-09 changelog entry, which says nothing about credentials. Do not publish. Probe the desktop app docs before the next window. |
| codex-2026-07-10-maintainer-launch-feedback-not-sunsetting | social_fact | the post itself; corroborated in part by harvest #26 and PR #33901 | "Codex is not going away" is stated intent and the post is its receipt. Corroboration for the surrounding facts: the desktop reorg is in the 2026-07-09 changelog entry, and `rust-v0.145.0` shipped ChatGPT-branded Desktop app build support, so the CLI line kept moving through 2026-07-21. Usage resets, high-compute defaults, and the described plugin issues have no primary surface. |
