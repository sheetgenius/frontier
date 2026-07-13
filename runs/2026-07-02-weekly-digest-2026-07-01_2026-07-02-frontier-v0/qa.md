# QA -- 2026-07-02 weekly

> **Correction, 2026-07-12:** The original pass statements below are the run's
> contemporaneous record, not the current verdict. The date check failed to
> distinguish source intake from an upstream event, the safe-mode claim was too
> broad, and the arXiv comparison mixed two tables. A second pass also established
> that safe mode skips an ACFS sudoers write rather than revoking passwordless
> sudo, scoped the paper to an individual account rather than sole authorship or
> Flywheel causality, and added the tagged license rider. The Agent Flywheel item is
> withdrawn from the signal count. Corrected state: 4 accepted signals, 23
> findings, plus 1 preserved withdrawal record. See the dated correction audit
> at the end of this file.

## Editorial checks

- Claim receipts: pass. Public claims in digest/profile are tied to tag, release,
  commit, canonical advisory, or arXiv record receipts.
- Signal consequence: pass. Five signals all include an operator action or watch
  decision.
- Released is not merged: pass. Channels are called as tagged-release,
  preview-or-beta, main-unreleased, or pinned-changelog-only.
- Channel by ancestry: pass. Antigravity 1.0.15/1.0.16 were not treated as tags
  after release URLs failed.
- Dates verified to year: pass.
- Signals rarer than findings: pass, 5 signals / 22 findings.
- Exemplar bar: pass. Lede starts with a receipted event and cost; digest avoids
  release-note paraphrase as the organizing shape; operator brief thesis is three
  sentences.
- House style: pass. ASCII-only check passed for new digest, profile, findings,
  signals, and run notes.
- CVE/GHSA handling: pass. OpenHands `CVE-2026-44681` states vulnerability class,
  operator impact, and links NVD/GHSA.
- Product separation: pass. Bitter's own product is not used as an analytic
  subject.

## Validation

- `node site/scripts/check-integrity.mjs`: clean on first run.
- `npm --prefix site run build`: first run failed because the scaffolded
  `manifest.yml` was still empty and the site route generator expected `window`.
  Manifest was populated and the command was rerun.
- `node site/scripts/check-integrity.mjs`: final rerun clean. Output: 334 findings
  indexed, 151 signals indexed, 14 watchlist sources, 3 adjacent (3 referenced).
- `npm --prefix site run build`: final rerun clean. Output: 899 pages built,
  link-graph clean, 176 OG cards generated.

## Correction audit -- 2026-07-12

- Window truth: corrected. Agent Flywheel artifacts now identify `v0.7.0`
  (2026-06-26) as an intake baseline and the paper (2026-06-05) as intake
  context. The item is not counted as a July 1-2 signal.
- Safe-mode behavior: corrected against the tagged installer, provider example,
  shared zsh file, and locked Antigravity wrapper. A safe-mode run skips ACFS's
  `NOPASSWD` write on that run; it does not revoke an earlier ACFS rule, a
  provider rule, or the dangerous shortcuts.
- Paper comparison: corrected to the like-for-like top-35 figure counts, 110 for
  `dicklesworthstone` and 97 for Microsoft, linked to the pinned arXiv v1 source
  bundle. The finding now says individual account and disclaims sole authorship,
  outcome quality, and Flywheel causality.
- License: the tagged OpenAI/Anthropic rider is now a finding and operator
  question. Guidance is neutral: potentially covered operators should read the
  text and obtain their own legal advice.
- Source contract: the installed Rust Agent Mail repository replaces the legacy
  Python repository in the dated study set; attributed project budget claims and
  contextual primary research are now explicitly allowed evidence types.
- Fairness and synthesis: corrected profile leads with the operating method and
  its replaceable-agent architecture; the authority critique remains as a
  documented tradeoff.
- Public record: withdrawn signal URL retained with an explicit notice and a
  link to the corrected profile.
- Corrected-state integrity rerun: clean with 335 findings, 151 signal records
  (150 accepted and 1 withdrawn), 14 watchlist sources, and 3 adjacent sources
  (3 referenced).
- A post-correction build attempt collided with another agent's concurrent
  generated-output build and failed on a missing transient `.prerender` chunk.
  The coordinator is running the required uncontended final build; no clean
  page or OG-card count is claimed here yet. The prior 8 rendered smoke tests
  remain the last recorded smoke result.
