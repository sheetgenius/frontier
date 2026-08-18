---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-pi-coding-agent-compaction-failures-now-raise-an-extension-event-on-main-in-no
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/a6b1dbceb1af5bf8a21da0b437ef756ce9fe85e6
    precision: commit
---
# 2026-08-17-pi-coding-agent-compaction-failures-now-raise-an-extension-event-on-main-in-no

Compaction failures now raise an extension event  --  on main, in no tag.

The [Unreleased] section of packages/coding-agent/CHANGELOG.md at main sha 9117326b records: "Added `session_compact_failed` extension events so compaction failures and aborts expose their reason, retry state, source, and error message to handlers (#8175)." Alongside it on main and in no tag: `pi update` no longer treats older registry versions as available updates, which had let it downgrade an already-newer installed package (#8226, commit 080932e53cb6f82076b111efc424845e4d5c1902); root-level `README.md` and `AGENTS.md` in a skill directory are no longer misread as broken skills and no longer emit warnings (#8012, commit 8c2529daebe0eac5aecb54424b607b4c88d55e15); `pi.registerFlag()` no longer accepts default values that mismatch the declared flag type (#8064); and compaction routing sessions landed as commit 58302d34e703e0453ea13bdd10c7e423589ce177 without a changelog line at time of writing.

Channel: main-unreleased. Ancestry: Commit a6b1dbceb1af5bf8a21da0b437ef756ce9fe85e6 ("fix(extensions): emit compaction failed for extensions (#8241)", authored 2026-08-17T11:10:08Z). `gh api repos/earendil-works/pi/compare/v0.84.2...a6b1dbce` returned status=ahead, ahead_by=22  --  the commit is AHEAD of the newest tag, therefore in no tag. It is reachable from the default branch: `gh api repos/earendil-works/pi -q .default_branch` returns `main`, and the commit appears in `gh api repos/earendil-works/pi/compare/v0.84.2...main`. The CHANGELOG at main sha 9117326b lists it under [Unreleased], not under any released version.

Operator consequence: Watch; do not plan around it yet. None of this is installable  --  `npm dist-tags` for @earendil-works/pi-coding-agent still points `latest` at 0.84.2, published 2026-08-14. The `session_compact_failed` event is the one to track if you build extensions: today a compaction failure is silent to your handlers, so an extension that maintains its own view of session state has no way to know the context was not compacted and why. When it ships, that becomes observable. The `pi update` downgrade bug is the practical one  --  if you installed a version newer than the registry's and ran `pi update`, it moved you backwards.

## Receipt
- https://github.com/earendil-works/pi/commit/a6b1dbceb1af5bf8a21da0b437ef756ce9fe85e6
