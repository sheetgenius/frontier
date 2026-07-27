# Cross-check -- agent-zero

Fifteen social claims, adjudicated against `harvest/agent-zero.primary.md`.
Agent Zero has the cleanest channel discipline in the harvest and the
conversation inherits that cleanliness: `compare/v2.6...main` returns
`status=identical, ahead_by=0, behind_by=0`, so `main` is a released version by
construction and there is no window in which it carries unshipped fixes. Every
version string the official account published -- `v2.3`, `v2.4`, `v2.5`, `v2.6`
-- resolves to a real tag, and the announcements land 8 to 18 minutes after the
tag publishes, four times out of four. That is a source whose claims an operator
can actually check, and it deserves the credit. The failure is subtractive
rather than false. Not one post in the entire window mentions secret masking,
and the v2.6 summary that circulated reproduces five additions while dropping
the one v2.6 change that removed protection: masking of `usr/.env` values, added
whole in v2.5, was deliberately narrowed in v2.6 to API-key and login/password
shapes, so a webhook URL, an internal hostname, or a licence string sitting in
`usr/.env` is no longer redacted from agent output. Meanwhile the crowd spent
the window arguing about Docker's weight while the two changes that actually
moved the isolation boundary -- host access leaving the Core WebUI for the
Launcher, and BYOB pointing the agent at the operator's real host browser with
its live sessions and cookies -- went undiscussed.

Verdict counts: confirmed 1, partial 4, refuted 0, unconfirmed 5, social_fact 5
(n=15).

## The conversation knew first

**Empty, for a measurable and rather striking reason.** Agent Zero's official
account posts after its own tags with metronomic consistency:

| tag | published (UTC) | announcing post (UTC) | lag |
|---|---|---|---|
| `v2.3` | 2026-07-09T16:52:23Z | 2026-07-09T17:10:13Z | 17m 50s after |
| `v2.4` | 2026-07-10T18:09:44Z | 2026-07-10T18:27:22Z | 17m 38s after |
| `v2.5` | 2026-07-17T16:36:06Z | 2026-07-17T16:53:19Z | 17m 13s after |
| `v2.6` | 2026-07-23T18:22:57Z | 2026-07-23T18:31:32Z | 8m 35s after |

(Post times decoded from X status snowflakes; the decoder was validated against
four independently recorded GMT timestamps elsewhere in this run and matched to
the second.)

No community claim runs ahead of a receipt either. The underlying commits are
older still: BYOB landed 2026-07-04 and was announced 2026-07-09; the Launcher
host-gateway sequence ran 2026-07-14 to 2026-07-17 and was announced
2026-07-17. On Agent Zero, the tag is the news and X is the distribution.

## Divergences

