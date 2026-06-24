# R&D Journal — Deep X/Social Research Loop

Run: `2026-06-24-x-social-harvest-2026-06-24-frontier-v0`

This journal records the editorial loop used to turn public X/social material
into Frontier research context. It is not a digest and does not promote any
claim into findings, signals, or profiles.

## 2026-06-24 — Loop Setup

Objective: make the journal more grounded in the public conversation around
agentic coding frameworks while keeping runtime independent from X and keeping
the evidence floor intact.

Implemented site affordance:

- Static social receipt cards stored in `social-cards/*.yml`.
- Cards render from repo data only.
- Each card links to the source post but does not load embeds, scripts, or media
  from X at runtime.
- Cards distinguish the receiptable social fact from the claim inside the post.

## Scout Pass 1

The first scout pass returned several interesting clusters:

- Hermes versus OpenClaw momentum, reliability, and maintenance-tax discourse.
- A harness-comparison thread arguing that tooling/context can matter more than
  the underlying model.
- Paperclip as a possible orchestration layer for mixed agent fleets.
- Shared skill packs as cross-harness operating discipline.
- A Bitter self-positioning post.

Editorial response:

- Do not use inferred dates in cards.
- Do not quote paraphrases as if they are verbatim tweet text.
- Do not put tracker-account metrics on card faces unless the numbers are
  checked against primary sources.
- Do not include Bitter self-positioning as Frontier analysis. The method keeps
  the publisher's own product out of the analysis; at most this could be a
  disclosure note, not a research card.
- Do not convert a single post into multiple apparent signals.
- Keep drama and public exchanges as ecosystem context unless direct reply-chain
  receipts are reconstructed.

## Critic Pass

The critic pass rejected all loose scout items as card-ready because they lacked
exact dates, conflated paraphrase with quotation, or overstated metric and
adoption claims. The useful gate that came out of the critique:

> The card receipts that a public post exists on a date. The claim inside the
> post remains unverified until the relevant source contract supports it.

That gate now governs the card set.

## Editor Pass

The first committed card set uses only exact-dated items already present in the
structured harvest or a later exact-date scout pass:

- Hermes `/learn` official post.
- OpenClaw/Hermes public-tension context.
- OpenHands ACP official post.
- Codex token-budget post with a public release-tag secondary receipt.
- Claude Code community changelog post for v2.1.187.
- Gemini CLI Antigravity transition notice.
- Agent Zero governance-vote post.
- Paperclip Maximizer-mode maintainer-intent post.

Every card is framed as social context, maintainer intent, or a candidate claim
that still needs source-contract verification. No card says a capability is true
merely because it was posted on X.

## Open Research Loops

- A third strict scout pass looked for additional exact-date cards and
  disconfirming/counter-evidence. It found no additional items that cleared the
  exact-date and direct-source gate. The unresolved items below remain research
  tasks, not card material.
- Reconstruct the OpenClaw/Hermes exchange from direct participant posts before
  drawing any governance or motive conclusion.
- Cross-check OpenHands ACP support against docs, release notes, and commits.
- Cross-check Paperclip Maximizer mode against product docs or code before
  treating it as shipped.
- Verify Codex token-budget behavior from release notes and, ideally, a local or
  documented behavior probe.
- If using growth metrics, source them from GitHub or another primary/public
  metrics surface at a stated timestamp, not from tracker tweets.
- Search for disconfirming posts: OpenClaw maintainer replies, failed Hermes
  migrations, or user pain on the favored side of any comparison.

## Drama / Code Follow-Up Pass

The follow-up scout focused on drama leads and then checked public code,
release, PR, and changelog receipts for each lead.

Editorial results:

- OpenClaw/Hermes governance and funding tension remains journal-only. Hermes
  found direct participant URLs, but the pass did not return complete
  `created_at` timestamps or enough reply-chain structure to promote the item
  beyond social context.
- Gemini Antigravity is now source-backed for the narrow transition/migration
  claim: Gemini CLI v0.47.0 includes merged PRs for Antigravity transition
  banner behavior and migration commands/docs. This does not verify social
  claims about a hard cutoff, closed-source impact, or quota pain.
- Claude Code v2.1.187 is source-backed for the release-note subset listed in
  the community tracker post. The official changelog supports sandbox
  credentials, resume repair, and remote MCP timeout handling. This receipt is
  not reusable for unrelated Claude Code controversy claims.
- OpenHands ACP is partially source-backed. Release 1.8.0 and PR #14401 verify
  ACP UI/preset/routing work, but not every Agent Canvas, SDK, and cloud surface
  named in the social post.
- Paperclip Maximizer mode remains maintainer intent only. The in-window
  release verifies adjacent interop and reliability work around OpenClaw Gateway
  and Hermes custom providers, but does not mention Maximizer mode.
- OpenClaw reliability complaints should be read with counterweight: v2026.6.10
  and linked PRs show active fixes in model routing, channel/session state, and
  trusted-policy hook composition. The release verifies real bug classes and
  active remediation, not a simple "broken" narrative.

The durable record for this pass is `verify/drama-code-followup.md`. It maps
each receipt to the exact claim it supports so a later editor cannot let a real
source receipt validate a different social claim in the same project.

## Editorial Standard

Make the public conversation visible without becoming gossip:

- title the card as a catalog label, not a verdict;
- keep excerpts short and only verbatim when verified;
- show status and caveats on the card face;
- use drama to identify governance questions, not to assign motives;
- require a later source-contract pass for any product/version/capability claim.
