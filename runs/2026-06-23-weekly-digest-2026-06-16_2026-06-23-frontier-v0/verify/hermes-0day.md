# Adversarial verification: Hermes Agent "hermes-0day" lede + v0.17.0 carry-forward

Repo: `NousResearch/hermes-agent`. Verified 2026-06-23 against GitHub primary
sources (`gh api`). Method: re-fetched each commit/PR/release; confirmed
committer ISO dates; proved tag membership via `compare` + `merge_base_commit`
(contained iff merge-base == sha). Default skepticism applied.

Latest tag confirmed: **v2026.6.19 is the newest release** (published
`2026-06-19T19:39:06Z`, name "Hermes Agent v0.17.0 (v2026.6.19)"); next is
v2026.6.5 (`2026-06-06`). No newer tag exists.

## Verdict table

| Claim | Verdict | Deciding receipt |
|---|---|---|
| **A** — live in-the-wild hermes-0day MCP-persistence campaign; mitigation commits 06-21/06-22; all main-unreleased | **SUPPORTED on the mechanism + channel; UNCONFIRMED-SINGLE-SOURCE on "live in the wild"** | See A1–A4 below |
| **B** — 4 prior commits now in v2026.6.19, not in v2026.6.5 | **SUPPORTED** | merge-base proof below |
| **C** — v0.17.0 = v2026.6.19, published 2026-06-19, in-window, latest tag | **SUPPORTED** | `published_at: 2026-06-19T19:39:06Z` |
| **D** — default subagent wall-clock timeout removed (#45149); no in-window runaway/wall-clock replacement | **SUPPORTED (with nuance)** | #45149 + in-window PR sweep below |

## Claim A detail

**A1 — commits exist, with verbatim messages.** All 8 SHAs resolve.
Committer dates:
- `7726ce304` committer `2026-06-22T02:05:27Z` — `fix(security): close hermes-0day MCP-persistence attack surface`
- `f45ace931` committer `2026-06-22T02:05:27Z` — `feat(security): startup security posture audit (warn-on-load)`
- `8fcb8136b` committer `2026-06-21T23:39:48Z` — `fix(security): harden smart approval guard against prompt injection`
- `6f0ecf37d` committer `2026-06-21T21:08:06Z` — `fix(redact): mask all Authorization schemes and x-api-key style headers`
- `100e7be20` committer `2026-06-22T21:26:48Z` — `fix(security): deny root-level credential stores in media delivery`
- `a9c802598` committer `2026-06-21T20:33:48Z` — `fix(approval): honor interrupt in blocking gateway approval wait (#8697)`
- `8845f3316` committer `2026-06-22T12:21:37Z` — `fix(security): restrict dashboard plugin backend import to bundled plugins (#43719)` (author date 06-11, but committed/landed 06-22 — in-window by commit)
- `027cb649e` committer `2026-06-22T14:00:42Z` — **`fix(memory): fail closed on unclear write results`**

**A2 — dates in window.** All committer dates fall 2026-06-21..06-23. PASS.

**A3 — is "live in-the-wild campaign" supported by commit text, or harvester
embellishment?** The harvest sentence is **verbatim** in `7726ce304`'s message:

> "Driven by the June 2026 hermes-0day campaign (r/hermesagent, live 854.media
> instance): scanners find exposed Hermes dashboards/API servers, drive the
> root agent to plant a 'command: bash' MCP entry that appends an attacker SSH
> key to authorized_keys, which cron + startup then re-execute every tick."

`f45ace931` reinforces with "the June 2026 MCP-config persistence campaign
victims never had." **However, the ONLY source for "live in the wild" is the
project's own commit narrative** — a Reddit thread (`r/hermesagent`) and a named
"854.media instance" asserted inside the commit body, not independently
corroborated here. The code change (auth-gate fail-closed, MCP persistence
guard, IOC blocklist run at save+spawn) is real and on main; the *attack
mechanism* is well-specified. But the epidemiological claim ("live", "in the
wild", "campaign") rests on a single, self-interested primary source. **The
digest must attribute it as "per the maintainer's own commit" / "the project
says", NOT as independently confirmed in-the-wild exploitation.**

Also flag: `027cb649e` is `fix(memory): fail closed on unclear write results`
— a memory-write hardening, **not** a 0day-persistence mitigation. It is real
and in-window but does not belong in the "hermes-0day campaign" commit cluster;
do not cite it as 0day evidence.

**A4 — channel (all main-unreleased, ahead of v2026.6.19).** `compare
v2026.6.19...<sha>` for all 8 returns `status=ahead, behind_by=0` (v2026.6.19 is
not ahead of any of them → none contained in the tag):
7726ce304 ahead=294; f45ace931 ahead=296; 8fcb8136b ahead=265; 6f0ecf37d
ahead=255; 100e7be20 ahead=402; a9c802598 ahead=247; 8845f3316 ahead=352;
027cb649e ahead=373. All behind=0. **Confirmed main-unreleased.**

## Claim B detail — merge-base containment proof

contained iff `merge_base_commit.sha == <sha>`.

| sha | first line | in v2026.6.19 | in v2026.6.5 |
|---|---|---|---|
| `da28d5d11` | fix(security): gate cp/mv/install into ~/.ssh, credential, and shell-rc files | **YES** (mb==sha) | NO (mb=tag tip 3c231eb) |
| `3380563d9` | fix(security): stop /api/status leaking host paths and PID on gated binds | **YES** | NO |
| `fc4635458` | fix(security): fail closed when an own-policy gateway adapter has no allowlist | **YES** | NO |
| `c66ecf0bc` | feat(delegation): async background subagents via delegate_task(background=true) (#40946) | **YES** | NO |

All four carried into v0.17.0 (v2026.6.19); none in prior tag v2026.6.5. SUPPORTED.

## Claim C detail

`releases/tags/v2026.6.19 → published_at = 2026-06-19T19:39:06Z`, name
"Hermes Agent v0.17.0 (v2026.6.19)". Year 2026, in-window, and confirmed latest
release. SUPPORTED.

## Claim D detail

PR **#45149** `fix(delegation): remove the default subagent wall-clock timeout`
(merged `2026-06-12T19:58:26Z`): "Subagents no longer have a default wall-clock
timeout … `DEFAULT_CHILD_TIMEOUT` 600 → None … default
`delegation.child_timeout_seconds` 600 → 0 (no timeout)." Confirmed.

Refutation sweep of in-window (2026-06-16..06-23) merged delegation PRs found
**no re-added time/cost bound**:
- #46968 (06-16) — only forwards the `background` flag; no cap.
- #49734 (06-20) `background fan-out` — adds parallel fan-out; the only bound is
  "one async-pool **slot** for the whole batch" (a concurrency-slot limit, not a
  wall-clock or cost cap on a productively-busy worker).

**Nuance (for honesty):** #45149's body states stuck-child protection is
"unchanged … handled by the heartbeat staleness monitor … letting the gateway
inactivity timeout fire on a truly wedged worker." So a *progress-stall*
backstop exists. What is gone and not replaced is a **wall-clock bound on a
busy-but-runaway worker**. Digest should say "no wall-clock/cost bound on a
productively-busy background subagent," not "no protection at all." Claim D
SUPPORTED as the governance-gap framing, with that precision.

## Bottom line

Mechanism, commits, dates, channel, and v0.17.0 carry-forward all verified. The
single weak point is the **"live in-the-wild campaign"** epidemiology, which is
single-sourced to the maintainer's own commit. Publish only with attribution
softening (see final message).
