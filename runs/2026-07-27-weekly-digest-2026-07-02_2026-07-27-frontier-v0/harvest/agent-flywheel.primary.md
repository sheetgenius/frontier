---
schema_version: bitter.frontier_harvest.v0
provider: agent-flywheel
label: Agent Flywheel (ACFS)
owner: Jeffrey Emanuel (Dicklesworthstone)
repo: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup
tier: 2
window: 2026-07-02..2026-07-27
run: 2026-07-27-weekly-digest-2026-07-02_2026-07-27-frontier-v0
primary_receipt_surface: tagged releases + tagged docs (per source contract, NOT commits or PRs)
channels_present: [main-unreleased]
window_volume: 0 tags, 0 releases, 67 in-window commits on main (rejected as posture evidence)
---

# Harvest -- agent-flywheel (primary sources)

Quoted text below is reproduced faithfully in wording, with punctuation
normalized to ASCII per house style.

## HEADLINE FINDING

**ACFS shipped no tagged release in the window and is still holding at
`v0.7.0`** (tag object `fbcbbb9523f0e33679bb9e9884695e744b4c8e80`, dereferenced
commit `edaee4f6ceff772d4f56d42eda65b1d659fead73`, tagger date
**2026-06-26T22:45:26Z**, GitHub Release published **2026-06-26T22:46:27Z**) --
six days before this window opened.

- Receipt: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0
- Full tag list verified via `GET /repos/.../git/refs/tags`: v0.1.0 .. v0.7.0,
  nothing newer.

This is a legitimate no-change finding and it is bounded exactly as
`sources/agent-flywheel.yml` requires: weekly change detection for this source is
release- and tag-bounded, and `untagged_main_branch_commits` is **rejected
evidence**. No posture claim below is drawn from an untagged commit.

---

## 1. The released-is-not-merged gap: 73 commits, no tag, one month

**What changed.** Nothing an operator can install. As of `main`
`d652882b6ed6266dfd1b1d4df83e16f870799c91` (2026-07-25T20:34:16Z), main is
**73 commits ahead of `v0.7.0`, 0 behind** -- 67 of them landing inside this
window (2026-07-02 to 2026-07-27) and 6 in the gap between the tag and the window
opening.

The internal `VERSION` file reads `0.7.0` at **both** the tag and main, so ACFS
is not even carrying a pre-release version marker for the accumulated work.

**Receipts (pinned).**
- Divergence: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/compare/v0.7.0...d652882b6ed6266dfd1b1d4df83e16f870799c91
- VERSION at tag: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/VERSION
- VERSION at main: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/d652882b6ed6266dfd1b1d4df83e16f870799c91/VERSION

**Dates.** Tag 2026-06-26; main HEAD 2026-07-25.
**Channel.** main-unreleased (the only channel present this window).

**Operator consequence.** `curl | bash` against ACFS today installs the
2026-06-26 tree; a month of installer, service, and safety work exists only on
main, so an operator's actual environment is defined by v0.7.0 no matter how busy
the repo looks.

## 2. The v0.7.0 safe-mode gap is still open, because no tag closed it

**What changed.** Nothing, and that is the finding. The standing open question in
`sources/agent-flywheel.yml` is whether *the next tag* would "make safe mode gate
the dangerous Claude, Codex, and Antigravity shortcuts, remove ACFS-created
NOPASSWD state when changing modes, and detect provider-supplied passwordless
sudo."

There is no next tag. The v0.7.0 mode boundary recorded in
`sources/agent-flywheel.notes.md` therefore remains what operators run: on a host
without another `NOPASSWD` rule, a safe-mode run skips ACFS's passwordless-sudo
write, but does **not** remove the ACFS sudoers file left by an earlier vibe-mode
run, remove provider-supplied passwordless sudo, or remove the dangerous agent
shortcuts.

**Receipt (pinned).** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0
(v0.7.0 release notes cover update reliability, DCG stack repair, and checksum
provenance -- no mode-boundary change.)

**Date.** 2026-06-26 (last tag); question still open at 2026-07-27.
**Channel.** tagged-release (v0.7.0, pre-window).

**Operator consequence.** A machine that was ever run in vibe mode still carries
ACFS-written passwordless sudo after a later safe-mode run, and there is no
released fix -- switching modes is not a remediation, so the only reliable
rollback remains rebuilding the VPS.

## 3. Current-posture claims on the official site are unchanged and still attributed

