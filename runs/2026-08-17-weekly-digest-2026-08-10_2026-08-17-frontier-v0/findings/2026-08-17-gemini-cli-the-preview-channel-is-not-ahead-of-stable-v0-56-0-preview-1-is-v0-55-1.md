---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-gemini-cli-the-preview-channel-is-not-ahead-of-stable-v0-56-0-preview-1-is-v0-55-1
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-preview.1
    precision: github_release
---
# 2026-08-17-gemini-cli-the-preview-channel-is-not-ahead-of-stable-v0-56-0-preview-1-is-v0-55-1

The preview channel is not ahead of stable  --  v0.56.0-preview.1 is v0.55.1 minus one fix.

v0.56.0-preview.1 was cut 2026-08-11T19:46Z, about 90 minutes before v0.55.1 stable at 21:15Z, from a point on the branch that predates #28688. As a result the 0.56 preview tree contains zero feature commits beyond stable and is missing one OAuth fix that stable has. Six days of main-branch work  --  the git-environment hardening (#28792), the capacity-retry restoration (#28790), the multi-turn rollback (#28801), the IDE directory-mismatch fix (#28729), and all eleven merged SSR-agent PRs  --  are in no preview tag either; `git tag --contains` on each returns empty.

Channel: preview-or-beta. Ancestry: `git log v0.55.1..v0.56.0-preview.1` returns a single commit, 8f0576950 `chore(release): v0.56.0-preview.1`. The reverse, `git log v0.56.0-preview.1..v0.55.1`, returns two: the v0.55.1 release chore and 58ba19945 (#28688, Cloud Workstations OAuth redirect). `git tag --contains 58ba19945` -> v0.55.1 only, not v0.56.0-preview.1. npm dist-tags: preview=0.56.0-preview.1, latest=0.55.1.

Operator consequence: Stop treating `npm i -g @google/gemini-cli@preview` as an early look at what is coming. For the 0.56 line as of 2026-08-17 it gives you strictly less than stable. If you canary against preview to catch regressions before they reach your users, that canary is currently blind: run your probes against the default branch instead, or wait for a preview cut that actually contains post-v0.55.1 commits.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-preview.1
