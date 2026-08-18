---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-openclaw-openclaw-s-extended-stable-moved-to-2026-6-34-in-the-window-and-still
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/compare/v2026.7.1-2...cc027149e553ff4be1afe2ca9cc3de9ccdea6f68
    precision: ancestry_compare
---
# 2026-08-10-openclaw-openclaw-s-extended-stable-moved-to-2026-6-34-in-the-window-and-still

OpenClaw's extended-stable moved to 2026.6.34 in the window and still ships without the workspace-boundary fix; `latest` has not moved since July 18.

Re-fetched pinned, myself: `gh api repos/openclaw/openclaw/compare/v2026.7.1-2...cc027149e553ff4be1afe2ca9cc3de9ccdea6f68` returns {"status":"diverged","ahead_by":7124,"behind_by":224,"total_commits":7124}. "diverged" means cc027149 is not an ancestor of v2026.7.1-2  --  so the receipt proves exactly one thing: the tag v2026.7.1-2 does not contain the fix commit. That is one of the four tags the claim asserts about, and it says nothing about release counts, publication dates, "moved twice," or "21 days." The commit itself is real and is what the claim says it is: `commits/cc027149e553ff...` -> committer date 2026-07-27T07:15:59Z, message "security fix(agents): close symlink-then-.. workspace boundary bypass in assertSandboxPath (#113405)"; PR 113405 merged_at 2026-07-27T07:16:00Z into base main, merge_commit_sha cc027149e553ff4be1afe2ca9cc3de9ccdea6f68.

Channel: tagged-release. Ancestry: gh api repos/openclaw/openclaw/compare/v2026.7.1-2...cc027149e553ff4be1afe2ca9cc3de9ccdea6f68 -> status=diverged, ahead_by=7124, behind_by=224 (fix commit is NOT an ancestor of stable). Same call against v2026.6.34 -> status=diverged, ahead_by=10277, behind_by=332. Against v2026.7.1 -> diverged, ahead_by=7124. Corroborated by content at pinned refs: GET contents/src/agents/sandbox-paths.ts?ref=v2026.7.1-2 and ?ref=v2026.6.34 both return size=9448 with no fs.realpath.native and no assertRawParentWithinRoot; ?ref=v2026.8.1-beta.2 returns size=12291 containing `const realpathNative = promisify(fs.realpath.native)` and `async function assertRawParentWithinRoot`.

Operator consequence: Re-audit, do not upgrade-and-relax. Neither stable npm channel carries the fix, and this is checkable in one command each: `npm view openclaw dist-tags` returns latest=2026.7.1-2 and extended-stable=2026.6.34, and neither published tarball contains `fs.realpath.native` or `assertRawParentWithinRoot` anywhere under dist/  --  only the `beta` tag (2026.8.1-beta.2) does. So `openclaw update` on either stable channel will not bring you PR #113405, and at the validator level the workspace root is still not a containment barrier. Keep agent workspaces on filesystems you would be willing to expose, and do not treat `assertSandboxPath` as the thing standing between an agent and the rest of the host. Note the shape of the gap: v2026.6.34 was cut on 2026-08-04, eight days after the fix merged to main, and still lacks it, because the 6.x line diverged on 2026-06-24  --  later publishing on these lines cannot deliver it. Watch for the first non-prerelease v2026.8.x tag; that is the earliest point the fix can reach a stable channel. As of 2026-08-18 none exists: the newest release of any kind is the prerelease v2026.8.1-beta.2 (2026-08-15), which puts the fix at 21 days beta-only and counting.

Correction note: an earlier draft of this finding overstated the evidence. It was refuted in the run's adversarial receipt pass before publication and the wording above is the corrected form. See qa.md in this run for what was wrong.

## Receipt
- https://github.com/openclaw/openclaw/compare/v2026.7.1-2...cc027149e553ff4be1afe2ca9cc3de9ccdea6f68
