# Is "documented is not enforced" new?

Standing research question for the 2026-07-02..2026-07-27 digest. Method: read
the publication's own archive in chronological order first, then upstream.

---

## The direct answer

**Permanent-but-newly-measured.** Not emerging, and not accelerating.

Three findings carry it, and they should be stated in this order because each
one closes off an easier answer:

1. **The pattern is in the archive's first window.** Gemini CLI `v0.41.0`
   shipped "workspace trust in headless mode" inside the 2026-04-22..2026-05-06
   window. Frontier reported it as a feature
   (`content/digests/2026-04-22_2026-05-06-frontier-rollup.md:102-104`). It was
   a fix: before it, an operator who had configured workspace trust was
   unprotected in exactly the mode CI uses, and the Gemini CLI profile now says
   so plainly -- "If you've been relying on `--non-interactive` to silently skip
   the trust prompt, that path is closed"
   (`content/profiles/gemini-cli.md:195-199`). The pattern was present in issue
   one. The lens was not.

2. **This is the third time it has led a digest, not the first.** The argument
   was already the headline on 2026-06-03 ("The Policy You Wrote Wasn't the
   Policy You Had", whose body section is literally titled *The enforcement
   gap*) and again on 2026-06-23 ("Protected on Paper", section *The authority
   that didn't bind*). The 2026-06-16 issue quoted a Hermes maintainer calling
   an unpaired write-deny "theater." A piece that presents this as a discovery
   is contradicted by its own back catalogue.

3. **Normalized for window length and watchlist size, the rate is flat and this
   window is below the peak.** 3.7 cases per 100 source-days, against 11.7 in
   the 2026-05-28..06-03 window and 7.5 in 2026-06-04..06-16. What is unusual
   about this window is its *size* (350 source-days, more than twice any prior
   window), not its density.

**What is genuinely new is the class of surface, not the frequency.** Through
June, almost every instance was a permission rule inside a running binary that
did not refuse what it said it would refuse. This window adds cases where the
*read surface itself* is the failure: docs that instruct the reader into a
known-vulnerable build, two official surfaces from the same vendor that
contradict each other, a runtime that silently rewrites the operator's policy
file, marketing that sells a component the default branch deleted, and an
advisory channel that fired zero times across twenty-five days and eight
authority-fixing releases. That widening -- from "the rule did not bind" to "the
whole read surface is unreliable" -- is a real escalation in kind, and it is
defensible in a way that "it is happening more often" is not.

**The story is therefore not that this is new. It is that nobody measures it,
because it is only observable retrospectively, through the fix.** You cannot see
an unenforced control while it is unenforced. You see it when a vendor patches it
and says so, and only then if you are reading the fix stream closely enough to
notice that the patch implies a prior gap. The measured rate is a function of
vendor disclosure and harvest depth. It is not a measurement of how often
controls fail to bind, and the piece should not pretend otherwise.

---

## Prior instances in our own archive

Receipts are repo paths into the published record; each digest carries the
primary-source URL on the claim-bearing words. Class codes:

- **A** -- enforcement gap: the rule is in the build you run and the runtime does
  not honor it.
- **B** -- channel gap: the control binds somewhere, but not in the artifact you
  installed.
- **C** -- documentation gap: the read surface describes a runtime that does not
  exist.

Class A is the tight case and is what the counts below use. B and C are listed
where they are load-bearing but are not counted, because Frontier has already
told the B story three times and counting it again would double-count the
archive against itself.

### 2026-04-22..2026-05-06 -- "What Shaped the Run" (14 days, 5 sources)

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| Gemini CLI | Workspace trust did not bind in headless / `--non-interactive` mode until `v0.41.0`. Reported at the time as a feature, not as a fix. | A | `content/digests/2026-04-22_2026-05-06-frontier-rollup.md:102-104`; re-read in `content/profiles/gemini-cli.md:195-199` |

The single most important row in this document. It is the earliest instance and
the publication missed it, which is the evidence that the pattern predates the
lens rather than the lens creating the pattern.

### 2026-04-23..2026-05-07 -- "The Harness Leaves The Chat Box" (14 days, 8 sources)

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| OpenClaw | Allowlists fixed (commit `b6ae0b8`). The digest records the fix without detail, so the prior gap is inferred, not stated. Counted, flagged thin. | A | `content/digests/2026-04-23_2026-05-07-frontier-rollup-expanded.md:116-118` |
| OpenHands | A log that had been recording secrets was deleted. Redaction that was not redacting -- adjacent to the class, not a configured control. Not counted. | -- | `content/digests/2026-04-23_2026-05-07-frontier-rollup-expanded.md:113-115` |

This window was a commit harvest with "diff-level review only on selected
high-signal commits" (its own methods note, line 185-191). The instrument could
barely see this class.

### 2026-05-07..2026-05-12 -- "Governance Becomes Enforcement" (5 days, 9 sources)

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| Hermes Agent | Discord role allowlists were not guild-scoped: a role match from *any* guild authorized a cross-guild DM. CVSS 8.1. The operator's allowlist did not mean what it read. | A | `content/digests/2026-05-12-weekly.md:119-122`; `content/profiles/hermes-agent.md:305` |
| Paperclip | SSH remote execution forwarded the host's environment, including API keys, to remote targets. Isolation that was not isolating. Not counted (leak, not a configured control). | -- | `content/digests/2026-05-12-weekly.md:114-117` |

Note the irony available to the piece: the issue titled *Governance Becomes
Enforcement* contains an allowlist that was not enforcing.

### 2026-05-13..2026-05-27 -- "Auto Stops Asking" (14 days, 10 sources)

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| Claude Code | PowerShell built-in `cd` forms (`cd..`, `cd\`, `cd~`, `X:`) defeated the workspace boundary undetected (fixed 2.1.149). | A | `content/digests/2026-05-13_2026-05-27-weekly.md:95-105` |
| Claude Code | Git-worktree sandbox write allowlist over-scoped to the main repository root instead of the shared `.git` directory (2.1.149). | A | same |
| Claude Code | `forceLoginOrgUUID` / `forceLoginMethod` enforcement gaps against third-party-provider and API-key sessions (2.1.147). A managed enterprise setting that did not bind. | A | same |
| Claude Code | Vertex AI provider bypass (2.1.148). | A | same |
| Codex | `requirements.toml` billed as "enforcement, not advice", with distribution and signing undocumented -- enforceability unverifiable from the receipt. Uncertainty, not an instance. | -- | `content/digests/2026-05-13_2026-05-27-weekly.md:368-372` |

Four Class A cases, all one provider, described in the digest as "a security
advisory the changelog does not flag." Nobody generalized yet.

### 2026-05-28..2026-06-03 -- "The Policy You Wrote Wasn't the Policy You Had" (6 days, 10 sources)

The window the pattern was first named. Its lede: "at least six ways this week,
across six different makers of AI coding agents, that a safety rule turned out
to be advisory." Its body section is titled *The enforcement gap* and states the
signature exactly: "the rule exists, it reads correctly in the config, and it
does nothing. There is no error, no blocked action, no log line."

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| Claude Code | A `Read`-deny rule left the file discoverable and readable through `Glob` and `Grep`. | A | `content/digests/2026-05-28_2026-06-03-weekly.md:112-126` |
| Claude Code | Custom `WebFetch` permission rules failed to override the built-in preapproved-domain whitelist. | A | same |
| Claude Code | Windows permission rules with backslashes or case-variant paths did not match. | A | same |
| Claude Code | An over-broad managed-settings policy blocked legitimate third-party sessions -- the same failure inverted (enforcement wider than declared). | A | `content/digests/2026-05-28_2026-06-03-weekly.md:224-227` |
| Gemini CLI | A blacklisted MCP tool or server could still be invoked. The deny-list did not deny. | A | `content/digests/2026-05-28_2026-06-03-weekly.md:164-171` |
| Gemini CLI | A policy file that failed to save or parse left the agent running under **no policy at all**. Fail-open. | A | `content/digests/2026-05-28_2026-06-03-weekly.md:229-233` |
| Hermes Agent | The Docker dashboard inferred insecure mode from the bind host; a misread host silently dropped authentication. | A | `content/digests/2026-05-28_2026-06-03-weekly.md:173-180` |
| Flue | WebSocket handshake URLs retained the credentials they carried. Not counted (leak). | -- | `content/digests/2026-05-28_2026-06-03-weekly.md:239-241` |

Seven Class A. This is the archive's peak density and it is nine weeks before
the current window.

### 2026-06-04..2026-06-16 -- "Who's Allowed to Say Yes" (12 days, 10 sources)

Operator brief: "nine of ten providers spent the window closing the gap between
the control they had documented and the one their runtime enforced -- a Hermes
maintainer's word for the unenforced kind is 'theater.'" Body section: *The
theater thread*.

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| Hermes Agent | A deny rule blocked redirecting output into `~/.ssh/authorized_keys` and said nothing about `cp`. The maintainer's own commit message calls an unpaired write-deny "theater." | A | `content/digests/2026-06-04_2026-06-16-weekly.md:52-59` |
| Hermes Agent | Own-policy chat adapters (WhatsApp, WeCom) trusted the entire external network when enabled without an allowlist -- "which the project's own security policy already forbade." A written policy the runtime did not implement. | A | `content/digests/2026-06-04_2026-06-16-weekly.md:118-124` |
| Claude Code | Server-level MCP denials were silently ignored inside a subagent's tool restrictions. | A | `content/digests/2026-06-04_2026-06-16-weekly.md:162-164` |
| Claude Code | Org model allowlists were not binding against the default model and env-var overrides until 2.1.175/2.1.176 "finally make an org's model allowlist binding." | A | `content/digests/2026-06-04_2026-06-16-weekly.md:143-146, 263-268` |
| Claude Code | Untrusted project settings could set OTEL client-certificate paths without a trust prompt (2.1.169). | A | `content/digests/2026-06-04_2026-06-16-weekly.md:139-143` |
| Claude Code | Pre-warmed background workers read another directory's `.mcp.json` approvals and trust state (2.1.172). | A | same |
| Paperclip | The review-approval gate matched negated phrasings: a comment reading "NOT APPROVED" could auto-complete an issue. The comment and the status change were not atomic. | A | `content/digests/2026-06-04_2026-06-16-weekly.md:215-218` |
| Paperclip | In `cloud_tenant` auth mode every tenant on a shared pool was silently granted instance-admin. | A | `content/digests/2026-06-04_2026-06-16-weekly.md:126-137` |
| OpenClaw | Exec approvals did not fail closed on timeout: a pending dangerous command that timed out proceeded. | A | `content/digests/2026-06-04_2026-06-16-weekly.md:211-215` |
| OpenHands | `hide_personal_workspaces` is UI-only and the docs say so explicitly: "not an access-control boundary." **The counterexample.** A vendor documenting the gap instead of leaving it to be discovered. | -- | `content/digests/2026-06-04_2026-06-16-weekly.md:180-185`; `content/profiles/openhands.md:356-357` |

Nine Class A. The OpenHands row is worth its own sentence in the piece: it is
the only case in the entire archive where a provider shipped the gap *and named
it*, and it costs the argument nothing to say so.

### 2026-06-16..2026-06-23 -- "Protected on Paper" (7 days, 10 sources)

Lede: "It can be written down -- a permission rule, a depth cap, a documented
guarantee -- without actually being enforced by the code." Body section: *The
authority that didn't bind*. This is the June precedent the brief points at.

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| Claude Code | The five-level nested-subagent depth cap (shipped 2.1.178) did not apply to foreground spawns; a foreground subagent could spawn unbounded nested chains until 2.1.181. | A | `content/digests/2026-06-16_2026-06-23-weekly.md:172-180`; `content/profiles/claude-code.md:149-157, 212-223` |
| Claude Code | `Agent(type)` deny rules and `Agent(x,y)` allowed-types restrictions were not enforced for named subagent spawns until 2.1.186. The profile's word is "cosmetic." | A | same |
| Claude Code | Scheduled-task and webhook trigger inputs could slip an action past auto-mode classification; a trigger delivery was treated as keyboard input and could approve a pending action (2.1.183). | A | `content/digests/2026-06-16_2026-06-23-weekly.md:185-192`; `content/profiles/claude-code.md:234-242` |

Three Class A, plus the window's dominant B story (five of ten providers with
their sharpest work off the release channel). The generalization Frontier drew
here is the one this window is re-drawing: "a permission feature is not a
permission boundary until something refuses the disallowed action, and the only
way to know is to test it."

### 2026-06-23..2026-06-24 -- "Governance, Sold Separately" (1 day, 11 sources)

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| heypi | A misplaced root-level approver block was **silently not binding**; 0.2.0-beta.0 made it fail loudly at startup instead. Config that parsed and did nothing. | A | `content/digests/2026-06-23_2026-06-24-weekly.md:147-149` |
| heypi | The landing page sells approvals; the docs say "approval does not make every tool call require approval," and nothing requires human approval by default. Marketing surface vs runtime. | C | `content/digests/2026-06-23_2026-06-24-weekly.md:110-124` |

### 2026-06-24..2026-07-01 -- "Patched for Whom" (7 days, 12 sources)

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| Hermes Agent | GNU long-flag abbreviations beat the command guard: a rule believed to block `chown --recursive` was defeated by typing `--rec`. Also main-only, so A and B at once. | A | `content/digests/2026-06-24_2026-07-01-weekly.md:144-152` |
| Claude Code | `claude mcp list` / `get` spawned `.mcp.json` servers that a repository self-approves -- inspecting config in an untrusted repo launched a repo-declared server (2.1.196). | A | `content/digests/2026-06-24_2026-07-01-weekly.md:166-172` |
| Codex | PowerShell whose AST regions the classifier could not inspect had been *running*; 0.142.2 gates it behind approval. Uninspectable meant permitted. | A | `content/digests/2026-06-24_2026-07-01-weekly.md:171-174` |
| Antigravity | 1.0.13 made "Always Approve" rule matching strict and non-regex, "closing a class of over-broad approve rules" -- the rules had been matching more than they read. | A | `content/digests/2026-06-24_2026-07-01-weekly.md:114-120` |
| eve | Repaired its HITL approval-resume contract so a plain "approve" reply resolves a pending tool approval. The governance-first vendor's gate was already failing here, one window before this one. | A | `content/digests/2026-06-24_2026-07-01-weekly.md:192-199` |

The eve row matters for the current draft. The session journal frames eve's
non-binding controls as this window's gun going off
(`runs/2026-07-27-.../JOURNAL.md:185-213`). It is a bigger, better-receipted
version of something the archive already had on 2026-07-01, and the earlier eve
profile flagged the same maturity caveat on 2026-06-17: "the 0.11.2 fix shows
the approval surface was still being made airtight during the launch window"
(`content/profiles/eve.md:222-227`). Say "confirmed and deepened," not
"discovered."

### 2026-07-01..2026-07-02 -- "Foreground Attention Is No Longer the Control" (1 day, 14 sources)

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| Gemini CLI | A symbolic-link directory escape in the memory-import processor; the file boundary did not hold. Nightly-only. | A | `content/digests/2026-07-01_2026-07-02-weekly.md:126-131` |
| Agent Flywheel | v0.7.0 "safe mode" does not revoke an existing passwordless-sudo rule, and the shared shell config still defines dangerous Claude and Codex shortcuts. A documented safe mode that is not a boundary. **Not counted.** The publication withdrew Agent Flywheel as a July 2 signal because v0.7.0 shipped June 26, and the source was not on the watchlist during the window that contains its release date. Counting it in either window would distort the series. | -- | `content/profiles/agent-flywheel.md:79-89`; withdrawal at `content/digests/2026-07-01_2026-07-02-weekly.md:148-154` |

### 2026-07-02..2026-07-27 -- current window (25 days, 14 sources)

Drawn from `runs/2026-07-27-weekly-digest-2026-07-02_2026-07-27-frontier-v0/JOURNAL.md`;
each has a primary receipt in the harvest files.

| Provider | The control | Class | Receipt |
| --- | --- | --- | --- |
| Antigravity | Headless `-p` runs did not honor `settings.json` permissions, file access, sandbox mode, auto-execution, or artifact review at all, until 1.1.4. Every configured governance control inert in exactly the mode CI uses. | A | JOURNAL.md:74-78 |
| Antigravity | 1.1.0 made diff-review the default before writes; 1.1.1 let the allowlist bypass it. Hardened and loosened in two days. | A | JOURNAL.md:79-80 |
| Claude Code | `Edit(src/**)` auto-approved a nested `dir/` anywhere in the tree (2.1.214). | A | JOURNAL.md:130-142 |
| Claude Code | Windows PowerShell 5.1 permission bypass (2.1.214). | A | same |
| Claude Code | Bash fd-redirect forms failed open (2.1.214). | A | same |
| Claude Code | Commands over 10,000 characters ran unprompted (2.1.214). | A | same |
| Claude Code | zsh subscripts treated as inert; `help` and `man` auto-approving; remote prompts proceeding before local confirmation; docker/Podman daemon-redirect flags (2.1.214). Grouped as one case. | A | same |
| Claude Code | Remote managed settings from `claude -p` or the SDK were recorded as consented without the consent dialog ever appearing (before 2.1.207). | A | JOURNAL.md:156-158 |
| Claude Code | Worktree and directory isolation leaked three ways in eleven days: git-mutating commands against the main checkout (2.1.210), `git -C` / `--git-dir` / `GIT_DIR` redirection (2.1.216), uncanonicalized symlinked working directories (2.1.217). Grouped as one case. | A | JOURNAL.md:159-163 |
| Codex | `rust-v0.145.0` silently rewrites the operator's exec policy file on first session start, stripping exact `allow` entries from `rules/default.rules`. | A | JOURNAL.md:164-166 |
| eve | A delegation tree guaranteed to "never outspend the budget configured at its root" (0.21.0) let a parent retry a declined child against a fresh quota share for fifteen days (fixed 0.27.1). | A | JOURNAL.md:194-198 |
| eve | Denied approvals rendered as *successful* in the dev TUI (0.26.1). The operator's only window onto the decision displayed its inverse. | A | JOURNAL.md:199-201 |
| eve | Stale approvals could authorize an earlier tool call (0.25.0 states the guarantee as new). | A | JOURNAL.md:202-204 |
| eve | Approving did not run the tool; approvals from channels like Linear left a dangling call (0.24.2). The gate failed open in both directions in one window. | A | JOURNAL.md:205-207 |
| heypi | Omit both `admins` and `approvers` and any actor who can reach the approval UI may respond, with only a startup warning. Non-loopback admin binds were unauthenticated until 2026-07-21. | A | JOURNAL.md:242-245 |
| OpenClaw | `assertSandboxPath` returns SUCCESS while `sub/up/../outside/secret.txt` with `sub/up -> ..` reads a planted sibling file. The check says yes while the escape works. In no release on any channel. | A | JOURNAL.md:362-367 |
| OpenClaw | Channel-allowlist membership treated as global command ownership, permitting owner-gated `/allowlist` and `/config` mutations. Not in stable after 13 days. | A | JOURNAL.md:368-371 |
| Hermes Agent | `approvals.mode: smart` became the default in v2026.7.20, moving the approval decision from a human to a classifier; the circuit breaker, policy override, and detectors built for it are all main-unreleased. The release that flipped the default is the one without the guardrails. | A+B | JOURNAL.md:328-341 |
| OpenHands | Official docs still ship `openhands:1.8` and call it "the most recent stable release," instructing a self-hoster into a build carrying all 21 advisories that 1.9.0 closed. | C | JOURNAL.md:296-306 |
| Antigravity | The 1.1.7 GitHub release body truncates its own changelog item, dropping the clause about ineligible accounts bypassing a check the interactive UI enforces. Two official surfaces disagree. | C | JOURNAL.md:81-83 |
| Gemini CLI | Shipped docs at the v0.52.0 tag still describe consumer auth as live, with a banner in future tense over a month after the service was discontinued. | C | JOURNAL.md:88-89 |
| flue | flueframework.com badges "1.0 Beta" and headlines Workflows; main removed workflows entirely with no compatibility stubs. Plus a telemetry privacy inversion: prompts, tool arguments and results, and exception stacks captured by default. | C | JOURNAL.md:236-239 |
| Claude Code / Codex | Zero security advisories published for either project in 25 days during which eight Claude Code releases fixed authority boundaries. The advisory surface fired zero times while the boundary was repeatedly repaired. | C | JOURNAL.md:150-155 |
| Frontier (us) | `sources/pi-coding-agent.yml` watched an abandoned package name for eleven weeks, so our own source read as static and we missed a fix. Our declared instrument was not our effective instrument. | C | JOURNAL.md:376-388 |
| Frontier (us) | `site/public/_headers` declares CSP, HSTS, X-Frame-Options, Referrer-Policy and Permissions-Policy; the live edge serves none of them, and `static-headers.test.mjs` only asserts the two declaration files agree with each other. | C | JOURNAL.md:40-57 |

**13 Class A cases** after grouping the 2.1.214 bypass batch into two and the
three worktree-isolation leaks into one. Counted per individual bypass it would
be 22, which is the number to avoid using without saying how it was reached.

---

## The rate analysis

### Normalization

Windows differ in length (1 to 25 days) and in watchlist size (5 to 14 sources),
so raw counts are meaningless. The denominator used is **source-days** = elapsed
days (end minus start) x sources harvested. Cases are **Class A only**, counted
from the published digest text, with multi-item release batches grouped into one
case per coherent fix so a provider that ships one big patch is not penalized
against one that ships eight small ones.

Source counts come from the run manifest where it differs from the digest
frontmatter. The 2026-05-13..05-27 digest frontmatter lists 8 sources; its
manifest lists 10 and its body carries provider notes for all 10, so 10 is used.

| Window | Days | Sources | Source-days | Class A | Cases per 100 source-days |
| --- | ---: | ---: | ---: | ---: | ---: |
| 2026-04-22..05-06 | 14 | 5 | 70 | 1 | 1.4 |
| 2026-04-23..05-07 | 14 | 8 | 112 | 1 | 0.9 |
| 2026-05-07..05-12 | 5 | 9 | 45 | 1 | 2.2 |
| 2026-05-13..05-27 | 14 | 10 | 140 | 4 | 2.9 |
| **2026-05-28..06-03** | 6 | 10 | 60 | 7 | **11.7** |
| 2026-06-04..06-16 | 12 | 10 | 120 | 9 | 7.5 |
| 2026-06-16..06-23 | 7 | 10 | 70 | 3 | 4.3 |
| 2026-06-23..06-24 | 1 | 11 | 11 | 1 | 9.1 |
| 2026-06-24..07-01 | 7 | 12 | 84 | 5 | 6.0 |
| 2026-07-01..07-02 | 1 | 14 | 14 | 1 | 7.1 |
| **2026-07-02..07-27** | 25 | 14 | 350 | 13 | **3.7** |

### What the table says

**The rate is not increasing.** It peaked in the 2026-05-28..06-03 window at
11.7 per 100 source-days and this window sits at 3.7, which is **the lowest of
any window since the modern instrument came online on 2026-05-28**, and below
every window in the archive except the two commit-harvest windows of late April.
The current window's absolute count is high because its denominator is huge: 350
source-days, 2.5x the next largest window in the archive.

**The one-day windows are noise.** 2026-06-23..06-24 and 2026-07-01..07-02 have
denominators of 11 and 14 source-days, so a single case is the entire value.
They should not be read as trend and are excluded from any claim about direction.

**Excluding the two one-day briefs, the series from 2026-05-28 is:** 11.7, 7.5,
4.3, 6.0, 3.7. That is flat-to-declining, not accelerating. If anything the
publication is finding proportionally *fewer* of these per unit of surveillance
than it did in early June, which is what you would expect if providers began
auditing their own guardrails after the mid-June "theater" wave -- a reading the
evidence permits but does not establish.

### The second normalization, and why it is the more honest one

Source-days measure how much surface was *available* to observe, not how hard
Frontier looked at it. Normalizing instead by findings harvested:

| Window | Findings | Class A | Share |
| --- | ---: | ---: | ---: |
| 2026-04-22..05-06 | 5 | 1 | 20% |
| 2026-04-23..05-07 | 8 | 1 | 13% |
| 2026-05-07..05-12 | 9 | 1 | 11% |
| 2026-05-13..05-27 | 11 | 4 | 36% |
| 2026-05-28..06-03 | 99 | 7 | 7.1% |
| 2026-06-04..06-16 | 112 | 9 | 8.0% |
| 2026-06-16..06-23 | 86 | 3 | 3.5% |
| 2026-06-23..06-24 | 13 | 1 | 7.7% |
| 2026-06-24..07-01 | 60 | 5 | 8.3% |
| 2026-07-01..07-02 | 23 | 1 | 4.3% |
| 2026-07-02..07-27 | not yet fixed | 13 | -- |

The pre-2026-05-28 shares are unusable -- denominators of 5 to 11 make 36% and
20% arithmetic artifacts. But from 2026-05-28, once the denominator stabilizes in
the 60-112 range, **the share sits in a narrow 3.5% to 8.7% band with no trend.**
Roughly one finding in fifteen is an enforcement gap, and that ratio has held for
two months across four different lead arguments.

---

## The instrumentation caveat, stated plainly

This is the part the piece must not bury, because it is the strongest single
result in this document.

**The measured rate quadrupled in the exact cycle the instrument got roughly
nine times more sensitive, with the watchlist held constant.**

- The 2026-05-13..05-27 run harvested **11 findings** across 10 sources. Its
  method: three parallel-subagent harvest files.
  (`runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/manifest.yml`)
- The 2026-05-28..06-03 run harvested **99 findings** across **the same 10
  sources**. Its method line reads: "multi-agent workflow (background), **85
  agents**; harvest (1 agent/provider, live WebFetch of source-contract
  surfaces)". Its manifest calls it "the first run executed end-to-end as a
  background multi-agent workflow rather than a [manual pipeline]."
  (`runs/2026-06-03-weekly-digest-2026-05-28_2026-06-03-frontier-v0/manifest.yml`)
- The run's own audit says the harvest "ran hot": "100 findings and 63 raw
  signals for a 7-day window (the prior 14-day digest had 11 findings / 14
  signals)."
  (`runs/2026-06-03-weekly-digest-2026-05-28_2026-06-03-frontier-v0/audit.md:7-13`)
- The digest produced by that run is "The Policy You Wrote Wasn't the Policy You
  Had."

Source count: unchanged at 10. Window length: shorter, 6 days against 14. Harvest
depth: up ~9x. Measured rate: up from 2.9 to 11.7 per 100 source-days. **The
variable that moved was the instrument.**

Three further reasons the numbers understate reality in both directions:

1. **The pattern is only observable through the fix.** An unenforced control
   emits nothing -- the June 3 digest says so: "no error, no blocked action, no
   log line." It becomes a data point when a vendor patches it *and* writes a
   changelog entry a reader can recognize as implying a prior gap. Every count
   in this document is therefore a count of *vendor disclosures we noticed*, not
   of controls that failed to bind. The true rate is unknowable from changelogs
   and is certainly higher.

2. **Disclosure practice varies per vendor and is itself part of the story.**
   Claude Code dominates the archive's Class A counts. The straightforward
   reading is not that Anthropic's controls fail more often; it is that Claude
   Code publishes advisory-grade changelog entries in unusual detail while
   others do not, a point the Claude Code profile already makes ("treat
   advisory-shape changelog entries as the de-facto advisory surface; Anthropic
   does not publish a separate one",
   `content/profiles/claude-code.md:284-295`). A provider that ships the same
   bug silently scores zero. **The vendor that discloses most looks worst.** The
   piece should say this outright or it will libel the honest by arithmetic.

3. **The earliest windows used instruments that structurally could not see this
   class.** Window one was an editorial re-run over release notes for 5 sources;
   window two was commit-metadata harvest with "diff-level review only on
   selected high-signal commits." A release-note read sees "we added permission
   profiles." It cannot see "the permission profile does not bind." The zeros and
   ones at the top of the table are measurements of the instrument, not of the
   world.

**The honest sentence for the piece:** we looked harder this window than any
before it -- 25 days, 14 sources, ancestry-resolved channels, source-probed
advisories -- and found more instances in absolute terms and fewer per unit of
surveillance. That is what "we finally measured it" looks like. It is not what
"it is getting worse" looks like.

### One thing that is genuinely new, and one that recurs

**New: the failure moved up the stack, from the rule to the read surface.**
Through June, Class A dominated and Class C was nearly absent. This window Class
C arrives in force: docs pinning a vulnerable image, a release body truncating
its own security clause, marketing selling a deleted subsystem, and an advisory
channel silent through eight authority-fixing releases. Earlier, the config lied
and the docs were fine. Now the docs lie too. That is an escalation in kind and
it is defensible without any claim about frequency.

**Recurring, and worth the piece's sharpest paragraph:** Gemini CLI shipped
"workspace trust in headless mode" in `v0.41.0` in late April, closing a gap
where `--non-interactive` skipped the trust prompt
(`content/profiles/gemini-cli.md:195-199`). Three months later, Antigravity --
Google's closed-source successor to Gemini CLI, the binary consumers were
force-migrated to -- shipped 1.1.4 to fix headless `-p` runs not honoring
`settings.json` permissions, file access, sandbox mode, auto-execution, or
artifact review at all (JOURNAL.md:74-78). **Same vendor lineage, same failure
mode, same mode of operation, one quarter apart, in the replacement product.**
That is the single best piece of evidence that this is structural rather than a
phase the field is passing through, and it is stronger than any rate argument.

---

## Prior art: what this class of problem is already called

Frontier's house rule is to use an existing name rather than invent a synonym.
The search result is more interesting than that: **four separate literatures each
name a different quarter of this problem, and none of them names the whole
thing.** The specific property with no owner is the silence.

### The best-fitting established names

**Incomplete mediation** -- the failure of Saltzer and Schroeder's *complete
mediation* principle, "Every access to every object must be checked for
authority." Codified by MITRE as
[CWE-638, Not Using Complete Mediation](https://cwe.mitre.org/data/definitions/638.html),
with the sharper child
[CWE-424, Improper Protection of Alternate Path](https://cwe.mitre.org/data/definitions/424.html):
"The product does not sufficiently protect all possible paths that a user can
take to access restricted functionality or resources." CWE-424's own worked
example is a tool whose access-control setting "prevents listing hidden
directories but does not prevent direct requests to files in those directories"
-- structurally identical to a `Read`-deny that `Grep` walks around. Primary
source: Saltzer and Schroeder, "The Protection of Information in Computer
Systems," Proc. IEEE 63(9), 1975,
[full text](https://www.cs.virginia.edu/~evans/cs551/saltzer/).
*Covers:* the alternate-path half. *Misses:* the operator's belief, and the
inert-rule cases where the path is mediated but the rule is empty.

**Protection Mechanism Failure, "ignored" branch** --
[CWE-693](https://cwe.mitre.org/data/definitions/693.html) splits into a
*missing* mechanism, an *insufficient* one, and an *ignored* one: available and
in active use within the product, but not applied on some code path. That third
clause is this problem stated by MITRE. *Misses:* it is a Pillar-level weakness,
deliberately too abstract to work as a name, and it is framed attacker-first.

**Vacuity / vacuous satisfaction** -- from formal methods, and the only
literature found that names the *operator misbelief* as the harm. A property
passes vacuously when it is true trivially because its antecedent never fires;
the canonical example is that "every request is eventually followed by an
acknowledgment" is satisfied by a system that never generates a request.
Kupferman and Vardi state the motivation directly: "vacuous satisfaction
misleads users of model-checking into thinking that a system is correct."
Sources:
[Kupferman and Vardi, STTT 4, 2003](https://link.springer.com/article/10.1007/s100090100062);
[Beer, Ben-David, Eisner, Rodeh, FMSD 18(2), 2001](https://link.springer.com/article/10.1023/A:1008779610539).
*Covers:* the correct-but-structurally-inert rule, and the misbelief.
*Misses:* it is about specifications checked against models, not runtimes, so
using it requires stating the analogy.

**Fail-open** -- exact and canonical for precisely one case in our archive, the
Gemini CLI policy file that failed to parse and left the agent running under no
policy at all. [CWE-636, Not Failing Securely](https://cwe.mitre.org/data/definitions/636.html):
the design "requires it to fall back to a state that is less secure than other
options that are available, such as... using the most permissive access control
restrictions." The positive form is Saltzer and Schroeder's *fail-safe
defaults*. Use it as a precise sub-name, not as the name for the class.

### The domain analogue worth citing

**Shadowing anomaly** -- firewall policy analysis has had a four-part taxonomy
for rules that sit in a config and never fire (shadowing, correlation,
generalization, redundancy) since Al-Shaer and Hamed, "Firewall Policy Advisor
for Anomaly Discovery and Rule Editing," IFIP/IEEE IM 2003
([PDF](https://link.springer.com/content/pdf/10.1007/978-0-387-35674-7_2.pdf)).
A shadowed rule is fully overridden by a preceding rule: present, parseable,
silent, dead. Useful to the piece because it proves the problem is old enough to
have a taxonomy. *Misses:* it is scoped to rule ordering inside one working
enforcement engine, not to an enforcement path that does not exist.

### Near misses, and why each one fails

Worth stating in the piece, because a technical reader will reach for at least
two of these.

- **TOCTOU is not this, and Frontier can say so flatly.**
  [CWE-367](https://cwe.mitre.org/data/definitions/367.html) requires a check
  that ran, a window, and a racer who mutates state inside it. Our cases have
  none: the check never runs on the path in question, there is no window, and
  the failure is deterministic on every invocation. Usable phrasing: *TOCTOU is
  a race between a check and a use. Here the check and the use never meet -- not
  because of timing, but because the check was never wired to that path.*
  **One caveat the piece must honor:** the OpenClaw `assertSandboxPath` case in
  this window genuinely does involve a TOCTOU window that maintainers say stays
  open (JOURNAL.md:362-367). Do not use that receipt as the example of "this is
  not TOCTOU." Use `Edit(src/**)` or the `Read`-deny instead.
- **Confused deputy is not this.** Hardy, ACM SIGOPS OSR 22(4), 1988
  ([DOI](https://dl.acm.org/doi/10.1145/54289.871709)) requires a privileged
  intermediary that *is* mediating and is tricked into lending its authority.
  Ours has no deception and no deputy.
- **Configuration drift is not this, and the reason is sharp.** Drift means live
  state diverged from declared state
  ([HashiCorp](https://www.hashicorp.com/en/blog/detecting-and-managing-drift-with-terraform)).
  Ours never converged. Usable phrasing: *drift presumes an initial binding that
  later decayed; here there was never a binding.*
- **Security theater is the wrong axis.** Schneier's term
  ([Beyond Security Theater, 2009](https://www.schneier.com/essays/archives/2009/11/beyond_security_thea.html))
  describes a *visible* countermeasure that is ineffective, aimed at an
  audience's feeling of safety. Ours is invisible and unintentional. Theater is
  a social act; this is an epistemic failure. Note that the Hermes maintainer
  reached for "theater" anyway
  (`content/digests/2026-06-04_2026-06-16-weekly.md:52-59`), which is worth a
  line: the field's own vocabulary is borrowing the nearest available word
  because the right one does not exist.
- **Policy/mechanism separation is the principle being violated, not a name for
  the violation.** Levin, Cohen, Corwin, Pollack and Wulf, SOSP 1975
  ([ACM](https://dl.acm.org/doi/10.1145/800213.806531)). Cite for framing; it
  supplies no term.
- **PDP/PEP gives the cleanest one-line diagnosis and no name.**
  [XACML 3.0](https://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-os-en.html)
  defines the healthy architecture; the pathology is *a policy decision point
  with no policy enforcement point on the path*. Good sentence, not a term.
- **Documentation drift is the wrong half.** Doc rot is docs falling behind
  code. A permission rule is not documentation; it is a program that does not
  run.
- **Audit vocabulary comes surprisingly close.** PCAOB
  [AS 2201](https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201):
  "A deficiency in operation exists when a properly designed control does not
  operate as designed." It fails because it presumes an assessor tested the
  control, and our entire point is that nobody tested it.
- **CWE numbers that do not fit:**
  [CWE-863 Incorrect Authorization](https://cwe.mitre.org/data/definitions/863.html)
  needs a check that ran and ran wrongly;
  [CWE-862 Missing Authorization](https://cwe.mitre.org/data/definitions/862.html)
  describes the absent check but carries none of the "a rule exists and the
  operator believes it covers this" content;
  [CWE-1220](https://cwe.mitre.org/data/definitions/1220.html) is a control that
  is too coarse, not one that does nothing;
  [CWE-807](https://cwe.mitre.org/data/definitions/807.html) is about trusting
  attacker-modifiable inputs.

### The two references a skeptic cannot dismiss

**Kubernetes NetworkPolicy is this exact failure, documented by the platform
vendor, with no name attached.** The official docs state it twice:
"POSTing this to the API server for your cluster will have no effect unless your
chosen networking solution supports network policy," and "Creating a
NetworkPolicy resource without a controller that implements it will have no
effect"
([kubernetes.io](https://kubernetes.io/docs/concepts/services-networking/network-policies/)).
The resource is accepted, validated, stored, and visible in `kubectl get`, and
it enforces nothing. This is the single best reference example for a reader
inclined to treat the problem as agent-specific exotica.

**The industry has a name for this when it is deliberate and no name for it when
it is an accident.** OPA Gatekeeper's `enforcementAction: dryrun` "enables
constraints to be deployed in the cluster without making actual changes," with
violations surfacing only in the constraint status
([Gatekeeper docs](https://open-policy-agent.github.io/gatekeeper/website/docs/violations/)).
`Content-Security-Policy-Report-Only` "accepts the same directives as
Content-Security-Policy but does not enforce them"
([MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only),
[CSP3](https://www.w3.org/TR/CSP3/)). That asymmetry is the sharpest rhetorical
move available to the piece: *dryrun and report-only are the intentional version
of this window's entire argument, and they are named. The accidental version
happens more often and has no name at all.*

### Independent corroboration, three weeks old

Michael and Roesner, "How Agents Ask for Permission: User Permissions for AI
Agents, from Interfaces to Enforcement," July 2026
([arXiv:2607.13718](https://arxiv.org/html/2607.13718v1)), documents the same
class from outside this publication: Claude auto-approving actions despite a
"Needs approval" setting by tagging MCP queries `approvalRequired: false`; Cowork
permissions that cannot be revoked despite a revocation UI; ChatGPT agent mode
assigning no permissions policy to the remote browser at all. It cites Zhang and
Wang's survey of 18 web agents for "a disconnect between 'Interaction-Level'
authorizations selected by users, and the 'System-Level' authorizations that
actually take effect, which are often much broader and more permissive."

**Interaction-Level versus System-Level authorization** is the only term found
aimed squarely at this case. It is weeks old, effectively single-source, and
framed around end-user UI rather than operator config files, so cite it as
corroborating prior art rather than adopting it as the name. Its real value to
the piece is different and larger: **an independent group reached the same
conclusion about the same products in the same month.** That is the strongest
available answer to a reader who suspects Frontier found this pattern because it
went looking for it.

### The finding: there is no name for the composite

Five properties make this problem what it is. It is (a) declared in a control
surface the operator reads, (b) syntactically valid and accepted without
complaint, (c) never consulted on the path it names, (d) **silent** -- no error,
no log line, no signal -- and therefore (e) rationally believed to be live.

Four literatures cover this piecewise and have never been joined. OS security
names the missing check and not the belief. Formal methods names the
inert-but-valid rule and the misbelief, for specifications only. Firewall
analysis names the dead rule, inside one working engine. Audit names the
correctly-designed-but-non-operating control and assumes someone tested it.

**The part with no owner is (d) plus (e): silence as the mechanism by which a
non-binding control acquires the operator's trust.** Every term above names a
control that fails. None names a control that fails *quietly enough to be
believed*. That is a genuine gap in the vocabulary and it is the honest
justification for Frontier using its own phrase.

**Recommended usage for the digest.** Lead in plain English, consistent with
METHOD.md:160-161 ("prefer 'the rule did not block the command' to 'the
authority layer failed to bind'"). Where a technical name is warranted, the
defensible borrow is **"incomplete mediation with a vacuous rule"** -- both
halves citable to primary sources, and together they cover every concrete case
in our archive except the parse-failure one, which is exactly and canonically
**fail-open**. Do not present "enforcement gap" as an established term: it
appears in live use only in vendor glossary content
([example](https://www.deepwatch.com/glossary/security-policy-enforcement/)),
with no primary source and no agreed definition. It is fine as plain English,
which is how the June 3 issue already used it.

Terms checked and found to have no established usage, so they must not be
presented as borrowed: "unenforced invariant," "cosmetic configuration," "ghost
configuration," "paper policy," "no-op policy," "inert policy," "dead rule" as
an access-control term, "specification-implementation gap," "declared vs
effective policy."

---

## What this means for the piece

1. **Do not write "new."** The archive refutes it in three places, one of which
   is the publication's own first issue. Write "third time this has led," and
   let the back catalogue be a credential rather than an embarrassment.

2. **Do not write "accelerating."** Normalized, it is flat-to-declining, and the
   one window that looks like an inflection is the window the instrument
   changed. A publication that reports on unenforced controls cannot afford to
   ship an unfalsifiable trend claim.

3. **Lead with permanence, not novelty.** "This has been true the whole time and
   the field only started measuring it eight weeks ago" is a better story than
   "here is a new problem," because it makes the reader ask what else is true
   the whole time and unmeasured. It also earns the archive: ten issues of
   receipts are the evidence.

4. **The escalation claim that survives scrutiny is about kind, not rate.** The
   read surface itself became unreliable this window. Use the OpenHands docs
   pinning `openhands:1.8`, and Frontier's own two failures (the abandoned Pi
   package name, the declared-but-unserved security headers), as the proof.

5. **Name the disclosure bias before a reader does.** Claude Code carries the
   most Class A rows in this document because Anthropic writes them down. Saying
   so costs one sentence and buys the rest of the argument.

6. **eve is confirmation, not revelation.** The governance-first counterexample
   had a Class A instance on 2026-07-01 and a flagged approval-surface caveat on
   2026-06-17. This window supplies four more and a much better receipt. That is
   a thesis surviving a harder test, which is worth more than a surprise.
