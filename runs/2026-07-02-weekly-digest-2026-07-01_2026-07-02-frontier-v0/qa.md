# QA -- 2026-07-02 weekly

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
