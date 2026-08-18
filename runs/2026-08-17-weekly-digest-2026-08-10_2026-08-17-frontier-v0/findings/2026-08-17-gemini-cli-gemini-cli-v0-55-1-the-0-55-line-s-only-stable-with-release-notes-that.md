---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-gemini-cli-gemini-cli-v0-55-1-the-0-55-line-s-only-stable-with-release-notes-that
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.1
    precision: github_release
---
# 2026-08-17-gemini-cli-gemini-cli-v0-55-1-the-0-55-line-s-only-stable-with-release-notes-that

Gemini CLI v0.55.1  --  the 0.55 line's only stable, with release notes that overstate its contents.

Stable v0.55.1 shipped 2026-08-11 and is npm `latest`. There is no v0.55.0 stable  --  the line's first stable is .1. Genuinely new over v0.54.4 (25 commits): MCP OAuth token refresh repaired (#28481, below); macOS Seatbelt sandbox no longer crashes at startup when the six `.sb` profiles are stripped from a bundle  --  they are now embedded in `sandboxBuiltinProfiles.ts` and written to a randomized temp file, and the `NODE_OPTIONS` argument inside the `sh -c` invocation is now shell-quoted to close an injection path (#28551, commit ac42fb0a24fe7349e9968e2359ef5232f1cb6e72, merged 2026-08-03T19:31Z); Cloud Workstations OAuth redirect URIs resolved dynamically (#28688); the capacity-exhaustion reclassification described separately; and the whole tools/caretaker-agent pipeline. The release body, however, lists roughly 90 PRs because its changelog was generated against v0.49.0-preview.0 rather than the preceding stable  --  most of what it advertises shipped in v0.50.0 through v0.54.4 weeks earlier.

Channel: tagged-release. Ancestry: `gh api repos/google-gemini/gemini-cli/releases/tags/v0.55.1` -> prerelease:false, published_at 2026-08-11T21:15:10Z. No `v0.55.0` appears in `gh api repos/google-gemini/gemini-cli/tags` or in `npm view @google/gemini-cli versions`. Real content delta measured with `git log v0.54.4..v0.55.1` = 25 commits; the release body's Full Changelog link is `compare/v0.49.0-preview.0...v0.55.1`, spanning ~90 PRs.

Operator consequence: Upgrade for the sandbox and MCP OAuth fixes, but read `git log v0.54.4..v0.55.1` rather than the release page to decide what you are actually getting  --  the published notes are not a delta and will make you believe fixes are new when they are a month old. If you gate upgrades on release notes in an automated pipeline, this release is the counterexample that breaks that habit.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.1