**1. The subtraction is invisible.** `v2.5` (commit `55456df29`, 2026-07-17)
added masking of runtime `.env` values across tool results, history, logs, and
streamed output. `v2.6` (commit `fd795bda8`, 2026-07-19, "Limit runtime secret
redaction to credentials") narrowed it to API keys and login/password
credentials, because blanket masking was corrupting ordinary chat text. Global
and project secrets stay fully protected; `usr/.env` values that are not
credential-shaped do not. The circulating v2.6 summary
(`agent-zero-x-20260723-v26-release-launcher`) lists five items and this is not
among them. A grep of the whole agent-zero social file for `mask`, `redact`,
`secret`, and `.env` returns **zero hits**. The conversation reproduces feature
lists; it does not reproduce retractions.

**2. The crowd argued about Docker while the isolation boundary moved the other
way.** Three claims run the packaging debate
(`...docker-wsl-pain`, `...maintainer-wsl-launcher-reply`,
`...docker-pi-adoption-pattern`): container weight versus container isolation.
The primary shows the real in-window movement elsewhere. `v2.3` added BYOB host
browser selection (commit `7298a88fd`), which lets the agent drive Chrome,
Brave, Opera, Vivaldi, or a Chromium-family browser **running on the host** --
inheriting that browser's live sessions, cookies, and logged-in accounts.
`v2.5` deleted the Core WebUI gateway menu (commit `4b0c575f0`) and made A0
Launcher the sole owner of host access, with read/write/exec file scoping and
Computer Use approval routing. One is a hole punched through the container for
convenience; the other is genuine privilege separation. Neither was discussed.
The maintainer's WSL/Launcher reply is, incidentally, well-founded product
direction rather than deflection -- Launcher really did become the host-access
owner in `v2.5`.

**3. Benchmark discourse dominates the tail of the window and none of it is
method-bearing.** Four claims (`...codex-token-efficiency-community`,
`...claude-code-webos-benchmark`, `...context-engineering-container-first`,
`...benchmark-skepticism-branding`) cluster in a 12-hour span on 2026-07-25,
including a vendor-published comparison. No prompts, no logs, no reproduction.
The one durable thing inside the cluster is architectural, not numeric: the
maintainer's "container work is first-class, local files are remote" framing,
which the primary independently corroborates through the v2.3 BYOB and v2.5
Launcher designs. Take the architecture, leave the token counts.

**4. Two claims of the window sit against the record without contradicting it.**
The community token-efficiency post credits "selective/delta context rather than
full-history resend". The only in-window context receipts point the other way or
sideways: skills moved from scope-wide prompt pins into chat history (`v2.3`),
which makes skill text age out of the window like any other message, and
compaction became resumable and secret-safe (`v2.6`). Neither is a delta-context
mechanism. This is a gap in the record, not a refutation, and it is the right
next probe.

**5. Namespace collision is real and worth one line.** The maintainer twice
corrected an attribution of Agent Zero CLI work to a differently-branded "Zero"
product. Publishable as conversation. It also means benchmark claims about
"Zero" circulating outside the official account cannot be assumed to be about
this project.

**6. Nobody names the stale branches, which is lucky rather than wise.** `ready`
is the only live preview surface at 7 commits ahead of `main`; `development` is
220 commits behind and `testing` is 676 behind. An operator who found those
branch names in a search would reasonably read them as preview channels. The
conversation never mentions them, so it never misleads -- but it also never
warns.

## Claim-by-claim

| claim_id | verdict | primary receipt or "none" | note |
|---|---|---|---|
| `agent-zero-x-20260709-orchestrator-v23` | partial | `v2.3` published 2026-07-09T16:52:23Z, tag commit `3bb40576a`; built-in `_orchestrator`, `_commands`, `_goal` plugins (harvest sec. 9); BYOB commit `7298a88fd` 2026-07-04 (sec. 2) | Orchestrator plugin, BYOB host-browser selection, and the `/goal` slash command are all confirmed in `v2.3`. "Live browser screencast" has no primary receipt. Post trails the tag by 17m50s. |
| `agent-zero-x-20260710-orchestrator-v24` | partial | `v2.4` published 2026-07-10T18:09:44Z, tag commit `fddcc3dee` (harvest sec. 9, 6a) | Gemini CLI as a registered orchestrator backend with auth detection and headless workflow: confirmed. Codex CLI as a backend: confirmed (v2.4 refreshes an existing Codex CLI install after self-update). Runaway-loop protection: confirmed as a configurable circuit breaker on consecutive malformed or repeated outputs. OpenCode, Hermes, and the NIM provider have no receipt here. |
| `agent-zero-x-20260717-launcher-v25-local-files` | confirmed | `v2.5` published 2026-07-17T16:36:06Z; commits `dafe5a33b`, `df6065d5b`, `3271ff43e`, `b11a57424`, `38a594544`, `4b0c575f0` (harvest sec. 3) | Every element checks out: opt-in bridge from sandbox to host desktop, files, and browser; read/write/exec permission scoping; Computer Use approval routing; reconnect and disconnect lifecycle. The primary adds what the post omits -- the Core WebUI gateway menu was deleted, so the Launcher is now the only in-product path to grant or revoke host access. |
| `agent-zero-x-20260721-browser-extensions` | unconfirmed | none | Chrome Web Store extension use and extension authoring via a bundled skill: no primary either way. BYOB (sec. 2) is adjacent but does not cover extensions. Stays a lead. |
| `agent-zero-x-20260723-v26-release-launcher` | partial | `v2.6` published 2026-07-23T18:22:57Z, tag commit `391fab946`; compaction commit `425cfc283` 2026-07-18 (sec. 5); misformat repair (sec. 10) | Version, resumable chat compaction, and the JSON tool-misformat fix are confirmed -- malformed response arguments now raise a repairable exception instead of a `KeyError`, and fenced or structurally broken tool intent routes through the misformat repair path. Accessibility / Computer Use permission staging, CLI long-chat rendering, and slash-command palette improvements have no primary receipt. The list omits the v2.6 narrowing of `usr/.env` redaction. |
| `agent-zero-x-20260723-fast-linux-containers` | unconfirmed | none | Sub-100ms container spawn and footprint figures: no method, no primary. Do not promote as a performance claim. |
| `agent-zero-x-20260723-docker-wsl-pain` | social_fact | none (post is the receipt) | User-pain report about Docker resource weight. Real as sentiment; single operator. |
| `agent-zero-x-20260723-maintainer-wsl-launcher-reply` | social_fact | none (post is the receipt); context: Launcher owns host access from `v2.5` (sec. 3) | Receipt for what a maintainer-associated account said in a public exchange. The direction it points is independently supported: Launcher genuinely became the host-access owner in `v2.5`. The WSL path itself is unreceipted. |
| `agent-zero-x-20260724-codex-token-efficiency-community` | unconfirmed | none | 239k versus 627k token comparison and the "selective/delta context" explanation: no method-bearing primary, and no in-window receipt describes such a mechanism. Publishable only as "a comparison circulated", never as a measurement. |
| `agent-zero-x-20260725-claude-code-webos-benchmark` | unconfirmed | none | Vendor-published same-model comparison, ~59.7k versus ~80.3k tokens. Checkable in principle, unchecked in fact; no prompts, logs, or reproduction. The act of publishing it is a social fact; the numbers are not. |
| `agent-zero-x-20260725-context-engineering-container-first` | partial | BYOB commit `7298a88fd` in `v2.3` (sec. 2); Launcher host-access model in `v2.5` (sec. 3) | The container-first architecture claim is independently corroborated: in-container work is the default surface and host access is an explicitly leased, scope-limited exception. "Local files as remote" is the maintainer's characterization, not a receipted design statement. The self-caution about a demo-friendly benchmark is stated intent. |
| `agent-zero-x-20260725-benchmark-skepticism-branding` | social_fact | none (post is the receipt) | Counterweight opinion that the underlying model does the work. Publishable as conversation; carries no product claim. |
| `agent-zero-x-20260707-install-oneliners` | unconfirmed | none | Install one-liners point at `agent0ai/a0-install`, a repository this harvest did not probe. Script contents and trust model unverified. Do not run from this lead. |
| `agent-zero-x-20260724-attribution-confusion-zero-cli` | social_fact | none (post is the receipt) | Maintainer correction of a misattribution in a circulating comparison video. Useful as evidence that "Zero"-branded benchmark claims are ambiguous; not a capability receipt. |
| `agent-zero-x-20260726-docker-pi-adoption-pattern` | social_fact | none (post is the receipt) | Adoption pattern: containerized teams driving external devices over SSH. Single-source, and the direct counterweight to the Docker-pain thread. |