**What changed.** Nothing material. Fetched 2026-07-27,
https://agent-flywheel.com/ still states the same lineup and budget the source
contract recorded at intake:

- Lineup: "Claude Code, Codex CLI, and Antigravity CLI", within "30+ modern
  developer tools".
- Budget: Cloud VPS "$40-56/month"; Claude Max "$200/month" (or "$400 for power
  users"); ChatGPT Pro "$200/month"; **"Estimated Monthly Total: $440 -
  $656/month"**.
- Privilege posture, verbatim: **"Passwordless sudo with dangerous flags enabled
  for maximum velocity on throwaway VPS environments."**

**Receipt.** https://agent-flywheel.com/ (official_site, priority 2 surface;
`attributed_official_site_claim_for_current_posture` is accepted evidence for
this source). Fetched 2026-07-27, HTTP 200.

**Date.** 2026-07-27 (fetch date).
**Channel.** n/a (official site, current posture).

**Operator consequence.** The attributed operating budget of $440-656/month is
holding unchanged across the window, and the project continues to state its
passwordless-sudo posture in its own words on the front page -- so the disclosure
is honest, and the "throwaway VPS" framing remains the whole safety argument.

## 4. The license rider is unchanged at the tag

**What changed.** Nothing. The tagged `LICENSE` at `v0.7.0` is still
"**MIT License (with OpenAI/Anthropic Rider)**". The rider defines "Restricted
Parties" as "OpenAI, L.L.C.; Anthropic, PBC; any of their respective Affiliates;
and any person or entity acting directly or indirectly on behalf of, for the
benefit of, or under the direction of any of the foregoing (including any
officer, director, employee, contractor, agent, consultant, service provider, or
representative)" and states that "no rights are granted to any Restricted Party."

**Receipt (pinned).** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/LICENSE

**Date.** 2026-06-26 (tagged text; unchanged through 2026-07-27).
**Channel.** tagged-release (v0.7.0).

**Operator consequence.** Potentially covered operators -- including anyone using
ACFS on behalf of or for the benefit of either named company -- should review the
tagged text and obtain their own legal guidance; Frontier discloses the
restriction without opining on enforceability.

## 5. Receipt-hygiene defect: ACFS's own CHANGELOG never recorded v0.7.0

**What changed.** A documentation-drift observation, verified at two SHAs. The
CHANGELOG has **no `## [v0.7.0]` heading at either the v0.7.0 tag or current
main**. Its `## [Unreleased]` section still compares `v0.6.0...HEAD` and is
annotated:

> 427 commits since v0.6.0 (2026-02-02 through 2026-03-21). Internal version
> bumped to 0.7.0 in `729822e`.

So the changelog describes the v0.7.0 content as unreleased, under a date range
ending 2026-03-21 -- three months before v0.7.0 was actually tagged on 2026-06-26,
and four months before the current main HEAD.

**Receipts (pinned).**
- At the tag: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/CHANGELOG.md
- At main: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/d652882b6ed6266dfd1b1d4df83e16f870799c91/CHANGELOG.md
- Version headings present at both SHAs: `[Unreleased]`, `v0.6.0`, `v0.5.0`,
  `v0.4.0`, `v0.3.0`, `v0.2.0`, `v0.1.0`.

**Date.** Verified 2026-07-27 at both SHAs.
**Channel.** main-unreleased (the drift is on main and at the tag alike).

**Operator consequence.** An operator reconstructing what v0.7.0 contains cannot
use the CHANGELOG -- it says that work is unreleased -- and must read the GitHub
Release notes instead, which is exactly why this source's contract names the tag
and its release, not the changelog, as the receipt surface.

---

## What was deliberately NOT harvested

Per `sources/agent-flywheel.yml`, the following were inspected only to establish
the channel picture above and are **not** used as evidence for any capability,
defaults, security, or cost claim:

- The 67 in-window main-branch commits (`untagged_main_branch_commits`, rejected).
- The CHANGELOG `## [Unreleased]` body's feature list (`acfs agents`,
  `acfs services`, `--only`/`--only-phase`/`--stack-only` flags, Agent Mail as a
  systemd service, and so on). These are real commits on main, but until a tag
  dereferences them they are not a posture claim about ACFS, and citing them
  would be citing a moving `main`.
- The eight related-portfolio repositories (`standing_status:
  context_only_not_weekly_harvest`).

If the next tag lands, that Unreleased body becomes the first thing to
re-harvest, with the safe-mode open question as the lead probe.
