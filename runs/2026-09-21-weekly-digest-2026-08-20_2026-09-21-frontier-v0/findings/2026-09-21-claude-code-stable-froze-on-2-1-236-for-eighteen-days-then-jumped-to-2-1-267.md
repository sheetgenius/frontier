---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-stable-froze-on-2-1-236-for-eighteen-days-then-jumped-to-2-1-267
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/Homebrew/homebrew-cask/commit/67ec5aa16a
    precision: commit
  - url: https://github.com/Homebrew/homebrew-cask/commit/7506a05707
    precision: commit
  - url: https://code.claude.com/docs/en/setup#configure-release-channel
    precision: official_docs
---
# 2026-09-21-claude-code-stable-froze-on-2-1-236-for-eighteen-days-then-jumped-to-2-1-267

The stable channel pointer (downloads.claude.ai/claude-code-releases/stable, which the native installer and the Homebrew claude-code cask both follow) moved to 2.1.236 around 2026-08-28 (cask commit 7506a05707) and did not move again until about 2026-09-15, when it jumped to 2.1.267 (cask commit 67ec5aa16a, patch -version 2.1.236 +version 2.1.267). That skipped 23 npm versions. On 2026-09-15 stable was 27 days behind latest. The setup page still says stable is "typically about one week old" on Wayback captures of 2026-08-25 and 2026-09-18 and on the live page. At window close stable is 2.1.267 and latest is 2.1.278.

Channel: tagged-release (stable pointer, Homebrew cask proxy); docs-only (policy text unchanged). Half: defect.

Operator consequence: Treat stable as a pointer someone moves, not a fixed lag. A stable fleet took the 2.1.257 authority batch, the 2.1.259 MCP allowlist change and the Fable 5.1 default in one hop around 09-15. Stable now contains the 2.1.235 Shift+Tab fix, the 2.1.236 read-deny fixes and the 2.1.238 headersHelper gate. It does not contain anything from 2.1.268 onward. Pin minimumVersion to the fix you need.

## Receipt
- https://github.com/Homebrew/homebrew-cask/commit/67ec5aa16a
- https://github.com/Homebrew/homebrew-cask/commit/7506a05707
- https://code.claude.com/docs/en/setup#configure-release-channel
