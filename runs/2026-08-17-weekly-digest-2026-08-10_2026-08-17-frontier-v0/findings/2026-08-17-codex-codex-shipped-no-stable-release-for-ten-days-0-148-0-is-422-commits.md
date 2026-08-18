---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-codex-codex-shipped-no-stable-release-for-ten-days-0-148-0-is-422-commits
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21
    precision: github_release
---
# 2026-08-17-codex-codex-shipped-no-stable-release-for-ten-days-0-148-0-is-422-commits

Codex shipped no stable release for ten days: 0.148.0 is 422 commits deep and still alpha-only.

The linked receipt (https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21) resolves, HTTP 200. `gh api repos/openai/codex/releases/tags/rust-v0.148.0-alpha.21` returns, in full: {"tag":"rust-v0.148.0-alpha.21","name":"0.148.0-alpha.21","prerelease":true,"published_at":"2026-08-17T19:27:11Z","body":"Release 0.148.0-alpha.21\n\n","assets":160}. That is the entire release body  --  one line. So the receipt page proves exactly three things: the tag exists, it is flagged prerelease=true, and it was cut 2026-08-17. It says nothing about 422 commits, nothing about a ten-day stable drought, and nothing about npm. Those come from the separately cited API calls, not the receipt.

I reproduced each of those calls independently and they all hold:
- `gh api repos/openai/codex/releases --paginate` (992 releases): most recent prerelease=false is rust-v0.147.0 at 2026-08-07T01:41:49Z; next stables below it are rust-v0.146.1 (2026-08-05) and rust-v0.146.0 (2026-07-29). Every single release published after 2026-08-07T01:41:49Z is prerelease=true. Nothing new as of 2026-08-18T07:04Z.
- `gh api repos/openai/codex/compare/rust-v0.147.0...rust-v0.148.0-alpha.21` -> {"total_commits":422,"ahead_by":422,"behind_by":1,"status":"diverged"}.
- Committer dates of those 422 commits: exactly 324 fall on or after 2026-08-10.
- npm registry @openai/codex dist-tags: latest=0.147.0 (published 2026-08-07T01:47:21.081Z, unmoved), alpha=0.148.0-alpha.21.
- `git/matching-refs/tags/rust-v0.148.0` returns 21 tags, alpha.1 through alpha.21 with no gaps.
- No stable tag of any kind exists above rust-v0.147.0: matching-refs shows no rust-v0.148.0 and no rust-v0.149.x, alpha or otherwise.

Channel: preview-or-beta. Ancestry: gh api repos/openai/codex/releases --paginate shows the last prerelease=false release is rust-v0.147.0 at 2026-08-07T01:41:49Z. Every release after it is prerelease=true: rust-v0.148.0-alpha.1 (2026-08-07) through rust-v0.148.0-alpha.21 (2026-08-17T19:27:11Z), plus rust-v0.147.0-alpha.6.6 (2026-08-10). gh api repos/openai/codex/compare/rust-v0.147.0...rust-v0.148.0-alpha.21 reports total_commits=422. npm dist-tags confirm latest=0.147.0 and alpha=0.148.0-alpha.21.

Operator consequence: The default install path has been frozen since 2026-08-07. `npm i @openai/codex` still resolves to 0.147.0, and 422 commits  --  324 of them from 2026-08-10 onward  --  have piled up on an unreleased 0.148.0 line. The work is not invisible: nineteen alpha builds shipped to GitHub Releases and to npm's `alpha` dist-tag, so `npm i @openai/codex@alpha` gets you the tip. But nobody lands there by default, and nobody should assume a colleague on "Codex" is running it. This sharpens the read on Codex's cadence: the repo moves every few hours, alphas cut every day or two, and the stable artifact moves roughly weekly  --  except this window, when it did not move at all. Two practical consequences. Benchmarks and writeups drawn from the default branch this fortnight describe an alpha, not what a default install runs, and should say so. And when 0.148.0 finally cuts, it carries a 422-commit diff  --  treat it as a major upgrade with a real regression pass, not a point release.

Correction note: an earlier draft of this finding overstated the evidence. It was refuted in the run's adversarial receipt pass before publication and the wording above is the corrected form. See qa.md in this run for what was wrong.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21
