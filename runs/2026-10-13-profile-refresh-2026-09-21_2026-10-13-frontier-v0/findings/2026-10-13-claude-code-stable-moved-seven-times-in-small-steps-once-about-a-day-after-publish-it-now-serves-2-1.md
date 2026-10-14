---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-stable-moved-seven-times-in-small-steps-once-about-a-day-after-publish-it-now-serves-2-1
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Homebrew/homebrew-cask/commit/b2aae8bf47
    precision: commit
  - url: https://github.com/Homebrew/homebrew-cask/commit/a1326862d9
    precision: commit
  - url: https://code.claude.com/docs/en/setup#configure-release-channel
    precision: official_docs
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.296
    precision: github_release
  - url: https://registry.npmjs.org/@anthropic-ai%2fclaude-code
    precision: official_docs
---
# 2026-10-13-claude-code-stable-moved-seven-times-in-small-steps-once-about-a-day-after-publish-it-now-serves-2-1

Stable moved seven times in small steps, once about a day after publish; it now serves 2.1.287. Stable stopped behaving like the parent window's freeze-and-jump pointer: it moved seven times in 16 days, one to six versions at a time, and six of the seven promotions came 7.2 to 10.1 days after npm publish, which matches the documented "about one week old". The exception: 2.1.285 reached stable about 26 hours after publish, replacing 2.1.280 after one day, and it carried the auto-mode starting-mode changes, the OS-denied managed-settings exception and `allowedProviders`. 2.1.278, the server-side classifier default, was never a stable build; stable got that default with 2.1.280 on 2026-09-29. At the 2026-10-13 observation stable serves 2.1.287, with mods on by default, while latest and next serve 2.1.296. Npm, native vendor pointers and Homebrew agree. All 17 in-window GitHub releases are non-prerelease; there is no separate preview or beta channel. Stable lacks 2.1.288 through 2.1.296. The native installer defaults to latest; npm installs as `npm install -g @anthropic-ai/claude-code`, and Homebrew casks `claude-code` and `claude-code@latest` select stable and latest respectively.

Channel: tagged-release (the stable-channel pointer); docs-only (channel wording). Half: both. Date: 2026-09-23 to 2026-10-09.

Operator consequence: Stable is now roughly a one-week lag with fast-tracks, not a guaranteed soak: a build that changed the starting permission mode reached it in a day. Keep `minimumVersion` or managed `requiredMinimumVersion` pinned to the fix you need, and read the changelog of the build stable moves to, not the one a week back. The apt stable index records which builds stable served; pool upload times and Homebrew bumps bound approximate promotion times rather than proving an exact dist-tag history. Use both when dating exposure windows.

## Receipt
- https://github.com/Homebrew/homebrew-cask/commit/b2aae8bf47
- https://github.com/Homebrew/homebrew-cask/commit/a1326862d9
- https://code.claude.com/docs/en/setup#configure-release-channel
- https://github.com/anthropics/claude-code/releases/tag/v2.1.296
- https://registry.npmjs.org/@anthropic-ai%2fclaude-code
